'use strict';
/**
 * page size
 * A4 (595.28 x 841.89)
 */

const fs = require('fs');
const PDFDocument = require('./pdfkitClasses');

//constantes
//page size
// A4 (595.28 x 841.89) > ISO 216 standard
const pageSize = 'A4';
const pageSizeX = 595;
const pageSizeY = 841;
const marginSize = 40;

const options = {
    size: pageSize,
    margin: marginSize,
}

/**
 * 
 * 
 */
function createDoc(fileDirectory) {
    // cria documento
    const doc = new PDFDocument(options);
    // indica o diretório de saída
    doc.pipe(fs.createWriteStream(fileDirectory));
    return doc;
}

/**
 * 
 * 
 */
async function addPageOnDoc(doc) {
    //adiciona uma página nova no documento recebido
    console.log("Nova Pág")
    doc.addPage(options)
    //addMarginAndLogo(doc);
}

function addMarginAndLogo(doc) {
    console.log("Nova Margem e logo")
    //adiciona margens
    doc.lineJoin('miter')
        .rect(marginSize / 2, marginSize / 2, pageSizeX - marginSize, pageSizeY - marginSize)
        .stroke();

    //adiciona infos da empresa na direita
    doc.font('Times-Bold').fontSize(10);
    doc.text('Previsio Engenharia', {
        align: 'right',
        link: 'https://previsio.com.br'
    })
    doc.moveDown(0.15)
        .font('Times-Roman')
        .text('Rua Júlio de Castilhos, 45, bairro Niterói', {
            align: 'right'
        })
    doc.moveDown(0.15)
        .font('Times-Roman')
        .text('Canoas - RS', {
            align: 'right'
        })
    //adiciona logo da empresa na esquerda
    //deixar isso depois pra não desalinhar as infos 
    doc.image('./public/images/logo-total.png', 40, 40, { width: 140 });
}

/**
 * 
 * 
 */

function addFooter(doc) {
    //footer
    doc.moveDown(5)
        .font('Times-Roman')
        .fontSize(12)
        .text('Gerado em ferramentas.previsio.com.br/consulta-grau-de-risco', {
            align: 'right',
            link: 'https://ferramentas.previsio.com.br/consulta-grau-de-risco'
        })
        .text('no dia 29/11/23 às 15:22', {
            align: 'right'
        })
}


/**
 * 
 * 
 */
async function pdf(fileDirectory) {



    const doc = new PDFDocument(options);
    //cria o arquivo neste diretorio
    doc.pipe(fs.createWriteStream(fileDirectory));

    //adiciona margens
    doc.lineJoin('miter')
        .rect(marginSize / 2, marginSize / 2, pageSizeX - marginSize, pageSizeY - marginSize)
        .stroke();

    //adiciona infos da empresa na direita
    doc.font('Times-Bold').fontSize(10);
    doc.text('Previsio Engenharia', {
        align: 'right',
        link: 'https://previsio.com.br'
    })
    doc.moveDown(0.15)
        .font('Times-Roman')
        .text('Rua Júlio de Castilhos, 45, bairro Niterói', {
            align: 'right'
        })
    doc.moveDown(0.15)
        .font('Times-Roman')
        .text('Canoas - RS', {
            align: 'right'
        })
    //adiciona logo da empresa na esquerda
    //deixar isso depois pra não desalinhar as infos 
    doc.image('./public/images/logo-total.png', 40, 40, { width: 140 });

    //título 1
    doc.moveDown(4.5)
        .font('Times-Bold')
        .fontSize(18)
        .text('CONSULTA GR: GRAU DE RISCO', {
            align: 'center'
        })

    //texto
    doc.moveDown(0.5)
    doc.font('Times-Roman')
        .fontSize(12)
    doc.text('O Grau de Risco de uma empresa é definido na NR04, classificado em 4 níveis, de 1 a 4, e indica a intensidade dos riscos de caráter físico, químico, biológico, ergonômicos e acidentais que os trabalhadores podem estar expostos.', {
        align: 'justify',
        //indent: 36
    })
    doc.moveDown(0.5)
    doc.text('Os dados deste documento foram consultados a partir dos códigos CNAE fornecidos pelo usuário requisitante.', {
        align: 'justify',
        //indent: 36
    })

    //titulo 2 tabela
    doc.moveDown(1.5)
        .font('Times-Bold')
        .fontSize(16)
        .text('CARACTERÍSTICAS DA EMPRESA', {
            align: 'left'
        })

    // cria dados da primeira tabela
    const table0 = {
        headers: ['CNAE Consultado', 'Denominação', 'Grau de Risco Associado'],
        rows: [
            ['01.19-9', 'Cultivo de plantas de lavoura temporária não especificadas anteriormente. Cultivo de plantas de lavoura temporária não', '4'],
            ['01.19-9', 'Cultivo de plantas de lavoura temporária não especificadas anteriormente', '3'],
            ['01.19-9', 'Cultivo de plantas de lavoura temporária não. Cultivo de plantas de lavoura temporária não especificadas anteriormente. Cultivo de plantas de lavoura temporária não especificadas anteriormente', '3'],
            ['01.19-9', 'Cultivo de plantas de lavoura temporária não especificadas anteriormente', '3'],
        ]
    };

    // escreve tabela no documento
    // este método .table é implementado no pdfkitTable.js
    doc.moveDown(0.5)
        .table(table0, {
            prepareHeader: () => doc.font('Times-Bold').fontSize(10),
            prepareRow: (row, i) => doc.font('Times-Roman').fontSize(10),
            columnWidths: [100, 330, 85],
            columnAlignments: ['left', 'left', 'right']
        });

    //footer
    doc.moveDown(5)
        .font('Times-Roman')
        .fontSize(12)
        .text('Gerado em ferramentas.previsio.com.br/consulta-grau-de-risco', {
            align: 'right',
            link: 'https://ferramentas.previsio.com.br/consulta-grau-de-risco'
        })
        .text('no dia 29/11/23 às 15:22', {
            align: 'right'
        })

    doc.end();
}


module.exports = {
    //pdf,
    //createDoc,
    addPageOnDoc,
    //addFooter
};