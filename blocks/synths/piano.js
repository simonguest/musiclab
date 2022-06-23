export let piano = {
    init: function() {
        this.appendDummyInput()
            .appendField("Piano");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },

    transpile: function (block) {
        return ["{ wave: 'triangle', adsr: { attackLevel: 0.8, attackDuration: 0.01, decayLevel: 0.35, decayDuration: 0.1, sustainDuration: 0.1, releaseDuration: 0.2} }", Blockly.JavaScript.ORDER_NONE];
    }
};