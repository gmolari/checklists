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
                    'Telefone utilizado para contato (Origem no DRA):',
                    'Confirmado Endereço e telefone do cliente? Qual(is) número(s) foi(ram) confirmado(s)?',
                    'Telefone com WhatsApp para contato?',
                    'Ponto de referência? (No caso de agendamento)',
                    'Cliente utiliza Roteador? Adquirido na empresa Persis? Caso sim, Acesso remoto foi liberado?',
                    'Qual o login e senha de acesso ao roteador?',
                    'Lentidão/quedas ocorre em algum equipamento em particular? Caso sim, qual?',
                    'Conexão com Roteador está OK?',
                    'Foi necessário realizar teste com cabo direto e Roteador desligado? A conexão com o cabo direto está OK?',
                    'Apresentado algum Erro? Qual o número do Erro?',
                    'Qual o procedimento realizado no atendimento? (detalhado)',
                    'Qual o melhor período para um agendamento de O.S.?',
                    'Foi alterado o tipo do atendimento?'
                ]
            },
            radio: {
                name: ['Radio', 'radio'],
                questions: [
                    'Responsável pela realização dos procedimentos (Cliente):',
                    'Telefone utilizado para contato (Origem no DRA):',
                    'Confirmado Endereço e telefone do cliente? Qual(is) número(s) foi(ram) confirmado(s)?',
                    'Telefone com WhatsApp para contato?',
                    'Ponto de referência? (No caso de agendamento)',
                    'Cliente utiliza Roteador? Adquirido na empresa Persis?',
                    'Qual o login e senha de acesso ao roteador?',
                    'Conexão com Roteador está OK?',
                    'Qual AP que cliente se conecta?',
                    'Alterado ponto de ACESSO no integrator? Cliente com Referência?',
                    'Rádio padronizado?',
                    'Foi necessário realizar teste com cabo direto e Roteador desligado? A conexão com o cabo direto está OK?',
                    'Qual o procedimento realizado no atendimento? (detalhado)',
                    'Qual o melhor período para um agendamento de O.S.?',
                    'Foi alterado o tipo do atendimento?',
                ]
            },
            velocity_test: {
                name: ['Teste de Velocidade', 'velocity_test'],
                questions: [
                    'Responsável pela realização dos procedimentos (Cliente):',
                    'Telefone utilizado para contato (Origem no DRA):',
                    'Confirmado Endereço e telefone do cliente? Qual(is) número(s) foi(ram) confirmado(s)?',
                    'Telefone com WhatsApp para contato?',
                    'Ponto de referência? (No caso de agendamento)',
                    'Qual cabo o cliente está utilizando? (CAT5E OU SUPERIOR)',
                    'Qual o modelo da ONU?',
                    'Se fiberhome, possui 2 portas? Foi alterado de porta?',
                    'Qual site/aplicativo utilizado para realizar o teste?',
                    'Teste realizado por cabo ou wifi?',
                    'Qual o equipamento utilizado para o teste?',
                    'Se computador, é compatível o plano? Teste foi realizado via web ou aplicativo?',
                    'Se celular, possui a tecnologia AC?',
                    'Foi explicado ao cliente sobre as redes 2.4 E 5G?',
                    'Mesmo após a explicação, cliente insistiu em receber o técnico?',
                    'Alguma observação adicional?',
                    'Qual o melhor período para um agendamento de O.S.?',
                    'Foi alterado o tipo do atendimento?',
                ]
            },
        }
    },
    'maintenance': {
        name : 'Manutenção Persis',
        checks: {
            huawei: {
                name: ['Manutenção Huawei','huawei'],
                questions: [
                    'Responsável pela realização dos procedimentos (Cliente):',
                ]
            },
            zte: {
                name: ['Manutenção ZTE','zte'],
                questions: [
                    'Responsável pela realização dos procedimentos (Cliente):',
                ]
            },
            fiberhome_cdata: {
                name: ['Manutenção Fiberhome/C-DATA', 'fiberhome_cdata'],
                questions: [
                    'Responsável pela realização dos procedimentos (Cliente):',
                ]
            },
            building: {
                name: ['Manutenção Pŕedio/Condomínio','building'],
                questions: [
                    'Responsável pela realização dos procedimentos (Cliente):',
                ]
            }
        }
    },
    'maintenance_delta': {
        name : 'Manutenção Delta',
        checks: {
            fiber: {
                name: ['Delta Fibra','fiber'],
                questions: [
                    'Responsável pela realização dos procedimentos (Cliente):',
                ]
            },
            building: {
                name: ['Delta Prédio/condomínio','building'],
                questions: [
                    'Responsável pela realização dos procedimentos (Cliente):',
                ]
            },
        }
    },
    'schedulling': {
        name : 'Agendamento',
        checks: {
            fiber: {
                name: ['Fibra','fiber'],
                questions: [
                    'CONTATO:',
                    'PERÍODO:',
                    'REFERÊNCIA:',
                    'CAIXA:' ,
                    'PORTA:',
                    'LOCAL-CTO:', 
                    'ONU:',
                    'DBM:',
                    'MOTIVO:', 
                    'OBS:',
                ]
            },
            building: {
                name: ['Prédio/condomínio','building'],
                questions: [
                    'CONTATO:',
                    'PERÍODO:',
                    'REFERÊNCIA:',
                    'CONDOMÍNIO:',
                    'MOTIVO:', 
                    'OBS:',
                ]
            },
            los: {
                name: ['LOS VERMELHO','los'],
                questions: [
                    'Responsável pela realização dos procedimentos (Cliente):',
                ]
            },
        }
    },


}


export default checklists