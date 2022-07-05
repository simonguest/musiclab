import {notes} from "./notes.js";

const convertToUnitInterval = (value) => {
    // Convert value to fixed point between 0 and 1 for the WebAudio API
    value = Math.abs(value);
    if (value > 100) value = 100;
    return value / 100;
}

const highlightBlock = (id) => {
    document.evaluate(`//*[@data-id='${id}']`, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.classList.add("blocklySelected")
}

const removeHighlight = (id) => {
    document.evaluate(`//*[@data-id='${id}']`, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.classList.remove("blocklySelected")
}

const buildGainNodeFromEnvelope = (context, options) => {
    let volume = options.volume || 100;
    const DEFAULT_SYNTH = {
        wave: "triangle",
        adsr: {
            attackLevel: 0.8,
            attackDuration: 0.01,
            decayLevel: 0.35,
            decayDuration: 0.1,
            sustainDuration: 0.1,
            releaseDuration: 0.3
        }
    }
    let synth = options.synth || DEFAULT_SYNTH;
    let attackLevel = synth.adsr.attackLevel * (volume / 100);
    let attackDuration = synth.adsr.attackDuration;
    let decayLevel = synth.adsr.decayLevel * (volume / 100);
    let decayDuration = synth.adsr.decayDuration;
    let sustainDuration = synth.adsr.sustainDuration;
    let releaseDuration = synth.adsr.releaseDuration;
    let totalDuration = 0;

    let gainNode = context.createGain();
    gainNode.gain.setValueAtTime(0, 0 + context.currentTime + options.offset);
    totalDuration += attackDuration;
    gainNode.gain.linearRampToValueAtTime(attackLevel, totalDuration + context.currentTime + options.offset);
    totalDuration += decayDuration;
    gainNode.gain.linearRampToValueAtTime(decayLevel, totalDuration + context.currentTime + options.offset);
    totalDuration += sustainDuration;
    gainNode.gain.setValueAtTime(decayLevel, totalDuration + context.currentTime + options.offset);
    totalDuration += releaseDuration;
    gainNode.gain.linearRampToValueAtTime(0, totalDuration + context.currentTime + options.offset);

    return {gainNode: gainNode, duration: totalDuration};
}

const buildNodeTree = (context, sourceNode, duration, options, blockid, cb) => {
    let volume = options.volume || 100;
    let filter = options.filter || 100;
    let offset = options.offset || 0;

    // highlight the active block
    // null src is an empty source used to highlight the block
    // (to compensate as there is no onStart event handler in WebAudio AudioBufferSourceNode )
    let nullSource = context.createBufferSource();

    if (blockid) {
        sourceNode.onended = () => {
            removeHighlight(blockid);
        }

        nullSource.connect(context.destination);
        nullSource.buffer = context.createBuffer(1, 1, 10000);
        nullSource.onended = () => {
            highlightBlock(blockid);
        }
    }

    // return callback if requested
    if (cb){
        sourceNode.onended = () => {
            cb();
        }
    }



    // Build the tree backwards, starting with the gain node for volume
    let gainNode;
    if (sourceNode.buffer) {
        // gainnode should be constant level to playback the buffer
        gainNode = context.createGain();
        gainNode.gain.value = convertToUnitInterval(volume)
    } else {
        // gainnode should follow the ADSR envelope defined in the synth
        let output = buildGainNodeFromEnvelope(context, options);
        gainNode = output.gainNode;
        if (output.duration > duration) duration = output.duration;
    }
    gainNode.connect(context.destination);

    // Add the filter node
    let filterNode = context.createBiquadFilter();
    filterNode.frequency.value = 44000;
    if (sourceNode.buffer) {
        filterNode.type = "lowpass";
        filterNode.frequency.value = (sourceNode.buffer.sampleRate / 4) * convertToUnitInterval(filter);
    }
    filterNode.connect(gainNode);
    sourceNode.connect(filterNode);

    // start the source and null source
    sourceNode.start(offset + context.currentTime);
    nullSource.start(offset + context.currentTime);
    if (duration) {
        sourceNode.stop(context.currentTime + offset + duration);
    }

}

export const playSample = (context, samples, name, options, blockid) => {
    let src = context.createBufferSource();
    src.buffer = samples.get(name);
    src.playbackRate.value = options.pitch || 1;

    buildNodeTree(context, src, null, options, blockid);

    return src.buffer.duration; // used for play sample until end block
}

export const playNote = (context, note, duration, options, blockid) => {
    let osc = context.createOscillator();
    osc.type = "triangle";
    if (options.synth) {
        osc.type = options.synth.wave;
    }
    if (note.freq) {
        osc.frequency.value = note.freq;
    }
    if (note.key) {
        osc.frequency.value = notes[note.key + 8][1]; //offset for an 88 key piano
    }

    buildNodeTree(context, osc, duration, options, blockid);
}

export const playChord = (context, notes, duration, options, blockid) => {
    switch (options.arpeggio) {
        case "all":
            notes.forEach(note => playNote(context, note, duration, options, blockid));
            break;
        case "up":
            notes.forEach(note => {
                playNote(context, note, duration / notes.length, options);
                sleep(context, duration / notes.length, options);
            });
            options.offset -= duration;
            break;
        case "down":
            notes.reverse().forEach(note => {
                playNote(context, note, duration / notes.length, options);
                sleep(context, duration / notes.length, options);
            });
            options.offset -= duration;
            break;
        case "random":
            let randomNotes = notes.map(value => ({value, sort: Math.random()}))
                .sort((a, b) => a.sort - b.sort)
                .map(({value}) => value);
            randomNotes.forEach(note => {
                playNote(context, note, duration / notes.length, options);
                sleep(context, duration / notes.length, options);
            });
            options.offset -= duration;
            break;
        default:
            notes.forEach(note => playNote(context, note, duration, options));
    }

}

export const sleep = (context, duration, options, blockid, cb) => {
    // Create a blank sleep source at 10Khz
    let sleepSource = context.createBufferSource();
    sleepSource.connect(context.destination);
    sleepSource.buffer = context.createBuffer(1, duration * 10000, 10000);

    buildNodeTree(context, sleepSource, duration, options, blockid, cb);
    options.offset += duration;
}

export const onPlaybackCompleted = (context, options, cb) => {
    sleep(context, 1, options, null, cb);
}