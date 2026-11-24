/**
 * ==============================================================================
 * PAINEL DE CONTEÚDO DO PORTFÓLIO (dados.js)
 * ==============================================================================
 * Edite textos, métricas, projetos e e-mail neste arquivo.
 * ==============================================================================
 */

const PORTFOLIO_DADOS = {
  // 1. PERFIL & HERO
  perfil: {
    nome: "Guilherme Miguel",
    eyebrow: "Engenheiro de Dados & Automação",
    titulo: "Guilherme Miguel.",
    subtitulo:
      "Projeto pipelines de dados resilientes, automações operacionais de alto volume e sistemas de IA local com Python e PostgreSQL.",
    fotoPerfil: "./view/images/foto-perfil.jpg",
    botoes: {
      projetosTexto: "Ver projetos",
      projetosLink: "#projetos",
      contatoTexto: "Entrar em contato",
      contatoLink: "#contato"
    },
    metricas: [
      {
        numero: "2M+",
        descricao: "Registros mensais processados em pipelines Python, SQL e PostgreSQL"
      },
      {
        numero: "75.297+",
        descricao: "Registros e avaliações mensais auditados diretamente no ERP SAP"
      },
      {
        numero: "+35%",
        descricao: "Ganho de eficiência operacional na correção de não conformidades"
      }
    ]
  },

  // 2. SOBRE MIM
  sobre: {
    eyebrow: "Sobre",
    titulo: "Engenharia orientada a dados reais e operação.",
    paragrafos: [
      "Atuo na concepção, construção e sustentação de pipelines analíticos, integrações entre planilhas, APIs e PostgreSQL, além de automações corporativas que eliminam gargalos operacionais em rotinas de campo e ERP.",
      "Do Lakehouse em arquitetura Medalhão (dbt, Polars, MinIO e Docker) a robôs em Python, PySide6, SAP Scripting e sistemas de IA local (RAG e Visão Computacional), priorizo integridade de schema, performance de carga e previsibilidade em produção."
    ]
  },

  // 3. PROJETOS
  projetos: {
    eyebrow: "Projetos",
    titulo: "Trabalho selecionado.",
    subtitulo:
      "Sistemas em produção, pipelines de dados, automações com IA local e APIs abertas no GitHub.",
    categorias: ["Todos", "Engenharia de Dados", "Automação & IA", "APIs & Backend"],
    publicos: [
      {
        titulo: "DataForge — Data Lakehouse Medallion",
        categoria: "Engenharia de Dados",
        imagem: "",
        destaque: "Bronze · Silver · Gold + CI/CD",
        descricao:
          "Plataforma ponta a ponta com ingestão heterogênea (planilhas Excel de 47 colunas e API REST), detecção incremental por hash SHA-256, contratos Pydantic com quarentena (DLQ) no MinIO S3, processamento em Parquet com Polars e Data Warehouse Star Schema em dbt + PostgreSQL.",
        tags: ["Python", "Polars", "dbt", "MinIO S3", "PostgreSQL"],
        link: "https://github.com/guilherme-miguel9/projeto-dataforge"
      },
      {
        titulo: "Lumi — Integração & Sincronização SQL",
        categoria: "Engenharia de Dados",
        imagem: "./view/images/bd.png",
        destaque: "Carga em lote via PostgreSQL COPY",
        descricao:
          "Aplicativo desktop em PySide6 (módulos OSB e OSP) para leitura em lote de pastas de planilhas Excel (.xlsx, .xlsm, .xls) com pandas e calamine, limpeza estrutural e carga massiva no PostgreSQL via comando nativo COPY em multi-threading sem travar a interface.",
        tags: ["Python", "PySide6", "PostgreSQL", "Pandas", "Multi-threading"],
        link: "https://github.com/guilherme-miguel9/APP-INTEGRACAO-BD"
      },
      {
        titulo: "Bot Auditor de Registros Operacionais",
        categoria: "Automação & IA",
        imagem: "./view/images/bot-aud.png",
        destaque: "De ~9h para 2–5 min (>100× mais rápido)",
        descricao:
          "Motor automatizado de auditoria de justificativas de campo que aplica validação de schema e regras de negócio sobre dezenas de milhares de registros, categorizando ocorrências em 8 classificações operacionais e isolando desvios.",
        tags: ["Python", "Pandas", "Auditoria", "ETL"],
        link: "https://github.com/guilherme-miguel9/Bot-Auditor"
      },
      {
        titulo: "RAG-PDF — Assistente Operacional Local",
        categoria: "Automação & IA",
        imagem: "",
        destaque: "100% local com citação de páginas",
        descricao:
          "Sistema RAG em Clean Architecture para consulta a POPs e manuais técnicos corporativos, com extração estruturada via Docling, indexação vetorial no ChromaDB, reranking Cross-Encoder e LLM local via LM Studio em interface Streamlit.",
        tags: ["LangChain", "Docling", "ChromaDB", "Cross-Encoder", "Streamlit"],
        link: "https://github.com/guilherme-miguel9/RAG-PDF"
      },
      {
        titulo: "Automação de Cobranças por Rotas",
        categoria: "Automação & IA",
        imagem: "",
        destaque: "Google Sheets → WhatsApp & SMTP",
        descricao:
          "Orquestrador em Python que lê pendências e hierarquias de rotas via Google Sheets API (gspread), dispara notificações segmentadas pelo WhatsApp (OpenClaw Gateway API), envia consolidados por e-mail (SMTP) e gera CSV de auditoria.",
        tags: ["Python", "Google Sheets API", "WhatsApp API", "SMTP"],
        link: "https://github.com/guilherme-miguel9/Automacao-Cobranca"
      },
      {
        titulo: "RPA de Análise de Fotos com VLM Local",
        categoria: "Automação & IA",
        imagem: "",
        destaque: "Visão computacional em interfaces restritas",
        descricao:
          "Automação RPA projetada para interfaces restritas (como SAP GUI via área de trabalho remota) com captura dinâmica de recortes de tela, navegação automatizada por teclado e classificação de imagens com Modelos de Visão (VLMs) via LM Studio.",
        tags: ["Python", "RPA", "Visão Computacional", "LM Studio"],
        link: "https://github.com/guilherme-miguel9/Automacao-analise-de-fotos"
      },
      {
        titulo: "Bot Telegram Routheon",
        categoria: "APIs & Backend",
        imagem: "",
        destaque: "Assíncrono · Clean Architecture · LGPD",
        descricao:
          "Sistema de consulta automatizada de processos via Telegram construído em camadas desacopladas com pool assíncrono em PostgreSQL (SQLAlchemy 2.0), configurações tipadas (pydantic-settings) e consultas parametrizadas alinhadas à LGPD.",
        tags: ["Python", "SQLAlchemy 2.0", "PostgreSQL", "Pydantic", "Async"],
        link: "https://github.com/guilherme-miguel9/Bot-Telegram-Routheon"
      },
      {
        titulo: "API Route — Roteirização de Mapas",
        categoria: "APIs & Backend",
        imagem: "",
        destaque: "FastAPI + OSRM com Swagger",
        descricao:
          "API REST que recebe coordenadas de latitude e longitude para calcular a melhor rota viária via OSRM, retornando distância total e estimativa de conclusão, com documentação interativa gerada no FastAPI.",
        tags: ["Python", "FastAPI", "OSRM", "Swagger"],
        link: "https://github.com/guilherme-miguel9/api_route"
      },
      {
        titulo: "API de Reservas & Propriedades (Seazone)",
        categoria: "APIs & Backend",
        imagem: "",
        destaque: "REST v1 · Docker · PyTest",
        descricao:
          "Backend desenvolvido para desafio técnico da Seazone com endpoints versionados de cadastro de propriedades, consulta de disponibilidade, reservas e cancelamento, containerizado com Docker Compose e coberto por testes automatizados em PyTest.",
        tags: ["Python", "FastAPI", "Docker", "PyTest"],
        link: "https://github.com/guilherme-miguel9/desafio-backend-seazone"
      },
      {
        titulo: "Radar Olist — Análise de E-commerce",
        categoria: "Engenharia de Dados",
        imagem: "",
        destaque: "Banco relacional versionado com Alembic",
        descricao:
          "Projeto de engenharia e análise de performance de vendas em e-commerce (dataset Olist) estruturado em Python com migrações de schema gerenciadas via Alembic.",
        tags: ["Python", "SQL", "Alembic", "Analytics"],
        link: "https://github.com/guilherme-miguel9/Radar-Olist"
      }
    ],
    // Projetos privados/corporativos: bloco minimalista e sem links externos
    corporativos: {
      titulo: "Projetos corporativos",
      nota: "Soluções desenvolvidas em ambiente privado. Sem acesso público por restrição corporativa.",
      lista: [
        {
          titulo: "Auditoria & Monitoramento SAP",
          contexto: "RPA Corporativo · Acesso restrito",
          descricao:
            "Automação em VBA Excel e SAP Scripting que coleta e analisa mais de 75.297 registros e avaliações mensais diretamente do ERP SAP, sinalizando desvios em menos de 24h e gerando +35% de ganho de eficiência operacional na correção de não conformidades."
        }
      ]
    }
  },

  // 4. ARQUITETURA & DECISÕES TÉCNICAS
  arquitetura: {
    eyebrow: "Arquitetura",
    titulo: "Decisões técnicas em produção.",
    subtitulo:
      "Problemas reais enfrentados em pipelines e automações — e como foram resolvidos.",
    cards: [
      {
        tag: "01",
        subtitulo: "Governança de Schema",
        pergunta: "Como você valida os dados na entrada?",
        resposta:
          "Defino um dicionário de tipagem forçada (<code>colunasarrumadas</code>) aplicado na leitura de cada planilha, garantindo que campos como código de contrato ou instalação não percam zeros à esquerda nem sejam convertidos incorretamente antes de chegar ao banco."
      },
      {
        tag: "02",
        subtitulo: "Performance de Carga",
        pergunta: "Como você otimizou a carga no PostgreSQL?",
        resposta:
          "Migrei o pipeline de <code>INSERT</code> linha a linha para o comando nativo <code>COPY</code> do PostgreSQL, que processa a carga como um único fluxo de dados em vez de milhares de instruções individuais — reduzindo drasticamente o tempo de carga em lotes grandes."
      },
      {
        tag: "03",
        subtitulo: "Regra de Negócio: Duplicidade",
        pergunta: "Você trata registros duplicados?",
        resposta:
          "Não removo duplicidades por padrão — no meu contexto operacional, múltiplos registros para a mesma referência são informação relevante e precisam ser preservados. Para dados que exigem atualização, aplico uma lógica de exclusão e nova inserção por período de data, evitando registros divergentes para a mesma janela de tempo."
      },
      {
        tag: "04",
        subtitulo: "Processamento em Lote",
        pergunta: "Como processa arquivos grandes sem travar a interface?",
        resposta:
          "Utilizo processamento assíncrono em segundo plano (multi-threading) nas aplicações desktop, permitindo validar e carregar dezenas de milhares de linhas sem bloquear a interface gráfica (PySide6) enquanto o usuário acompanha o progresso em tempo real."
      },
      {
        tag: "05",
        subtitulo: "Lição Aprendida: Rollback",
        pergunta: "O que você faria diferente hoje?",
        resposta:
          "Na lógica de exclusão e reinserção por data, uma falha no meio do processo apagou os registros das datas correspondentes antes da nova inserção ser concluída — como eu mantinha a origem em Excel (camada Bronze), não houve perda real, mas o incidente deixou clara a necessidade de <code>rollback</code> transacional explícito antes de qualquer exclusão. É a próxima melhoria técnica que estou implementando nos meus pipelines."
      }
    ]
  },

  // 5. COMPETÊNCIAS & STACK
  competencias: {
    eyebrow: "Competências",
    titulo: "Stack e áreas de atuação.",
    lista: [
      {
        titulo: "Engenharia de Dados & Lakehouse",
        descricao:
          "Ingestão incremental, modelagem dimensional, qualidade de dados e carga em massa.",
        tags: ["Python", "Polars", "Pandas", "PostgreSQL", "dbt", "MinIO", "Parquet", "Alembic"]
      },
      {
        titulo: "Automação & RPA",
        descricao:
          "Automação de rotinas corporativas, integração com ERP e aplicações desktop responsivas.",
        tags: ["SAP Scripting", "VBA Excel", "PySide6", "Multi-threading", "Google Sheets API"]
      },
      {
        titulo: "IA Aplicada & LLMs Locais",
        descricao:
          "Busca semântica fundamentada em documentos, visão computacional e agentes operacionais.",
        tags: ["LangChain", "RAG", "ChromaDB", "Docling", "Cross-Encoder", "LM Studio", "VLMs"]
      },
      {
        titulo: "APIs, Qualidade & Infra",
        descricao:
          "Serviços REST assíncronos, validação de contratos, testes automatizados e empacotamento.",
        tags: ["FastAPI", "SQLAlchemy 2.0", "Pydantic", "Docker", "PyTest", "Ruff", "GitHub Actions"]
      }
    ]
  },

  // 6. CONTATO
  contato: {
    eyebrow: "Contato",
    titulo: "Vamos conversar.",
    subtitulo:
      "Disponível para oportunidades em Engenharia de Dados, Automação e projetos sob demanda.",

    // Altere seu e-mail aqui se desejar usar outro endereço
    email: "guicaruaru@gmail.com",

    redes: [
      {
        tipo: "linkedin",
        titulo: "LinkedIn",
        subtitulo: "linkedin.com/in/guilherme-miguel-dados",
        link: "https://linkedin.com/in/guilherme-miguel-dados"
      },
      {
        tipo: "github",
        titulo: "GitHub",
        subtitulo: "github.com/guilherme-miguel9",
        link: "https://github.com/guilherme-miguel9"
      }
    ]
  },

  // 7. RODAPÉ
  rodape: {
    copyright: "© 2026 Guilherme Miguel.",
    nota: "Engenharia de Dados & Automação."
  }
};
