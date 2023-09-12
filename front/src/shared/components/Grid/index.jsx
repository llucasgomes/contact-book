import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from "../../services/api";
import { Table, Tbody, Td, Th, Thead, Tr } from "./styled";
import { FaTrash, FaEdit } from "react-icons/fa";

export const Grid = ({ users, setUsers, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await API.delete(`/${id}`).then((res) => {
      const newList = users.filter((contact) => contact.id !== id);

      setUsers(newList);
      toast.success("Contact Remove", { autoClose: 1000 });
    });

    setOnEdit(null);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Phone</Th>
          <Th>Birth Day</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((contact, index) => (
          <Tr key={index}>
            <Td width="30%">{contact.name}</Td>
            <Td width="30%">{contact.email}</Td>
            <Td width="20%" onlyWeb>
              {contact.phone}
            </Td>
            <Td width="15%" onlyWeb>
              {contact.dateBirth}
            </Td>

            <Td alignCenter width="7%">
              <FaEdit className="icon" onClick={() => handleEdit(contact)} />
            </Td>
            <Td alignCenter width="7%">
              <FaTrash
                className="icon"
                onClick={() => handleDelete(contact.id)}
              />
            </Td>
          </Tr>
        ))}
        <ToastContainer autoClose={1000} closeOnClick rtl={false} />
      </Tbody>
    </Table>
  );
};
