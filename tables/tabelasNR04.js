// vetores com objetos que correspondem às tabelas da NR04

//manter valores em string por causa dos *, que são tratados no código
const dimensionamento_sesmt = [
    {
        id: 1,
        grau_risco: 1,
        nro_trabalhadores_min: 0,
        nro_trabalhadores_max: 49,
        tecnico_seg: "0",
        engenheiro_seg: "0",
        aux_tec_enfermagem: "0",
        enfermeiro: "0",
        medico: "0"
    },
    {
        id: 2,
        grau_risco: 1,
        nro_trabalhadores_min: 50,
        nro_trabalhadores_max: 100,
        tecnico_seg: "0",
        engenheiro_seg: "0",
        aux_tec_enfermagem: "0",
        enfermeiro: "0",
        medico: "0"
    },
    {
        id: 3,
        grau_risco: 1,
        nro_trabalhadores_min: 101,
        nro_trabalhadores_max: 250,
        tecnico_seg: "0",
        engenheiro_seg: "0",
        aux_tec_enfermagem: "0",
        enfermeiro: "0",
        medico: "0"
    },
    {
        id: 4,
        grau_risco: 1,
        nro_trabalhadores_min: 251,
        nro_trabalhadores_max: 500,
        tecnico_seg: "0",
        engenheiro_seg: "0",
        aux_tec_enfermagem: "0",
        enfermeiro: "0",
        medico: "0"
    },
    {
        id: 5,
        grau_risco: 1,
        nro_trabalhadores_min: 501,
        nro_trabalhadores_max: 1000,
        tecnico_seg: "1",
        engenheiro_seg: "0",
        aux_tec_enfermagem: "0",
        enfermeiro: "0",
        medico: "0"
    },
    {
        id: 6,
        grau_risco: 1,
        nro_trabalhadores_min: 1001,
        nro_trabalhadores_max: 2000,
        tecnico_seg: "1",
        engenheiro_seg: "0",
        aux_tec_enfermagem: "0",
        enfermeiro: "0",
        medico: "1*"
    },
    {
        id: 7,
        grau_risco: 1,
        nro_trabalhadores_min: 2001,
        nro_trabalhadores_max: 3500,
        tecnico_seg: "1",
        engenheiro_seg: "1*",
        aux_tec_enfermagem: "1***",
        enfermeiro: "0",
        medico: "1*"
    },
    {
        id: 8,
        grau_risco: 1,
        nro_trabalhadores_min: 3501,
        nro_trabalhadores_max: 5000,
        tecnico_seg: "2",
        engenheiro_seg: "1",
        aux_tec_enfermagem: "1",
        enfermeiro: "1*",
        medico: "1"
    },
    {
        id: 9,
        grau_risco: 1,
        nro_trabalhadores_min: 5001,
        nro_trabalhadores_max: 5001,
        tecnico_seg: "1",
        engenheiro_seg: "1*",
        aux_tec_enfermagem: "1",
        enfermeiro: "0",
        medico: "1*"
    },
    {
        id: 10,
        grau_risco: 2,
        nro_trabalhadores_min: 0,
        nro_trabalhadores_max: 49,
        tecnico_seg: "0",
        engenheiro_seg: "0",
        aux_tec_enfermagem: "0",
        enfermeiro: "0",
        medico: "0"
    },
    {
        id: 11,
        grau_risco: 2,
        nro_trabalhadores_min: 50,
        nro_trabalhadores_max: 100,
        tecnico_seg: "0",
        engenheiro_seg: "0",
        aux_tec_enfermagem: "0",
        enfermeiro: "0",
        medico: "0"
    },
    {
        id: 12,
        grau_risco: 2,
        nro_trabalhadores_min: 101,
        nro_trabalhadores_max: 250,
        tecnico_seg: "0",
        engenheiro_seg: "0",
        aux_tec_enfermagem: "0",
        enfermeiro: "0",
        medico: "0"
    },
    {
        id: 13,
        grau_risco: 2,
        nro_trabalhadores_min: 251,
        nro_trabalhadores_max: 500,
        tecnico_seg: "0",
        engenheiro_seg: "0",
        aux_tec_enfermagem: "0",
        enfermeiro: "0",
        medico: "0"
    },
    {
        id: 14,
        grau_risco: 2,
        nro_trabalhadores_min: 501,
        nro_trabalhadores_max: 1000,
        tecnico_seg: "1",
        engenheiro_seg: "0",
        aux_tec_enfermagem: "0",
        enfermeiro: "0",
        medico: "0"
    },
    {
        id: 15,
        grau_risco: 2,
        nro_trabalhadores_min: 1001,
        nro_trabalhadores_max: 2000,
        tecnico_seg: "1",
        engenheiro_seg: "1*",
        aux_tec_enfermagem: "1***",
        enfermeiro: "0",
        medico: "1*"
    },
    {
        id: 16,
        grau_risco: 2,
        nro_trabalhadores_min: 2001,
        nro_trabalhadores_max: 3500,
        tecnico_seg: "2",
        engenheiro_seg: "1",
        aux_tec_enfermagem: "1***",
        enfermeiro: "0",
        medico: "1"
    },
    {
        id: 17,
        grau_risco: 2,
        nro_trabalhadores_min: 3501,
        nro_trabalhadores_max: 5000,
        tecnico_seg: "5",
        engenheiro_seg: "1",
        aux_tec_enfermagem: "1",
        enfermeiro: "1",
        medico: "1"
    },
    {
        id: 18,
        grau_risco: 2,
        nro_trabalhadores_min: 5001,
        nro_trabalhadores_max: 5001,
        tecnico_seg: "1",
        engenheiro_seg: "1*",
        aux_tec_enfermagem: "1",
        enfermeiro: "0",
        medico: "1"
    },
    {
        id: 19,
        grau_risco: 3,
        nro_trabalhadores_min: 0,
        nro_trabalhadores_max: 49,
        tecnico_seg: "0",
        engenheiro_seg: "0",
        aux_tec_enfermagem: "0",
        enfermeiro: "0",
        medico: "0"
    },
    {
        id: 20,
        grau_risco: 3,
        nro_trabalhadores_min: 50,
        nro_trabalhadores_max: 100,
        tecnico_seg: "0",
        engenheiro_seg: "0",
        aux_tec_enfermagem: "0",
        enfermeiro: "0",
        medico: "0"
    },
    {
        id: 21,
        grau_risco: 3,
        nro_trabalhadores_min: 101,
        nro_trabalhadores_max: 250,
        tecnico_seg: "1",
        engenheiro_seg: "0",
        aux_tec_enfermagem: "0",
        enfermeiro: "0",
        medico: "0"
    },
    {
        id: 22,
        grau_risco: 3,
        nro_trabalhadores_min: 251,
        nro_trabalhadores_max: 500,
        tecnico_seg: "2",
        engenheiro_seg: "0",
        aux_tec_enfermagem: "0",
        enfermeiro: "0",
        medico: "0"
    },
    {
        id: 23,
        grau_risco: 3,
        nro_trabalhadores_min: 501,
        nro_trabalhadores_max: 1000,
        tecnico_seg: "3",
        engenheiro_seg: "1*",
        aux_tec_enfermagem: "0",
        enfermeiro: "0",
        medico: "1*"
    },
    {
        id: 24,
        grau_risco: 3,
        nro_trabalhadores_min: 1001,
        nro_trabalhadores_max: 2000,
        tecnico_seg: "4",
        engenheiro_seg: "1",
        aux_tec_enfermagem: "1***",
        enfermeiro: "0",
        medico: "1"
    },
    {
        id: 25,
        grau_risco: 3,
        nro_trabalhadores_min: 2001,
        nro_trabalhadores_max: 3500,
        tecnico_seg: "6",
        engenheiro_seg: "1",
        aux_tec_enfermagem: "1",
        enfermeiro: "1",
        medico: "1"
    },
    {
        id: 26,
        grau_risco: 3,
        nro_trabalhadores_min: 3501,
        nro_trabalhadores_max: 5000,
        tecnico_seg: "8",
        engenheiro_seg: "2",
        aux_tec_enfermagem: "1",
        enfermeiro: "1",
        medico: "2"
    },
    {
        id: 27,
        grau_risco: 3,
        nro_trabalhadores_min: 5001,
        nro_trabalhadores_max: 5001,
        tecnico_seg: "3",
        engenheiro_seg: "1",
        aux_tec_enfermagem: "1",
        enfermeiro: "0",
        medico: "1"
    },
    {
        id: 28,
        grau_risco: 4,
        nro_trabalhadores_min: 0,
        nro_trabalhadores_max: 49,
        tecnico_seg: "0",
        engenheiro_seg: "0",
        aux_tec_enfermagem: "0",
        enfermeiro: "0",
        medico: "0"
    },
    {
        id: 29,
        grau_risco: 4,
        nro_trabalhadores_min: 50,
        nro_trabalhadores_max: 100,
        tecnico_seg: "1",
        engenheiro_seg: "0",
        aux_tec_enfermagem: "0",
        enfermeiro: "0",
        medico: "0"
    },
    {
        id: 30,
        grau_risco: 4,
        nro_trabalhadores_min: 101,
        nro_trabalhadores_max: 250,
        tecnico_seg: "2",
        engenheiro_seg: "1*",
        aux_tec_enfermagem: "0",
        enfermeiro: "0",
        medico: "1"
    },
    {
        id: 31,
        grau_risco: 4,
        nro_trabalhadores_min: 251,
        nro_trabalhadores_max: 500,
        tecnico_seg: "3",
        engenheiro_seg: "1*",
        aux_tec_enfermagem: "0",
        enfermeiro: "0",
        medico: "1*"
    },
    {
        id: 32,
        grau_risco: 4,
        nro_trabalhadores_min: 501,
        nro_trabalhadores_max: 1000,
        tecnico_seg: "4",
        engenheiro_seg: "1",
        aux_tec_enfermagem: "1***",
        enfermeiro: "0",
        medico: "1"
    },
    {
        id: 33,
        grau_risco: 4,
        nro_trabalhadores_min: 1001,
        nro_trabalhadores_max: 2000,
        tecnico_seg: "5",
        engenheiro_seg: "1",
        aux_tec_enfermagem: "1***",
        enfermeiro: "0",
        medico: "1"
    },
    {
        id: 34,
        grau_risco: 4,
        nro_trabalhadores_min: 2001,
        nro_trabalhadores_max: 3500,
        tecnico_seg: "8",
        engenheiro_seg: "2",
        aux_tec_enfermagem: "1",
        enfermeiro: "1",
        medico: "2"
    },
    {
        id: 35,
        grau_risco: 4,
        nro_trabalhadores_min: 3501,
        nro_trabalhadores_max: 5000,
        tecnico_seg: "10",
        engenheiro_seg: "3",
        aux_tec_enfermagem: "1",
        enfermeiro: "1",
        medico: "3"
    },
    {
        id: 36,
        grau_risco: 4,
        nro_trabalhadores_min: 5001,
        nro_trabalhadores_max: 5001,
        tecnico_seg: "3",
        engenheiro_seg: "1",
        aux_tec_enfermagem: "1",
        enfermeiro: "0",
        medico: "1"
    },
];


const relacao_cnae_gr = [
    {
        id: 1,
        codigo_cnae: "A",
        denominacao: "AGRICULTURA, PECUÁRIA, PRODUÇÃO FLORESTAL, PESCA E AQÜICULTURA",
        grau_risco: ""
    },
    {
        id: 2,
        codigo_cnae: 1,
        denominacao: "AGRICULTURA, PECUÁRIA E SERVIÇOS RELACIONADOS",
        grau_risco: ""
    },
    {
        id: 3,
        codigo_cnae: "1,1",
        denominacao: "Produção de lavouras temporárias",
        grau_risco: ""
    },
    {
        id: 4,
        codigo_cnae: "01.11-3",
        denominacao: "Cultivo de cereais",
        grau_risco: 3
    },
    {
        id: 5,
        codigo_cnae: "01.12-1",
        denominacao: "Cultivo de algodão herbáceo e de outras fibras de lavoura temporária",
        grau_risco: 3
    },
    {
        id: 6,
        codigo_cnae: "01.13-0",
        denominacao: "Cultivo de cana-de-açúcar",
        grau_risco: 3
    },
    {
        id: 7,
        codigo_cnae: "01.14-8",
        denominacao: "Cultivo de fumo",
        grau_risco: 3
    },
    {
        id: 8,
        codigo_cnae: "01.15-6",
        denominacao: "Cultivo de soja",
        grau_risco: 3
    },
    {
        id: 9,
        codigo_cnae: "01.16-4",
        denominacao: "Cultivo de oleaginosas de lavoura temporária, exceto soja",
        grau_risco: 3
    },
    {
        id: 10,
        codigo_cnae: "01.19-9",
        denominacao: "Cultivo de plantas de lavoura temporária não especificadas anteriormente",
        grau_risco: 3
    },
    {
        id: 11,
        codigo_cnae: "1,2",
        denominacao: "Horticultura e floricultura",
        grau_risco: ""
    },
    {
        id: 12,
        codigo_cnae: "01.21-1",
        denominacao: "Horticultura",
        grau_risco: 3
    },
    {
        id: 13,
        codigo_cnae: "01.22-9",
        denominacao: "Cultivo de flores e plantas ornamentais",
        grau_risco: 3
    },
    {
        id: 14,
        codigo_cnae: "1,3",
        denominacao: "Produção de lavouras permanentes",
        grau_risco: ""
    },
    {
        id: 15,
        codigo_cnae: "01.31-8",
        denominacao: "Cultivo de laranja",
        grau_risco: 3
    },
    {
        id: 16,
        codigo_cnae: "01.32-6",
        denominacao: "Cultivo de uva",
        grau_risco: 3
    },
    {
        id: 17,
        codigo_cnae: "01.33-4",
        denominacao: "Cultivo de frutas de lavoura permanente, exceto laranja e uva",
        grau_risco: 3
    },
    {
        id: 18,
        codigo_cnae: "01.34-2",
        denominacao: "Cultivo de café",
        grau_risco: 3
    },
    {
        id: 19,
        codigo_cnae: "01.35-1",
        denominacao: "Cultivo de cacau",
        grau_risco: 3
    },
    {
        id: 20,
        codigo_cnae: "01.39-3",
        denominacao: "Cultivo de plantas de lavoura permanente não especificadas anteriormente",
        grau_risco: 3
    },
    {
        id: 21,
        codigo_cnae: "1,4",
        denominacao: "Produção de sementes e mudas certificadas",
        grau_risco: ""
    },
    {
        id: 22,
        codigo_cnae: "01.41-5",
        denominacao: "Produção de sementes certificadas",
        grau_risco: 3
    },
    {
        id: 23,
        codigo_cnae: "01.42-3",
        denominacao: "Produção de mudas e outras formas de propagação vegetal, certificadas",
        grau_risco: 3
    },
    {
        id: 24,
        codigo_cnae: "1,5",
        denominacao: "Pecuária",
        grau_risco: ""
    },
    {
        id: 25,
        codigo_cnae: "01.51-2",
        denominacao: "Criação de bovinos",
        grau_risco: 3
    },
    {
        id: 26,
        codigo_cnae: "01.52-1",
        denominacao: "Criação de outros animais de grande porte",
        grau_risco: 3
    },
    {
        id: 27,
        codigo_cnae: "01.53-9",
        denominacao: "Criação de caprinos e ovinos",
        grau_risco: 3
    },
    {
        id: 28,
        codigo_cnae: "01.54-7",
        denominacao: "Criação de suínos",
        grau_risco: 3
    },
    {
        id: 29,
        codigo_cnae: "01.55-5",
        denominacao: "Criação de aves",
        grau_risco: 3
    },
    {
        id: 30,
        codigo_cnae: "01.59-8",
        denominacao: "Criação de animais não especificados anteriormente",
        grau_risco: 3
    },
    {
        id: 31,
        codigo_cnae: "1,6",
        denominacao: "Atividades de apoio à agricultura e à pecuária; atividades de pós-colheita",
        grau_risco: ""
    },
    {
        id: 32,
        codigo_cnae: "01.61-0",
        denominacao: "Atividades de apoio à agricultura",
        grau_risco: 3
    },
    {
        id: 33,
        codigo_cnae: "01.62-8",
        denominacao: "Atividades de apoio à pecuária",
        grau_risco: 3
    },
    {
        id: 34,
        codigo_cnae: "01.63-6",
        denominacao: "Atividades de pós-colheita",
        grau_risco: 3
    },
    {
        id: 35,
        codigo_cnae: "1,7",
        denominacao: "Caça e serviços relacionados",
        grau_risco: ""
    },
    {
        id: 36,
        codigo_cnae: "01.70-9",
        denominacao: "Caça e serviços relacionados",
        grau_risco: 3
    },
    {
        id: 37,
        codigo_cnae: 2,
        denominacao: "PRODUÇÃO FLORESTAL",
        grau_risco: ""
    },
    {
        id: 38,
        codigo_cnae: "2,1",
        denominacao: "Produção florestal - florestas plantadas",
        grau_risco: ""
    },
    {
        id: 39,
        codigo_cnae: "02.10-1",
        denominacao: "Produção florestal - florestas plantadas",
        grau_risco: 3
    },
    {
        id: 40,
        codigo_cnae: "2,2",
        denominacao: "Produção florestal - florestas nativas",
        grau_risco: ""
    },
    {
        id: 41,
        codigo_cnae: "02.20-9",
        denominacao: "Produção florestal - florestas nativas",
        grau_risco: 4
    },
    {
        id: 42,
        codigo_cnae: "2,3",
        denominacao: "Atividades de apoio à produção florestal",
        grau_risco: ""
    },
    {
        id: 43,
        codigo_cnae: "02.30-6",
        denominacao: "Atividades de apoio à produção florestal",
        grau_risco: 3
    },
    {
        id: 44,
        codigo_cnae: 3,
        denominacao: "PESCA E AQÜICULTURA",
        grau_risco: ""
    },
    {
        id: 45,
        codigo_cnae: "3,1",
        denominacao: "Pesca",
        grau_risco: ""
    },
    {
        id: 46,
        codigo_cnae: "03.11-6",
        denominacao: "Pesca em água salgada",
        grau_risco: 3
    },
    {
        id: 47,
        codigo_cnae: "03.12-4",
        denominacao: "Pesca em água doce",
        grau_risco: 3
    },
    {
        id: 48,
        codigo_cnae: "3,2",
        denominacao: "Aqüicultura",
        grau_risco: ""
    },
    {
        id: 49,
        codigo_cnae: "03.21-3",
        denominacao: "Aqüicultura em água salgada e salobra",
        grau_risco: 3
    },
    {
        id: 50,
        codigo_cnae: "03.22-1",
        denominacao: "Aqüicultura em água doce",
        grau_risco: 3
    },
    {
        id: 51,
        codigo_cnae: "B",
        denominacao: "INDÚSTRIAS EXTRATIVAS",
        grau_risco: ""
    },
    {
        id: 52,
        codigo_cnae: 5,
        denominacao: "EXTRAÇÃO DE CARVÃO MINERAL",
        grau_risco: ""
    },
    {
        id: 53,
        codigo_cnae: 5,
        denominacao: "Extração de carvão mineral",
        grau_risco: ""
    },
    {
        id: 54,
        codigo_cnae: "05.00-3",
        denominacao: "Extração de carvão mineral",
        grau_risco: 4
    },
    {
        id: 55,
        codigo_cnae: 6,
        denominacao: "EXTRAÇÃO DE PETRÓLEO E GÁS NATURAL",
        grau_risco: ""
    },
    {
        id: 56,
        codigo_cnae: 6,
        denominacao: "Extração de petróleo e gás natural",
        grau_risco: ""
    },
    {
        id: 57,
        codigo_cnae: "06.00-0",
        denominacao: "Extração de petróleo e gás natural",
        grau_risco: 4
    },
    {
        id: 58,
        codigo_cnae: 7,
        denominacao: "EXTRAÇÃO DE MINERAIS METÁLICOS",
        grau_risco: ""
    },
    {
        id: 59,
        codigo_cnae: "7,1",
        denominacao: "Extração de minério de ferro",
        grau_risco: ""
    },
    {
        id: 60,
        codigo_cnae: "07.10-3",
        denominacao: "Extração de minério de ferro",
        grau_risco: 4
    },
    {
        id: 61,
        codigo_cnae: "7,2",
        denominacao: "Extração de minerais metálicos não-ferrosos",
        grau_risco: ""
    },
    {
        id: 62,
        codigo_cnae: "07.21-9",
        denominacao: "Extração de minério de alumínio",
        grau_risco: 4
    },
    {
        id: 63,
        codigo_cnae: "07.22-7",
        denominacao: "Extração de minério de estanho",
        grau_risco: 4
    },
    {
        id: 64,
        codigo_cnae: "07.23-5",
        denominacao: "Extração de minério de manganês",
        grau_risco: 4
    },
    {
        id: 65,
        codigo_cnae: "07.24-3",
        denominacao: "Extração de minério de metais preciosos",
        grau_risco: 4
    },
    {
        id: 66,
        codigo_cnae: "07.25-1",
        denominacao: "Extração de minerais radioativos",
        grau_risco: 4
    },
    {
        id: 67,
        codigo_cnae: "07.29-4",
        denominacao: "Extração de minerais metálicos não-ferrosos não especificados anteriormente",
        grau_risco: 4
    },
    {
        id: 68,
        codigo_cnae: 8,
        denominacao: "EXTRAÇÃO DE MINERAIS NÃO-METÁLICOS",
        grau_risco: ""
    },
    {
        id: 69,
        codigo_cnae: "8,1",
        denominacao: "Extração de pedra, areia e argila",
        grau_risco: ""
    },
    {
        id: 70,
        codigo_cnae: "08.10-0",
        denominacao: "Extração de pedra, areia e argila",
        grau_risco: 4
    },
    {
        id: 71,
        codigo_cnae: "8,9",
        denominacao: "Extração de outros minerais não-metálicos",
        grau_risco: ""
    },
    {
        id: 72,
        codigo_cnae: "08.91-6",
        denominacao: "Extração de minerais para fabricação de adubos, fertilizantes e outros produtos químicos",
        grau_risco: 4
    },
    {
        id: 73,
        codigo_cnae: "08.92-4",
        denominacao: "Extração e refino de sal marinho e sal-gema",
        grau_risco: 4
    },
    {
        id: 74,
        codigo_cnae: "08.93-2",
        denominacao: "Extração de gemas (pedras preciosas e semipreciosas)",
        grau_risco: 4
    },
    {
        id: 75,
        codigo_cnae: "08.99-1",
        denominacao: "Extração de minerais não-metálicos não especificados anteriormente",
        grau_risco: 4
    },
    {
        id: 76,
        codigo_cnae: 9,
        denominacao: "ATIVIDADES DE APOIO À EXTRAÇÃO DE MINERAIS",
        grau_risco: ""
    },
    {
        id: 77,
        codigo_cnae: "9,1",
        denominacao: "Atividades de apoio à extração de petróleo e gás natural",
        grau_risco: ""
    },
    {
        id: 78,
        codigo_cnae: "09.10-6",
        denominacao: "Atividades de apoio à extração de petróleo e gás natural",
        grau_risco: 4
    },
    {
        id: 79,
        codigo_cnae: "9,9",
        denominacao: "Atividades de apoio à extração de minerais, exceto petróleo e gás natural",
        grau_risco: ""
    },
    {
        id: 80,
        codigo_cnae: "09.90-4",
        denominacao: "Atividades de apoio à extração de minerais, exceto petróleo e gás natural",
        grau_risco: 4
    },
    {
        id: 81,
        codigo_cnae: "C",
        denominacao: "INDÚSTRIAS DE TRANSFORMAÇÃO",
        grau_risco: ""
    },
    {
        id: 82,
        codigo_cnae: 10,
        denominacao: "FABRICAÇÃO DE PRODUTOS ALIMENTÍCIOS",
        grau_risco: ""
    },
    {
        id: 83,
        codigo_cnae: "10,1",
        denominacao: "Abate e fabricação de produtos de carne",
        grau_risco: ""
    },
    {
        id: 84,
        codigo_cnae: "10.11-2",
        denominacao: "Abate de reses, exceto suínos",
        grau_risco: 3
    },
    {
        id: 85,
        codigo_cnae: "10.12-1",
        denominacao: "Abate de suínos, aves e outros pequenos animais",
        grau_risco: 3
    },
    {
        id: 86,
        codigo_cnae: "10.13-9",
        denominacao: "Fabricação de produtos de carne",
        grau_risco: 3
    },
    {
        id: 87,
        codigo_cnae: "10,2",
        denominacao: "Preservação do pescado e fabricação de produtos do pescado",
        grau_risco: ""
    },
    {
        id: 88,
        codigo_cnae: "10.20-1",
        denominacao: "Preservação do pescado e fabricação de produtos do pescado",
        grau_risco: 3
    },
    {
        id: 89,
        codigo_cnae: "10,3",
        denominacao: "Fabricação de conservas de frutas, legumes e outros vegetais",
        grau_risco: ""
    },
    {
        id: 90,
        codigo_cnae: "10.31-7",
        denominacao: "Fabricação de conservas de frutas",
        grau_risco: 3
    },
    {
        id: 91,
        codigo_cnae: "10.32-5",
        denominacao: "Fabricação de conservas de legumes e outros vegetais",
        grau_risco: 3
    },
    {
        id: 92,
        codigo_cnae: "10.33-3",
        denominacao: "Fabricação de sucos de frutas, hortaliças e legumes",
        grau_risco: 3
    },
    {
        id: 93,
        codigo_cnae: "10,4",
        denominacao: "Fabricação de óleos e gorduras vegetais e animais",
        grau_risco: ""
    },
    {
        id: 94,
        codigo_cnae: "10.41-4",
        denominacao: "Fabricação de óleos vegetais em bruto, exceto óleo de milho",
        grau_risco: 3
    },
    {
        id: 95,
        codigo_cnae: "10.42-2",
        denominacao: "Fabricação de óleos vegetais refinados, exceto óleo de milho",
        grau_risco: 3
    },
    {
        id: 96,
        codigo_cnae: "10.43-1",
        denominacao: "Fabricação de margarina e outras gorduras vegetais e de óleos não-comestíveis de animais",
        grau_risco: 3
    },
    {
        id: 97,
        codigo_cnae: "10,5",
        denominacao: "Laticínios",
        grau_risco: ""
    },
    {
        id: 98,
        codigo_cnae: "10.51-1",
        denominacao: "Preparação do leite",
        grau_risco: 3
    },
    {
        id: 99,
        codigo_cnae: "10.52-0",
        denominacao: "Fabricação de laticínios",
        grau_risco: 3
    },
    {
        id: 100,
        codigo_cnae: "10.53-8",
        denominacao: "Fabricação de sorvetes e outros gelados comestíveis",
        grau_risco: 3
    },
    {
        id: 101,
        codigo_cnae: "10,6",
        denominacao: "Moagem, fabricação de produtos amiláceos e de alimentos para animais",
        grau_risco: ""
    },
    {
        id: 102,
        codigo_cnae: "10.61-9",
        denominacao: "Beneficiamento de arroz e fabricação de produtos do arroz",
        grau_risco: 3
    },
    {
        id: 103,
        codigo_cnae: "10.62-7",
        denominacao: "Moagem de trigo e fabricação de derivados",
        grau_risco: 3
    },
    {
        id: 104,
        codigo_cnae: "10.63-5",
        denominacao: "Fabricação de farinha de mandioca e derivados",
        grau_risco: 3
    },
    {
        id: 105,
        codigo_cnae: "10.64-3",
        denominacao: "Fabricação de farinha de milho e derivados, exceto óleos de milho",
        grau_risco: 3
    },
    {
        id: 106,
        codigo_cnae: "10.65-1",
        denominacao: "Fabricação de amidos e féculas de vegetais e de óleos de milho",
        grau_risco: 3
    },
    {
        id: 107,
        codigo_cnae: "10.66-0",
        denominacao: "Fabricação de alimentos para animais",
        grau_risco: 3
    },
    {
        id: 108,
        codigo_cnae: "10.69-4",
        denominacao: "Moagem e fabricação de produtos de origem vegetal não especificados anteriormente",
        grau_risco: 3
    },
    {
        id: 109,
        codigo_cnae: "10,7",
        denominacao: "Fabricação e refino de açúcar",
        grau_risco: ""
    },
    {
        id: 110,
        codigo_cnae: "10.71-6",
        denominacao: "Fabricação de açúcar em bruto",
        grau_risco: 3
    },
    {
        id: 111,
        codigo_cnae: "10.72-4",
        denominacao: "Fabricação de açúcar refinado",
        grau_risco: 3
    },
    {
        id: 112,
        codigo_cnae: "10,8",
        denominacao: "Torrefação e moagem de café",
        grau_risco: ""
    },
    {
        id: 113,
        codigo_cnae: "10.81-3",
        denominacao: "Torrefação e moagem de café",
        grau_risco: 3
    },
    {
        id: 114,
        codigo_cnae: "10.82-1",
        denominacao: "Fabricação de produtos à base de café",
        grau_risco: 3
    },
    {
        id: 115,
        codigo_cnae: "10,9",
        denominacao: "Fabricação de outros produtos alimentícios",
        grau_risco: ""
    },
    {
        id: 116,
        codigo_cnae: "10.91-1",
        denominacao: "Fabricação de produtos de panificação",
        grau_risco: 3
    },
    {
        id: 117,
        codigo_cnae: "10.92-9",
        denominacao: "Fabricação de biscoitos e bolachas",
        grau_risco: 3
    },
    {
        id: 118,
        codigo_cnae: "10.93-7",
        denominacao: "Fabricação de produtos derivados do cacau, de chocolates e confeitos",
        grau_risco: 3
    },
    {
        id: 119,
        codigo_cnae: "10.94-5",
        denominacao: "Fabricação de massas alimentícias",
        grau_risco: 3
    },
    {
        id: 120,
        codigo_cnae: "10.95-3",
        denominacao: "Fabricação de especiarias, molhos, temperos e condimentos",
        grau_risco: 3
    },
    {
        id: 121,
        codigo_cnae: "10.96-1",
        denominacao: "Fabricação de alimentos e pratos prontos",
        grau_risco: 3
    },
    {
        id: 122,
        codigo_cnae: "10.99-6",
        denominacao: "Fabricação de produtos alimentícios não especificados anteriormente",
        grau_risco: 3
    },
    {
        id: 123,
        codigo_cnae: 11,
        denominacao: "FABRICAÇÃO DE BEBIDAS",
        grau_risco: ""
    },
    {
        id: 124,
        codigo_cnae: "11,1",
        denominacao: "Fabricação de bebidas alcoólicas",
        grau_risco: ""
    },
    {
        id: 125,
        codigo_cnae: "11.11-9",
        denominacao: "Fabricação de aguardentes e outras bebidas destiladas",
        grau_risco: 3
    },
    {
        id: 126,
        codigo_cnae: "11.12-7",
        denominacao: "Fabricação de vinho",
        grau_risco: 3
    },
    {
        id: 127,
        codigo_cnae: "11.13-5",
        denominacao: "Fabricação de malte, cervejas e chopes",
        grau_risco: 3
    },
    {
        id: 128,
        codigo_cnae: "11,2",
        denominacao: "Fabricação de bebidas não-alcoólicas",
        grau_risco: ""
    },
    {
        id: 129,
        codigo_cnae: "11.21-6",
        denominacao: "Fabricação de águas envasadas",
        grau_risco: 3
    },
    {
        id: 130,
        codigo_cnae: "11.22-4",
        denominacao: "Fabricação de refrigerantes e de outras bebidas não-alcoólicas",
        grau_risco: 3
    },
    {
        id: 131,
        codigo_cnae: 12,
        denominacao: "FABRICAÇÃO DE PRODUTOS DO FUMO",
        grau_risco: ""
    },
    {
        id: 132,
        codigo_cnae: "12,1",
        denominacao: "Processamento industrial do fumo",
        grau_risco: ""
    },
    {
        id: 133,
        codigo_cnae: "12.10-7",
        denominacao: "Processamento industrial do fumo",
        grau_risco: 3
    },
    {
        id: 134,
        codigo_cnae: "12,2",
        denominacao: "Fabricação de produtos do fumo",
        grau_risco: ""
    },
    {
        id: 135,
        codigo_cnae: "12.20-4",
        denominacao: "Fabricação de produtos do fumo",
        grau_risco: 3
    },
    {
        id: 136,
        codigo_cnae: 13,
        denominacao: "FABRICAÇÃO DE PRODUTOS TÊXTEIS",
        grau_risco: ""
    },
    {
        id: 137,
        codigo_cnae: "13,1",
        denominacao: "Preparação e fiação de fibras têxteis",
        grau_risco: ""
    },
    {
        id: 138,
        codigo_cnae: "13.11-1",
        denominacao: "Preparação e fiação de fibras de algodão",
        grau_risco: 3
    },
    {
        id: 139,
        codigo_cnae: "13.12-0",
        denominacao: "Preparação e fiação de fibras têxteis naturais, exceto algodão",
        grau_risco: 3
    },
    {
        id: 140,
        codigo_cnae: "13.13-8",
        denominacao: "Fiação de fibras artificiais e sintéticas",
        grau_risco: 3
    },
    {
        id: 141,
        codigo_cnae: "13.14-6",
        denominacao: "Fabricação de linhas para costurar e bordar",
        grau_risco: 3
    },
    {
        id: 142,
        codigo_cnae: "13,2",
        denominacao: "Tecelagem, exceto malha",
        grau_risco: ""
    },
    {
        id: 143,
        codigo_cnae: "13.21-9",
        denominacao: "Tecelagem de fios de algodão",
        grau_risco: 3
    },
    {
        id: 144,
        codigo_cnae: "13.22-7",
        denominacao: "Tecelagem de fios de fibras têxteis naturais, exceto algodão",
        grau_risco: 3
    },
    {
        id: 145,
        codigo_cnae: "13.23-5",
        denominacao: "Tecelagem de fios de fibras artificiais e sintéticas",
        grau_risco: 3
    },
    {
        id: 146,
        codigo_cnae: "13,3",
        denominacao: "Fabricação de tecidos de malha",
        grau_risco: ""
    },
    {
        id: 147,
        codigo_cnae: "13.30-8",
        denominacao: "Fabricação de tecidos de malha",
        grau_risco: 3
    },
    {
        id: 148,
        codigo_cnae: "13,4",
        denominacao: "Acabamentos em fios, tecidos e artefatos têxteis",
        grau_risco: ""
    },
    {
        id: 149,
        codigo_cnae: "13.40-5",
        denominacao: "Acabamentos em fios, tecidos e artefatos têxteis",
        grau_risco: 3
    },
    {
        id: 150,
        codigo_cnae: "13,5",
        denominacao: "Fabricação de artefatos têxteis, exceto vestuário",
        grau_risco: ""
    },
    {
        id: 151,
        codigo_cnae: "13.51-1",
        denominacao: "Fabricação de artefatos têxteis para uso doméstico",
        grau_risco: 3
    },
    {
        id: 152,
        codigo_cnae: "13.52-9",
        denominacao: "Fabricação de artefatos de tapeçaria",
        grau_risco: 3
    },
    {
        id: 153,
        codigo_cnae: "13.53-7",
        denominacao: "Fabricação de artefatos de cordoaria",
        grau_risco: 3
    },
    {
        id: 154,
        codigo_cnae: "13.54-5",
        denominacao: "Fabricação de tecidos especiais, inclusive artefatos",
        grau_risco: 3
    },
    {
        id: 155,
        codigo_cnae: "13.59-6",
        denominacao: "Fabricação de outros produtos têxteis não especificados anteriormente",
        grau_risco: 3
    },
    {
        id: 156,
        codigo_cnae: 14,
        denominacao: "CONFECÇÃO DE ARTIGOS DO VESTUÁRIO E ACESSÓRIOS",
        grau_risco: ""
    },
    {
        id: 157,
        codigo_cnae: "14,1",
        denominacao: "Confecção de artigos do vestuário e acessórios",
        grau_risco: ""
    },
    {
        id: 158,
        codigo_cnae: "14.11-8",
        denominacao: "Confecção de roupas íntimas",
        grau_risco: 2
    },
    {
        id: 159,
        codigo_cnae: "14.12-6",
        denominacao: "Confecção de peças do vestuário, exceto roupas íntimas",
        grau_risco: 2
    },
    {
        id: 160,
        codigo_cnae: "14.13-4",
        denominacao: "Confecção de roupas profissionais",
        grau_risco: 2
    },
    {
        id: 161,
        codigo_cnae: "14.14-2",
        denominacao: "Fabricação de acessórios do vestuário, exceto para segurança e proteção",
        grau_risco: 2
    },
    {
        id: 162,
        codigo_cnae: "14,2",
        denominacao: "Fabricação de artigos de malharia e tricotagem",
        grau_risco: ""
    },
    {
        id: 163,
        codigo_cnae: "14.21-5",
        denominacao: "Fabricação de meias",
        grau_risco: 2
    },
    {
        id: 164,
        codigo_cnae: "14.22-3",
        denominacao: "Fabricação de artigos do vestuário, produzidos em malharias e tricotagens, exceto meias",
        grau_risco: 2
    },
    {
        id: 165,
        codigo_cnae: 15,
        denominacao: "PREPARAÇÃO DE COUROS E FABRICAÇÃO DE ARTEFATOS DE COURO, ARTIGOS PARA VIAGEM E CALÇADOS",
        grau_risco: ""
    },
    {
        id: 166,
        codigo_cnae: "15,1",
        denominacao: "Curtimento e outras preparações de couro",
        grau_risco: ""
    },
    {
        id: 167,
        codigo_cnae: "15.10-6",
        denominacao: "Curtimento e outras preparações de couro",
        grau_risco: 3
    },
    {
        id: 168,
        codigo_cnae: "15,2",
        denominacao: "Fabricação de artigos para viagem e de artefatos diversos de couro",
        grau_risco: ""
    },
    {
        id: 169,
        codigo_cnae: "15.21-1",
        denominacao: "Fabricação de artigos para viagem, bolsas e semelhantes de qualquer material",
        grau_risco: 2
    },
    {
        id: 170,
        codigo_cnae: "15.29-7",
        denominacao: "Fabricação de artefatos de couro não especificados anteriormente",
        grau_risco: 2
    },
    {
        id: 171,
        codigo_cnae: "15,3",
        denominacao: "Fabricação de calçados",
        grau_risco: ""
    },
    {
        id: 172,
        codigo_cnae: "15.31-9",
        denominacao: "Fabricação de calçados de couro",
        grau_risco: 3
    },
    {
        id: 173,
        codigo_cnae: "15.32-7",
        denominacao: "Fabricação de tênis de qualquer material",
        grau_risco: 3
    },
    {
        id: 174,
        codigo_cnae: "15.33-5",
        denominacao: "Fabricação de calçados de material sintético",
        grau_risco: 3
    },
    {
        id: 175,
        codigo_cnae: "15.39-4",
        denominacao: "Fabricação de calçados de materiais não especificados anteriormente",
        grau_risco: 3
    },
    {
        id: 176,
        codigo_cnae: "15,4",
        denominacao: "Fabricação de partes para calçados, de qualquer material",
        grau_risco: ""
    },
    {
        id: 177,
        codigo_cnae: "15.40-8",
        denominacao: "Fabricação de partes para calçados, de qualquer material",
        grau_risco: 3
    },
    {
        id: 178,
        codigo_cnae: 16,
        denominacao: "FABRICAÇÃO DE PRODUTOS DE MADEIRA",
        grau_risco: ""
    },
    {
        id: 179,
        codigo_cnae: "16,1",
        denominacao: "Desdobramento de madeira",
        grau_risco: ""
    },
    {
        id: 180,
        codigo_cnae: "16.10-2",
        denominacao: "Desdobramento de madeira",
        grau_risco: 3
    },
    {
        id: 181,
        codigo_cnae: "16,2",
        denominacao: "Fabricação de produtos de madeira, cortiça e material trançado, exceto móveis",
        grau_risco: ""
    },
    {
        id: 182,
        codigo_cnae: "16.21-8",
        denominacao: "Fabricação de madeira laminada e de chapas de madeira compensada, prensada e aglomerada",
        grau_risco: 3
    },
    {
        id: 183,
        codigo_cnae: "16.22-6",
        denominacao: "Fabricação de estruturas de madeira e de artigos de carpintaria para construção",
        grau_risco: 3
    },
    {
        id: 184,
        codigo_cnae: "16.23-4",
        denominacao: "Fabricação de artefatos de tanoaria e de embalagens de madeira",
        grau_risco: 3
    },
    {
        id: 185,
        codigo_cnae: "16.29-3",
        denominacao: "Fabricação de artefatos de madeira, palha, cortiça, vime e material trançado não especificados anteriormente, exceto móveis",
        grau_risco: 3
    },
    {
        id: 186,
        codigo_cnae: 17,
        denominacao: "FABRICAÇÃO DE CELULOSE, PAPEL E PRODUTOS DE PAPEL",
        grau_risco: ""
    },
    {
        id: 187,
        codigo_cnae: "17,1",
        denominacao: "Fabricação de celulose e outras pastas para a fabricação de papel",
        grau_risco: ""
    },
    {
        id: 188,
        codigo_cnae: "17.10-9",
        denominacao: "Fabricação de celulose e outras pastas para a fabricação de papel",
        grau_risco: 3
    },
    {
        id: 189,
        codigo_cnae: "17,2",
        denominacao: "Fabricação de papel, cartolina e papel-cartão",
        grau_risco: ""
    },
    {
        id: 190,
        codigo_cnae: "17.21-4",
        denominacao: "Fabricação de papel",
        grau_risco: 3
    },
    {
        id: 191,
        codigo_cnae: "17.22-2",
        denominacao: "Fabricação de cartolina e papel-cartão",
        grau_risco: 3
    },
    {
        id: 192,
        codigo_cnae: "17,3",
        denominacao: "Fabricação de embalagens de papel, cartolina, papel-cartão e papelão ondulado",
        grau_risco: ""
    },
    {
        id: 193,
        codigo_cnae: "17.31-1",
        denominacao: "Fabricação de embalagens de papel",
        grau_risco: 2
    },
    {
        id: 194,
        codigo_cnae: "17.32-0",
        denominacao: "Fabricação de embalagens de cartolina e papel-cartão",
        grau_risco: 2
    },
    {
        id: 195,
        codigo_cnae: "17.33-8",
        denominacao: "Fabricação de chapas e de embalagens de papelão ondulado",
        grau_risco: 2
    },
    {
        id: 196,
        codigo_cnae: "17,4",
        denominacao: "Fabricação de produtos diversos de papel, cartolina, papel-cartão e papelão ondulado",
        grau_risco: ""
    },
    {
        id: 197,
        codigo_cnae: "17.41-9",
        denominacao: "Fabricação de produtos de papel, cartolina, papel-cartão e papelão ondulado para uso comercial e de escritório",
        grau_risco: 2
    },
    {
        id: 198,
        codigo_cnae: "17.42-7",
        denominacao: "Fabricação de produtos de papel para usos doméstico e higiênico-sanitário",
        grau_risco: 2
    },
    {
        id: 199,
        codigo_cnae: "17.49-4",
        denominacao: "Fabricação de produtos de pastas celulósicas, papel, cartolina, papel-cartão e papelão ondulado não especificados anteriormente",
        grau_risco: 2
    },
    {
        id: 200,
        codigo_cnae: 18,
        denominacao: "IMPRESSÃO E REPRODUÇÃO DE GRAVAÇÕES",
        grau_risco: ""
    },
    {
        id: 201,
        codigo_cnae: "18,1",
        denominacao: "Atividade de impressão",
        grau_risco: ""
    },
    {
        id: 202,
        codigo_cnae: "18.11-3",
        denominacao: "Impressão de jornais, livros, revistas e outras publicações periódicas",
        grau_risco: 3
    },
    {
        id: 203,
        codigo_cnae: "18.12-1",
        denominacao: "Impressão de material de segurança",
        grau_risco: 3
    },
    {
        id: 204,
        codigo_cnae: "18.13-0",
        denominacao: "Impressão de materiais para outros usos",
        grau_risco: 3
    },
    {
        id: 205,
        codigo_cnae: "18,2",
        denominacao: "Serviços de pré-impressão e acabamentos gráficos",
        grau_risco: ""
    },
    {
        id: 206,
        codigo_cnae: "18.21-1",
        denominacao: "Serviços de pré-impressão",
        grau_risco: 3
    },
    {
        id: 207,
        codigo_cnae: "18.22-9",
        denominacao: "Serviços de acabamentos gráficos",
        grau_risco: 3
    },
    {
        id: 208,
        codigo_cnae: "18,3",
        denominacao: "Reprodução de materiais gravados em qualquer suporte",
        grau_risco: ""
    },
    {
        id: 209,
        codigo_cnae: "18.30-0",
        denominacao: "Reprodução de materiais gravados em qualquer suporte",
        grau_risco: 3
    },
    {
        id: 210,
        codigo_cnae: 19,
        denominacao: "FABRICAÇÃO DE COQUE, DE PRODUTOS DERIVADOS DO PETRÓLEO E DE BIOCOMBUSTÍVEIS",
        grau_risco: ""
    },
    {
        id: 211,
        codigo_cnae: "19,1",
        denominacao: "Coquerias",
        grau_risco: ""
    },
    {
        id: 212,
        codigo_cnae: "19.10-1",
        denominacao: "Coquerias",
        grau_risco: 3
    },
    {
        id: 213,
        codigo_cnae: "19,2",
        denominacao: "Fabricação de produtos derivados do petróleo",
        grau_risco: ""
    },
    {
        id: 214,
        codigo_cnae: "19.21-7",
        denominacao: "Fabricação de produtos do refino de petróleo",
        grau_risco: 3
    },
    {
        id: 215,
        codigo_cnae: "19.22-5",
        denominacao: "Fabricação de produtos derivados do petróleo, exceto produtos do refino",
        grau_risco: 3
    },
    {
        id: 216,
        codigo_cnae: "19,3",
        denominacao: "Fabricação de biocombustíveis",
        grau_risco: ""
    },
    {
        id: 217,
        codigo_cnae: "19.31-4",
        denominacao: "Fabricação de álcool",
        grau_risco: 3
    },
    {
        id: 218,
        codigo_cnae: "19.32-2",
        denominacao: "Fabricação de biocombustíveis, exceto álcool",
        grau_risco: 3
    },
    {
        id: 219,
        codigo_cnae: 20,
        denominacao: "FABRICAÇÃO DE PRODUTOS QUÍMICOS",
        grau_risco: ""
    },
    {
        id: 220,
        codigo_cnae: "20,1",
        denominacao: "Fabricação de produtos químicos inorgânicos",
        grau_risco: ""
    },
    {
        id: 221,
        codigo_cnae: "20.11-8",
        denominacao: "Fabricação de cloro e álcalis",
        grau_risco: 3
    },
    {
        id: 222,
        codigo_cnae: "20.12-6",
        denominacao: "Fabricação de intermediários para fertilizantes",
        grau_risco: 3
    },
    {
        id: 223,
        codigo_cnae: "20.13-4",
        denominacao: "Fabricação de adubos e fertilizantes",
        grau_risco: 3
    },
    {
        id: 224,
        codigo_cnae: "20.14-2",
        denominacao: "Fabricação de gases industriais",
        grau_risco: 3
    },
    {
        id: 225,
        codigo_cnae: "20.19-3",
        denominacao: "Fabricação de produtos químicos inorgânicos não especificados anteriormente",
        grau_risco: 3
    },
    {
        id: 226,
        codigo_cnae: "20,2",
        denominacao: "Fabricação de produtos químicos orgânicos",
        grau_risco: ""
    },
    {
        id: 227,
        codigo_cnae: "20.21-5",
        denominacao: "Fabricação de produtos petroquímicos básicos",
        grau_risco: 3
    },
    {
        id: 228,
        codigo_cnae: "20.22-3",
        denominacao: "Fabricação de intermediários para plastificantes, resinas e fibras",
        grau_risco: 3
    },
    {
        id: 229,
        codigo_cnae: "20.29-1",
        denominacao: "Fabricação de produtos químicos orgânicos não especificados anteriormente",
        grau_risco: 3
    },
    {
        id: 230,
        codigo_cnae: "20,3",
        denominacao: "Fabricação de resinas e elastômeros",
        grau_risco: ""
    },
    {
        id: 231,
        codigo_cnae: "20.31-2",
        denominacao: "Fabricação de resinas termoplásticas",
        grau_risco: 3
    },
    {
        id: 232,
        codigo_cnae: "20.32-1",
        denominacao: "Fabricação de resinas termofixas",
        grau_risco: 3
    },
    {
        id: 233,
        codigo_cnae: "20.33-9",
        denominacao: "Fabricação de elastômeros",
        grau_risco: 3
    },
    {
        id: 234,
        codigo_cnae: "20,4",
        denominacao: "Fabricação de fibras artificiais e sintéticas",
        grau_risco: ""
    },
    {
        id: 235,
        codigo_cnae: "20.40-1",
        denominacao: "Fabricação de fibras artificiais e sintéticas",
        grau_risco: 3
    },
    {
        id: 236,
        codigo_cnae: "20,5",
        denominacao: "Fabricação de defensivos agrícolas e desinfetantes domissanitários",
        grau_risco: ""
    },
    {
        id: 237,
        codigo_cnae: "20.51-7",
        denominacao: "Fabricação de defensivos agrícolas",
        grau_risco: 3
    },
    {
        id: 238,
        codigo_cnae: "20.52-5",
        denominacao: "Fabricação de desinfetantes domissanitários",
        grau_risco: 3
    },
    {
        id: 239,
        codigo_cnae: "20,6",
        denominacao: "Fabricação de sabões, detergentes, produtos de limpeza, cosméticos, produtos de perfumaria e de higiene pessoal",
        grau_risco: ""
    },
    {
        id: 240,
        codigo_cnae: "20.61-4",
        denominacao: "Fabricação de sabões e detergentes sintéticos",
        grau_risco: 3
    },
    {
        id: 241,
        codigo_cnae: "20.62-2",
        denominacao: "Fabricação de produtos de limpeza e polimento",
        grau_risco: 3
    },
    {
        id: 242,
        codigo_cnae: "20.63-1",
        denominacao: "Fabricação de cosméticos, produtos de perfumaria e de higiene pessoal",
        grau_risco: 2
    },
    {
        id: 243,
        codigo_cnae: "20,7",
        denominacao: "Fabricação de tintas, vernizes, esmaltes, lacas e produtos afins",
        grau_risco: ""
    },
    {
        id: 244,
        codigo_cnae: "20.71-1",
        denominacao: "Fabricação de tintas, vernizes, esmaltes e lacas",
        grau_risco: 3
    },
    {
        id: 245,
        codigo_cnae: "20.72-0",
        denominacao: "Fabricação de tintas de impressão",
        grau_risco: 3
    },
    {
        id: 246,
        codigo_cnae: "20.73-8",
        denominacao: "Fabricação de impermeabilizantes, solventes e produtos afins",
        grau_risco: 3
    },
    {
        id: 247,
        codigo_cnae: "20,9",
        denominacao: "Fabricação de produtos e preparados químicos diversos",
        grau_risco: ""
    },
    {
        id: 248,
        codigo_cnae: "20.91-6",
        denominacao: "Fabricação de adesivos e selantes",
        grau_risco: 3
    },
    {
        id: 249,
        codigo_cnae: "20.92-4",
        denominacao: "Fabricação de explosivos",
        grau_risco: 4
    },
    {
        id: 250,
        codigo_cnae: "20.93-2",
        denominacao: "Fabricação de aditivos de uso industrial",
        grau_risco: 3
    },
    {
        id: 251,
        codigo_cnae: "20.94-1",
        denominacao: "Fabricação de catalisadores",
        grau_risco: 3
    },
    {
        id: 252,
        codigo_cnae: "20.99-1",
        denominacao: "Fabricação de produtos químicos não especificados anteriormente",
        grau_risco: 3
    },
    {
        id: 253,
        codigo_cnae: "21.10-6",
        denominacao: "Fabricação de produtos farmoquímicos",
        grau_risco: 3
    },
    {
        id: 254,
        codigo_cnae: "21,2",
        denominacao: "Fabricação de produtos farmacêuticos",
        grau_risco: ""
    },
    {
        id: 255,
        codigo_cnae: "21.21-1",
        denominacao: "Fabricação de medicamentos para uso humano",
        grau_risco: 3
    },
    {
        id: 256,
        codigo_cnae: "21.22-0",
        denominacao: "Fabricação de medicamentos para uso veterinário",
        grau_risco: 3
    },
    {
        id: 257,
        codigo_cnae: "21.23-8",
        denominacao: "Fabricação de preparações farmacêuticas",
        grau_risco: 3
    },
    {
        id: 258,
        codigo_cnae: 22,
        denominacao: "FABRICAÇÃO DE PRODUTOS DE BORRACHA E DE MATERIAL PLÁSTICO",
        grau_risco: ""
    },
    {
        id: 259,
        codigo_cnae: "22,1",
        denominacao: "Fabricação de produtos de borracha",
        grau_risco: ""
    },
    {
        id: 260,
        codigo_cnae: "22.11-1",
        denominacao: "Fabricação de pneumáticos e de câmaras-de-ar",
        grau_risco: 3
    },
    {
        id: 261,
        codigo_cnae: "22.12-9",
        denominacao: "Reforma de pneumáticos usados",
        grau_risco: 3
    },
    {
        id: 262,
        codigo_cnae: "22.19-6",
        denominacao: "Fabricação de artefatos de borracha não especificados anteriormente",
        grau_risco: 3
    },
    {
        id: 263,
        codigo_cnae: "22,2",
        denominacao: "Fabricação de produtos de material plástico",
        grau_risco: ""
    },
    {
        id: 264,
        codigo_cnae: "22.21-8",
        denominacao: "Fabricação de laminados planos e tubulares de material plástico",
        grau_risco: 3
    },
    {
        id: 265,
        codigo_cnae: "22.22-6",
        denominacao: "Fabricação de embalagens de material plástico",
        grau_risco: 3
    },
    {
        id: 266,
        codigo_cnae: "22.23-4",
        denominacao: "Fabricação de tubos e acessórios de material plástico para uso na construção",
        grau_risco: 3
    },
    {
        id: 267,
        codigo_cnae: "22.29-3",
        denominacao: "Fabricação de artefatos de material plástico não especificados anteriormente",
        grau_risco: 3
    },
    {
        id: 268,
        codigo_cnae: 23,
        denominacao: "FABRICAÇÃO DE PRODUTOS DE MINERAIS NÃO-METÁLICOS",
        grau_risco: ""
    },
    {
        id: 269,
        codigo_cnae: "23,1",
        denominacao: "Fabricação de vidro e de produtos do vidro",
        grau_risco: ""
    },
    {
        id: 270,
        codigo_cnae: "23.11-7",
        denominacao: "Fabricação de vidro plano e de segurança",
        grau_risco: 3
    },
    {
        id: 271,
        codigo_cnae: "23.12-5",
        denominacao: "Fabricação de embalagens de vidro",
        grau_risco: 3
    },
    {
        id: 272,
        codigo_cnae: "23.19-2",
        denominacao: "Fabricação de artigos de vidro",
        grau_risco: 3
    },
    {
        id: 273,
        codigo_cnae: "23,2",
        denominacao: "Fabricação de cimento",
        grau_risco: ""
    },
    {
        id: 274,
        codigo_cnae: "23.20-6",
        denominacao: "Fabricação de cimento",
        grau_risco: 4
    },
    {
        id: 275,
        codigo_cnae: "23,3",
        denominacao: "Fabricação de artefatos de concreto, cimento, fibrocimento, gesso e materiais semelhantes",
        grau_risco: ""
    },
    {
        id: 276,
        codigo_cnae: "23.30-3",
        denominacao: "Fabricação de artefatos de concreto, cimento, fibrocimento, gesso e materiais semelhantes",
        grau_risco: 4
    },
    {
        id: 277,
        codigo_cnae: "23,4",
        denominacao: "Fabricação de produtos cerâmicos",
        grau_risco: ""
    },
    {
        id: 278,
        codigo_cnae: "23.41-9",
        denominacao: "Fabricação de produtos cerâmicos refratários",
        grau_risco: 4
    },
    {
        id: 279,
        codigo_cnae: "23.42-7",
        denominacao: "Fabricação de produtos cerâmicos não-refratários para uso estrutural na construção",
        grau_risco: 3
    },
    {
        id: 280,
        codigo_cnae: "23.49-4",
        denominacao: "Fabricação de produtos cerâmicos não-refratários não especificados anteriormente",
        grau_risco: 4
    },
    {
        id: 281,
        codigo_cnae: "23,9",
        denominacao: "Aparelhamento de pedras e fabricação de outros produtos de minerais não-metálicos",
        grau_risco: ""
    },
    {
        id: 282,
        codigo_cnae: "23.91-5",
        denominacao: "Aparelhamento e outros trabalhos em pedras",
        grau_risco: 3
    },
    {
        id: 283,
        codigo_cnae: "23.92-3",
        denominacao: "Fabricação de cal e gesso",
        grau_risco: 4
    },
    {
        id: 284,
        codigo_cnae: "23.99-1",
        denominacao: "Fabricação de produtos de minerais não-metálicos não especificados anteriormente",
        grau_risco: 3
    },
    {
        id: 285,
        codigo_cnae: 24,
        denominacao: "METALURGIA",
        grau_risco: ""
    },
    {
        id: 286,
        codigo_cnae: "24,1",
        denominacao: "Produção de ferro-gusa e de ferroligas",
        grau_risco: ""
    },
    {
        id: 287,
        codigo_cnae: "24.11-3",
        denominacao: "Produção de ferro-gusa",
        grau_risco: 4
    },
    {
        id: 288,
        codigo_cnae: "24.12-1",
        denominacao: "Produção de ferroligas",
        grau_risco: 4
    },
    {
        id: 289,
        codigo_cnae: "24,2",
        denominacao: "Siderurgia",
        grau_risco: ""
    },
    {
        id: 290,
        codigo_cnae: "24.21-1",
        denominacao: "Produção de semi-acabados de aço",
        grau_risco: 4
    },
    {
        id: 291,
        codigo_cnae: "24.22-9",
        denominacao: "Produção de laminados planos de aço",
        grau_risco: 4
    },
    {
        id: 292,
        codigo_cnae: "24.23-7",
        denominacao: "Produção de laminados longos de aço",
        grau_risco: 4
    },
    {
        id: 293,
        codigo_cnae: "24.24-5",
        denominacao: "Produção de relaminados, trefilados e perfilados de aço",
        grau_risco: 4
    },
    {
        id: 294,
        codigo_cnae: "24,3",
        denominacao: "Produção de tubos de aço, exceto tubos sem costura",
        grau_risco: ""
    },
    {
        id: 295,
        codigo_cnae: "24.31-8",
        denominacao: "Produção de tubos de aço com costura",
        grau_risco: 4
    },
    {
        id: 296,
        codigo_cnae: "24.39-3",
        denominacao: "Produção de outros tubos de ferro e aço",
        grau_risco: 4
    },
    {
        id: 297,
        codigo_cnae: "24,4",
        denominacao: "Metalurgia dos metais não-ferrosos",
        grau_risco: ""
    },
    {
        id: 298,
        codigo_cnae: "24.41-5",
        denominacao: "Metalurgia do alumínio e suas ligas",
        grau_risco: 4
    },
    {
        id: 299,
        codigo_cnae: "24.42-3",
        denominacao: "Metalurgia dos metais preciosos",
        grau_risco: 4
    },
    {
        id: 300,
        codigo_cnae: "24.43-1",
        denominacao: "Metalurgia do cobre",
        grau_risco: 4
    },
    {
        id: 301,
        codigo_cnae: "24.49-1",
        denominacao: "Metalurgia dos metais não-ferrosos e suas ligas não especificados anteriormente",
        grau_risco: 4
    },
    {
        id: 302,
        codigo_cnae: "24,5",
        denominacao: "Fundição",
        grau_risco: ""
    },
    {
        id: 303,
        codigo_cnae: "24.51-2",
        denominacao: "Fundição de ferro e aço",
        grau_risco: 4
    },
    {
        id: 304,
        codigo_cnae: "24.52-1",
        denominacao: "Fundição de metais não-ferrosos e suas ligas",
        grau_risco: 4
    },
    {
        id: 305,
        codigo_cnae: 25,
        denominacao: "FABRICAÇÃO DE PRODUTOS DE METAL, EXCETO MÁQUINAS E EQUIPAMENTOS",
        grau_risco: ""
    },
    {
        id: 306,
        codigo_cnae: "25,1",
        denominacao: "Fabricação de estruturas metálicas e obras de caldeiraria pesada",
        grau_risco: ""
    },
    {
        id: 307,
        codigo_cnae: "25.11-0",
        denominacao: "Fabricação de estruturas metálicas",
        grau_risco: 4
    },
    {
        id: 308,
        codigo_cnae: "25.12-8",
        denominacao: "Fabricação de esquadrias de metal",
        grau_risco: 3
    },
    {
        id: 309,
        codigo_cnae: "25.13-6",
        denominacao: "Fabricação de obras de caldeiraria pesada",
        grau_risco: 3
    },
    {
        id: 310,
        codigo_cnae: "25,2",
        denominacao: "Fabricação de tanques, reservatórios metálicos e caldeiras",
        grau_risco: ""
    },
    {
        id: 311,
        codigo_cnae: "25.21-7",
        denominacao: "Fabricação de tanques, reservatórios metálicos e caldeiras para aquecimento central",
        grau_risco: 3
    },
    {
        id: 312,
        codigo_cnae: "25.22-5",
        denominacao: "Fabricação de caldeiras geradoras de vapor, exceto para aquecimento central e para veículos",
        grau_risco: 3
    },
    {
        id: 313,
        codigo_cnae: "25,3",
        denominacao: "Forjaria, estamparia, metalurgia do pó e serviços de tratamento de metais",
        grau_risco: ""
    },
    {
        id: 314,
        codigo_cnae: "25.31-4",
        denominacao: "Produção de forjados de aço e de metais não-ferrosos e suas ligas",
        grau_risco: 4
    },
    {
        id: 315,
        codigo_cnae: "25.32-2",
        denominacao: "Produção de artefatos estampados de metal; metalurgia do pó",
        grau_risco: 4
    },
    {
        id: 316,
        codigo_cnae: "25.39-0",
        denominacao: "Serviços de usinagem, solda, tratamento e revestimento em metais",
        grau_risco: 4
    },
    {
        id: 317,
        codigo_cnae: "25,4",
        denominacao: "Fabricação de artigos de cutelaria, de serralheria e ferramentas",
        grau_risco: ""
    },
    {
        id: 318,
        codigo_cnae: "25.41-1",
        denominacao: "Fabricação de artigos de cutelaria",
        grau_risco: 3
    },
    {
        id: 319,
        codigo_cnae: "25.42-0",
        denominacao: "Fabricação de artigos de serralheria, exceto esquadrias",
        grau_risco: 3
    },
    {
        id: 320,
        codigo_cnae: "25.43-8",
        denominacao: "Fabricação de ferramentas",
        grau_risco: 3
    },
    {
        id: 321,
        codigo_cnae: "25,5",
        denominacao: "Fabricação de equipamento bélico pesado, armas de fogo e munições",
        grau_risco: ""
    },
    {
        id: 322,
        codigo_cnae: "25.50-1",
        denominacao: "Fabricação de equipamento bélico pesado, armas de fogo e munições",
        grau_risco: 4
    },
    {
        id: 323,
        codigo_cnae: "25,9",
        denominacao: "Fabricação de produtos de metal não especificados anteriormente",
        grau_risco: ""
    },
    {
        id: 324,
        codigo_cnae: "25.91-8",
        denominacao: "Fabricação de embalagens metálicas",
        grau_risco: 3
    },
    {
        id: 325,
        codigo_cnae: "25.92-6",
        denominacao: "Fabricação de produtos de trefilados de metal",
        grau_risco: 4
    },
    {
        id: 326,
        codigo_cnae: "25.93-4",
        denominacao: "Fabricação de artigos de metal para uso doméstico e pessoal",
        grau_risco: 3
    },
    {
        id: 327,
        codigo_cnae: "25.99-3",
        denominacao: "Fabricação de produtos de metal não especificados anteriormente",
        grau_risco: 3
    },
    {
        id: 328,
        codigo_cnae: 26,
        denominacao: "FABRICAÇÃO DE EQUIPAMENTOS DE INFORMÁTICA, PRODUTOS ELETRÔNICOS E ÓPTICOS",
        grau_risco: ""
    },
    {
        id: 329,
        codigo_cnae: "26,1",
        denominacao: "Fabricação de componentes eletrônicos",
        grau_risco: ""
    },
    {
        id: 330,
        codigo_cnae: "26.10-8",
        denominacao: "Fabricação de componentes eletrônicos",
        grau_risco: 3
    },
    {
        id: 331,
        codigo_cnae: "26,2",
        denominacao: "Fabricação de equipamentos de informática e periféricos",
        grau_risco: ""
    },
    {
        id: 332,
        codigo_cnae: "26.21-3",
        denominacao: "Fabricação de equipamentos de informática",
        grau_risco: 3
    },
    {
        id: 333,
        codigo_cnae: "26.22-1",
        denominacao: "Fabricação de periféricos para equipamentos de informática",
        grau_risco: 3
    },
    {
        id: 334,
        codigo_cnae: "26,3",
        denominacao: "Fabricação de equipamentos de comunicação",
        grau_risco: ""
    },
    {
        id: 335,
        codigo_cnae: "26.31-1",
        denominacao: "Fabricação de equipamentos transmissores de comunicação",
        grau_risco: 3
    },
    {
        id: 336,
        codigo_cnae: "26.32-9",
        denominacao: "Fabricação de aparelhos telefônicos e de outros equipamentos de comunicação",
        grau_risco: 3
    },
    {
        id: 337,
        codigo_cnae: "26,4",
        denominacao: "Fabricação de aparelhos de recepção, reprodução, gravação e amplificação de áudio e vídeo",
        grau_risco: ""
    },
    {
        id: 338,
        codigo_cnae: "26.40-0",
        denominacao: "Fabricação de aparelhos de recepção, reprodução, gravação e amplificação de áudio e vídeo",
        grau_risco: 3
    },
    {
        id: 339,
        codigo_cnae: "26,5",
        denominacao: "Fabricação de aparelhos e instrumentos de medida, teste e controle; cronômetros e relógios",
        grau_risco: ""
    },
    {
        id: 340,
        codigo_cnae: "26.51-5",
        denominacao: "Fabricação de aparelhos e equipamentos de medida, teste e controle",
        grau_risco: 3
    },
    {
        id: 341,
        codigo_cnae: "26.52-3",
        denominacao: "Fabricação de cronômetros e relógios",
        grau_risco: 3
    },
    {
        id: 342,
        codigo_cnae: "26,6",
        denominacao: "Fabricação de aparelhos eletromédicos e eletroterapêuticos e equipamentos de irradiação",
        grau_risco: ""
    },
    {
        id: 343,
        codigo_cnae: "26.60-4",
        denominacao: "Fabricação de aparelhos eletromédicos e eletroterapêuticos e equipamentos de irradiação",
        grau_risco: 3
    },
    {
        id: 344,
        codigo_cnae: "26,7",
        denominacao: "Fabricação de equipamentos e instrumentos ópticos, fotográficos e cinematográficos",
        grau_risco: ""
    },
    {
        id: 345,
        codigo_cnae: "26.70-1",
        denominacao: "Fabricação de equipamentos e instrumentos ópticos, fotográficos e cinematográficos",
        grau_risco: 3
    },
    {
        id: 346,
        codigo_cnae: "26,8",
        denominacao: "Fabricação de mídias virgens, magnéticas e ópticas",
        grau_risco: ""
    },
    {
        id: 347,
        codigo_cnae: "26.80-9",
        denominacao: "Fabricação de mídias virgens, magnéticas e ópticas",
        grau_risco: 3
    },
    {
        id: 348,
        codigo_cnae: 27,
        denominacao: "FABRICAÇÃO DE MÁQUINAS, APARELHOS E MATERIAIS ELÉTRICOS",
        grau_risco: ""
    },
    {
        id: 349,
        codigo_cnae: "27,1",
        denominacao: "Fabricação de geradores, transformadores e motores elétricos",
        grau_risco: ""
    },
    {
        id: 350,
        codigo_cnae: "27.10-4",
        denominacao: "Fabricação de geradores, transformadores e motores elétricos",
        grau_risco: 3
    },
    {
        id: 351,
        codigo_cnae: "27,2",
        denominacao: "Fabricação de pilhas, baterias e acumuladores elétricos",
        grau_risco: ""
    },
    {
        id: 352,
        codigo_cnae: "27.21-0",
        denominacao: "Fabricação de pilhas, baterias e acumuladores elétricos, exceto para veículos automotores",
        grau_risco: 3
    },
    {
        id: 353,
        codigo_cnae: "27.22-8",
        denominacao: "Fabricação de baterias e acumuladores para veículos automotores",
        grau_risco: 3
    },
    {
        id: 354,
        codigo_cnae: "27,3",
        denominacao: "Fabricação de equipamentos para distribuição e controle de energia elétrica",
        grau_risco: ""
    },
    {
        id: 355,
        codigo_cnae: "27.31-7",
        denominacao: "Fabricação de aparelhos e equipamentos para distribuição e controle de energia elétrica",
        grau_risco: 3
    },
    {
        id: 356,
        codigo_cnae: "27.32-5",
        denominacao: "Fabricação de material elétrico para instalações em circuito de consumo",
        grau_risco: 3
    },
    {
        id: 357,
        codigo_cnae: "27.33-3",
        denominacao: "Fabricação de fios, cabos e condutores elétricos isolados",
        grau_risco: 3
    },
    {
        id: 358,
        codigo_cnae: "27,4",
        denominacao: "Fabricação de lâmpadas e outros equipamentos de iluminação",
        grau_risco: ""
    },
    {
        id: 359,
        codigo_cnae: "27.40-6",
        denominacao: "Fabricação de lâmpadas e outros equipamentos de iluminação",
        grau_risco: 3
    },
    {
        id: 360,
        codigo_cnae: "27,5",
        denominacao: "Fabricação de eletrodomésticos",
        grau_risco: ""
    },
    {
        id: 361,
        codigo_cnae: "27.51-1",
        denominacao: "Fabricação de fogões, refrigeradores e máquinas de lavar e secar para uso doméstico",
        grau_risco: 3
    },
    {
        id: 362,
        codigo_cnae: "27.59-7",
        denominacao: "Fabricação de aparelhos eletrodomésticos não especificados anteriormente",
        grau_risco: 3
    },
    {
        id: 363,
        codigo_cnae: "27,9",
        denominacao: "Fabricação de equipamentos e aparelhos elétricos não especificados anteriormente",
        grau_risco: ""
    },
    {
        id: 364,
        codigo_cnae: "27.90-2",
        denominacao: "Fabricação de equipamentos e aparelhos elétricos não especificados anteriormente",
        grau_risco: 3
    },
    {
        id: 365,
        codigo_cnae: 28,
        denominacao: "FABRICAÇÃO DE MÁQUINAS E EQUIPAMENTOS",
        grau_risco: ""
    },
    {
        id: 366,
        codigo_cnae: "28,1",
        denominacao: "Fabricação de motores, bombas, compressores e equipamentos de transmissão",
        grau_risco: ""
    },
    {
        id: 367,
        codigo_cnae: "28.11-9",
        denominacao: "Fabricação de motores e turbinas, exceto para aviões e veículos rodoviários",
        grau_risco: 3
    },
    {
        id: 368,
        codigo_cnae: "28.12-7",
        denominacao: "Fabricação de equipamentos hidráulicos e pneumáticos, exceto válvulas",
        grau_risco: 3
    },
    {
        id: 369,
        codigo_cnae: "28.13-5",
        denominacao: "Fabricação de válvulas, registros e dispositivos semelhantes",
        grau_risco: 3
    },
    {
        id: 370,
        codigo_cnae: "28.14-3",
        denominacao: "Fabricação de compressores",
        grau_risco: 3
    },
    {
        id: 371,
        codigo_cnae: "28.15-1",
        denominacao: "Fabricação de equipamentos de transmissão para fins industriais",
        grau_risco: 3
    },
    {
        id: 372,
        codigo_cnae: "28,2",
        denominacao: "Fabricação de máquinas e equipamentos de uso geral",
        grau_risco: ""
    },
    {
        id: 373,
        codigo_cnae: "28.21-6",
        denominacao: "Fabricação de aparelhos e equipamentos para instalações térmicas",
        grau_risco: 3
    },
    {
        id: 374,
        codigo_cnae: "28.22-4",
        denominacao: "Fabricação de máquinas, equipamentos e aparelhos para transporte e elevação de cargas e pessoas",
        grau_risco: 3
    },
    {
        id: 375,
        codigo_cnae: "28.23-2",
        denominacao: "Fabricação de máquinas e aparelhos de refrigeração e ventilação para uso industrial e comercial",
        grau_risco: 3
    },
    {
        id: 376,
        codigo_cnae: "28.24-1",
        denominacao: "Fabricação de aparelhos e equipamentos de ar-condicionado",
        grau_risco: 3
    },
    {
        id: 377,
        codigo_cnae: "28.25-9",
        denominacao: "Fabricação de máquinas e equipamentos para saneamento básico e ambiental",
        grau_risco: 3
    },
    {
        id: 378,
        codigo_cnae: "28.29-1",
        denominacao: "Fabricação de máquinas e equipamentos de uso geral não especificados anteriormente",
        grau_risco: 3
    },
    {
        id: 379,
        codigo_cnae: "28,3",
        denominacao: "Fabricação de tratores e de máquinas e equipamentos para a agricultura e pecuária",
        grau_risco: ""
    },
    {
        id: 380,
        codigo_cnae: "28.31-3",
        denominacao: "Fabricação de tratores agrícolas",
        grau_risco: 3
    },
    {
        id: 381,
        codigo_cnae: "28.32-1",
        denominacao: "Fabricação de equipamentos para irrigação agrícola",
        grau_risco: 3
    },
    {
        id: 382,
        codigo_cnae: "28.33-0",
        denominacao: "Fabricação de máquinas e equipamentos para a agricultura e pecuária, exceto para irrigação",
        grau_risco: 3
    },
    {
        id: 383,
        codigo_cnae: "28,4",
        denominacao: "Fabricação de máquinas-ferramenta",
        grau_risco: ""
    },
    {
        id: 384,
        codigo_cnae: "28.40-2",
        denominacao: "Fabricação de máquinas-ferramenta",
        grau_risco: 3
    },
    {
        id: 385,
        codigo_cnae: "28,5",
        denominacao: "Fabricação de máquinas e equipamentos de uso na extração mineral e na construção",
        grau_risco: ""
    },
    {
        id: 386,
        codigo_cnae: "28.51-8",
        denominacao: "Fabricação de máquinas e equipamentos para a prospecção e extração de petróleo",
        grau_risco: 3
    },
    {
        id: 387,
        codigo_cnae: "28.52-6",
        denominacao: "Fabricação de outras máquinas e equipamentos para uso na extração mineral, exceto na extração de petróleo",
        grau_risco: 3
    },
    {
        id: 388,
        codigo_cnae: "28.53-4",
        denominacao: "Fabricação de tratores, exceto agrícolas",
        grau_risco: 3
    },
    {
        id: 389,
        codigo_cnae: "28.54-2",
        denominacao: "Fabricação de máquinas e equipamentos para terraplenagem, pavimentação e construção, exceto tratores",
        grau_risco: 3
    },
    {
        id: 390,
        codigo_cnae: "28,6",
        denominacao: "Fabricação de máquinas e equipamentos de uso industrial específico",
        grau_risco: ""
    },
    {
        id: 391,
        codigo_cnae: "28.61-5",
        denominacao: "Fabricação de máquinas para a indústria metalúrgica, exceto máquinas-ferramenta",
        grau_risco: 3
    },
    {
        id: 392,
        codigo_cnae: "28.62-3",
        denominacao: "Fabricação de máquinas e equipamentos para as indústrias de alimentos, bebidas e fumo",
        grau_risco: 3
    },
    {
        id: 393,
        codigo_cnae: "28.63-1",
        denominacao: "Fabricação de máquinas e equipamentos para a indústria têxtil",
        grau_risco: 3
    },
    {
        id: 394,
        codigo_cnae: "28.64-0",
        denominacao: "Fabricação de máquinas e equipamentos para as indústrias do vestuário, do couro e de calçados",
        grau_risco: 3
    },
    {
        id: 395,
        codigo_cnae: "28.65-8",
        denominacao: "Fabricação de máquinas e equipamentos para as indústrias de celulose, papel e papelão e artefatos",
        grau_risco: 3
    },
    {
        id: 396,
        codigo_cnae: "28.66-6",
        denominacao: "Fabricação de máquinas e equipamentos para a indústria do plástico",
        grau_risco: 3
    },
    {
        id: 397,
        codigo_cnae: "28.69-1",
        denominacao: "Fabricação de máquinas e equipamentos para uso industrial específico não especificados anteriormente",
        grau_risco: 3
    },
    {
        id: 398,
        codigo_cnae: 29,
        denominacao: "FABRICAÇÃO DE VEÍCULOS AUTOMOTORES, REBOQUES E CARROCERIAS",
        grau_risco: ""
    },
    {
        id: 399,
        codigo_cnae: "29,1",
        denominacao: "Fabricação de automóveis, camionetas e utilitários",
        grau_risco: ""
    },
    {
        id: 400,
        codigo_cnae: "29.10-7",
        denominacao: "Fabricação de automóveis, camionetas e utilitários",
        grau_risco: 3
    },
    {
        id: 401,
        codigo_cnae: "29,2",
        denominacao: "Fabricação de caminhões e ônibus",
        grau_risco: ""
    },
    {
        id: 402,
        codigo_cnae: "29.20-4",
        denominacao: "Fabricação de caminhões e ônibus",
        grau_risco: 3
    },
    {
        id: 403,
        codigo_cnae: "29,3",
        denominacao: "Fabricação de cabines, carrocerias e reboques para veículos automotores",
        grau_risco: ""
    },
    {
        id: 404,
        codigo_cnae: "29.30-1",
        denominacao: "Fabricação de cabines, carrocerias e reboques para veículos automotores",
        grau_risco: 3
    },
    {
        id: 405,
        codigo_cnae: "29,4",
        denominacao: "Fabricação de peças e acessórios para veículos automotores",
        grau_risco: ""
    },
    {
        id: 406,
        codigo_cnae: "29.41-7",
        denominacao: "Fabricação de peças e acessórios para o sistema motor de veículos automotores",
        grau_risco: 3
    },
    {
        id: 407,
        codigo_cnae: "29.42-5",
        denominacao: "Fabricação de peças e acessórios para os sistemas de marcha e transmissão de veículos automotores",
        grau_risco: 3
    },
    {
        id: 408,
        codigo_cnae: "29.43-3",
        denominacao: "Fabricação de peças e acessórios para o sistema de freios de veículos automotores",
        grau_risco: 3
    },
    {
        id: 409,
        codigo_cnae: "29.44-1",
        denominacao: "Fabricação de peças e acessórios para o sistema de direção e suspensão de veículos automotores",
        grau_risco: 3
    },
    {
        id: 410,
        codigo_cnae: "29.45-0",
        denominacao: "Fabricação de material elétrico e eletrônico para veículos automotores, exceto baterias",
        grau_risco: 3
    },
    {
        id: 411,
        codigo_cnae: "29.49-2",
        denominacao: "Fabricação de peças e acessórios para veículos automotores não especificados anteriormente",
        grau_risco: 3
    },
    {
        id: 412,
        codigo_cnae: "29,5",
        denominacao: "Recondicionamento e recuperação de motores para veículos automotores",
        grau_risco: ""
    },
    {
        id: 413,
        codigo_cnae: "29.50-6",
        denominacao: "Recondicionamento e recuperação de motores para veículos automotores",
        grau_risco: 3
    },
    {
        id: 414,
        codigo_cnae: 30,
        denominacao: "FABRICAÇÃO DE OUTROS EQUIPAMENTOS DE TRANSPORTE, EXCETO VEÍCULOS AUTOMOTORES",
        grau_risco: ""
    },
    {
        id: 415,
        codigo_cnae: "30,1",
        denominacao: "Construção de embarcações",
        grau_risco: ""
    },
    {
        id: 416,
        codigo_cnae: "30.11-3",
        denominacao: "Construção de embarcações e estruturas flutuantes",
        grau_risco: 3
    },
    {
        id: 417,
        codigo_cnae: "30.12-1",
        denominacao: "Construção de embarcações para esporte e lazer",
        grau_risco: 3
    },
    {
        id: 418,
        codigo_cnae: "30,3",
        denominacao: "Fabricação de veículos ferroviários",
        grau_risco: ""
    },
    {
        id: 419,
        codigo_cnae: "30.31-8",
        denominacao: "Fabricação de locomotivas, vagões e outros materiais rodantes",
        grau_risco: 3
    },
    {
        id: 420,
        codigo_cnae: "30.32-6",
        denominacao: "Fabricação de peças e acessórios para veículos ferroviários",
        grau_risco: 3
    },
    {
        id: 421,
        codigo_cnae: "30,4",
        denominacao: "Fabricação de aeronaves",
        grau_risco: ""
    },
    {
        id: 422,
        codigo_cnae: "30.41-5",
        denominacao: "Fabricação de aeronaves",
        grau_risco: 3
    },
    {
        id: 423,
        codigo_cnae: "30.42-3",
        denominacao: "Fabricação de turbinas, motores e outros componentes e peças para aeronaves",
        grau_risco: 3
    },
    {
        id: 424,
        codigo_cnae: "30,5",
        denominacao: "Fabricação de veículos militares de combate",
        grau_risco: ""
    },
    {
        id: 425,
        codigo_cnae: "30.50-4",
        denominacao: "Fabricação de veículos militares de combate",
        grau_risco: 3
    },
    {
        id: 426,
        codigo_cnae: "30,9",
        denominacao: "Fabricação de equipamentos de transporte não especificados anteriormente",
        grau_risco: ""
    },
    {
        id: 427,
        codigo_cnae: "30.91-1",
        denominacao: "Fabricação de motocicletas",
        grau_risco: 3
    },
    {
        id: 428,
        codigo_cnae: "30.92-0",
        denominacao: "Fabricação de bicicletas e triciclos não-motorizados",
        grau_risco: 3
    },
    {
        id: 429,
        codigo_cnae: "30.99-7",
        denominacao: "Fabricação de equipamentos de transporte não especificados anteriormente",
        grau_risco: 3
    },
    {
        id: 430,
        codigo_cnae: 31,
        denominacao: "FABRICAÇÃO DE MÓVEIS",
        grau_risco: ""
    },
    {
        id: 431,
        codigo_cnae: 31,
        denominacao: "Fabricação de móveis",
        grau_risco: ""
    },
    {
        id: 432,
        codigo_cnae: "31.01-2",
        denominacao: "Fabricação de móveis com predominância de madeira",
        grau_risco: 3
    },
    {
        id: 433,
        codigo_cnae: "31.02-1",
        denominacao: "Fabricação de móveis com predominância de metal",
        grau_risco: 3
    },
    {
        id: 434,
        codigo_cnae: "31.03-9",
        denominacao: "Fabricação de móveis de outros materiais, exceto madeira e metal",
        grau_risco: 3
    },
    {
        id: 435,
        codigo_cnae: "31.04-7",
        denominacao: "Fabricação de colchões",
        grau_risco: 2
    },
    {
        id: 436,
        codigo_cnae: 32,
        denominacao: "FABRICAÇÃO DE PRODUTOS DIVERSOS",
        grau_risco: ""
    },
    {
        id: 437,
        codigo_cnae: "32,1",
        denominacao: "Fabricação de artigos de joalheria, bijuteria e semelhantes",
        grau_risco: ""
    },
    {
        id: 438,
        codigo_cnae: "32.11-6",
        denominacao: "Lapidação de gemas e fabricação de artefatos de ourivesaria e joalheria",
        grau_risco: 3
    },
    {
        id: 439,
        codigo_cnae: "32.12-4",
        denominacao: "Fabricação de bijuterias e artefatos semelhantes",
        grau_risco: 3
    },
    {
        id: 440,
        codigo_cnae: "32,2",
        denominacao: "Fabricação de instrumentos musicais",
        grau_risco: ""
    },
    {
        id: 441,
        codigo_cnae: "32.20-5",
        denominacao: "Fabricação de instrumentos musicais",
        grau_risco: 3
    },
    {
        id: 442,
        codigo_cnae: "32,3",
        denominacao: "Fabricação de artefatos para pesca e esporte",
        grau_risco: ""
    },
    {
        id: 443,
        codigo_cnae: "32.30-2",
        denominacao: "Fabricação de artefatos para pesca e esporte",
        grau_risco: 3
    },
    {
        id: 444,
        codigo_cnae: "32,4",
        denominacao: "Fabricação de brinquedos e jogos recreativos",
        grau_risco: ""
    },
    {
        id: 445,
        codigo_cnae: "32.40-0",
        denominacao: "Fabricação de brinquedos e jogos recreativos",
        grau_risco: 3
    },
    {
        id: 446,
        codigo_cnae: "32,5",
        denominacao: "Fabricação de instrumentos e materiais para uso médico e odontológico e de artigos ópticos",
        grau_risco: ""
    },
    {
        id: 447,
        codigo_cnae: "32.50-7",
        denominacao: "Fabricação de instrumentos e materiais para uso médico e odontológico e de artigos ópticos",
        grau_risco: 3
    },
    {
        id: 448,
        codigo_cnae: "32,9",
        denominacao: "Fabricação de produtos diversos",
        grau_risco: ""
    },
    {
        id: 449,
        codigo_cnae: "32.91-4",
        denominacao: "Fabricação de escovas, pincéis e vassouras",
        grau_risco: 3
    },
    {
        id: 450,
        codigo_cnae: "32.92-2",
        denominacao: "Fabricação de equipamentos e acessórios para segurança e proteção pessoal e profissional",
        grau_risco: 3
    },
    {
        id: 451,
        codigo_cnae: "32.99-0",
        denominacao: "Fabricação de produtos diversos não especificados anteriormente",
        grau_risco: 3
    },
    {
        id: 452,
        codigo_cnae: 33,
        denominacao: "MANUTENÇÃO, REPARAÇÃO E INSTALAÇÃO DE MÁQUINAS E EQUIPAMENTOS",
        grau_risco: ""
    },
    {
        id: 453,
        codigo_cnae: "33,1",
        denominacao: "Manutenção e reparação de máquinas e equipamentos",
        grau_risco: ""
    },
    {
        id: 454,
        codigo_cnae: "33.11-2",
        denominacao: "Manutenção e reparação de tanques, reservatórios metálicos e caldeiras, exceto para veículos",
        grau_risco: 3
    },
    {
        id: 455,
        codigo_cnae: "33.12-1",
        denominacao: "Manutenção e reparação de equipamentos eletrônicos e ópticos",
        grau_risco: 3
    },
    {
        id: 456,
        codigo_cnae: "33.13-9",
        denominacao: "Manutenção e reparação de máquinas e equipamentos elétricos",
        grau_risco: 3
    },
    {
        id: 457,
        codigo_cnae: "33.14-7",
        denominacao: "Manutenção e reparação de máquinas e equipamentos da indústria mecânica",
        grau_risco: 3
    },
    {
        id: 458,
        codigo_cnae: "33.15-5",
        denominacao: "Manutenção e reparação de veículos ferroviários",
        grau_risco: 3
    },
    {
        id: 459,
        codigo_cnae: "33.16-3",
        denominacao: "Manutenção e reparação de aeronaves",
        grau_risco: 3
    },
    {
        id: 460,
        codigo_cnae: "33.17-1",
        denominacao: "Manutenção e reparação de embarcações",
        grau_risco: 3
    },
    {
        id: 461,
        codigo_cnae: "33.19-8",
        denominacao: "Manutenção e reparação de equipamentos e produtos não especificados anteriormente",
        grau_risco: 3
    },
    {
        id: 462,
        codigo_cnae: "33,2",
        denominacao: "Instalação de máquinas e equipamentos",
        grau_risco: ""
    },
    {
        id: 463,
        codigo_cnae: "33.21-0",
        denominacao: "Instalação de máquinas e equipamentos industriais",
        grau_risco: 3
    },
    {
        id: 464,
        codigo_cnae: "33.29-5",
        denominacao: "Instalação de equipamentos não especificados anteriormente",
        grau_risco: 3
    },
    {
        id: 465,
        codigo_cnae: "D",
        denominacao: "ELETRICIDADE E GÁS",
        grau_risco: ""
    },
    {
        id: 466,
        codigo_cnae: 35,
        denominacao: "ELETRICIDADE, GÁS E OUTRAS UTILIDADES",
        grau_risco: ""
    },
    {
        id: 467,
        codigo_cnae: "35,1",
        denominacao: "Geração, transmissão e distribuição de energia elétrica",
        grau_risco: ""
    },
    {
        id: 468,
        codigo_cnae: "35.11-5",
        denominacao: "Geração de energia elétrica",
        grau_risco: 3
    },
    {
        id: 469,
        codigo_cnae: "35.12-3",
        denominacao: "Transmissão de energia elétrica",
        grau_risco: 3
    },
    {
        id: 470,
        codigo_cnae: "35.13-1",
        denominacao: "Comércio atacadista de energia elétrica",
        grau_risco: 3
    },
    {
        id: 471,
        codigo_cnae: "35.14-0",
        denominacao: "Distribuição de energia elétrica",
        grau_risco: 3
    },
    {
        id: 472,
        codigo_cnae: "35,2",
        denominacao: "Produção e distribuição de combustíveis gasosos por redes urbanas",
        grau_risco: ""
    },
    {
        id: 473,
        codigo_cnae: "35.20-4",
        denominacao: "Produção de gás; processamento de gás natural; distribuição de combustíveis gasosos por redes urbanas",
        grau_risco: 3
    },
    {
        id: 474,
        codigo_cnae: "35,3",
        denominacao: "Produção e distribuição de vapor, água quente e ar-condicionado",
        grau_risco: ""
    },
    {
        id: 475,
        codigo_cnae: "35.30-1",
        denominacao: "Produção e distribuição de vapor, água quente e ar-condicionado",
        grau_risco: 3
    },
    {
        id: 476,
        codigo_cnae: "E",
        denominacao: "ÁGUA, ESGOTO, ATIVIDADES DE GESTÃO DE RESÍDUOS E DESCONTAMINAÇÃO",
        grau_risco: ""
    },
    {
        id: 477,
        codigo_cnae: 36,
        denominacao: "CAPTAÇÃO, TRATAMENTO E DISTRIBUIÇÃO DE ÁGUA",
        grau_risco: ""
    },
    {
        id: 478,
        codigo_cnae: 36,
        denominacao: "Captação, tratamento e distribuição de água",
        grau_risco: ""
    },
    {
        id: 479,
        codigo_cnae: "36.00-6",
        denominacao: "Captação, tratamento e distribuição de água",
        grau_risco: 3
    },
    {
        id: 480,
        codigo_cnae: 37,
        denominacao: "ESGOTO E ATIVIDADES RELACIONADAS",
        grau_risco: ""
    },
    {
        id: 481,
        codigo_cnae: 37,
        denominacao: "Esgoto e atividades relacionadas",
        grau_risco: ""
    },
    {
        id: 482,
        codigo_cnae: "37.01-1",
        denominacao: "Gestão de redes de esgoto",
        grau_risco: 3
    },
    {
        id: 483,
        codigo_cnae: "37.02-9",
        denominacao: "Atividades relacionadas a esgoto, exceto a gestão de redes",
        grau_risco: 3
    },
    {
        id: 484,
        codigo_cnae: 38,
        denominacao: "COLETA, TRATAMENTO E DISPOSIÇÃO DE RESÍDUOS; RECUPERAÇÃO DE MATERIAIS",
        grau_risco: ""
    },
    {
        id: 485,
        codigo_cnae: "38,1",
        denominacao: "Coleta de resíduos",
        grau_risco: ""
    },
    {
        id: 486,
        codigo_cnae: "38.11-4",
        denominacao: "Coleta de resíduos não-perigosos",
        grau_risco: 3
    },
    {
        id: 487,
        codigo_cnae: "38.12-2",
        denominacao: "Coleta de resíduos perigosos",
        grau_risco: 3
    },
    {
        id: 488,
        codigo_cnae: "38,2",
        denominacao: "Tratamento e disposição de resíduos",
        grau_risco: ""
    },
    {
        id: 489,
        codigo_cnae: "38.21-1",
        denominacao: "Tratamento e disposição de resíduos não-perigosos",
        grau_risco: 3
    },
    {
        id: 490,
        codigo_cnae: "38.22-0",
        denominacao: "Tratamento e disposição de resíduos perigosos",
        grau_risco: 3
    },
    {
        id: 491,
        codigo_cnae: "38,3",
        denominacao: "Recuperação de materiais",
        grau_risco: ""
    },
    {
        id: 492,
        codigo_cnae: "38.31-9",
        denominacao: "Recuperação de materiais metálicos",
        grau_risco: 3
    },
    {
        id: 493,
        codigo_cnae: "38.32-7",
        denominacao: "Recuperação de materiais plásticos",
        grau_risco: 3
    },
    {
        id: 494,
        codigo_cnae: "38.39-4",
        denominacao: "Recuperação de materiais não especificados anteriormente",
        grau_risco: 3
    },
    {
        id: 495,
        codigo_cnae: 39,
        denominacao: "DESCONTAMINAÇÃO E OUTROS SERVIÇOS DE GESTÃO DE RESÍDUOS",
        grau_risco: ""
    },
    {
        id: 496,
        codigo_cnae: 39,
        denominacao: "Descontaminação e outros serviços de gestão de resíduos",
        grau_risco: ""
    },
    {
        id: 497,
        codigo_cnae: "39.00-5",
        denominacao: "Descontaminação e outros serviços de gestão de resíduos",
        grau_risco: 3
    },
    {
        id: 498,
        codigo_cnae: "F",
        denominacao: "CONSTRUÇÃO",
        grau_risco: ""
    },
    {
        id: 499,
        codigo_cnae: 41,
        denominacao: "CONSTRUÇÃO DE EDIFÍCIOS",
        grau_risco: ""
    },
    {
        id: 500,
        codigo_cnae: "41,1",
        denominacao: "Incorporação de empreendimentos imobiliários",
        grau_risco: ""
    },
    {
        id: 501,
        codigo_cnae: "41.10-7",
        denominacao: "Incorporação de empreendimentos imobiliários",
        grau_risco: 1
    },
    {
        id: 502,
        codigo_cnae: "41,2",
        denominacao: "Construção de edifícios",
        grau_risco: ""
    },
    {
        id: 503,
        codigo_cnae: "41.20-4",
        denominacao: "Construção de edifícios",
        grau_risco: 3
    },
    {
        id: 504,
        codigo_cnae: 42,
        denominacao: "OBRAS DE INFRAESTRUTURA",
        grau_risco: ""
    },
    {
        id: 505,
        codigo_cnae: "42,1",
        denominacao: "Construção de rodovias, ferrovias, obras urbanas e obras-de-arte especiais",
        grau_risco: ""
    },
    {
        id: 506,
        codigo_cnae: "42.11-1",
        denominacao: "Construção de rodovias e ferrovias",
        grau_risco: 4
    },
    {
        id: 507,
        codigo_cnae: "42.12-0",
        denominacao: "Construção de obras-de-arte especiais",
        grau_risco: 4
    },
    {
        id: 508,
        codigo_cnae: "42.13-8",
        denominacao: "Obras de urbanização - ruas, praças e calçadas",
        grau_risco: 3
    },
    {
        id: 509,
        codigo_cnae: "42,2",
        denominacao: "Obras de infraestrutura para energia elétrica, telecomunicações, água, esgoto e transporte por dutos",
        grau_risco: ""
    },
    {
        id: 510,
        codigo_cnae: "42.21-9",
        denominacao: "Obras para geração e distribuição de energia elétrica e para telecomunicações",
        grau_risco: 4
    },
    {
        id: 511,
        codigo_cnae: "42.22-7",
        denominacao: "Construção de redes de abastecimento de água, coleta de esgoto e construções correlatas",
        grau_risco: 4
    },
    {
        id: 512,
        codigo_cnae: "42.23-5",
        denominacao: "Construção de redes de transportes por dutos, exceto para água e esgoto",
        grau_risco: 4
    },
    {
        id: 513,
        codigo_cnae: "42,9",
        denominacao: "Construção de outras obras de infra-estrutura",
        grau_risco: ""
    },
    {
        id: 514,
        codigo_cnae: "42.91-0",
        denominacao: "Obras portuárias, marítimas e fluviais",
        grau_risco: 4
    },
    {
        id: 515,
        codigo_cnae: "42.92-8",
        denominacao: "Montagem de instalações industriais e de estruturas metálicas",
        grau_risco: 4
    },
    {
        id: 516,
        codigo_cnae: "42.99-5",
        denominacao: "Obras de engenharia civil não especificadas anteriormente",
        grau_risco: 3
    },
    {
        id: 517,
        codigo_cnae: 43,
        denominacao: "SERVIÇOS ESPECIALIZADOS PARA CONSTRUÇÃO",
        grau_risco: ""
    },
    {
        id: 518,
        codigo_cnae: "43,1",
        denominacao: "Demolição e preparação do terreno",
        grau_risco: ""
    },
    {
        id: 519,
        codigo_cnae: "43.11-8",
        denominacao: "Demolição e preparação de canteiros de obras",
        grau_risco: 4
    },
    {
        id: 520,
        codigo_cnae: "43.12-6",
        denominacao: "Perfurações e sondagens",
        grau_risco: 4
    },
    {
        id: 521,
        codigo_cnae: "43.13-4",
        denominacao: "Obras de terraplenagem",
        grau_risco: 3
    },
    {
        id: 522,
        codigo_cnae: "43.19-3",
        denominacao: "Serviços de preparação do terreno não especificados anteriormente",
        grau_risco: 3
    },
    {
        id: 523,
        codigo_cnae: "43,2",
        denominacao: "Instalações elétricas, hidráulicas e outras instalações em construções",
        grau_risco: ""
    },
    {
        id: 524,
        codigo_cnae: "43.21-5",
        denominacao: "Instalações elétricas",
        grau_risco: 3
    },
    {
        id: 525,
        codigo_cnae: "43.22-3",
        denominacao: "Instalações hidráulicas, de sistemas de ventilação e refrigeração",
        grau_risco: 3
    },
    {
        id: 526,
        codigo_cnae: "43.29-1",
        denominacao: "Obras de instalações em construções não especificadas anteriormente",
        grau_risco: 3
    },
    {
        id: 527,
        codigo_cnae: "43,3",
        denominacao: "Obras de acabamento",
        grau_risco: ""
    },
    {
        id: 528,
        codigo_cnae: "43.30-4",
        denominacao: "Obras de acabamento",
        grau_risco: 3
    },
    {
        id: 529,
        codigo_cnae: "43,9",
        denominacao: "Outros serviços especializados para construção",
        grau_risco: ""
    },
    {
        id: 530,
        codigo_cnae: "43.91-6",
        denominacao: "Obras de fundações",
        grau_risco: 4
    },
    {
        id: 531,
        codigo_cnae: "43.99-1",
        denominacao: "Serviços especializados para construção não especificados anteriormente",
        grau_risco: 3
    },
    {
        id: 532,
        codigo_cnae: "G",
        denominacao: "COMÉRCIO; REPARAÇÃO DE VEÍCULOS AUTOMOTORES E MOTOCICLETAS",
        grau_risco: ""
    },
    {
        id: 533,
        codigo_cnae: 45,
        denominacao: "COMÉRCIO E REPARAÇÃO DE VEÍCULOS AUTOMOTORES E MOTOCICLETAS",
        grau_risco: ""
    },
    {
        id: 534,
        codigo_cnae: "45,1",
        denominacao: "Comércio de veículos automotores",
        grau_risco: ""
    },
    {
        id: 535,
        codigo_cnae: "45.11-1",
        denominacao: "Comércio a varejo e por atacado de veículos automotores",
        grau_risco: 2
    },
    {
        id: 536,
        codigo_cnae: "45.12-9",
        denominacao: "Representantes comerciais e agentes do comércio de veículos automotores",
        grau_risco: 2
    },
    {
        id: 537,
        codigo_cnae: "45,2",
        denominacao: "Manutenção e reparação de veículos automotores",
        grau_risco: ""
    },
    {
        id: 538,
        codigo_cnae: "45.20-0",
        denominacao: "Manutenção e reparação de veículos automotores",
        grau_risco: 3
    },
    {
        id: 539,
        codigo_cnae: "45,3",
        denominacao: "Comércio de peças e acessórios para veículos automotores",
        grau_risco: ""
    },
    {
        id: 540,
        codigo_cnae: "45.30-7",
        denominacao: "Comércio de peças e acessórios para veículos automotores",
        grau_risco: 2
    },
    {
        id: 541,
        codigo_cnae: "45,4",
        denominacao: "Comércio, manutenção e reparação de motocicletas, peças e acessórios",
        grau_risco: ""
    },
    {
        id: 542,
        codigo_cnae: "45.41-2",
        denominacao: "Comércio por atacado e a varejo de motocicletas, peças e acessórios",
        grau_risco: 2
    },
    {
        id: 543,
        codigo_cnae: "45.42-1",
        denominacao: "Representantes comerciais e agentes do comércio de motocicletas, peças e acessórios",
        grau_risco: 2
    },
    {
        id: 544,
        codigo_cnae: "45.43-9",
        denominacao: "Manutenção e reparação de motocicletas",
        grau_risco: 3
    },
    {
        id: 545,
        codigo_cnae: 46,
        denominacao: "COMÉRCIO POR ATACADO, EXCETO VEÍCULOS AUTOMOTORES E MOTOCICLETAS",
        grau_risco: ""
    },
    {
        id: 546,
        codigo_cnae: "46,1",
        denominacao: "Representantes comerciais e agentes do comércio, exceto de veículos automotores e motocicletas",
        grau_risco: ""
    },
    {
        id: 547,
        codigo_cnae: "46.11-7",
        denominacao: "Representantes comerciais e agentes do comércio de matérias-primas agrícolas e animais vivos",
        grau_risco: 2
    },
    {
        id: 548,
        codigo_cnae: "46.12-5",
        denominacao: "Representantes comerciais e agentes do comércio de combustíveis, minerais, produtos siderúrgicos e químicos",
        grau_risco: 2
    },
    {
        id: 549,
        codigo_cnae: "46.13-3",
        denominacao: "Representantes comerciais e agentes do comércio de madeira, material de construção e ferragens",
        grau_risco: 2
    },
    {
        id: 550,
        codigo_cnae: "46.14-1",
        denominacao: "Representantes comerciais e agentes do comércio de máquinas, equipamentos, embarcações e aeronaves",
        grau_risco: 2
    },
    {
        id: 551,
        codigo_cnae: "46.15-0",
        denominacao: "Representantes comerciais e agentes do comércio de eletrodomésticos, móveis e artigos de uso doméstico",
        grau_risco: 2
    },
    {
        id: 552,
        codigo_cnae: "46.16-8",
        denominacao: "Representantes comerciais e agentes do comércio de têxteis, vestuário, calçados e artigos de viagem",
        grau_risco: 2
    },
    {
        id: 553,
        codigo_cnae: "46.17-6",
        denominacao: "Representantes comerciais e agentes do comércio de produtos alimentícios, bebidas e fumo",
        grau_risco: 2
    },
    {
        id: 554,
        codigo_cnae: "46.18-4",
        denominacao: "Representantes comerciais e agentes do comércio especializado em produtos não especificados anteriormente",
        grau_risco: 2
    },
    {
        id: 555,
        codigo_cnae: "46.19-2",
        denominacao: "Representantes comerciais e agentes do comércio de mercadorias em geral não especializado",
        grau_risco: 2
    },
    {
        id: 556,
        codigo_cnae: "46,2",
        denominacao: "Comércio atacadista de matérias-primas agrícolas e animais vivos",
        grau_risco: ""
    },
    {
        id: 557,
        codigo_cnae: "46.21-4",
        denominacao: "Comércio atacadista de café em grão",
        grau_risco: 2
    },
    {
        id: 558,
        codigo_cnae: "46.22-2",
        denominacao: "Comércio atacadista de soja",
        grau_risco: 2
    },
    {
        id: 559,
        codigo_cnae: "46.23-1",
        denominacao: "Comércio atacadista de animais vivos, alimentos para animais e matérias-primas agrícolas, exceto café e soja",
        grau_risco: 2
    },
    {
        id: 560,
        codigo_cnae: "46,3",
        denominacao: "Comércio atacadista especializado em produtos alimentícios, bebidas e fumo",
        grau_risco: ""
    },
    {
        id: 561,
        codigo_cnae: "46.31-1",
        denominacao: "Comércio atacadista de leite e laticínios",
        grau_risco: 2
    },
    {
        id: 562,
        codigo_cnae: "46.32-0",
        denominacao: "Comércio atacadista de cereais e leguminosas beneficiados, farinhas, amidos e féculas",
        grau_risco: 2
    },
    {
        id: 563,
        codigo_cnae: "46.33-8",
        denominacao: "Comércio atacadista de hortifrutigranjeiros",
        grau_risco: 2
    },
    {
        id: 564,
        codigo_cnae: "46.34-6",
        denominacao: "Comércio atacadista de carnes, produtos da carne e pescado",
        grau_risco: 2
    },
    {
        id: 565,
        codigo_cnae: "46.35-4",
        denominacao: "Comércio atacadista de bebidas",
        grau_risco: 2
    },
    {
        id: 566,
        codigo_cnae: "46.36-2",
        denominacao: "Comércio atacadista de produtos do fumo",
        grau_risco: 2
    },
    {
        id: 567,
        codigo_cnae: "46.37-1",
        denominacao: "Comércio atacadista especializado em produtos alimentícios não especificados anteriormente",
        grau_risco: 2
    },
    {
        id: 568,
        codigo_cnae: "46.39-7",
        denominacao: "Comércio atacadista de produtos alimentícios em geral",
        grau_risco: 2
    },
    {
        id: 569,
        codigo_cnae: "46,4",
        denominacao: "Comércio atacadista de produtos de consumo não-alimentar",
        grau_risco: ""
    },
    {
        id: 570,
        codigo_cnae: "46.41-9",
        denominacao: "Comércio atacadista de tecidos, artefatos de tecidos e de armarinho",
        grau_risco: 2
    },
    {
        id: 571,
        codigo_cnae: "46.42-7",
        denominacao: "Comércio atacadista de artigos do vestuário e acessórios",
        grau_risco: 2
    },
    {
        id: 572,
        codigo_cnae: "46.43-5",
        denominacao: "Comércio atacadista de calçados e artigos de viagem",
        grau_risco: 2
    },
    {
        id: 573,
        codigo_cnae: "46.44-3",
        denominacao: "Comércio atacadista de produtos farmacêuticos para uso humano e veterinário",
        grau_risco: 2
    },
    {
        id: 574,
        codigo_cnae: "46.45-1",
        denominacao: "Comércio atacadista de instrumentos e materiais para uso médico, cirúrgico, ortopédico e odontológico",
        grau_risco: 2
    },
    {
        id: 575,
        codigo_cnae: "46.46-0",
        denominacao: "Comércio atacadista de cosméticos, produtos de perfumaria e de higiene pessoal",
        grau_risco: 2
    },
    {
        id: 576,
        codigo_cnae: "46.47-8",
        denominacao: "Comércio atacadista de artigos de escritório e de papelaria; livros, jornais e outras publicações",
        grau_risco: 2
    },
    {
        id: 577,
        codigo_cnae: "46.49-4",
        denominacao: "Comércio atacadista de equipamentos e artigos de uso pessoal e doméstico não especificados anteriormente",
        grau_risco: 2
    },
    {
        id: 578,
        codigo_cnae: "46,5",
        denominacao: "Comércio atacadista de equipamentos e produtos de tecnologias de informação e comunicação",
        grau_risco: ""
    },
    {
        id: 579,
        codigo_cnae: "46.51-6",
        denominacao: "Comércio atacadista de computadores, periféricos e suprimentos de informática",
        grau_risco: 3
    },
    {
        id: 580,
        codigo_cnae: "46.52-4",
        denominacao: "Comércio atacadista de componentes eletrônicos e equipamentos de telefonia e comunicação",
        grau_risco: 3
    },
    {
        id: 581,
        codigo_cnae: "46,6",
        denominacao: "Comércio atacadista de máquinas, aparelhos e equipamentos, exceto de tecnologias de informação e comunicação",
        grau_risco: ""
    },
    {
        id: 582,
        codigo_cnae: "46.61-3",
        denominacao: "Comércio atacadista de máquinas, aparelhos e equipamentos para uso agropecuário; partes e peças",
        grau_risco: 3
    },
    {
        id: 583,
        codigo_cnae: "46.62-1",
        denominacao: "Comércio atacadista de máquinas, equipamentos para terraplenagem, mineração e construção; partes e peças",
        grau_risco: 3
    },
    {
        id: 584,
        codigo_cnae: "46.63-0",
        denominacao: "Comércio atacadista de máquinas e equipamentos para uso industrial; partes e peças",
        grau_risco: 3
    },
    {
        id: 585,
        codigo_cnae: "46.64-8",
        denominacao: "Comércio atacadista de máquinas, aparelhos e equipamentos para uso odonto médico- hospitalar; partes e peças",
        grau_risco: 3
    },
    {
        id: 586,
        codigo_cnae: "46.65-6",
        denominacao: "Comércio atacadista de máquinas e equipamentos para uso comercial; partes e peças",
        grau_risco: 3
    },
    {
        id: 587,
        codigo_cnae: "46.69-9",
        denominacao: "Comércio atacadista de máquinas, aparelhos e equipamentos não especificados anteriormente; partes e peças",
        grau_risco: 3
    },
    {
        id: 588,
        codigo_cnae: "46,7",
        denominacao: "Comércio atacadista de madeira, ferragens, ferramentas, material elétrico e material de construção",
        grau_risco: ""
    },
    {
        id: 589,
        codigo_cnae: "46.71-1",
        denominacao: "Comércio atacadista de madeira e produtos derivados",
        grau_risco: 3
    },
    {
        id: 590,
        codigo_cnae: "46.72-9",
        denominacao: "Comércio atacadista de ferragens e ferramentas",
        grau_risco: 3
    },
    {
        id: 591,
        codigo_cnae: "46.73-7",
        denominacao: "Comércio atacadista de material elétrico",
        grau_risco: 3
    },
    {
        id: 592,
        codigo_cnae: "46.74-5",
        denominacao: "Comércio atacadista de cimento",
        grau_risco: 3
    },
    {
        id: 593,
        codigo_cnae: "46.79-6",
        denominacao: "Comércio atacadista especializado de materiais de construção não especificados anteriormente e de materiais de construção em geral",
        grau_risco: 3
    },
    {
        id: 594,
        codigo_cnae: "46,8",
        denominacao: "Comércio atacadista especializado em outros produtos",
        grau_risco: ""
    },
    {
        id: 595,
        codigo_cnae: "46.81-8",
        denominacao: "Comércio atacadista de combustíveis sólidos, líquidos e gasosos, exceto gás natural e GLP",
        grau_risco: 3
    },
    {
        id: 596,
        codigo_cnae: "46.82-6",
        denominacao: "Comércio atacadista de gás liqüefeito de petróleo (GLP)",
        grau_risco: 3
    },
    {
        id: 597,
        codigo_cnae: "46.83-4",
        denominacao: "Comércio atacadista de defensivos agrícolas, adubos, fertilizantes e corretivos do solo",
        grau_risco: 3
    },
    {
        id: 598,
        codigo_cnae: "46.84-2",
        denominacao: "Comércio atacadista de produtos químicos e petroquímicos, exceto agroquímicos",
        grau_risco: 3
    },
    {
        id: 599,
        codigo_cnae: "46.85-1",
        denominacao: "Comércio atacadista de produtos siderúrgicos e metalúrgicos, exceto para construção",
        grau_risco: 3
    },
    {
        id: 600,
        codigo_cnae: "46.86-9",
        denominacao: "Comércio atacadista de papel e papelão em bruto e de embalagens",
        grau_risco: 3
    },
    {
        id: 601,
        codigo_cnae: "46.87-7",
        denominacao: "Comércio atacadista de resíduos e sucatas",
        grau_risco: 3
    },
    {
        id: 602,
        codigo_cnae: "46.89-3",
        denominacao: "Comércio atacadista especializado de outros produtos intermediários não especificados anteriormente",
        grau_risco: 3
    },
    {
        id: 603,
        codigo_cnae: "46,9",
        denominacao: "Comércio atacadista não-especializado",
        grau_risco: ""
    },
    {
        id: 604,
        codigo_cnae: "46.91-5",
        denominacao: "Comércio atacadista de mercadorias em geral, com predominância de produtos alimentícios",
        grau_risco: 2
    },
    {
        id: 605,
        codigo_cnae: "46.92-3",
        denominacao: "Comércio atacadista de mercadorias em geral, com predominância de insumos agropecuários",
        grau_risco: 2
    },
    {
        id: 606,
        codigo_cnae: "46.93-1",
        denominacao: "Comércio atacadista de mercadorias em geral, sem predominância de alimentos ou de insumos agropecuários",
        grau_risco: 2
    },
    {
        id: 607,
        codigo_cnae: 47,
        denominacao: "COMÉRCIO VAREJISTA",
        grau_risco: ""
    },
    {
        id: 608,
        codigo_cnae: "47,1",
        denominacao: "Comércio varejista não-especializado",
        grau_risco: ""
    },
    {
        id: 609,
        codigo_cnae: "47.11-3",
        denominacao: "Comércio varejista de mercadorias em geral, com predominância de produtos alimentícios - hipermercados e supermercados",
        grau_risco: 2
    },
    {
        id: 610,
        codigo_cnae: "47.12-1",
        denominacao: "Comércio varejista de mercadorias em geral, com predominância de produtos alimentícios - minimercados, mercearias e armazéns",
        grau_risco: 2
    },
    {
        id: 611,
        codigo_cnae: "47.13-0",
        denominacao: "Comércio varejista de mercadorias em geral, sem predominância de produtos alimentícios",
        grau_risco: 2
    },
    {
        id: 612,
        codigo_cnae: "47,2",
        denominacao: "Comércio varejista de produtos alimentícios, bebidas e fumo",
        grau_risco: ""
    },
    {
        id: 613,
        codigo_cnae: "47.21-1",
        denominacao: "Comércio varejista de produtos de padaria, laticínio, doces, balas e semelhantes",
        grau_risco: 2
    },
    {
        id: 614,
        codigo_cnae: "47.22-9",
        denominacao: "Comércio varejista de carnes e pescados - açougues e peixarias",
        grau_risco: 3
    },
    {
        id: 615,
        codigo_cnae: "47.23-7",
        denominacao: "Comércio varejista de bebidas",
        grau_risco: 2
    },
    {
        id: 616,
        codigo_cnae: "47.24-5",
        denominacao: "Comércio varejista de hortifrutigranjeiros",
        grau_risco: 2
    },
    {
        id: 617,
        codigo_cnae: "47.29-6",
        denominacao: "Comércio varejista de produtos alimentícios em geral ou especializado em produtos alimentícios não especificados anteriormente; produtos do fumo",
        grau_risco: 2
    },
    {
        id: 618,
        codigo_cnae: "47,3",
        denominacao: "Comércio varejista de combustíveis para veículos automotores",
        grau_risco: ""
    },
    {
        id: 619,
        codigo_cnae: "47.31-8",
        denominacao: "Comércio varejista de combustíveis para veículos automotores",
        grau_risco: 3
    },
    {
        id: 620,
        codigo_cnae: "47.32-6",
        denominacao: "Comércio varejista de lubrificantes",
        grau_risco: 3
    },
    {
        id: 621,
        codigo_cnae: "47,4",
        denominacao: "Comércio varejista de material de construção",
        grau_risco: ""
    },
    {
        id: 622,
        codigo_cnae: "47.41-5",
        denominacao: "Comércio varejista de tintas e materiais para pintura",
        grau_risco: 2
    },
    {
        id: 623,
        codigo_cnae: "47.42-3",
        denominacao: "Comércio varejista de material elétrico",
        grau_risco: 1
    },
    {
        id: 624,
        codigo_cnae: "47.43-1",
        denominacao: "Comércio varejista de vidros",
        grau_risco: 2
    },
    {
        id: 625,
        codigo_cnae: "47.44-0",
        denominacao: "Comércio varejista de ferragens, madeira e materiais de construção",
        grau_risco: 2
    },
    {
        id: 626,
        codigo_cnae: "47,5",
        denominacao: "Comércio varejista de equipamentos de informática e comunicação; equipamentos e artigos de uso doméstico",
        grau_risco: ""
    },
    {
        id: 627,
        codigo_cnae: "47.51-2",
        denominacao: "Comércio varejista especializado de equipamentos e suprimentos de informática",
        grau_risco: 1
    },
    {
        id: 628,
        codigo_cnae: "47.52-1",
        denominacao: "Comércio varejista especializado de equipamentos de telefonia e comunicação",
        grau_risco: 1
    },
    {
        id: 629,
        codigo_cnae: "47.53-9",
        denominacao: "Comércio varejista especializado de eletrodomésticos e equipamentos de áudio e vídeo",
        grau_risco: 1
    },
    {
        id: 630,
        codigo_cnae: "47.54-7",
        denominacao: "Comércio varejista especializado de móveis, colchoaria e artigos de iluminação",
        grau_risco: 1
    },
    {
        id: 631,
        codigo_cnae: "47.55-5",
        denominacao: "Comércio varejista especializado de tecidos e artigos de cama, mesa e banho",
        grau_risco: 1
    },
    {
        id: 632,
        codigo_cnae: "47.56-3",
        denominacao: "Comércio varejista especializado de instrumentos musicais e acessórios",
        grau_risco: 1
    },
    {
        id: 633,
        codigo_cnae: "47.57-1",
        denominacao: "Comércio varejista especializado de peças e acessórios para aparelhos eletroeletrônicos para uso doméstico, exceto informática e comunicação",
        grau_risco: 1
    },
    {
        id: 634,
        codigo_cnae: "47.59-8",
        denominacao: "Comércio varejista de artigos de uso doméstico não especificados anteriormente",
        grau_risco: 1
    },
    {
        id: 635,
        codigo_cnae: "47,6",
        denominacao: "Comércio varejista de artigos culturais, recreativos e esportivos",
        grau_risco: ""
    },
    {
        id: 636,
        codigo_cnae: "47.61-0",
        denominacao: "Comércio varejista de livros, jornais, revistas e papelaria",
        grau_risco: 1
    },
    {
        id: 637,
        codigo_cnae: "47.62-8",
        denominacao: "Comércio varejista de discos, CDs, DVDs e fitas",
        grau_risco: 1
    },
    {
        id: 638,
        codigo_cnae: "47.63-6",
        denominacao: "Comércio varejista de artigos recreativos e esportivos",
        grau_risco: 1
    },
    {
        id: 639,
        codigo_cnae: "47,7",
        denominacao: "Comércio varejista de produtos farmacêuticos, perfumaria e cosméticos e artigos médicos, ópticos e ortopédicos",
        grau_risco: ""
    },
    {
        id: 640,
        codigo_cnae: "47.71-7",
        denominacao: "Comércio varejista de produtos farmacêuticos para uso humano e veterinário",
        grau_risco: 2
    },
    {
        id: 641,
        codigo_cnae: "47.72-5",
        denominacao: "Comércio varejista de cosméticos, produtos de perfumaria e de higiene pessoal",
        grau_risco: 1
    },
    {
        id: 642,
        codigo_cnae: "47.73-3",
        denominacao: "Comércio varejista de artigos médicos e ortopédicos",
        grau_risco: 1
    },
    {
        id: 643,
        codigo_cnae: "47.74-1",
        denominacao: "Comércio varejista de artigos de óptica",
        grau_risco: 1
    },
    {
        id: 644,
        codigo_cnae: "47,8",
        denominacao: "Comércio varejista de produtos novos não especificados anteriormente e de produtos usados",
        grau_risco: ""
    },
    {
        id: 645,
        codigo_cnae: "47.81-4",
        denominacao: "Comércio varejista de artigos do vestuário e acessórios",
        grau_risco: 1
    },
    {
        id: 646,
        codigo_cnae: "47.82-2",
        denominacao: "Comércio varejista de calçados e artigos de viagem",
        grau_risco: 1
    },
    {
        id: 647,
        codigo_cnae: "47.83-1",
        denominacao: "Comércio varejista de jóias e relógios",
        grau_risco: 1
    },
    {
        id: 648,
        codigo_cnae: "47.84-9",
        denominacao: "Comércio varejista de gás liqüefeito de petróleo (GLP)",
        grau_risco: 3
    },
    {
        id: 649,
        codigo_cnae: "47.85-7",
        denominacao: "Comércio varejista de artigos usados",
        grau_risco: 2
    },
    {
        id: 650,
        codigo_cnae: "47.89-0",
        denominacao: "Comércio varejista de outros produtos novos não especificados anteriormente",
        grau_risco: 1
    },
    {
        id: 651,
        codigo_cnae: "47,9",
        denominacao: "Comércio ambulante e outros tipos de comércio varejista",
        grau_risco: ""
    },
    {
        id: 652,
        codigo_cnae: "47.90-3",
        denominacao: "Comércio ambulante e outros tipos de comércio varejista",
        grau_risco: 2
    },
    {
        id: 653,
        codigo_cnae: "H",
        denominacao: "TRANSPORTE, ARMAZENAGEM E CORREIO",
        grau_risco: ""
    },
    {
        id: 654,
        codigo_cnae: 49,
        denominacao: "TRANSPORTE TERRESTRE",
        grau_risco: ""
    },
    {
        id: 655,
        codigo_cnae: "49,1",
        denominacao: "Transporte ferroviário e metroferroviário",
        grau_risco: ""
    },
    {
        id: 656,
        codigo_cnae: "49.11-6",
        denominacao: "Transporte ferroviário de carga",
        grau_risco: 3
    },
    {
        id: 657,
        codigo_cnae: "49.12-4",
        denominacao: "Transporte metroferroviário de passageiros",
        grau_risco: 3
    },
    {
        id: 658,
        codigo_cnae: "49,2",
        denominacao: "Transporte rodoviário de passageiros",
        grau_risco: ""
    },
    {
        id: 659,
        codigo_cnae: "49.21-3",
        denominacao: "Transporte rodoviário coletivo de passageiros, com itinerário fixo, municipal e em região metropolitana",
        grau_risco: 3
    },
    {
        id: 660,
        codigo_cnae: "49.22-1",
        denominacao: "Transporte rodoviário coletivo de passageiros, com itinerário fixo, intermunicipal, interestadual e internacional",
        grau_risco: 3
    },
    {
        id: 661,
        codigo_cnae: "49.23-0",
        denominacao: "Transporte rodoviário de táxi",
        grau_risco: 3
    },
    {
        id: 662,
        codigo_cnae: "49.24-8",
        denominacao: "Transporte escolar",
        grau_risco: 3
    },
    {
        id: 663,
        codigo_cnae: "49.29-9",
        denominacao: "Transporte rodoviário coletivo de passageiros, sob regime de fretamento, e outros transportes rodoviários não especificados anteriormente",
        grau_risco: 3
    },
    {
        id: 664,
        codigo_cnae: "49,3",
        denominacao: "Transporte rodoviário de carga",
        grau_risco: ""
    },
    {
        id: 665,
        codigo_cnae: "49.30-2",
        denominacao: "Transporte rodoviário de carga",
        grau_risco: 3
    },
    {
        id: 666,
        codigo_cnae: "49,4",
        denominacao: "Transporte dutoviário",
        grau_risco: ""
    },
    {
        id: 667,
        codigo_cnae: "49.40-0",
        denominacao: "Transporte dutoviário",
        grau_risco: 3
    },
    {
        id: 668,
        codigo_cnae: "49,5",
        denominacao: "Trens turísticos, teleféricos e similares",
        grau_risco: ""
    },
    {
        id: 669,
        codigo_cnae: "49.50-7",
        denominacao: "Trens turísticos, teleféricos e similares",
        grau_risco: 3
    },
    {
        id: 670,
        codigo_cnae: 50,
        denominacao: "TRANSPORTE AQUAVIÁRIO",
        grau_risco: ""
    },
    {
        id: 671,
        codigo_cnae: "50,1",
        denominacao: "Transporte marítimo de cabotagem e longo curso",
        grau_risco: ""
    },
    {
        id: 672,
        codigo_cnae: "50.11-4",
        denominacao: "Transporte marítimo de cabotagem",
        grau_risco: 3
    },
    {
        id: 673,
        codigo_cnae: "50.12-2",
        denominacao: "Transporte marítimo de longo curso",
        grau_risco: 3
    },
    {
        id: 674,
        codigo_cnae: "50,2",
        denominacao: "Transporte por navegação interior",
        grau_risco: ""
    },
    {
        id: 675,
        codigo_cnae: "50.21-1",
        denominacao: "Transporte por navegação interior de carga",
        grau_risco: 3
    },
    {
        id: 676,
        codigo_cnae: "50.22-0",
        denominacao: "Transporte por navegação interior de passageiros em linhas regulares",
        grau_risco: 3
    },
    {
        id: 677,
        codigo_cnae: "50,3",
        denominacao: "Navegação de apoio",
        grau_risco: ""
    },
    {
        id: 678,
        codigo_cnae: "50.30-1",
        denominacao: "Navegação de apoio",
        grau_risco: 3
    },
    {
        id: 679,
        codigo_cnae: "50,9",
        denominacao: "Outros transportes aquaviários",
        grau_risco: ""
    },
    {
        id: 680,
        codigo_cnae: "50.91-2",
        denominacao: "Transporte por navegação de travessia",
        grau_risco: 3
    },
    {
        id: 681,
        codigo_cnae: "50.99-8",
        denominacao: "Transportes aquaviários não especificados anteriormente",
        grau_risco: 3
    },
    {
        id: 682,
        codigo_cnae: 51,
        denominacao: "TRANSPORTE AÉREO",
        grau_risco: ""
    },
    {
        id: 683,
        codigo_cnae: "51,1",
        denominacao: "Transporte aéreo de passageiros",
        grau_risco: ""
    },
    {
        id: 684,
        codigo_cnae: "51.11-1",
        denominacao: "Transporte aéreo de passageiros regular",
        grau_risco: 3
    },
    {
        id: 685,
        codigo_cnae: "51.12-9",
        denominacao: "Transporte aéreo de passageiros não-regular",
        grau_risco: 3
    },
    {
        id: 686,
        codigo_cnae: "51,2",
        denominacao: "Transporte aéreo de carga",
        grau_risco: ""
    },
    {
        id: 687,
        codigo_cnae: "51.20-0",
        denominacao: "Transporte aéreo de carga",
        grau_risco: 3
    },
    {
        id: 688,
        codigo_cnae: "51,3",
        denominacao: "Transporte espacial",
        grau_risco: ""
    },
    {
        id: 689,
        codigo_cnae: "51.30-7",
        denominacao: "Transporte espacial",
        grau_risco: 3
    },
    {
        id: 690,
        codigo_cnae: 52,
        denominacao: "ARMAZENAMENTO E ATIVIDADES AUXILIARES DOS TRANSPORTES",
        grau_risco: ""
    },
    {
        id: 691,
        codigo_cnae: "52,1",
        denominacao: "Armazenamento, carga e descarga",
        grau_risco: ""
    },
    {
        id: 692,
        codigo_cnae: "52.11-7",
        denominacao: "Armazenamento",
        grau_risco: 3
    },
    {
        id: 693,
        codigo_cnae: "52.12-5",
        denominacao: "Carga e descarga",
        grau_risco: 3
    },
    {
        id: 694,
        codigo_cnae: "52,2",
        denominacao: "Atividades auxiliares dos transportes terrestres",
        grau_risco: ""
    },
    {
        id: 695,
        codigo_cnae: "52.21-4",
        denominacao: "Concessionárias de rodovias, pontes, túneis e serviços relacionados",
        grau_risco: 3
    },
    {
        id: 696,
        codigo_cnae: "52.22-2",
        denominacao: "Terminais rodoviários e ferroviários",
        grau_risco: 3
    },
    {
        id: 697,
        codigo_cnae: "52.23-1",
        denominacao: "Estacionamento de veículos",
        grau_risco: 3
    },
    {
        id: 698,
        codigo_cnae: "52.29-0",
        denominacao: "Atividades auxiliares dos transportes terrestres não especificadas anteriormente",
        grau_risco: 3
    },
    {
        id: 699,
        codigo_cnae: "52,3",
        denominacao: "Atividades auxiliares dos transportes aquaviários",
        grau_risco: ""
    },
    {
        id: 700,
        codigo_cnae: "52.31-1",
        denominacao: "Gestão de portos e terminais",
        grau_risco: 3
    },
    {
        id: 701,
        codigo_cnae: "52.32-0",
        denominacao: "Atividades de agenciamento marítimo",
        grau_risco: 3
    },
    {
        id: 702,
        codigo_cnae: "52.39-7",
        denominacao: "Atividades auxiliares dos transportes aquaviários não especificadas anteriormente",
        grau_risco: 3
    },
    {
        id: 703,
        codigo_cnae: "52,4",
        denominacao: "Atividades auxiliares dos transportes aéreos",
        grau_risco: ""
    },
    {
        id: 704,
        codigo_cnae: "52.40-1",
        denominacao: "Atividades auxiliares dos transportes aéreos",
        grau_risco: 3
    },
    {
        id: 705,
        codigo_cnae: "52,5",
        denominacao: "Atividades relacionadas à organização do transporte de carga",
        grau_risco: ""
    },
    {
        id: 706,
        codigo_cnae: "52.50-8",
        denominacao: "Atividades relacionadas à organização do transporte de carga",
        grau_risco: 3
    },
    {
        id: 707,
        codigo_cnae: 53,
        denominacao: "CORREIO E OUTRAS ATIVIDADES DE ENTREGA",
        grau_risco: ""
    },
    {
        id: 708,
        codigo_cnae: "53,1",
        denominacao: "Atividades de Correio",
        grau_risco: ""
    },
    {
        id: 709,
        codigo_cnae: "53.10-5",
        denominacao: "Atividades de Correio",
        grau_risco: 2
    },
    {
        id: 710,
        codigo_cnae: "53,2",
        denominacao: "Atividades de malote e de entrega",
        grau_risco: ""
    },
    {
        id: 711,
        codigo_cnae: "53.20-2",
        denominacao: "Atividades de malote e de entrega",
        grau_risco: 2
    },
    {
        id: 712,
        codigo_cnae: "I",
        denominacao: "ALOJAMENTO E ALIMENTAÇÃO",
        grau_risco: ""
    },
    {
        id: 713,
        codigo_cnae: 55,
        denominacao: "ALOJAMENTO",
        grau_risco: ""
    },
    {
        id: 714,
        codigo_cnae: "55,1",
        denominacao: "Hotéis e similares",
        grau_risco: ""
    },
    {
        id: 715,
        codigo_cnae: "55.10-8",
        denominacao: "Hotéis e similares",
        grau_risco: 2
    },
    {
        id: 716,
        codigo_cnae: "55,9",
        denominacao: "Outros tipos de alojamento não especificados anteriormente",
        grau_risco: ""
    },
    {
        id: 717,
        codigo_cnae: "55.90-6",
        denominacao: "Outros tipos de alojamento não especificados anteriormente",
        grau_risco: 2
    },
    {
        id: 718,
        codigo_cnae: 56,
        denominacao: "ALIMENTAÇÃO",
        grau_risco: ""
    },
    {
        id: 719,
        codigo_cnae: "56,1",
        denominacao: "Restaurantes e outros serviços de alimentação e bebidas",
        grau_risco: ""
    },
    {
        id: 720,
        codigo_cnae: "56.11-2",
        denominacao: "Restaurantes e outros estabelecimentos de serviços de alimentação e bebidas",
        grau_risco: 2
    },
    {
        id: 721,
        codigo_cnae: "56.12-1",
        denominacao: "Serviços ambulantes de alimentação",
        grau_risco: 2
    },
    {
        id: 722,
        codigo_cnae: "56,2",
        denominacao: "Serviços de catering, bufê e outros serviços de comida preparada",
        grau_risco: ""
    },
    {
        id: 723,
        codigo_cnae: "56.20-1",
        denominacao: "Serviços de catering, bufê e outros serviços de comida preparada",
        grau_risco: 2
    },
    {
        id: 724,
        codigo_cnae: "J",
        denominacao: "INFORMAÇÃO E COMUNICAÇÃO",
        grau_risco: ""
    },
    {
        id: 725,
        codigo_cnae: 58,
        denominacao: "EDIÇÃO E EDIÇÃO INTEGRADA À IMPRESSÃO",
        grau_risco: ""
    },
    {
        id: 726,
        codigo_cnae: "58,1",
        denominacao: "Edição de livros, jornais, revistas e outras atividades de edição",
        grau_risco: ""
    },
    {
        id: 727,
        codigo_cnae: "58.11-5",
        denominacao: "Edição de livros",
        grau_risco: 3
    },
    {
        id: 728,
        codigo_cnae: "58.12-3",
        denominacao: "Edição de jornais",
        grau_risco: 3
    },
    {
        id: 729,
        codigo_cnae: "58.13-1",
        denominacao: "Edição de revistas",
        grau_risco: 3
    },
    {
        id: 730,
        codigo_cnae: "58.19-1",
        denominacao: "Edição de cadastros, listas e outros produtos gráficos",
        grau_risco: 3
    },
    {
        id: 731,
        codigo_cnae: "58,2",
        denominacao: "Edição integrada à impressão de livros, jornais, revistas e outras publicações",
        grau_risco: ""
    },
    {
        id: 732,
        codigo_cnae: "58.21-2",
        denominacao: "Edição integrada à impressão de livros",
        grau_risco: 3
    },
    {
        id: 733,
        codigo_cnae: "58.22-1",
        denominacao: "Edição integrada à impressão de jornais",
        grau_risco: 3
    },
    {
        id: 734,
        codigo_cnae: "58.23-9",
        denominacao: "Edição integrada à impressão de revistas",
        grau_risco: 3
    },
    {
        id: 735,
        codigo_cnae: "58.29-8",
        denominacao: "Edição integrada à impressão de cadastros, listas e outros produtos gráficos",
        grau_risco: 3
    },
    {
        id: 736,
        codigo_cnae: 59,
        denominacao: "ATIVIDADES CINEMATOGRÁFICAS, PRODUÇÃO DE VÍDEOS E DE PROGRAMAS DE TELEVISÃO; GRAVAÇÃO DE SOM E EDIÇÃO DE MÚSICA",
        grau_risco: ""
    },
    {
        id: 737,
        codigo_cnae: "59,1",
        denominacao: "Atividades cinematográficas, produção de vídeos e de programas de televisão",
        grau_risco: ""
    },
    {
        id: 738,
        codigo_cnae: "59.11-1",
        denominacao: "Atividades de produção cinematográfica, de vídeos e de programas de televisão",
        grau_risco: 2
    },
    {
        id: 739,
        codigo_cnae: "59.12-0",
        denominacao: "Atividades de pós-produção cinematográfica, de vídeos e de programas de televisão",
        grau_risco: 2
    },
    {
        id: 740,
        codigo_cnae: "59.13-8",
        denominacao: "Distribuição cinematográfica, de vídeo e de programas de televisão",
        grau_risco: 2
    },
    {
        id: 741,
        codigo_cnae: "59.14-6",
        denominacao: "Atividades de exibição cinematográfica",
        grau_risco: 2
    },
    {
        id: 742,
        codigo_cnae: "59,2",
        denominacao: "Atividades de gravação de som e de edição de música",
        grau_risco: ""
    },
    {
        id: 743,
        codigo_cnae: "59.20-1",
        denominacao: "Atividades de gravação de som e de edição de música",
        grau_risco: 2
    },
    {
        id: 744,
        codigo_cnae: 60,
        denominacao: "ATIVIDADES DE RÁDIO E DE TELEVISÃO",
        grau_risco: ""
    },
    {
        id: 745,
        codigo_cnae: "60,1",
        denominacao: "Atividades de rádio",
        grau_risco: ""
    },
    {
        id: 746,
        codigo_cnae: "60.10-1",
        denominacao: "Atividades de rádio",
        grau_risco: 2
    },
    {
        id: 747,
        codigo_cnae: "60,2",
        denominacao: "Atividades de televisão",
        grau_risco: ""
    },
    {
        id: 748,
        codigo_cnae: "60.21-7",
        denominacao: "Atividades de televisão aberta",
        grau_risco: 2
    },
    {
        id: 749,
        codigo_cnae: "60.22-5",
        denominacao: "Programadoras e atividades relacionadas à televisão por assinatura",
        grau_risco: 2
    },
    {
        id: 750,
        codigo_cnae: 61,
        denominacao: "TELECOMUNICAÇÕES",
        grau_risco: ""
    },
    {
        id: 751,
        codigo_cnae: "61,1",
        denominacao: "Telecomunicações por fio",
        grau_risco: ""
    },
    {
        id: 752,
        codigo_cnae: "61.10-8",
        denominacao: "Telecomunicações por fio",
        grau_risco: 2
    },
    {
        id: 753,
        codigo_cnae: "61,2",
        denominacao: "Telecomunicações sem fio",
        grau_risco: ""
    },
    {
        id: 754,
        codigo_cnae: "61.20-5",
        denominacao: "Telecomunicações sem fio",
        grau_risco: 2
    },
    {
        id: 755,
        codigo_cnae: "61,3",
        denominacao: "Telecomunicações por satélite",
        grau_risco: ""
    },
    {
        id: 756,
        codigo_cnae: "61.30-2",
        denominacao: "Telecomunicações por satélite",
        grau_risco: 2
    },
    {
        id: 757,
        codigo_cnae: "61,4",
        denominacao: "Operadoras de televisão por assinatura",
        grau_risco: ""
    },
    {
        id: 758,
        codigo_cnae: "61.41-8",
        denominacao: "Operadoras de televisão por assinatura por cabo",
        grau_risco: 2
    },
    {
        id: 759,
        codigo_cnae: "61.42-6",
        denominacao: "Operadoras de televisão por assinatura por microondas",
        grau_risco: 2
    },
    {
        id: 760,
        codigo_cnae: "61.43-4",
        denominacao: "Operadoras de televisão por assinatura por satélite",
        grau_risco: 2
    },
    {
        id: 761,
        codigo_cnae: "61,9",
        denominacao: "Outras atividades de telecomunicações",
        grau_risco: ""
    },
    {
        id: 762,
        codigo_cnae: "61.90-6",
        denominacao: "Outras atividades de telecomunicações",
        grau_risco: 2
    },
    {
        id: 763,
        codigo_cnae: 62,
        denominacao: "ATIVIDADES DOS SERVIÇOS DE TECNOLOGIA DA INFORMAÇÃO",
        grau_risco: ""
    },
    {
        id: 764,
        codigo_cnae: 62,
        denominacao: "Atividades dos serviços de tecnologia da informação",
        grau_risco: ""
    },
    {
        id: 765,
        codigo_cnae: "62.01-5",
        denominacao: "Desenvolvimento de programas de computador sob encomenda",
        grau_risco: 2
    },
    {
        id: 766,
        codigo_cnae: "62.02-3",
        denominacao: "Desenvolvimento e licenciamento de programas de computador customizáveis",
        grau_risco: 2
    },
    {
        id: 767,
        codigo_cnae: "62.03-1",
        denominacao: "Desenvolvimento e licenciamento de programas de computador não-customizáveis",
        grau_risco: 2
    },
    {
        id: 768,
        codigo_cnae: "62.04-0",
        denominacao: "Consultoria em tecnologia da informação",
        grau_risco: 2
    },
    {
        id: 769,
        codigo_cnae: "62.09-1",
        denominacao: "Suporte técnico, manutenção e outros serviços em tecnologia da informação",
        grau_risco: 2
    },
    {
        id: 770,
        codigo_cnae: 63,
        denominacao: "ATIVIDADES DE PRESTAÇÃO DE SERVIÇOS DE INFORMAÇÃO",
        grau_risco: ""
    },
    {
        id: 771,
        codigo_cnae: "63,1",
        denominacao: "Tratamento de dados, hospedagem na internet e outras atividades relacionadas",
        grau_risco: ""
    },
    {
        id: 772,
        codigo_cnae: "63.11-9",
        denominacao: "Tratamento de dados, provedores de serviços de aplicação e serviços de hospedagem na internet",
        grau_risco: 2
    },
    {
        id: 773,
        codigo_cnae: "63.19-4",
        denominacao: "Portais, provedores de conteúdo e outros serviços de informação na internet",
        grau_risco: 2
    },
    {
        id: 774,
        codigo_cnae: "63,9",
        denominacao: "Outras atividades de prestação de serviços de informação",
        grau_risco: ""
    },
    {
        id: 775,
        codigo_cnae: "63.91-7",
        denominacao: "Agências de notícias",
        grau_risco: 2
    },
    {
        id: 776,
        codigo_cnae: "63.99-2",
        denominacao: "Outras atividades de prestação de serviços de informação não especificadas anteriormente",
        grau_risco: 2
    },
    {
        id: 777,
        codigo_cnae: "K",
        denominacao: "ATIVIDADES FINANCEIRAS, DE SEGUROS E SERVIÇOS RELACIONADOS",
        grau_risco: ""
    },
    {
        id: 778,
        codigo_cnae: 64,
        denominacao: "ATIVIDADES DE SERVIÇOS FINANCEIROS",
        grau_risco: ""
    },
    {
        id: 779,
        codigo_cnae: "64,1",
        denominacao: "Banco Central",
        grau_risco: 1
    },
    {
        id: 780,
        codigo_cnae: "64.10-7",
        denominacao: "Banco Central",
        grau_risco: 1
    },
    {
        id: 781,
        codigo_cnae: "64,2",
        denominacao: "Intermediação monetária - depósitos à vista",
        grau_risco: ""
    },
    {
        id: 782,
        codigo_cnae: "64.21-2",
        denominacao: "Bancos comerciais",
        grau_risco: 1
    },
    {
        id: 783,
        codigo_cnae: "64.22-1",
        denominacao: "Bancos múltiplos, com carteira comercial",
        grau_risco: 1
    },
    {
        id: 784,
        codigo_cnae: "64.23-9",
        denominacao: "Caixas econômicas",
        grau_risco: 1
    },
    {
        id: 785,
        codigo_cnae: "64.24-7",
        denominacao: "Crédito cooperativo",
        grau_risco: 1
    },
    {
        id: 786,
        codigo_cnae: "64,3",
        denominacao: "Intermediação não-monetária - outros instrumentos de captação",
        grau_risco: ""
    },
    {
        id: 787,
        codigo_cnae: "64.31-0",
        denominacao: "Bancos múltiplos, sem carteira comercial",
        grau_risco: 1
    },
    {
        id: 788,
        codigo_cnae: "64.32-8",
        denominacao: "Bancos de investimento",
        grau_risco: 1
    },
    {
        id: 789,
        codigo_cnae: "64.33-6",
        denominacao: "Bancos de desenvolvimento",
        grau_risco: 1
    },
    {
        id: 790,
        codigo_cnae: "64.34-4",
        denominacao: "Agências de fomento",
        grau_risco: 1
    },
    {
        id: 791,
        codigo_cnae: "64.35-2",
        denominacao: "Crédito imobiliário",
        grau_risco: 1
    },
    {
        id: 792,
        codigo_cnae: "64.36-1",
        denominacao: "Sociedades de crédito, financiamento e investimento - financeiras",
        grau_risco: 1
    },
    {
        id: 793,
        codigo_cnae: "64.37-9",
        denominacao: "Sociedades de crédito ao microempreendedor",
        grau_risco: 1
    },
    {
        id: 794,
        codigo_cnae: "64.38-7",
        denominacao: "Bancos de câmbio e outras instituições de intermediação não-monetária",
        grau_risco: 1
    },
    {
        id: 795,
        codigo_cnae: "64,4",
        denominacao: "Arrendamento mercantil",
        grau_risco: ""
    },
    {
        id: 796,
        codigo_cnae: "64.40-9",
        denominacao: "Arrendamento mercantil",
        grau_risco: 1
    },
    {
        id: 797,
        codigo_cnae: "64,5",
        denominacao: "Sociedades de capitalização",
        grau_risco: ""
    },
    {
        id: 798,
        codigo_cnae: "64.50-6",
        denominacao: "Sociedades de capitalização",
        grau_risco: 1
    },
    {
        id: 799,
        codigo_cnae: "64,6",
        denominacao: "Atividades de sociedades de participação",
        grau_risco: ""
    },
    {
        id: 800,
        codigo_cnae: "64.61-1",
        denominacao: "Holdings de instituições financeiras",
        grau_risco: 1
    },
    {
        id: 801,
        codigo_cnae: "64.62-0",
        denominacao: "Holdings de instituições não-financeiras",
        grau_risco: 1
    },
    {
        id: 802,
        codigo_cnae: "64.63-8",
        denominacao: "Outras sociedades de participação, exceto holdings",
        grau_risco: 1
    },
    {
        id: 803,
        codigo_cnae: "64,7",
        denominacao: "Fundos de investimento",
        grau_risco: ""
    },
    {
        id: 804,
        codigo_cnae: "64.70-1",
        denominacao: "Fundos de investimento",
        grau_risco: 1
    },
    {
        id: 805,
        codigo_cnae: "64,9",
        denominacao: "Atividades de serviços financeiros não especificadas anteriormente",
        grau_risco: ""
    },
    {
        id: 806,
        codigo_cnae: "64.91-3",
        denominacao: "Sociedades de fomento mercantil - factoring",
        grau_risco: 1
    },
    {
        id: 807,
        codigo_cnae: "64.92-1",
        denominacao: "Securitização de créditos",
        grau_risco: 1
    },
    {
        id: 808,
        codigo_cnae: "64.93-0",
        denominacao: "Administração de consórcios para aquisição de bens e direitos",
        grau_risco: 1
    },
    {
        id: 809,
        codigo_cnae: "64.99-9",
        denominacao: "Outras atividades de serviços financeiros não especificadas anteriormente",
        grau_risco: 1
    },
    {
        id: 810,
        codigo_cnae: 65,
        denominacao: "SEGUROS, RESSEGUROS, PREVIDÊNCIA COMPLEMENTAR E PLANOS DE SAÚDE",
        grau_risco: ""
    },
    {
        id: 811,
        codigo_cnae: "65,1",
        denominacao: "Seguros de vida e não-vida",
        grau_risco: ""
    },
    {
        id: 812,
        codigo_cnae: "65.11-1",
        denominacao: "Seguros de vida",
        grau_risco: 1
    },
    {
        id: 813,
        codigo_cnae: "65.12-0",
        denominacao: "Seguros não-vida",
        grau_risco: 1
    },
    {
        id: 814,
        codigo_cnae: "65,2",
        denominacao: "Seguros-saúde",
        grau_risco: ""
    },
    {
        id: 815,
        codigo_cnae: "65.20-1",
        denominacao: "Seguros-saúde",
        grau_risco: 1
    },
    {
        id: 816,
        codigo_cnae: "65,3",
        denominacao: "Resseguros",
        grau_risco: ""
    },
    {
        id: 817,
        codigo_cnae: "65.30-8",
        denominacao: "Resseguros",
        grau_risco: 1
    },
    {
        id: 818,
        codigo_cnae: "65,4",
        denominacao: "Previdência complementar",
        grau_risco: ""
    },
    {
        id: 819,
        codigo_cnae: "65.41-3",
        denominacao: "Previdência complementar fechada",
        grau_risco: 1
    },
    {
        id: 820,
        codigo_cnae: "65.42-1",
        denominacao: "Previdência complementar aberta",
        grau_risco: 1
    },
    {
        id: 821,
        codigo_cnae: "65,5",
        denominacao: "Planos de saúde",
        grau_risco: ""
    },
    {
        id: 822,
        codigo_cnae: "65.50-2",
        denominacao: "Planos de saúde",
        grau_risco: 1
    },
    {
        id: 823,
        codigo_cnae: 66,
        denominacao: "ATIVIDADES AUXILIARES DOS SERVIÇOS FINANCEIROS, SEGUROS, PREVIDÊNCIA COMPLEMENTAR E PLANOS DE SAÚDE",
        grau_risco: ""
    },
    {
        id: 824,
        codigo_cnae: "66,1",
        denominacao: "Atividades auxiliares dos serviços financeiros",
        grau_risco: ""
    },
    {
        id: 825,
        codigo_cnae: "66.11-8",
        denominacao: "Administração de bolsas e mercados de balcão organizados",
        grau_risco: 1
    },
    {
        id: 826,
        codigo_cnae: "66.12-6",
        denominacao: "Atividades de intermediários em transações de títulos, valores mobiliários e mercadorias",
        grau_risco: 1
    },
    {
        id: 827,
        codigo_cnae: "66.13-4",
        denominacao: "Administração de cartões de crédito",
        grau_risco: 1
    },
    {
        id: 828,
        codigo_cnae: "66.19-3",
        denominacao: "Atividades auxiliares dos serviços financeiros não especificadas anteriormente",
        grau_risco: 1
    },
    {
        id: 829,
        codigo_cnae: "66,2",
        denominacao: "Atividades auxiliares dos seguros, da previdência complementar e dos planos de saúde",
        grau_risco: ""
    },
    {
        id: 830,
        codigo_cnae: "66.21-5",
        denominacao: "Avaliação de riscos e perdas",
        grau_risco: 1
    },
    {
        id: 831,
        codigo_cnae: "66.22-3",
        denominacao: "Corretores e agentes de seguros, de planos de previdência complementar e de saúde",
        grau_risco: 1
    },
    {
        id: 832,
        codigo_cnae: "66.29-1",
        denominacao: "Atividades auxiliares dos seguros, da previdência complementar e dos planos de saúde não especificadas anteriormente",
        grau_risco: 1
    },
    {
        id: 833,
        codigo_cnae: "66,3",
        denominacao: "Atividades de administração de fundos por contrato ou comissão",
        grau_risco: ""
    },
    {
        id: 834,
        codigo_cnae: "66.30-4",
        denominacao: "Atividades de administração de fundos por contrato ou comissão",
        grau_risco: 1
    },
    {
        id: 835,
        codigo_cnae: "L",
        denominacao: "ATIVIDADES IMOBILIÁRIAS",
        grau_risco: ""
    },
    {
        id: 836,
        codigo_cnae: 68,
        denominacao: "ATIVIDADES IMOBILIÁRIAS",
        grau_risco: ""
    },
    {
        id: 837,
        codigo_cnae: "68,1",
        denominacao: "Atividades imobiliárias de imóveis próprios",
        grau_risco: ""
    },
    {
        id: 838,
        codigo_cnae: "68.10-2",
        denominacao: "Atividades imobiliárias de imóveis próprios",
        grau_risco: 1
    },
    {
        id: 839,
        codigo_cnae: "68,2",
        denominacao: "Atividades imobiliárias por contrato ou comissão",
        grau_risco: ""
    },
    {
        id: 840,
        codigo_cnae: "68.21-8",
        denominacao: "Intermediação na compra, venda e aluguel de imóveis",
        grau_risco: 1
    },
    {
        id: 841,
        codigo_cnae: "68.22-6",
        denominacao: "Gestão e administração da propriedade imobiliária",
        grau_risco: 1
    },
    {
        id: 842,
        codigo_cnae: "M",
        denominacao: "ATIVIDADES PROFISSIONAIS, CIENTÍFICAS E TÉCNICAS",
        grau_risco: ""
    },
    {
        id: 843,
        codigo_cnae: 69,
        denominacao: "ATIVIDADES JURÍDICAS, DE CONTABILIDADE E DE AUDITORIA",
        grau_risco: ""
    },
    {
        id: 844,
        codigo_cnae: "69,1",
        denominacao: "Atividades jurídicas",
        grau_risco: ""
    },
    {
        id: 845,
        codigo_cnae: "69.11-7",
        denominacao: "Atividades jurídicas, exceto cartórios",
        grau_risco: 1
    },
    {
        id: 846,
        codigo_cnae: "69.12-5",
        denominacao: "Cartórios",
        grau_risco: 1
    },
    {
        id: 847,
        codigo_cnae: "69,2",
        denominacao: "Atividades de contabilidade, consultoria e auditoria contábil e tributária",
        grau_risco: ""
    },
    {
        id: 848,
        codigo_cnae: "69.20-6",
        denominacao: "Atividades de contabilidade, consultoria e auditoria contábil e tributária",
        grau_risco: 1
    },
    {
        id: 849,
        codigo_cnae: 70,
        denominacao: "ATIVIDADES DE SEDES DE EMPRESAS E DE CONSULTORIA EM GESTÃO EMPRESARIAL",
        grau_risco: ""
    },
    {
        id: 850,
        codigo_cnae: "70,1",
        denominacao: "Sedes de empresas e unidades administrativas locais",
        grau_risco: ""
    },
    {
        id: 851,
        codigo_cnae: "70.10-7",
        denominacao: "Sedes de empresas e unidades administrativas locais",
        grau_risco: 1
    },
    {
        id: 852,
        codigo_cnae: "70,2",
        denominacao: "Atividades de consultoria em gestão empresarial",
        grau_risco: ""
    },
    {
        id: 853,
        codigo_cnae: "70.20-4",
        denominacao: "Atividades de consultoria em gestão empresarial",
        grau_risco: 1
    },
    {
        id: 854,
        codigo_cnae: 71,
        denominacao: "SERVIÇOS DE ARQUITETURA E ENGENHARIA; TESTES E ANÁLISES TÉCNICAS",
        grau_risco: ""
    },
    {
        id: 855,
        codigo_cnae: "71,1",
        denominacao: "Serviços de arquitetura e engenharia e atividades técnicas relacionadas",
        grau_risco: ""
    },
    {
        id: 856,
        codigo_cnae: "71.11-1",
        denominacao: "Serviços de arquitetura",
        grau_risco: 1
    },
    {
        id: 857,
        codigo_cnae: "71.12-0",
        denominacao: "Serviços de engenharia",
        grau_risco: 1
    },
    {
        id: 858,
        codigo_cnae: "71.19-7",
        denominacao: "Atividades técnicas relacionadas à arquitetura e engenharia",
        grau_risco: 1
    },
    {
        id: 859,
        codigo_cnae: "71,2",
        denominacao: "Testes e análises técnicas",
        grau_risco: ""
    },
    {
        id: 860,
        codigo_cnae: "71.20-1",
        denominacao: "Testes e análises técnicas",
        grau_risco: 2
    },
    {
        id: 861,
        codigo_cnae: 72,
        denominacao: "PESQUISA E DESENVOLVIMENTO CIENTÍFICO",
        grau_risco: ""
    },
    {
        id: 862,
        codigo_cnae: "72,1",
        denominacao: "Pesquisa e desenvolvimento experimental em ciências físicas e naturais",
        grau_risco: ""
    },
    {
        id: 863,
        codigo_cnae: "72.10-0",
        denominacao: "Pesquisa e desenvolvimento experimental em ciências físicas e naturais",
        grau_risco: 2
    },
    {
        id: 864,
        codigo_cnae: "72,2",
        denominacao: "Pesquisa e desenvolvimento experimental em ciências sociais e humanas",
        grau_risco: ""
    },
    {
        id: 865,
        codigo_cnae: "72.20-7",
        denominacao: "Pesquisa e desenvolvimento experimental em ciências sociais e humanas",
        grau_risco: 2
    },
    {
        id: 866,
        codigo_cnae: 73,
        denominacao: "PUBLICIDADE E PESQUISA DE MERCADO",
        grau_risco: ""
    },
    {
        id: 867,
        codigo_cnae: "73,1",
        denominacao: "Publicidade",
        grau_risco: ""
    },
    {
        id: 868,
        codigo_cnae: "73.11-4",
        denominacao: "Agências de publicidade",
        grau_risco: 1
    },
    {
        id: 869,
        codigo_cnae: "73.12-2",
        denominacao: "Agenciamento de espaços para publicidade, exceto em veículos de comunicação",
        grau_risco: 1
    },
    {
        id: 870,
        codigo_cnae: "73.19-0",
        denominacao: "Atividades de publicidade não especificadas anteriormente",
        grau_risco: 1
    },
    {
        id: 871,
        codigo_cnae: "73,2",
        denominacao: "Pesquisas de mercado e de opinião pública",
        grau_risco: ""
    },
    {
        id: 872,
        codigo_cnae: "73.20-3",
        denominacao: "Pesquisas de mercado e de opinião pública",
        grau_risco: 1
    },
    {
        id: 873,
        codigo_cnae: 74,
        denominacao: "OUTRAS ATIVIDADES PROFISSIONAIS, CIENTÍFICAS E TÉCNICAS",
        grau_risco: ""
    },
    {
        id: 874,
        codigo_cnae: "74,1",
        denominacao: "Design e decoração de interiores",
        grau_risco: ""
    },
    {
        id: 875,
        codigo_cnae: "74.10-2",
        denominacao: "Design e decoração de interiores",
        grau_risco: 1
    },
    {
        id: 876,
        codigo_cnae: "74,2",
        denominacao: "Atividades fotográficas e similares",
        grau_risco: ""
    },
    {
        id: 877,
        codigo_cnae: "74.20-0",
        denominacao: "Atividades fotográficas e similares",
        grau_risco: 2
    },
    {
        id: 878,
        codigo_cnae: "74,9",
        denominacao: "Atividades profissionais, científicas e técnicas não especificadas anteriormente",
        grau_risco: ""
    },
    {
        id: 879,
        codigo_cnae: "74.90-1",
        denominacao: "Atividades profissionais, científicas e técnicas não especificadas anteriormente",
        grau_risco: 1
    },
    {
        id: 880,
        codigo_cnae: 75,
        denominacao: "ATIVIDADES VETERINÁRIAS",
        grau_risco: ""
    },
    {
        id: 881,
        codigo_cnae: 75,
        denominacao: "Atividades veterinárias",
        grau_risco: ""
    },
    {
        id: 882,
        codigo_cnae: "75.00-1",
        denominacao: "Atividades veterinárias",
        grau_risco: 3
    },
    {
        id: 883,
        codigo_cnae: "N",
        denominacao: "ATIVIDADES ADMINISTRATIVAS E SERVIÇOS COMPLEMENTARES",
        grau_risco: ""
    },
    {
        id: 884,
        codigo_cnae: 77,
        denominacao: "ALUGUÉIS NÃO-IMOBILIÁRIOS E GESTÃO DE ATIVOS INTANGÍVEIS NÃO- FINANCEIROS",
        grau_risco: ""
    },
    {
        id: 885,
        codigo_cnae: "77,1",
        denominacao: "Locação de meios de transporte sem condutor",
        grau_risco: ""
    },
    {
        id: 886,
        codigo_cnae: "77.11-0",
        denominacao: "Locação de automóveis sem condutor",
        grau_risco: 1
    },
    {
        id: 887,
        codigo_cnae: "77.19-5",
        denominacao: "Locação de meios de transporte, exceto automóveis, sem condutor",
        grau_risco: 1
    },
    {
        id: 888,
        codigo_cnae: "77,2",
        denominacao: "Aluguel de objetos pessoais e domésticos",
        grau_risco: ""
    },
    {
        id: 889,
        codigo_cnae: "77.21-7",
        denominacao: "Aluguel de equipamentos recreativos e esportivos",
        grau_risco: 1
    },
    {
        id: 890,
        codigo_cnae: "77.22-5",
        denominacao: "Aluguel de fitas de vídeo, DVDs e similares",
        grau_risco: 1
    },
    {
        id: 891,
        codigo_cnae: "77.23-3",
        denominacao: "Aluguel de objetos do vestuário, jóias e acessórios",
        grau_risco: 1
    },
    {
        id: 892,
        codigo_cnae: "77.29-2",
        denominacao: "Aluguel de objetos pessoais e domésticos não especificados anteriormente",
        grau_risco: 1
    },
    {
        id: 893,
        codigo_cnae: "77,3",
        denominacao: "Aluguel de máquinas e equipamentos sem operador",
        grau_risco: ""
    },
    {
        id: 894,
        codigo_cnae: "77.31-4",
        denominacao: "Aluguel de máquinas e equipamentos agrícolas sem operador",
        grau_risco: 1
    },
    {
        id: 895,
        codigo_cnae: "77.32-2",
        denominacao: "Aluguel de máquinas e equipamentos para construção sem operador",
        grau_risco: 1
    },
    {
        id: 896,
        codigo_cnae: "77.33-1",
        denominacao: "Aluguel de máquinas e equipamentos para escritório",
        grau_risco: 1
    },
    {
        id: 897,
        codigo_cnae: "77.39-0",
        denominacao: "Aluguel de máquinas e equipamentos não especificados anteriormente",
        grau_risco: 1
    },
    {
        id: 898,
        codigo_cnae: "77,4",
        denominacao: "Gestão de ativos intangíveis não-financeiros",
        grau_risco: ""
    },
    {
        id: 899,
        codigo_cnae: "77.40-3",
        denominacao: "Gestão de ativos intangíveis não-financeiros",
        grau_risco: 1
    },
    {
        id: 900,
        codigo_cnae: 78,
        denominacao: "SELEÇÃO, AGENCIAMENTO E LOCAÇÃO DE MÃO-DE-OBRA",
        grau_risco: ""
    },
    {
        id: 901,
        codigo_cnae: "78,1",
        denominacao: "Seleção e agenciamento de mão-de-obra",
        grau_risco: ""
    },
    {
        id: 902,
        codigo_cnae: "78.10-8",
        denominacao: "Seleção e agenciamento de mão-de-obra",
        grau_risco: 1
    },
    {
        id: 903,
        codigo_cnae: "78,2",
        denominacao: "Locação de mão-de-obra temporária",
        grau_risco: ""
    },
    {
        id: 904,
        codigo_cnae: "78.20-5",
        denominacao: "Locação de mão-de-obra temporária",
        grau_risco: 1
    },
    {
        id: 905,
        codigo_cnae: "78,3",
        denominacao: "Fornecimento e gestão de recursos humanos para terceiros",
        grau_risco: ""
    },
    {
        id: 906,
        codigo_cnae: "78.30-2",
        denominacao: "Fornecimento e gestão de recursos humanos para terceiros",
        grau_risco: 1
    },
    {
        id: 907,
        codigo_cnae: 79,
        denominacao: "AGÊNCIAS DE VIAGENS, OPERADORES TURÍSTICOS E SERVIÇOS DE RESERVAS",
        grau_risco: ""
    },
    {
        id: 908,
        codigo_cnae: "79,1",
        denominacao: "Agências de viagens e operadores turísticos",
        grau_risco: ""
    },
    {
        id: 909,
        codigo_cnae: "79.11-2",
        denominacao: "Agências de viagens",
        grau_risco: 1
    },
    {
        id: 910,
        codigo_cnae: "79.12-1",
        denominacao: "Operadores turísticos",
        grau_risco: 1
    },
    {
        id: 911,
        codigo_cnae: "79,9",
        denominacao: "Serviços de reservas e outros serviços de turismo não especificados anteriormente",
        grau_risco: ""
    },
    {
        id: 912,
        codigo_cnae: "79.90-2",
        denominacao: "Serviços de reservas e outros serviços de turismo não especificados anteriormente",
        grau_risco: 1
    },
    {
        id: 913,
        codigo_cnae: 80,
        denominacao: "ATIVIDADES DE VIGILÂNCIA, SEGURANÇA E INVESTIGAÇÃO",
        grau_risco: ""
    },
    {
        id: 914,
        codigo_cnae: "80,1",
        denominacao: "Atividades de vigilância, segurança privada e transporte de valores",
        grau_risco: ""
    },
    {
        id: 915,
        codigo_cnae: "80.11-1",
        denominacao: "Atividades de vigilância e segurança privada",
        grau_risco: 3
    },
    {
        id: 916,
        codigo_cnae: "80.12-9",
        denominacao: "Atividades de transporte de valores",
        grau_risco: 3
    },
    {
        id: 917,
        codigo_cnae: "80,2",
        denominacao: "Atividades de monitoramento de sistemas de segurança",
        grau_risco: ""
    },
    {
        id: 918,
        codigo_cnae: "80.20-0",
        denominacao: "Atividades de monitoramento de sistemas de segurança",
        grau_risco: 3
    },
    {
        id: 919,
        codigo_cnae: "80,3",
        denominacao: "Atividades de investigação particular",
        grau_risco: ""
    },
    {
        id: 920,
        codigo_cnae: "80.30-7",
        denominacao: "Atividades de investigação particular",
        grau_risco: 3
    },
    {
        id: 921,
        codigo_cnae: 81,
        denominacao: "SERVIÇOS PARA EDIFÍCIOS E ATIVIDADES PAISAGÍSTICAS",
        grau_risco: ""
    },
    {
        id: 922,
        codigo_cnae: "81,1",
        denominacao: "Serviços combinados para apoio a edifícios",
        grau_risco: ""
    },
    {
        id: 923,
        codigo_cnae: "81.11-7",
        denominacao: "Serviços combinados para apoio a edifícios, exceto condomínios prediais",
        grau_risco: 2
    },
    {
        id: 924,
        codigo_cnae: "81.12-5",
        denominacao: "Condomínios prediais",
        grau_risco: 2
    },
    {
        id: 925,
        codigo_cnae: "81,2",
        denominacao: "Atividades de limpeza",
        grau_risco: ""
    },
    {
        id: 926,
        codigo_cnae: "81.21-4",
        denominacao: "Limpeza em prédios e em domicílios",
        grau_risco: 3
    },
    {
        id: 927,
        codigo_cnae: "81.22-2",
        denominacao: "Imunização e controle de pragas urbanas",
        grau_risco: 3
    },
    {
        id: 928,
        codigo_cnae: "81.29-0",
        denominacao: "Atividades de limpeza não especificadas anteriormente",
        grau_risco: 3
    },
    {
        id: 929,
        codigo_cnae: "81,3",
        denominacao: "Atividades paisagísticas",
        grau_risco: ""
    },
    {
        id: 930,
        codigo_cnae: "81.30-3",
        denominacao: "Atividades paisagísticas",
        grau_risco: 1
    },
    {
        id: 931,
        codigo_cnae: 82,
        denominacao: "SERVIÇOS DE ESCRITÓRIO, DE APOIO ADMINISTRATIVO E OUTROS SERVIÇOS PRESTADOS ÀS EMPRESAS",
        grau_risco: ""
    },
    {
        id: 932,
        codigo_cnae: "82,1",
        denominacao: "Serviços de escritório e apoio administrativo",
        grau_risco: ""
    },
    {
        id: 933,
        codigo_cnae: "82.11-3",
        denominacao: "Serviços combinados de escritório e apoio administrativo",
        grau_risco: 1
    },
    {
        id: 934,
        codigo_cnae: "82.19-9",
        denominacao: "Fotocópias, preparação de documentos e outros serviços especializados de apoio administrativo",
        grau_risco: 2
    },
    {
        id: 935,
        codigo_cnae: "82,2",
        denominacao: "Atividades de teleatendimento",
        grau_risco: ""
    },
    {
        id: 936,
        codigo_cnae: "82.20-2",
        denominacao: "Atividades de teleatendimento",
        grau_risco: 2
    },
    {
        id: 937,
        codigo_cnae: "82,3",
        denominacao: "Atividades de organização de eventos, exceto culturais e esportivos",
        grau_risco: ""
    },
    {
        id: 938,
        codigo_cnae: "82.30-0",
        denominacao: "Atividades de organização de eventos, exceto culturais e esportivos",
        grau_risco: 2
    },
    {
        id: 939,
        codigo_cnae: "82,9",
        denominacao: "Outras atividades de serviços prestados principalmente às empresas",
        grau_risco: ""
    },
    {
        id: 940,
        codigo_cnae: "82.91-1",
        denominacao: "Atividades de cobrança e informações cadastrais",
        grau_risco: 2
    },
    {
        id: 941,
        codigo_cnae: "82.92-0",
        denominacao: "Envasamento e empacotamento sob contrato",
        grau_risco: 2
    },
    {
        id: 942,
        codigo_cnae: "82.99-7",
        denominacao: "Atividades de serviços prestados principalmente às empresas não especificadas anteriormente",
        grau_risco: 2
    },
    {
        id: 943,
        codigo_cnae: "O",
        denominacao: "ADMINISTRAÇÃO PÚBLICA, DEFESA E SEGURIDADE SOCIAL",
        grau_risco: ""
    },
    {
        id: 944,
        codigo_cnae: 84,
        denominacao: "ADMINISTRAÇÃO PÚBLICA, DEFESA E SEGURIDADE SOCIAL",
        grau_risco: ""
    },
    {
        id: 945,
        codigo_cnae: "84,1",
        denominacao: "Administração do estado e da política econômica e social",
        grau_risco: ""
    },
    {
        id: 946,
        codigo_cnae: "84.11-6",
        denominacao: "Administração pública em geral",
        grau_risco: 1
    },
    {
        id: 947,
        codigo_cnae: "84.12-4",
        denominacao: "Regulação das atividades de saúde, educação, serviços culturais e outros serviços sociais",
        grau_risco: 1
    },
    {
        id: 948,
        codigo_cnae: "84.13-2",
        denominacao: "Regulação das atividades econômicas",
        grau_risco: 1
    },
    {
        id: 949,
        codigo_cnae: "84,2",
        denominacao: "Serviços coletivos prestados pela administração pública",
        grau_risco: ""
    },
    {
        id: 950,
        codigo_cnae: "84.21-3",
        denominacao: "Relações exteriores",
        grau_risco: 1
    },
    {
        id: 951,
        codigo_cnae: "84.22-1",
        denominacao: "Defesa",
        grau_risco: 1
    },
    {
        id: 952,
        codigo_cnae: "84.23-0",
        denominacao: "Justiça",
        grau_risco: 1
    },
    {
        id: 953,
        codigo_cnae: "84.24-8",
        denominacao: "Segurança e ordem pública",
        grau_risco: 1
    },
    {
        id: 954,
        codigo_cnae: "84.25-6",
        denominacao: "Defesa Civil",
        grau_risco: 1
    },
    {
        id: 955,
        codigo_cnae: "84,3",
        denominacao: "Seguridade social obrigatória",
        grau_risco: ""
    },
    {
        id: 956,
        codigo_cnae: "84.30-2",
        denominacao: "Seguridade social obrigatória",
        grau_risco: 1
    },
    {
        id: 957,
        codigo_cnae: "P",
        denominacao: "EDUCAÇÃO",
        grau_risco: ""
    },
    {
        id: 958,
        codigo_cnae: 85,
        denominacao: "EDUCAÇÃO",
        grau_risco: ""
    },
    {
        id: 959,
        codigo_cnae: "85,1",
        denominacao: "Educação infantil e ensino fundamental",
        grau_risco: ""
    },
    {
        id: 960,
        codigo_cnae: "85.11-2",
        denominacao: "Educação infantil - creche",
        grau_risco: 2
    },
    {
        id: 961,
        codigo_cnae: "85.12-1",
        denominacao: "Educação infantil - pré-escola",
        grau_risco: 2
    },
    {
        id: 962,
        codigo_cnae: "85.13-9",
        denominacao: "Ensino fundamental",
        grau_risco: 2
    },
    {
        id: 963,
        codigo_cnae: "85,2",
        denominacao: "Ensino médio",
        grau_risco: ""
    },
    {
        id: 964,
        codigo_cnae: "85.20-1",
        denominacao: "Ensino médio",
        grau_risco: 2
    },
    {
        id: 965,
        codigo_cnae: "85,3",
        denominacao: "Educação superior",
        grau_risco: ""
    },
    {
        id: 966,
        codigo_cnae: "85.31-7",
        denominacao: "Educação superior - graduação",
        grau_risco: 2
    },
    {
        id: 967,
        codigo_cnae: "85.32-5",
        denominacao: "Educação superior - graduação e pós-graduação",
        grau_risco: 2
    },
    {
        id: 968,
        codigo_cnae: "85.33-3",
        denominacao: "Educação superior - pós-graduação e extensão",
        grau_risco: 2
    },
    {
        id: 969,
        codigo_cnae: "85,4",
        denominacao: "Educação profissional de nível técnico e tecnológico",
        grau_risco: ""
    },
    {
        id: 970,
        codigo_cnae: "85.41-4",
        denominacao: "Educação profissional de nível técnico",
        grau_risco: 2
    },
    {
        id: 971,
        codigo_cnae: "85.42-2",
        denominacao: "Educação profissional de nível tecnológico",
        grau_risco: 2
    },
    {
        id: 972,
        codigo_cnae: "85,5",
        denominacao: "Atividades de apoio à educação",
        grau_risco: ""
    },
    {
        id: 973,
        codigo_cnae: "85.50-3",
        denominacao: "Atividades de apoio à educação",
        grau_risco: 2
    },
    {
        id: 974,
        codigo_cnae: "85,9",
        denominacao: "Outras atividades de ensino",
        grau_risco: ""
    },
    {
        id: 975,
        codigo_cnae: "85.91-1",
        denominacao: "Ensino de esportes",
        grau_risco: 2
    },
    {
        id: 976,
        codigo_cnae: "85.92-9",
        denominacao: "Ensino de arte e cultura",
        grau_risco: 2
    },
    {
        id: 977,
        codigo_cnae: "85.93-7",
        denominacao: "Ensino de idiomas",
        grau_risco: 2
    },
    {
        id: 978,
        codigo_cnae: "85.99-6",
        denominacao: "Atividades de ensino não especificadas anteriormente",
        grau_risco: 2
    },
    {
        id: 979,
        codigo_cnae: "Q",
        denominacao: "SAÚDE HUMANA E SERVIÇOS SOCIAIS",
        grau_risco: ""
    },
    {
        id: 980,
        codigo_cnae: 86,
        denominacao: "ATIVIDADES DE ATENÇÃO À SAÚDE HUMANA",
        grau_risco: ""
    },
    {
        id: 981,
        codigo_cnae: "86,1",
        denominacao: "Atividades de atendimento hospitalar",
        grau_risco: ""
    },
    {
        id: 982,
        codigo_cnae: "86.10-1",
        denominacao: "Atividades de atendimento hospitalar",
        grau_risco: 3
    },
    {
        id: 983,
        codigo_cnae: "86,2",
        denominacao: "Serviços móveis de atendimento a urgências e de remoção de pacientes",
        grau_risco: ""
    },
    {
        id: 984,
        codigo_cnae: "86.21-6",
        denominacao: "Serviços móveis de atendimento a urgências",
        grau_risco: 3
    },
    {
        id: 985,
        codigo_cnae: "86.22-4",
        denominacao: "Serviços de remoção de pacientes, exceto os serviços móveis de atendimento a urgências",
        grau_risco: 3
    },
    {
        id: 986,
        codigo_cnae: "86,3",
        denominacao: "Atividades de atenção ambulatorial executadas por médicos e odontólogos",
        grau_risco: ""
    },
    {
        id: 987,
        codigo_cnae: "86.30-5",
        denominacao: "Atividades de atenção ambulatorial executadas por médicos e odontólogos",
        grau_risco: 3
    },
    {
        id: 988,
        codigo_cnae: "86,4",
        denominacao: "Atividades de serviços de complementação diagnóstica e terapêutica",
        grau_risco: ""
    },
    {
        id: 989,
        codigo_cnae: "86.40-2",
        denominacao: "Atividades de serviços de complementação diagnóstica e terapêutica",
        grau_risco: 3
    },
    {
        id: 990,
        codigo_cnae: "86,5",
        denominacao: "Atividades de profissionais da área de saúde, exceto médicos e odontólogos",
        grau_risco: ""
    },
    {
        id: 991,
        codigo_cnae: "86.50-0",
        denominacao: "Atividades de profissionais da área de saúde, exceto médicos e odontólogos",
        grau_risco: 2
    },
    {
        id: 992,
        codigo_cnae: "86,6",
        denominacao: "Atividades de apoio à gestão de saúde",
        grau_risco: ""
    },
    {
        id: 993,
        codigo_cnae: "86.60-7",
        denominacao: "Atividades de apoio à gestão de saúde",
        grau_risco: 1
    },
    {
        id: 994,
        codigo_cnae: "86,9",
        denominacao: "Atividades de atenção à saúde humana não especificadas anteriormente",
        grau_risco: ""
    },
    {
        id: 995,
        codigo_cnae: "86.90-9",
        denominacao: "Atividades de atenção à saúde humana não especificadas anteriormente",
        grau_risco: 1
    },
    {
        id: 996,
        codigo_cnae: 87,
        denominacao: "ATIVIDADES DE ATENÇÃO À SAÚDE HUMANA INTEGRADAS COM ASSISTÊNCIA SOCIAL, PRESTADAS EM RESIDÊNCIAS COLETIVAS E PARTICULARES",
        grau_risco: ""
    },
    {
        id: 997,
        codigo_cnae: "87,1",
        denominacao: "Atividades de assistência a idosos, deficientes físicos, imunodeprimidos e convalescentes, e de infra-estrutura e apoio a pacientes prestadas em residências coletivas e particulares",
        grau_risco: ""
    },
    {
        id: 998,
        codigo_cnae: "87.11-5",
        denominacao: "Atividades de assistência a idosos, deficientes físicos, imunodeprimidos e convalescentes prestadas em residências coletivas e particulares",
        grau_risco: 1
    },
    {
        id: 999,
        codigo_cnae: "87.12-3",
        denominacao: "Atividades de fornecimento de infra-estrutura de apoio e assistência a paciente no domicílio",
        grau_risco: 1
    },
    {
        id: 1000,
        codigo_cnae: "87,2",
        denominacao: "Atividades de assistência psicossocial e à saúde a portadores de distúrbios psíquicos, deficiência mental e dependência química",
        grau_risco: ""
    },
    {
        id: 1001,
        codigo_cnae: "87.20-4",
        denominacao: "Atividades de assistência psicossocial e à saúde a portadores de distúrbios psíquicos, deficiência mental e dependência química",
        grau_risco: 1
    },
    {
        id: 1002,
        codigo_cnae: "87,3",
        denominacao: "Atividades de assistência social prestadas em residências coletivas e particulares",
        grau_risco: 1
    },
    {
        id: 1003,
        codigo_cnae: "87.30-1",
        denominacao: "Atividades de assistência social prestadas em residências coletivas e particulares",
        grau_risco: 1
    },
    {
        id: 1004,
        codigo_cnae: 88,
        denominacao: "SERVIÇOS DE ASSISTÊNCIA SOCIAL SEM ALOJAMENTO",
        grau_risco: ""
    },
    {
        id: 1005,
        codigo_cnae: 88,
        denominacao: "Serviços de assistência social sem alojamento",
        grau_risco: ""
    },
    {
        id: 1006,
        codigo_cnae: "88.00-6",
        denominacao: "Serviços de assistência social sem alojamento",
        grau_risco: 1
    },
    {
        id: 1007,
        codigo_cnae: "R",
        denominacao: "ARTES, CULTURA, ESPORTE E RECREAÇÃO",
        grau_risco: ""
    },
    {
        id: 1008,
        codigo_cnae: 90,
        denominacao: "ATIVIDADES ARTÍSTICAS, CRIATIVAS E DE ESPETÁCULOS",
        grau_risco: ""
    },
    {
        id: 1009,
        codigo_cnae: 90,
        denominacao: "Atividades artísticas, criativas e de espetáculos",
        grau_risco: ""
    },
    {
        id: 1010,
        codigo_cnae: "90.01-9",
        denominacao: "Artes cênicas, espetáculos e atividades complementares",
        grau_risco: 2
    },
    {
        id: 1011,
        codigo_cnae: "90.02-7",
        denominacao: "Criação artística",
        grau_risco: 2
    },
    {
        id: 1012,
        codigo_cnae: "90.03-5",
        denominacao: "Gestão de espaços para artes cênicas, espetáculos e outras atividades artísticas",
        grau_risco: 1
    },
    {
        id: 1013,
        codigo_cnae: 91,
        denominacao: "ATIVIDADES LIGADAS AO PATRIMÔNIO CULTURAL E AMBIENTAL",
        grau_risco: ""
    },
    {
        id: 1014,
        codigo_cnae: 91,
        denominacao: "Atividades ligadas ao patrimônio cultural e ambiental",
        grau_risco: ""
    },
    {
        id: 1015,
        codigo_cnae: "91.01-5",
        denominacao: "Atividades de bibliotecas e arquivos",
        grau_risco: 2
    },
    {
        id: 1016,
        codigo_cnae: "91.02-3",
        denominacao: "Atividades de museus e de exploração, restauração artística e conservação de lugares e prédios históricos e atrações similares",
        grau_risco: 2
    },
    {
        id: 1017,
        codigo_cnae: "91.03-1",
        denominacao: "Atividades de jardins botânicos, zoológicos, parques nacionais, reservas ecológicas e áreas de proteção ambiental",
        grau_risco: 2
    },
    {
        id: 1018,
        codigo_cnae: 92,
        denominacao: "ATIVIDADES DE EXPLORAÇÃO DE JOGOS DE AZAR E APOSTAS",
        grau_risco: ""
    },
    {
        id: 1019,
        codigo_cnae: 92,
        denominacao: "Atividades de exploração de jogos de azar e apostas",
        grau_risco: ""
    },
    {
        id: 1020,
        codigo_cnae: "92.00-3",
        denominacao: "Atividades de exploração de jogos de azar e apostas",
        grau_risco: 1
    },
    {
        id: 1021,
        codigo_cnae: 93,
        denominacao: "ATIVIDADES ESPORTIVAS E DE RECREAÇÃO E LAZER",
        grau_risco: ""
    },
    {
        id: 1022,
        codigo_cnae: "93,1",
        denominacao: "Atividades esportivas",
        grau_risco: ""
    },
    {
        id: 1023,
        codigo_cnae: "93.11-5",
        denominacao: "Gestão de instalações de esportes",
        grau_risco: 1
    },
    {
        id: 1024,
        codigo_cnae: "93.12-3",
        denominacao: "Clubes sociais, esportivos e similares",
        grau_risco: 2
    },
    {
        id: 1025,
        codigo_cnae: "93.13-1",
        denominacao: "Atividades de condicionamento físico",
        grau_risco: 2
    },
    {
        id: 1026,
        codigo_cnae: "93.19-1",
        denominacao: "Atividades esportivas não especificadas anteriormente",
        grau_risco: 2
    },
    {
        id: 1027,
        codigo_cnae: "93,2",
        denominacao: "Atividades de recreação e lazer",
        grau_risco: ""
    },
    {
        id: 1028,
        codigo_cnae: "93.21-2",
        denominacao: "Parques de diversão e parques temáticos",
        grau_risco: 2
    },
    {
        id: 1029,
        codigo_cnae: "93.29-8",
        denominacao: "Atividades de recreação e lazer não especificadas anteriormente",
        grau_risco: 2
    },
    {
        id: 1030,
        codigo_cnae: "S",
        denominacao: "OUTRAS ATIVIDADES DE SERVIÇOS",
        grau_risco: ""
    },
    {
        id: 1031,
        codigo_cnae: 94,
        denominacao: "ATIVIDADES DE ORGANIZAÇÕES ASSOCIATIVAS",
        grau_risco: ""
    },
    {
        id: 1032,
        codigo_cnae: "94,1",
        denominacao: "Atividades de organizações associativas patronais, empresariais e profissionais",
        grau_risco: ""
    },
    {
        id: 1033,
        codigo_cnae: "94.11-1",
        denominacao: "Atividades de organizações associativas patronais e empresariais",
        grau_risco: 1
    },
    {
        id: 1034,
        codigo_cnae: "94.12-0",
        denominacao: "Atividades de organizações associativas profissionais",
        grau_risco: 1
    },
    {
        id: 1035,
        codigo_cnae: "94,2",
        denominacao: "Atividades de organizações sindicais",
        grau_risco: ""
    },
    {
        id: 1036,
        codigo_cnae: "94.20-1",
        denominacao: "Atividades de organizações sindicais",
        grau_risco: 1
    },
    {
        id: 1037,
        codigo_cnae: "94,3",
        denominacao: "Atividades de associações de defesa de direitos sociais",
        grau_risco: ""
    },
    {
        id: 1038,
        codigo_cnae: "94.30-8",
        denominacao: "Atividades de associações de defesa de direitos sociais",
        grau_risco: 1
    },
    {
        id: 1039,
        codigo_cnae: "94,9",
        denominacao: "Atividades de organizações associativas não especificadas anteriormente",
        grau_risco: ""
    },
    {
        id: 1040,
        codigo_cnae: "94.91-0",
        denominacao: "Atividades de organizações religiosas",
        grau_risco: 1
    },
    {
        id: 1041,
        codigo_cnae: "94.92-8",
        denominacao: "Atividades de organizações políticas",
        grau_risco: 1
    },
    {
        id: 1042,
        codigo_cnae: "94.93-6",
        denominacao: "Atividades de organizações associativas ligadas à cultura e à arte",
        grau_risco: 1
    },
    {
        id: 1043,
        codigo_cnae: "94.99-5",
        denominacao: "Atividades associativas não especificadas anteriormente",
        grau_risco: 1
    },
    {
        id: 1044,
        codigo_cnae: 95,
        denominacao: "REPARAÇÃO E MANUTENÇÃO DE EQUIPAMENTOS DE INFORMÁTICA E COMUNICAÇÃO E DE OBJETOS PESSOAIS E DOMÉSTICOS",
        grau_risco: ""
    },
    {
        id: 1045,
        codigo_cnae: "95,1",
        denominacao: "Reparação e manutenção de equipamentos de informática e comunicação",
        grau_risco: ""
    },
    {
        id: 1046,
        codigo_cnae: "95.11-8",
        denominacao: "Reparação e manutenção de computadores e de equipamentos periféricos",
        grau_risco: 3
    },
    {
        id: 1047,
        codigo_cnae: "95.12-6",
        denominacao: "Reparação e manutenção de equipamentos de comunicação",
        grau_risco: 3
    },
    {
        id: 1048,
        codigo_cnae: "95,2",
        denominacao: "Reparação e manutenção de objetos e equipamentos pessoais e domésticos",
        grau_risco: ""
    },
    {
        id: 1049,
        codigo_cnae: "95.21-5",
        denominacao: "Reparação e manutenção de equipamentos eletroeletrônicos de uso pessoal e doméstico",
        grau_risco: 3
    },
    {
        id: 1050,
        codigo_cnae: "95.29-1",
        denominacao: "Reparação e manutenção de objetos e equipamentos pessoais e domésticos não especificados anteriormente",
        grau_risco: 3
    },
    {
        id: 1051,
        codigo_cnae: 96,
        denominacao: "OUTRAS ATIVIDADES DE SERVIÇOS PESSOAIS",
        grau_risco: ""
    },
    {
        id: 1052,
        codigo_cnae: 96,
        denominacao: "Outras atividades de serviços pessoais",
        grau_risco: ""
    },
    {
        id: 1053,
        codigo_cnae: "96.01-7",
        denominacao: "Lavanderias, tinturarias e toalheiros",
        grau_risco: 2
    },
    {
        id: 1054,
        codigo_cnae: "96.02-5",
        denominacao: "Cabeleireiros e outras atividades de tratamento de beleza",
        grau_risco: 2
    },
    {
        id: 1055,
        codigo_cnae: "96.03-3",
        denominacao: "Atividades funerárias e serviços relacionados",
        grau_risco: 2
    },
    {
        id: 1056,
        codigo_cnae: "96.09-2",
        denominacao: "Atividades de serviços pessoais não especificadas anteriormente",
        grau_risco: 2
    },
    {
        id: 1057,
        codigo_cnae: "T",
        denominacao: "SERVIÇOS DOMÉSTICOS",
        grau_risco: ""
    },
    {
        id: 1058,
        codigo_cnae: 97,
        denominacao: "SERVIÇOS DOMÉSTICOS",
        grau_risco: ""
    },
    {
        id: 1059,
        codigo_cnae: 97,
        denominacao: "Serviços domésticos",
        grau_risco: ""
    },
    {
        id: 1060,
        codigo_cnae: "97.00-5",
        denominacao: "Serviços domésticos",
        grau_risco: 2
    },
    {
        id: 1061,
        codigo_cnae: "U",
        denominacao: "ORGANISMOS INTERNACIONAIS E OUTRAS INSTITUIÇÕES EXTRATERRITORIAIS",
        grau_risco: ""
    },
    {
        id: 1062,
        codigo_cnae: 99,
        denominacao: "ORGANISMOS INTERNACIONAIS E OUTRAS INSTITUIÇÕES EXTRATERRITORIAIS",
        grau_risco: ""
    },
    {
        id: 1063,
        codigo_cnae: 99,
        denominacao: "Organismos internacionais e outras instituições extraterritoriais",
        grau_risco: ""
    },
    {
        id: 1064,
        codigo_cnae: "99.00-8",
        denominacao: "Organismos internacionais e outras instituições extraterritoriais",
        grau_risco: 1
    }
];

module.exports = {
    relacao_cnae_gr, 
    dimensionamento_sesmt
};