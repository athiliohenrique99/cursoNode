import Sequelize from "Sequelize";
import db from "../config/dbConnect.js";

const doc = db.define('documento',
    {
        // id: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
        nome: { type: Sequelize.STRING, required: true },
        texto: { type: Sequelize.STRING, required: true }
    });

doc.sync();

export default doc