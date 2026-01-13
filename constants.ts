
import { Chapter } from './types';

const SAFE_THEMES = {
  PAPIRO: "https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?auto=format&fit=crop&q=80",
  SONHOS: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80",
  DESERTO: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80",
  PRISAO: "https://images.unsplash.com/photo-1592504868979-43a99252069e?auto=format&fit=crop&q=80",
  FARTURA: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80",
  EGITO: "https://images.unsplash.com/photo-1599668045963-c35d4872cb04?auto=format&fit=crop&q=80"
};

const generateHyperRobustChapters = (): Chapter[] => {
  const chapters: Chapter[] = [];

  const baseDetailedChapters = [
    {
      title: "O Código da Túnica",
      subtitle: "Marca Pessoal, Identidade e o Peso da Diferenciação",
      verse: "Ora, Israel amava a José mais do que a todos os seus filhos... e fez-lhe uma túnica de várias cores.",
      ref: "Gênesis 37:3",
      img: "https://zygyapadihekebhhbges.supabase.co/storage/v1/object/sign/jose%20do%20egito/crie_uma_imagem_ilustrativa_em_estilo_b_blico.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85NDUyOTA3Yi0zMWRmLTQ2ZTMtOTA4NS03OGQ4MjdmYmIyMmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJqb3NlIGRvIGVnaXRvL2NyaWVfdW1hX2ltYWdlbV9pbHVzdHJhdGl2YV9lbV9lc3RpbG9fYl9ibGljby5qcGVnIiwiaWF0IjoxNzY4MzQ3NTE4LCJleHAiOjE5MjYwMjc1MTh9.WqR8rGsuW6QG54926BHqG8vuceuzoWRNccoxV1_MSEA",
      intro: "A túnica de José não era apenas um agasalho; no hebraico 'ketonet passim', ela simbolizava uma vestimenta de realeza ou de alguém que não exercia trabalho braçal. Ao entregar essa túnica, Jacó não estava apenas dando um presente, estava alterando a hierarquia sucessória da maior família daquela região. Este capítulo analisa como a sua 'túnica' (sua marca e propósito) pode ser o gatilho tanto para o seu sucesso quanto para a perseguição que você enfrentará.",
      theology: "No plano teológico, a túnica representa a eleição soberana. Assim como Cristo foi revestido de glória, José foi revestido de um favor que ele não comprou, mas recebeu. Estudiosos sugerem que as 'várias cores' indicavam uma técnica de tecelagem complexa disponível apenas para a elite de Canaã. Isso nos ensina que o favor de Deus muitas vezes nos coloca em evidência antes mesmo de estarmos prontos para o palco, exigindo uma maturidade emocional que José ainda estava por desenvolver.",
      management: "Sob a ótica da gestão, a túnica é o que chamamos hoje de 'Unique Selling Proposition' (Proposta Única de Valor). Se você é igual a todos, você é uma commodity. José foi diferenciado pela marca que seu pai lhe impôs. A lição aqui é sobre 'Gestão de Stakeholders': Jacó falhou ao não comunicar a estratégia por trás da escolha, gerando um clima organizacional tóxico entre os irmãos. Para líderes, o favoritismo sem meritocracia clara é o veneno que destrói equipes.",
      finance: "No âmbito financeiro, a túnica representa o Ativo Intangível. Sua reputação e sua aparência de competência são ativos que abrem portas antes do seu capital entrar. Investir na sua apresentação e na sua educação (sua túnica intelectual) é o investimento com o maior ROI (Retorno sobre Investimento) possível. José começou sua jornada com um ativo que não podia ser roupado: a consciência de quem ele era.",
      lesson: "Nunca diminua o brilho da sua túnica para que os outros não se sintam ofuscados. Aprenda, no entanto, a circular entre os que não têm a mesma vestimenta sem parecer arrogante. A verdadeira liderança é carregar a distinção com a humildade de um servo. Se você está sendo perseguido hoje, verifique se não é porque sua 'túnica' está brilhando demais para olhos medíocres.",
      spiritual: "Hoje, identifique três áreas onde Deus te deu um favor 'não merecido'. Agradeça por elas e peça sabedoria para não usar esses dons para humilhar o próximo.",
      financialAction: "Analise sua imagem profissional. Ela comunica autoridade ou desleixo? Reserve um valor este mês para investir em um livro ou curso que eleve seu status técnico.",
      prayer: "Eterno Deus, eu Te agradeço pela túnica de favor que colocaste sobre mim. Reconheço que meus talentos vêm de Ti. Blinda meu coração contra a soberba e dá-me a resiliência de José para suportar os olhares de inveja enquanto sigo o Teu chamado. Que minha identidade esteja firmada em quem Tu dizes que eu sou, e não no que eu possuo. Amém."
    },
    {
      title: "O Protocolo do Sonhador",
      subtitle: "Visão Estratégica e a Antecipação de Cenários Futuros",
      verse: "Ouvi, peço-vos, este sonho que tenho sonhado: Eis que estávamos atando molhos no meio do campo...",
      ref: "Gênesis 37:6-7",
      img: SAFE_THEMES.SONHOS,
      intro: "Sonhar não é um ato passivo; para José, os sonhos eram downloads de inteligência estratégica. O primeiro sonho envolvia produtividade agrícola (molhos de trigo), e o segundo, cosmologia e política (astros). José estava recebendo o plano de negócios da sua vida antes mesmo de ter um emprego. Este capítulo mergulha na necessidade de ter uma visão que vá além do horizonte visível e como gerenciar essa visão sem se tornar um alvo fácil.",
      theology: "Biblicamente, o sonho de José é a confirmação do Pacto Abraâmico se desdobrando em uma escala individual. Enquanto seus irmãos viam apenas o dia a dia do pastoreio, José via a economia do trigo. O trigo seria o que salvaria o mundo da fome anos depois. Isso nos mostra que Deus nos dá lampejos do fim para que tenhamos força para suportar o meio. A teologia aqui é a da Providência: nada é por acaso, e a visão é o combustível da perseverança.",
      management: "Em termos de governança, José cometeu um erro clássico: 'Over-sharing' (compartilhamento excessivo). Ele entregou a visão para quem não tinha interesse no sucesso dele. Líderes precisam entender o conceito de 'Segmentação de Informação'. Nem todo mundo que senta à sua mesa tem estômago para ouvir sobre o seu banquete futuro. A visão estratégica exige um ambiente de confiança que José ainda não possuía. Aprenda a escrever sua visão e guardá-la até encontrar os conselheiros certos.",
      finance: "Financeiramente, o sonho com os molhos de trigo trata de 'Escalabilidade'. José viu o trigo dele se levantando enquanto os outros se curvavam. Isso aponta para a criação de sistemas de renda que trabalham por você. O trigo representa o sustento e a moeda de troca da época. A lição financeira é: pare de focar apenas no pastoreio (trabalho braçal imediato) e comece a plantar seus próprios molhos (sistemas de renda passiva).",
      lesson: "A distância entre o seu sonho e a sua realidade é chamada de 'Processo'. O erro de José foi achar que o sonho era para o dia seguinte. Sonhos grandes exigem preparações grandes. Se o seu sonho assusta as pessoas ao seu redor, talvez ele seja grande o suficiente. O segredo é ter a visão de um gigante, mas a disciplina de um servo.",
      spiritual: "Peça a Deus que Ele restaure sua capacidade de sonhar. Anote tudo o que vier ao seu coração, mesmo que pareça impossível agora.",
      financialAction: "Defina sua meta de liberdade financeira. Qual é o 'molho de trigo' que você vai plantar hoje para colher daqui a 5 ou 10 anos?",
      prayer: "Senior da Glória, obrigado por expandir minha visão. Retira as escamas dos meus olhos para que eu enxergue as oportunidades que o mundo ignora. Dá-me a prudência de José para saber com quem compartilhar meus planos e a fé inabalável para não desistir quando a realidade parecer contrária ao sonho. Eu decido crer na Tua palavra acima das circunstâncias. Amém."
    },
    {
      title: "O Vale da Sombra e da Traição",
      subtitle: "Resiliência Psicológica no Ponto de Ruptura",
      verse: "E viram-no de longe... e conspiraram contra ele para o matarem.",
      ref: "Gênesis 37:18",
      img: SAFE_THEMES.DESERTO,
      intro: "De filho favorito a vítima de uma tentativa de fratricídio. José foi despido de sua túnica e lançado em um poço seco. O trauma da traição familiar é um dos mais profundos que o ser humano pode enfrentar. Como manter a sanidade quando aqueles que deveriam te proteger são os que te atacam? Este capítulo explora a gestão emocional em tempos de crise aguda e o poder de ressignificar a dor.",
      theology: "O poço vazio é o símbolo do 'deserto' bíblico. É o lugar onde todas as muletas externas são removidas para que reste apenas a dependência de Deus. A ausência de água no poço foi uma misericórdia divina (ele não morreu afogado), mas a presença do silêncio foi o teste. Jesus também foi traído pelos Seus e despojado de Suas vestes. José vive aqui sua primeira 'morte' simbólica para que possa nascer como o governador.",
      management: "Gestão de Adversidade: No mundo corporativo, você enfrentará conspirações. A lição de José é sobre o 'Locus de Controle'. Ele não podia controlar o que seus irmãos faziam, mas podia controlar sua resposta. Quando você é jogado em um 'poço' (uma demissão injusta, uma quebra de contrato), sua primeira tarefa não é sair dele, mas não permitir que o poço entre em você. A sobrevivência depende da manutenção da sua integridade interna.",
      finance: "Economicamente, José foi vendido por 20 moedas de prata. Ele foi desvalorizado por quem o conhecia. Muitas vezes, o mercado vai tentar colocar um preço baixo em você. A lição financeira aqui é: seu valor de mercado não é determinado por quem te odeia, mas por quem precisa da sua solução. José foi vendido como escravo, mas ele carregava dentro de si um software de governança que valia o Egito inteiro.",
      lesson: "O poço é o lugar onde o seu ego morre e o seu propósito nasce. Se você está no poço hoje, entenda que ele é temporário, mas o que você aprende nele é eterno. A traição não diz nada sobre você, mas diz tudo sobre o caráter de quem trai. Mantenha os olhos no alto; o poço não tem teto para que você possa continuar vendo o céu.",
      spiritual: "Perdoe quem te lançou no poço. O perdão não é para eles, é para que você não fique preso ao poço mesmo depois de ter saído dele.",
      financialAction: "Crie um fundo de reserva. Ter 'fôlego financeiro' é o que te permite não aceitar ser vendido por '20 moedas de prata' em empregos que te destroem.",
      prayer: "Pai, no dia da minha angústia, eu clamo a Ti. Cura as feridas causadas pela traição e pela rejeição. Que eu não me torne uma pessoa amarga, mas uma pessoa melhor. Usa essa cova para forjar em mim um caráter inabalável. Eu sei que Tu estás comigo mesmo no silêncio do poço. Eu confio no Teu resgate. Amém."
    }
  ];

  for (let i = 1; i <= 50; i++) {
    const isDetailed = i <= baseDetailedChapters.length;
    let content;

    if (isDetailed) {
      content = baseDetailedChapters[i-1];
    } else {
      const themes = [
        { t: "A Logística da Escravidão", s: "Adaptabilidade e Aprendizado em Ambientes Restritos", r: "37:28" },
        { t: "O Imposto do Egito", s: "Compreendendo Sistemas Econômicos Estrangeiros", r: "39:1" },
        { t: "Governança na Casa de Potifar", s: "A Ética do Zelador e o Crescimento Patrimonial", r: "39:4" },
        { t: "A Armadilha de Sedução", s: "Integridade como Ativo Inegociável", r: "39:7" },
        { t: "O Cárcere de Ouro", s: "Networking na Adversidade: De Prisioneiro a Consultor", r: "40:1" },
        { t: "A Gestão do Tempo de Espera", s: "Paciência Estratégica e o Amadurecimento do Caráter", r: "40:23" },
        { t: "O Forecast de Faraó", s: "Análise de Macrotendências e Ciclos de Mercado", r: "41:1" }
      ];
      
      const theme = themes[i % themes.length];
      content = {
        title: `Capítulo ${i}: ${theme.t}`,
        subtitle: theme.s,
        verse: "O Senhor era com José, e tudo o que ele fazia o Senhor prosperava.",
        ref: `Gênesis ${theme.r}`,
        img: i % 2 === 0 ? SAFE_THEMES.EGITO : SAFE_THEMES.PRISAO,
        intro: `Neste capítulo ${i}, avançamos na jornada de José para entender como a resiliência aplicada se transforma em autoridade política. A trajetória de José nos prova que o sucesso não é um evento isolado, mas uma sucessão de comportamentos íntegros em ambientes desfavoráveis. Estudaremos como ele transformou a casa de um oficial egípcio em um modelo de eficiência administrativa.`,
        theology: "A teologia da 'Presença Imunizante': José estava no Egito, um lugar de idolatria, mas a presença de Deus o tornava imune à decadência moral ao seu redor. Isso nos ensina que o cristão não deve fugir do mundo, mas influenciá-lo através da excelência. A bênção de Deus sobre José transbordava para Potifar, revelando que o favor divino é um agente de transformação social e econômica.",
        management: "Administração por Objetivos (APO): José não esperava ordens; ele antecipava necessidades. Potifar 'não sabia de nada do que tinha, senão do pão que comia'. Isso é o ápice da confiança delegada. Se você quer crescer na sua carreira, torne-se tão confiável que seu superior não precise mais se preocupar com os detalhes operacionais. A microgestão morre onde a integridade nasce.",
        finance: "Gestão de Patrimônio Alheio: Muitas pessoas falham em seus próprios negócios porque não foram fiéis no negócio dos outros. José aprendeu a gerir a fortuna de Potifar antes de gerir o PIB do Egito. A lição financeira aqui é a 'Fidelidade Organizacional'. Trate o dinheiro da empresa onde você trabalha com o mesmo rigor que trataria o seu, e em breve você terá o seu próprio capital para gerir.",
        lesson: "Sua competência é o seu passaporte. Em qualquer lugar do mundo, alguém está procurando por alguém que resolva problemas sem criar novos. José era um solucionador de problemas profissional. Enquanto os outros reclamavam da escravidão, ele organizava a logística da casa. Mude seu foco da reclamação para a solução e você mudará seu destino.",
        spiritual: "Avalie se você tem sido um canal de bênção para as pessoas ao seu redor, mesmo as que não compartilham da sua fé.",
        financialAction: "Organize seus documentos financeiros hoje. Uma vida financeira próspera começa com uma organização impecável.",
        prayer: "Senhor, dá-me a graça de prosperar onde quer que eu seja colocado. Que as pessoas vejam em mim um diferencial de paz e competência. Que eu seja fiel no pouco para que, no Teu tempo, Tu me coloques sobre o muito. Amém."
      };
    }

    chapters.push({
      id: i,
      title: content.title,
      subtitle: content.subtitle,
      verse: content.verse,
      verseReference: content.ref,
      image: content.img,
      intro: [content.intro],
      sections: [
        { type: 'paragraph', content: content.intro },
        { type: 'subtitle', content: "Perspectiva Teológica & Exegese" },
        { type: 'paragraph', content: content.theology },
        { type: 'highlight', content: content.lesson },
        { type: 'subtitle', content: "Gestão, Carreira & Governança" },
        { type: 'paragraph', content: content.management },
        { type: 'lesson-box', content: "Insight de Valor: " + content.lesson },
        { type: 'subtitle', content: "Sabedoria Financeira Aplicada" },
        { type: 'paragraph', content: content.finance },
        { type: 'subtitle', content: "Desafio de Ativação Prática" },
        { type: 'list', content: [
          `Espiritual: ${content.spiritual}`,
          `Financeiro: ${content.financialAction}`
        ]}
      ],
      prayer: content.prayer,
      action: {
        spiritual: content.spiritual,
        financial: content.financialAction,
        description: "Plano de Ação"
      }
    });
  }

  return chapters;
};

export const CHAPTERS = generateHyperRobustChapters();
