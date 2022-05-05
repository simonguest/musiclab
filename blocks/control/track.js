export let track = {
    init: function () {
            this.appendDummyInput()
                .appendField("Track")
                .appendField(new Blockly.FieldTextInput("Track 1"), "NAME");
            this.appendStatementInput("STATEMENTS")
                .setCheck(null);
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
    },

    transpile: function (block) {
        let statements = Blockly.JavaScript.statementToCode(block, 'STATEMENTS');
        let code = `var timeIndex = 0; ${statements}`;
        return code;
    }
};