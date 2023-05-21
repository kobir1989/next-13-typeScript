import React from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import Icon from '@/components/Atoms/Icons/Icon';

type CardProps = {
	title: string;
	description: string;
	date: string;
	isCompleted: boolean;
	isImportant: boolean;
	updateChecked: (id: string) => void;
	id: string;
	updateToImportant: (id: string) => void;
};

const Card = ({ title, updateToImportant, description, date, isCompleted, isImportant, updateChecked, id }: CardProps) => {
	const formattedDate = new Date(date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	return (
		<Box p={3} bgcolor='#FFF' borderRadius='1rem' width='100%'>
			<Stack direction='row' justifyContent='space-between' mb={2}>
				<Typography variant='body2'>{formattedDate}</Typography>
				<IconButton disableRipple sx={{ p: 0 }}>
					<Icon name='moreIcon' />
				</IconButton>
			</Stack>
			<Stack gap={2}>
				<Typography variant='h4'>{title}</Typography>
				<Typography variant='body1' display={'block'}>
					{description}
				</Typography>
			</Stack>
			<Stack direction='row' justifyContent='space-between' mt={2}>
				<IconButton disableRipple sx={{ p: 0 }} onClick={() => updateChecked(id)}>
					<Icon name={isCompleted ? 'radioChecked' : 'radioUnchecked'} color='success' />
				</IconButton>
				<IconButton disableRipple sx={{ p: 0 }} onClick={() => updateToImportant(id)}>
					<Icon name={isImportant ? 'starFilled' : 'starOutlined'} color='warning' />
				</IconButton>
			</Stack>
		</Box>
	);
};

export default Card;
