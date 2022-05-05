export let playSample = {
    init: function () {
        this.appendDummyInput()
            .appendField("Play Sample");
        this.appendValueInput("SAMPLE")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip("");
        this.setHelpUrl("");
    },

    transpile: function (block) {
        let sample = Blockly.JavaScript.valueToCode(block, 'SAMPLE', Blockly.JavaScript.ORDER_NONE);
        let code = `var timeIndex = timeIndex !== 'undefined' ? timeIndex : 0; var volume = volume !== 'undefined' ? volume : 100; playSample(context, samples, ${sample}, timeIndex, volume);`;
        return code;
    }
};