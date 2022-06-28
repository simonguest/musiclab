export let snare = {
    init: function() {
        this.appendDummyInput()
            .appendField("Snare Drum")
            .appendField(new Blockly.FieldDropdown([["Basic Snare","percussion/snare"]]), "SAMPLE_FILE");
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },

    transpile: function (block) {
        let snareDrumType = block.getFieldValue('SAMPLE_FILE');
        let code = `"${snareDrumType}"`;
        return [code, Blockly.JavaScript.ORDER_NONE];
    }
};