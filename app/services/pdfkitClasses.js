'use strict';

/**
 *  esta função extende o PDFKit
 *  Neste momento, não há uma função nativa do pdfkit para tabelas
 *  
 *  Devemos passar um objeto (table) e mais 3 argumentos:
 *      table = 
 *      arg0 = 
 */
const fs = require('fs');
const PDFDocument = require('pdfkit');

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

class PDFDocumentWithTables extends PDFDocument {
    constructor(options) {
        super(options);
    }

    // adiciona página padrão com logo da Previsio, infos da empresa e margem
    addPage() {
        super.addPage(options);
        console.log("Nova Margem e logo")
        //adiciona margens
        this.lineJoin('miter')
            .rect(marginSize / 2, marginSize / 2, pageSizeX - marginSize, pageSizeY - marginSize)
            .stroke();

        //this.moveTo(marginSize, marginSize);
        //adiciona infos da empresa na direita
        this.font('Times-Bold').fontSize(10);
        this.text('Previsio Engenharia', {
            align: 'right',
            link: 'https://previsio.com.br'
        })
        this.moveDown(0.15)
            .font('Times-Roman')
            .text('Rua Júlio de Castilhos, 45, bairro Niterói', {
                align: 'right'
            })
        this.moveDown(0.15)
            .font('Times-Roman')
            .text('Canoas - RS', {
                align: 'right'
            })

        //adiciona logo da empresa na esquerda
        //deixar isso depois pra não desalinhar as infos 
        this.image(logoImage, marginSize, marginSize, { width: logoWidth });
    }

    // adiciona o footer
    addFooter() {
        //footer
        this.font('Times-Roman')
            .fontSize(8)
            .text('Gerado em ferramentas.previsio.com.br/consulta-grau-de-risco no dia 29/11/23 às 15:22', marginSize, pageSizeY - (1.3 * marginSize), {
                align: 'right',
                link: 'https://ferramentas.previsio.com.br/consulta-grau-de-risco'
            })
    }

    // nova função que implementa a inserção de tabelas
    table(table, arg0, arg1, arg2) {
        let startX = this.page.margins.left,
            startY = this.y;
        let options = {};

        let debug = true;

        if (typeof arg0 === 'number' && typeof arg1 === 'number') {
            startX = arg0;
            startY = arg1;

            if (typeof arg2 === 'object') options = arg2;
        } else if (typeof arg0 === 'object') {
            options = arg0;
        }

        const columnAlignments = options.columnAlignments || [];

        const columnCount = table.headers.length;
        const columnSpacing = options.columnSpacing || 15;
        const rowSpacing = options.rowSpacing || 5;
        const usableWidth = options.width || this.page.width - this.page.margins.left - this.page.margins.right;

        const prepareHeader = options.prepareHeader || (() => { });
        const prepareRow = options.prepareRow || (() => { });

        const computeRowHeight = (row) => {
            let result = 0;

            row.forEach((cell, i) => {
                const lines = this.heightOfString(cell, {
                    width: columnWidths[i], // Use custom width for each column
                    align: columnAlignments[i] || 'left', // Use 'left' as default
                }) / this.currentLineHeight();

                const cellHeight = lines * this.currentLineHeight();
                console.log("cH", cellHeight)
                result = Math.max(result, cellHeight);
            });
            return result + rowSpacing;
        };



        const columnContainerWidth = usableWidth / columnCount;
        const customColumnWidths = options.columnWidths || [];

        const columnWidths = customColumnWidths.length === columnCount ? customColumnWidths : Array(columnCount).fill(columnContainerWidth);

        let rowBottomY = 0;

        this.on('pageAdded', () => {
            console.log("Margin top", this.page.margins.top)
            startY = this.page.margins.top + 200;
            console.log("Start Y", startY)
            rowBottomY = 0;
        });

        // Allow the user to override style for headers
        prepareHeader();

        // Check to have enough room for header and first rows
        if (startY + 3 * computeRowHeight(table.headers) > this.page.height - this.page.margins.bottom) {
            this.addPage();
            //addPageOnDoc(this.page)
        }

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

        // Refresh the y coordinate of the bottom of the headers row
        rowBottomY = Math.max(startY + computeRowHeight(table.headers), rowBottomY);

        // Separation line between headers and rows
        this.moveTo(startX, rowBottomY - rowSpacing * 0.5)
            .lineTo(startX + usableWidth, rowBottomY - rowSpacing * 0.5)
            .lineWidth(1)
            .stroke();

        table.rows.forEach((row, i) => {
            const rowHeight = computeRowHeight(row);

            if (debug) {
                console.log(`Row ${i + 1} - Height: ${rowHeight}, StartY: ${startY}, RowBottomY: ${rowBottomY}`);
            }

            // Switch to next page if we cannot go any further because the space is over.
            // For safety, consider 3 rows margin instead of just one
            if (startY + 3 * rowHeight < this.page.height - this.page.margins.bottom) {
                startY = rowBottomY + rowSpacing;
            } else {
                this.addPage();
                //addPageOnDoc(this)
                startY = this.page.margins.top + 80;
                rowBottomY = 0;
            }

            // Allow the user to override style for rows
            prepareRow(row, i);

            // Print all cells of the current row with custom column widths
            row.forEach((cell, i) => {
                const adjustedStartX = startX + columnWidths.slice(0, i).reduce((acc, width) => acc + width, 0);
                const adjustedWidth = columnWidths[i];
                const alignment = columnAlignments[i] || 'left'; // Use 'left' as default
                this.text(cell, adjustedStartX, startY, {
                    width: adjustedWidth, // Use custom width for each column
                    align: alignment,
                });
            });

            // Refresh the y coordinate of the bottom of this row
            rowBottomY = Math.max(startY + rowHeight, rowBottomY);

            // Separation line between rows
            this.moveTo(startX, rowBottomY - rowSpacing * 0.5)
                .lineTo(startX + usableWidth, rowBottomY - rowSpacing * 0.5)
                .lineWidth(0.5)
                .opacity(0.5)
                .stroke()
                .opacity(1); // Reset opacity after drawing the line
        });

        this.x = startX;
        this.moveDown();

        return this;
    }

    // nova função que implementa a inserção de tabelas
    tableV(table, arg0, arg1, arg2) {
        let startX = this.page.margins.left,
            startY = this.y;
        let options = {};

        if (typeof arg0 === 'number' && typeof arg1 === 'number') {
            startX = arg0;
            startY = arg1;

            if (typeof arg2 === 'object') options = arg2;
        } else if (typeof arg0 === 'object') {
            options = arg0;
        }
        console.log(options)

        const verticalHeader = options.verticalHeader ?? false;
        console.log("VH", verticalHeader)
        const horizontalHeader = options.horizontalHeader ?? true;
        console.log("HH", horizontalHeader)
        const columnAlignments = options.columnAlignments || [];

        const columnCount = table.headers.length;
        const columnSpacing = options.columnSpacing || 15;
        const rowSpacing = options.rowSpacing || 5;
        const usableWidth = options.width || this.page.width - this.page.margins.left - this.page.margins.right;

        const prepareHeader = options.prepareHeader || (() => { });
        const prepareRow = options.prepareRow || (() => { });

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



        const columnContainerWidth = usableWidth / columnCount;
        const customColumnWidths = options.columnWidths || [];

        const columnWidths = customColumnWidths.length === columnCount ? customColumnWidths : Array(columnCount).fill(columnContainerWidth);

        let rowBottomY = 0;

        this.on('pageAdded', () => {
            console.log("Margin top", this.page.margins.top)
            startY = this.page.margins.top + 200;
            console.log("Start Y", startY)
            rowBottomY = 0;
        });

        // Allow the user to override style for headers
        prepareHeader();

        // Check to have enough room for header and first rows
        if (startY + 3 * computeRowHeight(table.headers) > this.page.height - this.page.margins.bottom) {
            this.addPage();
            //addPageOnDoc(this.page)
        }

        if(horizontalHeader){
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

        // Refresh the y coordinate of the bottom of the headers row
        rowBottomY = Math.max(startY + computeRowHeight(table.headers), rowBottomY);

        if(horizontalHeader){
            //console.log("HH:", horizontalHeader)
            // Separation line between headers and rows
            this.moveTo(startX, rowBottomY - rowSpacing * 0.5)
                .lineTo(startX + usableWidth, rowBottomY - rowSpacing * 0.5)
                .lineWidth(0.6)
                .stroke();
        }

        table.rows.forEach((row, i) => {
            const rowHeight = computeRowHeight(row);

            /* if (debug) {
                console.log(`Row ${i + 1} - Height: ${rowHeight}, StartY: ${startY}, RowBottomY: ${rowBottomY}`);
            } */

            // Switch to next page if we cannot go any further because the space is over.
            // For safety, consider 3 rows margin instead of just one
            if (startY + 3 * rowHeight < this.page.height - this.page.margins.bottom) {
                startY = rowBottomY + rowSpacing;
            } else {
                this.addPage();
                //addPageOnDoc(this)
                startY = this.page.margins.top + 80;
                rowBottomY = 0;
            }

            // Allow the user to override style for rows
            

            // Print all cells of the current row with custom column widths
            row.forEach((cell, i) => {
                if(verticalHeader && i==0){
                    prepareHeader(); // coloca a primeira célula como header
                }
                else{
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

            // Refresh the y coordinate of the bottom of this row
            rowBottomY = Math.max(startY + rowHeight, rowBottomY);

            // Separation line between rows
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
    // indica o diretório de saída
    doc.pipe(fs.createWriteStream(fileDirectory));
    return doc;
}

module.exports = {
    PDFDocumentWithTables,
    createDoc,
}
