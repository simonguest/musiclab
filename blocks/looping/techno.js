export let techno = {
    init: function() {
        this.appendDummyInput()
            .appendField("Techno Loop")
            .appendField(new Blockly.FieldDropdown([["Basic (113bpm)","looping/techno"], ["Choir (115bpm)", "looping/techno2"], ["Bounce (150bpm)", "looping/techno3"], ["Moogley (140bpm)", "looping/techno4"], ["Ivory (150bpm)", "looping/techno5"]]), "SAMPLE_FILE");
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