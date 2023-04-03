import jwt from 'jsonwebtoken';

const chaveSecreta = 'senha';

const token = jwt.sign(
    {
        apelido: "jm",
        curso: "segurança node.js"
    }, chaveSecreta
);

console.log(token);

const tokenDecodificado = jwt.verify(token, chaveSecreta)
console.log(tokenDecodificado);