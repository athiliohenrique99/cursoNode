import {
    encontrarDocumento,
    atualizaDocumento,
    obterDocumentos,
    adicionarDocumento
} from "./documentosDB.js";
import io from "./server.js";


io.on("connection", (socket) => {
    socket.on("obter_documento", async (devolverDocumentos) => {
        const documentos = await obterDocumentos();

        devolverDocumentos(documentos);
    });

    socket.on("adicionar_documento", async (nome) => { 

        const documentoExiste = (await encontrarDocumento !== null);

        if(documentoExiste){
            socket.emit("documento_existente", nome);
        }else{
            const resultado = await adicionarDocumento(nome);
            io.emit("adicionar_documento_interface", nome);
        }
    });

    socket.on("selecionar_documento", async (nomeDocumento, devolverTexto) => {
        socket.join(nomeDocumento)

        const documento = await encontrarDocumento(nomeDocumento)

        if (documento) {

            devolverTexto(documento.texto);
        }

    });

    socket.on("texto_editor", async ({ texto, nomeDocumento }) => {
        const atualizacao = await atualizaDocumento(nomeDocumento, texto);

        if (atualizacao.modifiedCount) {
            socket.to(nomeDocumento).emit("texto_editor", texto);
        }
    });
});
