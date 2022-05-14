export let piano = {
    init: function() {
        this.appendDummyInput()
            .appendField("Piano")
            .appendField(new Blockly.FieldDropdown([["Basic","{ wave: 'sawtooth', adsr: { attackLevel: 0.8, attackDuration: 0.01, decayLevel: 0.35, decayDuration: 0.1, sustainDuration: 0.1, releaseDuration: 0.3} }"]]), "PIANOTYPE");
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },

    transpile: function (block) {
        let pianoType = block.getFieldValue('PIANOTYPE');
        let code = `${pianoType}`;
        return [code, Blockly.JavaScript.ORDER_NONE];
    }
};