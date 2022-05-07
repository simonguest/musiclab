export let sleepBeats = {
    init: function () {
        this.appendValueInput("DURATION")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Sleep for")
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
        var duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_NONE);
        return `var options = typeof options !== 'undefined' ? options : { }; options.bpm = options.bpm ? options.bpm : 100; var beatDuration = 60 / options.bpm; options.offset = (options.offset ? options.offset : 0) + (${duration} * beatDuration);`;
    }
};