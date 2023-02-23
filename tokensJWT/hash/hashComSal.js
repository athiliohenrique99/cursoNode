import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';

function criahashComSal(senha) {
    const sal = randomBytes(16).toString('hex');

    const senhaHasheada = scryptSync(senha, sal, 64).toString('hex');

    return `${sal}:${senhaHasheada}`;
}

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        [this.sal, this.hash] = criahashComSal(senha).split(':')
    }
    autentica(nome, senha) {
        if (nome === this.nome) {
            const testeHash = scryptSync(senha, this.sal, 64);
            const hasReal = Buffer.from(this.hash, 'hex');

            const hashesCorrespodem = timingSafeEqual(testeHash, hasReal);
            if (hashesCorrespodem) {
                console.log('Senhas correspondem');
                return true;
            }
        }

        console.log('Senhas não correspondem');
    }
}

const jm = new Usuario('Athilio Henrique', 'senha');

console.log(jm);

jm.autentica('Athilio Henrique', 'senha')
jm.autentica('Athilio Henrique', '23er')