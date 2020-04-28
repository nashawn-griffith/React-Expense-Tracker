import React, {useContext} from 'react';
import {TransactionContext} from '../../context/Transaction';
import {deleteTransaction} from '../../actions/transactionActions';

const TransactionItem = ({transaction}) => {
	const {id, amount, text} = transaction;
	const {dispatch} = useContext(TransactionContext);

	const deleteItem = id => {
		deleteTransaction(id, dispatch);
	};

	const getStyle = () => {
		if (amount < 0) {
			return 'minus';
		}
		return 'plus';
	};

	return (
		<li className={getStyle()}>
			{text} <span>$ {amount}</span>
			<button className='delete-btn' onClick={e => deleteItem(id)}>
				x
			</button>
		</li>
	);
};

export {TransactionItem};
