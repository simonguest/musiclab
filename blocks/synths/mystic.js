export let mystic = {
    init: function() {
        this.appendDummyInput()
            .appendField("Mystic");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },

    transpile: function (block) {
        return ["{ wave: 'triangle', adsr: { attackLevel: 0.8, attackDuration: 0.05, decayLevel: 0.1, decayDuration: 0.1, sustainDuration: 0.1, releaseDuration: 0.1} }", Blockly.JavaScript.ORDER_NONE];
    }
};