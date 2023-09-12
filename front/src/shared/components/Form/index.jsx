/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { Button, FormContainer, Input, InputArea, Label } from "./styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { clearInputs, isAllValues } from "../../functions";
import { API } from "../../services/api";

export const Form = ({ onEdit, setOnEdit, getContacts }) => {
  const ref = useRef();
  const user = ref.current;

  // verifica se tem algo dentro de "onEdit" e
  // preenche os campos com seus valores
  useEffect(() => {
    if (onEdit) {
      const { name, email, phone, dateBirth } = user;

      const data = onEdit.dateBirth.split("/");

      console.log(data);
      name.value = onEdit.name;
      email.value = onEdit.email;
      phone.value = onEdit.phone;

      dateBirth.value = onEdit.dateBirth;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault(); //interrompe o "refresh" da pagina

    const user = ref.current;
    const { name, email, phone, dateBirth } = user;

    // 1º Verificação de imputs "cheio || vazio"
    // com a function "isAllValues"
    if (isAllValues(user)) {
      // 2º verifica se o hook "onEdit"
      // é "!= de null", retornando "true"
      if (onEdit) {
        // Ira fazer uma alteração no banco apartir do "id",
        // com o metodo "put"
        await API.put(`/${onEdit.id}`, {
          name: name.value,
          email: email.value,
          phone: phone.value,
          dateBirth: dateBirth.value,
        })
          .then(() => {
            clearInputs(user); // Limpa todos os campos
            getContacts(); //Atualiza lista
            toast.success("Edição Salva", { autoClose: 2000 });
          })
          .cath(() => toast.error("Algo de Errado na Edição"));
      } else {
        // Ira fazer uma alteração no banco apartir do "id",
        // com o metodo "post"
        await API.post("/", {
          name: name.value,
          email: email.value,
          phone: phone.value,
          dateBirth: dateBirth.value,
        })
          .then(() => {
            clearInputs(user); // Limpa todos os campos
            getContacts(); //Atualiza lista
            toast.success("Salvo com sucesso", { autoClose: 2000 });
          })
          .cath(() =>
            toast.error("Algo de Errado no Criação", { autoClose: 2000 })
          );
      }

      clearInputs(user); // Limpa todos os campos
      setOnEdit(null); // retorna o hook "onEdit" para "null"
    } else {
      toast.warn("Preencha todos os campos!", { autoClose: 2000 });
    }
    getContacts();
  };
  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="name" />
      </InputArea>
      <InputArea>
        <Label>E-mail</Label>
        <Input name="email" type="email" />
      </InputArea>
      <InputArea>
        <Label>Telefone</Label>
        <Input name="phone" />
      </InputArea>
      <InputArea>
        <Label>Data de Nascimento</Label>
        <Input name="dateBirth" type="date" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
      <ToastContainer />
    </FormContainer>
  );
};
