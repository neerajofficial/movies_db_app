import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './hoc/layout'

const App = () => {
	return (
		<Router>
			<Layout />
		</Router>
		
	)
}

export default App
