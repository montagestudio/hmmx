/**
 * @module "montage/ui/image.reel"
 */
var Image = require("montage/ui/image.reel").Image;
/**
 * @class Image
 * @extends external:Image
 * @classdesc
 */
exports.Image = Image.specialize( /** @lends Image# */ {

    hasTemplate: {value: true},

    constructor : {
        value: function Image() {
            this.super();

            this.classList.add("image");
        }
    }
});
