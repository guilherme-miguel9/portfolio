# Portfólio — Guilherme Miguel (Engenheiro de Dados & Automação)

Portfólio estático hospedado no GitHub Pages apresentando projetos de Engenharia de Dados, Lakehouse Medallion, Automação/RPA, IA Local (RAG e Visão Computacional) e APIs em Python.

Acesse online: https://guilherme-miguel9.github.io/portfolio/

---

## Visual & Padrões

- **Light & Dark automáticos + alternador manual:** acompanha a preferência do sistema operacional (`prefers-color-scheme`) e permite troca manual pela barra superior, com persistência em `localStorage`.
- **Arquitetura de interface inspirada nas diretrizes da Apple:** tipografia nativa do sistema, hierarquia por peso e escala, painéis unificados com divisórias finas (*hairlines*) e *Liquid Glass* restrito a elementos sobrepostos (barra de navegação e menu móvel).
- **Zero dependências externas:** HTML5 semântico, CSS com tokens e Vanilla JavaScript.

---

## Projetos Apresentados

- **Públicos (com filtro por categoria):** DataForge (Data Lakehouse Medallion), Lumi (App de Integração & Sincronização SQL), Bot Auditor de Registros Operacionais, RAG-PDF, Automação de Cobranças por Rotas, RPA de Análise de Fotos com VLM Local, Bot Telegram Routheon, API Route, API de Reservas & Propriedades (Seazone) e Radar Olist.
- **Corporativos:** seção minimalista sem links externos para soluções desenvolvidas em ambiente privado (Auditoria & Monitoramento SAP).

---

## Como Editar Textos, Projetos e Contatos

Todo o conteúdo fica centralizado em [`docs/model/dados.js`](docs/model/dados.js):

1. Abra `docs/model/dados.js`.
2. Para alterar o **e-mail**, edite `contato.email`.
3. Para adicionar ou editar **projetos públicos** ou **corporativos**, altere os arrays `projetos.publicos` ou `projetos.corporativos.lista`.
4. Salve o arquivo — não é preciso editar HTML para atualizar o conteúdo.

---

## Estrutura de Arquivos

```text
portfolio/
├── docs/
│   ├── index.html              # Estrutura semântica e inicialização de tema
│   ├── view/
│   │   ├── styles.css          # Tokens Light/Dark, layout, tipografia e acessibilidade
│   │   └── images/             # Imagens do perfil e projetos
│   └── model/
│       ├── dados.js            # Conteúdo centralizado do portfólio
│       └── render.js           # Renderização dinâmica, filtros, tema e menu móvel
└── README.md
```

---

## Executar Localmente

```bash
python3 -m http.server 8000 --directory docs
```

Acesse `http://localhost:8000` no navegador.

---

## Contato

- **LinkedIn:** https://linkedin.com/in/guilherme-miguel-dados
- **GitHub:** https://github.com/guilherme-miguel9
- **E-mail:** guicaruaru@gmail.com

---

## Licença

MIT.
