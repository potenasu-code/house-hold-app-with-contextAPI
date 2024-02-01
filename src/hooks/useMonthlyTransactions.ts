import { useMemo } from "react";
import { useAppContext } from "../context/AppContext";
import { Transaction } from "../types";
import { formatMonth } from "../utils/formatting";

const useMonthlyTransactions = (): Transaction[] => {
  const { transactions, currentMonth } = useAppContext();

  const monthlyTransactions = useMemo(() => {
    return transactions.filter((transaction) =>
      transaction.date.startsWith(formatMonth(currentMonth))
    );
  }, [transactions, currentMonth]);

  return monthlyTransactions;
};

export default useMonthlyTransactions;
