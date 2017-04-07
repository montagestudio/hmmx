/**
 * @module "ui/grid-cell.reel"
 */
var Component = require("montage/ui/component").Component;
/**
 * @class GridCell
 * @extends Component
 */
exports.GridCell = Component.specialize( /** @lends GridCell# */ {

    columnSpan: {
        value: 1
    }
});