import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import Navigation from './../../components/navigation'
import Search from './../../container/search'
import SearchResult from './../../container/searchResult'

const Layout = () => {
	return (
		<div>
			<Navigation />
			<Switch>
				<Route path="/search" exact component={Search} />
				<Route path="/search-results" exact component={SearchResult} />
				<Redirect to="/search" />
			</Switch>
		</div>
	)
}

export default Layout