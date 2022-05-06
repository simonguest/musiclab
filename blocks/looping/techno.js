export let techno = {
    init: function() {
        this.appendDummyInput()
            .appendField("Techno Loop")
            .appendField(new Blockly.FieldDropdown([["Basic","techno"], ["Choir", "techno2"], ["Bounce", "techno3"]]), "LOOPTYPE");
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },

    transpile: function (block) {
        let snareDrumType = block.getFieldValue('LOOPTYPE');
        let code = `"${snareDrumType}"`;
        return [code, Blockly.JavaScript.ORDER_NONE];
    }
};