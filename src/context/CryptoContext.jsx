import { createContext, useState } from "react";

// create context object
export const CryptoContext = createContext({});

//create the provider component
export const CryptoProvider = ({ children }) => {
  const [test, setTest] = useState("this is test state");

  return (
    <CryptoContext.Provider value={{ test, setTest }}>{children}</CryptoContext.Provider>
  );
};