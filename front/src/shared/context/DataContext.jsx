// 1 - criar contexto
import { createContext, useEffect, useState } from "react";
import { bancoFake } from "../storage/Fakebd";

export const DataContext = createContext();

// 2 - criar provider

export const DataContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  useEffect(() => {
    setUsers(bancoFake);
  }, []);

  return (
    <DataContext.Provider value={{ users, setUsers, onEdit, setOnEdit }}>
      {children}
    </DataContext.Provider>
  );
};
