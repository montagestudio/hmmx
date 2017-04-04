/**
 * @module ui/text-field.reel
 */
var TextField = require("montage/ui/text-field.reel").TextField;

/**
 * @class TextField
 * @extends TextField
 */
exports.TextField = TextField.specialize(/** @lends TextField# */ {

    hasTemplate: {
        value: true
    },

    constructor : {
        value: function TextField() {
            this.super();

            this.classList.add("TextField");
        }
    }
});
