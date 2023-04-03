import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
.get("/livros", LivroController.listarLivros)
.get("/livros/:id", LivroController.buscarLivroPorId)
.get("/buscarlivrosPorAutor/:autor", LivroController.buscarLivroPorAutor)
.get("/buscarlivrosPorEditora/:editora", LivroController.buscarLivroPorEditora)
.post("/livros", LivroController.cadasatraLivro)
.put("/livros", LivroController.atualizarLivro)
.delete("/livros", LivroController.deletarLivro)

export default router;