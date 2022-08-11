import Image from 'next/image';
import React from 'react';

interface teamData {
	src: string;
	cardHeader: string;
	status: string;
}

const teamArray: teamData[] = [
	{
		src: '/card_logo.svg',
		cardHeader: 'Alogrand',
		status: 'Available',
	},
	{
		src: '/card_logo.svg',
		cardHeader: 'Alogrand',
		status: 'Available',
	},
	{
		src: '/card_logo.svg',
		cardHeader: 'Alogrand',
		status: 'Available',
	},
	{
		src: '/card_logo.svg',
		cardHeader: 'Alogrand',
		status: 'Available',
	},
	{
		src: '/card_logo.svg',
		cardHeader: 'Alogrand',
		status: 'Unavailable',
	},
	{
		src: '/card_logo.svg',
		cardHeader: 'Alogrand',
		status: 'Unavailable',
	},
	{
		src: '/card_logo.svg',
		cardHeader: 'Alogrand',
		status: 'Unavailable',
	},
	{
		src: '/card_logo.svg',
		cardHeader: 'Alogrand',
		status: 'Unavailable',
	},
	{
		src: '/card_logo.svg',
		cardHeader: 'Alogrand',
		status: 'Unavailable',
	},
	{
		src: '/card_logo.svg',
		cardHeader: 'Alogrand',
		status: 'Unavailable',
	},
	{
		src: '/card_logo.svg',
		cardHeader: 'Alogrand',
		status: 'Unavailable',
	},
	{
		src: '/card_logo.svg',
		cardHeader: 'Alogrand',
		status: 'Available',
	},
];

const TeamSelection = () => {
	return (
		<div style={{ paddingTop: 64, paddingBottom: 32 }}>
			<div
				style={{
					display: 'grid',
					gap: 32,
					gridTemplateColumns: 'auto auto auto auto',
				}}
			>
				{teamArray.map((item, id) => (
					<div
						style={{
							border: '1px solid #B7BECC',
							borderRadius: 10,
							display: 'flex',
							padding: '32px 0',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
						key={id}
					>
						<Image
							src={item.src}
							alt={'algorand logo'}
							width='30px'
							height={57}
						/>
						<h3>{item.cardHeader}</h3>
						<button
							style={{
								backgroundColor:
									item.status === 'Available' ? '#6FD791' : '#BC3131',
								borderRadius: 8,
								border: 'none',
								padding: 8,
								color: '#ffffff',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							{item.status}
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default TeamSelection;
