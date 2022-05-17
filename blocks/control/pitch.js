export let pitch = {
    init: function () {
        this.appendValueInput("PITCH")
            .setCheck("Number")
            .appendField("Set pitch");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("Normal pitch is 1");
        this.setHelpUrl("");
    },

    transpile: function (block) {
        var pitch = Blockly.JavaScript.valueToCode(block, 'PITCH', Blockly.JavaScript.ORDER_NONE);
        return `options.pitch = ${pitch};`;
    }
};