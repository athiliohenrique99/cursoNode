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

const usuario = new Usuario('Athilio Henrique', 'senha123');

const senhasComuns = ["senha", "123456", "senha123", "admin", "blink182", "meuAniversario",
"senha123456", "102030"]
senhasComuns.map( senha => {
    if(usuario.autentica("Athilio Henrique", senha)){
        console.log('A senha do usaário é ${senha}');
    }
})