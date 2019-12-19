import React from 'react';
import {Link} from 'react-router-dom';
import './CustomerListItem.css';
import {ICustomer} from '../../interfaces/Interfaces';
import {getIdFromUrl} from '../../utilities/utils';

interface ICustomerListItemProps {
	customerInfo: ICustomer;
}

/**
* This is the functional component for CustomerListItem
* @param {ICustomerListItemProps} props
* @constructor
*/
function CustomerListItem (props: ICustomerListItemProps): React.ReactElement {

	return (
		<div className="customer-list-item" key={props.customerInfo.id}>
			<span><b>Name:</b> {props.customerInfo.name}</span>
			<span>
				{/*<Link to={`/customers/${getIdFromUrl('customers', props.customerInfo.url)}`}>*/}
					{props.customerInfo.budget}
				{/*</Link>*/}
			</span>
			<span><b>Spent:</b> {props.customerInfo.budget_spent}</span>
			<span><b>Date:</b> {props.customerInfo.date_of_first_purchase}</span>
		</div>
	);
}

export default CustomerListItem;
