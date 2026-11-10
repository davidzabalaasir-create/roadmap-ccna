(function () {
  "use strict";
  var D = window.ROADMAP;
  var KEY = "ccna.roadmap.v1";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (id) { return document.getElementById(id); };

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function svg(path, cls) {
    var s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    s.setAttribute("viewBox", "0 0 24 24");
    s.setAttribute("aria-hidden", "true");
    if (cls) s.setAttribute("class", cls);
    var p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    p.setAttribute("d", path);
    s.appendChild(p);
    return s;
  }

  /* ---------- Estado ---------- */
  var state = {};
  try { state = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { state = {}; }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* sin almacenamiento */ } }

  /* ---------- Fechas ---------- */
  var MONTHS = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  var p = D.start.split("-");
  var START = new Date(+p[0], +p[1] - 1, +p[2]);
  function weekStart(n) { var d = new Date(START); d.setDate(d.getDate() + (n - 1) * 7); return d; }
  function weekEnd(n) { var d = weekStart(n); d.setDate(d.getDate() + 6); return d; }
  function fmt(d) { return d.getDate() + " " + MONTHS[d.getMonth()]; }
  function range(a, b) { return fmt(weekStart(a)) + " – " + fmt(weekEnd(b)); }
  var today = new Date(); today.setHours(0, 0, 0, 0);
  var dayDiff = Math.floor((today - START) / 86400000);
  var currentWeek = dayDiff < 0 ? 0 : Math.floor(dayDiff / 7) + 1;

  /* ---------- Temario ---------- */
  var COLORS = ["--b1", "--b2", "--b3", "--b4", "--b5", "--b6"];
  function renderBlocks(ver) {
    var list = D.blocks[ver], box = $("blocks"), bar = $("stackBar");
    box.textContent = ""; bar.textContent = "";
    list.forEach(function (b, i) {
      var c = "var(" + COLORS[i] + ")";
      var seg = el("i"); seg.style.background = c; bar.appendChild(seg);

      var row = el("article", "block"); row.style.setProperty("--c", c);
      row.appendChild(el("div", "num", b.n));
      var mid = el("div");
      mid.appendChild(el("h3", null, b.name));
      mid.appendChild(el("p", null, b.text));
      var meter = el("div", "meter"), fill = el("i"); meter.appendChild(fill); mid.appendChild(meter);
      row.appendChild(mid);
      var w = el("div", "w", String(b.w)); w.appendChild(el("small", null, " %")); row.appendChild(w);
      box.appendChild(row);

      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          seg.style.width = b.w + "%";
          fill.style.width = (b.w * 4) + "%";
        });
      });
    });
  }
  ["tabV2", "tabV1"].forEach(function (id) {
    $(id).addEventListener("click", function () {
      $("tabV2").setAttribute("aria-selected", String(id === "tabV2"));
      $("tabV1").setAttribute("aria-selected", String(id === "tabV1"));
      renderBlocks(this.dataset.ver);
    });
  });
  renderBlocks("v2");

  /* ---------- Plan ---------- */
  var total = 0;
  function check(id, labelNode, extraCls) {
    total++;
    var label = el("label", "item" + (extraCls ? " " + extraCls : ""));
    var input = document.createElement("input");
    input.type = "checkbox"; input.dataset.id = id; input.checked = !!state[id];
    input.addEventListener("change", function () {
      if (input.checked) state[id] = 1; else delete state[id];
      save(); update();
    });
    label.appendChild(input); label.appendChild(labelNode);
    return label;
  }

  var timeline = $("timeline");
  D.phases.forEach(function (ph) {
    var li = el("li", "phase reveal"); li.id = ph.id;
    var isCurrent = currentWeek >= ph.from && currentWeek <= ph.to;
    if (isCurrent || (currentWeek === 0 && ph.n === 1)) li.classList.add("open");
    if (isCurrent) li.classList.add("current");

    var card = el("div", "phase-card");
    var head = el("button", "phase-head"); head.type = "button";
    head.setAttribute("aria-expanded", String(li.classList.contains("open")));
    head.setAttribute("aria-controls", ph.id + "-body");
    head.appendChild(el("span", "phase-n", String(ph.n)));
    var ttl = el("span");
    ttl.appendChild(el("h3", null, ph.title));
    ttl.appendChild(el("div", "meta", "Semanas " + ph.from + "-" + ph.to + " · " + range(ph.from, ph.to) + " · " + ph.block));
    head.appendChild(ttl);
    var pct = el("span", "phase-pct", "0 %"); head.appendChild(pct);
    head.appendChild(svg("M6 9l6 6 6-6", "chev"));
    head.addEventListener("click", function () {
      var open = li.classList.toggle("open");
      head.setAttribute("aria-expanded", String(open));
    });
    card.appendChild(head);
    var pbar = el("div", "phase-bar"), pfill = el("i"); pbar.appendChild(pfill); card.appendChild(pbar);

    var body = el("div", "phase-body"); body.id = ph.id + "-body";
    var inner = el("div", "phase-inner"), pad = el("div", "phase-pad");

    var goal = el("p", "goal-line"); goal.appendChild(el("b", null, "Objetivo: ")); goal.appendChild(document.createTextNode(ph.goal));
    pad.appendChild(goal);

    var wk = el("div"); wk.appendChild(el("p", "sub", "Semanas"));
    var wl = el("div", "items");
    ph.weeks.forEach(function (w) {
      var txt = el("span");
      var k = el("span", "k", "Semana " + w.n + " "); k.appendChild(el("span", null, "· " + range(w.n, w.n)));
      txt.appendChild(k);
      txt.appendChild(el("span", "t", w.topic));
      txt.appendChild(el("span", "g", "Objetivo: " + w.goal));
      wl.appendChild(check("w" + w.n, txt, w.n === currentWeek ? "now-week" : ""));
    });
    wk.appendChild(wl); pad.appendChild(wk);

    var lb = el("div"); lb.appendChild(el("p", "sub", "Laboratorios de Packet Tracer"));
    var ll = el("div", "items labs");
    ph.labs.forEach(function (l) {
      var txt = el("span");
      txt.appendChild(el("span", "k", l.id));
      txt.appendChild(el("span", "t", l.name));
      txt.appendChild(el("span", "g", l.text));
      ll.appendChild(check(l.id, txt));
    });
    lb.appendChild(ll); pad.appendChild(lb);

    if (ph.note) pad.appendChild(el("p", "note", ph.note));
    var ck = el("p", "check"); ck.appendChild(el("b", null, "Control de fase: ")); ck.appendChild(document.createTextNode(ph.check));
    pad.appendChild(ck);

    inner.appendChild(pad); body.appendChild(inner); card.appendChild(body);
    li.appendChild(card); timeline.appendChild(li);
    ph._li = li; ph._pct = pct; ph._fill = pfill;
  });

  $("expandAll").addEventListener("click", function () {
    var anyClosed = D.phases.some(function (ph) { return !ph._li.classList.contains("open"); });
    D.phases.forEach(function (ph) {
      ph._li.classList.toggle("open", anyClosed);
      ph._li.querySelector(".phase-head").setAttribute("aria-expanded", String(anyClosed));
    });
    this.textContent = anyClosed ? "Plegar todo" : "Desplegar todo";
  });
  $("resetAll").addEventListener("click", function () {
    if (!window.confirm("¿Borrar todo tu progreso guardado en este navegador?")) return;
    state = {}; save();
    document.querySelectorAll("input[type=checkbox]").forEach(function (i) { i.checked = false; });
    update();
  });

  /* ---------- Rutina ---------- */
  var KIND = { theory: "var(--b2)", lab: "var(--b1)", test: "var(--b4)", rest: "var(--line)" };
  D.weekPlan.forEach(function (d) {
    var c = el("div", "day"); c.style.setProperty("--c", KIND[d.k]);
    c.appendChild(el("b", null, d.d)); c.appendChild(el("span", null, d.t)); c.appendChild(el("small", null, d.h));
    $("weekGrid").appendChild(c);
  });

  /* ---------- Simulacros y criterio ---------- */
  D.mocks.forEach(function (m) {
    var box = el("div", "mock"), col = el("div", "col"), bar = el("div", "bar");
    bar.dataset.h = m.target; bar.appendChild(el("em", null, m.label));
    col.appendChild(bar); box.appendChild(col);
    var cap = el("div"); cap.appendChild(el("b", null, "Simulacro " + m.n));
    cap.appendChild(el("small", null, "semana " + m.week + (m.note ? " · " + m.note : "")));
    box.appendChild(cap); $("mocks").appendChild(box);
  });
  var critTotal = D.criteria.length;
  D.criteria.forEach(function (c, i) {
    var id = "c" + (i + 1);
    var label = el("label", "item");
    var input = document.createElement("input");
    input.type = "checkbox"; input.checked = !!state[id];
    input.addEventListener("change", function () {
      if (input.checked) state[id] = 1; else delete state[id];
      save(); verdict();
    });
    label.appendChild(input); label.appendChild(el("span", "t", c));
    $("criteria").appendChild(label);
  });
  function verdict() {
    var n = 0; for (var i = 1; i <= critTotal; i++) if (state["c" + i]) n++;
    var v = $("verdict");
    v.classList.toggle("ok", n === critTotal);
    v.textContent = n === critTotal ? "Cumples las cinco condiciones: reserva el examen." : "Cumples " + n + " de " + critTotal + ". Todavía no reserves.";
  }
  verdict();

  /* ---------- Recursos y primera semana ---------- */
  function resources(list, target) {
    list.forEach(function (r) {
      var li = el("li"), a = el("a"); a.href = r.url; a.rel = "noopener"; a.target = "_blank";
      var t = el("span"); t.appendChild(el("b", null, r.name)); t.appendChild(el("span", null, r.text));
      a.appendChild(t); a.appendChild(svg("M7 17 17 7M9 7h8v8"));
      li.appendChild(a); $(target).appendChild(li);
    });
  }
  resources(D.free, "resFree"); resources(D.paid, "resPaid");
  D.firstWeek.forEach(function (f) {
    var li = el("li", "reveal");
    li.appendChild(el("b", null, f.d)); li.appendChild(el("small", null, f.h)); li.appendChild(el("span", null, f.t));
    $("firstWeek").appendChild(li);
  });

  /* ---------- Progreso global ---------- */
  var C = 2 * Math.PI * 52;
  function update() {
    var done = 0;
    D.phases.forEach(function (ph) {
      var ids = ph.weeks.map(function (w) { return "w" + w.n; }).concat(ph.labs.map(function (l) { return l.id; }));
      var d = ids.filter(function (id) { return state[id]; }).length;
      done += d;
      var pc = Math.round(d / ids.length * 100);
      ph._pct.textContent = pc + " %"; ph._fill.style.width = pc + "%";
      ph._li.classList.toggle("done", d === ids.length);
    });
    var pct = Math.round(done / total * 100);
    $("pct").textContent = pct + "%";
    $("ring").style.strokeDashoffset = String(C * (1 - pct / 100));
    $("ringWrap").setAttribute("aria-label", "Progreso del plan: " + pct + " %");
    $("nowCount").textContent = done + " de " + total + " tareas completadas";
  }
  update();

  /* ---------- Tarjeta «hoy» ---------- */
  (function () {
    var tag = $("nowTag"), title = $("nowTitle"), text = $("nowText");
    if (currentWeek === 0) {
      var days = -dayDiff;
      tag.textContent = "Fase 0 · preparación";
      title.textContent = days === 1 ? "Falta 1 día para empezar" : "Faltan " + days + " días para empezar";
      text.textContent = "Instala Packet Tracer, descarga el temario v2.0 y haz el diagnóstico inicial.";
    } else if (currentWeek > D.weeks) {
      tag.textContent = "Ventana de examen";
      title.textContent = "Plan terminado";
      text.textContent = "Revisa el criterio de la sección «Progreso» y decide la fecha.";
    } else {
      var ph = D.phases.filter(function (x) { return currentWeek >= x.from && currentWeek <= x.to; })[0];
      var w = ph.weeks.filter(function (x) { return x.n === currentWeek; })[0];
      tag.textContent = "Semana " + currentWeek + " de " + D.weeks + " · " + range(currentWeek, currentWeek);
      title.textContent = "Fase " + ph.n + ": " + ph.title;
      text.textContent = w.topic + ".";
    }
  })();

  /* ---------- Animaciones de entrada ---------- */
  function onSeen(node) {
    node.classList.add("in");
    node.querySelectorAll(".bar[data-h]").forEach(function (b) { b.style.height = b.dataset.h + "%"; });
  }
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { onSeen(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (r, i) { r.style.transitionDelay = (i % 4) * 60 + "ms"; io.observe(r); });
  } else {
    reveals.forEach(onSeen);
  }

  /* Contadores del hero */
  if (!reduce) {
    document.querySelectorAll("[data-count]").forEach(function (n) {
      var end = +n.dataset.count, t0 = performance.now();
      (function tick(t) {
        var k = Math.min(1, (t - t0) / 900);
        n.textContent = String(Math.round(end * (1 - Math.pow(1 - k, 3))));
        if (k < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }

  /* Barra de lectura y sección activa */
  var navBar = $("navBar"), links = document.querySelectorAll(".nav nav a");
  function onScroll() {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    navBar.style.width = (h > 0 ? window.scrollY / h * 100 : 0) + "%";
    var cur = "";
    links.forEach(function (a) {
      var s = document.querySelector(a.getAttribute("href"));
      if (s && s.getBoundingClientRect().top < 140) cur = a.getAttribute("href");
    });
    links.forEach(function (a) { a.classList.toggle("on", a.getAttribute("href") === cur); });
  }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* ---------- Fondo: red de nodos ---------- */
  (function () {
    var cv = $("net"); if (!cv || reduce) return;
    var ctx = cv.getContext("2d"), nodes = [], W, H, dpr = Math.min(2, window.devicePixelRatio || 1), raf;
    function size() {
      var r = cv.getBoundingClientRect(); W = r.width; H = r.height;
      cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.round(Math.min(70, W * H / 16000)); nodes = [];
      for (var i = 0; i < n; i++) nodes.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25 });
    }
    function frame() {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < nodes.length; i++) {
        var a = nodes[i]; a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > W) a.vx *= -1; if (a.y < 0 || a.y > H) a.vy *= -1;
        for (var j = i + 1; j < nodes.length; j++) {
          var b = nodes[j], dx = a.x - b.x, dy = a.y - b.y, d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) { ctx.strokeStyle = "rgba(45,212,191," + (0.22 * (1 - d / 130)) + ")"; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
        }
        ctx.fillStyle = "rgba(45,212,191,0.55)"; ctx.beginPath(); ctx.arc(a.x, a.y, 1.6, 0, 6.283); ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    }
    size(); frame();
    window.addEventListener("resize", size);
    document.addEventListener("visibilitychange", function () {
      cancelAnimationFrame(raf); if (!document.hidden) frame();
    });
  })();
})();
