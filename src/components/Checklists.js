const checklists = {
  out_point: {
    name: "Ponto Fora",
    src: 'out_point',
    checks: {
      out_point: {
        name: ["Ponto fora", "out_point"],
        questions: [
          "Qual o ponto ou bloco fora?",
          "Há quanto tempo o ponto está fora?",
          "Quem é o responsável pelo local e quais seus contatos?",
          "Após entrado em contato com o responsável, foi certificado que há energia no local?",
          "Quais horários disponíveis para recebimento de técnico?",
          "Outros clientes relataram o mesmo problema ? Quais?",
          "Quais blocos foram afetados e possuem falta de conexão? (em caso de prédio)",
        ],
      },
    },
  },

  retention: {
    name: "Retenção",
    src: 'retention',
    checks: {
      retention: {
        name: ["Retenção", "retention"],
        questions: [
          "Responsável pelo Atendimento:",
          "Nome de Contato que reportou solicitação? ",
          "Os telefones de contato foram atualizados? Qual número?",
          "Qual melhor horário para que seja feito contato com o cliente?",
          "Descreva detalhadamente a solicitação/problemas informados pelo cliente.",
          "Foi realizado algum procedimento para evitar o cancelamento ?",
          "Alguma observação adicional sobre o atendimento realizado?",
        ],
      },
    },
  },

  corp_emp: {
    name: "Corporativo e Empresarial",
    src: 'corp_emp',
    checks: {
      corporative: {
        name: ["Corporativo", "corporative"],
        questions: [
          "Nome do responsável pelo contato:",
          "Número de contato DRA:",
          "Suporte Interno:",
          "Local está com energia?",
          "Que tipo de equipamento  a Persis entrega o Link? (ONU ou Switch)",
          `EM CASO DE ONU:
                    Cliente possui somente uma ONU e roteador no local? Se não, como está realizada a distribuição de equipamentos?`,
          "ONU está com LOS Vermelha?",
          `EM CASO DE SWITCH:
                    O equipamento está ligado?`,
          "As portas de UPlink e acesso estão acesas?",
          "Nome do contato no local?",
          "Telefone do contato no local?",
          "Caso necessário visita ao local, qual o horário permitido de acesso?",
          "Qual seria o protocolo interno?",
          "Descreva o que ocorre com o cliente:",
        ],
      },
      business: {
        name: ["Empresarial", "business"],
        questions: [
          "Nome do responsável pelo contato:",
          "Número de contato DRA:",
          "Suporte Interno:",
          "Local está com energia?",
          "ONU está com LOS Vermelha?",
          "Cliente possui somente uma ONU e roteador no local? Se não, como está realizada a distribuição de equipamentos?",
          "Foi realizado teste com cabo direto da ONU?",
          "Nome do contato no local?",
          "Telefone do contato no local?",
          "Caso necessário visita ao local, qual o horário permitido de acesso?",
          "Descreva o que ocorre com o cliente:",
          "Em caso de reclamação de lentidão ou perda de pacotes solicitar os teste de Ping e Winmtr para os seguintes destinos:",
        ],
      },
      algar: {
        name: ["Algar Telecom", "algar"],
        questions: [
          "Nome do responsável pelo contato:",
          "Número de contato DRA:",
          "Suporte Interno:",
          "Local está com energia?",
          "ONU possui algum alerta no Smart OLT?",
          "Qual o número do plano no integrator?",
          "Qual o designador do circuito?",
          "Qual o designador do circuito pela ALGAR?",
          "Qual o protocolo interno da ALGAR?",
          "Qual o nome do responsável no local atendido?",
          "Qual o telefone do responsável no local atendido?",
          "Se necessário envio de técnico, quais os horários para envio?",
          "Qual o problema descrito pelo cliente?",
        ],
      },
    },
  },

  attendance: {
    name: "Atendimento",
    src: 'attendance',
    checks: {
      fiber: {
        name: ["Fibra", "fiber"],
        questions: [
          "Responsável pela realização dos procedimentos (Cliente):",
          "Telefone utilizado para contato (Origem no DRA):",
          "Confirmado Endereço e telefone do cliente? Qual(is) número(s) foi(ram) confirmado(s)?",
          "Telefone com WhatsApp para contato?",
          "Ponto de referência? (No caso de agendamento)",
          "Cliente utiliza Roteador? Adquirido na Persis?",
          "Qual o login e senha de acesso ao roteador?",
          "Conexão com Roteador está OK?",
          "Sinal da fibra esta OK ? (mínimo 19, máxima 27)",
          "Lentidão/quedas ocorre em algum equipamento em particular? Caso sim, qual?",
          "Algum LED na ONU em vermelho ou laranja?",
          "PON piscando?",
          "Foi necessário realizar teste com cabo direto e Roteador desligado? A conexão com o cabo direto está OK?",
          "Apresentado algum Erro? Qual o número do Erro?",
          "Qual o procedimento realizado no atendimento? (detalhado)",
          "Qual o melhor período para um agendamento de O.S.?",
          "Foi alterado o tipo do atendimento?",
        ],
      },
      building: {
        name: ["Prédio/Condomínio", "building"],
        questions: [
          "Responsável pela realização dos procedimentos (Cliente):",
          "Telefone utilizado para contato (Origem no DRA):",
          "Confirmado Endereço e telefone do cliente? Qual(is) número(s) foi(ram) confirmado(s)?",
          "Telefone com WhatsApp para contato?",
          "Ponto de referência? (No caso de agendamento)",
          "Cliente utiliza Roteador? Adquirido na empresa Persis? Caso sim, Acesso remoto foi liberado?",
          "Qual o login e senha de acesso ao roteador?",
          "Lentidão/quedas ocorre em algum equipamento em particular? Caso sim, qual?",
          "Conexão com Roteador está OK?",
          "Foi necessário realizar teste com cabo direto e Roteador desligado? A conexão com o cabo direto está OK?",
          "Apresentado algum Erro? Qual o número do Erro?",
          "Qual o procedimento realizado no atendimento? (detalhado)",
          "Qual o melhor período para um agendamento de O.S.?",
          "Foi alterado o tipo do atendimento?",
        ],
      },
    },
  },
  
  maintenance: {
    name: "Manutenção Persis",
    src: 'maintenance',
    checks: {
      huawei_zte: {
        name: ["Manutenção Huawei/ZTE", "huawei_zte"],
        questions: [
          "Técnico Externo:",
          "Técnico Interno:",
          "OS:",
          "Protocolo:",
          "Foi Refeito a Infra ?",
          "Quanto de cabo?",
          "Qual o PON da ONU (Huawei ou ZTE)?",
          "Qual o MAC da ONU?",
          "Qual o numero do patrimônio?",
          "Qual a caixa que esta conectado?",
          "Qual a porta que esta conectado?",
          "O cabo esta identificado na caixa?(anilha)",
          "Qual o sinal da fibra na caixa (entre -15 e -25)? ",
          "Qual o sinal da fibra na residência (diferença máxima de -2db)? ",
          "Conector antigo, RESIDENCIA:",
          "Conector antigo, CAIXA:",
          "Conector Novo, RESIDENCIA:",
          "Conector Novo, CAIXA:",
          "Cliente possui roteador?",
          "Qual o modelo do roteador?",
          "Qual o login de acesso ao roteador?",
          "Qual a senha de acesso ao roteador?",
          "Roteador adquirido na Persis?",
          "Qual o patrimônio do roteador?",
          "Quais procedimentos realizados durante a manutenção?",
          "Qual IP esta registrado no teste? (confirmar com o IP no extrato de conexão ) ",
          "Quem acompanhou o teste?",
          "Download",
          "Upload",
          "Tempo de resposta médio",
          "Técnico foi informado para tirar foto novamente em caso da troca de equipamento durante a manutenção ?",
          "Sinal da fibra mostrado na ONU(mínimo 19, máxima 25)?( confirmar Sinal dentro da ONU)",
          "Foi alterado o tipo do atendimento?",
        ],
      },
      fiberhome_cdata: {
        name: ["Manutenção Fiberhome/C-DATA", "fiberhome_cdata"],
        questions: [
          "Técnico Externo:",
          "Técnico Interno:",
          "OS:",
          "Protocolo:",
          "Foi Refeito a Infra ?",
          "Quanto de cabo?",
          "Qual o MAC da ONU?",
          "Qual o numero do patrimônio?",
          "Qual a caixa que esta conectado?",
          "Qual a porta que esta conectado?",
          "O cabo esta identificado na caixa?(anilha)",
          "Qual o sinal da fibra na caixa (entre -15 e -25)? ",
          "Qual o sinal da fibra na residência (diferença máxima de -2db)? ",
          "Conector antigo, RESIDENCIA:",
          "Conector antigo, CAIXA:",
          "Conector Novo, RESIDENCIA:",
          "Conector Novo, CAIXA:",
          "Cliente possui roteador?",
          "Qual o modelo do roteador?",
          "Qual o login de acesso ao roteador?",
          "Qual a senha de acesso ao roteador?",
          "Roteador adquirido na Persis?",
          "Qual o patrimônio do roteador?",
          "Quais procedimentos realizados durante a manutenção?",
          "Qual IP esta registrado no teste? (confirmar com o IP no extrato de conexão ) ",
          "Quem acompanhou o teste?",
          "Download",
          "Upload",
          "Tempo de resposta médio",
          "Técnico foi informado para tirar foto novamente em caso da troca de equipamento durante a manutenção ?",
          "Sinal da fibra mostrado na ONU(mínimo 19, máxima 25)?( confirmar Sinal dentro da ONU)",
          "Foi alterado o tipo do atendimento?",
        ],
      },
      building: {
        name: ["Manutenção Pŕedio/Condomínio", "building"],
        questions: [
          "Tecnico Externo:",
          "Tecnico Interno:",
          "OS:",
          "Protocolo:",
          "O cabo e conectorização no lado do cliente estão adequados?",
          "O cabo e conectorização no lado do switch estão adequados?",
          "As instalações elétricas dos switches estão adequadas?",
          "Cliente possui roteador?",
          "Qual o modelo do roteador?",
          "Qual o login de acesso ao roteador?",
          "Qual a senha de acesso ao roteador?",
          "Roteador adquirido na Persis?",
          "Qual o patrimônio do roteador?",
          "Acesso remoto foi liberado?",
          "Foi habilitado o IPV6?",
          "Alterado ponto de ACESSO no integrator? Adicionado referência?",
          "Quais procedimentos realizados durante a manutenção?",
          "Qual o IP esta registrado no teste? (confirmar com o IP no extrato de conexão )",
          "Quem acompanhou o teste?",
          "Em qual equipamento do cliente foi testado?",
          "Qual o ponto de acesso?",
          "Download",
          "Upload",
          "Tempo de resposta médio",
          "1-Técnico foi informado para tirar foto novamente em caso da troca de equipamento durante a manutenção ?",
          "2-Foi alterado o tipo do atendimento?",
        ],
      },
    },
  },
  
  schedulling: {
    name: "Agendamento",
    src: 'schedulling',
    checks: {
      message: {
        name: ["Mensagem", "message"],
        questions: [
          'Cliente:',
          'Código:' ,
          'OS:' ,
          'Cidade:' ,
          'Endereço:',
          'Motivo:'
        ],
      },
      fiber: {
        name: ["Fibra", "fiber"],
        questions: [
          "NOME: ",
          "CONTATO:",
          "PERÍODO:",
          "REFERÊNCIA:",
          "CAIXA:",
          "PORTA:",
          "LOCAL-CTO:",
          "ONU:",
          "DBM:",
          "MOTIVO:",
          'LOGIN PPPoE:',
          "OBS:",
        ],
      },
      building: {
        name: ["Prédio/condomínio", "building"],
        questions: [
          "NOME: ",
          "CONTATO:",
          "PERÍODO:",
          "REFERÊNCIA:",
          "CONDOMÍNIO:",
          "MOTIVO:",
          'LOGIN PPPoE:',
          "OBS:",
        ],
      },
      los: {
        name: ["LOS VERMELHO", "los"],
        questions: [
          "NOME: ",
          "CONTATO:",
          "PERÍODO:",
          "REFERÊNCIA:",
          "CAIXA:",
          "PORTA:",
          "LOCAL-CTO:",
          'LOGIN PPPoE:',
          "ONU:",
        ],
      },
    },
  },
  
  activation: {
    name: "Ativação Persis",
    src: 'activation',
    checks: {
      huawei_zteac: {
        name: ["Ativação Huawei/ZTE", "huawei_zteac"],
        questions: [
          "Técnico Externo:",
          "Técnico Interno:",
          "OS:",
          "Protocolo:",
          "Qual o PON da ONU (Huawei/ZTE)",
          "Qual o MAC da ONU?",
          "Qual o numero do patrimonio?",
          "Qual a caixa que esta conectado?",
          "Qual a porta que esta conectado?",
          "Qual o sinal da fibra na caixa (entre -15 e -25)? ",
          "Qual o sinal da fibra na residência (diferença máxima de -3db)? ",
          "Conector CAIXA: ",
          "Conector CASA: ",
          "Quanto de cabo foi utilizado para a instalação?",
          "Cliente possui roteador?",
          "Qual o modelo?",
          "Qual o login de acesso ao roteador?",
          "Qual a senha de acesso ao roteador?",
          "Roteador adquirido com a Persis?",
          "Qual o patrimônio do roteador?",
          "Acesso remoto foi liberado?",
          "Foi habilitado o IPV6?",
          "Alguma observação adicional sobre a instalação?",
          "Qual IP esta registrado no teste? ",
          "Quem acompanhou o teste?",
          "Em qual equipamento do cliente foi testado?",
          "Download",
          "Upload",
          "Tempo de resposta médio",
          "Sinal da fibra mostrado na ONU(mínimo 19, máxima 27)?( confirmar Sinal dentro da ONU) Diferença máxima de 2 DB",
          "Técnico foi informado para tirar foto novamente em caso da troca de equipamento durante a ativação ?",
        ],
      },
      building: {
        name: ["Ativação Pŕedio/Condomínio", "building"],
        questions: [
          "Técnico Externo:",
          "Técnico Interno:",
          "OS:",
          "Protocolo:",
          "O cabo e conectorização no lado do cliente estão adequados?",
          "O cabo e conectorização no lado do switch estão adequados?",
          "As instalações elétricas dos switches estão adequadas?",
          "Cliente possui roteador?",
          "Qual o login de acesso ao roteador?",
          "Qual a senha de acesso ao roteador?",
          "Roteador adquirido na Persis?",
          "Qual o patrimônio do roteador?",
          "Qual o modelo do roteador?",
          "Acesso remoto foi liberado?",
          "Foi habilitado o IPV6?",
          "Alterado ponto de ACESSO no integrator? Adicionado referência?",
          "Qual o IP esta registrado no teste? (confirmar com o IP no extrato de conexão )",
          "Alguma observação adicional sobre a instalação?",
          "Quem acompanhou o teste?",
          "Em qual equipamento do cliente foi testado?",
          "Qual o ponto de acesso?",
          "Download",
          "Upload",
          "Tempo de resposta médio",
        ],
      },
      delta: {
        name: ["Ativação Delta", "delta"],
        questions: [
          'Atendente: ',
          'Técnico Instalador: ',
          'Código do assinante:  ',
          `\nDADOS DOS EQUIPAMENTOS\n
0- Serial da ONU?`,
          '1- Código da caixa e porta?',
          '3- Qual sinal da fibra na RESIDÊNCIA?',
          '4- Qual sinal da fibra na CAIXA?',
          '5- Qual sinal no sistema? (Atendente responde essa)',
          `\nDADOS DA INSTALAÇÃO\n
0- Qual metragem foi utilizada na instalação?`,
          '1- Quem acompanhou a instalação? ',
          '2- Alguma observação sobre o atendimento?',
          `\nTESTE DE VELOCIDADE\n
0- Qual equipamento foi realizado?`,
          '1- Download:',
          '2- Upload:',
          '3- Qual IP está registrando no teste?'
        ],
      },
    },
  },
  
  migration: {
    name: "Migração NSLINK",
    src: 'migration',
    checks: {
      migration: {
        name: ["Migração NLINK", "migration"],
        questions: [
          "Tecnico Externo:",
          "Tecnico Interno:",
          "OS:",
          "Protocolo",
          "Foi Refeito a Infra?",
          "Caso sim, responda as questão abaixo ou pule para a pergunta sobre roteador",
          "Qual o MAC COMPLETO da ONU?",
          "Qual o MAC COMPLETO do Roteador?",
          "Qual o modelo do roteador?",
          "Foi necessário a troca de algum equipamento? Qual?",
          "Qual o motivo da troca?",
          "Foi adicionado algum equipamento da Persis? Qual? Patrimônio?",
          "Se houve a troca, o equipamento foi recolhido pelo técnico?",
          "Qual o login de acesso ao roteador?",
          "Qual a senha de acesso ao roteador?",
          "Qual IP esta registrado no teste? (confirmar com o IP no extrato de conexão )",
          "Quais procedimentos realizados durante a manutenção?",
          "Quem acompanhou o teste?",
          "Download",
          "Upload",
          "Tempo de resposta médio",
          "Sinal da fibra mostrado na ONU(mínimo 19, máxima 25)?( confirmar Sinal dentro da ONU)",
          "Foi alterado o tipo do atendimento?",
        ],
      },
    },
  },
};

/*
'desc': {
    name : 'Name TRUE',
    checks: {
        check: {
            name: ['Name true','value'],
            questions: [
                
            ]
        },
    }
},
*/

export default checklists;
