export let playPianoKey = {
    init: function () {
        this.appendValueInput("KEY")
            .setCheck("Number")
            .appendField("Play Piano Key");
        this.appendValueInput("DURATION")
            .setCheck("Number")
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
        let key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_NONE);
        let duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_NONE);

        if (key < 1) key = 1;
        if (key > 88) key = 88;

        let code = `var beatDuration = 60 / options.bpm; playNote(context, { key: ${key}}, ${duration} * beatDuration, options, "${block.id}");`;
        return code;
    }
};
