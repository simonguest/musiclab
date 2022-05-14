export let pluck = {
    init: function() {
        this.appendDummyInput()
            .appendField("Pluck");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },

    transpile: function (block) {
        return ["{ wave: 'square', adsr: { attackLevel: 0.8, attackDuration: 0.01, decayLevel: 0.1, decayDuration: 0.1, sustainDuration: 0.1, releaseDuration: 0.3} }", Blockly.JavaScript.ORDER_NONE];
    }
};