/**
 * @api {delete} /Esteiras/:idEsteira/Sensores/:idSensor Exclui um sensor de uma esteira em produção.
 * @apiName DeleteSensor
 * @apiGroup DeleteSensor
 * @apiParam {Number} idEsteira Identificador numérico único para uma esteira.
 * @apiParam {Number} idSensor Identificador numérico único para um sensor.
 * @apiSuccess {String} mensagem Devolve um string com a mensagem de sucesso.
 * @apiSuccess {Number} idExcluido Devolve um string com o id do sensor excluído.
 * 
 * @apiSuccessExample Exemplo de Sucesso:
 *     HTTP/1.1 200 OK
 *     {
 *       "mensagem": "Sensor excluído com sucesso."
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
