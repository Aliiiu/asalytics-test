import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.css';

const Header = () => {
	return (
		<div>
			<header className={styles.header}>
				<Link href={'/'}>
					<a>
						<Image
							src='/Header Logo.png'
							alt='Logo'
							width={150}
							height='62px'
						/>
					</a>
				</Link>
				<button className={styles.button}>ANALYZE ASAs</button>
			</header>
		</div>
	);
};

export default Header;
