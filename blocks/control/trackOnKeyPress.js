const keys = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'.split(' ');

export let trackOnKeyPress = {
    init: function () {
        this.appendDummyInput()
            .appendField("Play Track")
            .appendField(new Blockly.FieldTextInput("Track 1"), "NAME")
            .appendField(" when ")
            .appendField(new Blockly.FieldDropdown([...keys.map(k => [k, k])]), "KEY")
            .appendField(" key pressed");
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
        console.log(block);

        let statements = Blockly.JavaScript.statementToCode(block, 'STATEMENTS');
        let code = `var options = { bpm: 100, offset: 0}; ${statements}`;
        let key = block.getFieldValue('KEY');

        return `var el = e => { if (e.data.toUpperCase() == "${key}") { ${code} }}; eventListeners.push(el); keyup_consumer.addEventListener('message', el );`;
    }
};