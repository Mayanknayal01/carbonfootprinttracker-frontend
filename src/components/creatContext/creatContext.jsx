import React, { createContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = (props) => {
  // Initialize userData as an array with a default object
  const [userData, setUserData] = useState([
    {
      name: "Guest",
      transportmode: "public",
      distance: 0,
      electricity: 0,
      waste: 0,
      gas: 0,
      carbonfootprint: 0.0,
      date: new Date(),
    },
  ]);
  const  [userId, setUserId] = useState(null)

  console.log("Current userData:", userData);

  const contextValue = {
    userData,
    setUserData, // Expose setUserData directly
    userId,
    setUserId,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
};
