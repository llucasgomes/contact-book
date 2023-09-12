import { db } from "../db.js";

export const getContacts = (req, res) => {
  const comando = "SELECT * FROM contacts";

  db.query(comando, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const postContact = (req, res) => {
  const { name, email, phone, dateBirth } = req.body;

  const comando =
    "INSERT INTO contacts(`name`, `email`, `phone`, `dateBirth`) VALUES(?)";

  const values = [name, email, phone, dateBirth];

  db.query(comando, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Contato Salvo");
  });
};

export const putContact = (req, res) => {
  const { name, email, phone, dateBirth } = req.body;
  const { id } = req.params;

  const comando =
    "UPDATE contacts SET `name` = ?, `email` = ?, `phone` = ?, `dateBirth` = ? WHERE `id` = ?";

  const values = [name, email, phone, dateBirth];

  db.query(comando, [...values, id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Contato Atualizado com sucesso");
  });
};

export const delContact = (req, res) => {
  const { id } = req.params;
  const comando = "DELETE FROM contacts WHERE `id` = ?";

  db.query(comando, [id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Contato Deletado com sucesso");
  });
};
