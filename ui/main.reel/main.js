/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {

choices: {
	value:[
		{id:"yes", text: "Yes, my personal details are correct"},
     	{id:"no", text: "No, some details are wrong or have changed"}
	]	 
}

});
