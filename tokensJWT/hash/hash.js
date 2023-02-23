import { createHash } from 'crypto';

function criahash(senha){
    return createHash('sha256').update(senha).digest('hex')
}

console.log(criahash('senha'));

class Usuario {
    constructor(nome, senha){
        this.nome = nome;
        this.hash = criahash(senha);
    }

    autentica(nome, senha){
        if(nome === this.nome && this.hash === criahash(senha)){
            console.log("Usuario auteticado com sucesso");
            return true;
        }

        console.log('Usuário ou senha incorretos.');
        return false;
    }

}

const usuario = new Usuario('Athilio Henrique', 'senha');

console.log(usuario);

usuario.autentica('Athilio Henrique', 'senha')
usuario.autentica('Athilio Henrique', 'outra')