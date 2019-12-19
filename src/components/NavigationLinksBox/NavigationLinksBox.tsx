import React from 'react';
import NavigationLinkItem from '../NavigationLinkItem/NavigationLinkItem';
import './NavigationLinksBox.css';
import UserContext, {IUserContext} from "../../Contexts/UserContext";

/**
 *This is the functional component for NavigationLinksBox
 * @constructor
 */
function NavigationLinksBox (): React.ReactElement {

	const userContext: IUserContext = React.useContext(UserContext);
	const navLinksList = [{
		navUrl: '/customers',
		name: 'Customers'
	}, {
		navUrl: '/rechnungen',
		name: 'Rechnungen'
	}, {
		navUrl: '/zahlungen',
		name: 'Zahlungen'
	}, {
		navUrl: '/species',
		name: 'Species'
	}, {
		navUrl: '/posteingang',
		name: 'Posteingang'
	}, {
		navUrl: '/profil',
		name: 'Profil'
	}];

	/**
	 * onClick handler for Logout button
	 */
	function logout (): void {
		userContext.logout();
	}

	return (
		<div className="nav-panel">
			{navLinksList.map((item, index) => (
				<NavigationLinkItem
					navLinkInfo={item}
					key={index}
				/>
			))}
			<a type='button' onClick={logout}>Logout</a>
		</div>
	);
}

export default NavigationLinksBox;
