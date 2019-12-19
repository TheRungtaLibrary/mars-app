import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router';
import CustomerListItem from '../CustomerListItem/CustomerListItem';
import Grid from '../../common/grid/Grid';
import {ICustomer} from '../../interfaces/Interfaces';
import './CustomersList.css';

/**
 *This is the functional component for CustomerListItem
 * @constructor
 */
function CustomersList (): React.ReactElement {
	const [customers, setCustomers] = useState<ICustomer[]>([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [isError, setIsError] = useState(false);
	const customersUrl = 'http://localhost:3000/customers';

	const columns: any = [{
		accessor: 'id',
		Header: 'Id',
	}, {
		accessor: 'name',
		Header: 'Name'
	}, {
		accessor: 'budget',
		Header: 'Budget'
	}, {
		accessor: 'budget_spent',
		Header: 'Budget spent'
	}, {
		accessor: 'date_of_first_purchase',
		Header: 'Date of first purchase'
	}];

	const onCustomersListLoaded = (customerData: ICustomer[]): void => {
		setCustomers(customerData);
		setIsLoaded(true);
	};

	const loadCustomers = async (url: string): Promise<void> => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			console.log(data);
			onCustomersListLoaded(data);
		} catch (error) {
			setIsError(true);
			setIsLoaded(false);
		}
	};

	useEffect(()=>{
		loadCustomers(customersUrl);
	}, []);

	if (isError) {
		return <Redirect to="/customers" />;
	}

	if (!isLoaded) {
		return <div>Loading...</div>;
	}

	const rowInfo = (customer: ICustomer): void => {
		console.log(customer);
	}

	return (
		<div>
			<div className="customer-list-header">
				<h1>Customers</h1>
			</div>
			<div className="customer-list-panel">
				{/*{customers.map((customer: ICustomer) => (
					<CustomerListItem
						customerInfo={customer}
						key={customer.id}
					/>
				))}*/}
				<Grid rowInfo={rowInfo} columns={columns} data={customers}/>
			</div>
		</div>
	);
}

export default CustomersList;
