export let snare = {
    init: function() {
        this.appendDummyInput()
            .appendField("Snare Drum")
            .appendField(new Blockly.FieldDropdown([["Basic Snare","snare"]]), "SNAREDRUMTYPE");
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },

    transpile: function (block) {
        let snareDrumType = block.getFieldValue('SNAREDRUMTYPE');
        let code = `"${snareDrumType}"`;
        return [code, Blockly.JavaScript.ORDER_NONE];
    }
};