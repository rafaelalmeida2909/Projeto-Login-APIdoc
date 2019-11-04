/**
 * @api {get} /esteiras/:id/sensores Devolve uma lista de sensores cadastrados em uma esteira.
 * @apiName GetSensores
 * @apiGroup GetSensores
 * @apiParam {Number} idE Identificador numérico único para uma esteira.
 * @apiSuccess {Array} sensores Devolve um array com todos os ids dos sensores.
 * 
 * @apiSuccessExample Exemplo de Sucesso:
 *     HTTP/1.1 200 OK
 *     {
 *       "Sensores": ["S10000","S10001","S10002","S10003"]
 *     }
 *
 * @apiError ExcecaoNenhumSensorCadastrado Não foi encontrado nenhum sensor cadastrado na esteira.
 *
 * @apiErrorExample Exemplo de Erro:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "erro": "ExcecaoNenhumSensorCadastrado"
 *     }
 */