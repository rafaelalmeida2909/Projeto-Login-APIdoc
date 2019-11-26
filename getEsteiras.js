/**
 * @api {get} /Esteiras/ Devolve uma lista de esteiras cadastradas.
 * 
 * @apiName GetEsteiras
 * @apiGroup GetEsteiras
 * 
 * @apiSuccess {Array} esteiras Devolve um array com todos os ids de esteira.
 * @apiSuccess {Array} aliases Devolve um array com todos os aliases das esteiras.
 * 
 * @apiSuccessExample Exemplo de Sucesso:
 * HTTP/1.1 200 OK
 * {
 *      "esteiras": [10000,10001,10002],
 *      "aliases": ["EsteiraSetorNorte", "EsteiraEmpacotamento", "EsteiraMontagem"]
 * }
 *
 * @apiError ExcecaoNenhumaEsteiraCadastrada Nenhuma esteira foi encontrada.
 *
 * @apiErrorExample Exemplo de Erro:
 * HTTP/1.1 404 Not Found
 * {
 *      "erro": "ExcecaoNenhumaEsteiraCadastrada"
 * }
 */
