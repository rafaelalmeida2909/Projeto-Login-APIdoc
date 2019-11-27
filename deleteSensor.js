/**
 * @api {delete} /Esteiras/:idEsteira/Sensores/:idSensor DeleteSensor
 * 
 * @apiName DeleteSensor
 * @apiGroup Sensor
 * @apiDescription Exclui um sensor, atribuido a uma esteira, da base de dados.
 * 
 * @apiParam {Number} idEsteira Identificador numérico único para uma esteira.
 * @apiParam {Number} idSensor Identificador numérico único para um sensor.
 * 
 * @apiSuccess {String} mensagem Devolve um string com a mensagem de sucesso.
 * @apiSuccess {Number} idSensor Devolve um string com o id do sensor excluído.
 * @apiSuccess {String} alias Nome amigável excluído.
 * 
 * @apiSuccessExample Exemplo de Sucesso:
 * HTTP/1.1 200 OK
 * {
 *		"mensagem": "Sensor excluído com sucesso.",
 *		"idSensor": 10000, 
 *		"alias": "SensorDeTemperatura" 
 * }
 *
 * @apiError SensorNaoEncontrado O sensor com o id desejado, não foi encontrado.
 *
 * @apiErrorExample Exemplo de Erro:
 * HTTP/1.1 404 Not Found
 * {
 *		"erro": "SensorNaoEncontrado"
 * }
 */
