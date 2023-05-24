import React from 'react';
import Navigation from '@/components/Organisms/Navigation/Navigation';
import Footer from '@/components/Organisms/Footer/Footer';
import styled from '@emotion/styled';
import Head from 'next/head';

const Main = styled('main')({
	maxWidth: '1200px',
	margin: 'auto',
	minHeight: '100vh',
	padding: '0 2rem',
});

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Navigation />
			<Main>{children}</Main>
			<Footer />
		</>
	);
};

export default Layout;
