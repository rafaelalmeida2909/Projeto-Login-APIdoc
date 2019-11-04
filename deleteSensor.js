/**
 * @api {delete} /esteiras/:id/sensor/:id/excluir Exclui um sensor de uma esteira em produção.
 * @apiName DeleteSensor
 * @apiGroup DeleteSensor
 * @apiParam {Number} idE Identificador numérico único para uma esteira.
 * @apiParam {Number} idS Identificador numérico único para um sensor.
 * @apiSuccess {String} id Devolve um string com o id do sensor excluído.
 * 
 * @apiSuccessExample Exemplo de Sucesso:
 *     HTTP/1.1 200 OK
 *     {
 *       "excluidoId" = "S10000" 
 *     }
 *
 * @apiError ExcecaoSensorNaoEncontrado O sensor com o id desejado, não foi encontrado.
 *
 * @apiErrorExample Exemplo de Erro:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "erro": "ExcecaoSensorNaoEncontrado"
 *     }
 */