import Sequelize from "Sequelize";

const documentosColecao = new Sequelize('motoboy', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

documentosColecao.authenticate().then(function(){
    console.log("conectado com sucesso");
}).catch(function(erro){
    console.log("falha ao se conectar: "+erro);
});

export default documentosColecao