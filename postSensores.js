 /**
 * @api {post} /Esteiras/:idEsteira/Sensores/ Cadastra um kit, ou apenas um único sensor em uma esteira.
 * 
 * @apiName PostSensor
 * @apiGroup PostSensor
 * 
 * @apiParam {Number} idEsteira Identificador único para uma esteira.
 * @apiParam {Object} sensores Sensores para cadastrado.
 * 
 * @apiSuccess {Object} sensores Objeto com os sensores que haviam na esteira, mais os adicionados.
 * 
 * @apiParamExample {json} Exemplo de request:
 * HTTP/1.1 201 Created
 * {
 *      "idEsteira": 10001,
 *      "sensores": {
 *          "sensor1": {
 *              "ativo": false,
 *              "qr": null,
 *              "alias": "SensorDeUmidade",
 *              "tipo": "umidade",
 *              "info": {
 *                  "umidade": null
 *              }
 *          },
 *          "sensor2": {
 *              "ativo": true,
 *              "qr": null,
 *              "alias": "SensorÓptico",
 *              "tipo": "óptico",
 *              "info": {
 *                  "distancia": null,
 *                  "contagem": null
 *              }
 *          }
 *      }
 * }    
 * 
 * @apiSuccessExample {json} Exemplo de retorno de Successo:
 * HTTP/1.1 200 OK
 * {
 *      "Sensores": {
 *          "10001": {
 *              "ativo": true,
 *              "qr": null,
 *              "alias": "SensorDeTemperatura",
 *              "tipo": "térmico",
 *              "info": {
 *                  "temperatura": 80
 *              }
 *          },
 *          "10002": {
 *              "ativo": false,
 *              "qr": null,
 *              "alias": "SensorDeUmidade",
 *              "tipo": "umidade",
 *              "info": {
 *                  "umidade": null
 *              }
 *          },
 *          "10003": {
 *              "ativo": true,
 *              "qr": null,
 *              "alias": "SensorÓptico",
 *              "tipo": "óptico",
 *              "info": {
 *                  "distancia": 20,
 *                  "contagem": 0
 *              }
 *          }
 *      }
 * }
 * 
 *
 * @apiError CadastroInvalido Os atributos inseridos são inválidos.
 *
 *
 * @apiErrorExample Exemplo de Erro:
 * HTTP/1.1 404 Not Found
 * {
 *      "erro": "CadastroInvalido"
 * }
 */
