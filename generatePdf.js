const hb = require('handlebars');
const fs = require('fs');
const path = require('path');
const utils = require('util');

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

var buffer = require('buffer/').Buffer;

const readFile = utils.promisify(fs.readFile);

//carrega o template no arquivo .html
async function getTemplateHtml(tPath) {
    console.log("Loading template file in memory")
    try {
        const reportPath = path.resolve(tPath);
        return await readFile(reportPath, 'utf8');

    } catch (err) {
        return Promise.reject("Could not load html template");
    }
}

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

module.exports = {
    generatePdf
}