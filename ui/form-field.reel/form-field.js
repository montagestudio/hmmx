/**
 * @module ui/field.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class FormField
 * @extends Component
 */
var FormField = exports.FormField = Component.specialize(/** @lends FormField# */ {

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

