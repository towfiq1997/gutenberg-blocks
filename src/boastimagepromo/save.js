import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function save({
	attributes: { image, quoteText, citeText, leftTitle },
}) {
	return (
		<div {...useBlockProps.save()}>
			<div
				className="boastimagepromo"
				style={{
					position: `relative`,
					backgroundImage: `url(${image})`,
					backgroundSize: `cover`,
					backgroundPosition: `center`,
					zIndex: -10,
				}}
			>
				<div
					className="boastpromocontent"
					style={{ zIndex: 10, padding: `80px 20px` }}
				>
					<h3>BOOM</h3>
					<div>
						<h4>lorem dollar ispum what?</h4>
					</div>
				</div>
				<div
					className="ovarlay"
					style={{
						backgroundColor: `black`,
						opacity: 0.3,
						position: `absolute`,
						height: `100%`,
						width: `100%`,
						top: `0`,
						zIndex: `-9`,
					}}
				></div>
			</div>
		</div>
	);
}
