import {creathash} from 'crypto'

function criarHash(dado, estrategia){
    return creathash(estrategia).update(dado).digest('hex')
}

const senhasComuns = ["senha", "123456", "senha123", "admin", "blink182", "meuAniversario",
"senha123456", "102030"]

const rainbowTable = senhasComuns.map(senha => {
    return [senha, criarHash(senha, 'MD4')]
})

console.log(rainbowTable);

const hashesVazadas = ["b7e94be513e96e8c45cd23d162275e5a12ebde9100a425c4ebcdd7fa4dcd897c"]