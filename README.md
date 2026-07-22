# Portfólio de Engenharia de Dados & Automação (Python & IA) — Guilherme Miguel

Bem-vindo ao meu portfólio profissional. Este projeto foi desenvolvido para demonstrar minhas habilidades na interseção entre Engenharia de Dados, Automação de Processos (RPA) e Inteligência Artificial, focando na construção de pipelines resilientes, transações ACID e resolução de gargalos operacionais de negócios.

Acesse o portfólio online: https://guilherme-miguel9.github.io/portfolio/

---

## Destaques do Portfólio

### 1. Simulador Interativo de Machine Learning (ML)
Uma demonstração interativa no navegador que simula visualmente a dinâmica matemática de convergência de modelos analíticos:
* **Hiperparâmetros Personalizáveis:** Escolha entre Rede Neural Multicamadas (MLP), Classificador Random Forest ou Regressão Linear, ajustando a Taxa de Aprendizado (Learning Rate), Épocas e Ruído dos Dados.
* **Feedback em Tempo Real:** Acompanhe a curva de perda (Loss) e acurácia renderizadas dinamicamente no HTML5 Canvas.
* **Fidelidade Conceitual:** Modelagem da degradação exponencial de erro e convergência de algoritmos de aprendizado supervisionado.

### 2. Fundo Dinâmico de Conexões Neurais
Efeito interativo desenvolvido em JavaScript (HTML5 Canvas 2D) simulando uma malha de rede em tempo real que reage à movimentação do mouse.

---

## Arquitetura & Resiliência de Pipelines (Boas Práticas de Engenharia)

Como abordo e soluciono os 8 pilares críticos no desenvolvimento de pipelines de dados e automações em ambiente de produção:

1. **Como trata arquivos corrompidos?**  
   Validação estrutural no ato da leitura (`try-except`). Arquivos ou linhas defeituosas são capturados, isolados em uma fila de quarentena (Dead-Letter Queue) e registrados no log de auditoria sem travar o processamento do restante do lote.
2. **Como evita duplicação?**  
   Garantia por chaves primárias/compostas com cláusula `ON CONFLICT DO UPDATE / NOTHING` no PostgreSQL (Upsert) e cálculo de hashes criptográficos (SHA-256) na ingestão de registros.
3. **Como valida schema?**  
   Verificação antecipada de tipagem, colunas obrigatórias e domínios válidos utilizando Pandas, SQLAlchemy e Pydantic antes da persistência no banco.
4. **Como trata rollback?**  
   Toda escrita relacional ocorre dentro de transações explícitas (`BEGIN ... COMMIT`). Em caso de exceção durante um lote, o pipeline executa instantaneamente `db.session.rollback()`, revertendo o estado e garantindo atomicidade.
5. **Como controla transações?**  
   Inserções massivas são executadas em Bulk Inserts atômicos em blocos transacionados, impedindo modificações parciais na base de dados.
6. **Como processa arquivos grandes sem estourar RAM?**  
   Processamento em streaming por pedaços utilizando o parâmetro `chunksize` do Pandas e cursores server-side no banco relacional, apoiado por multi-threading assíncrono.
7. **Como registra erros?**  
   Módulo nativo de `logging` estruturado rotacionado em arquivo e tabelas de auditoria de jobs, armazenando carimbo de tempo, stack trace, ID do lote e contexto para rastreabilidade de ponta a ponta.
8. **Como garante idempotência?**  
   Rotinas projetadas para que o mesmo job ou planilha possa ser reexecutado dezenas de vezes gerando exatamente o mesmo estado final no banco de dados, sem duplicidade ou inconsistência.

---

## Projetos em Destaque

### [App de Integração & Sincronização SQL](https://github.com/guilherme-miguel9/APP-INTEGRACAO-BD)
* **Descrição:** Software desktop em Python para validação, limpeza e importação de planilhas Excel (`.xlsx`/`.xls`) para bancos PostgreSQL. Desenvolvido com Tkinter e processamento assíncrono multi-threading em segundo plano sem bloquear a interface, aplicando controle transacional ACID e leitura em streaming (`chunksize`).
* **Tecnologias:** Python, PostgreSQL, Pandas, Tkinter, Multi-threading (`psycopg2`).
* **Destaque:** Interface gráfica com processamento em segundo plano sem bloquear a interface durante ingestões de grandes volumes.

### [Bot Auditor de Registros Operacionais](https://github.com/guilherme-miguel9/Bot-Auditor)
* **Descrição:** Automatiza a validação e auditoria de dezenas de milhares de registros operacionais de campo. O motor aplica validação antecipada de schema e regras de negócio, categorizando comentários em 8 classificações de conformidade e isolando inconsistências em quarentena de forma automatizada.
* **Tecnologias:** Python, Pandas, Validação Operacional, Regras de Negócio, ETL.
* **Destaque:** Categorização automatizada em 8 classificações operacionais com isolamento de dados inconsistentes em quarentena.

### Automação de Auditoria & Monitoramento SAP (RPA Corporativo)
* **Descrição:** Robô de automação (RPA) que coleta e analisa dados operacionais diretamente do ERP SAP. Processando um volume superior a 75.297 avaliações e registros mensais de forma automatizada, identifica desvios e notifica as equipes para correção (<24h tempo hábil), gerando +35% de ganho de eficiência operacional, medido pela comparação entre o processo manual e o automatizado.
* **Tecnologias:** VBA Excel, SAP Scripting, Auditoria Operacional.
* **Destaque:** Coleta e análise direta do ERP SAP de mais de 75.297 registros/mês, consolidando +35% de ganho de eficiência operacional, medido pela comparação entre o processo manual e o automatizado. *(Projeto mantido em ambiente corporativo privado).*

### [RAG-PDF: Assistente Operacional Inteligente](https://github.com/guilherme-miguel9/RAG-PDF)
* **Descrição:** Sistema RAG executado 100% local para consulta de POPs e manuais técnicos, com respostas fundamentadas nas fontes recuperadas e referência às páginas utilizadas. Utiliza LangChain, Docling, ChromaDB e reranking com Cross-Encoder, com interface em Streamlit.
* **Tecnologias:** Python, LangChain, ChromaDB, Docling, Reranker Cross-Encoder, Streamlit, LM Studio (LLM 100% Local).
* **Destaque:** Pipeline RAG com retrieval, reranking e LLM executado localmente, com extração estruturada via Docling.

---

## Tecnologias Empregadas

* **Estrutura & Semântica:** HTML5 com boas práticas de SEO, Meta Tags Open Graph e Twitter Cards para compartilhamento profissional nas redes sociais.
* **Estilização:** CSS3 (Glassmorphic containers, Gradientes Navy Blue/Branco, responsividade Mobile-First).
* **Comportamento:** Vanilla JavaScript (Simulador com partículas de fundo, gráfico animado em canvas 2D e integração de contato).
* **Hospedagem & Deploy:** GitHub Pages com atualização automatizada via CI/CD.

---

## Estrutura de Arquivos

```text
portfolio/
├── docs/
│   ├── index.html              # Página principal (SEO & Semântica)
│   ├── view/
│   │   ├── styles.css          # Estilos CSS, Variáveis e Responsividade
│   │   └── images/             # Imagens e ativos visuais do projeto
│   └── model/
│       ├── playground.js       # Lógica do Simulador de ML e Rede Neural de Fundo
│       └── botao_enviar.js     # Integração do Formulário de Contato
├── README.md                   # Esta documentação
└── .gitignore                  # Filtros de arquivos Git
```

---

## Como Executar o Projeto Localmente

Não há necessidade de instalar nenhuma dependência externa de pacotes para executar o site.

### Método Simples:
1. Abra o arquivo `docs/index.html` em seu navegador via protocolo `file:///`.

### Método via Servidor HTTP Local (Python):
```bash
python -m http.server 8000 --directory docs
```
Acesse no seu navegador: `http://localhost:8000`

---

## Contato

* **LinkedIn:** https://linkedin.com/in/guilherme-barros-55bb73286
* **GitHub:** https://github.com/guilherme-miguel9
