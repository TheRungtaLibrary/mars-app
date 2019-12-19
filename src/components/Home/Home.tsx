import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CustomersList from '../CustomersList/CustomersList';
import Profile from '../Profile/Profile';
import NavigationLinksBox from '../NavigationLinksBox/NavigationLinksBox';
import CustomerDetail from '../CustomerDetail/CustomerDetail';
import PageUnderConstruction from '../PageUnderConstruction/PageUnderConstruction';
import './Home.css';

/**
* This is the functional component for Home
* @constructor
*/
function Home (): React.ReactElement {

	return (
		<Router>
			<div className="home-panel">
				<div className="left-panel card">
					<Profile />
					<NavigationLinksBox />
				</div>
				<div className="right-panel">
					<Switch>
						<Route exact path='/' component={CustomersList} />
						<Route exact path="/customers" component={CustomersList} />
						<Route path="/customers/:customerId" component={CustomerDetail} />
						<Route path="*" component={PageUnderConstruction} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default Home;
