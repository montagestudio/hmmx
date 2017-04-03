/**
 * @module "montage/ui/hmmx-button.reel"
 */
var AbstractButton = require("montage/ui/base/abstract-button").AbstractButton;
/**
 * @class HmmxButton
 * @extends external:AbstractButton
 * @classdesc
 */
exports.HmmxButton = AbstractButton.specialize( /** @lends Button# */ {

    hasTemplate: {value: true},

    constructor : {
        value: function HmmxButton() {
            this.super();

            this.classList.add("hmmx-button");
        }
    }
});
