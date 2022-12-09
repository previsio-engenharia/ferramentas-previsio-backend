const express = require('express');
const cors = require('cors');
const app = express();

const NR04_Sesmt = require('./models/NR04_Sesmt');
const NR04_Cnae_Gr = require('./models/NR04_Cnae_Gr');
const NR05_Cipa = require('./models/NR05_Cipa');

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});
/*
app.post('/add-home',async (req, res) =>{
    
    //verifica se já há um registro no banco
    const dataHome = await Home.findOne();

    //se houver registro, não permite o cadastro de novos
    if(dataHome){
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Dados para página home não cadastrados. A página já possui um registro!"
        });

    }
    //cadastrando dados no db
    await Home.create(req.body)
    .then(()=>{
        return res.json({
            erro: false,
            mensagem: "Dados para página home cadastrados com sucesso!"
        });

    }).catch(()=>{
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Dados para página home não cadastrados!"
        });
    })
})
*/

app.post('/add-nr04-sesmt', async (req, res) => {
    console.log(req.body)

    //salvar no db
    await NR04_Sesmt.bulkCreate(req.body)
    .then((row) =>{
        return res.json({
            erro: false,
            id: row.id,
            "grau de risco": row.grau_risco,
            "faixa": row.faixa_trabalhadores,
            status: "Linha cadastrada com sucesso!"
        })

    }).catch(()=>{
        return res.status(400).json({
            erro: true,
            status: "Erro: não foi possivel cadastrar"
        });
    })
});

app.post('/add-nr04-cnae', async (req, res) => {
    console.log(req.body)

    //salvar no db
    await NR04_Cnae_Gr.bulkCreate(req.body)
    .then((row) =>{
        return res.json({
            erro: false,
            id: row.id,
            "grau de risco": row.grau_risco,
            "faixa": row.faixa_trabalhadores,
            status: "Código CNAE cadastrado com sucesso!"
        })

    }).catch(()=>{
        return res.status(400).json({
            erro: true,
            status: "Erro: não foi possivel cadastrar CNAE"
        });
    })
});

app.post('/add-nr05-cipa', async (req, res) => {
    console.log(req.body)

    //salvar no db
    await NR05_Cipa.bulkCreate(req.body)
    .then((row) =>{
        return res.json({
            erro: false,
            status: "Relação CIPA cadastrada com sucesso!"
        })

    }).catch(()=>{
        return res.status(400).json({
            erro: true,
            status: "Erro: não foi possivel cadastrar CNAE"
        });
    })
});


const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
})