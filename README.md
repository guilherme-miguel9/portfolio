# 🏛️ Portfólio de Engenharia de Dados & Automação (Python & IA) — Guilherme Miguel

Bem-vindo ao meu portfólio profissional! Este projeto foi desenvolvido para demonstrar minhas habilidades na interseção entre **Engenharia de Dados, Automação de Processos (RPA) e Inteligência Artificial**, focando na construção de pipelines resilientes, transações ACID e resolução de gargalos operacionais críticos de negócios.

🔗 **Acesse o portfólio online:** [guilherme-miguel9.github.io/portfolio](https://guilherme-miguel9.github.io/portfolio/)

---

## 🚀 Destaques do Portfólio

### 1. **Simulador Interativo de Machine Learning (ML)**
Uma demonstração interativa no navegador do visitante que simula visualmente a dinâmica matemática de convergência de modelos analíticos:
*   **Hiperparâmetros Personalizáveis:** Escolha entre **Rede Neural Multicamadas (MLP)**, **Classificador Random Forest** ou **Regressão Linear**, ajustando a *Taxa de Aprendizado (Learning Rate)*, *Épocas* e *Ruído dos Dados*.
*   **Feedback em Tempo Real:** Acompanhe a curva de perda (*Loss*) e acurácia renderizadas dinamicamente no HTML5 Canvas.
*   **Fidelidade Conceitual:** Modelagem da degradação exponencial de erro e convergência de algoritmos de aprendizado supervisionado.

### 2. **Fundo Dinâmico de Conexões Neurais**
Efeito interativo desenvolvido em JavaScript (HTML5 Canvas 2D) simulando uma malha de rede em tempo real que reage à movimentação do mouse.

---

## 🏛️ Arquitetura & Resiliência de Pipelines (Boas Práticas de Engenharia)

Como abordo e soluciono os 8 pilares críticos no desenvolvimento de pipelines de dados e automações em ambiente de produção:

1. **Como trata arquivos corrompidos?**  
   Validação estrutural no ato da leitura (`try-except`). Arquivos ou linhas defeituosas são capturados, isolados em uma fila de quarentena (*Dead-Letter Queue*) e registrados no log de auditoria sem travar o processamento do restante do lote.
2. **Como evita duplicação?**  
   Garantia por chaves primárias/compostas com cláusula `ON CONFLICT DO UPDATE / NOTHING` no PostgreSQL (Upsert) e cálculo de hashes criptográficos (SHA-256) na ingestão de registros.
3. **Como valida schema?**  
   Verificação antecipada de tipagem, colunas obrigatórias e domínios válidos utilizando **Pandas**, **SQLAlchemy** e **Pydantic** antes da persistência no banco.
4. **Como trata rollback?**  
   Toda escrita relacional ocorre dentro de transações explícitas (`BEGIN ... COMMIT`). Em caso de exceção durante um lote, o pipeline executa instantaneamente `db.session.rollback()`, revertendo o estado e garantindo atomicidade.
5. **Como controla transações?**  
   Inserções massivas são executadas em *Bulk Inserts* atômicos em blocos transacionados, impedindo modificações parciais na base de dados.
6. **Como processa arquivos grandes sem estourar RAM?**  
   Processamento em streaming por pedaços utilizando o parâmetro `chunksize` do Pandas e cursores *server-side* no banco relacional, apoiado por multi-threading assíncrono.
7. **Como registra erros?**  
   Módulo nativo de `logging` estruturado rotacionado em arquivo e tabelas de auditoria de jobs, armazenando carimbo de tempo, *stack trace*, ID do lote e contexto para rastreabilidade de ponta a ponta.
8. **Como garante idempotência?**  
   Rotinas projetadas para que o mesmo job ou planilha possa ser reexecutado dezenas de vezes gerando exatamente o mesmo estado final no banco de dados, sem duplicidade ou inconsistência.

---

## 🛠️ Projetos em Destaque

### 🗄️ [App de Integração & Sincronização SQL](https://github.com/guilherme-miguel9/APP-INTEGRACAO-BD)
*   **Descrição:** Software desktop em Python para automatizar a importação de planilhas Excel (`.xlsx`/`.xls`) para bancos PostgreSQL em alta performance com controle transacional ACID e streaming (`chunksize`).
*   **Tecnologias:** Python, PostgreSQL, Pandas, Tkinter, Multi-threading (`psycopg2`).
*   **Destaque:** Interface gráfica responsiva com processamento assíncrono que não congela a UI durante ingestões de grandes volumes.

### 🤖 [Bot Auditor de Registros Operacionais](https://github.com/guilherme-miguel9/Bot-Auditor)
*   **Descrição:** Solução inteligente de validação operacional que audita instantaneamente dezenas de milhares de registros de campo com validação rigorosa de schema.
*   **Tecnologias:** Python, Pandas, Validação Operacional, Regras de Negócio Avançadas, ETL.
*   **Destaque:** Motor que classifica comentários em 8 categorias de conformidade (ex: excesso de espaço, caracteres proibidos) e isola inconsistências em quarentena.

### 🔒 Automação de Auditoria & Monitoramento SAP (RPA Corporativo)
*   **Descrição:** Robô de automação (RPA) de alta precisão que audita em tempo real dados operacionais subidos no ERP SAP.
*   **Tecnologias:** VBA Excel, SAP Scripting, Auditoria Operacional em Tempo Real.
*   **Destaque:** Processamento intensivo de **+75.297 avaliações/mês** distribuídas em 4 centrais regionais (**CR 12, 13, 14 e 15**), acionando equipes para correção ágil em até 24 horas (tempo hábil). Fundamentou um **ganho verificado de 35% de assertividade operacional** no setor. *(Projeto mantido em ambiente privado/confidencial).*

### 📚 [RAG-PDF: Assistente Operacional Inteligente](https://github.com/guilherme-miguel9/RAG-PDF)
*   **Descrição:** Sistema RAG de nível de produção, projetado para extrair e responder perguntas sobre Procedimentos Operacionais Padrão (POPs) com **mitigação ativa de alucinações via citação de página**.
*   **Tecnologias:** Python, LangChain, ChromaDB, Docling, Reranker Cross-Encoder, Streamlit, LM Studio (LLM 100% Local).
*   **Destaque:** Execução 100% local e privada, pipeline híbrido em 2 estágios (Vector Search + Cross-Encoder Reranker) e extração estruturada de tabelas e textos via Docling.

---

## 💻 Tecnologias Empregadas

*   **Estrutura & Semântica:** HTML5 moderno com boas práticas de SEO, Meta Tags Open Graph e Twitter Cards para compartilhamento profissional nas redes sociais.
*   **Estilização:** CSS3 Avançado (Glassmorphic containers, Gradientes Navy Blue/Branco, responsividade Mobile-First e selos customizados).
*   **Comportamento:** Vanilla JavaScript (Simulador de rede neural física com partículas de fundo, gráfico animado em canvas 2D e integração dinâmica de contato via WhatsApp).
*   **Hospedagem & Deploy:** GitHub Pages com atualização automatizada via CI/CD nativo.

---

## 📂 Estrutura de Arquivos

```text
portfolio/
├── docs/
│   ├── index.html              # Página principal (SEO & Semântica em PT-BR)
│   ├── view/
│   │   ├── styles.css          # Estilos CSS, Variáveis e Responsividade
│   │   └── images/             # Imagens e ativos visuais do projeto
│   └── model/
│       ├── playground.js       # Lógica do Simulador de ML e Rede Neural de Fundo
│       └── botao_enviar.js     # Integração do Formulário de Contato com WhatsApp
├── README.md                   # Esta documentação (em Português)
└── .gitignore                  # Filtros de arquivos Git
```

---

## ⚙️ Como Executar o Projeto Localmente

Não há necessidade de instalar nenhuma dependência externa de pacotes (como npm ou node) para rodar o site.

### Método Simples:
1. Dê um duplo clique no arquivo `docs/index.html` em sua máquina. O navegador abrirá o site localmente via protocolo `file:///`.

### Método via Servidor HTTP Local (Python):
Caso queira testar sob um servidor local padrão:
```bash
python -m http.server 8000 --directory docs
```
Em seguida, acesse no seu navegador: `http://localhost:8000`

---

## 📧 Contato

*   **LinkedIn:** [linkedin.com/in/guilherme-barros-55bb73286](https://linkedin.com/in/guilherme-barros-55bb73286)
*   **GitHub:** [github.com/guilherme-miguel9](https://github.com/guilherme-miguel9)
