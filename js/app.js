(() => {
  'use strict';

  const D = window.MAOS_DATA;
  const root = document.getElementById('app');
  const state = {
    user: JSON.parse(localStorage.getItem('maos_user') || 'null'),
    quizIndex: 0,
    quizScore: 0,
    quizLocked: false
  };

  const icons = {
    hands: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M7 11V4a2 2 0 0 1 4 0v6-5a2 2 0 0 1 4 0v5-3a2 2 0 0 1 4 0v7c0 5-3 8-8 8-4 0-7-2-9-6l-1-2a2 2 0 0 1 3-2l3 3"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8z"/></svg>',
    video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="5" width="14" height="14" rx="2"/><path d="m17 10 4-2v8l-4-2z"/></svg>',
    fire: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 22c4 0 7-3 7-7 0-5-4-7-3-12-4 2-7 5-7 9-1-1-2-3-2-4-2 2-3 4-3 7 0 4 3 7 8 7z"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m8 5 11 7-11 7z"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m3 11 9-8 9 8v10H3z"/><path d="M9 21v-6h6v6"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5z"/><path d="M4 6.5v13"/></svg>',
    game: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M8 6h8a6 6 0 0 1 6 6v3a3 3 0 0 1-5 2l-2-2H9l-2 2a3 3 0 0 1-5-2v-3a6 6 0 0 1 6-6z"/><path d="M8 10v4M6 12h4M16 11h.01M18 13h.01"/></svg>',
    trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 6H4v2a4 4 0 0 0 4 4M17 6h3v2a4 4 0 0 1-4 4"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    logout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M10 17l5-5-5-5M15 12H3M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
    bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg>',
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v5M8 22h8"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
  };

  const icon = (name) => icons[name] || icons.spark;
  const logo = (dark = false) => `<img class="brand-mark" src="assets/brand/${dark ? 'mark-dark' : 'mark'}.svg" alt="">`;
  const initials = (name) => (name || 'Usuário').split(' ').slice(0, 2).map((item) => item[0]).join('').toUpperCase();
  const userName = () => state.user?.name || 'João Lucas';
  const go = (path) => { location.hash = path; };
  const escapeHtml = (text) => String(text).replace(/[&<>'"]/g, (character) => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[character]));

  function toast(message) {
    const element = document.createElement('div');
    element.className = 'toast';
    element.textContent = message;
    document.getElementById('toast-region').appendChild(element);
    setTimeout(() => element.remove(), 2800);
  }

  function brand(dark = false) {
    return `<a class="brand" href="#/" aria-label="Mãos que Conectam — página inicial">${logo(dark)}<span class="brand-copy"><strong>Mãos que Conectam</strong><small>Libras • inclusão • comunidade</small></span></a>`;
  }

  function publicHeader(active = '') {
    return `
      <div class="announcement"><div class="container"><strong>Projeto 2026–2027 • Guararapes-SP</strong><span>Uma iniciativa de inclusão por meio da Libras</span></div></div>
      <header class="site-header">
        <div class="container nav">
          ${brand()}
          <nav class="nav-links" aria-label="Navegação principal">
            <a class="${active === 'inicio' ? 'active' : ''}" href="#/">Início</a>
            <a class="${active === 'projeto' ? 'active' : ''}" href="#/projeto">O projeto</a>
            <a href="#/projeto/estrutura">Estrutura</a>
            <a href="#/projeto/seguranca">Segurança</a>
          </nav>
          <div class="nav-actions">
            <a class="btn btn-secondary btn-sm" href="#/login">Entrar</a>
            <a class="btn btn-primary btn-sm" href="#/cadastro">Criar conta</a>
            <button class="btn btn-ghost icon-btn mobile-toggle" data-action="mobile-menu" aria-label="Abrir menu">${icon('menu')}</button>
          </div>
        </div>
      </header>`;
  }

  function footer() {
    return `<footer class="site-footer"><div class="container">
      <div class="footer-grid">
        <div>${brand(true)}<p style="max-width:370px;margin-top:18px">Plataforma educacional para ampliar o acesso à Libras e reduzir barreiras de comunicação entre pessoas surdas e ouvintes.</p></div>
        <div><h3>Plataforma</h3><a href="#/cursos">Cursos</a><a href="#/atividades">Atividades</a><a href="#/comunidade">Prática em grupo</a></div>
        <div><h3>Projeto</h3><a href="#/projeto">Apresentação</a><a href="#/projeto/estrutura">Etapas</a><a href="#/projeto/seguranca">Segurança</a></div>
        <div><h3>Informações</h3><a href="#/privacidade">Privacidade</a><a href="#/termos">Termos de uso</a><a href="mailto:contato@maosqueconectam.org">Contato</a></div>
      </div>
      <div class="footer-bottom"><span>© 2026–2027 Mãos que Conectam.</span><span>Rotaract Club de Guararapes • São Paulo</span></div>
    </div></footer>`;
  }

  function landing() {
    document.title = 'Mãos que Conectam — Aprendizado de Libras';
    root.innerHTML = `<div class="page">${publicHeader('inicio')}<main id="conteudo">
      <section class="hero"><div class="container hero-grid">
        <div class="hero-copy">
          <span class="eyebrow">Plataforma de aprendizado em Libras</span>
          <h1>Comunicação <span>sem barreiras.</span></h1>
          <p>Uma proposta educacional do Rotaract Club de Guararapes para ensinar Libras com aulas orientadas, prática diária, certificação e encontros supervisionados.</p>
          <div class="hero-actions"><a class="btn btn-primary" href="#/cadastro">Conhecer a plataforma ${icon('arrow')}</a><a class="btn btn-secondary" href="#/projeto">Ler o projeto completo</a></div>
          <div class="hero-notes">
            <div class="hero-note"><strong>Aprendizado progressivo</strong><span>Conteúdo dividido em módulos</span></div>
            <div class="hero-note"><strong>Prática contínua</strong><span>Atividades curtas todos os dias</span></div>
            <div class="hero-note"><strong>Ambiente protegido</strong><span>Regras, denúncia e supervisão</span></div>
          </div>
        </div>
        <div class="product-frame" aria-label="Demonstração da área de aula">
          <div class="product-frame-bar"><span class="window-dots"><i></i><i></i><i></i></span><strong>Módulo 01 — Fundamentos</strong><span>42% concluído</span></div>
          <div class="product-frame-main">
            <div class="lesson-preview">
              <div class="lesson-preview-top"><span>Aula 03</span><span>10 min</span></div>
              <div class="lesson-preview-image"><img src="assets/images/libras-avatar-reference.png" alt="Ilustração de apoio para uma aula de Libras"></div>
              <div class="lesson-caption"><strong>Alfabeto manual: N a Z</strong><span>Prática visual acompanhada de exercício</span></div>
            </div>
            <div class="module-panel">
              <h3>Fundamentos de Libras</h3><p class="muted">12 aulas • nível iniciante</p>
              <div class="module-progress"><div class="progress"><div class="progress-bar" style="width:42%"></div></div><strong>42%</strong></div>
              <div class="module-list">
                <div class="module-item"><span class="module-item-index">✓</span><span>Boas-vindas e cultura surda</span><small>08:35</small></div>
                <div class="module-item"><span class="module-item-index">✓</span><span>Alfabeto manual: A a M</span><small>11:20</small></div>
                <div class="module-item active"><span class="module-item-index">03</span><span>Alfabeto manual: N a Z</span><small>10:45</small></div>
                <div class="module-item"><span class="module-item-index">04</span><span>Prática guiada</span><small>06:00</small></div>
              </div>
              <a class="btn btn-dark" href="#/aula/fundamentos" style="margin-top:auto">Abrir aula demonstrativa</a>
            </div>
          </div>
        </div>
      </div></section>

      <section class="institution-band"><div class="container"><p>Projeto proposto para o ciclo</p><img src="assets/images/rotaract-logo.png" alt="Rotaract Club de Guararapes"><p>2026–2027 • Guararapes-SP</p></div></section>

      <section class="section"><div class="container">
        <div class="section-heading"><div><span class="eyebrow">Recursos da plataforma</span><h2>Ensino, prática e comunidade no mesmo ambiente.</h2></div><p class="muted">As funcionalidades foram organizadas a partir das quatro etapas descritas no projeto, com foco em continuidade pedagógica e segurança de uso.</p></div>
        <div class="feature-index">
          ${[
            ['01','Aulas com especialistas','Vídeos, podcasts e módulos estruturados para construir uma base consistente em Libras.'],
            ['02','Atividades diárias','Questionários, exercícios visuais e minijogos para reforçar o conteúdo aprendido.'],
            ['03','Progressão e certificado','Acompanhamento de desempenho, sequência de estudos e emissão de certificados por módulo.'],
            ['04','Conteúdo infantojuvenil','Atividades com linguagem simples, recursos visuais, narrativas e adaptação por faixa etária.'],
            ['05','Prática supervisionada','Encontros em vídeo para integrantes de instituições parceiras praticarem em ambiente organizado.'],
            ['06','Apoio à acessibilidade','Ferramentas de consulta e tradução para apoiar dúvidas ao longo da jornada de aprendizado.']
          ].map(([number,title,text]) => `<article class="feature-item"><span class="feature-number">${number}</span><h3>${title}</h3><p>${text}</p></article>`).join('')}
        </div>
      </div></section>

      <section class="section section-white"><div class="container journey-grid">
        <div class="editorial-media"><video autoplay muted loop playsinline src="assets/videos/inclusao.mp4"></video><div class="editorial-media-copy"><span class="eyebrow" style="color:#fff">Inclusão na prática</span><h3>Acessibilidade começa quando a comunicação é possível para todos.</h3></div></div>
        <div><span class="eyebrow">Jornada do usuário</span><h2 style="font-size:clamp(2.2rem,4vw,3.7rem);line-height:1.03">Quatro etapas com objetivos claros.</h2>
          <div class="journey-list">
            ${[
              ['01','Diagnóstico e acesso','Login institucional ou Google, seguido de questionário para identificar objetivos e nível atual.'],
              ['02','Formação orientada','Videoaulas, podcasts, módulos e certificação de conclusão.'],
              ['03','Fixação diária','Exercícios curtos, progressão, conquistas e conteúdo adaptado por idade.'],
              ['04','Prática em comunidade','Videochamadas supervisionadas, networking e protocolo de segurança.']
            ].map(([number,title,text]) => `<div class="journey-step"><strong>${number}</strong><div><h3>${title}</h3><p>${text}</p></div></div>`).join('')}
          </div>
        </div>
      </div></section>

      <section class="section"><div class="container"><div class="cta-panel"><div><span class="eyebrow" style="color:#ff8ab9">Demonstração navegável</span><h2>Veja como a proposta se transforma em uma plataforma de uso real.</h2><p>Crie um perfil de demonstração e acesse cursos, atividades, ranking, agenda e área administrativa.</p></div><a class="btn btn-primary" href="#/cadastro">Entrar na demonstração</a></div></div></section>
    </main>${footer()}</div>`;
  }

  function project() {
    document.title = 'O projeto — Mãos que Conectam';
    root.innerHTML = `<div class="page">${publicHeader('projeto')}<main id="conteudo">
      <section class="section-sm"><div class="container"><span class="eyebrow">Projeto Mãos que Conectam</span><h1 class="page-title">Libras como ferramenta de autonomia, convivência e inclusão social.</h1><p class="muted" style="max-width:760px;font-size:1.05rem">O projeto propõe uma plataforma digital de aprendizado gamificado para jovens e adultos, com área adaptada ao público infantojuvenil e espaço supervisionado de prática.</p></div></section>

      <section class="section section-white"><div class="container journey-grid">
        <div><span class="eyebrow">Justificativa</span><h2 style="font-size:clamp(2.2rem,4vw,3.7rem)">Comunicação é condição para participação social.</h2><p class="muted">O desconhecimento da Libras ainda cria barreiras em escolas, serviços públicos, ambientes profissionais e situações cotidianas. A proposta busca ampliar o acesso ao aprendizado por meio de uma experiência contínua, acessível e vinculada a uma comunidade.</p><div class="project-stats"><div><strong>2,3 milhões</strong><span>de pessoas com deficiência auditiva no Brasil, segundo o dado de 2021 apresentado no projeto.</span></div><div><strong>1,5 bilhão+</strong><span>de pessoas no mundo com algum grau de perda auditiva, conforme a referência da OMS usada na apresentação.</span></div></div><a class="btn btn-secondary btn-sm" href="https://youtube.com/shorts/ZYpzgMmYPO8?si=vOHNL4GNDbfb9QOD" target="_blank" rel="noopener noreferrer">Ver vídeo de referência</a><blockquote style="margin:31px 0 0;padding-left:20px;border-left:3px solid var(--brand);font-family:Georgia,'Times New Roman',serif;font-size:1.35rem">“É fundamental diminuir a distância entre o que se diz e o que se faz.”<br><small class="muted" style="font-family:Arial,sans-serif;font-size:.72rem">Paulo Freire</small></blockquote></div>
        <div><h3>Problemas identificados</h3><div class="problem-list">${['Falta de ensino de Libras nas escolas','Escassez de intérpretes em serviços públicos','Pouca oferta de cursos gratuitos e contínuos','Aplicativos e ferramentas acessíveis ainda limitados'].map((item) => `<div class="problem-item"><span>${icon('check')}</span><strong>${item}</strong></div>`).join('')}</div></div>
      </div></section>

      <section class="section" id="estrutura"><div class="container"><div class="section-heading"><div><span class="eyebrow">Estrutura e funcionamento</span><h2>Quatro etapas para transformar interesse em prática.</h2></div><p class="muted">Cada etapa amplia a profundidade da experiência e pode ser implantada de forma progressiva, conforme as parcerias e a estrutura técnica do projeto.</p></div>
        <div class="stage-grid">${[
          ['1ª etapa','Acesso, diagnóstico e aulas','Login institucional ou Google, questionário inicial, videoaulas, podcasts, certificado e possibilidade de horas complementares.'],
          ['2ª etapa','Atividades e gamificação','Questionários, vídeos curtos, minijogos, progressão diária e um mascote como elemento de incentivo.'],
          ['3ª etapa','Experiência infantojuvenil','Conteúdo visual e lúdico, linguagem simples, atividades narrativas e adaptação à faixa etária.'],
          ['4ª etapa','Prática em videochamada','Interação em tempo real para integrantes de instituições parceiras, com supervisão e regras de convivência.']
        ].map(([number,title,text]) => `<article class="stage-card"><span class="stage-number">${number}</span><h3>${title}</h3><p class="muted">${text}</p></article>`).join('')}</div>
      </div></section>

      <section class="section section-white" id="seguranca"><div class="container"><div class="security-panel"><div class="security-copy"><span class="eyebrow" style="color:#ff8ab9">Segurança e responsabilidade</span><h2 style="font-size:clamp(2.2rem,4vw,3.8rem)">Interação protegida desde o planejamento.</h2><p>A área de prática deve ser vinculada a instituições parceiras, adotar regras públicas e contar com ferramentas de denúncia e moderação.</p></div><div class="security-list">${['Login institucional para participantes parceiros','Botão de denúncia disponível durante as chamadas','Identificação de condutas ofensivas ou discriminatórias','Regras claras de convivência e consequências','Cuidados adicionais quando houver menores de idade','Revisão jurídica de LGPD e proteção de dados'].map((item) => `<div>${item}</div>`).join('')}</div></div></div></section>

      <section class="section"><div class="container journey-grid"><div><span class="eyebrow">Público-alvo</span><h2 style="font-size:clamp(2.2rem,4vw,3.7rem)">Uma rede formada por alunos, educadores e instituições.</h2></div><div class="problem-list">${['Jovens e adultos interessados em acessibilidade','Rotaract, Interact, RotaKids, Rotary e Casa da Amizade','Especialistas e instrutores de Libras','Instituições educacionais','Desenvolvedores e empresas de tecnologia','Órgãos e iniciativas de acessibilidade digital'].map((item) => `<div class="problem-item"><span>${icon('users')}</span><strong>${item}</strong></div>`).join('')}</div></div></section>
    </main>${footer()}</div>`;
  }

  function auth(mode = 'login') {
    const login = mode === 'login';
    document.title = `${login ? 'Entrar' : 'Criar conta'} — Mãos que Conectam`;
    root.innerHTML = `<main class="auth-shell" id="conteudo">
      <section class="auth-visual">${brand(true)}<div class="auth-quote"><blockquote>Aprender Libras é ampliar a possibilidade de encontro.</blockquote><p>Uma plataforma educacional criada para transformar conhecimento em prática cotidiana.</p></div><div class="auth-meta">Rotaract Club de Guararapes • Projeto 2026–2027</div></section>
      <section class="auth-panel"><div class="auth-box"><span class="eyebrow">${login ? 'Acesso à plataforma' : 'Novo perfil'}</span><h1>${login ? 'Bem-vindo de volta.' : 'Comece sua jornada.'}</h1><p class="muted">${login ? 'Entre com sua conta para continuar de onde parou.' : 'Preencha os dados para acessar a demonstração.'}</p>
        <button class="btn btn-dark" data-action="institution-login" style="width:100%;margin:16px 0 8px">Entrar com conta institucional Rotary</button><button class="btn btn-secondary" data-action="google-login" style="width:100%">Continuar com conta Google</button><div class="divider">ou use seu e-mail</div>
        <form id="auth-form">
          ${login ? '' : '<div class="form-group"><label class="form-label" for="name">Nome completo</label><input class="input" id="name" name="name" autocomplete="name" required></div>'}
          <div class="form-group"><label class="form-label" for="email">E-mail</label><input class="input" id="email" name="email" type="email" autocomplete="email" required></div>
          <div class="form-group"><label class="form-label" for="password">Senha</label><input class="input" id="password" name="password" type="password" minlength="4" autocomplete="${login ? 'current-password' : 'new-password'}" required></div>
          <button class="btn btn-primary" type="submit" style="width:100%">${login ? 'Entrar' : 'Criar conta'}</button>
        </form>
        <p class="form-note" style="margin-top:17px">Esta versão é demonstrativa. Os dados são armazenados somente neste navegador.</p>
        <p style="margin-top:22px;font-size:.83rem">${login ? 'Ainda não possui cadastro?' : 'Já possui uma conta?'} <a href="#/${login ? 'cadastro' : 'login'}" style="color:var(--brand);font-weight:800">${login ? 'Criar conta' : 'Entrar'}</a></p>
      </div></section>
    </main>`;
    document.getElementById('auth-form').addEventListener('submit', (event) => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      state.user = {name: form.get('name') || 'João Lucas', email: form.get('email'), profile: 'Aluno'};
      localStorage.setItem('maos_user', JSON.stringify(state.user));
      go(login ? '/dashboard' : '/onboarding');
    });
  }

  function sidebar(active) {
    const links = [
      ['dashboard','home','Visão geral'],['cursos','book','Cursos'],['atividades','game','Atividades'],['assistente','spark','Apoio'],['ranking','trophy','Ranking'],['certificados','shield','Certificados'],['comunidade','video','Prática ao vivo'],['agenda','calendar','Agenda'],['admin','shield','Administração']
    ];
    return `<aside class="sidebar">${brand(true)}<nav class="side-nav" aria-label="Navegação da plataforma">${links.map(([routeName,iconName,label]) => `<a class="side-link ${active === routeName ? 'active' : ''}" href="#/${routeName}" title="${label}">${icon(iconName)}<span>${label}</span></a>`).join('')}</nav><div class="side-user"><div class="avatar">${initials(userName())}</div><div><strong style="font-size:.78rem">${escapeHtml(userName())}</strong><small style="display:block">Perfil de demonstração</small></div></div></aside>`;
  }

  function dashShell(active, content) {
    return `<div class="dashboard-shell">${sidebar(active)}<main class="main" id="conteudo">${content}</main></div>`;
  }

  function top(title, subtitle = '') {
    return `<div class="dash-top"><div><h1>${title}</h1><p class="muted">${subtitle}</p></div><div class="dash-actions"><button class="btn btn-secondary icon-btn" data-action="notify" aria-label="Notificações">${icon('bell')}</button><a class="btn btn-primary" href="#/atividades">${icon('game')}<span>Praticar agora</span></a></div></div>`;
  }

  function onboarding() {
    document.title = 'Seu perfil — Mãos que Conectam';
    root.innerHTML = `<main class="auth-shell" id="conteudo"><section class="auth-visual">${brand(true)}<div class="auth-quote"><blockquote>Conteúdo adequado ao seu momento de aprendizagem.</blockquote><p>As respostas abaixo ajudam a organizar a trilha inicial.</p></div><div class="auth-meta">Etapa de diagnóstico • leva menos de dois minutos</div></section><section class="auth-panel"><div class="auth-box"><span class="eyebrow">Questionário inicial</span><h1>Conte um pouco sobre você.</h1><form id="onboarding-form" style="margin-top:25px"><div class="form-group"><label class="form-label">Por que deseja aprender Libras?</label><select class="input" required><option value="">Selecione</option><option>Inclusão no trabalho</option><option>Comunicação com familiares ou amigos</option><option>Formação acadêmica</option><option>Interesse pessoal</option></select></div><div class="form-group"><label class="form-label">Qual é seu nível atual?</label><select class="input" required><option value="">Selecione</option><option>Nunca estudei</option><option>Conheço alguns sinais</option><option>Já fiz um curso básico</option></select></div><div class="form-group"><label class="form-label">Faixa etária</label><select class="input" required><option value="">Selecione</option><option>Até 13 anos</option><option>14 a 17 anos</option><option>18 a 29 anos</option><option>30 anos ou mais</option></select></div><button class="btn btn-primary" style="width:100%">Montar minha trilha</button></form></div></section></main>`;
    document.getElementById('onboarding-form').addEventListener('submit', (event) => { event.preventDefault(); toast('Trilha inicial preparada.'); go('/dashboard'); });
  }

  function dashboard() {
    document.title = 'Painel — Mãos que Conectam';
    const courseRows = D.courses.slice(0, 2).map((course) => `<div class="course-row"><div class="course-thumb ${course.accent}">${icon(course.icon)}</div><div><h4>${course.title}</h4><p class="muted">${course.description}</p><div class="progress"><div class="progress-bar" style="width:${course.progress}%"></div></div></div><a class="btn btn-secondary btn-sm" href="#/aula/${course.id}">Continuar</a></div>`).join('');
    const events = D.events.slice(0, 2).map((event) => `<div class="event"><div class="event-date"><strong>${event.day}</strong><small>${event.month}</small></div><div><strong>${event.title}</strong><div class="muted">${event.time} • ${event.type}</div></div></div>`).join('');
    root.innerHTML = dashShell('dashboard', `${top(`Olá, ${escapeHtml(userName().split(' ')[0])}.`,'Seu plano de estudos está organizado para hoje.')}
      <section class="stats-grid"><article class="card stat-card"><span class="stat-label">XP acumulado</span><div class="stat-value">2.180</div></article><article class="card stat-card"><span class="stat-label">Sequência atual</span><div class="stat-value">7 dias</div></article><article class="card stat-card"><span class="stat-label">Aulas concluídas</span><div class="stat-value">14</div></article><article class="card stat-card"><span class="stat-label">Tempo de estudo</span><div class="stat-value">6h 40</div></article></section>
      <div class="content-grid"><section class="card panel"><div class="panel-head"><div><h3>Continuar estudando</h3><p class="muted">Sua trilha atual</p></div><a class="btn btn-secondary btn-sm" href="#/cursos">Ver cursos</a></div>${courseRows}</section><aside><section class="streak"><span style="display:block;width:28px">${icon('fire')}</span><strong>7 dias</strong><p>Você manteve sua rotina de prática durante toda a semana.</p><a class="btn btn-dark btn-sm" href="#/atividades">Fazer atividade de hoje</a></section><section class="card panel" style="margin-top:16px"><div class="panel-head"><h3>Próximos encontros</h3><a href="#/agenda" style="font-size:.72rem;font-weight:800;color:var(--brand)">Agenda completa</a></div>${events}</section></aside></div>`);
  }

  function courses() {
    document.title = 'Cursos — Mãos que Conectam';
    root.innerHTML = dashShell('cursos', `${top('Cursos','Conteúdos organizados por nível e objetivo.')}
      <div class="catalog-grid">${D.courses.map((course) => `<article class="card course-card"><div class="course-cover ${course.accent}">${icon(course.icon)}</div><span class="badge">${course.level}</span><h3 style="margin-top:13px">${course.title}</h3><p class="muted">${course.description}</p><div class="meta"><span>${course.lessons} aulas</span><span>${course.duration}</span><span>${course.progress}% concluído</span><span>Certificado ao concluir</span></div><a class="btn ${course.progress ? 'btn-primary' : 'btn-secondary'}" href="#/aula/${course.id}">${course.progress ? 'Continuar curso' : 'Ver conteúdo'}</a></article>`).join('')}</div>`);
  }

  function lesson(id = 'fundamentos') {
    document.title = 'Aula — Mãos que Conectam';
    const course = D.courses.find((item) => item.id === id) || D.courses[0];
    const lessons = D.lessons.map((lessonItem, index) => `<div class="lesson-item ${index === 2 ? 'current' : ''}"><span class="lesson-check ${lessonItem.done ? 'done' : ''}">${lessonItem.done ? icon('check') : index + 1}</span><div><strong>${lessonItem.title}</strong><div class="muted" style="font-size:.68rem">${lessonItem.type}</div></div><small class="muted">${lessonItem.duration}</small></div>`).join('');
    root.innerHTML = dashShell('cursos', `${top(course.title,`${course.level} • ${course.lessons} aulas • ${course.duration}`)}<div class="lesson-layout"><section><div class="video-player"><video controls preload="metadata" poster="assets/images/app-login-reference.png" src="assets/videos/libras.mp4"></video></div><div class="lesson-toolbar"><div><h2 style="font-family:Arial,sans-serif;font-size:1.22rem;font-weight:800;margin-bottom:4px">Alfabeto manual: N a Z</h2><p class="muted" style="font-size:.8rem;margin:0">Aula 3 de 12 • 10 minutos</p></div><div style="display:flex;gap:8px"><button class="btn btn-secondary btn-sm" data-action="note">Fazer anotação</button><button class="btn btn-primary btn-sm" data-action="complete-lesson">Marcar como concluída</button></div></div><div class="card panel" style="margin-top:15px"><h3>Objetivo da aula</h3><p class="muted" style="margin-bottom:0">Reconhecer e reproduzir os sinais correspondentes às letras N a Z, observando configuração de mão, orientação e movimento.</p></div></section><aside class="card panel lesson-list"><div class="panel-head"><div><h3>Conteúdo do módulo</h3><p class="muted">42% concluído</p></div></div>${lessons}</aside></div>`);
  }

  const questions = [
    {question:'Qual recurso é essencial para a clareza de muitos sinais em Libras?',options:['Apenas a velocidade do movimento','Expressões faciais e corporais','A escrita em português','O uso de áudio'],correct:1},
    {question:'A Libras é reconhecida no Brasil como:',options:['Um conjunto informal de gestos','Uma língua com estrutura gramatical própria','Uma adaptação direta do português','Um código usado somente em escolas'],correct:1},
    {question:'Qual prática favorece a fixação do conteúdo?',options:['Estudar somente antes da prova','Praticar em pequenos períodos com frequência','Evitar conversas com outras pessoas','Memorizar apenas o alfabeto'],correct:1}
  ];

  function activities() {
    document.title = 'Atividade diária — Mãos que Conectam';
    const question = questions[state.quizIndex];
    root.innerHTML = dashShell('atividades', `${top('Atividade diária','Exercício curto de revisão e fixação.')}<div class="quiz-shell"><div class="quiz-progress"><strong>Questão ${state.quizIndex + 1} de ${questions.length}</strong><div class="progress"><div class="progress-bar" style="width:${((state.quizIndex + 1) / questions.length) * 100}%"></div></div></div><section class="card quiz-card"><span class="badge">Fundamentos</span><h2 style="margin-top:16px">${question.question}</h2><div>${question.options.map((option,index) => `<button class="answer" data-answer="${index}">${String.fromCharCode(65 + index)}. ${option}</button>`).join('')}</div><div id="quiz-feedback" style="min-height:30px;margin-top:17px"></div><button class="btn btn-dark" id="next-question" style="display:none">${state.quizIndex === questions.length - 1 ? 'Finalizar' : 'Próxima questão'} ${icon('arrow')}</button></section></div>`);
  }

  function assistant() {
    document.title = 'Apoio de vocabulário — Mãos que Conectam';
    root.innerHTML = dashShell('assistente', `${top('Apoio de vocabulário','Consulta demonstrativa para acompanhar os estudos.')}
      <div class="content-grid"><section class="card panel"><div class="panel-head"><div><h3>Consultar expressão</h3><p class="muted">Digite uma palavra ou frase curta em português.</p></div><span class="badge">Protótipo</span></div><form id="support-form"><label class="form-label" for="support-input">Texto para consulta</label><textarea class="input" id="support-input" rows="5" placeholder="Ex.: bom dia, obrigado, meu nome é..."></textarea><div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">${['Bom dia','Obrigado','Meu nome é','Como você está?'].map((phrase) => `<button type="button" class="btn btn-secondary btn-sm" data-action="set-phrase" data-phrase="${phrase}">${phrase}</button>`).join('')}</div><button class="btn btn-primary" style="margin-top:16px">Consultar apoio</button></form></section><aside class="card panel"><div class="panel-head"><div><h3>Resultado</h3><p class="muted">Orientação inicial, não substitui um instrutor.</p></div></div><div id="support-output"><div class="course-cover pink" style="height:160px"><img src="assets/images/libras-avatar-reference.png" alt="Avatar ilustrativo de Libras" style="height:150px;width:auto"></div><p class="muted" style="font-size:.82rem">O resultado da consulta aparecerá aqui com uma orientação textual e indicação do módulo relacionado.</p></div></aside></div>
      <section class="card panel" style="margin-top:16px"><h3>Uso responsável</h3><p class="muted" style="margin-bottom:0;font-size:.83rem">Uma tradução automática de português para Libras exige validação linguística e visual. Nesta demonstração, o recurso funciona como apoio de vocabulário e sempre recomenda conferir o sinal com material produzido por especialistas.</p></section>`);
    document.getElementById('support-form').addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.getElementById('support-input');
      const query = input.value.trim();
      if (!query) { toast('Digite uma palavra ou frase para consultar.'); return; }
      const key = query.toLocaleLowerCase('pt-BR').replace(/[!?.,]/g, '');
      const suggestions = {
        'bom dia': ['Cumprimento','Consulte o módulo “Cumprimentos essenciais”. Observe expressão facial, direção do movimento e contexto de uso.'],
        'obrigado': ['Cortesia','O sinal varia conforme a construção da frase. Revise a aula de expressões de cortesia e pratique com o instrutor.'],
        'meu nome é': ['Apresentação','A construção costuma combinar referência pessoal, conceito de nome e datilologia do nome próprio.'],
        'como você está': ['Pergunta cotidiana','A expressão facial interrogativa é parte importante da construção. Consulte o módulo “Libras no cotidiano”.']
      };
      const result = suggestions[key] || ['Consulta não cadastrada','Esta expressão ainda não possui uma orientação local. Procure o conteúdo correspondente no catálogo ou leve a dúvida para uma prática supervisionada.'];
      document.getElementById('support-output').innerHTML = `<span class="badge">${result[0]}</span><h3 style="font-size:1.18rem;margin-top:15px">${escapeHtml(query)}</h3><p class="muted">${result[1]}</p><a class="btn btn-secondary btn-sm" href="#/cursos">Abrir catálogo de cursos</a>`;
    });
  }

  function certificates() {
    document.title = 'Certificados — Mãos que Conectam';
    root.innerHTML = dashShell('certificados', `${top('Certificados','Acompanhamento de elegibilidade e modelo de emissão.')}
      <div class="catalog-grid"><article class="card course-card"><span class="badge">Modelo demonstrativo</span><h3 style="margin-top:16px">Introdução à cultura surda</h3><p class="muted">Modelo visual para apresentar como será o certificado após validação das regras, carga horária e instituição emissora.</p><div class="meta"><span>2 horas</span><span>Sem validade nesta versão</span></div><button class="btn btn-primary" data-action="preview-certificate">Visualizar modelo</button></article>${D.courses.slice(0,3).map((course) => `<article class="card course-card"><span class="badge">${course.progress}% concluído</span><h3 style="margin-top:16px">${course.title}</h3><p class="muted">O certificado será liberado após a conclusão das aulas e atividades obrigatórias.</p><div class="progress" style="margin:9px 0 18px"><div class="progress-bar" style="width:${course.progress}%"></div></div><button class="btn btn-secondary" disabled>Certificado bloqueado</button></article>`).join('')}</div>
      <section class="card panel" style="margin-top:16px"><h3>Critérios previstos</h3><div class="problem-list">${['Conclusão de todas as aulas obrigatórias','Aproveitamento mínimo definido pela coordenação pedagógica','Registro da carga horária e instituição emissora','Código verificável em uma versão de produção'].map((item) => `<div class="problem-item"><span>${icon('check')}</span><strong>${item}</strong></div>`).join('')}</div></section>`);
  }

  function ranking() {
    document.title = 'Ranking — Mãos que Conectam';
    root.innerHTML = dashShell('ranking', `${top('Ranking semanal','Uma referência de constância, não uma competição de velocidade.')}<section class="card panel"><div class="panel-head"><div><h3>Classificação da semana</h3><p class="muted">Atualização demonstrativa</p></div><span class="badge">Semana 29</span></div>${D.ranking.map((person,index) => `<div class="ranking-row ${person.me ? 'me' : ''}"><span class="rank">${index + 1}</span><span class="avatar">${person.initials}</span><div><strong>${person.name}</strong><div class="muted" style="font-size:.7rem">${person.xp.toLocaleString('pt-BR')} XP</div></div><strong class="streak-col" style="font-size:.74rem">${person.streak} dias</strong></div>`).join('')}</section><section style="margin-top:18px"><div class="panel-head"><h3>Conquistas</h3></div><div class="achievement-grid">${D.achievements.map((achievement) => `<article class="card achievement ${achievement.unlocked ? '' : 'locked'}"><div class="achievement-icon">${icon(achievement.icon)}</div><h3>${achievement.title}</h3><p class="muted">${achievement.desc}</p></article>`).join('')}</div></section>`);
  }

  function community() {
    document.title = 'Prática ao vivo — Mãos que Conectam';
    root.innerHTML = dashShell('comunidade', `${top('Prática supervisionada','Sala demonstrativa para participantes de instituições parceiras.')}<div class="call-stage"><section class="call-video"><img src="assets/images/video-call-reference.png" alt="Referência visual de uma videochamada em grupo"><span class="call-label">Sala: apresentações em Libras • supervisão ativa • moderação ligada</span><div class="call-placeholder"><div><div class="avatar">AN</div><strong>Instrutora Ana</strong><p style="color:#bbb4bc;font-size:.8rem">Aguardando o início da prática guiada</p></div></div><div class="call-controls"><button class="call-control" data-action="toggle-mic" aria-label="Ativar ou desativar microfone">${icon('mic')}</button><button class="call-control" data-action="toggle-camera" aria-label="Ativar ou desativar câmera">${icon('video')}</button><button class="call-control end" data-action="end-call" aria-label="Encerrar chamada">×</button></div></section><aside class="card chat-panel"><div class="panel-head"><div><h3>Chat da sala</h3><p class="muted">12 participantes</p></div></div><div class="messages" id="messages"><div class="message"><strong>Instrutora Ana</strong><br><span class="message-bubble">Bem-vindos. Hoje vamos praticar apresentações.</span></div><div class="message"><strong>Marina</strong><br><span class="message-bubble">Boa noite, pessoal.</span></div></div><form class="chat-form" id="chat-form"><input class="input" id="chat-input" placeholder="Escreva uma mensagem" aria-label="Mensagem"><button class="btn btn-primary icon-btn" aria-label="Enviar mensagem">${icon('chat')}</button></form><button class="btn btn-secondary btn-sm" data-action="report" style="margin-top:11px">Denunciar comportamento</button></aside></div>`);
    document.getElementById('chat-form').addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.getElementById('chat-input');
      if (!input.value.trim()) return;
      document.getElementById('messages').insertAdjacentHTML('beforeend', `<div class="message"><strong>Você</strong><br><span class="message-bubble">${escapeHtml(input.value)}</span></div>`);
      input.value = '';
    });
  }

  function agenda() {
    document.title = 'Agenda — Mãos que Conectam';
    root.innerHTML = dashShell('agenda', `${top('Agenda','Encontros, mentorias e práticas supervisionadas.')}<section class="card panel"><div class="panel-head"><div><h3>Julho de 2026</h3><p class="muted">Agenda demonstrativa</p></div><button class="btn btn-primary btn-sm" data-action="new-event">Adicionar lembrete</button></div>${D.events.map((event) => `<div class="event"><div class="event-date"><strong>${event.day}</strong><small>${event.month}</small></div><div><strong>${event.title}</strong><div class="muted">${event.time} • ${event.type}</div></div></div>`).join('')}</section>`);
  }

  function admin() {
    document.title = 'Administração — Mãos que Conectam';
    root.innerHTML = dashShell('admin', `${top('Administração','Visão de demonstração para gestão de conteúdo e comunidade.')}<section class="stats-grid"><article class="card stat-card"><span class="stat-label">Usuários ativos</span><div class="stat-value">1.248</div></article><article class="card stat-card"><span class="stat-label">Aulas publicadas</span><div class="stat-value">45</div></article><article class="card stat-card"><span class="stat-label">Certificados emitidos</span><div class="stat-value">312</div></article><article class="card stat-card"><span class="stat-label">Denúncias abertas</span><div class="stat-value">2</div></article></section><section class="card panel" style="margin-top:16px"><div class="panel-head"><div><h3>Conteúdos recentes</h3><p class="muted">Publicação e revisão pedagógica</p></div><button class="btn btn-primary btn-sm" data-action="new-content">Novo conteúdo</button></div><table class="admin-table"><thead><tr><th>Título</th><th>Tipo</th><th>Status</th><th>Atualização</th><th>Ação</th></tr></thead><tbody>${D.lessons.slice(0,5).map((lessonItem) => `<tr><td><strong>${lessonItem.title}</strong></td><td>${lessonItem.type}</td><td><span class="badge">Publicado</span></td><td>Hoje</td><td><button class="btn btn-secondary btn-sm" data-action="edit-content">Editar</button></td></tr>`).join('')}</tbody></table></section>`);
  }

  function legal(type) {
    const privacy = type === 'privacidade';
    document.title = `${privacy ? 'Privacidade' : 'Termos de uso'} — Mãos que Conectam`;
    root.innerHTML = `<div class="page">${publicHeader()}<main id="conteudo"><section class="section"><div class="container legal-wrap"><span class="eyebrow">Informações legais</span><h1 class="page-title" style="font-size:clamp(2.6rem,5vw,4.6rem)">${privacy ? 'Política de privacidade' : 'Termos de uso'}</h1><article class="card legal-card"><p class="muted">Texto de demonstração. A publicação oficial exige revisão jurídica, definição do controlador dos dados e adequação completa à LGPD.</p><h3>${privacy ? 'Dados tratados' : 'Uso responsável'}</h3><p>${privacy ? 'Nesta versão, nome, e-mail e preferências de aprendizado ficam somente no navegador. Uma versão de produção deverá informar finalidade, base legal, prazo de retenção, medidas de segurança e canais para exercício de direitos.' : 'A plataforma é destinada ao aprendizado e à prática respeitosa de Libras. Condutas ofensivas, discriminatórias ou incompatíveis com o ambiente educacional podem resultar em suspensão.'}</p><h3>Interações e proteção</h3><p>Áreas de comunidade devem contar com regras claras, denúncia acessível, supervisão adequada e cuidados adicionais quando houver participação de menores de idade.</p><h3>Contato</h3><p>contato@maosqueconectam.org</p></article></div></section></main>${footer()}</div>`;
  }

  function modal(title, body) {
    document.body.insertAdjacentHTML('beforeend', `<div class="modal-backdrop" id="modal" role="dialog" aria-modal="true" aria-label="${escapeHtml(title)}"><div class="modal"><div class="panel-head"><h3>${title}</h3><button class="btn btn-ghost icon-btn" data-action="close-modal" aria-label="Fechar">×</button></div>${body}</div></div>`);
  }

  function route() {
    document.getElementById('modal')?.remove();
    const raw = (location.hash || '#/').slice(1);
    const [path] = raw.split('?');
    const parts = path.split('/').filter(Boolean);
    const routeName = parts[0] || '';
    if (routeName === '') landing();
    else if (routeName === 'projeto') { project(); if (parts[1]) setTimeout(() => document.getElementById(parts[1])?.scrollIntoView(), 0); }
    else if (routeName === 'login') auth('login');
    else if (routeName === 'cadastro') auth('cadastro');
    else if (routeName === 'onboarding') onboarding();
    else if (routeName === 'dashboard') dashboard();
    else if (routeName === 'cursos') courses();
    else if (routeName === 'aula') lesson(parts[1]);
    else if (routeName === 'atividades') activities();
    else if (routeName === 'assistente') assistant();
    else if (routeName === 'ranking') ranking();
    else if (routeName === 'certificados') certificates();
    else if (routeName === 'comunidade') community();
    else if (routeName === 'agenda') agenda();
    else if (routeName === 'admin') admin();
    else if (routeName === 'privacidade' || routeName === 'termos') legal(routeName);
    else landing();
    window.scrollTo(0, 0);
  }

  document.addEventListener('click', (event) => {
    const target = event.target.closest('[data-action]');
    if (!target) return;
    const action = target.dataset.action;
    if (action === 'logout') { localStorage.removeItem('maos_user'); state.user = null; go('/'); toast('Sessão encerrada.'); }
    if (action === 'institution-login') { state.user = {name:'Participante Rotaract',email:'institucional@rotary.org',profile:'Institucional'}; localStorage.setItem('maos_user', JSON.stringify(state.user)); go('/onboarding'); }
    if (action === 'google-login') { state.user = {name:'João Lucas',email:'demo@google.com',profile:'Aluno'}; localStorage.setItem('maos_user', JSON.stringify(state.user)); go('/onboarding'); }
    if (action === 'notify') toast('Você está em dia com as notificações.');
    if (action === 'set-phrase') { const field = document.getElementById('support-input'); if (field) { field.value = target.dataset.phrase || ''; field.focus(); } }
    if (action === 'preview-certificate') modal('Modelo de certificado', `<div style="border:8px double var(--line-dark);padding:30px;text-align:center;background:var(--paper)"><img src="assets/brand/mark.svg" alt="" style="width:54px;margin:0 auto 18px"><span class="badge">Modelo sem validade</span><h2 style="font-size:2rem;margin:18px 0 8px">Certificado de conclusão</h2><p>Certificamos que <strong>${escapeHtml(userName())}</strong> concluiu o módulo demonstrativo <strong>Introdução à cultura surda</strong>, com carga horária de 2 horas.</p><p class="muted" style="font-size:.72rem;margin:25px 0 0">Mãos que Conectam • Rotaract Club de Guararapes • Projeto 2026–2027</p></div><button class="btn btn-primary" data-action="download-certificate" style="width:100%;margin-top:14px">Baixar modelo em HTML</button>`);
    if (action === 'download-certificate') {
      const content = `<!doctype html><html lang="pt-BR"><meta charset="utf-8"><title>Certificado demonstrativo</title><style>body{font-family:Arial,sans-serif;background:#f6f3ef;padding:50px;color:#18151b}.certificate{max-width:900px;margin:auto;border:12px double #c8bfc3;padding:70px;text-align:center;background:#fff}h1{font-family:Georgia,serif;font-size:48px;color:#d41367}p{font-size:20px;line-height:1.6}.note{margin-top:55px;font-size:13px;color:#716a73}</style><div class="certificate"><h1>Certificado de conclusão</h1><p>Certificamos que <strong>${escapeHtml(userName())}</strong> concluiu o módulo demonstrativo <strong>Introdução à cultura surda</strong>, com carga horária de 2 horas.</p><p class="note">MODELO SEM VALIDADE • Mãos que Conectam • Projeto 2026–2027</p></div></html>`;
      const blob = new Blob([content], {type:'text/html;charset=utf-8'});
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a'); link.href = url; link.download = 'certificado-demonstrativo.html'; link.click(); URL.revokeObjectURL(url);
      toast('Modelo de certificado preparado para download.');
    }
    if (action === 'mobile-menu') modal('Navegação', `<nav style="display:grid;gap:8px"><a class="btn btn-secondary" href="#/projeto">O projeto</a><a class="btn btn-secondary" href="#/login">Entrar</a><a class="btn btn-primary" href="#/cadastro">Criar conta</a></nav>`);
    if (action === 'close-modal') document.getElementById('modal')?.remove();
    if (action === 'complete-lesson') { toast('Aula concluída. Você recebeu 10 XP.'); target.innerHTML = `${icon('check')} Concluída`; }
    if (action === 'note') modal('Nova anotação', `<textarea class="input" rows="5" placeholder="Escreva sua anotação"></textarea><button class="btn btn-primary" data-action="save-note" style="width:100%;margin-top:12px">Salvar anotação</button>`);
    if (action === 'save-note') { document.getElementById('modal')?.remove(); toast('Anotação salva neste navegador.'); }
    if (action === 'toggle-mic' || action === 'toggle-camera') { target.classList.toggle('end'); toast(action === 'toggle-mic' ? 'Estado do microfone alterado.' : 'Estado da câmera alterado.'); }
    if (action === 'end-call') { toast('Você saiu da sala demonstrativa.'); go('/dashboard'); }
    if (action === 'report') modal('Denunciar comportamento', `<label class="form-label">Motivo</label><select class="input"><option>Comportamento ofensivo</option><option>Conteúdo discriminatório</option><option>Conteúdo impróprio</option><option>Outro</option></select><textarea class="input" rows="4" style="margin-top:12px" placeholder="Descreva o ocorrido"></textarea><button class="btn btn-primary" data-action="send-report" style="width:100%;margin-top:12px">Enviar denúncia</button>`);
    if (action === 'send-report') { document.getElementById('modal')?.remove(); toast('Denúncia registrada para análise.'); }
    if (['new-event','new-content','edit-content'].includes(action)) modal('Fluxo demonstrativo', `<p class="muted">A interface está preparada para integração com uma API e banco de dados em uma versão de produção.</p><button class="btn btn-primary" data-action="close-modal" style="width:100%">Fechar</button>`);
  });

  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-answer]');
    if (!button || state.quizLocked) return;
    state.quizLocked = true;
    const selected = Number(button.dataset.answer);
    const question = questions[state.quizIndex];
    document.querySelectorAll('[data-answer]').forEach((answerButton,index) => {
      if (index === question.correct) answerButton.classList.add('correct');
      else if (index === selected) answerButton.classList.add('wrong');
      answerButton.disabled = true;
    });
    if (selected === question.correct) { state.quizScore += 1; document.getElementById('quiz-feedback').innerHTML = '<strong style="color:var(--green)">Resposta correta.</strong>'; }
    else document.getElementById('quiz-feedback').innerHTML = '<strong style="color:var(--danger)">Resposta incorreta. Revise este conteúdo no módulo.</strong>';
    document.getElementById('next-question').style.display = 'inline-flex';
  });

  document.addEventListener('click', (event) => {
    if (event.target.closest('#next-question')) {
      if (state.quizIndex < questions.length - 1) { state.quizIndex += 1; state.quizLocked = false; activities(); }
      else modal('Atividade concluída', `<div style="text-align:center"><div class="achievement-icon" style="margin:0 auto 15px">${icon('trophy')}</div><h2 style="font-size:2.4rem">${state.quizScore} de ${questions.length}</h2><p class="muted">Você recebeu 30 XP por concluir a atividade diária.</p><button class="btn btn-primary" data-action="finish-quiz" style="width:100%">Voltar ao painel</button></div>`);
    }
    if (event.target.closest('[data-action="finish-quiz"]')) { state.quizIndex = 0; state.quizScore = 0; state.quizLocked = false; document.getElementById('modal')?.remove(); go('/dashboard'); }
  });

  window.addEventListener('hashchange', route);
  route();
})();
