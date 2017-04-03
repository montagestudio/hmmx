/**
 * @module "ui/checkbox.reel"
 */
var Component = require("montage/ui/component").Component;
/**
 * @class Checkbox
 * @extends Component
 */
exports.Checkbox = Component.specialize( /** @lends Checkbox# */ {

    hasTemplate: {value: true},

    constructor : {
        value: function Checkbox() {
            this.super();
        }
    }
});