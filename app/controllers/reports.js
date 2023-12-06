const hb = require('handlebars');
const fs = require('fs');
const path = require('path');
const utils = require('util');

const dotenv = require("dotenv")
dotenv.config({ path: ".env" })

//E-MAIL:
//sendgrid
// substituido pelo RESEND
//const sgMail = require('@sendgrid/mail');
//sgMail.setApiKey(process.env.SENDGRID_API_KEY);


//resend
const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);


var buffer = require('buffer/').Buffer;

const readFile = utils.promisify(fs.readFile);

const date = require('date-and-time');
//const pdf = require('../services/generatePdfReport');
const pdf = require('../services/generatePdf_Modelo');

async function generateReport(req, res) {
    console.log("Chamada da API para gerar relatório e enviar por e-mail!")

    if (req.method != 'POST') {
        return res.status(405).json({
            success: false,
            mensagem: 'Método da requisição não permitido',
        })
    }

    const { form: dataForm, response: dataResponse } = req.body;
    const { consulta, type, userEmail, receberEmail } = dataForm
    /* 
        console.log("DADOS RECEBIDOS")
        console.log("FORM:", dataForm)
        console.log("Response:", dataResponse)
     */

    if (receberEmail && userEmail) {
        //cria nome dos arquivos e caminhos de acordo com a consulta
        const paths = generatePath(consulta, type, dataResponse)

        //console.log("vai pegar o template html")
        await getTemplateHtml(paths.templatePath).then(async (res) => {
            // Now we have the html code of our template in res object
            // you can check by logging it on console
            //console.log("Compilando o template com o Handlebars");
            //console.log("Escrever no html")
            const template = hb.compile(res, { strict: true });
            // compilou o template com o handlebars. Vai passar os parâmetros para o arquivo
            const tipoConsulta = {
                gr: (consulta === 'gr'),
                nr04: (consulta === 'nr04'),
                nr05: (consulta === 'nr05'),
            }
            const result = template({ tipoConsulta, dataForm, dataResponse, dateTimeReport: paths.dateTimeReport });

            //console.log('Escrever arquivo html');
            //cria arquivo com relatorio preenchido
            const rootDir = path.resolve(__dirname, '../..');
            const reportPath = `/tmp/${paths.fileName}`;  //alterar (comentar) essa linha quando localhost
            //const reportPath = `${rootDir}/tmp/${paths.fileName}`; //alterar (comentar) essa linha quando localhost
            fs.writeFileSync(reportPath, result, (err) => {
                if (err) {
                    console.log(err);
                }
            });
            //console.log("Após isso vai tentar mandar por email")

            //console.log('Ler arquivo html do body...');
            // lê o template de corpo do email
            let emailBody = fs.readFileSync(paths.emailBodyPath, 'utf8');
            //console.log('Ler arquivo html do anexo...');
            // lê relatório para o anexo
            let attac = fs.readFileSync(reportPath, 'base64');

            //console.log(body);
            //console.log('Montando msg do email...')

            //console.log("destinatario:", dataForm.userEmail)
            //console.log("assunto:", paths.emailSubject)

            // monta a mensagem do email
            const msg = {
                to: dataForm.userEmail,
                from: `Previsio Engenharia <${process.env.MAIL_USER}>`, // Use the email address or domain you verified above
                reply_to: 'ped@previsio.com.br',
                subject: paths.emailSubject,
                html: emailBody,
                attachments: [
                    {
                        filename: paths.fileName,
                        content: attac,
                        type: 'text/html',
                        disposition: 'attachment'
                    }
                ]
            };

            //console.log('Enviar email..');
            //chame função de envio de email

            //await sendMail(msg, reportPath);
            await resendEmail(msg, reportPath);


            //return;
        }).catch(err => {
            console.error(err);
            return res.status(500).json("Não foi possível carregar o template de relatório");
        });
    };
    return res.status(200).json("E-mail enviado com sucesso")
}



async function pdfReport(req, res) {
    console.log("Chamada da API para gerar relatório em PDF!")

    if (req.method != 'POST') {
        return res.status(405).json({
            success: false,
            mensagem: 'Método da requisição não permitido',
        })
    }

    const { form: dataForm, response: dataResponse } = req.body;
    const { consulta, type, userEmail, receberEmail } = dataForm
    console.log("DADOS RECEBIDOS")
    console.log("FORM:", dataForm)
    console.log("Response:", dataResponse)

    ////

    if (receberEmail && userEmail) {
        //cria nome dos arquivos e caminhos de acordo com a consulta
        const paths = generatePath(consulta, type,  dataResponse)
        console.log("PATH:", paths.fileName, paths.dateTimeReport)
/* 
        const tipoConsulta = {
            gr: (consulta === 'gr'),
            nr04: (consulta === 'nr04'),
            nr05: (consulta === 'nr05'),
        }
 */
        const rootDir = path.resolve(__dirname, '../..');

        const reportFile = rootDir+'/tmp/'+paths.fileName

        await pdf(reportFile, consulta, type, dataForm, dataResponse, paths.dateTimeReport);
        console.log("gerou?")


        // Now we have the html code of our template in res object
        // you can check by logging it on console
        //console.log("Compilando o template com o Handlebars");
        //console.log("Escrever no html")
        //const template = hb.compile(res, { strict: true });
        // compilou o template com o handlebars. Vai passar os parâmetros para o arquivo 

        //const result = template({ tipoConsulta, dataForm, dataResponse, dateTimeReport: paths.dateTimeReport });

        //console.log('Escrever arquivo html');
        //cria arquivo com relatorio preenchido
        //const rootDir = path.resolve(__dirname, '../..');
        //const reportPath = `/tmp/${paths.fileName}`;  //alterar (comentar) essa linha quando localhost
        //const reportPath = `${rootDir}/tmp/${paths.fileName}`; //alterar (comentar) essa linha quando localhost


        // monta a mensagem do email
        /*
        const msg = {
            to: dataForm.userEmail,
            from: `Previsio Engenharia <${process.env.MAIL_USER}>`, // Use the email address or domain you verified above
            reply_to: 'ped@previsio.com.br',
            subject: paths.emailSubject,
            html: emailBody,
            attachments: [
                {
                    filename: paths.fileName,
                    content: attac,
                    type: 'text/html',
                    disposition: 'attachment'
                }
            ]
        };
        */

        //console.log('Enviar email..');
        //chame função de envio de email

        //await sendMail(msg, reportPath);
        //await resendEmail(msg, reportPath);
    };
    return res.status(200).json("E-mail enviado com sucesso")

}

module.exports = {
    generateReport,
    pdfReport,
}


// criar diretorios
function generatePath(consulta, type, dataResponse) {
    //cria string do diretorio raiz do projeto
    const rootDir = path.resolve(__dirname, '../..')
    //pega hora atual de criação
    let now = new Date();
    now = date.addHours(now, -3); //timezone america-sao Paulo
    const dateTimeReport = date.format(now, 'DD/MM/YY [às] HH:mm');
    const dateTimeFilename = date.format(now, 'DDMMYY[_]HHmm');
    //cria variaveis de nomes de arquivos e caminhos
    let fileName; // = date.format(now, 'DDMMYY[_]HHmm');
    let templatePath;
    let emailSubject = `Relatório ${consulta.toUpperCase()}`;
    let emailBodyPath = `${rootDir}/templates/emailTemplate_${consulta}.html`;

    switch (type) {
        case 'cnpj':
            const cnpj = dataResponse.dadosDaEmpresa.cnpj.replace(/\D/g, '');
            fileName = `previsio_${consulta}_${cnpj}_${dateTimeFilename}.pdf`
            //templatePath = `${rootDir}/templates/relatorioCnpj_${consulta}.html`
            break;
        case 'cnae':
            const cnae = dataResponse.dadosCnaes[0].codigo.replace(/\D/g, '');
            fileName = `previsio_${consulta}_${cnae}_${dateTimeFilename}.pdf`
            //templatePath = `${rootDir}/templates/relatorioCnae_${consulta}.html`
            break;
        default:
            console.log("não é possivel gerar o relatório");
            return null
            break;
    }

    return {
        dateTimeReport,
        fileName,
        templatePath: `${rootDir}/templates/relatorioGenerico.html`,
        emailBodyPath,
        emailSubject
    }
}

//carrega o template no arquivo .html
async function getTemplateHtml(tPath) {
    //console.log("Loading template file in memory:", tPath)
    try {
        const reportPath = path.resolve(tPath);
        return await readFile(reportPath, 'utf8');
    } catch (err) {
        return Promise.reject("Could not load html template");
    }
}

/*
// função envio de e-mail [SENDGRID]
const sendMail = async (msg, rPath) => {
    try {
        await sgMail.send(msg).then(() => {
            //console.log('Email enviado com sucesso!');
            fs.unlink(rPath, () => {
                //console.log('Arquivo deletado') 
            });
        })
    } catch (error) {
        console.log(error);
        if (error.response) {
            console.log(error.response.body);
        }
    }
}
*/


//função envio de e-mail com o RESEND:
const resendEmail = async (msg, rPath) => {
    try {
        const data = await resend.emails.send(msg);
        console.log('Email enviado com sucesso!', data);
        fs.unlink(rPath, () => {
            console.log('Arquivo deletado')
        });
        //res.status(200).json({ data });
    } catch (error) {
        // res.status(500).json({ error });
        console.log(error);
        if (error.response) {
            console.log(error.response.body);
        }
    }
}