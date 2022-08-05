import { PanelBody } from "@wordpress/components";
import {
	useBlockProps,
	InspectorControls,
	ColorPalette,
	RichText,
	SelectControl,
} from "@wordpress/block-editor";
import "./editor.scss";
import Select from "react-select";

export default function Edit({
	attributes: {
		quoteText,
		citeText,
		borderTopColor,
		backgroundColor,
		quoteFontSize,
		quoteColor,
		citeFontSize,
		citeColor,
	},
	setAttributes,
	isSelected,
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
			<InspectorControls key="setting">
				<PanelBody initialOpen={false} title="Boast Quote Design">
					<p>
						<strong>Quote Font Size</strong>
					</p>
					<Select
						value={options.filter((opt) => opt.value == quoteFontSize)}
						onChange={(option) =>
							setAttributes({ quoteFontSize: option.value })
						}
						options={options}
					/>
					<p>
						<strong>Cite Font Size</strong>
					</p>
					<Select
						value={options.filter((opt) => opt.value == citeFontSize)}
						onChange={(option) => setAttributes({ citeFontSize: option.value })}
						options={options}
					/>
					<p>
						<strong>Background Color</strong>
					</p>
					<ColorPalette
						value={backgroundColor}
						onChange={(color) =>
							setAttributes({
								backgroundColor: color,
							})
						}
					/>
					<p>
						<strong>Border Top Color</strong>
					</p>
					<ColorPalette
						value={borderTopColor}
						onChange={(color) =>
							setAttributes({
								borderTopColor: color,
							})
						}
					/>
					<p>
						<strong>Quote Color</strong>
					</p>
					<ColorPalette
						value={quoteColor}
						onChange={(color) =>
							setAttributes({
								quoteColor: color,
							})
						}
					/>
					<p>
						<strong>Cite Color</strong>
					</p>
					<ColorPalette
						value={citeColor}
						onChange={(color) =>
							setAttributes({
								citeColor: color,
							})
						}
					/>
				</PanelBody>
			</InspectorControls>

			<div
				className="boastquote"
				style={{
					borderTop: `5px solid ${borderTopColor}`,
					padding: `3em 0`,
					backgroundColor: `${backgroundColor}`,
				}}
			>
				<div style={{ margin: `0 1.5em` }}>
					<RichText
						style={{
							fontSize: `${quoteFontSize}px`,
							fontWeight: `600`,
							marginBottom: `1.5em`,
						}}
						tagName="h3"
						value={quoteText}
						onChange={(content) => setAttributes({ quoteText: content })}
						placeholder="Add quote text"
					/>
					<RichText
						style={{
							textAlign: `center`,
							fontSize: `${citeFontSize}px`,
							color: `${citeColor}`,
							fontWeight: `bold`,
						}}
						tagName="h4"
						value={citeText}
						onChange={(content) => setAttributes({ citeText: content })}
						placeholder="Add cite text"
					/>
				</div>
			</div>
		</div>
	);
}
