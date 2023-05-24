import React from 'react';
import { Box, Typography } from '@mui/material';
const Footer = () => {
	return (
		<Typography variant='body2' textAlign='center'>
			&copy; {new Date().getFullYear()} | Kabir Hossain
		</Typography>
	);
};

export default Footer;
