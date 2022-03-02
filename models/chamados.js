const fs = require('fs');

class Chamado {
    render_tabela(res) {
        fs.readFile('static/tabela.html', 'utf8', (err, data) => {
            if (err) {
                res.status(500).send(err);
                return
            }

            res.status(200).send(data);
        })
    }
}

module.exports = new Chamado