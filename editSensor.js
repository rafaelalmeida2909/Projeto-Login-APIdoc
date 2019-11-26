/**
 * @api {patch} /Esteiras/:idEsteira/Sensores/:idSensor Modifica qualquer atributo de um sensor, salvando as alterações no banco de dados.
 * 
 * @apiName EditSensor
 * @apiGroup EditSensor
 * 
 * @apiParam {Number} idEsteira Identificador numérico único para a esteira do sensor.
 * @apiParam {Number} idSensor Identificador numérico único para um sensor.
 * @apiParam {Boolean} ativa True, se quero o sensor ativo, false, caso contrário.
 * @apiParam {String} alias Novo nome que se deseja dar a um sensor.
 * @apiParam {String} qr Novo QR-code de um sensor.
 * @apiParam {String} tipo Novo tipo do sensor utilizado.
 * 
 * @apiSuccess {String} mensagem Devolve um string com a mensagem de sucesso.
 * @apiSuccess {Object} modificacoes Objeto que indica as modificações que foram realizadas, se true o atributo foi modificado, se false não houve modificação.
 * 
 * @apiParamExample {json} Exemplo de request:
 * HTTP/1.1 200 OK
 * {
 *		"idSensor": 10004,
 *		"idEsteira": 10007,
 *		"ativa": false,
 *		"alias": "undefined",
 *		"qr": "undefined",
 *		"tipo": "undefined"
 * }
 * 
 * @apiSuccessExample Exemplo de Sucesso:
 * HTTP/1.1 200 OK
 * {
 *		"mensagem": "Estado do sensor atualizado",
 *		"modificacoes": {
 *			"idEsteira": true,
 *			"ativa": true,
 *			"alias": false,
 *			"qr": false,
 *			"tipo": false 
 *		}
 * }
 *
 * @apiError MudançaFalhou A atualização do sensor falhou.
 *
 * @apiErrorExample Exemplo de Erro:
 * HTTP/1.1 404 Not Found
 * {
 *		"erro": "MudançaFalhou"
 * }
 */