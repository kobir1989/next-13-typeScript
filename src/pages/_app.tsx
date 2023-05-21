import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme';
import { CssBaseline } from '@mui/material';
import createEmotionCache from '@/createEmotionCache';
import { CacheProvider, EmotionCache } from '@emotion/react';

const clientSideEmotionCache = createEmotionCache();
export interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}
export default function App(props: MyAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	);
}
