const loadFile = async (filename) => {
    const response = await fetch(filename);
    if (!response.ok) {
        console.error(`HTTP Error: ${response.status}`);
    }
    return await response.arrayBuffer();
}

export const loadSamples = async (audioContext, samples, filenames) => {
    return new Promise(async (resolve) => {
        for (let f = 0; f < filenames.length; f++) {
            if (!samples.get(filenames[f])) {
                let buffer = await loadFile(`./samples/${filenames[f]}.wav`);
                let decodedBuffer = await audioContext.decodeAudioData(buffer);
                samples.set(filenames[f], decodedBuffer);
                console.log(`Loaded audio sample ${filenames[f]}`);
            }
        }
        resolve(samples);
    });
}

export const findSamplesInWorkspace = (workspace) => {
    let sampleFilesRe = /"SAMPLE_FILE".?:.?"(?<filename>.*?)"/mg
    let matches = [];
    let match = sampleFilesRe.exec(workspace);
    do {
        if (match) matches.push(match.groups.filename);
    } while ((match = sampleFilesRe.exec(workspace)) !== null)
    return [...new Set(matches)];
}