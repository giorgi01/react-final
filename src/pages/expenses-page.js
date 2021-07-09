import Balance from '../components/balance/Balance';
import IncomeExpenses from '../components/balance/IncomeExpenses';
import TransactionList from '../components/transactions/TransactionList';
import AddTransaction from '../components/transactions/AddTransaction';

function ExpensesPage() {
  return (
    <div>
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </div>
  );
}

export default ExpensesPage;
