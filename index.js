const express = require('express');
const cors = require('cors');
const app = express();
const https = require('https');

const got = require('got');

const date = require('date-and-time');

//const Home = require('./models/Home');
//const MsgContact = require('./models/MsgContact');
const NR04_Sesmt = require('./models/NR04_Sesmt');
const NR04_Cnae_Gr = require('./models/NR04_Cnae_Gr');
const NR05_Cipa = require('./models/NR05_Cipa');
const Registro_Consultas = require('./models/Registro_Consulta');
const { Sequelize, Op, DataTypes } = require('sequelize');
const sequelize = require('./models/db');

const pdf = require('./generatePdf');

app.use(express.json());
app.use(express.static('public/images'));

//app.options('*', cors());

app.use((req, res, next) => {
    //res.header("Access-Control-Allow-Origin", "https://ferramentas.previsio.com.br");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});


/*
*
*
*
*
*
*/
app.get('/cafe', async (req, res) => {
    return res.status(418).json('The server refuses the attempt to brew coffee with a teapot.');
});


//consulta DB NR04-SESMT
app.post('/nr04-05-consulta', async (req,res) =>{
    const consulta = req.body.consulta;
    const cnpjInserido = req.body.cnpj;
    const codigoCnae1Inserido = req.body.codigo_cnae1;;
    const codigoCnae2Inserido = req.body.codigo_cnae2;
    const numero_trabalhadores_inserido = req.body.numero_trabalhadores;
    const userEmail = req.body.userEmail;
    let status_consulta = 10;

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
    };

    if(cnpjInserido){
        //consulta informações no CNPJ inserido na API minhareceita.org       
        try{
            const serviceOnline = await got(process.env.URL_API_MINHARECEITA + 'updated', { json: true });
            if(serviceOnline.statusCode != 200)
            {
                status_consulta = 51; //não foi possivel acessar a  API para consulta CNPJ
                respostaConsultaTabelas.status = 400;
                respostaConsultaTabelas.erro = true;
                respostaConsultaTabelas.mensagem = 'Erro: não foi possível acessar a consulta do CNPJ. Considere realizar a consulta com o código CNAE, ou tente novamente mais tarde.';
            }
            else{
                consultaCNPJ.dataUpdate = serviceOnline.body.message;
            }
        }catch(error){
            status_consulta = 51; //não foi possivel acessar a  API para consulta CNPJ
            respostaConsultaTabelas.status = 400;
            respostaConsultaTabelas.erro = true;
            respostaConsultaTabelas.mensagem = 'Erro: não foi possível acessar a consulta do CNPJ. Considere realizar a consulta com o código CNAE ou tente novamente mais tarde.';
        }

        if(!respostaConsultaTabelas.erro){
            try {
                //GET request na API
                const response = await got(process.env.URL_API_MINHARECEITA + cnpjInserido, { json: true });
                const c = JSON.stringify(response.body.cnae_fiscal);
                //formata o CNAE principal para o formato ab.cd-e, conforme inserido na tabela do grau de risco na NR04
                consultaCNPJ.codigosCnae[0] = c.charAt(0)+c.charAt(1)+'.'+c.charAt(2)+c.charAt(3)+'-'+c.charAt(4);
                consultaCNPJ.descricaoCnae[0] = response.body.cnae_fiscal_descricao;
                respostaConsultaTabelas.codigoCnaeFiscal = consultaCNPJ.codigosCnae[0];
                respostaConsultaTabelas.descricaoCnaeFiscal = consultaCNPJ.descricaoCnae[0];


                for (var i=0; i < response.body.cnaes_secundarios.length; i++) {                    
                    //formata todos os cnaes secundários
                    var cAux = JSON.stringify(response.body.cnaes_secundarios[i].codigo);
                    consultaCNPJ.codigosCnae[i + 1] = cAux.charAt(0)+cAux.charAt(1)+'.'+cAux.charAt(2)+cAux.charAt(3)+'-'+cAux.charAt(4);
                    consultaCNPJ.descricaoCnae[i + 1] = response.body.cnaes_secundarios[i].descricao;
                }
                respostaConsultaTabelas.cnpj = cnpjInserido;
                respostaConsultaTabelas.razaoSocial = response.body.razao_social;
                respostaConsultaTabelas.nomeFantasia = response.body.nome_fantasia;
                //incluir porte da empresa e opção pelo MEI
                respostaConsultaTabelas.porte = response.body.porte;
                respostaConsultaTabelas.codigoPorte = response.body.codigo_porte;
                respostaConsultaTabelas.mei = response.body.opcao_pelo_mei;
                
                //console.log(respostaConsultaTabelas.codigosCnae[0]);
                //respostaConsultaTabelas.codigosCnae[0] = response.body.cnae_fiscal;
            } catch (error) {
                //console.log(error);
                status_consulta = 52; // CNPJ consultado na API mas não encontrado
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
                status_consulta = 53; // Código CNAE não identificado
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
            status_consulta = 50; // Não foi possível conectar ao banco de dados
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
            //Se inserido o CNPJ, verifica a opção por dispensar o PGR
            /*
            */
            if(respostaConsultaTabelas.mei){
                respostaConsultaTabelas.dispensaPGR = true;
            }
            else if(respostaConsultaTabelas.codigoPorte == 1 || respostaConsultaTabelas.codigoPorte == 3){
                if(respostaConsultaTabelas.maiorGrauRisco < 3){
                    respostaConsultaTabelas.dispensaPGR = true;
                }
            }
            else{
                respostaConsultaTabelas.dispensaPGR = false;
            }
        })
        .catch(()=>{
            //se ocorreu algum erro, preenche informações para retornar ao front
            status_consulta = 54; // CNAE informado não encontrado no DB
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
                status_consulta = 55; // Não foi possível realizar correspondência na tabela SESMT
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
                status_consulta = 55; // Não foi possível realizar correspondência na tabela SESMT
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
                status_consulta = 56; // Não foi possível realizar correspondência na tabela CIPA
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
                status_consulta = 56; // Não foi possível realizar correspondência na tabela CIPA
                respostaConsultaTabelas.status = 400;
                respostaConsultaTabelas.erro = true;
                respostaConsultaTabelas.mensagem = 'Erro: Nenhum valor encontrado da base de dados da equipe CIPA.'       
            })
        }
    }

    if(!respostaConsultaTabelas.erro && userEmail){
        //console.log(consulta);
        let now = new Date();
        now = date.addHours(now, -3); //timezone america-sao Paulo
        const dateTimeReport = date.format(now,'DD/MM/YY [às] HH:mm');
        const dateTimeFilename = date.format(now, 'DDMMYY[_]HHmm');
        var fileName;// = date.format(now, 'DDMMYY[_]HHmm');
        var templatePath;
        console.log(dateTimeReport);
        
        var mailInfo = {
            subject: '',
            title: '',
        }

        let emailBodyPath = '';

        //var reportPath; // = './reports/report.pdf';
        
        respostaConsultaTabelas.dateTimeReport = dateTimeReport;
        //console.log(process.cwd());
        if(consulta=='nr04'){            
            if(cnpjInserido){
                const cnpj = cnpjInserido.replace(/\D/g, '');
                fileName = 'previsio_nr04_'+cnpj+'_'+dateTimeFilename+'.html';
                templatePath = __dirname + '/templates/relatorioSesmtCnpj.html';
                //console.log(templatePath);
                //process.cwd()+"/templates/relatorioSesmtCnpj.html";                
            }
            else{
                const cnae = codigosCnaesConsultar[0].replace(/\D/g, '');
                fileName = 'previsio_nr04_'+cnae+'_'+dateTimeFilename+'.html';
                templatePath = __dirname + "/templates/relatorioSesmtCnae.html";
            }
            emailBodyPath = __dirname + '/templates/emailTemplate.html';
        }else if(consulta=='nr05'){
            
            if(cnpjInserido){
                const cnpj = cnpjInserido.replace(/\D/g, '');
                fileName = 'previsio_nr05_'+cnpj+'_'+dateTimeFilename+'.html';
                templatePath = __dirname + "/templates/relatorioCipaCnpj.html";
            }
            else{
                const cnae = codigosCnaesConsultar[0].replace(/\D/g, '');
                fileName = 'previsio_nr05_'+cnae+'_'+dateTimeFilename+'.html';
                templatePath = __dirname + "/templates/relatorioCipaCnae.html";
            }
            emailBodyPath = __dirname + '/templates/emailTemplate.html';
        }else{
            console.log("não é possivel gerar o relatório");
            return
        }

        if(userEmail.search(/joel@previsio/i)<0){ //não salva consultas com email joel@previsio
            const registro = await Registro_Consultas.create({
                tipo: consulta,
                status: status_consulta,
                cnpj: cnpjInserido,
                cnae1: codigoCnae1Inserido,
                cnae2: codigoCnae2Inserido,
                nro_trabalhadores: numero_trabalhadores_inserido,
                email: userEmail
            });
            //console.log(registro); 
        }

        //chama função para gerar PDF
        await pdf.generatePdf(respostaConsultaTabelas, templatePath, fileName, userEmail, emailBodyPath);
    }

    /*
    * SALVAR REGISTRO DA CONSULTA NO DB
    */

    


    //retorno para front
    return res.status(respostaConsultaTabelas.status).json({respostaConsultaTabelas});
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
})