// Biblioteca de efeitos em JS puro (sem build), inspirada em React Bits e transitions.dev.
// Todos os efeitos respeitam prefers-reduced-motion: o conteúdo aparece completo e parado.
window.Motion = (() => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(pointer: fine)").matches;
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  // ---------- Ícone de skill a partir de content.js ----------
  function icon(it) {
    if (it.logo) {
      const d = window.LOGO_PATHS[it.logo];
      return `<span class="ico brand${it.wide ? " wide" : ""}" style="--b:${it.bg};${it.fg ? `--f:${it.fg}` : ""}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${d}"/></svg></span>`;
    }
    if (it.mono) return `<span class="ico brand mono" style="--b:${it.bg}" aria-hidden="true">${it.mono}</span>`;
    if (it.dev) return `<span class="ico dev"><i class="${it.dev}"${it.color ? ` style="color:${it.color}"` : ""} aria-hidden="true"></i></span>`;
    return `<span class="ico abbr" aria-hidden="true">${it.abbr}</span>`;
  }

  // ---------- Split Text: envolve cada palavra (texto puro) ----------
  function split(el, delayMs = 0) {
    if (!el || el.dataset.split) return;
    el.dataset.split = "1";
    const words = el.textContent.trim().split(/\s+/);
    el.setAttribute("aria-label", el.textContent.trim());
    el.innerHTML = words.map((w, i) => `<span class="w" aria-hidden="true"><span style="--i:${i};--d:${delayMs}ms">${w}</span></span>`).join(" ");
    el.classList.add("split");
  }

  // ---------- Scroll Reveal com stagger ----------
  let io;
  function reveal(root = document) {
    // filhos de [data-stagger] recebem índice para o atraso escalonado
    $$("[data-stagger]", root).forEach(g => [...g.children].forEach((c, i) => {
      c.style.setProperty("--i", i);
      if (!c.hasAttribute("data-reveal")) c.setAttribute("data-reveal", g.dataset.stagger || "");
    }));
    const targets = $$("[data-reveal], .split", root);
    if (reduce || !("IntersectionObserver" in window)) { targets.forEach(t => t.classList.add("in")); return; }
    io ??= new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    targets.forEach(t => io.observe(t));
  }

  // ---------- Count Up ----------
  function countUp(root = document) {
    $$("[data-count]", root).forEach(el => {
      const to = +el.dataset.count, plain = el.dataset.plain === "1";
      const fmt = n => (plain ? String(Math.round(n)) : Math.round(n).toLocaleString());
      if (reduce) { el.textContent = fmt(to); return; }
      const from = plain ? to - 25 : 0;
      el.textContent = fmt(from);
      const run = () => {
        const t0 = performance.now(), dur = 1400;
        const step = t => {
          const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 4);
          el.textContent = fmt(from + (to - from) * e);
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { run(); o.disconnect(); } }, { threshold: 0.6 });
      o.observe(el);
    });
  }

  // ---------- Decrypted Text: glifos aleatórios que resolvem da esquerda para a direita ----------
  function decrypt(el, { speed = 32, glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+=<>/" } = {}) {
    if (!el) return;
    const final = el.textContent;
    el.setAttribute("aria-label", final);
    if (reduce) return;
    let frame = 0;
    const total = final.length;
    clearInterval(el._dec);
    el._dec = setInterval(() => {
      const locked = Math.floor(frame / 2);
      el.textContent = [...final].map((ch, i) => (i < locked || ch === " " ? ch : glyphs[(Math.random() * glyphs.length) | 0])).join("");
      if (++frame > total * 2) { clearInterval(el._dec); el.textContent = final; }
    }, speed);
  }

  // ---------- Spotlight Card: brilho radial segue o cursor ----------
  function spotlight(sel, root = document) {
    if (!finePointer) return;
    $$(sel, root).forEach(card => card.addEventListener("pointermove", e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    }));
  }

  // ---------- Tilted Card: inclinação 3D com brilho ----------
  function tilt(sel, root = document, max = 7) {
    if (reduce || !finePointer) return;
    $$(sel, root).forEach(el => {
      el.addEventListener("pointermove", e => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg)`;
        el.style.setProperty("--gx", `${(x + 0.5) * 100}%`);
        el.style.setProperty("--gy", `${(y + 0.5) * 100}%`);
      });
      el.addEventListener("pointerleave", () => { el.style.transform = ""; });
    });
  }

  // ---------- Magnet: botão puxado levemente pelo cursor ----------
  function magnet(sel, root = document, strength = 0.25) {
    if (reduce || !finePointer) return;
    $$(sel, root).forEach(el => {
      el.addEventListener("pointermove", e => {
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * strength}px, ${(e.clientY - r.top - r.height / 2) * strength}px)`;
      });
      el.addEventListener("pointerleave", () => { el.style.transform = ""; });
    });
  }

  // ---------- Indicador deslizante (Tabs sliding) ----------
  function slidePill(container, activeEl) {
    const pill = container.querySelector(".pill");
    if (!pill || !activeEl) return;
    pill.style.width = `${activeEl.offsetWidth}px`;
    pill.style.transform = `translateX(${activeEl.offsetLeft}px)`;
  }

  // Remede todos os indicadores (idioma, abas, menu) a partir do item ativo
  function refreshPills() {
    $$(".pill").forEach(p => {
      const box = p.parentElement;
      slidePill(box, box.querySelector('[aria-pressed="true"], [aria-selected="true"], a.active'));
    });
  }

  // ---------- Scrollspy: qual seção está visível ----------
  function scrollspy(sectionSel, onChange) {
    const secs = $$(sectionSel);
    const o = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) onChange(e.target.id); });
    }, { rootMargin: "-45% 0px -50% 0px" });
    secs.forEach(s => o.observe(s));
    return o;
  }

  // ---------- Idioma: ?lang, preferência salva ou idioma do navegador; troca com View Transition ----------
  function i18n(render) {
    let saved = null; try { saved = localStorage.getItem("lang"); } catch (e) {}
    const param = new URLSearchParams(location.search).get("lang");
    let lang = param || saved || ((navigator.language || "pt").toLowerCase().startsWith("pt") ? "pt" : "en");
    if (!window.SITE[lang]) lang = "pt";
    const apply = l => {
      const c = window.SITE[l];
      document.documentElement.lang = c.htmlLang;
      document.title = c.title;
      render(c, l);
      $$(".lang").forEach(box => {
        $$("button", box).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === l)));
        requestAnimationFrame(() => slidePill(box, box.querySelector('[aria-pressed="true"]')));
      });
      try { localStorage.setItem("lang", l); } catch (e) {}
    };
    document.addEventListener("click", e => {
      const b = e.target.closest(".lang button");
      if (!b || b.dataset.lang === lang) return;
      lang = b.dataset.lang;
      if (document.startViewTransition && !reduce) document.startViewTransition(() => apply(lang));
      else apply(lang);
    });
    addEventListener("resize", refreshPills);
    apply(lang);
    document.fonts?.ready.then(refreshPills);
  }

  const langToggle = () => `<div class="lang" role="group" aria-label="Idioma / Language"><span class="pill" aria-hidden="true"></span><button type="button" data-lang="pt">PT</button><button type="button" data-lang="en">EN</button></div>`;

  return { reduce, finePointer, icon, split, reveal, countUp, decrypt, spotlight, tilt, magnet, slidePill, refreshPills, scrollspy, i18n, langToggle, $$ };
})();
