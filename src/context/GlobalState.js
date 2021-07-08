import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  transactions: [
    { id: 1, text: 'Salary', amount: 1000 },
    { id: 2, text: 'Book', amount: -12 },
    { id: 3, text: 'Camera', amount: -700 },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
