import React, {useState, useEffect} from 'react';
import {Redirect, RouteComponentProps} from 'react-router-dom';
import {ICustomer} from '../../interfaces/Interfaces';
import './CustomerDetail.css';

interface ICustomerRouterProps extends RouteComponentProps<ICustomerDetailProps>{
	customerId: string;
}

interface ICustomerDetailProps {
	customerId: string;
}

/**
 *This is the functional component for CustomerDetail
 * @param {ICustomerRouterProps} props
 * @constructor
 */
function CustomerDetail (props: ICustomerRouterProps): React.ReactElement {
	const [customerDetails, setcustomerDetails] = useState<ICustomer>(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [isError, setIsError] = useState(false);
	const customerId = Number(props.match.params.customerId);
	const customerUrl = `https://swapi.co/api/customers/${customerId}`;

	const onCustomerDetailsLoaded = (customerData: ICustomer): void => {
		setcustomerDetails(customerData);
		setIsLoaded(true);
	};

	const loadCustomerDetails = async (url: string): Promise<void> => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			onCustomerDetailsLoaded(data);
		} catch (error) {
			setIsError(true);
			setIsLoaded(false);
		}
	};

	useEffect(() => {
		loadCustomerDetails(customerUrl);
	}, []);

	if (isError) {
		return <Redirect to="/customers" />;
	}

	if (!isLoaded) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<div className="customer-details-title text-centered">
				<h1>{customerDetails.name}</h1>
			</div>
			<div className="customer-details-header">
				<div><b>Release date:</b> {customerDetails.date_of_first_purchase}</div>
				<div><b>Producer:</b> {customerDetails.budget}</div>
			</div>
			<div className="customer-details-summary">
				<b>Summary:</b>
				<div>{customerDetails.budget_spent}</div>
			</div>
			<div>
			</div>
		</div>
	);
}

export default CustomerDetail;
