'use strict';

const { createDoc } = require('./pdfkitClasses');
const { report_model } = require('./report_models');
//const streamToBuffer = require('stream-to-buffer');

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

async function pdf(fileDirectory, consulta, type, dataForm, dataResponse, dateTimeReport) {
    const doc  = createDoc(fileDirectory);
    report_model(doc, consulta, type, dataForm, dataResponse, dateTimeReport);
    doc.end();

    try {
        const pdfBuffer = await streamToBuffer(doc);
        return pdfBuffer;
    } catch (err) {
        console.error("Error converting stream to buffer:", err);
        throw err;
    }
}

module.exports = pdf;