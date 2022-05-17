export let choir = {
    init: function() {
        this.appendDummyInput()
            .appendField("Choir")
            .appendField(new Blockly.FieldDropdown([["Short","choir1"]]), "CHOIRTYPE");
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },

    transpile: function (block) {
        let choirType = block.getFieldValue('CHOIRTYPE');
        let code = `"${choirType}"`;
        return [code, Blockly.JavaScript.ORDER_NONE];
    }
};