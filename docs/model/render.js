/**
 * ==============================================================================
 * RENDERIZADOR DO PORTFÓLIO & CONTROLE DE TEMA (render.js)
 * ==============================================================================
 */

(function () {
  "use strict";

  const THEME_STORAGE_KEY = "portfolio-theme";
  const DARK_QUERY = "(prefers-color-scheme: dark)";

  const ICONS = {
    arrowUpRight: `<svg class="ic" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"></path></svg>`,
    chevronRight: `<svg class="ic channel-chevron" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"></path></svg>`,
    linkedin: `<svg class="ic" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
    github: `<svg class="ic" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>`,
    mail: `<svg class="ic" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`
  };

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el && value != null) el.textContent = value;
  }

  // ==========================================================================
  // TEMA AUTOMÁTICO (OS) + ALTERNADOR MANUAL
  // ==========================================================================

  function getEffectiveTheme() {
    const explicit = document.documentElement.dataset.theme;
    if (explicit === "light" || explicit === "dark") return explicit;
    return window.matchMedia && window.matchMedia(DARK_QUERY).matches ? "dark" : "light";
  }

  function syncThemeUI() {
    const effective = getEffectiveTheme();
    const isDark = effective === "dark";

    const meta = document.getElementById("meta-theme-color");
    if (meta) meta.setAttribute("content", isDark ? "#000000" : "#f5f5f7");

    const toggle = document.getElementById("theme-toggle");
    if (toggle) {
      toggle.setAttribute("aria-pressed", String(isDark));
      const nextLabel = isDark ? "Mudar para tema claro" : "Mudar para tema escuro";
      toggle.setAttribute("aria-label", nextLabel);
      toggle.setAttribute("title", nextLabel);
    }
  }

  function initThemeController() {
    syncThemeUI();

    const toggle = document.getElementById("theme-toggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        const next = getEffectiveTheme() === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = next;
        try {
          localStorage.setItem(THEME_STORAGE_KEY, next);
        } catch (e) {}
        syncThemeUI();
      });
    }

    if (window.matchMedia) {
      const mql = window.matchMedia(DARK_QUERY);
      const onSystemChange = () => {
        if (!document.documentElement.dataset.theme) {
          syncThemeUI();
        }
      };
      if (mql.addEventListener) mql.addEventListener("change", onSystemChange);
      else if (mql.addListener) mql.addListener(onSystemChange);
    }
  }

  window.resetTemaSistema = function () {
    delete document.documentElement.dataset.theme;
    try {
      localStorage.removeItem(THEME_STORAGE_KEY);
    } catch (e) {}
    syncThemeUI();
  };

  // ==========================================================================
  // NAVBAR SCROLL-EDGE & MENU MÓVEL
  // ==========================================================================

  function initNavigation() {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      const updateScrollEdge = () => {
        navbar.classList.toggle("scrolled", window.scrollY > 8);
      };
      updateScrollEdge();
      window.addEventListener("scroll", updateScrollEdge, { passive: true });
    }

    const menuBtn = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    if (!menuBtn || !mobileNav) return;

    const setMenuOpen = (open) => {
      mobileNav.classList.toggle("open", open);
      menuBtn.setAttribute("aria-expanded", String(open));
      mobileNav.setAttribute("aria-hidden", String(!open));
    };

    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = mobileNav.classList.contains("open");
      setMenuOpen(!isOpen);
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuOpen(false));
    });

    document.addEventListener("click", (e) => {
      if (
        mobileNav.classList.contains("open") &&
        !mobileNav.contains(e.target) &&
        !menuBtn.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileNav.classList.contains("open")) {
        setMenuOpen(false);
        menuBtn.focus();
      }
    });
  }

  // ==========================================================================
  // RENDERIZAÇÃO DO CONTEÚDO
  // ==========================================================================

  let activeCategory = "Todos";

  function renderProjectsGrid(lista, category) {
    const grid = document.getElementById("projetos-grid");
    if (!grid || !Array.isArray(lista)) return;

    const filtered =
      category === "Todos" ? lista : lista.filter((item) => item.categoria === category);

    grid.innerHTML = filtered
      .map((item) => {
        const mediaHtml = item.imagem
          ? `
            <div class="project-media">
              <img src="${escapeHtml(item.imagem)}" alt="${escapeHtml(item.titulo)}" class="project-img" loading="lazy" />
            </div>
          `
          : "";

        const highlightHtml = item.destaque
          ? `<p class="project-highlight">${escapeHtml(item.destaque)}</p>`
          : "";

        const tagsHtml = Array.isArray(item.tags)
          ? `<div class="tag-row">${item.tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}</div>`
          : "";

        return `
          <article class="project-card">
            ${mediaHtml}
            <div class="project-body">
              <div class="project-meta">
                <span>${escapeHtml(item.categoria)}</span>
              </div>
              <h3 class="project-title">${escapeHtml(item.titulo)}</h3>
              ${highlightHtml}
              <p class="project-desc">${escapeHtml(item.descricao)}</p>
              ${tagsHtml}
              <div class="project-footer">
                <a href="${escapeHtml(item.link)}" target="_blank" rel="noopener noreferrer" class="project-link">
                  <span>Ver no GitHub</span>
                  ${ICONS.arrowUpRight}
                </a>
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function renderPortfolio() {
    if (typeof PORTFOLIO_DADOS === "undefined") {
      console.error("PORTFOLIO_DADOS não encontrado. Verifique se dados.js foi carregado.");
      return;
    }

    const d = PORTFOLIO_DADOS;

    // 1. HERO
    if (d.perfil) {
      const p = d.perfil;
      setText("hero-eyebrow", p.eyebrow);
      setText("hero-titulo", p.titulo);
      setText("hero-subtitulo", p.subtitulo);

      const elFoto = document.getElementById("hero-foto");
      if (elFoto && p.fotoPerfil) {
        elFoto.src = p.fotoPerfil;
        elFoto.alt = `Foto de ${p.nome || "Guilherme Miguel"}`;
      }

      if (p.botoes) {
        const btnProj = document.getElementById("hero-btn-projetos");
        if (btnProj) {
          btnProj.textContent = p.botoes.projetosTexto || "Ver projetos";
          btnProj.href = p.botoes.projetosLink || "#projetos";
        }
        const btnCont = document.getElementById("hero-btn-contato");
        if (btnCont) {
          btnCont.textContent = p.botoes.contatoTexto || "Entrar em contato";
          btnCont.href = p.botoes.contatoLink || "#contato";
        }
      }

      const elMetricas = document.getElementById("hero-metricas");
      if (elMetricas && Array.isArray(p.metricas)) {
        elMetricas.innerHTML = p.metricas
          .map(
            (m) => `
              <div class="metric-item">
                <span class="metric-num">${escapeHtml(m.numero)}</span>
                <span class="metric-desc">${escapeHtml(m.descricao)}</span>
              </div>
            `
          )
          .join("");
      }
    }

    // 2. SOBRE
    if (d.sobre) {
      setText("sobre-eyebrow", d.sobre.eyebrow);
      setText("sobre-titulo", d.sobre.titulo);
      const elTextos = document.getElementById("sobre-textos");
      if (elTextos && Array.isArray(d.sobre.paragrafos)) {
        elTextos.innerHTML = d.sobre.paragrafos.map((p) => `<p>${escapeHtml(p)}</p>`).join("");
      }
    }

    // 3. PROJETOS PÚBLICOS & CORPORATIVOS
    if (d.projetos) {
      const proj = d.projetos;
      setText("projetos-eyebrow", proj.eyebrow);
      setText("projetos-titulo", proj.titulo);
      setText("projetos-subtitulo", proj.subtitulo);

      const filterEl = document.getElementById("projetos-filtro");
      const categorias = Array.isArray(proj.categorias) ? proj.categorias : ["Todos"];

      if (filterEl) {
        if (!categorias.includes(activeCategory)) activeCategory = categorias[0] || "Todos";

        filterEl.innerHTML = categorias
          .map((cat) => {
            const isActive = cat === activeCategory;
            return `
              <button
                type="button"
                class="seg-btn${isActive ? " active" : ""}"
                role="tab"
                aria-selected="${isActive}"
                data-category="${escapeHtml(cat)}"
              >${escapeHtml(cat)}</button>
            `;
          })
          .join("");

        filterEl.onclick = (e) => {
          const btn = e.target.closest(".seg-btn");
          if (!btn) return;
          activeCategory = btn.dataset.category || "Todos";
          filterEl.querySelectorAll(".seg-btn").forEach((b) => {
            const on = b === btn;
            b.classList.toggle("active", on);
            b.setAttribute("aria-selected", String(on));
          });
          renderProjectsGrid(proj.publicos, activeCategory);
        };
      }

      renderProjectsGrid(proj.publicos, activeCategory);

      // Bloco minimalista para projetos corporativos/privados (sem links)
      const corpEl = document.getElementById("projetos-corporativos");
      if (corpEl && proj.corporativos && Array.isArray(proj.corporativos.lista)) {
        const corp = proj.corporativos;
        corpEl.innerHTML = `
          <div class="corporate-head">
            <h3>${escapeHtml(corp.titulo || "Projetos corporativos")}</h3>
            <p>${escapeHtml(corp.nota || "")}</p>
          </div>
          <div class="corporate-grid">
            ${corp.lista
              .map(
                (item) => `
                  <article class="corporate-card">
                    <span class="corporate-context">${escapeHtml(item.contexto)}</span>
                    <h4 class="corporate-title">${escapeHtml(item.titulo)}</h4>
                    <p class="corporate-desc">${escapeHtml(item.descricao)}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        `;
      }
    }

    // 4. ARQUITETURA (painel unificado)
    if (d.arquitetura) {
      const a = d.arquitetura;
      setText("arquitetura-eyebrow", a.eyebrow);
      setText("arquitetura-titulo", a.titulo);
      setText("arquitetura-subtitulo", a.subtitulo);

      const archEl = document.getElementById("arquitetura-lista");
      if (archEl && Array.isArray(a.cards)) {
        archEl.innerHTML = a.cards
          .map(
            (card) => `
              <div class="arch-row">
                <span class="arch-index">${escapeHtml(card.tag)}</span>
                <div class="arch-content">
                  <span class="arch-kicker">${escapeHtml(card.subtitulo)}</span>
                  <h3 class="arch-question">${escapeHtml(card.pergunta)}</h3>
                  <p class="arch-answer">${card.resposta}</p>
                </div>
              </div>
            `
          )
          .join("");
      }
    }

    // 5. COMPETÊNCIAS (painel 2x2 unificado)
    if (d.competencias) {
      const c = d.competencias;
      setText("competencias-eyebrow", c.eyebrow);
      setText("competencias-titulo", c.titulo);

      const skillsEl = document.getElementById("competencias-grid");
      if (skillsEl && Array.isArray(c.lista)) {
        skillsEl.innerHTML = c.lista
          .map(
            (item) => `
              <div class="skill-cell">
                <h3 class="skill-title">${escapeHtml(item.titulo)}</h3>
                <p class="skill-desc">${escapeHtml(item.descricao)}</p>
                <div class="tag-row">
                  ${item.tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
                </div>
              </div>
            `
          )
          .join("");
      }
    }

    // 6. CONTATO (LinkedIn, GitHub e E-mail)
    if (d.contato) {
      const ct = d.contato;
      setText("contato-eyebrow", ct.eyebrow);
      setText("contato-titulo", ct.titulo);
      setText("contato-subtitulo", ct.subtitulo);

      const canaisEl = document.getElementById("contato-canais");
      if (canaisEl) {
        const rows = [];

        if (Array.isArray(ct.redes)) {
          ct.redes.forEach((r) => {
            rows.push(`
              <a href="${escapeHtml(r.link)}" target="_blank" rel="noopener noreferrer" class="channel-row">
                <div class="channel-main">
                  <span class="channel-icon">${ICONS[r.tipo] || ICONS.github}</span>
                  <div class="channel-text">
                    <div class="channel-title">${escapeHtml(r.titulo)}</div>
                    <div class="channel-sub">${escapeHtml(r.subtitulo)}</div>
                  </div>
                </div>
                ${ICONS.chevronRight}
              </a>
            `);
          });
        }

        if (ct.email) {
          rows.push(`
            <div class="channel-row">
              <a href="mailto:${escapeHtml(ct.email)}" class="channel-link-area">
                <span class="channel-icon">${ICONS.mail}</span>
                <div class="channel-text">
                  <div class="channel-title">E-mail</div>
                  <div class="channel-sub">${escapeHtml(ct.email)}</div>
                </div>
              </a>
              <div class="channel-actions">
                <button type="button" class="copy-btn" id="copy-email-btn" data-email="${escapeHtml(ct.email)}">
                  Copiar
                </button>
                ${ICONS.chevronRight}
              </div>
            </div>
          `);
        }

        canaisEl.innerHTML = rows.join("");

        const copyBtn = document.getElementById("copy-email-btn");
        if (copyBtn) {
          copyBtn.addEventListener("click", () => {
            const addr = copyBtn.dataset.email || "";
            const done = () => {
              copyBtn.textContent = "Copiado";
              setTimeout(() => {
                copyBtn.textContent = "Copiar";
              }, 2000);
            };
            if (navigator.clipboard && navigator.clipboard.writeText) {
              navigator.clipboard.writeText(addr).then(done).catch(() => {});
            } else {
              const tmp = document.createElement("textarea");
              tmp.value = addr;
              tmp.style.position = "fixed";
              tmp.style.opacity = "0";
              document.body.appendChild(tmp);
              tmp.select();
              try {
                document.execCommand("copy");
                done();
              } catch (e) {}
              document.body.removeChild(tmp);
            }
          });
        }
      }
    }

    // 7. RODAPÉ
    if (d.rodape) {
      setText("footer-copyright", d.rodape.copyright);
      setText("footer-nota", d.rodape.nota);
    }
  }

  function init() {
    initThemeController();
    initNavigation();
    renderPortfolio();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.atualizarPortfolio = renderPortfolio;
})();
