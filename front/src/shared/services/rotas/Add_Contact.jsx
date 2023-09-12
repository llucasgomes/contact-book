// import { bancoFake } from "../../storage/Fakebd";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export const AddContact = (item) => {
  const { users, setUsers } = useContext(DataContext);
  setUsers(...users, item);
  // bancoFake.push(item);
};
