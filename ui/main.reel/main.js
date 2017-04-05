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
	value:[ {"value":"yes", "label": "Yes, my personal details are correct"},
           {"value":"no", "label": "No, some details are wrong or have changed"}
         ]
}

});
