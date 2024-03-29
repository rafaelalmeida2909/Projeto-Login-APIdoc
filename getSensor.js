 /**
 * @api {get} /Esteiras/:idEsteira/Sensores/:idSensor Devolve informações a respeito de um sensor.
 * 
 * @apiName GetSensor
 * @apiGroup GetSensor
 * 
 * @apiParam {Number} idEsteira Identificador numérico único para uma esteira.
 * @apiParam {Number} idSensor Identificador numérico único para uma sensor.
 * 
 * @apiSuccess {Bollean} ativo Retorna true se o sensor está ativo, e false, caso contrário.
 * @apiSuccess {String}  qr QR code do sensor. 
 * @apiSuccess {String} nome Nome do sensor
 * @apiSuccess {String} tipo Tipo de sensor.
 * @apiSuccess {object} info Informações coletadas pelo sensor genérico.
 * 
 * @apiSuccessExample Exemplo de Sucesso:
 * HTTP/1.1 200 OK
 * {
 *      "idSensor": 10004,
 *      "ativo": true,
 *      "qr": null,
 *      "alias": "SensorDeTemperatura",
 *      "tipo": "Térmico",
 *      "info": {
 *          "temperatura": 80
 *      }
 * }
 * 
 * @apiError ExcecaoSensorNaoEncontrado O sensor deste id não foi encontrado.
 * 
 * @apiErrorExample Exemplo de Erro:
 * HTTP/1.1 404 Not Found
 * {
 *      "erro": "ExcecaoSensorNaoEncontrado"
 * }
 */
