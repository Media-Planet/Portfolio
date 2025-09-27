import express from "express";
import { postForm } from "../controllers/form.Controller.js";
const router = express.Router();

router.post("/:id", postForm);

export default router;