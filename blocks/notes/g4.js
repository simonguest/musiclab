export let g4 = {
    init: function() {
        this.appendDummyInput()
            .appendField("G4");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    },

    transpile: function (block) {
        return [391.995, Blockly.JavaScript.ORDER_NONE];
    }
};