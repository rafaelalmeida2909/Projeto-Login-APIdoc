 /**
 * @api {post} /cadastro/esteira Cadastra uma esteira.
 * 
 * @apiName PostEsteira
 * @apiGroup PostEsteira
 * 
 * @apiSuccess {Number} idE Identificador numérico único para uma esteira.
 * 
 * @apiSuccessExample {json} Exemplo de retorno de Successo:
 * HTTP/1.1 200 OK
 * {
 *  "idE": 001
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
