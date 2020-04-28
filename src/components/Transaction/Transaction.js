import React, {Fragment, useContext} from 'react';
import {TransactionContext} from '../../context/Transaction';
import {TransactionItem} from '../TransactionItem/transactionItem';

const Transaction = () => {
	const {transaction} = useContext(TransactionContext);

	const display = () => {
		if (transaction.length === 0) {
			return <p>No Transactions to display</p>;
		}

		return (
			<ul className='list'>
				{transaction.map(transaction => (
					<TransactionItem key={transaction.id} transaction={transaction} />
				))}
			</ul>
		);
	};

	return <Fragment>{display()}</Fragment>;
};

export {Transaction};
