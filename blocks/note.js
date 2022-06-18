var goog = {
    provide: function() {},
    require: function() {}
};

goog.provide('CustomFields.FieldPitch');
goog.require('Blockly.FieldTextInput');
goog.require('Blockly.utils.math');
goog.require('Blockly.utils.object');

var CustomFields = CustomFields || {};

CustomFields.FieldNote = function(text) {
    CustomFields.FieldNote.superClass_.constructor.call(this, text);
    this.setSpellcheck(false);
    this.clickWrapper_ = null;
    this.moveWrapper_ = null;
};
Blockly.utils.object.inherits(CustomFields.FieldNote, Blockly.FieldTextInput);

CustomFields.FieldNote.fromJson = function(options) {
    return new CustomFields.FieldNote(options['pitch']);
};

CustomFields.FieldNote.NOTES = 'C0 C#0 D0 D#0 E0 F0 F#0 G0 G#0 A0 A#0 B0 C1 C#1 D1 D#1 E1 F1 F#1 G1 G#1 A1 A#1 B1'.split(/ /);

/**
 * Show the inline free-text editor on top of the text and the note picker.
 * @protected
 */
CustomFields.FieldNote.prototype.showEditor_ = function() {
    CustomFields.FieldNote.superClass_.showEditor_.call(this);

    var div = Blockly.WidgetDiv.getDiv();
    if (!div.firstChild) {
        // Mobile interface uses Blockly.dialog.setPrompt().
        return;
    }
    // Build the DOM.
    var editor = this.dropdownCreate_();
    Blockly.DropDownDiv.getContentDiv().appendChild(editor);

    Blockly.DropDownDiv.setColour(this.sourceBlock_.style.colourPrimary,
        this.sourceBlock_.style.colourTertiary);

    Blockly.DropDownDiv.showPositionedByField(
        this, this.dropdownDispose_.bind(this));

    // The note picker is different from other fields in that it updates on
    // mousemove even if it's not in the middle of a drag.  In future we may
    // change this behaviour.  For now, using bindEvent_ instead of
    // bindEventWithChecks_ allows it to work without a mousedown/touchstart.

    // this.clickWrapper_ =
    //     Blockly.browserEvents.bind(this.imageElement_, 'click', this,
    //         this.hide_);
    // this.moveWrapper_ =
    //     Blockly.browserEvents.bind(this.imageElement_, 'mousemove', this,
    //         this.onMouseMove);

    this.updateGraph_();
};

/**
 * Create the pitch editor.
 * @return {!Element} The newly created pitch picker.
 * @private
 */
CustomFields.FieldNote.prototype.dropdownCreate_ = function() {
    let keySelectedListener = (el) => {
        let value = "";
        if (el.target.id === "") {
            // clicked on a label; return the parent
            value = el.target.parentNode.id;
        } else {
            value = el.target.id;
        }
        this.setEditorValue_(CustomFields.FieldNote.NOTES.indexOf(value));
    }

    let createKey = (isWhite, note, octave) => {
        let key = document.createElement('li');
        key.id = `${note}${octave}`;
        if (isWhite) {
            key.className = 'whiteKey';
            let label = document.createElement('p');
            label.innerText = note !== 'C' ? `${note}` : `${note}${octave}`;
            key.appendChild(label);
        } else {
            key.className = 'blackKey';
        }
        Blockly.browserEvents.bind(key, 'click', this, keySelectedListener);
        return key;
    }

    let createDualOctave = (name, startingOctave) => {
        let octave = document.createElement('div')
        octave.setAttribute('id', name);
        let keyboard = document.createElement('ul');
        keyboard.className = 'keyboard';
        keyboard.appendChild(createKey(true, 'C', startingOctave));
        keyboard.appendChild(createKey(false, 'C#', startingOctave));
        keyboard.appendChild(createKey(true, 'D', startingOctave));
        keyboard.appendChild(createKey(false, 'D#', startingOctave));
        keyboard.appendChild(createKey(true, 'E', startingOctave));
        keyboard.appendChild(createKey(true, 'F', startingOctave));
        keyboard.appendChild(createKey(false, 'F#', startingOctave));
        keyboard.appendChild(createKey(true, 'G', startingOctave));
        keyboard.appendChild(createKey(false, 'G#', startingOctave));
        keyboard.appendChild(createKey(true, 'A', startingOctave));
        keyboard.appendChild(createKey(false, 'A#', startingOctave));
        keyboard.appendChild(createKey(true, 'B', startingOctave));

        keyboard.appendChild(createKey(true, 'C', startingOctave + 1));
        keyboard.appendChild(createKey(false, 'C#', startingOctave + 1));
        keyboard.appendChild(createKey(true, 'D', startingOctave + 1));
        keyboard.appendChild(createKey(false, 'D#', startingOctave + 1));
        keyboard.appendChild(createKey(true, 'E', startingOctave + 1));
        keyboard.appendChild(createKey(true, 'F', startingOctave + 1));
        keyboard.appendChild(createKey(false, 'F#', startingOctave + 1));
        keyboard.appendChild(createKey(true, 'G', startingOctave + 1));
        keyboard.appendChild(createKey(false, 'G#', startingOctave + 1));
        keyboard.appendChild(createKey(true, 'A', startingOctave + 1));
        keyboard.appendChild(createKey(false, 'A#', startingOctave + 1));
        keyboard.appendChild(createKey(true, 'B', startingOctave + 1));


        octave.appendChild(keyboard);
        return octave;
    }

    let piano = document.createElement('div');
    piano.className = 'piano';
    let octaves = document.createElement('div');
    octaves.className = 'octaves';
    octaves.appendChild(createDualOctave('octave-0-1', 0));

    piano.appendChild(octaves);

    this.imageElement_ = piano;
    return this.imageElement_;
};

/**
 * Dispose of events belonging to the pitch editor.
 * @private
 */
CustomFields.FieldNote.prototype.dropdownDispose_ = function() {
    // if (this.clickWrapper_) {
    //     Blockly.browserEvents.unbind(this.clickWrapper_);
    //     this.clickWrapper_ = null;
    // }
    // if (this.moveWrapper_) {
    //     Blockly.browserEvents.unbind(this.moveWrapper_);
    //     this.moveWrapper_ = null;
    // }
    this.imageElement_ = null;
};

/**
 * Hide the editor.
 * @private
 */
CustomFields.FieldNote.prototype.hide_ = function() {
    Blockly.WidgetDiv.hide();
    Blockly.DropDownDiv.hideWithoutAnimation();
};

/**
 * Set the note to match the mouse's position.
 * @param {!Event} e Mouse move event.
 */
// CustomFields.FieldNote.prototype.onMouseMove = function(e) {
//     var bBox = this.imageElement_.getBoundingClientRect();
//     var dy = e.clientY - bBox.top;
//     var note = Blockly.utils.math.clamp(Math.round(13.5 - dy / 7.5), 0, 12);
//     this.imageElement_.style.backgroundPosition = (-note * 37) + 'px 0';
//     this.setEditorValue_(note);
// };

/**
 * Convert the machine-readable value (0-12) to human-readable text (C3-A4).
 * @param {number|string} value The provided value.
 * @return {string|undefined} The respective note, or undefined if invalid.
 */
CustomFields.FieldNote.prototype.valueToNote = function(value) {
    return CustomFields.FieldNote.NOTES[Number(value)];
};

/**
 * Convert the human-readable text (C3-A4) to machine-readable value (0-12).
 * @param {string} text The provided note.
 * @return {number|undefined} The respective value, or undefined if invalid.
 */
CustomFields.FieldNote.prototype.noteToValue = function(text) {
    var normalizedText = text.trim().toUpperCase();
    var i = CustomFields.FieldNote.NOTES.indexOf(normalizedText);
    return i > -1 ? i : undefined;
};

/**
 * Get the text to be displayed on the field node.
 * @return {?string} The HTML value if we're editing, otherwise null. Null means
 *   the super class will handle it, likely a string cast of value.
 * @protected
 */
CustomFields.FieldNote.prototype.getText_ = function() {
    if (this.isBeingEdited_) {
        return CustomFields.FieldNote.superClass_.getText_.call(this);
    }
    return this.valueToNote(this.getValue()) || null;
};

/**
 * Transform the provided value into a text to show in the HTML input.
 * @param {*} value The value stored in this field.
 * @return {string} The text to show on the HTML input.
 */
CustomFields.FieldNote.prototype.getEditorText_ = function(value) {
    return this.valueToNote(value);
};

/**
 * Transform the text received from the HTML input (note) into a value
 * to store in this field.
 * @param {string} text Text received from the HTML input.
 * @return {*} The value to store.
 */
CustomFields.FieldNote.prototype.getValueFromEditorText_ = function(text) {
    return this.noteToValue(text);
};

/**
 * Updates the graph when the field rerenders.
 * @private
 * @override
 */
CustomFields.FieldNote.prototype.render_ = function() {
    CustomFields.FieldNote.superClass_.render_.call(this);
    this.updateGraph_();
};

/**
 * Redraw the note picker with the current note.
 * @private
 */
CustomFields.FieldNote.prototype.updateGraph_ = function() {
    if (!this.imageElement_) {
        return;
    }
    // Clear all current selections
    let whiteKeys = this.imageElement_.querySelectorAll(`[class*="whiteKey"]`);
    whiteKeys.forEach(key => key.classList.remove("selected"));
    let blackKeys = this.imageElement_.querySelectorAll(`[class*="blackKey"]`);
    blackKeys.forEach(key => key.classList.remove("selected"));

    // highlight the selected key
    let id = CustomFields.FieldNote.NOTES[this.getValue()];
    this.imageElement_.querySelector(`[id="${id}"]`).classList.add("selected")
};

/**
 * Ensure that only a valid value may be entered.
 * @param {*} opt_newValue The input value.
 * @return {*} A valid value, or null if invalid.
 */
CustomFields.FieldNote.prototype.doClassValidation_ = function(opt_newValue) {
    if (opt_newValue === null || opt_newValue === undefined) {
        return null;
    }
    var note = this.valueToNote(opt_newValue);
    if (note) {
        return opt_newValue;
    }
    return null;
};

Blockly.fieldRegistry.register('field_note', CustomFields.FieldNote);

export let note = {
    init: function() {
        this.appendDummyInput()
            .appendField('note')
            .appendField(new CustomFields.FieldNote('7'), 'NOTE');
        this.setStyle('loop_blocks');
    }
}
