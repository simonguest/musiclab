export let hihat = {
    init: function() {
        this.appendDummyInput()
            .appendField("Hi-Hat")
            .appendField(new Blockly.FieldDropdown([["Basic Hi-Hat","hihat"]]), "HIHATDRUMTYPE");
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },

    transpile: function (block) {
        let hihatDrumType = block.getFieldValue('HIHATDRUMTYPE');
        let code = `"${hihatDrumType}"`;
        return [code, Blockly.JavaScript.ORDER_NONE];
    }
};