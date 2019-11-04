/**
 * @api {get} /esteiras/ Recebe uma lista de esteiras cadastradas.
 * @apiName GetEsteiras
 * @apiGroup GetEsteiras
 *
 *
 *
 * @apiSuccess {Array} Esteiras Devolve um array com todos os ids de esteira.
 * 
 *
 * @apiSuccessExample Exemplo de Sucesso:
 *     HTTP/1.1 200 OK
 *     {
 *       "Esteiras": [10000,10001,10002,10003],
 *     }
 *
 * @apiError ExcecaoNenhumaEsteiraCadastrada Não foi encontrado nenhum cadastro de esteira.
 *
 * @apiErrorExample Exemplo de Erro:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "erro": "ExcecaoNenhumaEsteiraCadastrada"
 *     }
 * 
 * 
 *
 * 
 *
 *
 * 
 *
 *
 * 
 *
 */