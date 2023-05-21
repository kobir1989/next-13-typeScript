import React from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import Icon from '@/components/Atoms/Icons/Icon';

type CardProps = {
	title: string;
	description: string;
	date: string;
	isCompleted: boolean;
	isImportant: boolean;
};

const Card = ({ title, description, date, isCompleted, isImportant }: CardProps) => {
	return (
		<Box p={3} bgcolor='#FFF' borderRadius='1rem' width='100%'>
			<Stack direction='row' justifyContent='space-between' mb={2}>
				<Typography variant='body2'>{date}</Typography>
				<IconButton disableRipple sx={{ p: 0 }}>
					<Icon name='moreIcon' />
				</IconButton>
			</Stack>
			<Stack gap={2}>
				<Stack direction='row' justifyContent='space-between'>
					<Box display='flex' gap={1}>
						<IconButton disableRipple sx={{ p: 0 }}>
							<Icon name={isCompleted ? 'radioChecked' : 'radioUnchecked'} />
						</IconButton>
						<Typography variant='h4'>{title}</Typography>
					</Box>
					<IconButton disableRipple sx={{ p: 0 }}>
						<Icon name={isImportant ? 'starFilled' : 'starOutlined'} />
					</IconButton>
				</Stack>
				<Typography variant='body1'>{description}</Typography>
			</Stack>
		</Box>
	);
};

export default Card;
