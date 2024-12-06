import { createContext } from "react";
import { plumbers } from "../assets/assets"; 

// Create a context
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "$"; 

  // Define the value to be provided to the context
  const value = {
    plumbers,
    currencySymbol, 
  };

  return (
    <AppContext.Provider value={value}>
      {props.children} 
    </AppContext.Provider>
  );
};

export default AppContextProvider;
