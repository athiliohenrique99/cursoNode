import io from "./server.js";

import { encontrarDocumento, atualizaDocumento, obterDocumentos } from "./documentosDB.js";

io.on("connection", (socket) => {
    socket.on("obter_documento", async (devolverDocumentos) => {
        const documentos = await obterDocumentos();
        
        devolverDocumentos(documentos);
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

        if(atualizacao.modifiedCount){
            socket.to(nomeDocumento).emit("texto_editor", texto);
        }
    });
});
