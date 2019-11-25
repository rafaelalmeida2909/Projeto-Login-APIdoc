/**
 * @api {patch} /Esteiras/:idEsteira Ativa ou desativa uma esteira.
 * 
 * @apiName changeStateEsteira
 * @apiGroup changeStateEsteira
 * 
 * @apiParam {Number} idEsteira Identificador numérico único para uma esteira.
 * @apiParam {Boolean} ativa True, se quero a esteira ativa, false, caso contrário.
 * 
 * @apiSuccess {String} mensagem Devolve um string com a mensagem de sucesso.
 * @apiSuccess {Boolean} ativa Devolve o estado da esteira. True, se está ativa e false, caso contrário.
 * 
 * @apiParamExample {json} Exemplo de request:
 * HTTP/1.1 200 OK
 * {
 *      "idEsteira": 10007,
 *      "ativa": true
 * }
 * 
 * @apiSuccessExample Exemplo de Sucesso:
 * HTTP/1.1 200 OK
 * {
 *      "mensagem": "Estado da esteira atualizado",
 *      "ativa": true
 * }
 *
 * @apiError MudançaFalhou A atualização da esteira falhou.
 *
 * @apiErrorExample Exemplo de Erro:
 * HTTP/1.1 404 Not Found
 * {
 *      "erro": "MudançaFalhou"
 * }
 */
