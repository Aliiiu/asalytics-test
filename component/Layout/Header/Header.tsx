import Link from 'next/link';
import CustomImage from '../../UI/CustomImage/CustomImage';
import styles from './header.module.css';

const Header = () => {
	return (
		<div>
			<header className={styles.header}>
				<Link href={'/'}>
					<a>
						<CustomImage
							src={'/HeaderLogo.png'}
							alt='Logo'
							style={{ width: 150, height: 62 }}
						/>
					</a>
				</Link>
				<button className={styles.button}>ANALYZE ASAs</button>
			</header>
		</div>
	);
};

export default Header;
