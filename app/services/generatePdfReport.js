'use strict';

const fs = require('fs');
const PDFDocument = require('./pdfkitTable');


async function pdf(dir) {

    const options = {
        size: 'A4',
        margin: 40,
        font: 'Times-Italic',
        fontSize: 24
    }
    const doc = new PDFDocument(options)
    //cria o arquivo neste diretorio
    doc.pipe(fs.createWriteStream(dir));

    // cria dados da primeira tabela
    const table0 = {
        headers: ['Word', 'Comment', 'Summary'],
        rows: [
            ['Apple', 'Not this one', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra at ligula gravida ultrices. Fusce vitae pulvinar magna.'],
            ['Tire', 'Smells like funny', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra at ligula gravida ultrices. Fusce vitae pulvinar magna.']
        ]
    };

    // escreve tabela no documento
    // este método .table é implementado no pdfkitTable.js
    doc.table(table0, {
        prepareHeader: () => doc.font('Helvetica-Bold'),
        prepareRow: (row, i) => doc.font('Helvetica').fontSize(12)
    });

    const table1 = {
        headers: ['Country', 'Conversion rate', 'Trend'],
        rows: [
            ['Switzerland', '12%', '+1.12%'],
            ['France', '67%', '-0.98%'],
            ['England', '33%', '+4.44%']
        ]
    };

    // move a posição para baixo e insere a segunda tabela
    doc.moveDown().table(table1, 100, 350, { width: 300 });

    doc.lineJoin('miter')
        .rect(20, 20, 595-40, 841-40)
        .stroke();

    doc.addPage(options)
        .text('Vamos ver como sai isso aqui<<')

    //bordas
    doc.lineJoin('miter')
        .rect(20, 20, 595-40, 841-40)
        .stroke();
    // finaliza o documento
    doc.end();
}

module.exports = pdf;