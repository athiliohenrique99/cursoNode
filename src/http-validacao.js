import chalk from 'chalk';
import fetch from 'node-fetch'

function extrairLinks(arrLinks) {
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join())
}

async function checaStatus(listaURLs) {
    const arrStatus = await Promise
        .all(
            listaURLs.map(async (url) => {
                try {
                    const response = await fetch(url)
                    return response.status;
                } catch (erro) {
                    return manejarErro(erro);
                }

            })
        )
    return arrStatus;

}

function manejarErro(erro) {
    if (erro.code === 'ENOTFOUND'){
        return 'Link não encontrado.';
    }else{
        return 'Ocorreu algun erro.';
    }
}

export default async function listaValidada(listaDeLinks) {
    const links = extrairLinks(listaDeLinks)
    const status = await checaStatus(links)

    return listaDeLinks.map((objeto, indice) => ({
        ...objeto,
        status: status[indice]
    }))
}


