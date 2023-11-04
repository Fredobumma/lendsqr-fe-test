import type { ImageProps } from "src/models";

const Figure = ({
	altText,
	containerStyles = "",
	image,
	imageStyles = "",
}: ImageProps) => {
	return (
		<figure className={`figure ${containerStyles}`}>
			<img src={image} className={imageStyles} alt={altText} />
		</figure>
	);
};

export default Figure;
// Figure element to wrap small size images, svgs and icons.
