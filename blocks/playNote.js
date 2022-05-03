export let playNote = {
    init: function () {
        this.appendValueInput("NOTE")
            .setCheck("Number")
            .appendField("Play Note");
        this.appendValueInput("DURATION")
            .setCheck(null)
            .appendField("Duration");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },

    transpile: function (block) {
        let note = Blockly.JavaScript.valueToCode(block, 'NOTE', Blockly.JavaScript.ORDER_NONE);
        let duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_NONE);
        let code = `var timeIndex = timeIndex || 0; playNote(context, ${note}, timeIndex, ${duration}); timeIndex += ${duration};`;
        return code;
    }
};