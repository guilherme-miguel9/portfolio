/**
 * ==============================================================================
 * 🚀 RENDERIZADOR AUTOMÁTICO DO PORTFÓLIO (render.js)
 * ==============================================================================
 * Este script lê todos os dados de 'PORTFOLIO_DADOS' (definidos em dados.js)
 * e injeta dinamicamente nas seções do HTML.
 * ==============================================================================
 */

(function () {
  'use strict';

  function renderPortfolio() {
    if (typeof PORTFOLIO_DADOS === 'undefined') {
      console.error('PORTFOLIO_DADOS não foi encontrado. Verifique se dados.js foi carregado antes.');
      return;
    }

    const d = PORTFOLIO_DADOS;

    // 1. RENDER HERO / PERFIL
    if (d.perfil) {
      const p = d.perfil;
      const elBadge = document.getElementById('hero-badge-texto');
      if (elBadge && p.cargoBadge) elBadge.textContent = p.cargoBadge;

      const elTitle = document.getElementById('hero-titulo');
      if (elTitle && p.tituloHero) elTitle.innerHTML = p.tituloHero;

      const elSubtitle = document.getElementById('hero-subtitulo');
      if (elSubtitle && p.subtitulo) elSubtitle.textContent = p.subtitulo;

      const elDesc = document.getElementById('hero-descricao');
      if (elDesc && p.descricao) elDesc.textContent = p.descricao;

      const elFoto = document.getElementById('hero-foto');
      if (elFoto && p.fotoPerfil) {
        elFoto.src = p.fotoPerfil;
        elFoto.alt = `Foto de ${p.nome || 'Guilherme Miguel'}`;
      }

      const elBtnProjetos = document.getElementById('hero-btn-projetos');
      if (elBtnProjetos && p.botoes) {
        elBtnProjetos.textContent = p.botoes.projetosTexto || 'Ver Projetos';
        elBtnProjetos.href = p.botoes.projetosLink || '#projetos';
      }

      const elBtnContato = document.getElementById('hero-btn-contato');
      if (elBtnContato && p.botoes) {
        elBtnContato.textContent = p.botoes.contatoTexto || 'Entre em Contato';
        elBtnContato.href = p.botoes.contatoLink || '#contato';
      }
    }

    // 2. RENDER SOBRE MIM & MÉTRICAS
    if (d.sobre) {
      const s = d.sobre;
      const elTag = document.getElementById('sobre-tag');
      if (elTag && s.tag) elTag.textContent = s.tag;

      const elTitulo = document.getElementById('sobre-titulo');
      if (elTitulo && s.titulo) elTitulo.textContent = s.titulo;

      const elSub = document.getElementById('sobre-subtitulo');
      if (elSub && s.subtitulo) elSub.textContent = s.subtitulo;

      const elTextos = document.getElementById('sobre-textos');
      if (elTextos && s.paragrafos) {
        elTextos.innerHTML = s.paragrafos.map(p => `<p>${p}</p>`).join('');
      }

      const elMetricas = document.getElementById('sobre-metricas');
      if (elMetricas && s.metricas) {
        elMetricas.innerHTML = s.metricas.map(m => `
          <div class="stat-box">
            <span class="stat-num">${m.numero}</span>
            <span class="stat-label">${m.descricao}</span>
          </div>
        `).join('');
      }
    }

    // 3. RENDER COMPETÊNCIAS & FERRAMENTAS
    if (d.competencias) {
      const c = d.competencias;
      const elTag = document.getElementById('competencias-tag');
      if (elTag && c.tag) elTag.textContent = c.tag;

      const elTitulo = document.getElementById('competencias-titulo');
      if (elTitulo && c.titulo) elTitulo.textContent = c.titulo;

      const elGrid = document.getElementById('competencias-grid');
      if (elGrid && c.lista) {
        const iconesSVG = {
          database: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
          etl: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14h6v8H4zm10-7h6v15h-6zM4 2h6v8H4z"></path></svg>`,
          ml: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg>`,
          deploy: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`
        };

        elGrid.innerHTML = c.lista.map(item => `
          <div class="skill-card">
            <div class="skill-icon">
              ${iconesSVG[item.icone] || iconesSVG.database}
            </div>
            <h3>${item.titulo}</h3>
            <p>${item.descricao}</p>
            <div class="skill-badges">
              ${item.tags.map(t => `<span>${t}</span>`).join('')}
            </div>
          </div>
        `).join('');
      }
    }

    // 4. RENDER ARQUITETURA & RESILIÊNCIA
    if (d.arquitetura) {
      const a = d.arquitetura;
      const elTag = document.getElementById('arquitetura-tag');
      if (elTag && a.tag) elTag.textContent = a.tag;

      const elTitulo = document.getElementById('arquitetura-titulo');
      if (elTitulo && a.titulo) elTitulo.textContent = a.titulo;

      const elSub = document.getElementById('arquitetura-subtitulo');
      if (elSub && a.subtitulo) elSub.textContent = a.subtitulo;

      const elGrid = document.getElementById('arquitetura-grid');
      if (elGrid && a.cards) {
        const iconesPerguntas = [
          `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
          `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>`,
          `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
          `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>`,
          `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
          `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>`,
          `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
          `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>`
        ];

        elGrid.innerHTML = a.cards.map((card, idx) => `
          <div class="arch-card">
            <span class="arch-question">[ ${card.tag} ]</span>
            <h3>
              ${iconesPerguntas[idx % iconesPerguntas.length]}
              ${card.pergunta}
            </h3>
            <p>${card.resposta}</p>
          </div>
        `).join('');
      }
    }

    // 5. RENDER PROJETOS
    if (d.projetos) {
      const proj = d.projetos;
      const elTag = document.getElementById('projetos-tag');
      if (elTag && proj.tag) elTag.textContent = proj.tag;

      const elTitulo = document.getElementById('projetos-titulo');
      if (elTitulo && proj.titulo) elTitulo.textContent = proj.titulo;

      const elSub = document.getElementById('projetos-subtitulo');
      if (elSub && proj.subtitulo) elSub.textContent = proj.subtitulo;

      const elGrid = document.getElementById('projetos-grid');
      if (elGrid && proj.lista) {
        elGrid.innerHTML = proj.lista.map(item => {
          // Bloco da Imagem
          let imgHtml = '';
          if (item.imagem) {
            imgHtml = `
              <div class="project-img-wrapper">
                <img src="${item.imagem}" alt="${item.titulo}" class="project-img" />
                ${item.badgeOverlay ? `<div class="project-img-overlay"><span>${item.badgeOverlay}</span></div>` : ''}
              </div>
            `;
          } else if (item.badgeOverlay) {
            imgHtml = `
              <div class="project-img-wrapper">
                <div class="project-img-overlay"><span>${item.badgeOverlay}</span></div>
              </div>
            `;
          }

          // Bloco do Botão / Link
          let footerBtnHtml = '';
          if (item.tipo === 'privado') {
            footerBtnHtml = `
              <div class="private-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <span>${item.textoPrivado || 'Ambiente Corporativo Privado'}</span>
              </div>
            `;
          } else {
            footerBtnHtml = `
              <a href="${item.link || '#'}" target="_blank" class="project-link">
                <span>Ver no GitHub</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
              </a>
            `;
          }

          return `
            <article class="project-card">
              ${imgHtml}
              <div class="project-body">
                <span class="project-category">[ ${item.categoria} ]</span>
                <h3 class="project-title">${item.titulo}</h3>
                <p class="project-desc">${item.descricao}</p>
                <div class="project-tags">
                  ${item.tags.map(t => `<span>${t}</span>`).join('')}
                </div>
                <div class="project-footer">
                  ${footerBtnHtml}
                </div>
              </div>
            </article>
          `;
        }).join('');
      }
    }

    // 6. RENDER SIMULADOR ML (TEXTOS)
    if (d.simulador) {
      const sim = d.simulador;
      const elTag = document.getElementById('simulador-tag');
      if (elTag && sim.tag) elTag.textContent = sim.tag;

      const elTitulo = document.getElementById('simulador-titulo');
      if (elTitulo && sim.titulo) elTitulo.textContent = sim.titulo;

      const elSub = document.getElementById('simulador-subtitulo');
      if (elSub && sim.subtitulo) elSub.textContent = sim.subtitulo;
    }

    // 7. RENDER CONTATO & REDES
    if (d.contato) {
      const ct = d.contato;
      const elTag = document.getElementById('contato-tag');
      if (elTag && ct.tag) elTag.textContent = ct.tag;

      const elTitulo = document.getElementById('contato-titulo');
      if (elTitulo && ct.titulo) elTitulo.textContent = ct.titulo;

      const elSub = document.getElementById('contato-subtitulo');
      if (elSub && ct.subtitulo) elSub.textContent = ct.subtitulo;

      const elFormTitulo = document.getElementById('contato-form-titulo');
      if (elFormTitulo && ct.whatsapp && ct.whatsapp.tituloFormulario) {
        elFormTitulo.textContent = ct.whatsapp.tituloFormulario;
      }

      const elBtnText = document.getElementById('contato-btn-texto');
      if (elBtnText && ct.whatsapp && ct.whatsapp.textoBotao) {
        elBtnText.textContent = ct.whatsapp.textoBotao;
      }

      const elRedes = document.getElementById('contato-redes-box');
      if (elRedes && ct.redes) {
        const iconesSocial = {
          linkedin: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
          github: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`
        };

        elRedes.innerHTML = `
          <h3>Redes Profissionais</h3>
          ${ct.redes.map(r => `
            <a href="${r.link}" target="_blank" class="social-card">
              <div class="social-icon">
                ${iconesSocial[r.tipo] || iconesSocial.github}
              </div>
              <div class="social-info">
                <h4>${r.titulo}</h4>
                <p>${r.subtitulo}</p>
              </div>
            </a>
          `).join('')}
        `;
      }
    }

    // 8. RENDER RODAPÉ
    if (d.rodape) {
      const rd = d.rodape;
      const elCopy = document.getElementById('footer-copyright');
      if (elCopy && rd.copyright) elCopy.textContent = rd.copyright;

      const elNota = document.getElementById('footer-nota');
      if (elNota && rd.nota) elNota.textContent = rd.nota;
    }
  }

  // Executa o render assim que o DOM estiver pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderPortfolio);
  } else {
    renderPortfolio();
  }

  // Disponibiliza globalmente caso queira forçar re-render
  window.atualizarPortfolio = renderPortfolio;
})();
