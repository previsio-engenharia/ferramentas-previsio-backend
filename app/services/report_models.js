function report_model(doc, consulta, type, dataForm, dataResponse, dateTimeReport) {

    //doc.moveDown(3)
    if (consulta == 'gr') {
        //título 1
        doc.font('Times-Bold')
            .fontSize(18)
            .text('CONSULTA GR: GRAU DE RISCO', {
                align: 'center'
            })
        //texto
        doc.fontSize(12)
            .font('Times-Roman')
            .moveDown()
            .text('O Grau de Risco de uma empresa é definido na NR04, classificado em 4 níveis, de 1 a 4, e indica a intensidade dos riscos de caráter físico, químico, biológico, ergonômicos e acidentais que os trabalhadores podem estar expostos.', {
                align: 'justify',
            })
        if (dataResponse.dadosDaEmpresa) {
            doc.moveDown()
                .text('Os dados deste documento foram consultados a partir do CNPJ fornecido pelo usuário requisitante. Os dados relativos ao CNPJ informado são públicos, disponibilizados pela Receita Federal, e podem estar desatualizados.', {
                    align: 'justify',
                })
        }
        else {
            doc.moveDown()
                .text('Os dados deste documento foram consultados a partir dos códigos CNAE fornecidos pelo usuário requisitante.', {
                    align: 'justify',
                })
        }
    } else if (consulta == 'nr04') {
        //título 1
        doc.font('Times-Bold')
            .fontSize(18)
            .text('CONSULTA NR04: DIMENSIONAMENTO DO SESMT', {
                align: 'center'
            })
        //texto
        doc.fontSize(12)
            .font('Times-Roman')
            .moveDown()
            .text('Esta Norma estabelece os parâmetros e os requisitos para constituição e manutenção dos Serviços Especializados em Segurança e Medicina do Trabalho - SESMT, com a finalidade de promover a saúde e proteger a integridade do trabalhador.', {
                align: 'justify',
            })
        if (dataResponse.dadosDaEmpresa) {
            doc.moveDown()
                .text('Os dados deste documento foram consultados a partir do CNPJ e da quantidade de trabalhadores na empresa, fornecidos pelo usuário requisitante. Os dados relativos ao CNPJ informado são públicos, disponibilizados pela Receita Federal, e podem estar desatualizados.', {
                    align: 'justify',
                })
        }
        else {
            doc.moveDown()
                .text('Os dados deste documento foram consultados a partir dos códigos CNAE e da quantidade de trabalhadores na empresa, fornecidos pelo usuário requisitante.', {
                    align: 'justify',
                })
        }
    } else if (consulta == 'nr05') {
        //título 1
        doc.font('Times-Bold')
            .fontSize(18)
            .text('CONSULTA NR05: DIMENSIONAMENTO DA CIPA', {
                align: 'center'
            })
        //texto
        doc.fontSize(12)
            .font('Times-Roman')
            .moveDown()
            .text('Esta Norma estabelece os parâmetros e os requisitos da Comissão Interna de Prevenção de Acidentes – CIPA, tendo por objetivo a prevenção de acidentes e doenças relacionadas ao trabalho, de modo a tornar compatível, permanentemente, o trabalho com a preservação da vida e promoção da saúde do trabalhador.', {
                align: 'justify',
            })
        if (dataResponse.dadosDaEmpresa) {
            doc.moveDown()
                .text('Os dados deste documento foram consultados a partir do CNPJ e da quantidade de trabalhadores na empresa, fornecidos pelo usuário requisitante. Os dados relativos ao CNPJ informado são públicos, disponibilizados pela Receita Federal, e podem estar desatualizados.', {
                    align: 'justify',
                })
        }
        else {
            doc.moveDown()
                .text('Os dados deste documento foram consultados a partir dos códigos CNAE e da quantidade de trabalhadores na empresa, fornecidos pelo usuário requisitante.', {
                    align: 'justify',
                })
        }
    }

    //titulo tabela
    doc.fontSize(16)
        .font('Times-Bold')
        .moveDown()
        .text('CARACTERÍSTICAS DA EMPRESA', {
            align: 'left'
        })

    if (dataResponse.dadosDaEmpresa) { //quer dizer que o CNPJ foi consultado
        const tableDadosEmpresa = {
            headers: ['', ''], // sem texto no header horizontal. Apenas indicar o numero de colunas
            rows: [
                ['CNPJ', dataResponse.dadosDaEmpresa.cnpj],
                ['Razão Social', dataResponse.dadosDaEmpresa.razao_social],
                ['Nome Fantasia', dataResponse.dadosDaEmpresa.nome_fantasia],
                ['Porte da Empresa', dataResponse.dadosDaEmpresa.porte],
                ['CNAE Principal', dataResponse.dadosCnaes[0].codigo],
                ['Denominação', dataResponse.dadosCnaes[0].denominacao],
                ['Grau de Risco da Empresa', dataResponse.dadosDaEmpresa.maiorGrauDeRisco],
            ]
        };
        if (dataResponse.dadosDaEmpresa.numero_trabalhadores) {
            tableDadosEmpresa.rows.push(['Número de Trabalhadores', dataResponse.dadosDaEmpresa.numero_trabalhadores])
        };

        // escreve tabela no documento
        // este método .table é implementado no pdfkitTable.js
        doc.fontSize(12)
            .table(tableDadosEmpresa, {
                prepareHeader: () => doc.font('Times-Bold').fontSize(10),
                prepareRow: (row, i) => doc.font('Times-Roman').fontSize(10),
                //horizontalHeader: false,
                verticalHeader: true,
                columnWidths: [115, 400],
                columnAlignments: ['left', 'right']
            });

        // OBS dispensa PGR
        if (dataResponse.dadosDaEmpresa.dispensaPGR) {
            doc.fontSize(10)
                .font('Times-Roman')
                //.moveDown()
                .text('Com as características encontradas, a empresa consultada dispensa a elaboração de PGR. Também está dispensada da elaboração de PCMSO, desde que não sejam identificados riscos físicos, químicos, biológicos ou relacionados a fatores ergonômicos.', {
                    align: 'justify',
                })
                .text('Para a comprovação desta dispensa, é necessária a elaboração da Declaração de Inexistência de Riscos', {
                    align: 'justify',
                })
        }
    }
    else { //Consultado apenas os Cnaes

        const tableDadosCnaes = {
            headers: ['Código CNAE', 'Denominação', 'Grau de Risco Associado'], // sem texto no header horizontal. Apenas indicar o numero de colunas
            rows: []
        };
        dataResponse.dadosCnaes.forEach(cnae => {
            tableDadosCnaes.rows.push([cnae.codigo, cnae.denominacao, cnae.grauDeRisco])
        });

        doc.fontSize(12)
            .moveDown()
            .table(tableDadosCnaes, {
                prepareHeader: () => doc.font('Times-Bold').fontSize(10),
                prepareRow: (row, i) => doc.font('Times-Roman').fontSize(10),
                verticalHeader: false,
                columnWidths: [80, 350, 85],
                columnAlignments: ['left', 'left', 'right']
            });


        if (dataForm.numero_trabalhadores) {
            const tableNroTrab = {
                headers: ['', ''],
                rows: [['Número de Trabalhadores', dataForm.numero_trabalhadores]]
            };

            doc.fontSize(12)
                //.moveDown()
                .table(tableNroTrab, {
                    prepareHeader: () => doc.font('Times-Bold').fontSize(10),
                    prepareRow: (row, i) => doc.font('Times-Roman').fontSize(10),
                    verticalHeader: true,
                    horizontalHeader: false,
                    columnWidths: [185, 330],
                    columnAlignments: ['left', 'right']
                });
        }

    }

    if (consulta == 'nr04') {
        //titulo tabela 2
        doc.fontSize(16)
            .font('Times-Bold')
            .moveDown()
            .text('EQUIPE SESMT NECESSÁRIA', {
                align: 'left'
            })

        const tableSesmt = {
            headers: ['', ''], // sem texto no header horizontal. Apenas indicar o numero de colunas
            rows: [
                ['Técnicos de Segurança', dataResponse.consultaSesmt.tecnicoSeg],
                ['Engenheiros de Segurança', dataResponse.consultaSesmt.engenheiroSeg],
                ['Auxiliares/Técnicos de Enfermagem', dataResponse.consultaSesmt.auxTecEnfermagem],
                ['Enfermeiros', dataResponse.consultaSesmt.enfermeiro],
                ['Médicos', dataResponse.consultaSesmt.medico],
            ]
        };

        // escreve tabela no documento
        // este método .table é implementado no pdfkitTable.js
        doc.fontSize(12)
            .table(tableSesmt, {
                prepareHeader: () => doc.font('Times-Bold').fontSize(10),
                prepareRow: (row, i) => doc.font('Times-Roman').fontSize(10),
                //horizontalHeader: false,
                verticalHeader: true,
                columnWidths: [215, 300],
                columnAlignments: ['left', 'right']
            });

        if (dataResponse.consultaSesmt.obsSesmt1) {
            // OBS 1
            doc.fontSize(10)
                .font('Times-Roman')
                //.moveDown()
                .text(dataResponse.consultaSesmt.obsSesmt1, {
                    align: 'justify',
                })
        }

        if (dataResponse.consultaSesmt.obsSesmt3) {
            // OBS 3
            doc.fontSize(10)
                .font('Times-Roman')
                //.moveDown()
                .text(dataResponse.consultaSesmt.obsSesmt3, {
                    align: 'justify',
                })
        }


    } else if (consulta == 'nr05') {
        //titulo tabela 2
        doc.fontSize(16)
            .font('Times-Bold')
            .moveDown()
            .text('EQUIPE CIPA NECESSÁRIA', {
                align: 'left'
            })

        const tableCipa = {
            headers: ['', 'Representantes da organização', 'Representantes dos empregados'], // sem texto no header horizontal. Apenas indicar o numero de colunas
            rows: [
                ['Membros da equipe efetiva', dataResponse.consultaCipa.cipaEfetivos, dataResponse.consultaCipa.cipaEfetivos],
                ['Membros da equipe suplente', dataResponse.consultaCipa.cipaSuplentes, dataResponse.consultaCipa.cipaSuplentes],
            ]
        };

        // escreve tabela no documento
        // este método .table é implementado no pdfkitTable.js
        doc.fontSize(12)
            .moveDown()
            .table(tableCipa, {
                prepareHeader: () => doc.font('Times-Bold').fontSize(10),
                prepareRow: (row, i) => doc.font('Times-Roman').fontSize(10),
                //horizontalHeader: false,
                verticalHeader: true,
                columnWidths: [155, 180, 180],
                columnAlignments: ['left', 'right', 'right']
            });

        doc.fontSize(10)
            .font('Times-Roman')
            //.moveDown()
            .text('Os representantes da organização na CIPA, titulares e suplentes, serão por ela designados.', {
                align: 'justify',
            })
            .text('Os representantes dos empregados, titulares e suplentes, serão eleitos em escrutínio secreto, do qual participem, independentemente de filiação sindical, exclusivamente os empregados interessados.', {
                align: 'justify',
            })
    }

    doc.addFooter(consulta, dateTimeReport);

    if (dataResponse.dadosDaEmpresa && dataResponse.dadosCnaes) {
        doc.addPage();

        doc.fontSize(16)
            .font('Times-Bold')
            .text('CNAES CADASTRADOS', {
                align: 'left'
            })

        const tableDadosCnaes = {
            headers: ['Código CNAE', 'Denominação', 'Grau de Risco Associado'], 
            rows: []
        };
        dataResponse.dadosCnaes.forEach(cnae => {
            tableDadosCnaes.rows.push([cnae.codigo, cnae.denominacao, cnae.grauDeRisco])
        });

        doc.fontSize(12)
            .moveDown()
            .table(tableDadosCnaes, {
                prepareHeader: () => doc.font('Times-Bold').fontSize(10),
                prepareRow: (row, i) => doc.font('Times-Roman').fontSize(10),
                verticalHeader: false,
                columnWidths: [80, 350, 85],
                columnAlignments: ['left', 'left', 'right']
            });

        doc.addFooter(consulta, dateTimeReport);
    }
}

module.exports = {
    report_model
};