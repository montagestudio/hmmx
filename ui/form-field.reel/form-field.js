/**
 * @module ui/field.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class FormField
 * @extends Component
 */
var FormField = exports.FormField = Component.specialize(/** @lends FormField# */ {

    label: {
        value: undefined
    },

    hintText: {
        value: undefined
    },

    helpMessage: {
        value: undefined
    },
    
    errorMessage: {
        value: undefined
    },

    _hasError: {
        get: function() {
            return this.errorMessage && this.errorMessage.length
        }
    },

    helpShown: {
        value: false
    },

    handleFormFieldInfoButtonAction: {
        value: function () {
            this.helpShown = !this.helpShown;
        }
    },

    handleCloseHelpButtonAction: {
        value: function () {
            this.helpShown = !this.helpShown;
        }
    }
});

