/**
 * @module "ui/grid.reel"
 */
var Component = require("montage/ui/component").Component;
/**
 * @class Grid
 * @extends Component
 */
exports.Grid = Component.specialize( /** @lends Grid# */ {

    hasTemplate: {value: true},

    constructor : {
        value: function Grid() {
            this.super();
        }
    }
});