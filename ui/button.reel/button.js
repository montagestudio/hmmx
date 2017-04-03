/**
 * @module "montage/ui/button.reel"
 */
var Button = require("montage/ui/button.reel").Button;
/**
 * @class Button
 * @extends external:Button
 * @classdesc
 */
exports.Button = Button.specialize( /** @lends Button# */ {

    hasTemplate: {value: true},

    constructor : {
        value: function Button() {
            this.super();

            this.classList.add("button");
        }
    }
});
