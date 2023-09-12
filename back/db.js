import { createConnection } from "mysql";
import "dotenv/config";

const { USER, DATA, SECRET_KEY, PORT, HOST } = process.env;

export const db = createConnection({
  host: HOST,
  user: USER,
  password: SECRET_KEY,
  database: DATA,
  port: PORT,
});

// Nome de usuário: llucasgomess2023
// Banco de dados: agendastack
// Email: llucassgomes.2023@gmail.com
// senha : wds1N8vcZmqfvDTThkuhWQzHVQk9E6WQz0a0w0KoWaLquIHI4T
//
