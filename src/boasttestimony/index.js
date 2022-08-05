import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
import Edit from "./edit";
import save from "./save";

registerBlockType("optimum-blocks/quotetestimony", {
	attributes: {
		quoteTestimony: {
			type: "string",
		},
		quoteUrl: {
			type: "string",
		},
		quoteTestimonyFontSize: {
			type: "string",
			default: "30",
		},
		quoteUrlFontSize: {
			type: "string",
			default: "30",
		},
		image: {
			type: "string",
		},
	},
	edit: Edit,
	save: save,
});
