export let filter = {
    init: function () {
        this.appendValueInput("FILTER")
            .setCheck("Number")
            .appendField("Set filter");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("Filter is between 0 and 100");
        this.setHelpUrl("");
    },

    transpile: function (block) {
        var filter = Blockly.JavaScript.valueToCode(block, 'FILTER', Blockly.JavaScript.ORDER_ATOMIC);
        return `options.filter = ${filter};`;
    }
};