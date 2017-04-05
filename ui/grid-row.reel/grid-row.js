/**
 * @module "ui/grid-row.reel"
 */
var Component = require("montage/ui/component").Component;
/**
 * @class GridRow
 * @extends Component
 */
exports.GridRow = Component.specialize( /** @lends GridRow# */ {

    hasTemplate: {value: true},

    constructor : {
        value: function GridRow() {
            this.super();
        }
    }
});