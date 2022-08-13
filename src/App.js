import React from 'react';
import './App.css';
import Main from './containers/Main';
import { ThemeProvider } from 'styled-components';
import { chosenTheme } from './theme';
import { GlobalStyles } from './global';
import { themeContext } from './context';


function App() {
	return (
		<themeContext.Provider value={{theme: chosenTheme}}>
			<ThemeProvider theme={chosenTheme}>
				<GlobalStyles />
				<Main />
			</ThemeProvider>
		</themeContext.Provider>
	);
}

export default App;
