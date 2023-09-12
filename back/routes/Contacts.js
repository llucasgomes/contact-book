import { Router } from "express";
import {
  delContact,
  getContacts,
  postContact,
  putContact,
} from "../controllers/Contacts.js";

const router = Router();

router.get("/", getContacts);
router.post("/", postContact);
router.put("/:id", putContact);
router.delete("/:id", delContact);

export default router;
