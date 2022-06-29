export let choir = {
    init: function() {
        this.appendDummyInput()
            .appendField("Choir")
            .appendField(new Blockly.FieldDropdown([["Short","effects/choir1"]]), "SAMPLE_FILE");
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },

    transpile: function (block) {
        let choirType = block.getFieldValue('SAMPLE_FILE');
        let code = `"${choirType}"`;
        return [code, Blockly.JavaScript.ORDER_NONE];
    }
};