export const typography = {
	fontFamily: `Roboto, sans-serif`,
	h1: {
		fontSize: '3.75rem', // 60px
		lineHeight: '4.6875rem', // 75px
		fontWeight: '700',
		'@media (max-width: 992px)': {
			fontSize: '2.75rem', // 32px
			lineHeight: '3.75rem', // 60px
		},
		'@media (max-width: 600px)': {
			fontSize: '2rem', // 32px
			lineHeight: '2.625rem', // 42px
		},
	},
	h2: {
		fontSize: '3.375rem', // 54px
		lineHeight: '4rem', // 64px
		fontWeight: '700',

		'@media (max-width: 600px)': {
			fontSize: '1.875rem', // 30px
			lineHeight: '2.375rem', // 38px
		},
	},
	h3: {
		fontSize: '2.25rem', // 36px
		lineHeight: '3.125rem', // 50px
		fontWeight: '700',

		'@media (max-width: 600px)': {
			fontSize: '1.625rem', // 26px
			lineHeight: '2.375rem', // 38px
		},
	},
	h4: {
		fontSize: '1.75rem', // 28px
		lineHeight: '2.375rem', // 38px
		fontWeight: '500',

		'@media (max-width: 600px)': {
			fontSize: '1.25rem', // 20px
			lineHeight: '1.75rem', // 28px
		},
	},
	h5: {
		fontSize: '1.25rem', // 20px
		lineHeight: '1.625rem', // 26px
		letterSpacing: '0.2px',
		fontWeight: '500',

		'@media (max-width: 600px)': {
			fontSize: '1.1875rem', // 19px
			lineHeight: '1.5rem', // 24px
			letterSpacing: '-0.1px',
		},
	},
	h6: {
		fontSize: '1.125rem', // 18px
		lineHeight: '1.5rem', // 24px
		letterSpacing: '0.2px',
		fontWeight: '500',

		'@media (max-width: 600px)': {
			letterSpacing: '0.1px',
		},
	},
	subtitle1: {
		fontSize: '.875rem', // 14px
		lineHeight: '1.125rem', // 18px
		fontWeight: '500',
	},
	subtitle2: {
		fontSize: '.8125rem', // 13px
		lineHeight: '1.0625rem', // 17px
		fontWeight: '700',
	},
	body1: {
		fontSize: '1rem', // 16px
		lineHeight: '1.4375rem', // 23px
		letterSpacing: '0.1px',
		fontWeight: '400',
	},
};
