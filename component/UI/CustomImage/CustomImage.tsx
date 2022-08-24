import NextImage, { ImageProps } from 'next/image';
import classnames from 'classnames';
import { CSSProperties, FC } from 'react';
import styles from './image.module.css';

interface IImage {
	style: CSSProperties;
	src: ImageProps['src'];
	alt: string;
}

const CustomImage: FC<IImage> = ({ style, src, alt = '' }) => {
	return (
		<div style={style} className={styles['image-container']}>
			<NextImage src={src} alt={alt} layout='fill' objectFit='contain' />
		</div>
	);
};

export default CustomImage;
