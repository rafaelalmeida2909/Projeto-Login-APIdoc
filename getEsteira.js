 /**
 * @api {get} /Esteiras/:idEsteira Devolve informações a respeito de um esteira.
 * 
 * @apiName GetEsteira
 * @apiGroup GetEsteira
 * 
 * @apiParam {Number} idEsteira Identificador numérico único para uma esteira.
 * 
 * @apiSuccess {Number} idEsteira Identificador numérico único da uma esteira.
 * @apiSuccess {String} alias  Nome amigável da esteira.
 * @apiSuccess {Boolean} ativo True se a esteira está ativa, false, caso contrário.
 * @apiParam {Number} velocidade Pode conter 1, 2 ou 3 reprentando velocidades crescentes para esteira.
 * @apiSuccess {Object} sensores Obejto com todos os sensores atribuídos a uma esteira e suas respectivas informações.
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
 *				"ativo": true,
 *				"qr": null,
 *				"alias": "SensorDeTemperatura",
 *				"tipo": "térmico",
 *				"info": {
 *					"temperatura": 80
 *				}
 *		},
 *			"10001": {
 *				"ativo": true,
 * 				"qr": null,
 * 				"alias": "SensorDeUmidade",
 * 				"tipo": "umidade",
 * 				"info": {
 *					"umidade": 30
 *				}
 *		},
 *			"10002": {
 *				"ativo": true,
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
 *
 * @apiError ExcecaoEsteiraNaoExiste Não foi feito nenhum cadastro de esteira com o Id solicitado.
 *
 *
 * @apiErrorExample Exemplo de Erro:
 * HTTP/1.1 404 Not Found
 * {
 *		"erro": "ExcecaoEsteiraNaoExiste"
 * }
 */
