import React, { FC } from 'react';
import styles from './card.module.css';

const Card: FC<{ children: React.ReactNode }> = ({ children }) => {
	return <div className={styles.card}>{children}</div>;
};

export default Card;
