export let playNote = {
    init: function () {
        this.appendValueInput("DURATION")
            .setCheck("Number")
            .appendField("Play Note")
            .appendField(new Blockly.FieldDropdown([["C", "261.626"], ["C#/D♭", "277.183"], ["D", "293.665"], ["D#/E♭", "311.127"], ["E", "329.628"], ["F", "349.228"], ["F#/G♭", "369.994 "], ["G", "391.995"], ["G#/A♭", "415.305"], ["A", "440"], ["A#/B♭", "466.164"], ["B", "493.883"]]), "NOTE")
            .appendField("for");
        this.appendDummyInput()
            .appendField("beats");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    },

    transpile: function (block) {
        let note = block.getFieldValue('NOTE');
        let duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_NONE);
        let code = `var timeIndex = timeIndex || 0; playNote(context, ${note}, timeIndex, ${duration}, volume);`;
        return code;
    }
};