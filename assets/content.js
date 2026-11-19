// Conteúdo do site em PT e EN (fonte única). Manter alinhado ao CV (modelos/cv-data*.js).

// Ícones: logo = Simple Icons (LOGO_PATHS) | dev = classe Devicon | mono = sigla na cor da marca | abbr = sigla âmbar
const SKILL_ICONS = {
  eng: [
    { n: "Abaqus", logo: "abaqus", bg: "#005386" },
    { n: "ANSYS", logo: "ansys", bg: "#141414", fg: "#FFB71B", wide: true },
    { n: "SimSolid", abbr: "SIM" },
    { n: "Siemens NX", mono: "NX", bg: "#009999" },
    { n: "Teamcenter", mono: "TCE", bg: "#009999" },
    { n: "AutoCAD", logo: "autocad", bg: "#E51050" },
    { n: "DNV", mono: "DNV", bg: "#0F204B" },
  ],
  prog: [
    { n: "Python", dev: "devicon-python-plain colored" },
    { n: "MATLAB", dev: "devicon-matlab-plain colored" },
    { n: "VBA", abbr: "VBA" },
    { n: "Mathcad", abbr: "MCD" },
  ],
  data: [
    { n: "PostgreSQL", dev: "devicon-postgresql-plain colored" },
    { n: "pandas", dev: "devicon-pandas-plain colored", color: "#e70488" },
    { n: "NumPy", dev: "devicon-numpy-plain colored" },
    { n: "Power BI", abbr: "BI" },
    { n: "scikit-learn", dev: "devicon-scikitlearn-plain colored" },
    { n: "PyTorch", dev: "devicon-pytorch-original colored" },
  ],
  tools: [
    { n: "Git", dev: "devicon-git-plain colored" },
    { n: "GitHub", dev: "devicon-github-original", color: "#fff" },
    { n: "VS Code", dev: "devicon-vscode-plain colored" },
  ],
};

// Rótulos dos números: "|" marca onde a linha deve quebrar (cada trecho fica inteiro).
// Anos completos em O&G desde nov/2021 (atualiza sozinho)
const YEARS_OG = Math.floor((Date.now() - Date.UTC(2021, 10, 1)) / (365.2425 * 864e5));

const REPOS = {
  dw: "https://github.com/aguiarln/anp-oil-gas-dw",
  fea: "https://github.com/aguiarln/drillstring-fea",
};

window.SITE = {
  contact: {
    email: "aguiarluizneto@hotmail.com",
    linkedin: "https://www.linkedin.com/in/aguiarluizneto/",
    github: "https://github.com/aguiarln",
  },
  pt: {
    htmlLang: "pt-BR",
    title: "Luiz Aguiar Neto · Engenheiro de Estruturas & Equipamentos",
    cv: "cv/Luiz_Aguiar_Neto_CV_PT.pdf",
    ui: {
      nav: { about: "sobre", skills: "skills", exp: "experiência", projects: "projetos", edu: "formação" },
      ctaProjects: "Ver projetos", ctaCv: "Baixar CV", now: "Agora", progress: "Progresso",
      photoAlt: "Foto de Luiz Aguiar Neto", welcome: "seja bem-vindo!", current: "atual",
      more: "mostrar mais", less: "mostrar menos", repo: "ver no GitHub", menuOpen: "Abrir menu", menuClose: "Fechar menu", toLight: "Ativar tema claro", toDark: "Ativar tema escuro",
    },
    hero: {
      name: "Luiz Aguiar Neto",
      role: "Engenheiro de Estruturas & Equipamentos",
      summary: 'Sou engenheiro civil pela UFS, mas foi no <span class="hl">mestrado em Engenharia Mecânica na PUC-Rio</span> que me encontrei de vez com o código: escrevi um programa de elementos finitos para simular a dinâmica de colunas de perfuração. Desde 2021 levo isso para a <span class="hl">TechnipFMC</span>, onde projeto e analiso estruturas submarinas em grandes contratos EPCI e automatizo o que der com Python. Agora, no <span class="hl">BI Master da PUC-Rio</span>, estou somando dados e IA a essa caixa de ferramentas.',
      now: ["TechnipFMC · Búzios 6 e HISEP® Mero 3", "BI Master PUC-Rio · fase 2 de 4"],
    },
    stats: [
      { value: 5, label: "grandes EPCIs submarinos|em que trabalhei" },
      { value: YEARS_OG, label: "anos em projetos submarinos|de óleo e gás" },
      { value: 6, label: "países nas equipes internacionais|dos meus projetos" },
      { value: 1, suffix: "/4", label: "fases do BI Master concluídas" },
    ],
    skills: {
      title: "Skills", sub: "Ferramentas que uso no dia a dia, e as que estou aprendendo.",
      groups: [
        { title: "Simulação & Engenharia", items: SKILL_ICONS.eng },
        { title: "Programação", items: SKILL_ICONS.prog },
        { title: "Dados & IA", badge: "em desenvolvimento", items: SKILL_ICONS.data },
        { title: "Ferramentas", items: SKILL_ICONS.tools },
      ],
      standards: ["DNV-ST-F101", "DNV-OS-C201", "DNV-RP-C203", "DNV-RP-F105", "DNV-RP-B401", "ASME B31.8", "API RP 1111", "AWS D1.1"],
    },
    experience: {
      title: "Experiência", sub: "Contratos EPCI submarinos na TechnipFMC desde 2021, da engenharia à instalação, com times internacionais.",
      items: [
        {
          when: "abr 2023 → hoje", current: true,
          role: "Engenheiro de Estruturas e Equipamentos Pleno", org: "TechnipFMC · Rio de Janeiro",
          ctx: "EPCI Búzios 6 e HISEP® Mero 3 (Petrobras) · Programa de Transformação e Industrialização de estruturas in-line",
          bullets: [
            "Projeto e análise de PLETs, jumpers rígidos e estruturas in-line (PLET, ESDV, TRF), com soluções estruturais para as condições de projeto e fadiga por slugging.",
            "Dimensionamento completo das estruturas: vigas, conexões, fixadores, pinos, cabos de continuidade elétrica, anodos e fundações (pin-piles e mudmats); soldas conforme AWS D1.1; FEA e verificação conforme DNV-OS-C201.",
            "Desenvolvimento de metodologias de cálculo para padronização interna e elaboração de design reviews.",
            "Atuação em todas as etapas do EPCI (engenharia, suprimentos, fabricação e instalação), com equipes da Índia, Polônia, Reino Unido, Noruega, França e EUA.",
            "Automações com Python, Abaqus scripting, ANSYS APDL e VBA para FEA, cálculos de norma e relatórios.",
            "<em>Em desenvolvimento:</em> aplicando o aprendizado da pós, desenvolvo, sob revisão técnica de um profissional sênior, um modelo de ML (MLP em PyTorch) para predição de esforços estruturais em um software interno.",
          ],
        },
        {
          when: "nov 2021 → mar 2023",
          role: "Engenheiro de Dutos Rígidos Júnior", org: "TechnipFMC · Rio de Janeiro",
          ctx: "EPCI Mero 1 e Mero 2 (Petrobras) · GirFlow, Girassol Life Extension (TotalEnergies)",
          bullets: [
            "Projeto de jumpers rígidos: carregamentos, fadiga LCF e VIV, curvas S-N (DNV-RP-C203), vãos livres e VIV (DNV-RP-F105).",
            "Espessura de parede (DNV-ST-F101, ASME B31.8, API RP 1111) e proteção catódica (DNV-RP-B401).",
            "Relatórios, notas técnicas e suporte à instalação offshore.",
          ],
        },
      ],
    },
    projects: {
      title: "Projetos", sub: "Onde engenharia encontra dados e IA. Código aberto no GitHub.",
      items: [
        {
          lbl: "mestrado · PUC-Rio", title: "drillstring-fea",
          desc: "Programa de elementos finitos para a análise dinâmica não linear de colunas de perfuração, com vigas corrotacionais 3D, Newton-Raphson, integração de Newmark e contato com a parede do poço. Reproduz os resultados da dissertação com testes automáticos.",
          tags: ["Python", "NumPy · SciPy", "FEM não linear", "dinâmica"], img: "assets/projetos/drillstring-fea.jpg",
          alt: "Painel do drillstring-fea: flambagem helicoidal de uma coluna de 4000 m", url: REPOS.fea,
        },
        {
          lbl: "BI Master · PUC-Rio", title: "anp-oil-gas-dw",
          desc: "Pipeline de BI reprodutível sobre os dados públicos de óleo e gás da ANP (2005–2023): stage em PostgreSQL, ETL em Python (com uma versão gêmea no Pentaho), Data Warehouse em esquema estrela e painel bilíngue em Streamlit.",
          tags: ["PostgreSQL", "Python · ETL", "Data Warehouse", "Streamlit"], img: "assets/projetos/anp-oil-gas-dw.jpg",
          alt: "Painel do anp-oil-gas-dw: tela de campos candidatos com tabela e mapa", url: REPOS.dw,
        },
      ],
    },
    education: {
      title: "Formação", sub: "Base analítica forte, agora com dados e IA.",
      bi: {
        title: "BI Master · Business Intelligence, ML & IA", meta: "PUC-Rio · mar 2026 → mar 2028 (previsão) · 360h",
        phases: [
          { n: "1/4", level: "Júnior", status: "concluída", done: true, topics: "Python, SQL, Data Warehouse, ETL, dashboards (Power BI), GitHub" },
          { n: "2/4", level: "Professional", status: "mar 2027", topics: "APIs, Big Data (Spark), Machine Learning, deploy com FastAPI" },
          { n: "3/4", level: "Sênior", status: "set 2027", topics: "Deep Learning, visão computacional, NLP e LLMs, MLOps" },
          { n: "4/4", level: "Specialist", status: "mar 2028", topics: "Otimização, Reinforcement Learning, decisão sob incerteza, projeto final (PoC)" },
        ],
      },
      degrees: [
        { title: "Mestrado em Engenharia Mecânica", meta: "PUC-Rio · 2021 · bolsa CAPES" },
        { title: "Graduação em Engenharia Civil", meta: "Universidade Federal de Sergipe · 2018" },
      ],
      certsTitle: "Certificações",
      certs: [
        { title: "Git e GitHub: do básico ao avançado", meta: "Udemy · 2026 · 9,5h" },
        { title: "Fundamentos de CAE", meta: "Instituto ESSS · 5h" },
      ],
      langsTitle: "Idiomas",
      langs: [["Português", "nativo"], ["Inglês", "fluente"], ["Espanhol", "intermediário"], ["Francês", "intermediário"]],
    },
    footer: "© 2026 Luiz Aguiar Neto · aguiarln.github.io",
  },

  en: {
    htmlLang: "en",
    title: "Luiz Aguiar Neto · Structural & Equipment Engineer",
    cv: "cv/Luiz_Aguiar_Neto_CV_EN.pdf",
    ui: {
      nav: { about: "about", skills: "skills", exp: "experience", projects: "projects", edu: "education" },
      ctaProjects: "See projects", ctaCv: "Download CV", now: "Now", progress: "Progress",
      photoAlt: "Photo of Luiz Aguiar Neto", welcome: "welcome!", current: "current",
      more: "show more", less: "show less", repo: "view on GitHub", menuOpen: "Open menu", menuClose: "Close menu", toLight: "Switch to light theme", toDark: "Switch to dark theme",
    },
    hero: {
      name: "Luiz Aguiar Neto",
      role: "Structural & Equipment Engineer",
      summary: 'I\'m a civil engineer from UFS, but it was during my <span class="hl">M.Sc. in Mechanical Engineering at PUC-Rio</span> that I really got hooked on code: I wrote a finite element program to simulate the dynamics of oil-well drill strings. Since 2021 I\'ve brought that to <span class="hl">TechnipFMC</span>, where I design and analyze subsea structures on large EPCI contracts and automate whatever I can with Python. Now, through <span class="hl">PUC-Rio\'s BI Master</span>, I\'m adding data and AI to that toolbox.',
      now: ["TechnipFMC · Búzios 6 and HISEP® Mero 3", "BI Master PUC-Rio · phase 2 of 4"],
    },
    stats: [
      { value: 5, label: "major subsea EPCIs|I've worked on" },
      { value: YEARS_OG, label: "years on subsea|oil &amp; gas projects" },
      { value: 6, label: "countries across my|international project teams" },
      { value: 1, suffix: "/4", label: "BI Master phases completed" },
    ],
    skills: {
      title: "Skills", sub: "Tools I use every day, and the ones I'm learning.",
      groups: [
        { title: "Simulation & Engineering", items: SKILL_ICONS.eng },
        { title: "Programming", items: SKILL_ICONS.prog },
        { title: "Data & AI", badge: "in progress", items: SKILL_ICONS.data },
        { title: "Tools", items: SKILL_ICONS.tools },
      ],
      standards: ["DNV-ST-F101", "DNV-OS-C201", "DNV-RP-C203", "DNV-RP-F105", "DNV-RP-B401", "ASME B31.8", "API RP 1111", "AWS D1.1"],
    },
    experience: {
      title: "Experience", sub: "Subsea EPCI contracts at TechnipFMC since 2021, from engineering to installation, with international teams.",
      items: [
        {
          when: "apr 2023 → today", current: true,
          role: "Structural & Equipment Engineer (Mid-level)", org: "TechnipFMC · Rio de Janeiro",
          ctx: "EPCI Búzios 6 and HISEP® Mero 3 (Petrobras) · In-line Structures Transformation and Industrialization Program",
          bullets: [
            "Design and analysis of PLETs, rigid jumpers and in-line structures (PLET, ESDV, TRF), with structural solutions for project conditions and slugging fatigue.",
            "Full structural design: beams, connections, fasteners, pins, electrical continuity cables, anodes and foundations (pin-piles and mudmats); welds per AWS D1.1; FEA and verification per DNV-OS-C201.",
            "Development of calculation methodologies for internal standardization and preparation of design reviews.",
            "Involvement in all EPCI phases (engineering, procurement, construction and installation), with teams from India, Poland, the UK, Norway, France and the USA.",
            "Automation with Python, Abaqus scripting, ANSYS APDL and VBA for FEA, code calculations and reports.",
            "<em>In progress:</em> applying what I'm learning in my postgraduate program, I'm developing, under technical review by a senior specialist, an ML model (MLP in PyTorch) to predict structural loads in an internal software tool.",
          ],
        },
        {
          when: "nov 2021 → mar 2023",
          role: "Rigid Pipelines Engineer (Junior)", org: "TechnipFMC · Rio de Janeiro",
          ctx: "EPCI Mero 1 and Mero 2 (Petrobras) · GirFlow, Girassol Life Extension (TotalEnergies)",
          bullets: [
            "Rigid jumper design: loads, LCF and VIV fatigue, S-N curves (DNV-RP-C203), free spans and VIV (DNV-RP-F105).",
            "Wall thickness (DNV-ST-F101, ASME B31.8, API RP 1111) and cathodic protection (DNV-RP-B401).",
            "Reports, technical notes and offshore installation support.",
          ],
        },
      ],
    },
    projects: {
      title: "Projects", sub: "Where engineering meets data and AI. Open source on GitHub.",
      items: [
        {
          lbl: "M.Sc. · PUC-Rio", title: "drillstring-fea",
          desc: "Finite element program for the nonlinear dynamic analysis of oil-well drill strings, with 3D corotational beams, Newton-Raphson, Newmark time integration and contact with the well wall. Reproduces the dissertation's results with automated tests.",
          tags: ["Python", "NumPy · SciPy", "nonlinear FEM", "dynamics"], img: "assets/projetos/drillstring-fea.jpg",
          alt: "drillstring-fea dashboard: helical buckling of a 4000 m drill string", url: REPOS.fea,
        },
        {
          lbl: "BI Master · PUC-Rio", title: "anp-oil-gas-dw",
          desc: "Reproducible BI pipeline on Brazil's public ANP oil & gas data (2005–2023): PostgreSQL stage, Python ETL (with a Pentaho twin), star-schema Data Warehouse and a bilingual Streamlit dashboard.",
          tags: ["PostgreSQL", "Python · ETL", "Data Warehouse", "Streamlit"], img: "assets/projetos/anp-oil-gas-dw.jpg",
          alt: "anp-oil-gas-dw dashboard: candidate fields screen with table and map", url: REPOS.dw,
        },
      ],
    },
    education: {
      title: "Education", sub: "A strong analytical foundation, now with data and AI.",
      bi: {
        title: "BI Master · Business Intelligence, ML & AI", meta: "PUC-Rio · mar 2026 → mar 2028 (expected) · 360h",
        phases: [
          { n: "1/4", level: "Junior", status: "completed", done: true, topics: "Python, SQL, Data Warehouse, ETL, dashboards (Power BI), GitHub" },
          { n: "2/4", level: "Professional", status: "mar 2027", topics: "APIs, Big Data (Spark), Machine Learning, deployment with FastAPI" },
          { n: "3/4", level: "Senior", status: "sep 2027", topics: "Deep Learning, computer vision, NLP and LLMs, MLOps" },
          { n: "4/4", level: "Specialist", status: "mar 2028", topics: "Optimization, Reinforcement Learning, decision under uncertainty, final project (PoC)" },
        ],
      },
      degrees: [
        { title: "M.Sc. in Mechanical Engineering", meta: "PUC-Rio · 2021 · CAPES scholarship" },
        { title: "B.Sc. in Civil Engineering", meta: "Federal University of Sergipe · 2018" },
      ],
      certsTitle: "Certifications",
      certs: [
        { title: "Git and GitHub: from basic to advanced", meta: "Udemy · 2026 · 9.5h" },
        { title: "Fundamentals of CAE", meta: "Instituto ESSS · 5h" },
      ],
      langsTitle: "Languages",
      langs: [["Portuguese", "native"], ["English", "fluent"], ["Spanish", "intermediate"], ["French", "intermediate"]],
    },
    footer: "© 2026 Luiz Aguiar Neto · aguiarln.github.io",
  },
};
