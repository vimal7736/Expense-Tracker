import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// 1. Initial state loads from localStorage if available.
const initialState = {
    transactions: JSON.parse(localStorage.getItem('transactions')) || [
        { id: 1, text: 'Salary', amount: 30000 },
    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // 2. Effect to update localStorage whenever transactions change.
    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(state.transactions));
    }, [state.transactions]);

    // 3. Function to delete a transaction.
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    // 4. Function to add a transaction.
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
}
