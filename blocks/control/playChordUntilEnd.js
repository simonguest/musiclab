import {notes} from "../../notes.js"

import {ChordField} from "../../fields/chord.js";

export let playChordUntilEnd = {
    init: function () {
        this.appendValueInput("DURATION")
            .setCheck("Number")
            .appendField("Play Chord")
            .appendField(new ChordField([48, 52, 55]), 'CHORD')
            .appendField(new Blockly.FieldDropdown([["All At Once","all"], ["Arpeggio Up","up"], ["Arpeggio Down","down"], ["Arpeggio Random","random"]]), "ARPEGGIO")
            .appendField("for");
        this.appendDummyInput()
            .appendField("beats until end");
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
        let arpeggio = block.getFieldValue('ARPEGGIO');
        return `var beatDuration = 60 / options.bpm; options.arpeggio = "${arpeggio}"; playChord(context, ${JSON.stringify(freqs)}, ${duration} * beatDuration, options, "${block.id}"); sleep(context, ${duration} * beatDuration, options, "${block.id}");`;
    }
};