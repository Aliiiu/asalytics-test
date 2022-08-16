import React from 'react';
import styles from './asset.module.css';
import { useQuery, gql } from '@apollo/client';
import Loader from '../UI/Loader/Loader';
import { BiError } from 'react-icons/bi';
import CustomImage from '../UI/CustomImage/CustomImage';
import Card from '../UI/Card/Card';

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

const Asset = () => {
	const { loading, error, data } = useQuery(GET_LOCATIONS);
	return (
		<div style={{ paddingTop: 64, paddingBottom: 32 }}>
			<div className={styles.gridContainer}>
				{data &&
					data.asalist.result
						.filter((item: any) => item.logo)
						.map((item: any) => (
							<Card key={item.assetId}>
								<CustomImage
									src={item.logo}
									alt={item.name}
									style={{ width: 30, height: 57 }}
								/>
								<h3>{item.name}</h3>
								<div
									className={styles.status}
									style={{
										backgroundColor: item.available ? '#6FD791' : '#BC3131',
									}}
								>
									{item.available ? 'Available' : 'Unavailable'}
								</div>
							</Card>
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

export default Asset;
