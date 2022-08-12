import React, { FC } from 'react';
import styles from './teamCard.module.css';

const TeamCard: FC<{ children: React.ReactNode }> = ({ children }) => {
	return <div className={styles.card}>{children}</div>;
};

export default TeamCard;
