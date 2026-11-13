/* =========================================================================
   ALUMNI — kiosk app. Plain JS + bundled GSAP.
   ========================================================================= */
(function () {
  'use strict';

  var stage = document.getElementById('stage');
  function fit() {
    var s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    stage.style.transform = 'translate(-50%, -50%) scale(' + s + ')';
  }
  window.addEventListener('resize', fit); fit();

  var SNAP = /[?&]snap=/.test(location.search);
  var ERAS = ALUMNI.eras, PEOPLE = ALUMNI.people;
  var byId = {};
  PEOPLE.forEach(function (p) { byId[p.id] = p; });

  var W = 1920;
  var index = 0;
  var courseFilter = 'all';

  /* ---------------------------------------------------------------- helpers */
  function initials(name) {
    return name.split(' ').filter(function (w) { return w.length > 2; })
      .slice(0, 2).map(function (w) { return w[0]; }).join('');
  }
  /* Maj has no insignia in the supplied set (major_general.png is a two-star
     general's board, a different rank) — so it falls back to a typographic
     plate rather than borrowing the wrong badge. */
  function monoText(p) {
    if (p.rank === 'Maj') return 'MAJOR';
    return p.rank.replace(' (N)', '').toUpperCase();
  }
  function rankPlate(p, cls) {
    if (p.rankImg) {
      return '<div class="' + (cls || 'rank-img') + '"><img src="' + p.rankImg + '" alt=""></div>';
    }
    return '<div class="' + (cls || 'rank-img') + '"><span class="mono">' + monoText(p) + '</span></div>';
  }
  function courseName(id) { return id === 'sc' ? 'Senior Course' : 'Junior Course'; }
  function personCard(p) {
    return '<button class="acard" data-person="' + p.id + '">' +
      rankPlate(p) +
      '<div class="an">' + p.name + '</div>' +
      '<div class="ar">' + p.rank + ' · ' + courseName(p.course) + '</div>' +
      '<div class="ay">' + p.year + '</div>' +
      (p.best ? '<span class="badge-best">Best participant</span>' : '') +
      '</button>';
  }

  /* ------------------------------------------------------------ background */
  var bgStack = document.getElementById('bg-stack');
  bgStack.innerHTML = '<div class="scrim"></div>' + ERAS.map(function (e, i) {
    return '<div class="bg-layer" data-i="' + i + '" style="background-image:url(assets/img/bg/' + e.bg + '.jpg)"></div>';
  }).join('');

  /* ----------------------------------------------------------------- track */
  var track = document.getElementById('track');
  track.innerHTML = ERAS.map(function (e, i) {
    var members = e.members.map(function (id) { return byId[id]; }).filter(Boolean);
    var acards = members.slice(0, 4).map(personCard).join('');
    var cards = e.cards.map(function (c, k) {
      return '<figure class="fcard fcard--' + (k ? 'b' : 'a') + '">' +
        '<img src="assets/img/cards/' + c + '.jpg" alt="">' +
        '<figcaption class="cap"><span>' + (k ? 'The College' : 'The work') + '</span><i>' + (k ? 'Jaji' : 'Air power') + '</i></figcaption>' +
        '</figure>';
    }).join('');

    return '<article class="panel" data-i="' + i + '">' +
      '<div class="ghost-year">' + e.year + '</div>' +
      '<div class="p-body">' +
        '<div class="p-kicker">' + e.kicker + '</div>' +
        '<h2 class="p-title">' + e.title + '</h2>' +
        '<p class="p-text">' + e.text + '</p>' +
      '</div>' +
      '<div class="p-cards">' + cards + '</div>' +
      (acards ? '<div class="p-alumni" data-members="' + e.members.length + '">' + acards + '</div>' : '') +
      '</article>';
  }).join('');

  var panels = Array.prototype.slice.call(track.querySelectorAll('.panel'));
  var bgLayers = Array.prototype.slice.call(bgStack.querySelectorAll('.bg-layer'));

  /* ------------------------------------------------------------------- rail */
  var ticks = document.getElementById('rail-ticks');
  ticks.innerHTML = ERAS.map(function (e, i) {
    return '<button class="tick" data-i="' + i + '"><span>' + e.year + '</span><em>' + e.kicker + '</em></button>';
  }).join('');

  var railFill = document.getElementById('rail-fill');
  var tickEls = Array.prototype.slice.call(ticks.querySelectorAll('.tick'));

  /* -------------------------------------------------------------- animations */
  function splitWords(el) {
    if (!el || el.dataset.split) return el && el.querySelectorAll('span.w');
    el.dataset.split = '1';
    el.innerHTML = el.textContent.split(' ').map(function (w) {
      return '<span class="w" style="display:inline-block;overflow:hidden;vertical-align:top"><span style="display:inline-block">' + w + '&nbsp;</span></span>';
    }).join('');
    return el.querySelectorAll('span.w > span');
  }

  function enterPanel(i, instant) {
    var p = panels[i];
    if (!p) return;
    var words = splitWords(p.querySelector('.p-title'));
    var kill = ['.ghost-year', '.p-kicker', '.p-text', '.fcard', '.acard']
      .map(function (s) { return p.querySelectorAll(s); });

    var targets = [words].concat(kill).filter(function (t) { return t && t.length; });

    if (instant) {
      if (targets.length) gsap.set(targets, { clearProps: 'all' });
      return;
    }

    var tl = gsap.timeline();
    var setIf = function (t, vars) { if (t && t.length) gsap.set(t, vars); };
    setIf(kill[0], { opacity: 0, y: 50 });
    setIf(kill[1], { opacity: 0, x: -22 });
    setIf(words, { yPercent: 115 });
    setIf(kill[2], { opacity: 0, y: 22 });
    setIf(kill[3], { opacity: 0, y: 46, rotate: 0 });
    setIf(kill[4], { opacity: 0, y: 34 });

    tl.to(kill[0], { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' }, 0)
      .to(kill[1], { opacity: 1, x: 0, duration: .7, ease: 'power2.out' }, .1)
      .to(words, { yPercent: 0, duration: .9, ease: 'power4.out', stagger: .05 }, .16)
      .to(kill[2], { opacity: 1, y: 0, duration: .8, ease: 'power2.out' }, .45)
      .to(kill[3], { opacity: 1, y: 0, duration: .9, stagger: .14, ease: 'power3.out' }, .5)
      .to(kill[4], { opacity: 1, y: 0, duration: .6, stagger: .07, ease: 'power2.out' }, .75);
  }

  function setActive(i, instant) {
    index = Math.max(0, Math.min(ERAS.length - 1, i));
    gsap.to(track, { x: -index * W, duration: instant ? 0 : .95, ease: 'power3.inOut' });
    bgLayers.forEach(function (l, k) { l.classList.toggle('is-on', k === index); });
    var on = bgLayers[index];
    if (on && !instant) {
      gsap.fromTo(on, { scale: 1.08 }, { scale: 1, duration: 1.6, ease: 'power2.out' });
    }
    tickEls.forEach(function (t, k) { t.classList.toggle('is-on', k === index); });
    var note = document.getElementById('rail-note');
    if (note) {
      var b = ERAS[index].band[0];
      note.innerHTML = '<b>' + b[0] + '</b>' + b[1];
    }
    railFill.style.width = (ERAS.length > 1 ? (index / (ERAS.length - 1)) * 100 : 100) + '%';
    enterPanel(index, instant);
  }

  /* -------------------------------------------------------------------- drag */
  var dragging = false, startX = 0, startTrack = 0, moved = 0;

  function pointerDown(e) {
    if (e.target.closest('.nav-btn, .chip, .round, .tick, .acard, .gcard, .kiosk-close, .exit-panel')) return;
    dragging = true; moved = 0;
    startX = (e.touches ? e.touches[0].clientX : e.clientX);
    startTrack = gsap.getProperty(track, 'x');
    gsap.killTweensOf(track);
    stage.setPointerCapture && e.pointerId != null && stage.setPointerCapture(e.pointerId);
  }
  function pointerMove(e) {
    if (!dragging) return;
    var x = (e.touches ? e.touches[0].clientX : e.clientX);
    var dx = (x - startX) * scaleFactor();
    moved = Math.abs(dx);
    var next = startTrack + dx;
    var min = -(ERAS.length - 1) * W;
    if (next > 60) next = 60 + (next - 60) * .3;
    if (next < min - 60) next = min - 60 + (next - min + 60) * .3;
    gsap.set(track, { x: next });
  }
  function pointerUp() {
    if (!dragging) return;
    dragging = false;
    var x = gsap.getProperty(track, 'x');
    var target = Math.round(-x / W);
    if (moved < 24) { setActive(index); return; }
    setActive(target);
  }
  function scaleFactor() {
    return Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
  }

  ['pointerdown', 'touchstart'].forEach(function (ev) {
    document.getElementById('timeline').addEventListener(ev, pointerDown, { passive: true });
  });
  /* move/up go on window: pointer capture on #stage retargets them away from
     #timeline, so listening there would never see the release */
  ['pointermove', 'touchmove'].forEach(function (ev) {
    window.addEventListener(ev, pointerMove, { passive: true });
  });
  ['pointerup', 'pointercancel', 'touchend'].forEach(function (ev) {
    window.addEventListener(ev, pointerUp, { passive: true });
  });

  document.querySelectorAll('[data-step]').forEach(function (b) {
    b.addEventListener('click', function () {
      setActive(index + parseInt(b.getAttribute('data-step'), 10));
    });
  });
  tickEls.forEach(function (t) {
    t.addEventListener('click', function () { setActive(parseInt(t.getAttribute('data-i'), 10)); });
  });

  /* ------------------------------------------------------------------- chips */
  document.getElementById('course-chips').addEventListener('click', function (e) {
    var b = e.target.closest('.chip'); if (!b) return;
    document.querySelectorAll('#course-chips .chip').forEach(function (c) { c.classList.remove('is-on'); });
    b.classList.add('is-on');
    courseFilter = b.getAttribute('data-course');
    applyFilter();
  });

  function applyFilter() {
    track.querySelectorAll('.p-alumni').forEach(function (row) {
      var shown = 0;
      row.querySelectorAll('.acard').forEach(function (c) {
        var p = byId[c.getAttribute('data-person')];
        var ok = courseFilter === 'all' || p.course === courseFilter;
        c.style.display = ok ? '' : 'none';
        if (ok) shown++;
      });
      row.style.opacity = shown ? 1 : 0;
    });
  }

  /* --------------------------------------------------------------------- nav */
  var nav = document.getElementById('nav');
  var CHAPTERS = [
    { no: '01', label: 'The College', note: '1978 — today', img: 'hall', cap: 'The College · Jaji',
      act: function () { setActive(0); } },
    { no: '02', label: 'Junior Course', note: 'Since 1979', img: 'line', cap: 'Junior Course · syndicate room',
      act: function () { openGallery({ course: 'jc', title: 'Junior Course' }); } },
    { no: '03', label: 'Senior Course', note: 'Since 1978', img: 'podium', cap: 'Senior Course · the lectern',
      act: function () { openGallery({ course: 'sc', title: 'Senior Course' }); } },
    { no: '04', label: 'Best participants', note: 'Each course', img: 'cockpit', cap: 'Best participants · the reward',
      act: function () { openGallery({ best: true, title: 'Best participants' }); } },
    { no: '05', label: 'Allied officers', note: '30+ countries', img: 'handshake', cap: 'Allied officers · partner air forces',
      act: function () { openGallery({ allied: true, title: 'Allied officers' }); } }
  ];

  /* the photograph beside the list follows whichever chapter is under the finger */
  var navImgs = [document.querySelector('.nav-photo .np-a'), document.querySelector('.nav-photo .np-b')];
  var navCap = document.getElementById('nav-photo-cap');
  var navFlip = 0, navCurrent = 'hall';

  function navPhoto(slug, cap) {
    if (!slug || slug === navCurrent) return;
    navCurrent = slug;
    var front = navImgs[navFlip % 2], back = navImgs[(navFlip + 1) % 2];
    back.src = 'assets/img/cards/' + slug + '.jpg';
    var swap = function () {
      back.classList.add('is-on');
      front.classList.remove('is-on');
      navFlip++;
      navCap.textContent = cap;
    };
    if (back.complete) swap();
    else back.onload = swap;
  }

  var navList = document.getElementById('nav-list');
  navList.innerHTML = '<div class="nav-head">Chapters</div>' + CHAPTERS.map(function (c, i) {
    return '<button class="nav-item" data-ch="' + i + '"><i>' + c.no + '</i><span>' + c.label + '</span><em>' + c.note + '</em></button>';
  }).join('');

  function openNav() {
    navCurrent = '';
    navPhoto(CHAPTERS[0].img, CHAPTERS[0].cap);
    nav.classList.remove('is-hidden');
    var tl = gsap.timeline();
    gsap.set('.nav-photo', { opacity: 0, x: -40, rotate: -6 });
    gsap.set('.nav-head', { opacity: 0, y: 16 });
    gsap.set('.nav-item', { opacity: 0, y: 46 });
    gsap.set('.nav-item i', { opacity: 0 });
    gsap.set('.nav-close', { opacity: 0, scale: .8 });
    tl.to('.nav-photo', { opacity: 1, x: 0, rotate: -2.5, duration: .9, ease: 'power3.out' }, 0)
      .to('.nav-head', { opacity: 1, y: 0, duration: .5 }, .1)
      .to('.nav-item', { opacity: 1, y: 0, duration: .7, stagger: .09, ease: 'power3.out' }, .2)
      .to('.nav-item i', { opacity: 1, duration: .5, stagger: .09 }, .3)
      .to('.nav-close', { opacity: 1, scale: 1, duration: .45, ease: 'back.out(1.6)' }, .3);
  }
  function closeNav(then) {
    var tl = gsap.timeline({ onComplete: function () {
      nav.classList.add('is-hidden');
      if (then) then();
    }});
    tl.to('.nav-item', { opacity: 0, y: 24, duration: .35, stagger: .04, ease: 'power2.in' }, 0)
      .to('.nav-photo', { opacity: 0, x: -30, duration: .45 }, .05)
      .to('.nav-close', { opacity: 0, scale: .85, duration: .3 }, 0);
  }

  navList.addEventListener('mouseover', function (e) {
    var b = e.target.closest('.nav-item'); if (!b) return;
    var ch = CHAPTERS[parseInt(b.getAttribute('data-ch'), 10)];
    navPhoto(ch.img, ch.cap);
  });
  navList.addEventListener('focusin', function (e) {
    var b = e.target.closest('.nav-item'); if (!b) return;
    var ch = CHAPTERS[parseInt(b.getAttribute('data-ch'), 10)];
    navPhoto(ch.img, ch.cap);
  });

  document.getElementById('nav-open').addEventListener('click', openNav);
  document.getElementById('nav-close').addEventListener('click', function () { closeNav(); });
  navList.addEventListener('click', function (e) {
    var b = e.target.closest('.nav-item'); if (!b) return;
    var ch = CHAPTERS[parseInt(b.getAttribute('data-ch'), 10)];
    closeNav(function () { ch.act(); });
  });

  /* ----------------------------------------------------------------- gallery */
  var gallery = document.getElementById('gallery');
  var galGrid = document.getElementById('gal-grid');
  var galChips = document.getElementById('gal-chips');
  var galFoot = document.getElementById('gal-foot');
  var galTitle = document.getElementById('gal-title');
  var galState = { course: 'all', best: false, allied: false, decade: 'all' };

  function openGallery(opts) {
    galState = { course: opts.course || 'all', best: !!opts.best, allied: !!opts.allied, decade: 'all' };
    renderGallery();
    gallery.classList.remove('is-hidden');
    gsap.fromTo('.gcard', { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: .5, stagger: .022, ease: 'power2.out' });
  }
  function closeGallery() { gallery.classList.add('is-hidden'); }

  function renderGallery() {
    var chips = [
      { k: 'course', v: 'all', l: 'All' },
      { k: 'course', v: 'jc', l: 'Junior' },
      { k: 'course', v: 'sc', l: 'Senior' },
      { k: 'best', v: true, l: 'Best participants' },
      { k: 'allied', v: true, l: 'Allied officers' }
    ];
    galChips.innerHTML = chips.map(function (c) {
      var on = (c.k === 'course' && galState.course === c.v) ||
               (c.k === 'best' && galState.best) || (c.k === 'allied' && galState.allied);
      return '<button class="chip' + (on ? ' is-on' : '') + '" data-k="' + c.k + '" data-v="' + c.v + '">' + c.l + '</button>';
    }).join('');

    var list = PEOPLE.filter(function (p) {
      if (galState.course !== 'all' && p.course !== galState.course) return false;
      if (galState.best && !p.best) return false;
      if (galState.allied && p.country === 'Nigeria') return false;
      return true;
    }).sort(function (a, b) { return b.year - a.year; });

    galGrid.innerHTML = list.map(function (p) {
      return '<button class="gcard" data-person="' + p.id + '">' +
        '<div class="gi">' + (p.rankImg ? '<img src="' + p.rankImg + '" alt="">' : '<span class="mono">' + monoText(p) + '</span>') + '</div>' +
        '<div class="gn">' + p.name + '</div>' +
        '<div class="gm">' + p.rank + ' · ' + courseName(p.course) + ' · ' + p.country + '</div>' +
        '<div class="gm" style="color:var(--gold)">' + p.year + '</div>' +
        (p.best ? '<span class="gb">Best participant</span>' : '') +
        '</button>';
    }).join('');

    galFoot.innerHTML = '<span>' + list.length + ' on this wall</span><span>Touch a name for the full record</span>';
    galList = list.map(function (p) { return p.id; });
    galGrid.classList.toggle('is-sparse', list.length <= 10);

    /* the heading follows whatever is actually on screen */
    galTitle.textContent = galState.allied ? 'Allied officers'
      : galState.best ? 'Best participants'
      : galState.course === 'jc' ? 'Junior Course'
      : galState.course === 'sc' ? 'Senior Course'
      : 'Alumni';
  }
  var galList = [];

  galChips.addEventListener('click', function (e) {
    var b = e.target.closest('.chip'); if (!b) return;
    var k = b.getAttribute('data-k'), v = b.getAttribute('data-v');
    if (k === 'course') { galState.course = v; galState.best = false; galState.allied = false; }
    if (k === 'best') { galState.best = !galState.best; galState.allied = false; galState.course = 'all'; }
    if (k === 'allied') { galState.allied = !galState.allied; galState.best = false; galState.course = 'all'; }
    renderGallery();
    gsap.fromTo('.gcard', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: .4, stagger: .015 });
  });

  document.getElementById('gal-close').addEventListener('click', closeGallery);
  galGrid.addEventListener('click', function (e) {
    var b = e.target.closest('.gcard'); if (!b) return;
    openProfile(b.getAttribute('data-person'), galList);
  });

  /* ----------------------------------------------------------------- profile */
  var profile = document.getElementById('profile');
  var profWrap = document.getElementById('prof-wrap');

  var profList = [], profIndex = 0;

  function defaultList() {
    return PEOPLE.filter(function (p) {
      return courseFilter === 'all' || p.course === courseFilter;
    }).sort(function (a, b) { return b.year - a.year; }).map(function (p) { return p.id; });
  }

  function openProfile(id, list) {
    var p = byId[id]; if (!p) return;
    profList = (list && list.length) ? list.slice() : defaultList();
    profIndex = Math.max(0, profList.indexOf(id));
    var nextId = profList[(profIndex + 1) % profList.length];
    var nextName = nextId && nextId !== id ? byId[nextId].name : '';
    profWrap.innerHTML =
      '<div class="prof-left">' +
        '<div class="prof-plate">' +
          (p.rankImg ? '<img src="' + p.rankImg + '" alt="">' : '<span class="mono">' + monoText(p) + '</span>') +
        '</div>' +
        '<div class="prof-rank-type">' + p.rank + ' — rank insignia</div>' +
      '</div>' +
      '<div class="prof-right">' +
        (nextName ? '<button class="prof-next" id="prof-next">Next' +
          '<svg viewBox="0 0 24 24"><path d="m9 5 7 7-7 7"/></svg>' +
          '<span>' + nextName + '</span></button>' : '') +
        '<div class="prof-kicker">' + courseName(p.course) + ' · ' + p.year + '</div>' +
        '<h2 class="prof-name">' + p.name + '</h2>' +
        '<div class="prof-meta"><span><b>' + p.rank + '</b></span><span>' + p.service + '</span><span>' + p.country + '</span></div>' +
        (p.best ? '<span class="prof-best">Best participant</span>' : '') +
        '<div class="prof-rule"></div>' +
        '<div class="prof-block"><h4>Why they are on this wall</h4><p>' + p.reason + '</p></div>' +
        '<div class="prof-block"><h4>Achievements</h4><p>' + p.achievements + '</p></div>' +
        (p.milestones.length ? '<div class="prof-block"><h4>Career</h4><div class="prof-tl">' +
          p.milestones.map(function (m) { return '<div><b>' + m.year + '</b><span>' + m.text + '</span></div>'; }).join('') +
        '</div></div>' : '') +
      '</div>';

    profile.classList.remove('is-hidden');
    gsap.fromTo('.prof-left', { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: .7, ease: 'power3.out' });
    gsap.fromTo('.prof-right > *', { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: .6, stagger: .06, ease: 'power2.out', delay: .1 });
    document.getElementById('prof-close').onclick = function () { profile.classList.add('is-hidden'); };
    var nb = document.getElementById('prof-next');
    if (nb) nb.onclick = function (ev) {
      ev.stopPropagation();
      var nid = profList[(profIndex + 1) % profList.length];
      if (nid && nid !== p.id) openProfile(nid, profList);
    };
  }

  document.getElementById('timeline').addEventListener('click', function (e) {
    var c = e.target.closest('.acard'); if (!c) return;
    openProfile(c.getAttribute('data-person'), defaultList());
  });

  /* Kiosk Edge refuses window.close() on a window it did not open, so the page
     flags its own title; tools/kiosk-watch.ps1 (started by run.bat) watches for
     that flag and ends the kiosk process. Both routes are tried. */
  function closeKiosk() {
    var panel = document.getElementById('exit-panel');
    if (panel) panel.classList.add('is-on');

    /* the flag is what run.bat's watcher reads; window.close() covers the
       case where Edge treats the kiosk window as script-owned */
    document.title = 'KIOSK_EXIT';
    try { window.open('', '_self'); window.close(); } catch (err) { /* ignored */ }

    setTimeout(function () {
      if (window.closed === true) return;
      var hint = document.getElementById('kiosk-hint');
      if (hint) {
        gsap.fromTo(hint, { opacity: 0, y: -6 }, { opacity: 1, y: 0, duration: .3 });
        gsap.to(hint, { opacity: 0, duration: .4, delay: 7 });
      }
    }, 900);
  }

  function cancelExit() {
    var panel = document.getElementById('exit-panel');
    if (panel) panel.classList.remove('is-on');
    document.title = 'Alumni — AFCSC Jaji';
  }
  var exBack = document.getElementById('exit-back');
  if (exBack) exBack.addEventListener('click', cancelExit);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') cancelExit(); });

  var ck = document.getElementById('close-app');
  if (ck) ck.addEventListener('click', function (e) { e.stopPropagation(); closeKiosk(); });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (!profile.classList.contains('is-hidden')) profile.classList.add('is-hidden');
      else if (!gallery.classList.contains('is-hidden')) closeGallery();
      else if (!nav.classList.contains('is-hidden')) closeNav();
    }
    if (e.key === 'ArrowRight') setActive(index + 1);
    if (e.key === 'ArrowLeft') setActive(index - 1);
  });

  /* -------------------------------------------------------------------- boot */
  if (/[?&]test=flag/.test(location.search)) {
    setTimeout(function () { document.title = 'KIOSK_EXIT'; }, 800);
  }

  if (/[?&]test=close/.test(location.search)) {
    setTimeout(function () {
      document.getElementById('close-app').click();
      setTimeout(function () {
        document.documentElement.setAttribute('data-close', document.title);
      }, 250);
    }, 400);
  }

  if (/[?&]test=navhover/.test(location.search)) {
    setTimeout(function () {
      document.getElementById('nav-open').click();
      setTimeout(function () {
        var it = document.querySelectorAll('.nav-item')[3];
        it.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
        document.documentElement.setAttribute('data-navhover', document.getElementById('nav-photo-cap').textContent);
      }, 600);
    }, 300);
  }

  if (/[?&]test=nav/.test(location.search)) {
    setTimeout(function () {
      try {
        document.getElementById('nav-open').click();
        setTimeout(function () {
          document.documentElement.setAttribute('data-nav', document.getElementById('nav').className);
        }, 700);
      } catch (err) {
        document.documentElement.setAttribute('data-nav', 'THREW ' + err.message);
      }
    }, 400);
  }

  var snap = /[?&]snap=([a-z0-9]+)/.exec(location.search);
  if (snap) {
    var st = document.createElement('style');
    st.textContent = '*{transition:none !important;animation:none !important}';
    document.head.appendChild(st);
    var v = snap[1];
    if (/^panel[0-4]$/.test(v)) {
      setActive(parseInt(v.slice(5), 10), true);
      gsap.set('.ghost-year, .p-kicker, .p-text, .p-mile div, .fcard, .acard', { opacity: 1, y: 0, x: 0 });
      gsap.set('.p-title span.w > span', { yPercent: 0 });
    } else if (v === 'nav') {
      setActive(0, true);
      nav.classList.remove('is-hidden');
      nav.classList.add('is-static');
    } else if (v === 'gallery' || v === 'best') {
      setActive(0, true);
      openGallery(v === 'best' ? { best: true, title: 'Best participants' } : { course: 'all', title: 'Alumni' });
      gallery.classList.add('is-static');
    } else if (v === 'profile') {
      setActive(0, true);
      openProfile('b01');
      profile.classList.add('is-static');
    }
    applyFilter();
    return;
  }

  setActive(0, SNAP);
  applyFilter();
})();
