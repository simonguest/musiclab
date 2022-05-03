export let clip = {
    init: function () {
            this.appendDummyInput()
                .appendField("Clip")
                .appendField(new Blockly.FieldTextInput("Clip 1"), "NAME");
            this.appendStatementInput("STATEMENTS")
                .setCheck(null);
            this.setInputsInline(true);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
    },

    transpile: function (block) {
        let statements = Blockly.JavaScript.statementToCode(block, 'STATEMENTS');
        let code = `${statements}`;
        return code;
    }
};