import React, {Fragment, useState, useContext} from 'react';
import {addTransaction} from '../../actions/transactionActions';
import {TransactionContext} from '../../context/Transaction';

const TransactionInput = () => {
	const [text, setText] = useState('');
	const [amount, setAmount] = useState(0);
	const {dispatch} = useContext(TransactionContext);

	const handleSubmit = e => {
		e.preventDefault();
		let transactionBody = {
			text,
			amount,
		};

		addTransaction(transactionBody, dispatch);
		setText('');
		setAmount('');
	};

	return (
		<Fragment>
			<h3>Add new transaction</h3>
			<form onSubmit={handleSubmit}>
				<div className='form-control'>
					<label htmlFor='text'>Text</label>
					<input type='text' value={text} onChange={e => setText(e.target.value)} placeholder='Enter text...' />
				</div>
				<div className='form-control'>
					<label htmlFor='amount'>
						Amount <br />
					</label>
					<input type='number' value={amount} onChange={e => setAmount(e.target.value)} placeholder='Enter amount...' />
				</div>
				<button className='btn'>Add transaction</button>
			</form>
		</Fragment>
	);
};

export {TransactionInput};
