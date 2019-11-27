 /**
 * @api {post} /Esteiras/:idEsteira/Sensores/ PostSensor
 * 
 * @apiName PostSensor
 * @apiGroup Sensor
 * @apiDescription Cadastra um sensor, ou um kit de sensores na base de dados. Para isso deve ser enviado um JSON ao servidor indicando os atributos da nova esteira.
 *
 * @apiParam {Number} idEsteira Identificador único para uma esteira.
 * @apiParam {Object} sensores Sensores para cadastro.
 * 
 * @apiSuccess {Object} sensores Objeto com os sensores que haviam na esteira, mais os adicionados.
 * 
 * @apiParamExample {json} Exemplo de request:
 * HTTP/1.1 201 Created
 * {
 *		"idEsteira": 10001,
 *		"sensores": {
 *			"sensor1": {
 *				"ativa": false,
 *				"qr": undefined,
 *				"alias": "SensorDeUmidade",
 *				"tipo": "umidade",
 *				"info": {
 *					"umidade": undefined
 *				}
 *			},
 *			"sensor2": {
 *				"ativa": true,
 *				"qr": undefined,
 *				"alias": "SensorÓptico",
 *				"tipo": "óptico",
 *				"info": {
 *					"distancia": undefined,
 *					"contagem": undefined
 *				}
 *			}
 *		}
 * }    
 * 
 * @apiSuccessExample {json} Exemplo de retorno de Successo:
 * HTTP/1.1 200 OK
 * {
 *		"Sensores": {
 *			"10001": {
 *				"ativa": true,
 *				"qr": undefined,
 *				"alias": "SensorDeTemperatura",
 *				"tipo": "térmico",
 *				"info": {
 *					"temperatura": 80
 *				}
 *			},
 *			"10002": {
 *				"ativa": false,
 *				"qr": undefined,
 *				"alias": "SensorDeUmidade",
 *				"tipo": "umidade",
 *				"info": {
 *					"umidade": undefined
 *				}
 *			},
 *			"10003": {
 *				"ativa": true,
 *				"qr": undefined,
 *				"alias": "SensorÓptico",
 *				"tipo": "óptico",
 *				"info": {
 *					"distancia": 20,
 *					"contagem": 0
 *				}
 *			}
 *		}
 * }
 * 
 *
 * @apiError CadastroInvalido Os atributos inseridos são inválidos.
 *
 *
 * @apiErrorExample Exemplo de Erro:
 * HTTP/1.1 404 Not Found
 * {
 *		"erro": "CadastroInvalido"
 * }
 */
