import {
	PanelBody,
	SelectControl,
	TextControl,
	RangeControl,
} from "@wordpress/components";
import ServerSideRender from "@wordpress/server-side-render";
import { useSelect } from "@wordpress/data";
import {
	useBlockProps,
	InspectorControls,
	ColorPalette,
	RichText,
} from "@wordpress/block-editor";
import Select from "react-select";
import "./editor.scss";

export default function Edit({
	attributes: { categoryType, postPerpage, postGridtitle, gridColumn },
	setAttributes,
}) {
	const blockProps = useBlockProps();
	const categories = useSelect((select) => {
		return select("core").getEntityRecords("taxonomy", "category");
	}, []);

	if (!categories) {
		return null;
	}
	const options = [
		{ value: "chocolate", label: "Chocolate" },
		{ value: "strawberry", label: "Strawberry" },
		{ value: "vanilla", label: "Vanilla" },
	];
	return (
		<div {...blockProps}>
			{console.log(categories)}
			<InspectorControls key="setting">
				<PanelBody title="Post Grid Setting">
					<PanelBody initialOpen={false} title="Inner Panel">
						<RichText tagName="h1" placeholder="Title Input" />
					</PanelBody>
					<p>
						<strong>Select The Category</strong>
					</p>
					<Select
						options={categories.map((cat) => {
							return {
								value: cat.slug,
								label: cat.name,
							};
						})}
						isMulti
					></Select>
					<SelectControl
						value={categoryType}
						onChange={(categories) => {
							setAttributes({ categoryType: categories });
						}}
					>
						{categories.map((cat) => {
							return <option value={cat.slug}>{cat.name}</option>;
						})}
					</SelectControl>
					<p>
						<strong>Post Grid Title</strong>
					</p>
					<TextControl
						onChange={(value) => {
							setAttributes({
								postGridtitle: value,
							});
						}}
						value={postGridtitle}
					/>
					<p>
						<strong>Grid Column</strong>
					</p>
					<RangeControl
						onChange={(val) => {
							setAttributes({
								gridColumn: val,
							});
						}}
						value={gridColumn}
						min={1}
						max={6}
					/>
					<p>
						<strong>Post Per Page</strong>
					</p>
					<RangeControl
						onChange={(val) => {
							setAttributes({
								postPerpage: val,
							});
						}}
						value={postPerpage}
						min={3}
						max={30}
					/>
				</PanelBody>
			</InspectorControls>
			<ServerSideRender
				attributes={{
					categoryType,
					postPerpage,
					postGridtitle,
					gridColumn,
				}}
				block="create-block/my-post-grid"
			/>
		</div>
	);
}
