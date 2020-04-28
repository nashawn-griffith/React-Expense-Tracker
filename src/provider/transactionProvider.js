import React, {useReducer, useEffect} from 'react';
import {TransactionContext} from '../context/Transaction';
import {TransactionReducer} from '../reducers/transactionReducer';
import {GET_TRANSACTIONS} from '../actions/types';

const TransactionProvider = props => {
	const [transaction, dispatch] = useReducer(TransactionReducer, []);

	useEffect(() => {
		dispatch({
			type: GET_TRANSACTIONS,
		});
	}, []);

	useEffect(() => {
		localStorage.setItem('transactions', JSON.stringify(transaction));
	}, [transaction]);

	return <TransactionContext.Provider value={{transaction, dispatch}}>{props.children}</TransactionContext.Provider>;
};

export {TransactionProvider};
