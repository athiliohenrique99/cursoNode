import livros from "../models/Livro.js";

class LivroController {

    static listarLivros = async (req, res) => {

        await livros.findAll().then((response) => {
            return res.json({
                sucess: true,
                dados: response
            })
        }).catch(() => {
            return res.json({
                sucess: false,
                dados: "Não foi encontrado livros"
            })
        });
    }

    static cadasatraLivro = async (req, res) => {

        let msg = '';
        let validador = true;

        if (req.body.titulo == '') {
            msg = 'O titulo precisa ser informado.';
            validador = false;
        }

        if (req.body.autor == '') {
            msg = 'O autor precisa ser informado.';
            validador = false;
        }

        if (req.body.editora == '') {
            msg = 'A editora precisa ser informado.';
            validador = false;
        }

        if (validador == true) {

            req.body.status = 'A';

            await livros.create(req.body)
                .then(() => {
                    return res.json({
                        sucess: true,
                        mensagem: "Cadastrado com sucesso"
                    })
                }).catch(() => {
                    return res.status(400).json({
                        sucess: false,
                        mensagem: 'falha ao cadastrar'
                    })
                });
        } else {
            return res.json({
                sucess: false,
                mensagem: msg
            })
        }

    }

    static atualizarLivro = async (req, res) => {

        let livroAtualizado  = false;
        const data = new Date();

        livroAtualizado = await livros.update(
            {
                "titulo": req.body.titulo,
                "autor": req.body.autor,
                "editora": req.body.editora,
                "numeroPaginas": req.body.numeroPaginas,
                "updatedAt": data.getFullYear() + '-' + data.getMonth() + '-' + data.getDate() + ' ' + data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds()
            },
            {
                where: { id: req.body.id }
            }
        )

        if (livroAtualizado) {
            return res.status(200).json({
                sucess: true,
                mensage: 'Atualizado com sucesso.'
            })
        } else {
            return res.status(400).json({
                sucess: true,
                mensage: 'Falha ao atualizar.'
            })
        }
    }

    static deletarLivro = async (req, res) => {

        let livroDeletado  = false;
        const data = new Date();

        livroDeletado = await livros.update(
            {
                "status": 'E',
                "updatedAt": data.getFullYear() + '-' + data.getMonth() + '-' + data.getDate() + ' ' + data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds()
            },
            {
                where: { id: req.body.id }
            }
        )

        if (livroDeletado) {
            return res.status(200).json({
                sucess: true,
                mensage: 'Deletado com sucesso.'
            })
        } else {
            return res.status(400).json({
                sucess: true,
                mensage: 'Falha ao deletar.'
            })
        }
    }

    static buscarLivroPorId = async (req, res) => {

        await livros.findByPk(req.params.id).then((response) => {
            return res.json({
                sucess: true,
                dados: response
            })
        }).catch(() => {
            return res.json({
                sucess: false,
                dados: "Não foi encontrado livros"
            })
        });
    }

    static buscarLivroPorAutor = async (req, res) => {

        await livros.findAll({where: {'autor': req.params.autor}}).then((response) => {
            return res.json({
                sucess: true,
                dados: response
            })
        }).catch(() => {
            return res.json({
                sucess: false,
                dados: "Não foi encontrado livros"
            })
        });
    }

    static buscarLivroPorEditora = async (req, res) => {

        await livros.findAll({where: {'editora': req.params.editora}}).then((response) => {
            return res.json({
                sucess: true,
                dados: response
            })
        }).catch(() => {
            return res.json({
                sucess: false,
                dados: "Não foi encontrado livros"
            })
        });
    }
}

export default LivroController