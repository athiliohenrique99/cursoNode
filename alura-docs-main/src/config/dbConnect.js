import Sequelize from "Sequelize";

const db = new Sequelize('node_alura', 'root', '', {
    host: "localhost",
    dialect: "mysql",
    timeStamps: false
});

db.authenticate().then(function(){
    console.log("conectado com sucesso");
}).catch(function(erro){
    console.log("falha ao se conectar: "+erro);
});

export default db