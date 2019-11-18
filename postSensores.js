 /**
 * @api {post} /Esteiras/:idEsteira/Sensores/ Cadastra um kit de sensores em uma esteira.
 * 
 * @apiName PostSensor
 * @apiGroup PostSensor
 * 
 * @apiParam {Number} idEsteira indentificador único para uma esteira.
 * @apiParam {Object} kit kit de sensores a ser cadastrado.
 * @apiSuccess {Object} esteira Objeto Esteira com os sensores que já tinham mais os adicionados.
 * 
 * @apiParamExample {json} Exemplo de request:
 * HTTP/1.1 401 Created
 * {
 *  "idEsteira" : 0001,
 *  "sensor1": {
 *      "ativo": True,
 *      "qr": null,
 *      "nome": "SensorDeUmidade",
 *      "tipo": "umidade",
 *      "info": {
 *          "umidade" = null
 *      }
 *  },
 *  "sensor2": {
 *      "ativo": True,
 *      "qr": null,
 *      "nome": "SensorÓptico",
 *      "tipo": "óptico",
 *      "info": {
 *          "distancia" = null,
 *          "contagem" = null
 *      }
 *  }
 *      
 * }
 * 
 * @apiSuccessExample {json} Exemplo de retorno de Successo:
 * HTTP/1.1 200 OK
 * {
 *  "esteira": {
 *      "idE": 0001,
 *      "sensores": {
 *          "sensor0": {
 *              "ativo": True,
 *              "qr": null,
 *              "nome": "SensorDeTemperatura",
 *              "tipo": "térmico",
 *              "info": {
 *                  "temperatura" = 80
 *              }
 *          },
 *          "sensor1": {
 *              "ativo": True,
 *              "qr": null,
 *              "nome": "SensorDeUmidade",
 *              "tipo": "umidade",
 *              "info": {
 *                  "umidade" = 30
 *              }
 *          },
 *          "sensor2": {
 *              "ativo": True,
 *              "qr": null,
 *              "nome": "SensorÓptico",
 *              "tipo": "óptico",
 *              "info": {
 *                  "distancia" = 20,
 *                  "contagem" = 0
 *              }
 *          }
 *  }
 * }
 * 
 *
 * @apiError CadastroInvalido Os atributos inseridos são inválidos.
 *
 *
 * @apiErrorExample Exemplo de Erro:
 * HTTP/1.1 404 Not Found
 * {
 *  "erro": "CadastroInvalido",
 * }
 */
