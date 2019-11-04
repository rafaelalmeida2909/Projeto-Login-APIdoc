 /**
 * @api {put} /cadastro/sensores/:esteira/:kit Cadastra um kit de sensores em uma esteira.
 * 
 * @apiName PutEsteira
 * @apiGroup PutEsteira
 * 
 * @apiParam {idE} ID indentificador único para uma esteira
 * @apiParam {Object} kit Objeto kit de sensores a ser cadastrado
 * @apiSuccess {Object} esteira Objeto Esteira com os sensores que já tinham mais os adicionados
 * 
 * @apiParamExample {json} Exemplo de request:
 * HTTP/1.1 405 OK
 * {
 *  "sensor0"
 *  {
 *      nome: "sensor_luz",
 *      local: "A",
 *      tipo: "optico"
 *  },
 *  "sensor1"
 *  {
 *      nome: "sensor_umidade",
 *      local: "A",
 *      tipo: "umidade"
 *  },
 *  "sensor2"
 *  {
 *      nome: "sensor_optico",
 *      local: "C",
 *      tipo: "optico"
 *  }
 *      
 * }
 * 
 * @apiSuccessExample {json} Exemplo de retorno de Successo:
 * HTTP/1.1 200 OK
 * {
 *  esteira
 *  {
 *      idE:0001,
 *      sensores
 *      {
 *          "sensor0"
 *          {
 *              nome: "nome",
 *              local: "local",
 *              tipo: "tipo"
 *          },
 *          "sensor1"
 *          {
 *              nome: "sensor_luz",
 *              local: "A",
 *              tipo: "optico"
 *          },
 *          "sensor2"
 *          {
 *              nome: "sensor_umidade",
 *              local: "A",
 *              tipo: "umidade"
 *          },
 *          "sensor3"
 *          {
 *              nome: "sensor_optico",
 *              local: "C",
 *              tipo: "optico"
 *          }
 *      }
 *      
 *  }
 * }
 * 
 *
 * @apiError Cadastro_Invalido Os atributos inseridos inválidos.
 *
 *
 * @apiErrorExample Exemplo de Erro:
 * HTTP/1.1 404 Not Found
 * {
 *  "erro": "Cadastro_Invalido, atributos inválidos ou ID inválido.",
 * }
 */
