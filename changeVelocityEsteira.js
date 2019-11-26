/**
 * @api {patch} /Esteiras/:idEsteira Altera velocidade de uma esteira.
 * 
 * @apiName changeVelocityEsteira
 * @apiGroup changeVelocityEsteira
 * 
 * @apiParam {Number} idEsteira Identificador numérico único para uma esteira.
 * @apiParam {Number} velocidade Pode alterar a velocidade(1, 2 ou 3) da esteira.
 * 
 * @apiSuccess {String} mensagem Devolve um string com a mensagem de sucesso.
 * @apiSuccess {Number} velocidade Devolve a velocidade alterada da esteira.
 * 
 * @apiParamExample {json} Exemplo de request:
 * HTTP/1.1 200 OK
 * {
 *      "idEsteira": 10010,
 *      "velocidade": 1
 * }
 * 
 * @apiSuccessExample Exemplo de Sucesso:
 * HTTP/1.1 200 OK
 * {
 *      "mensagem": "Velocidade atualizada",
 *      "velocidade": 1
 * }
 *
 * @apiError AtualizaçãoDaVelocidadeFalhou A atualização da velocidade da esteira falhou.
 *
 * @apiErrorExample Exemplo de Erro:
 * HTTP/1.1 404 Not Found
 * {
 *      "erro": "AtualizaçãoDaVelocidadeFalhou"
 * }
 */
