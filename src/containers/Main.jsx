import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../pages/home/HomeComponents';
import Splash from '../pages/splash/Splash';
import Projects from '../pages/projects/Projects';
import Contact from '../pages/contact/Contact';
import { settings } from '../portfolio';

export default function Main() {
	if (settings.isSplash) {
		return (
			<div>
				<BrowserRouter basename='/'>
					<Routes>
						<Route
							path='/'
							element={<Splash />}
						/>
						<Route
							path='/home'
							element={<Home />}
						/>
						<Route
							path="/splash"
							element={<Splash />}
						/>
						<Route
							path="/projects"
							element={<Projects />}
						/>
						<Route
							path="/contact"
							element={<Contact />}
						/>
					</Routes>
				</BrowserRouter>
			</div>
		);
	}
}