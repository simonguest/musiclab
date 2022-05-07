export let techno = {
    init: function() {
        this.appendDummyInput()
            .appendField("Techno Loop")
            .appendField(new Blockly.FieldDropdown([["Basic (113bpm)","techno"], ["Choir (115bpm)", "techno2"], ["Bounce (150bpm)", "techno3"], ["Moogley (140bpm)", "techno4"], ["Ivory (150bpm)", "techno5"]]), "LOOPTYPE");
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