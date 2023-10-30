const hb = require('handlebars');
const fs = require('fs');
const path = require('path');
const utils = require('util');

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

var buffer = require('buffer/').Buffer;

const readFile = utils.promisify(fs.readFile);

const date = require('date-and-time');

async function generateReport(req, res) {
    console.log("Entrou na API!")

    if (req.method != 'POST') {
        return res.status(405).json({
            success: false,
            //statusConsulta:
            mensagem: 'Método da requisição não permitido',
        })
    }

    const { form: dataForm, response: dataResponse } = req.body;
    const { consulta, type, userEmail, receberEmail } = dataForm


    if (receberEmail && userEmail) {

        const paths = generatePath(consulta, type, dataResponse)
        
        console.log("vai pegar o template")

        await getTemplateHtml(paths.templatePath).then(async (res) => {
            // Now we have the html code of our template in res object
            // you can check by logging it on console
            // console.log(res)

            //
            console.log("Compilando o template com o Handlebars");
            const template = hb.compile(res, { strict: true });
            // we have compile our code with handlebars
            const dateTime = paths.dateTimeReport
            const result = template(dataForm, dataResponse, dateTime);
            //console.log(result);
            //sendEmail(emailAddr, rPath, filename, emailBodyPath, result);

            console.log('Escrever arquivo html');
            //fs.writeFileSync(rPath, result);
            const reportPath = `/tmp/${paths.fileName}`;
            fs.writeFileSync(reportPath, result, (err) => {
                if (err) {
                    console.log(err);
                }
            });

            console.log("Após isso vai tentar mandar por email")


/*
            console.log('Ler arquivo html do body...');
            let emailBody = fs.readFileSync(paths.emailBodyPath, 'utf8');
            console.log('Ler arquivo html do anexo...');
            let attac = fs.readFileSync(reportPath, 'base64');

            //console.log(body);
            console.log('Montando msg do email...')
*/
/*
            const msg = {
                to: dataForm.userEmail,
                from: process.env.MAIL_USER, // Use the email address or domain you verified above
                replyTo: 'ped@previsio.com.br',
                subject: paths.emailSubject,
                //subject: 'Previsio - Relatório de Consulta NR',
                html: emailBody,
                attachments: [
                    {
                        filename: paths.fileName,
                        content: attac,
                        type: 'text/html',
                        disposition: 'attachment'
                        //path: rPath
                    }
                ]
            };
*/
/*
            console.log('Enviar email..');
            await sendMail(msg, reportPath);
            return;
*/

        }).catch(err => {
            console.error(err);
            return;
        });
    };
    return res.status(200).json("ok")
}

module.exports = {
    generateReport,
}






/* 
async function generatePdf(data, tPath, filename, emailAddr, emailBodyPath, emailSubject) {

    if (emailAddr) {

        await getTemplateHtml(tPath).then(async (res) => {
            // Now we have the html code of our template in res object
            // you can check by logging it on console
            // console.log(res)

            //
            const rPath = '/tmp/' + filename;
            console.log("Compiling the template with handlebars");
            const template = hb.compile(res, { strict: true });
            // we have compile our code with handlebars
            const result = template(data);
            //console.log(result);
            //sendEmail(emailAddr, rPath, filename, emailBodyPath, result);

            console.log('Escrever arquivo html');
            //fs.writeFileSync(rPath, result);
            fs.writeFileSync(rPath, result, (err) => {
                if (err) {
                    console.log(err);
                }
            });


            console.log('Ler arquivo html do body...');
            let body = fs.readFileSync(emailBodyPath, 'utf8');
            console.log('Ler arquivo html do anexo...');
            let attac = fs.readFileSync(rPath, 'base64');

            //console.log(body);
            console.log('Montando msg do email...')

            const msg = {
                to: emailAddr,
                from: process.env.MAIL_USER, // Use the email address or domain you verified above
                replyTo: 'ped@previsio.com.br',
                subject: emailSubject,
                //subject: 'Previsio - Relatório de Consulta NR',
                html: body,
                attachments: [
                    {
                        filename: filename,
                        content: attac,
                        type: 'text/html',
                        disposition: 'attachment'
                        //path: rPath
                    }
                ]
            };

            console.log('Enviar email..');
            await sendMail(msg, rPath);
            return;

        }).catch(err => {
            console.error(err);
            return;
        });

    };
}
 */
/* 
if (!respostaConsultaTabelas.erro && userEmail) {
    //console.log(consulta);
    let now = new Date();
    now = date.addHours(now, -3); //timezone america-sao Paulo
    const dateTimeReport = date.format(now, 'DD/MM/YY [às] HH:mm');
    const dateTimeFilename = date.format(now, 'DDMMYY[_]HHmm');
    var fileName;// = date.format(now, 'DDMMYY[_]HHmm');
    var templatePath;
    console.log(dateTimeFilename);

    var mailInfo = {
        subject: '',
        title: '',
    }


    let emailBodyPath = '';
    let emailSubject = '';

    //var reportPath; // = './reports/report.pdf';

    respostaConsultaTabelas.dateTimeReport = dateTimeReport;
    //console.log(process.cwd());
    if (consulta == 'nr04') {
        if (cnpjInserido) {
            const cnpj = cnpjInserido.replace(/\D/g, '');
            fileName = 'previsio_nr04_' + cnpj + '_' + dateTimeFilename + '.html';
            templatePath = __dirname + '/templates/relatorioSesmtCnpj.html';
            //console.log(templatePath);
            //process.cwd()+"/templates/relatorioSesmtCnpj.html";                
        }
        else {
            const cnae = codigosCnaesConsultar[0].replace(/\D/g, '');
            fileName = 'previsio_nr04_' + cnae + '_' + dateTimeFilename + '.html';
            templatePath = __dirname + "/templates/relatorioSesmtCnae.html";
        }
        emailSubject = "Relatório NR04";
        emailBodyPath = __dirname + '/templates/emailTemplateNR04.html';
    } else if (consulta == 'nr05') {

        if (cnpjInserido) {
            const cnpj = cnpjInserido.replace(/\D/g, '');
            fileName = 'previsio_nr05_' + cnpj + '_' + dateTimeFilename + '.html';
            templatePath = __dirname + "/templates/relatorioCipaCnpj.html";
        }
        else {
            const cnae = codigosCnaesConsultar[0].replace(/\D/g, '');
            fileName = 'previsio_nr05_' + cnae + '_' + dateTimeFilename + '.html';
            templatePath = __dirname + "/templates/relatorioCipaCnae.html";
        }
        emailSubject = "Relatório NR05";
        emailBodyPath = __dirname + '/templates/emailTemplateNR05.html';
    } else if (consulta == 'gr') {

        if (cnpjInserido) {
            const cnpj = cnpjInserido.replace(/\D/g, '');
            fileName = 'previsio_gr_' + cnpj + '_' + dateTimeFilename + '.html';
            templatePath = __dirname + "/templates/relatorioGrCnpj.html";
        }
        else {
            const cnae = codigosCnaesConsultar[0].replace(/\D/g, '');
            fileName = 'previsio_gr_' + cnae + '_' + dateTimeFilename + '.html';
            templatePath = __dirname + "/templates/relatorioGrCnae.html";
        }
        emailSubject = "Relatório Grau de Risco";
        emailBodyPath = __dirname + '/templates/emailTemplateGR.html';
    } else {
        console.log("não é possivel gerar o relatório");
        return
    }

    //chama função para gerar PDF
    await pdf.generatePdf(respostaConsultaTabelas, templatePath, fileName, userEmail, emailBodyPath, emailSubject);

}
 */


// criar diretorios
function generatePath(consulta, type, dataResponse) {

    //console.log(consulta);
    const appDir = path.resolve(__dirname, '..')
    let now = new Date();
    now = date.addHours(now, -3); //timezone america-sao Paulo
    const dateTimeReport = date.format(now, 'DD/MM/YY [às] HH:mm');
    const dateTimeFilename = date.format(now, 'DDMMYY[_]HHmm');
    let fileName; // = date.format(now, 'DDMMYY[_]HHmm');
    let templatePath;
    let emailBodyPath = `Relatório ${consulta.toUpperCase()}`;
    let emailSubject = `${appDir}/templates/emailTemplate${consulta.toUpperCase()}.html`;

    switch (type) {
        case 'cnpj':
            const cnpj = dataResponse.dadosDaEmpresa.cnpj.replace(/\D/g, '');
            fileName = `previsio_${consulta}_${cnpj}_${dateTimeFilename}.html`
            templatePath = `${appDir}/templates/relatorioSesmtCnpj.html`
            break;
        case 'cnae':
            const cnae = dataResponse.dadosCnaes[0].codigo.replace(/\D/g, '');
            fileName = `previsio_${consulta}_${cnae}_${dateTimeFilename}.html`
            templatePath = `${appDir}/templates/relatorioSesmtCnae.html`
            break;
        default:
            console.log("não é possivel gerar o relatório");
            return null
            break;
    }

    return {
        dateTimeReport,
        fileName,
        templatePath,
        emailBodyPath,
        emailSubject
    }
}

//carrega o template no arquivo .html
async function getTemplateHtml(tPath) {
    console.log("Loading template file in memory:", tPath)
    try {
        const reportPath = path.resolve(tPath);
        return await readFile(reportPath, 'utf8');

    } catch (err) {
        return Promise.reject("Could not load html template");
    }
}

// função envio de e-mail
const sendMail = async (msg, rPath) => {
    try {
        await sgMail.send(msg).then(() => {
            console.log('Email enviado com sucesso!');
            fs.unlink(rPath, () => { console.log('Arquivo deletado') });
        })
    } catch (error) {
        console.log(error);
        if (error.response) {
            console.log(error.response.body);
        }
    }
}