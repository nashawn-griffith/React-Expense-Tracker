import {ADD_TRANSACTION, DELETE_TRANSACTION} from '../actions/types';

export const deleteTransaction = (id, dispatch) => {
	dispatch({
		type: DELETE_TRANSACTION,
		payload: {
			id,
		},
	});
};

export const addTransaction = (body, dispatch) => {
	dispatch({
		type: ADD_TRANSACTION,
		payload: {
			body,
		},
	});
};
