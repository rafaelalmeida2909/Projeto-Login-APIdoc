 /**
 * @api {get} /Esteiras/:idEsteira GetEsteira
 * 
 * @apiGroup Esteira
 * @apiName GetEsteira
 * 
 * @apiDescription Devolve informações, contidas na base de dados, a respeito de um esteira.
 * 
 * @apiParam {Number} idEsteira Identificador numérico único para uma esteira.
 * 
 * @apiSuccess {Number} idEsteira Identificador numérico único da uma esteira.
 * @apiSuccess {String} alias  Nome amigável da esteira.
 * @apiSuccess {Boolean} ativa True se a esteira está ativa, false, caso contrário.
 * @apiSuccess {Number} velocidade Pode conter 1, 2 ou 3 reprentando velocidades crescentes para esteira.
 * @apiSuccess {Object} sensores Objeto com todos os sensores atribuídos a uma esteira e suas respectivas informações.
 *
 * @apiSuccessExample {json} Exemplo de retorno de Successo:
 * HTTP/1.1 200 OK
 * {
 *		"idEsteira": 10005,
 *		"alias": "EsteiraDeMontagem",
 *		"ativa": false,
 *		"velocidade": 3
 *		"sensores": {
 *			"10000": {
 *				"ativa": true,
 *				"qr": null,
 *				"alias": "SensorDeTemperatura",
 *				"tipo": "térmico",
 *				"info": {
 *					"temperatura": 80
 *				}
 *		},
 *			"10001": {
 *				"ativa": true,
 * 				"qr": null,
 * 				"alias": "SensorDeUmidade",
 * 				"tipo": "umidade",
 * 				"info": {
 *					"umidade": 30
 *				}
 *		},
 *			"10002": {
 *				"ativa": true,
 *				"qr": null,
 *				"alias": "SensorÓptico",
 *				"tipo": "óptico",
 *				"info": {
 *					"distancia": 20,
 *					"contagem": 5
 *				}
 *			}
 *		}
 * }
 * @apiError EsteiraNaoExiste Não foi feito nenhum cadastro de esteira com o Id solicitado.
 *
 *
 * @apiErrorExample Exemplo de Erro:
 * HTTP/1.1 404 Not Found
 * {
 *		"erro": "EsteiraNaoExiste"
 * }
 */
