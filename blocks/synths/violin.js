export let violin = {
    init: function() {
        this.appendDummyInput()
            .appendField("Violin")
            .appendField(new Blockly.FieldDropdown([["Basic","{ wave: 'sawtooth', adsr: { attackLevel: 0.5, attackDuration: 0.5, decayLevel: 0.7, decayDuration: 0.1, sustainDuration: 0.1, releaseDuration: 1.0 } }"]]), "VIOLINTYPE");
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },

    transpile: function (block) {
        let violinType = block.getFieldValue('VIOLINTYPE');
        let code = `${violinType}`;
        return [code, Blockly.JavaScript.ORDER_NONE];
    }
};