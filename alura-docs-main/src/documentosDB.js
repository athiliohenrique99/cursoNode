import doc from "./models/documentos.js";

function obterDocumentos(){
    const documentos = doc.findAll().toArray();
    return documentos;
}

function encontrarDocumento(nome) {
    const documento = doc.findAll({where: {'nome': nome}})

    return documento;
}

function atualizaDocumento(nome, texto){
    const atualizacao = doc.update(
        {texto},
        {where: {nome}}
    );

    return atualizacao;
}

export { encontrarDocumento, atualizaDocumento, obterDocumentos }