export let sleepSeconds = {
    init: function () {
        this.appendValueInput("DURATION")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Sleep for")
        this.appendDummyInput()
            .appendField("seconds");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    },

    transpile: function (block) {
        var duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_NONE);
        return `sleep(context, ${duration}, options, "${block.id}");`;

    }
};