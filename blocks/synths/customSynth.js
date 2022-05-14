export let customSynth = {
    init: function() {
        this.appendDummyInput()
            .appendField("Custom Synth")
            .appendField(new Blockly.FieldDropdown([["Sine","sine"], ["Square","square"], ["Sawtooth","sawtooth"], ["Triangle","triangle"]]), "WAVE");
        this.appendValueInput("ATTACKLEVEL")
            .setCheck("Number")
            .appendField("Attack Level");
        this.appendValueInput("ATTACKDURATION")
            .setCheck("Number")
            .appendField("Attack Duration");
        this.appendValueInput("DECAYLEVEL")
            .setCheck("Number")
            .appendField("Decay Level");
        this.appendValueInput("DECAYDURATION")
            .setCheck("Number")
            .appendField("Decay Duration");
        this.appendValueInput("SUSTAINDURATION")
            .setCheck("Number")
            .appendField("Sustain Duration");
        this.appendValueInput("RELEASEDURATION")
            .setCheck("Number")
            .appendField("Release Duration");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },

    transpile: function (block) {
        var wave = block.getFieldValue('WAVE');
        var attackLevel = Blockly.JavaScript.valueToCode(block, 'ATTACKLEVEL', Blockly.JavaScript.ORDER_NONE);
        var attackDuration = Blockly.JavaScript.valueToCode(block, 'ATTACKDURATION', Blockly.JavaScript.ORDER_NONE);
        var decayLevel = Blockly.JavaScript.valueToCode(block, 'DECAYLEVEL', Blockly.JavaScript.ORDER_NONE);
        var decayDuration = Blockly.JavaScript.valueToCode(block, 'DECAYDURATION', Blockly.JavaScript.ORDER_NONE);
        var sustainDuration = Blockly.JavaScript.valueToCode(block, 'SUSTAINDURATION', Blockly.JavaScript.ORDER_NONE);
        var releaseDuration = Blockly.JavaScript.valueToCode(block, 'RELEASEDURATION', Blockly.JavaScript.ORDER_NONE);

        let code = `{ wave: "${wave}", adsr: { attackLevel: ${attackLevel}, attackDuration: ${attackDuration}, decayLevel: ${decayLevel}, decayDuration: ${decayDuration}, sustainDuration: ${sustainDuration}, releaseDuration:${releaseDuration} } }`;
        return [code, Blockly.JavaScript.ORDER_NONE];
    }
};