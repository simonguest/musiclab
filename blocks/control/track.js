export let track = {
    init: function () {
            this.appendDummyInput()
                .appendField("Play Track")
                .appendField(new Blockly.FieldTextInput("Track 1"), "NAME");
            this.appendStatementInput("STATEMENTS")
                .setCheck(null);
            this.setInputsInline(true);
            this.setPreviousStatement(false, null);
            this.setNextStatement(false, null);
            this.setColour(330);
            this.setTooltip("");
            this.setHelpUrl("");
    },

    transpile: function (block) {
        let statements = Blockly.JavaScript.statementToCode(block, 'STATEMENTS');
        let code = `var options = { bpm: 100, offset: 0}; ${statements}`;
        return code;
    }
};