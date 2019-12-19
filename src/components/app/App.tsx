import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './app.css';
import Login from '../Login/Login';
import {UserProvider, UserConsumer} from '../../Contexts/UserContext';
import Home from '../Home/Home';

/**
 *This is the functional component for App
 * @constructor
 */
function App (): React.ReactElement {
	return (
		<UserProvider>
				<Router>
					<Switch>
						<Route path="/login">
							<UserConsumer>
								{(userContext): React.ReactElement => userContext.isLoggedIn ? <Redirect to="/customers" /> : <Login/>}
							</UserConsumer>
						</Route>
						<Route path="*">
							<UserConsumer>
								{(userContext): React.ReactElement => userContext.isLoggedIn ? <Home />: <Redirect to="/login" />}
							</UserConsumer>
						</Route>
					</Switch>
				</Router>
		</UserProvider>
	);
}

export default App;
