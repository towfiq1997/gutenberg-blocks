import { PanelBody, ToggleControl } from "@wordpress/components";
import {
	useBlockProps,
	InspectorControls,
	ColorPalette,
	RichText,
} from "@wordpress/block-editor";
import Select from "react-select";
import { MediaUpload } from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit({
	attributes: { image, quoteText, citeText, leftTitle },
	setAttributes,
}) {
	const blockProps = useBlockProps();
	const options = [
		{ value: "18", label: "18" },
		{ value: "19", label: "19" },
		{ value: "20", label: "20" },
		{ value: "21", label: "21" },
		{ value: "22", label: "22" },
	];
	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody initialOpen={true}>
					<p>
						<strong>Set Background Image</strong>
					</p>
					{image ? (
						<div className="img-rel">
							<img src={image} height="auto" width="95px" />
							<svg
								onClick={() =>
									setAttributes({
										image: null,
									})
								}
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-x-circle-fill"
								viewBox="0 0 16 16"
							>
								<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
							</svg>
						</div>
					) : (
						<MediaUpload
							onSelect={(media) => {
								setAttributes({
									image: media.sizes.full.url,
								});
							}}
							render={({ open }) => <h3 onClick={open}>Background Image</h3>}
						/>
					)}
				</PanelBody>
			</InspectorControls>
			<div className="boastimagepromo">edittt</div>
		</div>
	);
}
