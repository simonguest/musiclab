export let playSample = {
    init: function () {
        this.appendDummyInput()
            .appendField("Play Sample");
        this.appendValueInput("SAMPLE")
            .setCheck(null);
        this.appendValueInput("OFFSET")
            .setCheck("Number")
            .appendField("Offset");
        this.setInputsInline(true);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip("");
        this.setHelpUrl("");
    },

    transpile: function (block) {
        let sample = Blockly.JavaScript.valueToCode(block, 'SAMPLE', Blockly.JavaScript.ORDER_NONE);
        let offset = Blockly.JavaScript.valueToCode(block, 'OFFSET', Blockly.JavaScript.ORDER_NONE);
        let code = `playSample(context, samples, ${sample}, ${offset});`;
        return code;
    }
};