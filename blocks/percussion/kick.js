export let kick = {
    init: function() {
        this.appendDummyInput()
            .appendField("Kick Drum")
            .appendField(new Blockly.FieldDropdown([["Basic Kick","percussion/kick"]]), "SAMPLE_FILE");
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },

    transpile: function (block) {
        let kickDrumType = block.getFieldValue('SAMPLE_FILE');
        let code = `"${kickDrumType}"`;
        return [code, Blockly.JavaScript.ORDER_NONE];
    }
};