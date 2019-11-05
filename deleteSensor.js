/**
 * @api {delete} /Excluir/Sensor/:idSensor Exclui um sensor de uma esteira em produção.
 * @apiName DeleteSensor
 * @apiGroup DeleteSensor
 * @apiParam {Number} idSensor Identificador numérico único para um sensor.
 * @apiSuccess {String} idExcluido Devolve um string com o id do sensor excluído.
 * 
 * @apiSuccessExample Exemplo de Sucesso:
 *     HTTP/1.1 200 OK
 *     {
 *       "idExcluido" = "S10000" 
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
