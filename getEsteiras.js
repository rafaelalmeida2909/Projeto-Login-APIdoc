/**
 * @api {get} /Esteiras/ GetEsteiras
 * 
 * @apiName GetEsteiras
 * @apiGroup Esteira
 * @apiDescription Devolve uma lista de esteiras cadastradas na base de dados.
 *
 * @apiSuccess {Array} esteiras Devolve um array com todos os ids de esteira.
 * @apiSuccess {Array} aliases Devolve um array com todos os aliases das esteiras.
 * 
 * @apiSuccessExample Exemplo de Sucesso:
 * HTTP/1.1 200 OK
 * {
 *		"esteiras": [10000,10001,10002],
 *		"aliases": ["EsteiraSetorNorte", "EsteiraEmpacotamento", "EsteiraMontagem"]
 * }
 *
 * @apiError NenhumaEsteiraCadastrada Nenhuma esteira foi encontrada.
 *
 * @apiErrorExample Exemplo de Erro:
 * HTTP/1.1 404 Not Found
 * {
 *		"erro": "NenhumaEsteiraCadastrada"
 * }
 */
