import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
import Edit from "./edit";
import save from "./save";

registerBlockType("optimum-blocks/boastimagepromo", {
	attributes: {
		image: {
			type: "string",
		},
		quoteText: {
			type: "string",
		},
		citeText: {
			type: "string",
		},
		leftTitle: {
			type: "string",
		},
	},
	edit: Edit,
	save: save,
});
