var goog = {
    provide: function () {
    },
    require: function () {
    }
};

goog.provide('CustomFields.FieldPitch');
goog.require('Blockly.FieldTextInput');
goog.require('Blockly.utils.math');
goog.require('Blockly.utils.object');

export let NoteField = function (text) {
    NoteField.superClass_.constructor.call(this, text);
    this.setSpellcheck(false);
};
Blockly.utils.object.inherits(NoteField, Blockly.FieldTextInput);

NoteField.fromJson = function (options) {
    return new NoteField(options['note']);
};
let noteString = "";
for (let o = 0; o <= 7; o++) {
    noteString += `C${o} C#${o} D${o} D#${o} E${o} F${o} F#${o} G${o} G#${o} A${o} A#${o} B${o} `;
}
NoteField.NOTES = noteString.split(/ /);

NoteField.prototype.editorListeners_ = [];

/**
 * Show the inline free-text editor on top of the text and the note picker.
 * @protected
 */
NoteField.prototype.showEditor_ = function () {
    NoteField.superClass_.showEditor_.call(this);

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

    this.updateGraph_();
};

/**
 * Create the piano editor.
 * @return {!Element} The newly created pitch picker.
 * @private
 */
NoteField.prototype.dropdownCreate_ = function () {

    let keySelectedListener = (el) => {
        let value = "";
        if (el.target.id === "") {
            // clicked on a label; return the parent
            value = el.target.parentNode.id;
        } else {
            value = el.target.id;
        }
        this.setEditorValue_(NoteField.NOTES.indexOf(value));
    }

    let highlightMiniMap = (el) => {
        this.imageElement_.querySelectorAll("a").forEach((child) => {
            child.className = "";
        });
        el.className = el.className + " selected";
    }

    let onScrolledListener = (el) => {
        let minimap = this.imageElement_.querySelectorAll("a");
        if (el.target.scrollLeft <= 225) highlightMiniMap(minimap[0]);
        if (el.target.scrollLeft > 225 && el.target.scrollLeft <= 675) highlightMiniMap(minimap[1]);
        if (el.target.scrollLeft > 675 && el.target.scrollLeft <= 1125) highlightMiniMap(minimap[2]);
        if (el.target.scrollLeft > 1125) highlightMiniMap(minimap[3]);
    }

    let createMiniMapOctave = (octave) => {
        let link = document.createElement('a')
        link.setAttribute('href', `#octave-${octave}-${octave + 1}`);
        link.innerText = `${octave}-${octave + 1}`;
        link.setAttribute('ondragstart', 'return false;');
        return link;
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
        this.editorListeners_.push(Blockly.browserEvents.bind(key, 'click', this, keySelectedListener));
        return key;
    }

    let createDualOctave = (startingOctave) => {
        let octave = document.createElement('div');
        octave.setAttribute('id', `octave-${startingOctave}-${startingOctave + 1}`);
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
    let firstMiniMapOctave = createMiniMapOctave(0);
    firstMiniMapOctave.classList.add('selected');
    piano.appendChild(firstMiniMapOctave);
    piano.appendChild(createMiniMapOctave(2));
    piano.appendChild(createMiniMapOctave(4));
    piano.appendChild(createMiniMapOctave(6));

    let octaves = document.createElement('div');
    octaves.className = 'octaves';
    octaves.appendChild(createDualOctave(0));
    octaves.appendChild(createDualOctave(2));
    octaves.appendChild(createDualOctave(4));
    octaves.appendChild(createDualOctave(6));
    this.editorListeners_.push(Blockly.browserEvents.bind(octaves, 'scroll', this, onScrolledListener));
    piano.appendChild(octaves);

    this.imageElement_ = piano;
    return this.imageElement_;
};

/**
 * Dispose of events belonging to the piano editor
 * @private
 */
NoteField.prototype.dropdownDispose_ = function () {
    this.editorListeners_.forEach(l => {
        Blockly.browserEvents.unbind(l);
    });
    this.editorListeners_ = [];
    this.imageElement_ = null;
};

/**
 * Hide the editor.
 * @private
 */
NoteField.prototype.hide_ = function () {
    Blockly.WidgetDiv.hide();
    Blockly.DropDownDiv.hideWithoutAnimation();
};

/**
 * Convert the machine-readable value (0-12) to human-readable text (C3-A4).
 * @param {number|string} value The provided value.
 * @return {string|undefined} The respective note, or undefined if invalid.
 */
NoteField.prototype.valueToNote = function (value) {
    return NoteField.NOTES[Number(value)];
};

/**
 * Convert the human-readable text (C3-A4) to machine-readable value (0-12).
 * @param {string} text The provided note.
 * @return {number|undefined} The respective value, or undefined if invalid.
 */
NoteField.prototype.noteToValue = function (text) {
    var normalizedText = text.trim().toUpperCase();
    var i = NoteField.NOTES.indexOf(normalizedText);
    return i > -1 ? i : undefined;
};

/**
 * Get the text to be displayed on the field node.
 * @return {?string} The HTML value if we're editing, otherwise null. Null means
 *   the super class will handle it, likely a string cast of value.
 * @protected
 */
NoteField.prototype.getText_ = function () {
    if (this.isBeingEdited_) {
        return NoteField.superClass_.getText_.call(this);
    }
    return this.valueToNote(this.getValue()) || null;
};

/**
 * Transform the provided value into a text to show in the HTML input.
 * @param {*} value The value stored in this field.
 * @return {string} The text to show on the HTML input.
 */
NoteField.prototype.getEditorText_ = function (value) {
    return this.valueToNote(value);
};

/**
 * Transform the text received from the HTML input (note) into a value
 * to store in this field.
 * @param {string} text Text received from the HTML input.
 * @return {*} The value to store.
 */
NoteField.prototype.getValueFromEditorText_ = function (text) {
    return this.noteToValue(text);
};

/**
 * Updates the graph when the field rerenders.
 * @private
 * @override
 */
NoteField.prototype.render_ = function () {
    NoteField.superClass_.render_.call(this);
    this.updateGraph_();
};

/**
 * Redraw the piano with the current note.
 * @private
 */
NoteField.prototype.updateGraph_ = function () {
    if (!this.imageElement_) {
        return;
    }
    // Clear all current selections
    let whiteKeys = this.imageElement_.querySelectorAll(`[class*="whiteKey"]`);
    whiteKeys.forEach(key => key.classList.remove("selected"));
    let blackKeys = this.imageElement_.querySelectorAll(`[class*="blackKey"]`);
    blackKeys.forEach(key => key.classList.remove("selected"));

    // highlight the selected key
    let id = NoteField.NOTES[this.getValue()];
    this.imageElement_.querySelector(`[id="${id}"]`).classList.add("selected");

    // scroll to the right region on the piano, if needed
    let newOctave = parseInt(id.match(/\d+/)[0]);

    let octaves = this.imageElement_.getElementsByClassName("octaves")[0];
    if (octaves) {
        switch (newOctave) {
            case 0:
            case 1:
                octaves.scrollLeft = 0;
                break;
            case 2:
            case 3:
                octaves.scrollLeft = 226;
                break;
            case 4:
            case 5:
                octaves.scrollLeft = 676;
                break;
            case 6:
            case 7:
                octaves.scrollLeft = 1126;
                break;
        }
    }

    // set scroll style to smooth after first render
    octaves.setAttribute('style', 'scroll-behavior:smooth;');

};

/**
 * Ensure that only a valid value may be entered.
 * @param {*} opt_newValue The input value.
 * @return {*} A valid value, or null if invalid.
 */
NoteField.prototype.doClassValidation_ = function (opt_newValue) {
    if (opt_newValue === null || opt_newValue === undefined) {
        return null;
    }
    var note = this.valueToNote(opt_newValue);
    if (note) {
        return opt_newValue;
    }
    return null;
};