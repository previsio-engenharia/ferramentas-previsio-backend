//função que preenche um documento pdfkit com os relatorios (GR, NR04 ou NR05)
function report_model(doc, consulta, dataForm, dataResponse, dateTimeReport) {
    //doc.moveDown(3)
    if (consulta == 'gr') {
        //Introdução para consultas GR:
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
            // texto se a consulta foi com CNPJ
            doc.moveDown()
                .text('Os dados deste documento foram consultados a partir do CNPJ fornecido pelo usuário requisitante. Os dados relativos ao CNPJ informado são públicos, disponibilizados pela Receita Federal, e podem estar desatualizados.', {
                    align: 'justify',
                })
        }
        else {
            // texto se a consulta foi com CNAEs
            doc.moveDown()
                .text('Os dados deste documento foram consultados a partir dos códigos CNAE fornecidos pelo usuário requisitante.', {
                    align: 'justify',
                })
        }
    } else if (consulta == 'nr04') {
        //Introdução para consultas NR04:
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
            // texto se a consulta foi com CNPJ
            doc.moveDown()
                .text('Os dados deste documento foram consultados a partir do CNPJ e da quantidade de trabalhadores na empresa, fornecidos pelo usuário requisitante. Os dados relativos ao CNPJ informado são públicos, disponibilizados pela Receita Federal, e podem estar desatualizados.', {
                    align: 'justify',
                })
        }
        else {
            // texto se a consulta foi com CNAEs
            doc.moveDown()
                .text('Os dados deste documento foram consultados a partir dos códigos CNAE e da quantidade de trabalhadores na empresa, fornecidos pelo usuário requisitante.', {
                    align: 'justify',
                })
        }
    } else if (consulta == 'nr05') {
        //Introdução para consultas NR05:
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
            // texto se a consulta foi com CNPJ
            doc.moveDown()
                .text('Os dados deste documento foram consultados a partir do CNPJ e da quantidade de trabalhadores na empresa, fornecidos pelo usuário requisitante. Os dados relativos ao CNPJ informado são públicos, disponibilizados pela Receita Federal, e podem estar desatualizados.', {
                    align: 'justify',
                })
        }
        else {
            // texto se a consulta foi com CNAEs
            doc.moveDown()
                .text('Os dados deste documento foram consultados a partir dos códigos CNAE e da quantidade de trabalhadores na empresa, fornecidos pelo usuário requisitante.', {
                    align: 'justify',
                })
        }
    }
    // Primeira tabela: Caracteristicas da Empresa (dados base da consulta)
    //titulo tabela
    doc.fontSize(16)
        .font('Times-Bold')
        .moveDown()
        .text('CARACTERÍSTICAS DA EMPRESA', {
            align: 'left'
        })

    if (dataResponse.dadosDaEmpresa) {
        // tabela se a consulta foi com CNPJ
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
        // insere linha com numero de trabalhadores, caso inserido na consulta
        if (dataResponse.dadosDaEmpresa.numero_trabalhadores) {
            tableDadosEmpresa.rows.push(['Número de Trabalhadores', dataResponse.dadosDaEmpresa.numero_trabalhadores])
        };

        // escreve tabela no documento
        doc.fontSize(12)
            .table(tableDadosEmpresa, {
                prepareHeader: () => doc.font('Times-Bold').fontSize(10),
                prepareRow: (row, i) => doc.font('Times-Roman').fontSize(10),
                //horizontalHeader: false,
                verticalHeader: true,
                columnWidths: [115, 400],
                columnAlignments: ['left', 'right']
            });

        // texto da OBS dispensa PGR
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
    else {
        // tabela se a consulta foi com CNAEs
        const tableDadosCnaes = {
            headers: ['Código CNAE', 'Denominação', 'Grau de Risco Associado'], // sem texto no header horizontal. Apenas indicar o numero de colunas
            rows: []
        };
        dataResponse.dadosCnaes.forEach(cnae => {
            tableDadosCnaes.rows.push([cnae.codigo, cnae.denominacao, cnae.grauDeRisco])
        });
        // escreve tabela com os dados dos CNAEs
        doc.fontSize(12)
            .moveDown()
            .table(tableDadosCnaes, {
                prepareHeader: () => doc.font('Times-Bold').fontSize(10),
                prepareRow: (row, i) => doc.font('Times-Roman').fontSize(10),
                verticalHeader: false,
                columnWidths: [80, 350, 85],
                columnAlignments: ['left', 'left', 'right']
            });
        // insere linha com numero de trabalhadores, caso inserido na consulta
        //  na consulta com CNAEs isso aparece um pouco diferente
        if (dataForm.numero_trabalhadores) {
            const tableNroTrab = {
                headers: ['', ''],
                rows: [['Número de Trabalhadores', dataForm.numero_trabalhadores]]
            };
            //escreve a tabela
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

    //caso a consulta seja NR04 ou NR05, há mais dados para mostrar
    if (consulta == 'nr04') {
        //insere titulo tabela 2
        doc.fontSize(16)
            .font('Times-Bold')
            .moveDown()
            .text('EQUIPE SESMT NECESSÁRIA', {
                align: 'left'
            })
        //constroi tabela SESMT
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
            // texto da OBS 1 da NR04
            doc.fontSize(10)
                .font('Times-Roman')
                //.moveDown()
                .text(dataResponse.consultaSesmt.obsSesmt1, {
                    align: 'justify',
                })
        }

        if (dataResponse.consultaSesmt.obsSesmt3) {
            // texto da OBS 3 da NR04
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
        //constroi tabela
        const tableCipa = {
            headers: ['', 'Representantes da organização', 'Representantes dos empregados'], // sem texto no header horizontal. Apenas indicar o numero de colunas
            rows: [
                ['Membros da equipe efetiva', dataResponse.consultaCipa.cipaEfetivos, dataResponse.consultaCipa.cipaEfetivos],
                ['Membros da equipe suplente', dataResponse.consultaCipa.cipaSuplentes, dataResponse.consultaCipa.cipaSuplentes],
            ]
        };
        // escreve tabela no documento
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
        // observação da NR05
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
    //adiciona link e data-hora da geração no fim da página
    doc.addFooter(consulta, dateTimeReport);
    // se a consulta foi com CNPJ, adiciona uma segunda página e lista todos CNAEs associados
    if (dataResponse.dadosDaEmpresa && dataResponse.dadosCnaes) {
        //adiciona página padrão
        doc.addPage();
        //Título da tabela
        doc.fontSize(16)
            .font('Times-Bold')
            .text('CNAES CADASTRADOS', {
                align: 'left'
            })
        //constrói tabela
        const tableDadosCnaes = {
            headers: ['Código CNAE', 'Denominação', 'Grau de Risco Associado'],
            rows: []
        };
        dataResponse.dadosCnaes.forEach(cnae => {
            tableDadosCnaes.rows.push([cnae.codigo, cnae.denominacao, cnae.grauDeRisco])
        });
        //escreve tabela no doc
        doc.fontSize(12)
            .moveDown()
            .table(tableDadosCnaes, {
                prepareHeader: () => doc.font('Times-Bold').fontSize(10),
                prepareRow: (row, i) => doc.font('Times-Roman').fontSize(10),
                verticalHeader: false,
                columnWidths: [80, 350, 85],
                columnAlignments: ['left', 'left', 'right']
            });
        //adiciona link e data-hora da geração no fim da página
        doc.addFooter(consulta, dateTimeReport);
    }
}

module.exports = {
    report_model
};