import { registerBlockType } from "@wordpress/blocks";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import save from "./save";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType("optimum-blocks/boastquote", {
	attributes: {
		quoteText: {
			type: "string",
		},
		citeText: {
			type: "string",
		},
		borderTopColor: {
			type: "string",
			default: "#30b780",
		},
		backgroundColor: {
			type: "string",
			default: "#f2f3f4",
		},
		quoteFontSize: {
			type: "string",
			default: "20",
		},
		quoteColor: {
			type: "string",
			default: "black",
		},
		citeFontSize: {
			type: "string",
			default: "20",
		},
		citeColor: {
			type: "string",
			default: "#30b780",
		},
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	/**
	 * @see ./save.js
	 */
	save: save,
});
