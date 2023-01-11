const checklists = {
    'attendance': {
        name : 'Atendimento',
        checks: {
            fiber: {
                name: ['Fibra','fiber'],
                questions: [
                    'Responsável pela realização dos procedimentos (Cliente):',
                    'Telefone utilizado para contato (Origem no DRA):',
                    'Confirmado Endereço e telefone do cliente? Qual(is) número(s) foi(ram) confirmado(s)?',
                    'Telefone com WhatsApp para contato?',
                    'Ponto de referência? (No caso de agendamento)',
                    'Cliente utiliza Roteador? Adquirido na Persis?',
                    'Qual o login e senha de acesso ao roteador?',
                    'Conexão com Roteador está OK?',
                    'Sinal da fibra esta OK ? (mínimo 19, máxima 27)',
                    'Lentidão/quedas ocorre em algum equipamento em particular? Caso sim, qual?',
                    'Algum LED na ONU em vermelho ou laranja?',
                    'PON piscando?',
                    'Foi necessário realizar teste com cabo direto e Roteador desligado? A conexão com o cabo direto está OK?',
                    'Apresentado algum Erro? Qual o número do Erro?',
                    'Qual o procedimento realizado no atendimento? (detalhado)',
                    'Qual o melhor período para um agendamento de O.S.?',
                    'Foi alterado o tipo do atendimento?'
                ]
            },
            building: {
                name: ['Prédio/Condomínio', 'building'],
                questions: [
                    'Responsável pela realização dos procedimentos (Cliente):',
                ]
            },
            radio: {
                name: ['Radio', 'radio'],
                questions: [
                    'Responsável pela realização dos procedimentos (Cliente):',
                ]
            },
            smart: {
                name: ['Smartzap', 'smart'],
                questions: [
                    'Responsável pela realização dos procedimentos (Cliente):',
                ]
            },
        }
    },
    'maintenance': {
        name : 'Manutenção',
        checks: {
            huawei: {
                name: ['Huawei','huawei'],
                questions: [
                    'Responsável pela realização dos procedimentos (Cliente):',
                ]
            },
            zte: {
                name: ['ZTE','zte'],
                questions: [
                    'Responsável pela realização dos procedimentos (Cliente):',
                ]
            },
            fiberhome_cdata: {
                name: ['Fiberhome/C-DATA', 'fiberhome_cdata'],
                questions: [
                    'Responsável pela realização dos procedimentos (Cliente):',
                ]
            },
        }
    },
}

// const [typeOfCheclists, setTypeOfChecklists] = useState([
//     {value: 'attendance', label: 'Attendance'},
//     {value: 'maintenance', label: 'Maintenance'},
//     {value: 'activation', label: 'Activation'},
//     {value: 'ns_migration', label: 'NS Migration'},
//     {value: 'corp_emp', label: 'Corporate and Business'},
//     {value: 'retention', label: 'Retention'},
//     {value: 'Smartzap', label: 'Smartzap'},
//     {value: 'out_point', label: 'Out Point'},
// ]);


export default checklists