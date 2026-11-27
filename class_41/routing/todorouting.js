

import express from "express";
import { deletetodo, gettodo, patchtodo, posttodo, puttodo } from "../controllers/todocontollers.js";
import { middleware } from "../middleware/middleware.js";


export  const router = express.Router();


router.post("/todo" , posttodo)
router.get("/todos" , middleware ,  gettodo)
router.put("/todo/:id" ,  puttodo);
router.patch("/todo/:id" , patchtodo);
router.delete("/todo/:id"  , deletetodo)


