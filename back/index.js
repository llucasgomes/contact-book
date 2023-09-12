import express from "express";
import cors from "cors";

import contactsRoutes from "./routes/Contacts.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/", contactsRoutes);

app.listen(8800);
