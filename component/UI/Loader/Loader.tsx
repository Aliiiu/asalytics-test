import styles from './loader.module.css';

const Loader = () => {
	return (
		<div className={styles['loader-container']}>
			<div className={styles['sk-chase']}>
				<div className={styles['sk-chase-dot']}></div>
				<div className={styles['sk-chase-dot']}></div>
				<div className={styles['sk-chase-dot']}></div>
				<div className={styles['sk-chase-dot']}></div>
				<div className={styles['sk-chase-dot']}></div>
				<div className={styles['sk-chase-dot']}></div>
			</div>
		</div>
	);
};

export default Loader;
