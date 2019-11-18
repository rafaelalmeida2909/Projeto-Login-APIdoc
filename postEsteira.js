 /**
 * @api {post} /Esteiras Cadastra uma esteira.
 * 
 * @apiName PostEsteira
 * @apiGroup PostEsteira
 * @apiSuccess {String} mensagem Devolve um string com a mensagem de sucesso.
 * @apiSuccess {Number} idE Identificador numérico único para uma esteira.
 * 
 * @apiSuccessExample {json} Exemplo de retorno de Successo:
 * HTTP/1.1 200 OK
 * {    
 *      "mensagem": "Esteira cadastrada com sucesso."
 *      "idE": "E00001"
 * }
 * 
 * @apiError CadastroInvalido Não possível criar uma esteira
 *
 * @apiErrorExample Exemplo de Erro:
 * HTTP/1.1 404 Not Found
 * {
 *  "erro": "CadastroInvalido",
 * }
 */
