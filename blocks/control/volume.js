export let volume = {
    init: function () {
        this.appendValueInput("VOLUME")
            .setCheck("Number")
            .appendField("Set volume");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("Volume is between 0 and 100");
        this.setHelpUrl("");
    },

    transpile: function (block) {
        var volume = Blockly.JavaScript.valueToCode(block, 'VOLUME', Blockly.JavaScript.ORDER_ATOMIC);
        return `var options = typeof options !== 'undefined' ? options : { }; options.volume = ${volume};`;
    }
};