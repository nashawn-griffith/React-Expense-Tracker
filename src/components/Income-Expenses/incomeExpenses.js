import React, {useContext} from 'react';
import {TransactionContext} from '../../context/Transaction';

const IncomeExpenses = () => {
	const {transaction} = useContext(TransactionContext);
	let totals = transaction.map(item => parseInt(item.amount));
	let income = totals.filter(item => item > 0).reduce((total, current) => (total += current), 0);
	let expense = totals.filter(item => item < 0).reduce((total, current) => (total += current), 0);

	return (
		<div className='inc-exp-container'>
			<div>
				<h4>Income</h4>
				<p className='money plus'>${income}</p>
			</div>

			<div>
				<h4>Expense</h4>
				<p className='money minus'>${expense}</p>
			</div>
		</div>
	);
};

export {IncomeExpenses};
