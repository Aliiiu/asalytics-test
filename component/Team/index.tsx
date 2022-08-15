import Image from 'next/image';
import React from 'react';
import TeamCard from '../UI/TeamCard';
import styles from './team.module.css';
import { useQuery, gql } from '@apollo/client';
import Loader from '../UI/Loading';
import { BiError } from 'react-icons/bi';

const GET_LOCATIONS = gql`
	query MyQuery {
		asalist {
			result {
				available
				logo
				name
				assetId
			}
		}
	}
`;

const TeamSelection = () => {
	const { loading, error, data } = useQuery(GET_LOCATIONS);
	return (
		<div style={{ paddingTop: 64, paddingBottom: 32 }}>
			<div className={styles.gridContainer}>
				{data &&
					data.asalist.result
						.filter((item: any) => item.logo)
						.map((item: any) => (
							<TeamCard key={item.assetId}>
								<Image
									src={item.logo}
									alt={item.name}
									width='30px'
									height={57}
									objectFit='contain'
								/>
								<h3>{item.name}</h3>
								<button
									className={styles.button}
									style={{
										backgroundColor: !item.available ? '#BC3131' : '#6FD791',
									}}
								>
									{item.available ? 'Available' : 'Unavailable'}
								</button>
							</TeamCard>
						))}
			</div>
			{loading && <Loader />}
			{error && (
				<div className={styles['error-container']}>
					{' '}
					<BiError
						style={{ color: '#E25C5C', fontSize: 30, marginRight: 20 }}
					/>
					<h2 style={{ color: '#E25C5C' }}>Something is wrong</h2>
				</div>
			)}
		</div>
	);
};

export default TeamSelection;
