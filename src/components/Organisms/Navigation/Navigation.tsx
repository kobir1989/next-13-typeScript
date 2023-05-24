import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Icon from '@/components/Atoms/Icons/Icon';

const Input = styled('input')({
	padding: '0.2rem 0.6rem 0.2rem 1.8rem',
	width: '100%',
	height: '100%',
	border: 'none',
	borderRadius: '6px',
});

const Navigation = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						Note Keeper
					</Typography>
					<Box sx={{ background: '#FFF', height: '2.3rem', width: '15rem', position: 'relative', borderRadius: '6px' }}>
						<Input placeholder='Search...' />
						<IconButton disableRipple sx={{ p: 0, position: 'absolute', left: 2, top: '50%', transform: 'translate(0, -50%)' }}>
							<Icon name='search' />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navigation;
