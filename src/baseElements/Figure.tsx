import { ImageProps } from "src/models";

const Figure = ({ altText, containerClass, image, imageClass }: ImageProps) => {
	return (
		<figure className={`figure ${containerClass}`}>
			<img src={image} className={imageClass} alt={altText} />
		</figure>
	);
};

export default Figure;
