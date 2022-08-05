import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function save({
	attributes: { image, quoteText, citeText, leftTitle },
}) {
	return (
		<div {...useBlockProps.save()}>
			<div className="boastimagepromo"></div>
		</div>
	);
}
