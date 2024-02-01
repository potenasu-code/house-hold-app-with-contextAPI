import { Transaction, Balance } from "../types";

//収入、支出、残高、の合計金額を求める関数
export function financeCalculations(transactions: Transaction[]): Balance {
  return transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.amount;
      } else {
        acc.expense += transaction.amount;
      }
      acc.balance = acc.income - acc.expense;

      return acc;
    },
    { income: 0, expense: 0, balance: 0 }
  );
}

//日付ごとの収支を計算する関数💰
export function calculateDailyBalances(
  transactions: Transaction[]
): Record<string, Balance> {
  return transactions.reduce<Record<string, Balance>>((acc, transaction) => {
    const day = transaction.date;
    if (!acc[day]) {
      acc[day] = { income: 0, expense: 0, balance: 0 };
    }

    if (transaction.type === "income") {
      acc[day].income += transaction.amount;
    } else {
      acc[day].expense += transaction.amount;
    }

    acc[day].balance = acc[day].income - acc[day].expense;
    return acc;
  }, {});
}
