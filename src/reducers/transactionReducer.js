import {ADD_TRANSACTION, DELETE_TRANSACTION, GET_TRANSACTIONS} from '../actions/types';
import {v4 as uuidv4} from 'uuid';

const TransactionReducer = (state, action) => {
	switch (action.type) {
		case ADD_TRANSACTION:
			return [
				...state,
				{
					id: uuidv4(),
					text: action.payload.body.text,
					amount: action.payload.body.amount,
				},
			];

		case DELETE_TRANSACTION:
			return state.filter(item => item.id !== action.payload.id);

		case GET_TRANSACTIONS:
			return JSON.parse(localStorage.getItem('transactions'));

		default:
			return state;
	}
};

export {TransactionReducer};
