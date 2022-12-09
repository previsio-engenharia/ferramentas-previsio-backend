const express = require('express');
const cors = require('cors');
const app = express();
const https = require('https');
const got = require('got');

//const Home = require('./models/Home');
//const MsgContact = require('./models/MsgContact');
const NR04_Sesmt = require('./models/NR04_Sesmt');
const NR04_Cnae_Gr = require('./models/NR04_Cnae_Gr');
const NR05_Cipa = require('./models/NR05_Cipa');
const { Sequelize, Op, DataTypes } = require('sequelize');
const sequelize = require('./models/db');


app.use(express.json());

//app.options('*', cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://ferramentas.previsio.com.br");
    //res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});

/*
//home page
app.get('/', async (req,res) => {
    /*return res.json({
        erro: false,
        datahome: {
            text_one: "Temos a solução", 
            text_two: "que a sua empresa precisa", 
            text_three: "Podemos ajudar a sua empresa!",
            btn_title:"Entrar em Contato", 
            btn_link:"http://localhost:3000/contato"
        }
    })
    await Home.findOne({
        //seleção das colunas que são necessárias
        attributes: ['text_one', 'text_two', 'text_three', 'btn_title', 'btn_link']
    })
    .then((dataHome) => {
        return res.json({
            erro: false,
            dataHome
        })
    }).catch(()=>{
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Nenhum valor encontrado para a página Home"
        })
    })
})
*/

//consulta DB NR04-SESMT
app.post('/nr04-05-consulta', async (req,res) =>{

    const cnpjInserido = req.body.cnpj;
    const codigoCnae1Inserido = req.body.codigo_cnae1;;
    const codigoCnae2Inserido = req.body.codigo_cnae2;
    const numero_trabalhadores_inserido = req.body.numero_trabalhadores;

    var codigosCnaesConsultar = [];     
    
    var consultaCNPJ ={
        codigosCnae: [],
        descricaoCnae: [],
        dataUpdate: ''
    }

    //>>>verificar numero de trabalhadores

    //estrutura para resposta
    var respostaConsultaTabelas = {
        status: 200,
        erro: false,        
        mensagem: '',
        nroTrabalhadores: numero_trabalhadores_inserido,
        codigoCnae: [],
        descricaoCnae: [],
        graudeRisco: []
        
        /*
        cnae: '',
        denominacao: '',
        grauDeRisco: '',
        
        nroTrabalhadoresMinSesmt: '',
        nroTrabalhadoresMaxSesmt: '',
        tecnicoSeg: '',
        engenheiroSeg: '',
        auxTecEnfermagem: '',
        enfermeiro: '',
        medico: '',
        nroTrabalhadoresMinCipa: '',
        nroTrabalhadoresMaxCipa: '',
        cipaEfetivos: '',
        cipaSuplentes: ''
        */
        
    };
    //console.log(process.env.URL_API_MINHARECEITA + cnpjInserido);

    if(cnpjInserido){
        //consulta informações no CNPJ inserido na API minhareceita.org
       
        //try{
        //console.log('CNPJ INSERIDO! ==> ' + cnpjInserido);
        try{
            const serviceOnline = await got(process.env.URL_API_MINHARECEITA + 'updated', { json: true });
            if(serviceOnline.statusCode != 200)
            {
                respostaConsultaTabelas.status = 400;
                respostaConsultaTabelas.erro = true;
                respostaConsultaTabelas.mensagem = 'Erro: não foi possível acessar a consulta do CNPJ. Considere realizar a consulta com o código CNAE, ou tente novamente mais tarde.';
            }
            else{
                consultaCNPJ.dataUpdate = serviceOnline.body.message;
                //console.log(consultaCNPJ.dataUpdate);
            }
            //console.log(serviceOnline.statusCode);
            //console.log(response.body.cnae_fiscal);
        }catch(error){
            //console.log(error);
            respostaConsultaTabelas.status = 400;
            respostaConsultaTabelas.erro = true;
            respostaConsultaTabelas.mensagem = 'Erro: não foi possível acessar a consulta do CNPJ. Considere realizar a consulta com o código CNAE ou tente novamente mais tarde.';
        }

        if(!respostaConsultaTabelas.erro){
            try {
                //GET request na API
                const response = await got(process.env.URL_API_MINHARECEITA + cnpjInserido, { json: true });
                //console.log(response);
                //console.log(response.body.cnae_fiscal);
                const c = JSON.stringify(response.body.cnae_fiscal);
                //formata o CNAE principal para o formato ab.cd-e, conforme inserido na tabela do grau de risco na NR04
                consultaCNPJ.codigosCnae[0] = c.charAt(0)+c.charAt(1)+'.'+c.charAt(2)+c.charAt(3)+'-'+c.charAt(4);
                consultaCNPJ.descricaoCnae[0] = response.body.cnae_fiscal_descricao;
                //console.log('[0] >> '+consultaCNPJ.codigosCnae[0]);
                respostaConsultaTabelas.codigoCnaeFiscal = consultaCNPJ.codigosCnae[0];
                respostaConsultaTabelas.descricaoCnaeFiscal = consultaCNPJ.descricaoCnae[0];


                for (var i=0; i < response.body.cnaes_secundarios.length; i++) {                    
                    //formata todos os cnaes secundários
                    var cAux = JSON.stringify(response.body.cnaes_secundarios[i].codigo);
                    consultaCNPJ.codigosCnae[i + 1] = cAux.charAt(0)+cAux.charAt(1)+'.'+cAux.charAt(2)+cAux.charAt(3)+'-'+cAux.charAt(4);
                    consultaCNPJ.descricaoCnae[i + 1] = response.body.cnaes_secundarios[i].descricao;
                    //console.log('['+i+'] >> ' + consultaCNPJ.codigosCnae[i]);
                }

                respostaConsultaTabelas.cnpj = response.body.cnpj;
                respostaConsultaTabelas.razaoSocial = response.body.razao_social;
                respostaConsultaTabelas.nomeFantasia = response.body.nome_fantasia;
                
                //console.log(respostaConsultaTabelas.codigosCnae[0]);
                //respostaConsultaTabelas.codigosCnae[0] = response.body.cnae_fiscal;
            } catch (error) {
                //console.log(error);
                respostaConsultaTabelas.status = 400;
                respostaConsultaTabelas.erro = true;
                respostaConsultaTabelas.mensagem = 'Erro: não foi possível consultar o CNPJ informado';
            }
        }
    }

    if(!respostaConsultaTabelas.erro){
        if(consultaCNPJ.codigosCnae.length > 0){
            for (var i=0; i < consultaCNPJ.codigosCnae.length; i++) {
                codigosCnaesConsultar[i] = consultaCNPJ.codigosCnae[i];
                //console.log(codigosCnaesConsultar[i]);
            }
        }else if(codigoCnae1Inserido){
            codigosCnaesConsultar[0] = codigoCnae1Inserido;
            if(codigoCnae2Inserido){
                codigosCnaesConsultar[1] = codigoCnae2Inserido;
            }
            //console.log(codigosCnaesConsultar[0]);
        }else{
            if(codigoCnae2Inserido){
                codigosCnaesConsultar[0] = codigoCnae2Inserido;
            }else{
                respostaConsultaTabelas.status = 400;
                respostaConsultaTabelas.erro = true;
                respostaConsultaTabelas.mensagem = 'Erro: não foi possível identificar o código CNAE relacionado';
            }
        }
    }


    if(codigosCnaesConsultar.length > 0){
        //verifica conexão com o DB
        sequelize.authenticate()
        .then(() => {
            //console.log("Conexão com banco de dados realizada com sucesso!");
        }).catch(() => {
            respostaConsultaTabelas.status = 400;
            respostaConsultaTabelas.erro = true;
            respostaConsultaTabelas.mensagem = 'Erro: não foi possível connectar ao banco de dados';
            //console.log("Erro: conexão com banco de dados não realizada com sucesso!");
        })
    }



    if(!respostaConsultaTabelas.erro)
    {
        
        //consulta tabela CNAEs
        const cnae_table = await NR04_Cnae_Gr.findAll({
            //consulta linha para encontrar o CNAE inserido

            where:{/*
                "codigo_cnae": {
                    [Op.or]: [codigoCnae1Inserido, codigoCnae2Inserido]
                    
                }   */  
                //"codigo_cnae": consultaCNPJ.codigosCnae
                "codigo_cnae": codigosCnaesConsultar
            },
            //retorna os atributos listados
            attributes: ['id', 'codigo_cnae', 'denominacao', 'grau_risco']

            /*
            where:{
                "codigo_cnae": codigoCnae1Inserido,
            },
            //retorna os atributos listados
            attributes: ['id', 'codigo_cnae', 'denominacao', 'grau_risco']
            */
        })
        .then((cnae_table) => {
            for(var i=0;i<cnae_table.length;i++){
                respostaConsultaTabelas.codigoCnae[i] = cnae_table[i].codigo_cnae;
                respostaConsultaTabelas.descricaoCnae[i] = cnae_table[i].denominacao;
                respostaConsultaTabelas.graudeRisco[i] = parseInt(cnae_table[i].grau_risco);
                //console.log('CNAE '+i+': '+cnae_table[i].codigo_cnae);
            }
            if(cnae_table.length > 1){
               //verifica qual é o maior grau de risco
               respostaConsultaTabelas.maiorGrauRisco = Math.max(...respostaConsultaTabelas.graudeRisco);
            }
            else{
                respostaConsultaTabelas.maiorGrauRisco = parseInt(cnae_table[0].grau_risco);
            }
        })
        .catch(()=>{
            //se ocorreu algum erro, preenche informações para retornar ao front
            respostaConsultaTabelas.status = 400;
            respostaConsultaTabelas.erro = true;
            respostaConsultaTabelas.mensagem = 'Erro: Nenhum valor encontrado com o CNAE informado.'
        })
    }
    //consultar somente se nro trabalhadores >= 50
    if(!respostaConsultaTabelas.erro){
            //se o nro trabalhadores > 5000, realizar duas consultas, para 5000 e mais. Fazer o calculo
        if(respostaConsultaTabelas.nroTrabalhadores > 5000){
            
            //calcula fator de multiplicação para grupos acima de 5000
            var gruposAcima5000 = Math.floor((respostaConsultaTabelas.nroTrabalhadores-5000)/4000) + Math.floor(((respostaConsultaTabelas.nroTrabalhadores-5000)%4000)/2000);

            //consulta tabela SESMT
            const sesmt_table = await NR04_Sesmt.findAll({
                //consulta pelo grau de risco consultado na tabela anterior
                //e pelo numero de trabalhadores informado entre os limites de cada faixa
                where:{
                    grau_risco: respostaConsultaTabelas.maiorGrauRisco,
                    //nro_trabalhadores_min: {[Op.gte]: respostaConsultaTabelas.nroTrabalhadores},
                    nro_trabalhadores_max: {[Op.gte]: 5000}
                },
                //retorna os seguintes atributos da tabela
                attributes: ['id', 'grau_risco', 'nro_trabalhadores_min', 'nro_trabalhadores_max', 'tecnico_seg','engenheiro_seg','aux_tec_enfermagem','enfermeiro','medico']
            })
            .then((sesmt_table) => {

                //se deu tudo certo, atribui os valores consultados a variável de resposta
                //verifica se há valores com observações (*) e cria a string de forma adequada
                
                respostaConsultaTabelas.nroTrabalhadoresMinSesmt = 5001;
                respostaConsultaTabelas.nroTrabalhadoresMaxSesmt = '';

                if(sesmt_table[1].tecnico_seg.indexOf('*') >= 0){
                    respostaConsultaTabelas.obsSesmt1 = true;
                    respostaConsultaTabelas.tecnicoSeg = sesmt_table[0].tecnico_seg +' + '+ (parseInt(sesmt_table[1].tecnico_seg) * gruposAcima5000) +'*';
                }else{
                    respostaConsultaTabelas.tecnicoSeg = parseInt(sesmt_table[0].tecnico_seg) + parseInt(sesmt_table[1].tecnico_seg) * gruposAcima5000;
                }
                //
                if(sesmt_table[1].engenheiro_seg.indexOf('*') >= 0){
                    respostaConsultaTabelas.obsSesmt1 = true;
                    respostaConsultaTabelas.engenheiroSeg = sesmt_table[0].engenheiro_seg +' + '+ (parseInt(sesmt_table[1].engenheiro_seg) * gruposAcima5000) +'*';
                }else{
                    respostaConsultaTabelas.engenheiroSeg = parseInt(sesmt_table[0].engenheiro_seg) + parseInt(sesmt_table[1].engenheiro_seg) * gruposAcima5000;
                }
                //
                if(sesmt_table[1].aux_tec_enfermagem.indexOf('*') >= 0){
                    respostaConsultaTabelas.obsSesmt1 = true;
                    respostaConsultaTabelas.auxTecEnfermagem = sesmt_table[0].aux_tec_enfermagem +' + '+ (parseInt(sesmt_table[1].aux_tec_enfermagem) * gruposAcima5000) +'*';
                }else{
                    respostaConsultaTabelas.auxTecEnfermagem = parseInt(sesmt_table[0].aux_tec_enfermagem) + parseInt(sesmt_table[1].aux_tec_enfermagem) * gruposAcima5000;
                }
                //
                if(sesmt_table[1].enfermeiro.indexOf('*') >= 0){
                    respostaConsultaTabelas.obsSesmt1 = true;
                    respostaConsultaTabelas.enfermeiro = sesmt_table[0].enfermeiro +' + '+ (parseInt(sesmt_table[1].enfermeiro) * gruposAcima5000) +'*';
                }else{
                    respostaConsultaTabelas.enfermeiro = parseInt(sesmt_table[0].enfermeiro) + parseInt(sesmt_table[1].enfermeiro) * gruposAcima5000;
                }
                //
                if(sesmt_table[1].medico.indexOf('*') >= 0){
                    respostaConsultaTabelas.obsSesmt1 = true;
                    respostaConsultaTabelas.medico = sesmt_table[0].medico +' + '+ (parseInt(sesmt_table[1].medico) * gruposAcima5000) +'*';
                }else{
                    respostaConsultaTabelas.medico = parseInt(sesmt_table[0].medico) + parseInt(sesmt_table[1].medico) * gruposAcima5000;
                }
                
                respostaConsultaTabelas.obsSesmt2 = true;
            })
            .catch(()=>{
                //se ocorreu algum erro, preenche informações para retornar ao front
                respostaConsultaTabelas.status = 400;
                respostaConsultaTabelas.erro = true;
                respostaConsultaTabelas.mensagem = 'Erro: Nenhum valor encontrado da base de dados da equipe SESMT.'      
            })            
        }
        else{
            const sesmt_table = await NR04_Sesmt.findAll({
                //consulta pelo grau de risco consultado na tabela anterior
                //e pelo numero de trabalhadores informado entre os limites de cada faixa
                where:{
                    grau_risco: respostaConsultaTabelas.maiorGrauRisco,
                    nro_trabalhadores_min: {[Op.lte]: respostaConsultaTabelas.nroTrabalhadores},
                    nro_trabalhadores_max: {[Op.gte]: respostaConsultaTabelas.nroTrabalhadores}
                },
                //retorna os seguintes atributos da tabela
                attributes: ['id', 'grau_risco', 'nro_trabalhadores_min', 'nro_trabalhadores_max', 'tecnico_seg','engenheiro_seg','aux_tec_enfermagem','enfermeiro','medico']
            })
            .then((sesmt_table) => {
                
                //se deu tudo certo, atribui os valores consultados a variável de resposta
                respostaConsultaTabelas.nroTrabalhadoresMinSesmt = sesmt_table[0].nro_trabalhadores_min;
                respostaConsultaTabelas.nroTrabalhadoresMaxSesmt = sesmt_table[0].nro_trabalhadores_max;
                respostaConsultaTabelas.tecnicoSeg = sesmt_table[0].tecnico_seg;
                respostaConsultaTabelas.engenheiroSeg = sesmt_table[0].engenheiro_seg;
                respostaConsultaTabelas.auxTecEnfermagem = sesmt_table[0].aux_tec_enfermagem;
                respostaConsultaTabelas.enfermeiro = sesmt_table[0].enfermeiro;
                respostaConsultaTabelas.medico = sesmt_table[0].medico;

                const str = JSON.stringify(respostaConsultaTabelas);

                //verifica se há algum valor com observação (*)
                if(str.indexOf('"1***"')>=0)
                    respostaConsultaTabelas.obsSesmt3 = true;
                if(str.indexOf('"1*"')>=0)
                    respostaConsultaTabelas.obsSesmt1 = true;
            })
            .catch(()=>{
                //se ocorreu algum erro, preenche informações para retornar ao front
                respostaConsultaTabelas.status = 400;
                respostaConsultaTabelas.erro = true;
                respostaConsultaTabelas.mensagem = 'Erro: Nenhum valor encontrado da base de dados da equipe SESMT.'      
            })
        }
        
    }
    
    if(!respostaConsultaTabelas.erro)
    {
        if(respostaConsultaTabelas.nroTrabalhadores > 10000){
            //calcula fator de multiplicação para grupos acima de 5000
            var gruposAcima10000 = Math.floor((respostaConsultaTabelas.nroTrabalhadores-10000)/2500);
            //console.log('CIPA: ' + gruposAcima10000.toString());
            const cipa_table = await NR05_Cipa.findAll({
                //consulta pelo grau de risco consultado na tabela anterior
                //e pelo numero de trabalhadores informado entre os limites de cada faixa
                where:{
                    grau_risco: respostaConsultaTabelas.maiorGrauRisco,
                    nro_trabalhadores_max: {[Op.gte]: 10000}
                },
                //retorna os seguintes atributos da tabela
                attributes: ['id', 'grau_risco', 'nro_trabalhadores_min', 'nro_trabalhadores_max', 'integrantes_efetivos','integrantes_suplentes']
            })
            .then((cipa_table) => {
                //se deu tudo certo, atribui os valores consultados a variável de resposta
                respostaConsultaTabelas.nroTrabalhadoresMinCipa = cipa_table[0].nro_trabalhadores_min;
                respostaConsultaTabelas.nroTrabalhadoresMaxCipa = cipa_table[0].nro_trabalhadores_max;
                respostaConsultaTabelas.cipaEfetivos = parseInt(cipa_table[0].integrantes_efetivos) + parseInt(cipa_table[1].integrantes_efetivos) * gruposAcima10000;
                respostaConsultaTabelas.cipaSuplentes = parseInt(cipa_table[0].integrantes_suplentes) + parseInt(cipa_table[1].integrantes_suplentes) * gruposAcima10000;

                //Última consulta, escreve mensagem de aprovação
                respostaConsultaTabelas.mensagem = 'Todos dados consultados com sucesso' 
            })
            .catch(()=>{
                //se ocorreu algum erro, preenche informações para retornar ao front
                respostaConsultaTabelas.status = 400;
                respostaConsultaTabelas.erro = true;
                respostaConsultaTabelas.mensagem = 'Erro: Nenhum valor encontrado da base de dados da equipe CIPA.'       
            })





        }
        else{
            //consulta tabela CIPA
            const cipa_table = await NR05_Cipa.findAll({
                //consulta pelo grau de risco consultado na tabela anterior
                //e pelo numero de trabalhadores informado entre os limites de cada faixa
                where:{
                    grau_risco: respostaConsultaTabelas.maiorGrauRisco,
                    nro_trabalhadores_min: {[Op.lte]: respostaConsultaTabelas.nroTrabalhadores},
                    nro_trabalhadores_max: {[Op.gte]: respostaConsultaTabelas.nroTrabalhadores}
                },
                //retorna os seguintes atributos da tabela
                attributes: ['id', 'grau_risco', 'nro_trabalhadores_min', 'nro_trabalhadores_max', 'integrantes_efetivos','integrantes_suplentes']
            })
            .then((cipa_table) => {
                //se deu tudo certo, atribui os valores consultados a variável de resposta
                respostaConsultaTabelas.nroTrabalhadoresMinCipa = cipa_table[0].nro_trabalhadores_min;
                respostaConsultaTabelas.nroTrabalhadoresMaxCipa = cipa_table[0].nro_trabalhadores_max;
                respostaConsultaTabelas.cipaEfetivos = cipa_table[0].integrantes_efetivos;
                respostaConsultaTabelas.cipaSuplentes = cipa_table[0].integrantes_suplentes;

                //Última consulta, escreve mensagem de aprovação
                respostaConsultaTabelas.mensagem = 'Todos dados consultados com sucesso' 
            })
            .catch(()=>{
                //se ocorreu algum erro, preenche informações para retornar ao front
                respostaConsultaTabelas.status = 400;
                respostaConsultaTabelas.erro = true;
                respostaConsultaTabelas.mensagem = 'Erro: Nenhum valor encontrado da base de dados da equipe CIPA.'       
            })
        }
    }

    //retorno para front
    return res.status(respostaConsultaTabelas.status).json({respostaConsultaTabelas});
})

/*
//modificar textos home page
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

/*
//tela de contato, adiciona mensagem
app.post('/add-msg-contact', async (req, res) => {
    console.log(req.body)

    //salvar no db
    await MsgContact.create(req.body)
    .then((msgContact) =>{
        return res.json({
            erro: false,
            id: msgContact.id,
            mensagem: "Mensagem de contato enviada com sucesso!"
        })

    }).catch(()=>{
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: não foi possivel salvar sua mensagem"
        });
    })
});
*/



const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
})