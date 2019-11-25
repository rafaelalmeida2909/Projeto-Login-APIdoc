/**
 * @api {delete} /Esteiras/:idEsteira/Sensores/:idSensor Exclui um sensor de uma esteira em produção.
 * 
 * @apiName DeleteSensor
 * @apiGroup DeleteSensor
 * 
 * @apiParam {Number} idEsteira Identificador numérico único para uma esteira.
 * @apiParam {Number} idSensor Identificador numérico único para um sensor.
 * 
 * @apiSuccess {String} mensagem Devolve um string com a mensagem de sucesso.
 * @apiSuccess {Number} idExcluído Devolve um string com o id do sensor excluído.
 * @apiSuccess {String} aliasExcluído Nome amigável excluído.
 * 
 * @apiSuccessExample Exemplo de Sucesso:
 * HTTP/1.1 200 OK
 * {
 *      "mensagem": "Sensor excluído com sucesso.",
 *      "idExcluido": 10000, 
 *      "aliasExcluído": "SensorDeTemperatura" 
 * }
 *
 * @apiError ExcecaoSensorNaoEncontrado O sensor com o id desejado, não foi encontrado.
 *
 * @apiErrorExample Exemplo de Erro:
 * HTTP/1.1 404 Not Found
 * {
 *      "erro": "ExcecaoSensorNaoEncontrado"
 * }
 */
