import React, { useContext, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import LoaderLogo from '../../components/Loader/LoaderLogo.jsx';
import { themeContext } from '../../context';
import './Splash.css'

function AnimatedSplash() {
	const { theme } = useContext(themeContext)

	return (
		<div className="logo_wrapper">
			<div className="screen" style={{ backgroundColor: theme.text }}>
				<LoaderLogo />
			</div>
		</div>
	);
}

function Splash() {
	const [redirect, setRedirect] = useState(false);

	useEffect(() => {
		let timer = setTimeout(() => setRedirect(true), 5500);
		return () => clearTimeout(timer);
	}, [])

	return redirect
	? <Navigate to='/home' />
	: <AnimatedSplash />;
}

export default Splash;