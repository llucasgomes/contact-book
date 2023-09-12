import { useEffect, useState } from "react";
import { Form } from "../../shared/components/Form";
import { Grid } from "../../shared/components/Grid";
import { Container } from "./styled";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from "../../shared/services/api";

export const Home = () => {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    await API.get("/")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((res) => toast.success("Lista Atualizada", { autoClose: 1000 }));
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <Container>
      <h1>Agenda de Contatos</h1>
      <Form onEdit={onEdit} setOnEdit={setOnEdit} getContacts={getUsers} />
      <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
      <ToastContainer />
    </Container>
  );
};
