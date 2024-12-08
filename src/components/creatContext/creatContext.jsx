import React, { createContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = (props) => {
  const [userData, setUserData] = useState(null);

  const contextValue = {
    userData,
    setUserData, // Expose setUserData directly
  };

  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
};
