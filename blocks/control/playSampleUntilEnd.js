export let playSampleUntilEnd = {
    init: function () {
        this.appendDummyInput()
            .appendField("Play Sample");
        this.appendValueInput("SAMPLE")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("until end");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    },

    transpile: function (block) {
        let sample = Blockly.JavaScript.valueToCode(block, 'SAMPLE', Blockly.JavaScript.ORDER_NONE);
        let code = `var duration = playSample(context, samples, ${sample}, options, "${block.id}"); sleep(context, duration, options, null);`;
        return code;
    }
};