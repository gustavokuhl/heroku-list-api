const customExpress = require('./config/customExpress');

const app = customExpress();
app.listen(process.env.PORT || 3000, () => console.log('servidor rodando na porta 3000'));