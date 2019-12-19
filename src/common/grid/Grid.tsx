import React from 'react';
import { useTable } from 'react-table';
import {ICustomer} from '../../interfaces/Interfaces';
import './Grid.scss';

interface IProps {
	columns: [];
	data: ICustomer[];
	rowInfo: (customer: ICustomer) => void;
}

/**
 *
 */
function Grid (props: IProps): React.ReactElement {

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow
	} = useTable(props);

	return (
		<div className='parent'>
			<div className='tableWrap'>
				<table {...getTableProps()}>
					<thead>
						{headerGroups.map((headerGroup: any) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column: any) => (
									<th {...column.getHeaderProps()}>{column.render('Header')}</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{rows.map(
							(row: any, i: number) => {
								prepareRow(row);
								return (
									<tr {...row.getRowProps({onClick: () => props.rowInfo(row)})}>
										{row.cells.map((cell: any) => {
											return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
										})}
									</tr>
								);
							}
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Grid;