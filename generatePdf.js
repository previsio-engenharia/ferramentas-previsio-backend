const hb = require('handlebars');
const fs = require('fs');
const path = require('path');
const utils = require('util');

//let nodemailer = require("nodemailer");
//const sgMail = require('@sendgrid/mail');
//sgMail.setApiKey(process.env.SENDGRID_API_KEY);

var conversion = require("phantom-html-to-pdf")();

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


/*
//enviar email
async function sendEmail(emailAddr, rPath, filename, emailBodyPath, result){
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

      //console.log('Verificando servidor de emails...');
        console.log('Tentativa de email...');

    // verify connection configuration
        //transporter.verify(function (error, success) {
        //    if (error) {
        //    console.log(error);
        //} else {
            //console.log("Server is ready to take our messages");

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
                        content: result
                        //path: rPath
                    }
                ]
                
            };

            transporter.sendMail(mail, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent successfully: '
                            + info.response);
                            /*
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
                    //
                    
                }
            });
       // }
    //});
}
*/

async function generatePdf(data, tPath, filename, emailAddr, emailBodyPath) {

    if(emailAddr){
        
        await getTemplateHtml(tPath).then(async (res) => {
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
            //sendEmail(emailAddr, rPath, filename, emailBodyPath, result);
            /*
            await fs.writeFile(rPath, result, (err) => {
                if(err) {
                    console.error(err);
                } else {
                    console.log("File saved successfully!");
                    sendEmail(emailAddr, rPath, filename, emailBodyPath, result);

                    //console.log("PDF Generated");
                }
            });   
            *//*
            let body = fs.readFileSync(emailBodyPath, 'utf8');

            //console.log(body);
            console.log('Montando msg do email...')

            const msg = {
                to: emailAddr,
                from: process.env.MAIL_USER, // Use the email address or domain you verified above
                replyTo: 'ped@previsio.com.br',
                subject: 'Previsio - Relatório de Consulta NR',
                text: 'Teste com SendGrid email'/*
                html: body,
                attachments: [
                    {
                        filename: filename,
                        content: await buffer.from(result).toString('base64'),
                        type: 'text/html',
                        disposition: 'attachment'
                        //path: rPath
                    }
                ]             
              };

              await sendMail(msg);
              */
            //sendEmail(emailAddr, rPath, filename, emailBodyPath);

            await conversion({ html: result }, async function(err, pdf) {
                if(err){
                    console.log(err);
                }
                else{
                    console.log('gerando pdf....')
                    var output = await fs.createWriteStream(rPath)
                    //console.log(pdf.logs);
                    //console.log(pdf.numberOfPages);
                    // since pdf.stream is a node.js stream you can use it
                    // to save the pdf to a file (like in this example) or to
                    // respond an http request.
                    await pdf.stream.pipe(output);
                }
            });
            console.log(rPath);
            return rPath;

        }).catch(err => {
            console.error(err);
            return;
        });
        
    };


    
}

const sendMail = async (msg) => {
    console.log('Tentativa de enviar o email...');
    sgMail.send(msg)
        .then(() => {
            console.log('Email enviado com sucesso!');
        }, error => {
            console.error(error);
            if (error.response) {
                console.error(error.response.body)
            }
        })
}

module.exports = {
    generatePdf
}