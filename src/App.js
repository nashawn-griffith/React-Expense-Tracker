import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Balance} from './components/Balance/Balance';
import {IncomeExpenses} from './components/Income-Expenses/incomeExpenses';
import {Transaction} from './components/Transaction/Transaction';
import {TransactionInput} from './components/Transaction-Input/transactionInput';
import {TransactionProvider} from './provider/transactionProvider';

function App() {
	return (
		<div>
			<TransactionProvider>
				<Header title='Track your expenses' />
				<Balance message='Balance below....' />
				<IncomeExpenses />
				<Transaction />
				<TransactionInput />
			</TransactionProvider>
		</div>
	);
}

export default App;
