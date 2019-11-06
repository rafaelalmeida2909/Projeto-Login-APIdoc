 /**
 * @api {get} /Esteiras/:id Devolve informações a respeito de um esteira.
 * @apiName GetEsteira
 * @apiGroup GetEsteira
 * @apiParam {Number} idEsteira Identificador numérico único para uma esteira.
 * @apiSuccess {Number} temperatura Temperatura da esteira em ºC.
 * @apiSuccess {Number} umidade Umidade da esteira.
 * @apiSuccess {Number} distancia Distância percorrida pela esteira em metros.
 * @apiSuccess {Array} idsSensores Array com identificadores dos sensores associados a esteira.
 *
 * @apiSuccessExample Exemplo de Sucesso:
 *
 * HTTP/1.1 200 OK
 * {
 *  "temperatura":100,
 *  "umidade": 0.5,
 *  "distancia": 2200,
 *  "idsSensores": ["S10000","S10001"],
 * }
 *
 * @apiError ExcecaoEsteiraNaoExiste Não foi feito nenhum cadastro de esteira com o Id solicitado.
 *
 *
 * @apiErrorExample Exemplo de Erro:
 * HTTP/1.1 404 Not Found
 * {
 *  "erro": "ExcecaoEsteiraNaoExiste",
 * }
 */
