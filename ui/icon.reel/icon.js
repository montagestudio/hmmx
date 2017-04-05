/**
 * @module "ui/icon.reel"
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Icon
 * @extends Component
 */
exports.Icon = Component.specialize(/** @lends Icon.prototype */{

	isLegal: {
		value: false
	}
	//if isLegal is set to true it will always use the legal warning icon regardless of src
	//if isLegal is set to false it requires a src or nothing will be shown

});
