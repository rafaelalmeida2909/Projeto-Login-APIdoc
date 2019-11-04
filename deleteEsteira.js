/**
 * @api {delete} /esteiras/:id/excluir Exclui uma esteira em produção.
 * @apiName deleteEsteira
 * @apiGroup deleteEsteira
 * @apiParam {Number} id Identificador numérico único para uma esteira.
 * @apiSuccess {String} id Devolve um string com o id da esteira excluída.
 * 
 * @apiSuccessExample Exemplo de Sucesso:
 *     HTTP/1.1 200 OK
 *     {
 *       "excluidoId" = "E10000" 
 *     }
 *
 * @apiError ExcecaoEsteiraNãoEncontrada A esteida com o id desejado, não foi encontrada.
 *
 * @apiErrorExample Exemplo de Erro:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "erro": "ExcecaoEsteiraNãoEncontrada"
 *     }
 */