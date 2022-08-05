import { __ } from "@wordpress/i18n";

import { useBlockProps } from "@wordpress/block-editor";

export default function save({
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
}) {
	return (
		<div {...useBlockProps.save()}>
			<div
				className="boastquote"
				style={{
					borderTop: `5px solid ${borderTopColor}`,
					padding: `3em 0`,
					backgroundColor: `${backgroundColor}`,
				}}
			>
				<div style={{ margin: `0 1.5em` }}>
					<div
						style={{
							fontSize: `${quoteFontSize}px`,
							fontWeight: `600`,
							marginBottom: `1.5em`,
						}}
					>
						{quoteText}
					</div>
					<div
						style={{
							textAlign: `center`,
							fontSize: `${citeFontSize}px`,
							color: `${citeColor}`,
							fontWeight: `bold`,
						}}
					>
						{citeText}
					</div>
				</div>
			</div>
		</div>
	);
}
