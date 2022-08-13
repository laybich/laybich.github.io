import React from 'react';
import ReactDOM from 'react-dom/client';
import { BaseProvider, LightTheme } from 'baseui';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as styletron } from 'styletron-engine-atomic'

import './index.css';
import App from './App';
import './assests/font-awesome/css/all.css'

const engine = new styletron();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StyletronProvider value={engine}>
		<BaseProvider theme={LightTheme}>
			<App />
		</BaseProvider>
	</StyletronProvider>
);