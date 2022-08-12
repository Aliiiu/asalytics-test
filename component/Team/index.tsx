import Image from 'next/image';
import React from 'react';
import { teamArray } from '../../dummy-data/team';
import TeamCard from '../UI/TeamCard';
import styles from './team.module.css';

const TeamSelection = () => {
	return (
		<div style={{ paddingTop: 64, paddingBottom: 32 }}>
			<div className={styles.gridContainer}>
				{teamArray.map((item, id) => (
					<TeamCard key={id}>
						<Image
							src={item.src}
							alt={'algorand logo'}
							width='30px'
							height={57}
							objectFit='contain'
						/>
						<h3>{item.cardHeader}</h3>
						<button
							className={styles.button}
							style={{
								backgroundColor:
									item.status === 'Available' ? '#6FD791' : '#BC3131',
							}}
						>
							{item.status}
						</button>
					</TeamCard>
				))}
			</div>
		</div>
	);
};

export default TeamSelection;
