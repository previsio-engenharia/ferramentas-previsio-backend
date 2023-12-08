'use strict';
const { createDoc } = require('./pdfkitClasses');
const { report_model } = require('./report_models');

// constroi todo relatorio em formato PDF e retorna um buffer
async function generatePdfBuffer(consulta, dataForm, dataResponse, dateTimeReport) {
    //inicializa o arquivo com as configurações e template padrão
    const doc  = createDoc();
    //preenche com o relatório genérico (GR, NR04, NR05)
    report_model(doc, consulta, dataForm, dataResponse, dateTimeReport);
    //finaliza o doc
    doc.end();
    //converte de node stream para buffer e retorna o buffer
    try {
        const pdfBuffer = await streamToBuffer(doc);
        return pdfBuffer;
    } catch (err) {
        console.error("Error converting stream to buffer:", err);
        throw err;
    }
}

//função que transforma o doc do pdfkit (node stream) para um buffer
// assim pode ser enviado diretamente no anexo do email (Resend) sem salvar um arquivo .pdf
// não sei direito como funciona :D
const streamToBuffer = (stream) => {
    return new Promise((resolve, reject) => {
        const chunks = [];
        stream.on('data', (chunk) => chunks.push(chunk));
        stream.on('end', () => {
            const buffer = Buffer.concat(chunks);
            resolve(buffer);
        });
        stream.on('error', (error) => reject(error));
    });
};

module.exports = generatePdfBuffer;