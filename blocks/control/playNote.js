import {notes} from "../../notes.js"

import {NoteField} from "../../fields/note.js";

export let playNote = {
    init: function () {
        this.appendValueInput("DURATION")
            .setCheck("Number")
            .appendField("Play Note")
            .appendField(new NoteField('48'), 'NOTE')
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
        let noteIndex = block.getFieldValue('NOTE');
        let duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_NONE);
        let freq = notes[noteIndex][1];
        return `var beatDuration = 60 / options.bpm; playNote(context, { freq: ${freq}}, ${duration} * beatDuration, options, "${block.id}");`;
    }
};