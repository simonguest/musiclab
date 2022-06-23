import {notes} from "../../notes.js"

import {ChordField} from "../../fields/chord.js";

export let playChord = {
    init: function () {
        this.appendValueInput("DURATION")
            .setCheck("Number")
            .appendField("Play Chord")
            .appendField(new ChordField([48, 52, 55]), 'CHORD')
            .appendField("for");
        this.appendDummyInput()
            .appendField("beats");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    },

    transpile: function (block) {
        let chord = block.getFieldValue('CHORD');
        let freqs = chord.map(c => { return { freq: notes[c][1]}});
        let duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_NONE);
        return `var beatDuration = 60 / options.bpm; playChord(context, ${JSON.stringify(freqs)}, ${duration} * beatDuration, options, "${block.id}");`;
    }
};