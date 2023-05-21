import React from 'react';
import { Button as MUIButton } from '@mui/material';
import { styled } from '@mui/material/styles';

type ButtonProps = {
	children: React.ReactNode;
	variant?: 'contained' | 'outlined';
	size?: 'small' | 'medium' | 'large';
	color?: 'primary' | 'secondary' | 'error' | 'warning' | 'success';
};

const CustomButton = styled(MUIButton)(({ theme }) => ({
	'&.MuiButton-contained': {
		boxShadow: 'none',
		borderRadius: '6px',
		fontSize: '0.9rem',
		textTransform: 'capitalize',
		'&.MuiButton-containedSizeSmall': {
			padding: '0.05rem 0.5rem',
			minWidth: '3rem',
			fontWeight: 300,
			fontSize: '0.8rem',
		},
		'&.MuiButton-containedSizeMedium': {
			padding: '0.12rem 0.95rem',
			fontWeight: 400,
			fontSize: '0.9rem',
		},
		'&.MuiButton-containedSizeLarge': {
			padding: '0.3rem 1.2rem',
			fontWeight: 400,
			fontSize: '0.9rem',
			minWidth: '6rem',
		},
	},

	'&.MuiButton-outlined': {
		border: `1px solid ${theme.palette.primary.dark}`,
		background: theme.palette.primary.light,
		color: theme.palette.primary.dark,
		fontWeight: 400,
		boxShadow: 'none',
		borderRadius: '6px',
		textTransform: 'capitalize',
		fontSize: '0.9rem',
		padding: '0.25rem 1.2rem',
		'&.MuiButton-containedSizeSmall': {
			padding: '0.05rem 0.5rem',
			minWidth: '3rem',
			fontWeight: 300,
			fontSize: '0.8rem',
		},
		'&.MuiButton-containedSizeMedium': {
			padding: '0.12rem 0.95rem',
			fontWeight: 400,
			fontSize: '0.9rem',
		},
		'&.MuiButton-containedSizeLarge': {
			padding: '0.3rem 1.2rem',
			fontWeight: 400,
			fontSize: '0.9rem',
			minWidth: '6rem',
		},
	},
}));
const Button = ({ children, ...props }: ButtonProps) => {
	return (
		<CustomButton disableRipple {...props}>
			{children}
		</CustomButton>
	);
};

export default Button;
