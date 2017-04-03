/**
 * @module "montage/ui/hmmx-button.reel"
 */
// var AbstractButton = require("montage/ui/base/abstract-button").AbstractButton;
var Button = require("montage/ui/button.reel").Button;
/**
 * @class HmmxButton
 * @extends external:AbstractButton
 * @classdesc
 */
exports.HmmxButton = Button.specialize( /** @lends Button# */ {

    constructor : {
        value: function HmmxButton() {
            this.super();

            this.classList.add("hmmx-button");
        }
    },

    hasTemplate: {value: true}
});
