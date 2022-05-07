export let bpm = {
    init: function () {
        this.appendValueInput("BPM")
            .setCheck("Number")
            .appendField("Set bpm");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("Beats per minute");
        this.setHelpUrl("");
    },

    transpile: function (block) {
        var bpm = Blockly.JavaScript.valueToCode(block, 'BPM', Blockly.JavaScript.ORDER_ATOMIC);
        return `var bpm = typeof bpm !== 'undefined' ? bpm : ${bpm};`;
    }
};