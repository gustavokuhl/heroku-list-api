const Chamado = require('../models/chamados');

module.exports = app => {
    app.get('/chamados', (req, res) => {
        Chamado.render_tabela(res);
    })
}