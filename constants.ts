import { Chapter } from './types';

// BANCO DE IMAGENS ATMOSFÉRICAS E SEGURAS
const SAFE_THEMES = {
  // Dunas / Deserto Cinematográfico
  DESERT: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80", 
  // Céu Estrelado / Via Láctea
  STARS: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80", 
  // Campo de Trigo Dourado
  WHEAT: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80", 
  // Muralha de Pedra Antiga
  STONE: "https://images.unsplash.com/photo-1592504868979-43a99252069e?auto=format&fit=crop&q=80", 
  // Textura de Papel/Papiro
  PAPER: "https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?auto=format&fit=crop&q=80"  
};

interface ChapterContentData {
  title: string;
  subtitle: string;
  verse: string;
  ref: string;
  img: string;
  intro: string[]; 
  theology: string[];
  highlight: string;
  practical_text: string[];
  prayer: string;
  action_spiritual: string;
  action_financial: string;
}

const CONTENT_DB: ChapterContentData[] = [
  {
    title: "O Chamado à Grandeza",
    subtitle: "A Eleição Divina, o Favor Paterno e a Túnica da Distinção",
    verse: "Ora, Israel amava a José mais do que a todos os seus filhos, porque era filho da sua velhice; e fez-lhe uma túnica de várias cores.",
    ref: "Gênesis 37:3",
    img: SAFE_THEMES.PAPER, 
    intro: [
      "A narrativa da vida de José não começa com suas virtudes, mas com uma escolha soberana que antecede suas ações. Em Gênesis 37, somos introduzidos a um drama familiar que reflete tensões teológicas profundas. Jacó, agora renomeado Israel, demonstra um afeto desproporcional por José. O texto hebraico utiliza a expressão 'ben zekunim' (filho da velhice), que carrega não apenas um significado cronológico, mas uma conotação de herança espiritual. José era o filho de Raquel, a mulher amada por quem Jacó trabalhou catorze anos, projetando nele todas as expectativas de um amor idealizado.",
      "A 'túnica de várias cores' (ketonet passim) é o símbolo central deste capítulo. Historicamente, traduzir isso apenas como 'colorida' é uma simplificação. O termo original sugere uma túnica longa, com mangas compridas e ornamentadas, estendendo-se até os tornozelos e pulsos. Na cultura do Antigo Oriente Próximo, homens que trabalhavam no campo usavam túnicas curtas para facilitar o movimento. Uma túnica longa era vestimenta de supervisores, nobres ou príncipes que não realizavam trabalho braçal pesado.",
      "Ao vestir José com tal distinção, Jacó estava, visual e publicamente, elevando o penúltimo filho ao status de primogênito, passando por cima de Rúben, Simeão e Levi. Não era apenas um presente de pai; era uma investidura política dentro do clã. Isso gerou uma ruptura sísmica na estrutura familiar, plantando as sementes de um ódio mortal."
    ],
    theology: [
      "Teologicamente, o capítulo nos confronta com o mistério da Eleição Divina e da Responsabilidade Humana. Deus escolheu José para ser o libertador de sua família, mas os meios pelos quais essa distinção se manifestou envolveram o favoritismo imprudente de um pai. A soberania de Deus muitas vezes opera através, e apesar, das falhas humanas. A túnica marcou José como 'separado', um tema que ecoará por toda a Bíblia: o nazireu, o profeta, e finalmente, o Cristo, que foi separado para uma missão redentora.",
      "Entretanto, a distinção traz consigo o isolamento. A graça que distingue é também a graça que atrai a perseguição. José, em sua juventude, talvez tenha exibido essa túnica com certa ingenuidade ou até orgulho, sem compreender que o favor de Deus não é um escudo contra o sofrimento, mas muitas vezes o convite para ele. A teologia da prosperidade bíblica não é a isenção de problemas, mas a preservação do propósito em meio aos problemas.",
      "O ódio dos irmãos não era apenas ciúme emocional; era uma rejeição à autoridade que a túnica representava. Da mesma forma, o mundo rejeita a autoridade de Cristo e daqueles que carregam Sua marca. José torna-se aqui um 'tipo' de Cristo: amado pelo Pai, mas odiado por seus irmãos, despido de sua glória e lançado à morte para posteriormente salvar os que o perseguiram."
    ],
    highlight: "Não peça a túnica da liderança se não estiver disposto a enfrentar a solidão do poço. O favor de Deus tem um custo elevado: a morte do nosso ego.",
    practical_text: [
      "No mundo corporativo e na gestão de vida, a 'túnica' representa o seu diferencial competitivo, seu talento único ou sua posição de autoridade. Quando você se destaca, você se torna um alvo. A liderança exige uma pele grossa e um coração macio. Muitos desejam a posição de destaque de José, mas poucos suportariam o isolamento que a túnica causou dentro de sua própria casa.",
      "A lição de sabedoria aqui é dupla. Primeiro, para quem está em posição de autoridade (como Jacó): o favoritismo explícito na gestão de equipes ou família é destrutivo. Ele cria silos, ressentimentos e sabota a unidade. Segundo, para quem é favorecido (como José): a humildade deve ser sua veste principal. Se Deus lhe deu um destaque, não o use para diminuir os outros, mas para servir. A túnica não deveria isentar José do trabalho, mas prepará-lo para uma responsabilidade maior."
    ],
    prayer: "Pai Soberano, reconheço que qualquer dom ou destaque em minha vida vem de Ti. Perdoa-me se, em algum momento, usei Tuas bênçãos para alimentar minha vaidade. Ajuda-me a carregar o peso da distinção com humildade profunda. Se a inveja se levantar contra mim, que eu não responda com maldade, mas com a segurança de quem sabe quem é em Ti. Prepara-me para o propósito, custe o que custar.",
    action_spiritual: "Faça um inventário espiritual: Quais dons Deus lhe deu que têm gerado ciúmes ou conflitos? Consagre esses dons hoje, pedindo sabedoria para usá-los com discrição e serviço, não para auto-promoção.",
    action_financial: "Identifique sua 'Vantagem Injusta' ou 'Unique Selling Proposition' (sua túnica) no mercado. O que você faz que o distingue da maioria? Em vez de apenas exibir isso, crie um plano para que esse diferencial resolva problemas reais das pessoas ao seu redor."
  },
  {
    title: "Sonhos Proféticos",
    subtitle: "A Revelação do Destino, a Imaturidade do Mensageiro e o Tempo de Deus",
    verse: "Teve José um sonho, que contou a seus irmãos; por isso o odiaram ainda mais. E disse-lhes: Ouvi, peço-vos, este sonho, que tenho sonhado.",
    ref: "Gênesis 37:5-6",
    img: SAFE_THEMES.STARS,
    intro: [
      "Os sonhos de José são o motor profético de toda a narrativa subsequente. No mundo antigo, sonhos eram considerados mensagens diretas do divino, uma intrusão da eternidade no tempo. José tem dois sonhos. O primeiro é agrícola: feixes de trigo se curvando. O segundo é celestial: o sol, a lua e onze estrelas se curvando. Ambos apontam para a mesma realidade: supremacia e governo.",
      "É crucial notar a progressão. O primeiro sonho trata de sustento (trigo), prefigurando o papel econômico que José desempenharia ao salvar o mundo da fome. O segundo sonho trata de autoridade cósmica e familiar, indicando sua posição política e espiritual. Deus estava revelando o 'fim' da história logo no 'início'. No entanto, a revelação do destino não veio acompanhada do manual de instruções sobre como chegar lá.",
      "José, com dezessete anos, demonstra uma falta de inteligência emocional. Ele corre para contar o sonho aos irmãos que já o odiavam. A verdade dita no momento errado ou para a audiência errada pode ser desastrosa. José tinha a visão certa, mas o timing errado e a sabedoria imatura. Ele confundiu a posse da promessa com a posse imediata da posição."
    ],
    theology: [
      "A teologia da revelação nos ensina que Deus frequentemente nos dá vislumbres do futuro para que tenhamos esperança suficiente para suportar o processo doloroso que virá a seguir. Se José soubesse do poço, da escravidão e da prisão, talvez rejeitasse o sonho. A ignorância do processo é uma misericórdia divina.",
      "O erro de José não foi sonhar, nem acreditar, mas talvez a presunção na comunicação. No entanto, Deus usou até mesmo essa imaturidade (o falar demais) para incitar os irmãos, o que levou à venda de José, o que o levou ao Egito. Vemos a doutrina da Providência: Deus tece os erros humanos, o pecado dos irmãos e a imaturidade de José em um plano mestre de redenção.",
      "A reação dos irmãos ('Lá vem o sonhador, vamos matá-lo e veremos o que será dos seus sonhos') levanta uma questão teológica profunda: Pode o homem frustrar os decretos de Deus? A ironia divina é que, ao tentar matar o sonho vendendo José, os irmãos estavam, na verdade, providenciando o transporte exato para que o sonho se cumprisse. Nada pode deter a mão do Todo-Poderoso."
    ],
    highlight: "O silêncio é o guardião dos grandes propósitos. Um sonho falado prematuramente pode despertar inimigos que ainda deveriam estar dormindo.",
    practical_text: [
      "Na gestão de projetos e na vida pessoal, aprendemos o valor do sigilo estratégico. Nem todos podem celebrar o seu futuro porque estão presos no próprio passado ou na competição do presente. Quando você compartilha uma grande ideia ou meta com pessoas que não têm a capacidade emocional ou espiritual de suportá-la, você convida a sabotagem.",
      "José precisava aprender que a autoridade dada por Deus é confirmada pelo serviço, não pelo anúncio. O verdadeiro líder não precisa anunciar que os outros se curvarão; ele serve de tal maneira que o respeito (a reverência) se torna uma consequência natural. A gestão da informação é tão vital quanto a visão em si. Aprenda a incubar seus projetos. Maria, mãe de Jesus, 'guardava todas estas coisas no coração'. José falava; Maria guardava. Há um tempo para cada coisa."
    ],
    prayer: "Senhor Deus das revelações, obrigado por plantares sonhos em meu coração. Peço perdão pelas vezes em que falei demais, buscando aprovação humana para uma promessa divina. Põe um guarda na minha boca. Ensina-me a diferença entre o tempo de receber a visão e o tempo de vivê-la. Que eu tenha paciência para suportar o processo de amadurecimento necessário para carregar o peso do sonho que me deste.",
    action_spiritual: "Pratique o jejum de palavras esta semana. Se Deus lhe mostrar algo sobre seu futuro ou lhe der uma vitória, não poste, não conte, não publique imediatamente. Guarde isso em oração por 7 dias e veja como isso fortalece sua intimidade com Deus.",
    action_financial: "Escreva sua 'Visão de 10 Anos' para sua vida financeira. Seja audacioso como o sonho de José (governar, influenciar). Mas, estrategicamente, não compartilhe isso com colegas de trabalho ou competidores. Comece a trabalhar silenciosamente nas competências necessárias para chegar lá."
  },
  {
    title: "A Traição e o Poço",
    subtitle: "A Desconstrução do Ego e o Início do Processo",
    verse: "E aconteceu que, chegando José a seus irmãos, tiraram-lhe a túnica... e lançaram-no na cova; a cova estava vazia, não havia água nela.",
    ref: "Gênesis 37:23-24",
    img: SAFE_THEMES.STONE,
    intro: [
      "A jornada de José muda drasticamente de Dotã para o Egito. Enviado pelo pai para checar o bem-estar dos irmãos, José caminha em obediência para uma armadilha. Ao avistá-lo, os irmãos conspiram. A violência da cena é palpável: eles o despem. A túnica, objeto de seu orgulho e da inveja deles, é arrancada brutalmente. Sem a túnica, José é apenas um jovem vulnerável.",
      "O poço (ou cisterna) era um buraco escavado na rocha para armazenar água da chuva. O texto enfatiza: 'não havia água nela'. Se houvesse, ele teria se afogado. Deus permitiu o poço, mas secou a água. É o lugar da contenção, da escuridão e da impotência. José grita (como sabemos mais tarde em Gênesis 42:21), mas eles se sentam para comer pão, ignorando a angústia de sua alma. A frieza dos irmãos é aterrorizante."
    ],
    theology: [
      "O poço representa o despojamento necessário. Para Deus usar José como governador, primeiro precisava tirar dele a identidade de 'filho mimado'. A túnica precisava sair para que o caráter pudesse aparecer. O poço é o lugar onde nossos recursos externos falham e somos deixados apenas com nossa fé nua.",
      "Cristologicamente, vemos a Kénosis (o esvaziamento). Jesus foi despido de sua glória, rejeitado pelos seus e lançado na cova da morte. Mas assim como o poço não foi o fim de José, o túmulo não foi o fim de Jesus. O sofrimento do justo é, misteriosamente, a ferramenta de Deus para a salvação. Deus não impediu que jogassem José no poço, mas estava com ele dentro do poço, preservando sua vida.",
      "Judá sugere vender José em vez de matá-lo. Embora movido pela ganância ('que lucro teremos?'), Deus usa a motivação torpe de Judá para preservar a vida de José. A soberania divina manipula até as intenções malignas dos homens para cumprir Seus decretos de vida."
    ],
    highlight: "Deus permite que percam a túnica para que ganhem a alma. O que parece ser o fim da linha para o homem é apenas o início do treinamento de Deus.",
    practical_text: [
      "Momentos de 'poço' na vida profissional e financeira são inevitáveis: a demissão inesperada, a falência, a traição de um sócio. A primeira reação é o pânico. Mas o princípio de gestão aqui é a resiliência estóica baseada na fé. No poço, você não pode se mover lateralmente; você só pode olhar para cima.",
      "Muitas vezes, nossa identidade está ligada ao nosso cargo (a túnica). Quando perdemos o emprego, sentimos que perdemos quem somos. O poço nos ensina que somos mais do que nossa posição social. José, nu no poço, ainda era o escolhido de Deus. Seu valor intrínseco não mudou quando seu status externo desmoronou. Aprenda a separar seu 'eu' do seu 'cargo'. Cargos são temporários; o caráter e o propósito são eternos."
    ],
    prayer: "Deus de toda consolação, clamo a Ti do fundo do meu poço. Sinto-me despido, exposto e traído. Mas escolho crer que esta cisterna não é meu túmulo, é apenas um túnel. Obrigado por secar as águas para que eu não me afogasse. Ajuda-me a não guardar ódio dos que me empurraram, mas a focar em Tua mão que irá me içar no tempo certo.",
    action_spiritual: "Leia o Salmo 40 e o Salmo 88. Escreva uma carta de lamento a Deus, expressando toda a sua dor, sem filtros. Depois, termine a carta com uma declaração de confiança na providência divina, mesmo sem ver a saída ainda.",
    action_financial: "Se você está em um momento de 'poço' financeiro (dívidas, desemprego), a ação prática é 'Estancar a Sangria'. Assim como o poço era um lugar de parada forçada, pare todos os gastos não essenciais imediatamente. Faça um plano de sobrevivência de emergência. Não tente manter as aparências (a túnica) quando a realidade mudou."
  },
  {
    title: "Vendido como Mercadoria",
    subtitle: "A Desumanização, o Valor de Mercado e a Economia da Providência",
    verse: "Passando, pois, os mercadores midianitas, tiraram e alçaram a José da cova, e venderam José por vinte moedas de prata aos ismaelitas.",
    ref: "Gênesis 37:28",
    img: SAFE_THEMES.DESERT, 
    intro: [
      "José é içado da cova apenas para ser acorrentado. A transação comercial é fria e calculista. Vinte moedas de prata era o preço médio de um escravo naquela época (conforme o Código de Hamurabi e registros bíblicos em Levítico). O filho amado, que valia tudo para o pai, agora é precificado como uma ferramenta de trabalho barata. Ele se torna um ativo no balanço patrimonial de uma caravana de especiarias.",
      "Imagine a caminhada rumo ao Egito. José, amarrado atrás de camelos, vendo as colinas de Canaã desaparecerem. Ele passa de herdeiro a mercadoria. A desumanização é total. Ele perdeu seu nome, sua herança, sua língua e sua liberdade. Mas ele levava consigo algo que ninguém podia comprar ou vender: a presença de Deus e os sonhos que estavam gravados em seu espírito."
    ],
    theology: [
      "Este episódio nos ensina sobre a 'Economia da Providência'. Para os irmãos, era uma venda para se livrar de um problema. Para os ismaelitas, era uma oportunidade de lucro (arbitragem: comprar barato em Canaã, vender caro no Egito). Mas para Deus, era o sistema de transporte logístico para levar o salvador do mundo para o local estratégico de sua atuação.",
      "Deus usou o comércio internacional da época para posicionar Seu servo. Às vezes, somos movidos por forças econômicas que parecem aleatórias ou cruéis (o mercado, a inflação, transferências de emprego), mas por trás da 'Mão Invisível' do mercado, está a Mão Visível de Deus guiando a história.",
      "O paralelo com Judas Iscariotes é inevitável. Jesus foi vendido por 30 moedas de prata. O preço da traição foi o preço da nossa redenção. O valor que o mundo dá aos servos de Deus é irrelevante diante do valor que Deus coloca neles."
    ],
    highlight: "O mundo pode colocar uma etiqueta de preço em você, mas só Deus sabe o seu verdadeiro valor. José foi vendido como escravo, mas chegou ao Egito como um rei disfarçado.",
    practical_text: [
      "Vivemos em uma sociedade que tenta mercantilizar tudo, inclusive pessoas. No ambiente de trabalho, você pode se sentir apenas um número, um recurso descartável ('Recursos Humanos'). A lição de José é manter sua dignidade interna quando a validação externa desaparece.",
      "Financeiramente, aprendemos sobre valor versus preço. Os irmãos venderam um 'primeiro-ministro' pelo preço de um escravo. Eles fizeram um péssimo negócio porque não reconheceram o valor potencial de José. Não subestime o valor das pessoas ao seu redor. Não trate conexões, funcionários ou parceiros como mercadoria descartável. Além disso, entenda que momentos de baixa valorização no mercado não definem seu potencial futuro. Você pode estar ganhando '20 moedas' hoje, mas se for fiel e desenvolver sua gestão, governará sobre os tesouros do Egito amanhã."
    ],
    prayer: "Senhor, quando me sinto desvalorizado, lembra-me de que fui comprado não com prata ou ouro, mas com o sangue precioso de Cristo. O mundo pode tentar me vender barato, mas eu sei o meu valor em Ti. Ajuda-me a caminhar com dignidade mesmo quando as circunstâncias tentam me humilhar. Usa as transações da vida, justas ou injustas, para me levar ao meu destino.",
    action_spiritual: "Ore pelos que o prejudicaram ou 'venderam' (traíram sua confiança). Libere o perdão, entendendo que eles foram apenas instrumentos involuntários para o seu deslocamento profético.",
    action_financial: "Faça uma auto-avaliação de mercado, mas com perspectiva de fé. Se você está sendo subremunerado (vendido barato), não se revolte; prepare-se. Use o tempo atual para adquirir habilidades que aumentarão seu valor intrínseco. Invista em você mesmo quando ninguém mais investir."
  },
  {
    title: "A Casa de Potifar",
    subtitle: "A Mordomia Radical e a Prosperidade no Lugar Errado",
    verse: "O Senhor estava com José, e foi homem próspero; e estava na casa de seu senhor egípcio... Potifar viu que o Senhor era com ele.",
    ref: "Gênesis 39:2-3",
    img: SAFE_THEMES.STONE,
    intro: [
      "José chega ao epicentro da civilização antiga: o Egito. Ele é comprado por Potifar, capitão da guarda, um oficial de alta patente (possivelmente chefe da segurança pessoal do Faraó ou chefe dos executores). De repente, o jovem pastor hebreu está dentro de uma complexa mansão egípcia, cheia de novos idiomas, deuses estranhos e tecnologias administrativas avançadas.",
      "O texto bíblico faz uma afirmação chocante: 'José foi homem próspero'. Como um escravo pode ser próspero? Ele não possuía nada, nem mesmo o próprio corpo. Aqui, a Bíblia redefine prosperidade. Prosperidade não é acúmulo de bens, é a presença dinâmica de Deus gerando eficácia em tudo o que se faz. José não ficou amargurado, não entrou em greve, nem sabotou o patrão. Ele decidiu ser o melhor escravo que o Egito já viu.",
      "Ele aprendeu egípcio, aprendeu matemática, aprendeu administração de recursos, agricultura do Nilo e gestão de pessoal. A casa de Potifar foi a Universidade de Gestão de José."
    ],
    theology: [
      "A doutrina da 'Graça Comum' e da 'Bênção por Associação' é evidente. Potifar, um pagão, foi abençoado por causa de José. A presença de Deus em um crente transborda e afeta o ambiente secular ao redor. A luz não brilha para si mesma, ela ilumina a casa toda.",
      "José praticou o que Paulo ensinaria séculos depois: 'Tudo o que fizerdes, fazei-o de todo o coração, como ao Senhor e não aos homens' (Colossenses 3:23). A ética de trabalho de José era teológica. Ele servia a Potifar bem porque, em última análise, estava servindo a Yahweh. Ele santificou o trabalho secular através de uma postura sagrada.",
      "Deus estava treinando José. Para governar o Egito, ele precisava conhecer o Egito. Deus não o colocou numa cabana pobre, mas na casa de um oficial de elite. Era um estágio supervisionado pela Providência."
    ],
    highlight: "Prosperidade bíblica não é ter tudo, é Deus estar em tudo o que você tem. José era escravo, mas era próspero, porque a bênção não estava no que ele possuía, mas em quem ele era.",
    practical_text: [
      "A lição de carreira aqui é brutal e necessária: Seja excelente onde você está, mesmo que não queira estar lá. Muitos esperam o 'emprego dos sonhos' para começar a dar o seu melhor. José deu o seu melhor no pesadelo da escravidão e isso o promoveu.",
      "Princípio da Confiança e Delegação: Potifar entregou tudo na mão de José. Como você ganha a confiança de um superior? Entregando resultados consistentes e demonstrando integridade absoluta. José geria o budget, o pessoal e a logística. Ele se tornou indispensável. Torne-se indispensável resolvendo problemas que seu chefe não quer resolver.",
      "Aplicação Financeira: Aprenda a gerir o dinheiro dos outros (empresa, clientes) com mais zelo do que o seu próprio. A fidelidade no alheio é o teste para a posse do próprio (Lucas 16:12). Se você não é fiel como empregado, não está pronto para ser empresário."
    ],
    prayer: "Senhor, eu Te convido para o meu ambiente de trabalho. Que a Tua presença em mim seja tão real que até aqueles que não Te conhecem possam perceber que há algo diferente. Capacita-me a trabalhar com excelência sobrenatural. Ajuda-me a servir meus líderes e clientes com integridade, transformando meu local de trabalho em um campo de missão e prosperidade.",
    action_spiritual: "Chegue 10 minutos mais cedo no trabalho esta semana e ore secretamente abençoando a empresa, seu chefe e seus colegas. Peça a Deus estratégias para melhorar o ambiente.",
    action_financial: "Identifique um processo ineficiente no seu trabalho ou negócio e proponha/implemente uma solução que economize recursos ou gere mais lucro. Mostre proatividade sem pedir nada em troca imediato. Plante a semente da excelência."
  }
];

const generateRemainingChapters = (): ChapterContentData[] => {
  const titlesAndThemes = [
    { t: "A Tentação Sexual", s: "A Batalha pela Integridade Íntima", v: "Como, pois, faria eu este grande mal, e pecaria contra Deus?", r: "Gn 39:9", i: SAFE_THEMES.STONE },
    { t: "A Acusação Injusta", s: "Quando Fazer o Bem Traz o Mal", v: "O senhor de José tomou-o, e lançou-o no cárcere.", r: "Gn 39:20", i: SAFE_THEMES.STONE },
    { t: "Deus na Masmorra", s: "A Onipresença Divina no Sofrimento", v: "O Senhor, porém, estava com José... e deu-lhe graça.", r: "Gn 39:21", i: SAFE_THEMES.STONE },
    { t: "O Copeiro e o Padeiro", s: "Servindo em Meio à Própria Dor", v: "Por que estão hoje tristes os vossos semblantes?", r: "Gn 40:7", i: SAFE_THEMES.STONE },
    { t: "O Esquecimento Humano", s: "Lidando com a Decepção e a Ingratidão", v: "Mas o copeiro-mor não se lembrou de José, antes esqueceu-se dele.", r: "Gn 40:23", i: SAFE_THEMES.DESERT },
    { t: "A Escola da Paciência", s: "O Kairós de Deus vs o Chronos Humano", v: "E aconteceu que, ao fim de dois anos inteiros...", r: "Gn 41:1", i: SAFE_THEMES.DESERT },
    { t: "O Sonho de Faraó", s: "A Crise Nacional e a Soberania sobre os Impérios", v: "E eis que subiam do rio sete vacas, formosas à vista e gordas.", r: "Gn 41:2", i: SAFE_THEMES.STARS },
    { t: "O Fracasso dos Magos", s: "A Limitação da Sabedoria Secular", v: "Ninguém havia que os interpretasse a Faraó.", r: "Gn 41:8", i: SAFE_THEMES.STONE },
    { t: "A Oportunidade Divina", s: "Do Cárcere ao Palácio em Um Dia", v: "Então mandou Faraó chamar a José, e o fizeram sair logo do cárcere.", r: "Gn 41:14", i: SAFE_THEMES.STONE },
    { t: "A Barbearia Real", s: "Apresentação Pessoal e Preparo Cultural", v: "E barbeou-se e mudou as suas vestes, e apresentou-se a Faraó.", r: "Gn 41:14", i: SAFE_THEMES.PAPER },
    { t: "Não Está em Mim", s: "A Humildade Diante da Grandeza", v: "Isso não está em mim; Deus dará resposta de paz a Faraó.", r: "Gn 41:16", i: SAFE_THEMES.STARS },
    { t: "A Interpretação Soberana", s: "Discernimento Estratégico do Futuro", v: "O que Deus há de fazer, mostrou-o a Faraó.", r: "Gn 41:25", i: SAFE_THEMES.STARS },
    { t: "O Plano de Gestão", s: "A Solução é Maior que o Problema", v: "Faça isso Faraó... e ponha governadores sobre a terra.", r: "Gn 41:34", i: SAFE_THEMES.WHEAT },
    { t: "O Princípio da Quinta Parte", s: "A Economia da Salvação e Reserva", v: "E tome a quinta parte da terra do Egito nos sete anos de fartura.", r: "Gn 41:34", i: SAFE_THEMES.WHEAT },
    { t: "A Promoção Exaltada", s: "Autoridade Conferida por Deus", v: "Tu estarás sobre a minha casa, e por tua boca se governará todo o meu povo.", r: "Gn 41:40", i: SAFE_THEMES.STONE },
    { t: "O Anel e o Colar", s: "Recursos e Símbolos de Poder", v: "E tirou Faraó o anel da sua mão e o pôs na mão de José.", r: "Gn 41:42", i: SAFE_THEMES.STONE },
    { t: "Zafenate-Paneia", s: "Uma Nova Identidade e Cidadania", v: "E chamou Faraó o nome de José: Zafenate-Paneia.", r: "Gn 41:45", i: SAFE_THEMES.PAPER },
    { t: "A Família no Egito", s: "Graça e Frutificação em Terra Estranha", v: "E nasceram a José dois filhos... Manassés e Efraim.", r: "Gn 41:50", i: SAFE_THEMES.WHEAT },
    { t: "Manassés: O Esquecimento", s: "A Cura da Memória Traumática", v: "Porque dizia: Deus me fez esquecer de todo o meu trabalho, e de toda a casa de meu pai.", r: "Gn 41:51", i: SAFE_THEMES.DESERT },
    { t: "Efraim: A Dupla Honra", s: "Prosperando no Lugar da Aflição", v: "Porque dizia: Deus me fez crescer na terra da minha aflição.", r: "Gn 41:52", i: SAFE_THEMES.WHEAT },
    { t: "Os Anos de Abundância", s: "Trabalho Incansável na Bonança", v: "E ajuntou José muitíssimo trigo, como a areia do mar.", r: "Gn 41:49", i: SAFE_THEMES.WHEAT },
    { t: "A Chegada da Fome", s: "A Crise Revela o Preparo", v: "E começaram a vir os sete anos de fome, como José tinha dito.", r: "Gn 41:54", i: SAFE_THEMES.DESERT },
    { t: "A Provisão Mundial", s: "O Egito como Celeiro das Nações", v: "E todo o mundo ia ao Egito, a José, para comprar.", r: "Gn 41:57", i: SAFE_THEMES.DESERT },
    { t: "O Passado Bate à Porta", s: "O Reencontro com a Dor", v: "José conheceu seus irmãos, mas eles não o conheceram.", r: "Gn 42:8", i: SAFE_THEMES.STONE },
    { t: "O Teste de Caráter", s: "Sondando Corações e Motivações", v: "Vós sois espias; para ver a nudez da terra viestes.", r: "Gn 42:9", i: SAFE_THEMES.STONE },
    { t: "A Consciência Desperta", s: "A Culpa Não Resolvida", v: "Na verdade somos culpados acerca de nosso irmão... por isso nos sobreveio esta angústia.", r: "Gn 42:21", i: SAFE_THEMES.STONE },
    { t: "Simeão Retido", s: "Pressão para a Verdade", v: "E tomou a Simeão, e amarrou-o perante os seus olhos.", r: "Gn 42:24", i: SAFE_THEMES.STONE },
    { t: "Dinheiro no Saco", s: "A Graça que Perturba", v: "E o meu dinheiro foi devolvido; ei-lo aqui no meu saco.", r: "Gn 42:28", i: SAFE_THEMES.WHEAT },
    { t: "O Dilema de Jacó", s: "O Apego e o Medo da Perda", v: "A mim me tendes desfilhado... todas estas coisas vieram sobre mim.", r: "Gn 42:36", i: SAFE_THEMES.DESERT },
    { t: "A Garantia de Judá", s: "Liderança Sacrificial Emerge", v: "Eu serei fiador por ele; da minha mão o requererás.", r: "Gn 43:9", i: SAFE_THEMES.PAPER },
    { t: "O Retorno com Benjamim", s: "Encarando o Medo", v: "Tomai, pois, a vosso irmão, e levantai-vos, e voltai ao varão.", r: "Gn 43:13", i: SAFE_THEMES.DESERT },
    { t: "O Banquete de José", s: "A Mesa da Comunhão Estranha", v: "E assentaram-se diante dele... e maravilhavam-se os homens entre si.", r: "Gn 43:33", i: SAFE_THEMES.STONE },
    { t: "A Emoção Contida", s: "O Coração que Anseia Perdoar", v: "E José apressou-se, porque as suas entranhas comoveram-se... e chorou ali.", r: "Gn 43:30", i: SAFE_THEMES.STONE },
    { t: "A Taça de Prata", s: "A Última Prova de Lealdade", v: "Pôs o meu copo, o copo de prata, na boca do saco do mais novo.", r: "Gn 44:2", i: SAFE_THEMES.WHEAT },
    { t: "O Julgamento Aparente", s: "A Justiça e a Misericórdia", v: "Que falaremos ao meu senhor? Deus achou a iniquidade de teus servos.", r: "Gn 44:16", i: SAFE_THEMES.STONE },
    { t: "A Intercessão de Judá", s: "A Substituição Vicária", v: "Fique teu servo em lugar do moço por escravo de meu senhor.", r: "Gn 44:33", i: SAFE_THEMES.STONE },
    { t: "Eu Sou José", s: "A Grande Revelação e o Choque", v: "Então José não se podia conter... e disse: Eu sou José.", r: "Gn 45:1-3", i: SAFE_THEMES.WHEAT },
    { t: "A Teologia da Soberania", s: "Deus Estava no Controle de Tudo", v: "Agora, pois, não vos entristeçais... porque para conservação da vida, Deus me enviou adiante de vós.", r: "Gn 45:5", i: SAFE_THEMES.STARS },
    { t: "O Propósito do Sofrimento", s: "O Mal Transformado em Bem", v: "Não fostes vós que me enviastes para cá, senão Deus.", r: "Gn 45:8", i: SAFE_THEMES.STARS },
    { t: "O Convite Real", s: "A Generosidade Abundante", v: "E vinde a mim; e dar-vos-ei o melhor da terra do Egito.", r: "Gn 45:18", i: SAFE_THEMES.WHEAT },
    { t: "O Espírito de Jacó Revive", s: "A Esperança Restaurada", v: "E vendo os carros... o espírito de Jacó, seu pai, reviveu.", r: "Gn 45:27", i: SAFE_THEMES.DESERT },
    { t: "Deus em Berseba", s: "Confirmação Divina para a Mudança", v: "Não temas descer ao Egito, porque ali te farei uma grande nação.", r: "Gn 46:3", i: SAFE_THEMES.STARS },
    { t: "O Reencontro em Gósen", s: "Lágrimas de Restauração", v: "E apresentou-se a ele, e lançou-se ao seu pescoço, e chorou sobre o seu pescoço longo tempo.", r: "Gn 46:29", i: SAFE_THEMES.WHEAT },
    { t: "Pastores Abomináveis", s: "Identidade Cultural e Separação", v: "Porque todo o pastor de ovelhas é abominação aos egípcios.", r: "Gn 46:34", i: SAFE_THEMES.DESERT },
    { t: "Jacó Abençoa Faraó", s: "O Menor Abençoa o Maior", v: "E Jacó abençoou a Faraó, e saiu da presença de Faraó.", r: "Gn 47:7", i: SAFE_THEMES.STONE },
    { t: "A Política Agrária", s: "Gestão de Crise e Centralização", v: "E comprou José toda a terra do Egito para Faraó.", r: "Gn 47:20", i: SAFE_THEMES.WHEAT },
    { t: "O Juramento Final", s: "Fé na Promessa Futura", v: "Não me enterres no Egito... mas jazer com meus pais.", r: "Gn 47:29-30", i: SAFE_THEMES.DESERT },
    { t: "A Bênção de Efraim e Manassés", s: "Cruzando as Mãos Profeticamente", v: "Mas Israel estendeu a sua mão direita e a pôs sobre a cabeça de Efraim, que era o menor.", r: "Gn 48:14", i: SAFE_THEMES.PAPER },
    { t: "O Perdão Definitivo", s: "Superando o Medo da Retaliação", v: "Vós bem intentastes mal contra mim; porém Deus o intentou para bem.", r: "Gn 50:20", i: SAFE_THEMES.WHEAT },
    { t: "A Morte de José", s: "A Esperança da Visitação", v: "Certamente Deus vos visitará, e fareis transportar os meus ossos daqui.", r: "Gn 50:25", i: SAFE_THEMES.DESERT }
  ];

  return titlesAndThemes.map(item => ({
    title: item.t,
    subtitle: item.s,
    verse: item.v,
    ref: item.r,
    img: item.i,
    intro: [
      `Chegamos a um momento decisivo em '${item.t}'. A narrativa bíblica aqui desacelera para nos mostrar os detalhes da providência. ${item.s} não é apenas um título, é a realidade vivida por José. O texto de ${item.r} nos convida a olhar além da superfície dos eventos históricos.`,
      "Neste ponto da história, vemos a tensão entre o plano humano e o decreto divino atingir seu ápice. Os personagens são forçados a confrontar suas limitações, seus medos e suas esperanças. O cenário do Egito serve como o pano de fundo perfeito para demonstrar que Deus não está limitado por geografia ou cultura.",
      "A profundidade deste episódio reside na maneira como Deus usa circunstâncias aparentemente comuns ou adversas para tecer o destino de uma nação inteira. Nada é desperdiçado na economia de Deus."
    ],
    theology: [
      "A perspectiva teológica aqui é rica e multifacetada. Vemos a doutrina da Soberania de Deus operando em harmonia com a responsabilidade moral humana. Deus não anula a vontade dos homens, mas governa sobre ela de forma misteriosa para cumprir Seus propósitos redentivos.",
      "Podemos observar também sombras de Cristo (tipologia). Assim como José passou por este processo de humilhação e exaltação, ou de mediação e provisão, vemos prefigurado o ministério de Jesus. A graça demonstrada aqui não é 'barata'; ela custou anos de sofrimento, paciência e fé inabalável.",
      "A lição teológica central é que a fidelidade de Deus à Sua aliança com Abraão, Isaque e Jacó permanece firme, mesmo quando os descendentes dessa aliança estão falhando ou sofrendo. A fidelidade de Deus depende de Seu próprio caráter, não das circunstâncias externas."
    ],
    highlight: `Em ${item.t}, aprendemos que o que o homem projeta, Deus inspeciona; e o que Deus decreta, o homem finalmente aceita. A soberania divina é o travesseiro onde a fé descansa.`,
    practical_text: [
      "Trazendo para a prática diária e gestão: A vida de José neste capítulo nos ensina sobre resiliência estratégica. Não é apenas 'aguentar', é 'preparar-se enquanto aguenta'. Seja na gestão de recursos, na liderança de pessoas ou na administração da própria casa, os princípios de integridade e visão de longo prazo são inegociáveis.",
      "Financeiramente e profissionalmente, este texto nos desafia a olhar para as crises não como finais, mas como oportunidades de reestruturação. José nunca desperdiçou uma crise. Ele usou a fome para fortalecer o Egito; ele usou a prisão para fazer networking. A sabedoria está em discernir o tempo: há tempo de plantar, tempo de colher e tempo de armazenar.",
      "Por fim, a aplicação relacional é forte. Nossas ações hoje ecoarão no futuro. A maneira como tratamos as pessoas quando estamos 'por cima' (ou por baixo) define nosso legado. A verdadeira prosperidade inclui a saúde dos nossos relacionamentos e a paz da nossa consciência diante de Deus e dos homens."
    ],
    prayer: "Deus Eterno e Soberano, diante deste texto sagrado, eu me humilho. Vejo Tua mão guiando a história de José e peço que guies a minha também. Dá-me a sabedoria para interpretar os tempos em que vivo. Que eu não seja apenas um ouvinte da palavra, mas um praticante fiel, aplicando esses princípios eternos nas minhas finanças, na minha família e na minha vida espiritual. Em nome de Jesus, Amém.",
    action_spiritual: "Dedique tempo hoje para meditar na soberania de Deus sobre os 'acasos' da sua vida. Identifique eventos passados que pareciam ruins, mas que Deus usou para o bem.",
    action_financial: "Revise sua estratégia de longo prazo. Você está vivendo apenas para o consumo imediato ou está construindo 'silos' (reservas e investimentos) para o futuro e para abençoar gerações?"
  }));
};

const FULL_DB = [...CONTENT_DB, ...generateRemainingChapters()];

export const CHAPTERS: Chapter[] = FULL_DB.map((data, index) => ({
  id: index + 1,
  title: data.title,
  subtitle: data.subtitle,
  verse: data.verse,
  verseReference: data.ref,
  image: data.img,
  intro: data.intro, 
  sections: [
    { type: 'paragraph', content: data.intro }, 
    { type: 'subtitle', content: "Exegese & Teologia Profunda" },
    { type: 'paragraph', content: data.theology }, 
    { type: 'highlight', content: data.highlight },
    { type: 'quote', content: data.verse },
    { type: 'lesson-box', content: data.practical_text } 
  ],
  prayer: data.prayer,
  action: {
    financial: data.action_financial,
    spiritual: data.action_spiritual,
    description: "Aplicação Diária"
  }
}));