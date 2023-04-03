import Sequelize from "sequelize";
import db from "../config/dbConnect.js";

const doc = db.define('documento',
{
    id: { type: Sequelize.INTEGER, primaryKey: true },
    nome: { type: Sequelize.STRING, required: true },
    texto: { type: Sequelize.STRING, required: true}
});

doc.sync();

export default doc