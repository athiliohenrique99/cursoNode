import { generateKeyPairSync } from 'crypto'

const {privateKey, publicKey } = generateKeyPairSync('rsa',
    {
        modulusLength: 2048,

        publicKeyEncoding: {
            type: 'spki',
            format: 'pem',
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
        },
    }
)

let dados = "Essa string vaiser assinada"

//Assinatura

assinador.update(dados);

const Assinatura = assinador.sing(privateKey, 'hex');
console.log(`Assinatura: ${assinatura}`);

// Envio ------------ Documento, assinatuta

const verificador = createVerify()
verificador.update(dados);

const Everificado = verificador.verify(publicKey, assinatura, 'hex');

console.log(Everificado);