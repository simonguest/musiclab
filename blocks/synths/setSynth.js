export let setSynth = {
    init: function () {
        this.appendValueInput("SYNTH")
            .setCheck(null)
            .appendField("Set Synth");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    },

    transpile: function (block) {
        let synth = Blockly.JavaScript.valueToCode(block, 'SYNTH', Blockly.JavaScript.ORDER_NONE);
        let code = `options.synth = ${synth};`;
        return code;
    }
};