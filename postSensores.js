 /**
 * @api {post} /Cadastro/Sensor/ Cadastra um kit de sensores em uma esteira.
 * 
 * @apiName PostEsteira
 * @apiGroup PostEsteira
 * 
 * @apiParam {Number} idEsteira indentificador único para uma esteira.
 * @apiParam {Object} kit Objeto kit de sensores a ser cadastrado.
 * @apiSuccess {Object} esteira Objeto Esteira com os sensores que já tinham mais os adicionados.
 * 
 * @apiParamExample {json} Exemplo de request:
 * HTTP/1.1 401 Created
 * {
 *  "sensor0":
 *  {
 *      "nome": "sensorLuz",
 *      "local": "A",
 *      "tipo": "optico"
 *  },
 *  "sensor1":
 *  {
 *      "nome": "sensorUmidade",
 *      "local": "A",
 *      "tipo": "umidade"
 *  },
 *  "sensor2":
 *  {
 *      "nome": "sensorOptico",
 *      "local": "C",
 *      "tipo": "optico"
 *  }
 *      
 * }
 * 
 * @apiSuccessExample {json} Exemplo de retorno de Successo:
 * HTTP/1.1 200 OK
 * {
 *  "esteira":
 *  {
 *      "idE":0001,
 *      "sensores":
 *      {
 *          "sensor0":
 *          {
 *              "nome": "nome",
 *              "local": "local",
 *              "tipo": "tipo"
 *          },
 *          "sensor1":
 *          {
 *              "nome": "sensorLuz",
 *              "local": "A",
 *              "tipo": "optico"
 *          },
 *          "sensor2":
 *          {
 *              "nome": "sensorUmidade",
 *              "local": "A",
 *              "tipo": "umidade"
 *          },
 *          "sensor3":
 *          {
 *              "nome": "sensorOptico",
 *              "local": "C",
 *              "tipo": "optico"
 *          }
 *      }
 *      
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
