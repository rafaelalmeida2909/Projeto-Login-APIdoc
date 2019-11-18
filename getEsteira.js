 /**
 * @api {get} /Esteiras/:idEsteira Devolve informações a respeito de um esteira.
 * @apiName GetEsteira
 * @apiGroup GetEsteira
 * @apiParam {Number} idEsteira Identificador numérico único para uma esteira.
 * @apiSuccess {Object} sensores Obejto com todos os sensores atribuídos a uma esteira e suas respectivas informações.
 *
 * @apiSuccessExample {json} Exemplo de retorno de Successo:
 * HTTP/1.1 200 OK
 * {
 *      "sensores": {
 *          "S0000" {
 *              "ativo": True,
 *              "qr": null,
 *              "nome": "SensorDeTemperatura",
 *              "tipo": "térmico",
 *              "info": {
 *                  "temperatura" = 80
 *              }
 *          },
 *          "S0001": {
 *              "ativo": True,
 *              "qr": null,
 *              "nome": "SensorDeUmidade",
 *              "tipo": "umidade",
 *              "info": {
 *                  "umidade" = 30
 *              }
 *          },
 *          "S0002": {
 *              "ativo": True,
 *              "qr": null,
 *              "nome": "SensorÓptico",
 *              "tipo": "óptico",
 *              "info": {
 *                  "distancia" = 20,
 *                  "contagem" = 5
 *              }
 *          }
 *      }
 * }
 *
 * @apiError ExcecaoEsteiraNaoExiste Não foi feito nenhum cadastro de esteira com o Id solicitado.
 *
 *
 * @apiErrorExample Exemplo de Erro:
 * HTTP/1.1 404 Not Found
 * {
 *  "erro": "ExcecaoEsteiraNaoExiste",
 * }
 */
