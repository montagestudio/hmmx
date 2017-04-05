/**
 * @module "ui/image.reel"
 */
var Component = require("montage/ui/component").Component;
/**
 * @class Image
 * @extends Component
 */
exports.Image = Component.specialize( /** @lends Image# */ {

    

    constructor : {
        value: function Image() {
            this.super();
        }
    },
    hasTemplate: {value: true}
});