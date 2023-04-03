import { createHash } from 'crypto';

;

class Usuario {

    constructor(nome, senha){
        this.nome = nome;
        this.hash = this.criahash(senha);
    }
 
    criahash(senha){
        return createHash('sha256').update(senha).digest('hex')
    }

    autentica(nome, senha){
        if(nome === this.nome && this.hash === this.criahash(senha)){
            console.log("Usuario auteticado com sucesso");
            return true;
        }

        // console.log('Usuário ou senha incorretos.');
        return false;
    }

}

const usuario = new Usuario('Athilio Henrique', '1337');

for( let senhaTeste = 0; senhaTeste < 10000; senhaTeste++){
    if (usuario.autentica("Athilio Henrique", senhaTeste.toString())){
        console.log(`A senha do usuário é ${senhaTeste}`);
    }
}