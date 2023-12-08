'use strict';

const fs = require('fs');
const PDFDocument = require('pdfkit');

// configurações da página
const pageSize = 'A4';
const pageSizeX = 595;
const pageSizeY = 841;
const marginSize = 40;
const logoImage = './public/images/logo-total.png';
const logoWidth = 140;

const options = {
    size: pageSize,
    margin: marginSize,
}

//extende classe do pdfkit
class PDFDocumentWithTables extends PDFDocument {
    constructor(options) {
        super(options);
    }

    // adiciona página padrão com logo da Previsio, infos da empresa e margem
    // este método é chamado para criar tbm a primeira página
    addPage() {
        super.addPage(options);
        //adiciona margens
        this.lineJoin('miter')
            .rect(marginSize / 2, marginSize / 2, pageSizeX - marginSize, pageSizeY - marginSize)
            .stroke();

        //adiciona infos da empresa na direita
        //nome da empresa
        this.font('Times-Bold').fontSize(10);
        this.text('Previsio Engenharia', {
            align: 'right',
            link: 'https://previsio.com.br'
        })
        // endereço
        this.moveDown(0.15)
            .font('Times-Roman')
            .text('Rua Júlio de Castilhos, 45, bairro Niterói', {
                align: 'right'
            })
        // cidade
        this.moveDown(0.15)
            .font('Times-Roman')
            .text('Canoas - RS', {
                align: 'right'
            })

        //adiciona logo da empresa na esquerda
        //deixar isso depois pra não desalinhar as infos 
        this.image(logoImage, marginSize, marginSize, { width: logoWidth });

        // prepara para infos
        this.moveDown(3);
    }

    // nova função que adiciona o footer no final da página
    // necessário passar o tipo de consulta e a string de data e hora
    addFooter(consulta, dateTimeReport) {
        if (consulta == 'gr') {
            this.font('Times-Roman')
                .fontSize(8)
                .text(`Gerado em ferramentas.previsio.com.br/consulta-grau-de-risco no dia ${dateTimeReport}`, marginSize, pageSizeY - (1.3 * marginSize), {
                    align: 'right',
                    link: 'https://ferramentas.previsio.com.br/consulta-grau-de-risco'
                })
        } else if (consulta == 'nr04') {
            this.font('Times-Roman')
                .fontSize(8)
                .text(`Gerado em ferramentas.previsio.com.br/consulta-nr04 no dia ${dateTimeReport}`, marginSize, pageSizeY - (1.3 * marginSize), {
                    align: 'right',
                    link: 'https://ferramentas.previsio.com.br/consulta-nr04'
                })
        } else if (consulta == 'nr05') {
            this.font('Times-Roman')
                .fontSize(8)
                .text(`Gerado em ferramentas.previsio.com.br/consulta-nr05 no dia ${dateTimeReport}`, marginSize, pageSizeY - (1.3 * marginSize), {
                    align: 'right',
                    link: 'https://ferramentas.previsio.com.br/consulta-nr05'
                })
        }
    }

    /* 
    nova função que implementa a inserção de tabelas
    table é um objeto com 2 vetores: headers e rows, que equivalem aos cabeçalhos e valores
    arg0 pode ser um número ou um objeto. Se for um objeto, arg1 e arg2 não são utilizados
    Se arg0 for um objeto, representa options da tabela, pode conter:
        prepareHeader: função que configura estilo do header
        prepareRow: função que configura estilo dos valores
        columnSpacing: espaçamento entre as colunas (padrão 15)
        rowSpacing: espaçamento entre linhas (padrão 5)
        width: largura da tabela
        horizontalHeader: bool indicando se existe ou não cabeçalho na primeira linha
        verticalHeader: bool indicando se existe títulos na primeira coluna (header)
        columnWidths: vetor com a largura de cada coluna 
        columnAlignments: vetor com o alinhamento de cada coluna (left, right, center)
    Ser arg0 for valor, representa a posição X da tabela. Deve-se passar arg1:
    arg1 = posição Y da tabela
    arg2 = se for numérico, representa a largura total da tabela, se for um objeto,  representa as mesmas options do arg0 (usa ou um ou outro)
    */
    table(table, arg0, arg1, arg2) {
        // inicializa a posição X e Y com valores padrão
        let startX = this.page.margins.left,
            startY = this.y;
        let options = {};
        // atribui as posições x e y passadas caso arg0 e arg1 seja valores numéricos
        if (typeof arg0 === 'number' && typeof arg1 === 'number') {
            startX = arg0;
            startY = arg1;
            // atribui as options do arg2
            if (typeof arg2 === 'object')
                options = arg2;
        } else if (typeof arg0 === 'object') {
            // se arg0 for objeto, pega as options
            options = arg0;
        }
        //console.log(options)
        //extrai as propriedades do options
        const verticalHeader = options.verticalHeader ?? false;
        const horizontalHeader = options.horizontalHeader ?? true;
        const columnAlignments = options.columnAlignments || [];
        const columnCount = table.headers.length;
        const columnSpacing = options.columnSpacing || 15;
        const rowSpacing = options.rowSpacing || 5;
        const usableWidth = options.width || this.page.width - this.page.margins.left - this.page.margins.right;
        const prepareHeader = options.prepareHeader || (() => { });
        const prepareRow = options.prepareRow || (() => { });

        //função que calcula altura de uma linha baseada no conteúdo
        const computeRowHeight = (row) => {
            let result = 0;

            row.forEach((cell, i) => {
                const lines = this.heightOfString(cell, {
                    width: columnWidths[i], // Use custom width for each column
                    align: columnAlignments[i] || 'left', // Use 'left' as default
                }) / this.currentLineHeight();

                const cellHeight = lines * this.currentLineHeight();
                //console.log("cH", cellHeight)
                result = Math.max(result, cellHeight);
            });
            return result + rowSpacing;
        };

        // atribui largura da tabela e das células
        const columnContainerWidth = usableWidth / columnCount;
        const customColumnWidths = options.columnWidths || [];
        const columnWidths = customColumnWidths.length === columnCount ? customColumnWidths : Array(columnCount).fill(columnContainerWidth);

        let rowBottomY = 0;
        // quando adicionar uma página executa esta função que atribui nova posição inicial e final em Y
        this.on('pageAdded', () => {
            console.log("Margin top", this.page.margins.top)
            startY = this.page.margins.top + 200;
            console.log("Start Y", startY)
            rowBottomY = 0;
        });

        // configura estilo de header
        prepareHeader();

        // Verifica se há espaço na folha para o header e as 3 primeiras linhas
        // se não tiver, adiciona nova página
        if (startY + 3 * computeRowHeight(table.headers) > this.page.height - this.page.margins.bottom) {
            this.addPage();
        }

        // se houver header horizontal, cria as células e escreve os valores
        if (horizontalHeader) {
            // Print all headers with custom column widths
            table.headers.forEach((header, i) => {
                const adjustedStartX = startX + columnWidths.slice(0, i).reduce((acc, width) => acc + width, 0);
                const adjustedWidth = columnWidths[i];
                const alignment = columnAlignments[i] || 'left'; // Use 'left' as default
                this.text(header, adjustedStartX, startY, {
                    width: adjustedWidth, // Use custom width for each column
                    align: alignment,
                });
            });
        }

        // atualiza a posição final Y
        rowBottomY = Math.max(startY + computeRowHeight(table.headers), rowBottomY);

        // se houver header horizontal, traça linha forte para separar
        if (horizontalHeader) {
            // Separation line between headers and rows
            this.moveTo(startX, rowBottomY - rowSpacing * 0.5)
                .lineTo(startX + usableWidth, rowBottomY - rowSpacing * 0.5)
                .lineWidth(0.6)
                .stroke();
        }

        table.rows.forEach((row, i) => {
            //calcula altura da linha
            const rowHeight = computeRowHeight(row);
            // Verifica se há espaço na folha para as 3 próximas linhas
            // se não tiver, adiciona nova página
            if (startY + 3 * rowHeight < this.page.height - this.page.margins.bottom) {
                startY = rowBottomY + rowSpacing;
            } else {
                this.addPage();
                startY = this.page.margins.top + 80;
                rowBottomY = 0;
            }

            // escreve todas células da linha com altura correta
            row.forEach((cell, i) => {
                //verifica se existe header na primeira coluna, então prepara a célula como header
                if (verticalHeader && i == 0) {
                    prepareHeader(); // coloca a primeira célula como header
                }
                else {
                    // se não, prepara como valor
                    prepareRow(row, i);
                }
                const adjustedStartX = startX + columnWidths.slice(0, i).reduce((acc, width) => acc + width, 0);
                const adjustedWidth = columnWidths[i];
                const alignment = columnAlignments[i] || 'left'; // Use 'left' as default
                this.text(cell, adjustedStartX, startY, {
                    width: adjustedWidth, // Use custom width for each column
                    align: alignment,
                });
            });

            // atualiza o valor final em Y
            rowBottomY = Math.max(startY + rowHeight, rowBottomY);

            // traça linha de separação entre linhas
            this.moveTo(startX, rowBottomY - rowSpacing * 0.5)
                .lineTo(startX + usableWidth, rowBottomY - rowSpacing * 0.5)
                .lineWidth(0.5)
                .opacity(0.3)
                .stroke()
                .opacity(1); // Reset opacity after drawing the line
        });

        this.x = startX;
        this.moveDown();
        return this;
    }
}

function createDoc(fileDirectory) {
    // cria documento
    const doc = new PDFDocumentWithTables(options);
    return doc;
}

module.exports = {
    PDFDocumentWithTables,
    createDoc,
}
