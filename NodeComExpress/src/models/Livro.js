import Sequelize from "Sequelize";
import db from "../config/dbConnect.js";

const livroSchema = db.define('livros',
    {
        id: { type: Sequelize.INTEGER, primaryKey: true},
        titulo: { type: Sequelize.STRING, required: true},
        autor: {type: Sequelize.STRING, required: true},
        editora: {type: Sequelize.STRING, required: true},
        numeroPaginas: {type: Sequelize.INTEGER},
        status: {type: Sequelize.STRING}
    }
)

livroSchema.sync();

const livros = livroSchema

export default livros;