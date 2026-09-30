export type LegalSection = { title: string; body: string };
export type LegalDocument = {
  title: string;
  description: string;
  introduction: string;
  sections: LegalSection[];
};

const institution = `Razão social: [INSERIR RAZÃO SOCIAL]
CNPJ: 05.808.760/0001-43
Endereço: R. Dom Vital, 127, Mamanguape - PB, 58280-000`;

const contact = `InterClim
E-mail: [INSERIR E-MAIL]
Telefone/WhatsApp: (83) 3292-2900 / (83) 98128-4599
Endereço: R. Dom Vital, 127, Mamanguape - PB, 58280-000`;

export const privacy: LegalDocument = {
  title: 'Política de Privacidade',
  description: 'Saiba como a InterClim coleta, utiliza e protege dados pessoais em seus canais de atendimento.',
  introduction: `A InterClim valoriza a privacidade e a proteção dos dados pessoais de seus pacientes, usuários, visitantes e demais pessoas que utilizam seus canais de atendimento e serviços.

Esta Política de Privacidade explica, de forma transparente, como podemos coletar, utilizar, armazenar e proteger informações pessoais quando você acessa nosso site, entra em contato conosco ou utiliza nossos canais de atendimento, incluindo o WhatsApp.`,
  sections: [
    { title: '1. QUEM SOMOS', body: `A InterClim é uma clínica que oferece serviços relacionados à área da saúde.

${institution}
E-mail para assuntos relacionados à privacidade: [INSERIR E-MAIL]` },
    { title: '2. QUAIS DADOS PODEM SER COLETADOS', body: `Dependendo da forma como você interage com a InterClim, podemos coletar informações como:

- nome;
- número de telefone;
- número de WhatsApp;
- endereço de e-mail;
- informações fornecidas durante o atendimento;
- informações relacionadas a solicitações de agendamento;
- informações necessárias para confirmação ou alteração de agendamentos;
- mensagens enviadas por você através do WhatsApp ou outros canais de atendimento;
- informações técnicas relacionadas à utilização do site, como endereço IP, navegador e dispositivo, quando aplicável.

Quando necessário para a prestação de serviços de saúde, também poderão ser tratados dados pessoais sensíveis relacionados à saúde, sempre de acordo com a legislação aplicável e com as medidas de segurança adequadas.` },
    { title: '3. COMO OS DADOS SÃO COLETADOS', body: `Os dados podem ser obtidos quando você:

- acessa ou utiliza nosso site;
- entra em contato com a InterClim;
- envia mensagens pelo WhatsApp;
- solicita informações;
- solicita ou realiza um agendamento;
- fornece voluntariamente informações durante um atendimento.` },
    { title: '4. COMO UTILIZAMOS OS DADOS', body: `Os dados pessoais poderão ser utilizados para:

- responder solicitações e dúvidas;
- realizar atendimento;
- realizar, confirmar, alterar ou cancelar agendamentos;
- fornecer informações sobre serviços;
- entrar em contato quando necessário para a prestação do serviço;
- melhorar nossos canais de atendimento;
- manter a segurança e o funcionamento dos nossos sistemas;
- cumprir obrigações legais e regulatórias;
- exercer direitos em processos administrativos ou judiciais;
- atender outras finalidades legítimas relacionadas às atividades da InterClim.` },
    { title: '5. ATENDIMENTO PELO WHATSAPP E AUTOMAÇÃO', body: `A InterClim poderá utilizar o WhatsApp como canal de comunicação e atendimento.

Para facilitar esse atendimento, poderão ser utilizados sistemas automatizados, incluindo ferramentas de automação e/ou agentes de inteligência artificial.

Esses sistemas poderão auxiliar na recepção de mensagens, fornecimento de informações, encaminhamento de solicitações e organização do atendimento.

Quando necessário, o atendimento poderá ser encaminhado para um atendente humano.

O uso de sistemas automatizados não elimina a responsabilidade da InterClim pelo tratamento dos dados pessoais realizado em seus canais, observadas as responsabilidades próprias das plataformas e fornecedores envolvidos.` },
    { title: '6. COMPARTILHAMENTO DE DADOS', body: `A InterClim poderá compartilhar dados pessoais com prestadores de serviços e fornecedores de tecnologia quando isso for necessário para a execução das finalidades descritas nesta Política, como serviços de hospedagem, sistemas de atendimento, ferramentas de automação, plataformas de comunicação e outros fornecedores tecnológicos.

Também poderemos compartilhar dados quando necessário para cumprir obrigações legais, regulatórias ou determinações de autoridades competentes.

Sempre que aplicável, buscamos adotar medidas para que terceiros tratem os dados de acordo com a legislação aplicável e com finalidades compatíveis com os serviços prestados.` },
    { title: '7. WHATSAPP E PLATAFORMAS DE TERCEIROS', body: `Quando você utiliza o WhatsApp para entrar em contato com a InterClim, suas informações também poderão ser tratadas pela Meta e pelo próprio WhatsApp, de acordo com os respectivos termos e políticas de privacidade dessas plataformas.

A InterClim não controla integralmente as práticas de privacidade, segurança ou tratamento de dados realizadas diretamente pelas plataformas de terceiros.

Recomendamos que o usuário também consulte as políticas de privacidade e os termos de uso das plataformas utilizadas.` },
    { title: '8. COOKIES E TECNOLOGIAS SEMELHANTES', body: `O site poderá utilizar cookies e tecnologias semelhantes para permitir seu funcionamento, melhorar a experiência de navegação, obter informações estatísticas e, quando aplicável, realizar análises de utilização.

Quando forem utilizados cookies que dependam de consentimento, serão adotados mecanismos apropriados para obtenção e gerenciamento desse consentimento.` },
    { title: '9. SEGURANÇA', body: `A InterClim adota medidas técnicas e administrativas razoáveis para proteger os dados pessoais contra acessos não autorizados, perda, destruição, alteração ou divulgação indevida.

Apesar das medidas adotadas, nenhum sistema conectado à internet pode ser considerado completamente seguro. Por isso, não é possível garantir segurança absoluta contra todos os riscos existentes.` },
    { title: '10. ARMAZENAMENTO E RETENÇÃO', body: `Os dados pessoais serão mantidos pelo período necessário para cumprir as finalidades para as quais foram coletados, atender obrigações legais ou regulatórias, exercer direitos e cumprir outras finalidades legítimas previstas na legislação aplicável.

Quando não houver mais necessidade de manutenção dos dados, eles poderão ser eliminados ou anonimizados, observadas as hipóteses legais que permitam ou exijam sua conservação.` },
    { title: '11. DIREITOS DO TITULAR', body: `Nos termos da legislação aplicável, especialmente da Lei Geral de Proteção de Dados Pessoais (LGPD), o titular poderá exercer seus direitos relacionados aos seus dados pessoais, incluindo, conforme aplicável:

- confirmação da existência de tratamento;
- acesso aos dados;
- correção de dados incompletos, inexatos ou desatualizados;
- anonimização, bloqueio ou eliminação de dados tratados em determinadas situações;
- portabilidade, quando aplicável;
- informação sobre compartilhamento;
- revogação do consentimento, quando o tratamento estiver baseado nessa hipótese;
- oposição ao tratamento em determinadas situações;
- revisão de determinadas decisões automatizadas, quando aplicável.

As solicitações deverão ser encaminhadas para:

E-mail: [INSERIR E-MAIL DE PRIVACIDADE]

A análise de cada solicitação será realizada de acordo com a legislação aplicável e poderá exigir confirmação da identidade do solicitante para proteção contra solicitações fraudulentas.` },
    { title: '12. DADOS DE CRIANÇAS E ADOLESCENTES', body: `Quando houver tratamento de dados pessoais de crianças ou adolescentes, a InterClim adotará as medidas previstas na legislação aplicável e buscará observar o melhor interesse desses titulares.` },
    { title: '13. ALTERAÇÕES DESTA POLÍTICA', body: `Esta Política de Privacidade poderá ser atualizada periodicamente para refletir alterações nos serviços, nas tecnologias utilizadas ou na legislação aplicável.

A versão mais recente estará disponível nesta página, acompanhada da respectiva data de atualização.` },
    { title: '14. CONTATO', body: `Caso tenha dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, entre em contato conosco:

${contact}` },
  ],
};

export const terms: LegalDocument = {
  title: 'Termos de Uso',
  description: 'Leia as condições de uso do site e dos canais digitais da InterClim.',
  introduction: `Bem-vindo ao site e aos canais digitais da InterClim.

Ao acessar ou utilizar nossos canais digitais, você declara estar ciente destes Termos de Uso.`,
  sections: [
    { title: '1. SOBRE A INTERCLIM', body: `A InterClim é uma clínica que oferece serviços relacionados à área da saúde.

${institution}` },
    { title: '2. ACEITAÇÃO DOS TERMOS', body: `Ao acessar o site ou utilizar os canais digitais da InterClim, o usuário concorda com estes Termos de Uso.

Caso não concorde com alguma disposição destes Termos, recomendamos que não utilize os canais digitais da InterClim.` },
    { title: '3. UTILIZAÇÃO DO SITE', body: `O usuário compromete-se a utilizar o site de maneira adequada, legal e de acordo com estes Termos.

É proibido utilizar o site para:

- praticar atividades ilícitas;
- tentar obter acesso não autorizado a sistemas;
- prejudicar o funcionamento do site;
- inserir códigos maliciosos;
- realizar atividades que possam comprometer a segurança da plataforma;
- utilizar informações do site de maneira fraudulenta.` },
    { title: '4. ATENDIMENTO PELO WHATSAPP', body: `A InterClim poderá disponibilizar atendimento por WhatsApp.

Esse atendimento poderá utilizar sistemas automatizados e ferramentas de inteligência artificial para auxiliar na recepção e organização das solicitações.

O usuário deverá fornecer informações verdadeiras e atualizadas quando necessário para o atendimento.

Quando a situação exigir avaliação ou intervenção humana, o atendimento poderá ser encaminhado para um profissional ou colaborador da InterClim.` },
    { title: '5. AGENDAMENTOS', body: `Quando disponibilizado, o site ou o atendimento por WhatsApp poderá permitir solicitações relacionadas a agendamentos.

Uma solicitação de agendamento não deverá ser considerada confirmada até que a confirmação seja realizada pelos canais oficiais da InterClim.

Horários, disponibilidade, valores, procedimentos e demais informações poderão estar sujeitos a alterações.` },
    { title: '6. INFORMAÇÕES SOBRE SAÚDE', body: `As informações apresentadas nos canais digitais da InterClim possuem finalidade informativa e de atendimento.

O conteúdo disponibilizado no site ou por sistemas automatizados não substitui uma avaliação médica ou profissional adequada.

Em situações de urgência ou emergência, o usuário deverá procurar atendimento médico adequado ou um serviço de emergência.` },
    { title: '7. INTELIGÊNCIA ARTIFICIAL E AUTOMAÇÃO', body: `A InterClim poderá utilizar tecnologias de inteligência artificial e automação para auxiliar no atendimento.

As respostas fornecidas por sistemas automatizados podem apresentar limitações e não devem ser interpretadas como diagnóstico médico, prescrição ou substituição de avaliação realizada por profissional habilitado.

Quando necessário, o usuário poderá ser encaminhado para atendimento humano.` },
    { title: '8. PROPRIEDADE INTELECTUAL', body: `Salvo indicação em contrário, os conteúdos disponibilizados no site, incluindo textos, imagens, identidade visual, marcas, logotipos, elementos gráficos e demais materiais, pertencem à InterClim ou são utilizados de forma autorizada.

Não é permitida a reprodução, distribuição, modificação ou utilização comercial desses materiais sem autorização, ressalvadas as hipóteses permitidas pela legislação.` },
    { title: '9. LINKS E SERVIÇOS DE TERCEIROS', body: `O site ou os canais digitais da InterClim poderão conter links ou utilizar serviços fornecidos por terceiros.

A InterClim não é responsável pelo conteúdo, funcionamento ou políticas de privacidade de sites e serviços externos.` },
    { title: '10. DISPONIBILIDADE DO SITE', body: `A InterClim busca manter seus canais digitais disponíveis, mas não garante que o site estará permanentemente livre de interrupções, erros ou indisponibilidades.

Manutenções, atualizações, falhas técnicas ou fatores externos podem ocasionar indisponibilidade temporária.` },
    { title: '11. PRIVACIDADE', body: `O tratamento de dados pessoais realizado pela InterClim é explicado em nossa Política de Privacidade.

Ao utilizar nossos canais digitais, recomendamos que o usuário leia também a Política de Privacidade disponível no site.` },
    { title: '12. ALTERAÇÕES DOS TERMOS', body: `A InterClim poderá atualizar estes Termos de Uso periodicamente.

A versão atualizada estará disponível nesta página e passará a valer a partir de sua publicação, salvo quando houver disposição diferente.` },
    { title: '13. LEGISLAÇÃO APLICÁVEL', body: `Estes Termos de Uso serão interpretados de acordo com a legislação brasileira aplicável.` },
    { title: '14. CONTATO', body: `Em caso de dúvidas sobre estes Termos de Uso, entre em contato:

${contact}` },
  ],
};