import React, {Fragment, useContext} from 'react';
import PropTypes from 'prop-types';
import {TransactionContext} from '../../context/Transaction';

const Balance = ({message}) => {
	const {transaction} = useContext(TransactionContext);
	const displayBalance = () => {
		return transaction.map(item => parseInt(item.amount)).reduce((total, current) => (total += current), 0);
	};
	return (
		<Fragment>
			<h4>{message}</h4>
			<h1 id='balance'> {displayBalance()}</h1>
		</Fragment>
	);
};

Balance.propTypes = {
	message: PropTypes.string.isRequired,
};

export {Balance};
