import { notes } from "../../notes.js";

export let playNoteUntilEnd = {
    init: function () {
        this.appendValueInput("DURATION")
            .setCheck("Number")
            .appendField("Play Note")
            .appendField(new Blockly.FieldDropdown(notes), "NOTE")
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
        let note = block.getFieldValue('NOTE');
        let duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_NONE);
        let code = `var beatDuration = 60 / options.bpm; playNote(context, ${note}, ${duration} * beatDuration, options, "${block.id}"); sleep(context, ${duration} * beatDuration, options, "${block.id}");`;
        return code;
    }
};