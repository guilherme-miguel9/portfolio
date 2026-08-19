/**
 * ==============================================================================
 * 📝 PAINEL DE CONTEÚDO E DADOS DO PORTFÓLIO (dados.js)
 * ==============================================================================
 * 
 * 💡 COMO USAR:
 * Este é o único arquivo que você precisa abrir no VS Code para alterar:
 * - Seus textos, títulos e descrições.
 * - Suas fotos, imagens e banners.
 * - Suas métricas, competências e links de redes sociais.
 * - Adicionar, editar ou remover projetos.
 * 
 * Basta alterar o texto desejado entre as aspas "..." e salvar o arquivo (Ctrl + S)!
 * ==============================================================================
 */

const PORTFOLIO_DADOS = {

  // ============================================================================
  // 1. DADOS PESSOAIS & SEÇÃO PRINCIPAL (HERO)
  // ============================================================================
  perfil: {
    nome: "Guilherme Miguel",
    cargoBadge: "Engenheiro de Dados & Automação | Python & Inteligência Artificial",
    tituloHero: "Olá, me chamo <br /><span class=\"highlight-name\">Guilherme Miguel.</span>",
    subtitulo: "Desenvolvo soluções em Python para engenharia de dados, automação de processos e aplicações de Inteligência Artificial.",
    descricao: "Especialista na construção de pipelines analíticos robustos em Python (Pandas, SQLAlchemy), cargas otimizadas em massa no PostgreSQL e automação de rotinas corporativas de alto volume, com sistemas RAG locais estruturados.",

    // Caminho da sua foto de perfil
    fotoPerfil: "./view/images/foto-perfil.jpg",

    // Botões principais de ação
    botoes: {
      projetosTexto: "Ver Projetos",
      projetosLink: "#projetos",
      contatoTexto: "Entre em Contato",
      contatoLink: "#contato"
    }
  },

  // ============================================================================
  // 2. SEÇÃO SOBRE MIM & MÉTRICAS
  // ============================================================================
  sobre: {
    tag: "Perfil Profissional",
    titulo: "Sobre Mim",
    subtitulo: "Trajetória e Abordagem Técnica",
    paragrafos: [
      "Com experiência direcionada ao desenvolvimento de soluções de dados e automação, atuo na concepção, construção e manutenção de pipelines analíticos, processamento de dados corporativos e integração de rotinas complexas.",
      "Utilizo Python, bancos de dados relacionais e ferramentas de IA local, aplicando boas práticas de resiliência, validação de dados e controle transacional para otimizar processos e eliminar gargalos operacionais."
    ],
    // Destaques numéricos e métricas de impacto
    metricas: [
      {
        numero: "+75.297",
        descricao: "Registros e avaliações mensais processadas com coleta e análise diretamente do ERP SAP"
      },
      {
        numero: "+35%",
        descricao: "Ganho de eficiência operacional que obtivemos com dados obtidos pela automação do SAP"
      },
      {
        numero: "2 Milhões de Registros mensais",
        descricao: "Processados por meio de pipeline analítico em Python, SQL e PostgreSQL"
      }
    ]
  },

  // ============================================================================
  // 3. COMPETÊNCIAS & FERRAMENTAS
  // ============================================================================
  competencias: {
    tag: "Especialidades",
    titulo: "Competências & Ferramentas",
    lista: [
      {
        icone: "database",
        titulo: "Coleta & Banco de Dados",
        descricao: "Modelagem relacional, otimização de consultas e ingestão de dados em larga escala.",
        tags: ["PostgreSQL", "SQLAlchemy", "SAP Integration"]
      },
      {
        icone: "etl",
        titulo: "Processamento & ETL",
        descricao: "Limpeza de dados, engenharia de atributos e tratamento de bases complexas ou incompletas.",
        tags: ["Python", "Pandas", "NumPy", "Excel VBA"]
      },
      {
        icone: "ml",
        titulo: "Modelagem & Machine Learning",
        descricao: "Desenvolvimento e validação cruzada de modelos preditivos, regressão e classificação.",
        tags: ["Scikit-Learn", "Estatística", "Otimização", "Tuning"]
      },
      {
        icone: "deploy",
        titulo: "Deploy & Visualização",
        descricao: "Construção de relatórios gerenciais e microsserviços.",
        tags: ["Matplotlib", "Seaborn"]
      }
    ]
  },

  // ============================================================================
  // 4. ARQUITETURA & RESILIÊNCIA DE PIPELINES (Perguntas Técnicas)
  // ============================================================================
  arquitetura: {
    tag: "Confiabilidade & Performance",
    titulo: "Arquitetura & Resiliência de Pipelines",
    subtitulo: "Decisões técnicas reais tomadas para resolver desafios de performance, integridade e escala no processamento de dados em produção:",
    cards: [
      {
        tag: "01. Governança de Schema",
        pergunta: "Como você valida os dados na entrada?",
        resposta: "Defino um dicionário de tipagem forçada (<code>colunasarrumadas</code>) aplicado na leitura de cada planilha, garantindo que campos como código de contrato ou instalação não percam zeros à esquerda nem sejam convertidos incorretamente antes de chegar ao banco."
      },
      {
        tag: "02. Performance de Carga",
        pergunta: "Como você otimizou a carga no PostgreSQL?",
        resposta: "Migrei o pipeline de <code>INSERT</code> linha a linha para o comando nativo <code>COPY</code> do PostgreSQL, que processa a carga como um único fluxo de dados em vez de milhares de instruções individuais — reduzindo drasticamente o tempo de carga em lotes grandes."
      },
      {
        tag: "03. Regra de Negócio: Duplicidade",
        pergunta: "Você trata registros duplicados?",
        resposta: "Não removo duplicidades por padrão — no meu contexto operacional, múltiplos registros para a mesma referência são informação relevante e precisam ser preservados. Para dados que exigem atualização, aplico uma lógica de exclusão e nova inserção por período de data, evitando registros divergentes para a mesma janela de tempo."
      },
      {
        tag: "04. Processamento em Lote",
        pergunta: "Como processa arquivos grandes sem travar a interface?",
        resposta: "Utilizo processamento assíncrono em segundo plano (multi-threading) nas aplicações desktop, permitindo validar e carregar dezenas de milhares de linhas sem bloquear a interface gráfica (PySide6) enquanto o usuário acompanha o progresso em tempo real."
      },
      {
        tag: "05. Lição Aprendida: Rollback",
        pergunta: "O que você faria diferente hoje?",
        resposta: "Na lógica de exclusão e reinserção por data, uma falha no meio do processo apagou os registros das datas correspondentes antes da nova inserção ser concluída — como eu mantinha a origem em Excel (camada Bronze), não houve perda real, mas o incidente deixou clara a necessidade de <code>rollback</code> transacional explícito antes de qualquer exclusão. É a próxima melhoria técnica que estou implementando nos meus pipelines."
      }
    ]
  },

  // ============================================================================
  // 5. PROJETOS EM DESTAQUE (Adicione, edite ou remova cards aqui!)
  // ============================================================================
  projetos: {
    tag: "Portfólio Prático",
    titulo: "Projetos em Destaque",
    subtitulo: "Soluções completas que combinam engenharia de dados, modelagem analítica, inteligência artificial e automação de processos.",
    lista: [
      {
        titulo: "App de Integração & Sincronização SQL (Lumi)",
        categoria: "Engenharia de Dados & ETL",
        badgeOverlay: "Ingestão & Sincronização SQL",
        imagem: "./view/images/bd.png",
        descricao: "Software desktop em Python para validação, limpeza e importação de planilhas Excel (<code>.xlsx</code>/<code>.xls</code>) para bancos PostgreSQL. Desenvolvido com PySide6 e processamento assíncrono em segundo plano (multi-threading), sem bloquear a interface, com carga otimizada via comando nativo <code>COPY</code>.",
        tags: ["Python", "PostgreSQL", "Pandas", "PySide6", "Multi-threading"],
        tipo: "github", // "github" (mostra link público) ou "privado" (mostra badge corporativo)
        link: "https://github.com/guilherme-miguel9/APP-INTEGRACAO-BD"
      },
      {
        titulo: "Bot Auditor de Registros Operacionais",
        categoria: "Auditoria & Validação Operacional",
        badgeOverlay: "Validação & Auditoria de Dados",
        imagem: "./view/images/bot-aud.png",
        descricao: "Automatiza a validação e auditoria de dezenas de milhares de registros operacionais de campo. O motor aplica validação antecipada de schema e regras de negócio, categorizando comentários em 8 classificações de conformidade e isolando inconsistências de forma automatizada. Reduz o tempo de auditoria de ~9 horas (18 lotes, ~30 min cada manualmente) para 2 a 5 minutos — um ganho de mais de 100x.",
        tags: ["Python", "Pandas", "Validação de Dados", "Regras de Negócio", "ETL"],
        tipo: "github",
        link: "https://github.com/guilherme-miguel9/Bot-Auditor"
      },
      {
        titulo: "Automação de Auditoria & Monitoramento SAP",
        categoria: "Automação RPA & ERP SAP",
        badgeOverlay: "RPA & Monitoramento SAP",
        imagem: "./view/images/bot-sap.webp",
        descricao: "Robô de automação (RPA) que coleta e analisa dados operacionais diretamente do ERP SAP. Processando um volume superior a <strong>75.297 avaliações e registros mensais</strong> de forma automatizada, identifica desvios e notifica as equipes para correção (<24h tempo hábil), gerando <strong>+35% de ganho de eficiência operacional, medido para correções de incoformidades.",
        tags: ["VBA Excel", "SAP Scripting", "RPA / Automação", "Tempo Real"],
        tipo: "privado",
        textoPrivado: "Ambiente Corporativo Privado"
      },
      {
        titulo: "RAG-PDF: Assistente Operacional Inteligente",
        categoria: "Inteligência Artificial & LLMs",
        badgeOverlay: "RAG 100% Local (LangChain)",
        imagem: "", // Deixe vazio "" para usar padrão ou coloque o caminho da imagem ex: "./view/images/rag.png"
        descricao: "Sistema RAG executado 100% local para consulta de POPs e manuais técnicos, com respostas fundamentadas nas fontes recuperadas e referência às páginas utilizadas. Utiliza LangChain, Docling, ChromaDB e reranking com Cross-Encoder, com interface em Streamlit.",
        tags: ["LangChain", "ChromaDB", "Docling", "Streamlit", "Reranker"],
        tipo: "github",
        link: "https://github.com/guilherme-miguel9/RAG-PDF"
      }
    ]
  },

  // ============================================================================
  // 6. SIMULADOR DE MACHINE LEARNING (Textos)
  // ============================================================================
  simulador: {
    tag: "Demonstração Interativa",
    titulo: "Simulador Interativo de Machine Learning",
    subtitulo: "Ajuste os hiperparâmetros abaixo para simular visualmente no navegador a dinâmica matemática de convergência e curvas de aprendizado de diferentes algoritmos."
  },

  // ============================================================================
  // 7. CONTATO & REDES SOCIAIS
  // ============================================================================
  contato: {
    tag: "Fale Comigo",
    titulo: "Conecte-se e Vamos Conversar",
    subtitulo: "Estou à disposição para novos desafios, projetos em Engenharia de Dados, Análise de Dados e oportunidades profissionais.",

    // Configurações do WhatsApp (deixe vazio se não quiser colocar o número agora)
    //whatsapp: {
    //numeroTelefone: "", // Exemplo: "5511999999999"
    // tituloFormulario: "Envie uma mensagem direta",
    //textoBotao: "Enviar pelo WhatsApp"
    //},

    // Links de Redes Sociais
    redes: [
      {
        tipo: "linkedin",
        titulo: "LinkedIn Profissional",
        subtitulo: "Conecte-se comigo no LinkedIn",
        link: "https://linkedin.com/in/guilherme-miguel-dados"
      },
      {
        tipo: "github",
        titulo: "Repositório GitHub",
        subtitulo: "Confira meus códigos e contribuições",
        link: "https://github.com/guilherme-miguel9"
      }
    ]
  },

  // ============================================================================
  // 8. RODAPÉ
  // ============================================================================
  rodape: {
    copyright: "© 2026 Guilherme Miguel. Todos os direitos reservados.",
    nota: "Desenvolvido para demonstrar meus projetos pessoais/profissionais."
  }
};
