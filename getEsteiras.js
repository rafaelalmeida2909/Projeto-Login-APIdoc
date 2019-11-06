/**
 * @api {get} /Esteiras/ Devolve uma lista de esteiras cadastradas.
 * @apiName GetEsteiras
 * @apiGroup GetEsteiras
 * @apiSuccess {Array} Esteiras Devolve um array com todos os ids de esteira.
 * 
 * @apiSuccessExample Exemplo de Sucesso:
 *     HTTP/1.1 200 OK
 *     {
 *       "Esteiras": ["E10000","E10001","E10002","E10003"]
 *     }
 *
 * @apiError ExcecaoNenhumaEsteiraCadastrada Não foi encontrado nenhum cadastro de esteira.
 *
 * @apiErrorExample Exemplo de Erro:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "erro": "ExcecaoNenhumaEsteiraCadastrada"
 *     }
 */
