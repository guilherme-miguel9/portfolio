# 📊 Portfólio de Ciência de Dados & Analytics — Guilherme Miguel

Bem-vindo ao meu portfólio profissional! Este projeto foi desenvolvido para demonstrar minhas habilidades na interseção entre engenharia de software e ciência de dados, focando na resolução de problemas reais de negócios por meio de algoritmos, otimização e pipelines automatizados.

🔗 **Acesse o portfólio online:** [guilherme-miguel9.github.io/portfolio](https://guilherme-miguel9.github.io/portfolio/)

---

## 🚀 Destaques do Portfólio

### 1. **Laboratório Interativo de Machine Learning (ML)**
Uma seção inovadora do portfólio que permite treinar modelos de aprendizado de máquina diretamente no navegador do visitante:
*   **Parâmetros Personalizáveis:** Escolha entre **Rede Neural Multicamadas (MLP)**, **Classificador Random Forest** ou **Regressão Linear**, e ajuste a *Taxa de Aprendizado (Learning Rate)*, o número de *Épocas* e o nível de *Ruído dos Dados*.
*   **Feedback em Tempo Real:** Acompanhe a curva de perda (*Loss*) diminuindo e a acurácia (*Accuracy*) aumentando por meio de um gráfico animado de dupla escala renderizado diretamente no HTML5 Canvas.
*   **Fidelidade Matemática:** Os modelos simulam dinâmicas de convergência reais dependendo dos hiperparâmetros configurados.

### 2. **Fundo Dinâmico de Rede Neural**
Um efeito dinâmico desenvolvido sob medida utilizando um algoritmo de partículas em JavaScript para simular conexões neurais. As partículas flutuam pelo fundo da página e geram conexões que interagem e reagem à movimentação do mouse.

---

## 🛠️ Projetos em Destaque

### 🗄️ [App de Integração & Sincronização SQL](https://github.com/guilherme-miguel9/APP-INTEGRACAO-BD)
*   **Descrição:** Software desktop desenvolvido em Python para automatizar a leitura, limpeza e importação de planilhas Excel (`.xlsx`/`.xls`) diretamente em tabelas do banco PostgreSQL em alta performance.
*   **Tecnologias:** Python, PostgreSQL, Pandas, Tkinter, Multi-threading (`psycopg2`).
*   **Destaque:** Interface gráfica responsiva com processamento assíncrono multi-threading, garantindo que a aplicação não trave ou congele durante a carga de grandes volumes de dados.

### 🤖 [Bot Auditor de Registros Operacionais](https://github.com/guilherme-miguel9/Bot-Auditor)
*   **Descrição:** Solução inteligente de auditoria e validação operacional que processa instantaneamente dezenas de milhares de registros e notas de campo em segundos.
*   **Tecnologias:** Python, Pandas, Validação Operacional, Regras de Negócio Avançadas, ETL.
*   **Destaque:** Motor de validação de alta precisão que classifica automaticamente comentários em 8 categorias operacionais (ex: excesso de espaço, caracteres proibidos, notas incorretas), garantindo total conformidade no campo.

### 🔒 Automação de Auditoria & Monitoramento SAP (RPA Corporativo)
*   **Descrição:** Robô de automação (RPA) de alta precisão que coleta informações operacionais diretamente do ERP SAP em tempo real logo após a subida dos dados.
*   **Tecnologias:** VBA Excel, SAP Scripting, Auditoria Operacional em Tempo Real.
*   **Destaque:** Captura instantânea de divergências e erros no SAP, acionando as equipes para correção em até 24 horas (tempo hábil), o que trouxe **35% de ganho direto de assertividade operacional** e conformidade para o setor. *(Projeto mantido em ambiente privado/confidencial).*

### 📚 [RAG-PDF: Assistente Operacional Inteligente](https://github.com/guilherme-miguel9/RAG-PDF)
*   **Descrição:** Sistema de *Retrieval-Augmented Generation* (RAG) de nível de produção, projetado para extrair e responder perguntas sobre Procedimentos Operacionais Padrão (POPs) e manuais técnicos com **zero alucinação e citação exata de página**.
*   **Tecnologias:** Python, LangChain, ChromaDB, Docling, Reranker Cross-Encoder, Streamlit, LM Studio (LLM 100% Local).
*   **Destaque:** Execução 100% local com privacidade garantida, pipeline híbrido em 2 estágios (Vector Search + Bi-Encoder/Cross-Encoder Reranker) e interface inspirada no Apple Design System.

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
