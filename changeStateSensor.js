/**
 * @api {patch} /Esteiras/:idEsteira/Sensores/:idSensor Ativa ou desativa um sensor.
 * 
 * @apiName changeStateSensor
 * @apiGroup changeStateSensor
 * 
 * @apiParam {Number} idSensor Identificador numérico único para um sensor.
 * @apiParam {Boolean} ativo True, se quero o sensor ativo, false, caso contrário.
 * 
 * @apiSuccess {String} mensagem Devolve um string com a mensagem de sucesso.
 * @apiSuccess {Boolean} ativo Devolve o estado do sensor. True, se está ativo e false, caso contrário.
 * 
 * @apiParamExample {json} Exemplo de request:
 * HTTP/1.1 200 OK
 * {
 *      "idEsteira": 10007,
 *      "idSensor": 10004,
 *      "ativa": false
 * }
 * 
 * @apiSuccessExample Exemplo de Sucesso:
 * HTTP/1.1 200 OK
 * {
 *      "mensagem": "Estado do sensor atualizado",
 *      "ativa": false
 * }
 *
 * @apiError MudançaFalhou A atualização do sensor falhou.
 *
 * @apiErrorExample Exemplo de Erro:
 * HTTP/1.1 404 Not Found
 * {
 *      "erro": "MudançaFalhou"
 * }
 */
