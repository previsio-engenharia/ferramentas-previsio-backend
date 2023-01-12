const hb = require('handlebars');
const fs = require('fs');
const path = require('path');
const utils = require('util');

let nodemailer = require("nodemailer");

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

//enviar email
async function sendEmail(emailAddr, rPath, filename, emailBodyPath){
    let transporter = nodemailer.createTransport({
        name: process.env.MAIL_NAME,
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: true, // upgrade later with STARTTLS
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PW,
        },
        tls: {
            rejectUnauthorized: true
        }
      });

      console.log('Verificando servidor de emails...');
    // verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log("Server is ready to take our messages");

            //carrega o corpo do email do arquivo html
            let body = fs.readFileSync(emailBodyPath);

            const mail ={
                from: process.env.MAIL_USER,
                to: emailAddr,
                subject: 'Previsio - Relatório de Consulta NR',
                //text: 'Verifique em anexo o resultado de sua consulta',
                //html: "<h1>Relatório de Consulta NR04</h1><p>Obrigado por utilizar nossa ferramenta. Verifique em anexo o relatório de sua consulta.</p><p>Acesse <a target='_blank' href='https://previsio.com.br'>nosso site</a>!</p>",
                html: body,
                attachments: [
                    {
                        filename: filename,
                        path: rPath,
                        cid: 'uniq-report.pdf'
                    }
                ]
            };

            transporter.sendMail(mail, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent successfully: '
                            + info.response);
                    console.log('Deletar arquivo PDF...');
                    fs.unlink(rPath, deleteFileCallback); 
                    
                    function deleteFileCallback(error){
                        if(error){
                            console.log("ERRO AO DELETAR ARQUIVO!");
                            console.log(error.message);
                        }else{
                            console.log("PDF Deletado com sucesso!!")
                        }
                    }
                }
            });
        }
    });
}

async function generatePdf(data, tPath, filename, emailAddr, emailBodyPath) {
    getTemplateHtml(tPath).then(async (res) => {
        // Now we have the html code of our template in res object
        // you can check by logging it on console
        // console.log(res)

        //
        const rPath = __dirname + '/reports/'+filename;
        console.log("Compiling the template with handlebars");
        const template = hb.compile(res, {strict: true});
        // we have compile our code with handlebars
        const result = template(data);
        //console.log(result);
        
        await fs.writeFile(rPath, result, (err) => {
            if(err) {
                return console.error(err);
            }
            console.log("File saved successfully!");
             //console.log("PDF Generated");
            if(emailAddr){
                sendEmail(emailAddr, rPath, filename, emailBodyPath);
            };
        });
        
       
        
       
    }).catch(err => {
        console.error(err)
    });
}

module.exports = {
    generatePdf
}