export let c4 = {
    init: function() {
        this.appendDummyInput()
            .appendField("C4");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    },

    transpile: function (block) {
        return [261.626, Blockly.JavaScript.ORDER_NONE];
    }
};