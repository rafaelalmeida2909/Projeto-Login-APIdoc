 /**
 * @api {get} /esteiras/:id/sensores/:id Devolve informações a respeito de um sensor.
 * @apiName GetSensor
 * @apiGroup GetSensor
 * @apiParam {Number} id Identificador numérico único para uma esteira.
 * @apiParam {Number} id Identificador numérico único para uma sensor.
 * @apiSuccess {Bollean} ativo Ativo, se o sensor está ativo.
 * @apiSuccess {String}  qr QR code do sensor. 
 * @apiSuccess {String} nome Nome do sensor
 * @apiSuccess {String} local Local do sensor.
 * @apiSuccess {String} tipo Tipo de sensor.
 * 
 * @apiSuccessExample Exemplo de Sucesso:
 *     HTTP/1.1 200 OK
 *     {
 *        "ativo": True,
 *        "qr": null,
 *        "nome": "SensorDeTemperatura",
 *        "local": null,
 *        "tipo": "Temperatura"
 *     }
 * 
 * @apiError ExcecaoSensorNãoEncontrado O sensor deste id não foi encontrado.
 * 
 * @apiErrorExample Exemplo de Erro:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "erro": "ExcecaoSensorNãoEncontrado"
 *     }
 */