import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../component/Layout/Header';
import TeamSelection from '../component/Team';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Asalytics</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/card_logo.svg' />
			</Head>
			<Header />
			<main className={styles.main}>
				<h2 style={{ marginTop: 42, marginBottom: 42 }}>
					List of Algorand Standard Assets <br /> on ASAlytics
				</h2>
				<TeamSelection />
			</main>
		</div>
	);
};

export default Home;
