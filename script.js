/* -----------------------------------------------------------
   Duolingo-style mock — behavior script (no connectors)
----------------------------------------------------------- */

const RICK = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

/* ===== Easy knobs ===== */
const SIZE = {
  roadmapManHeight: 250,   // man.png next to chapters
  lessonAvatarHeight: 200, // avatar in lesson
};
/* Move the man toward the nodes (negative pulls inward). */
const CHAPTER_MAN_OFFSET = 150;

/* Daily quests: progress 0..1 */
const QUESTS = [
  { text:"Earn 20 XP",            progress: 0.35 },
  { text:"Combo Bonus XP",        progress: 0.50 },
  { text:"Score 80% in 3 lessons",progress: 0.00 },
];

/* ===== State & elements ===== */
let chapterIdx = 0, currentUnitIdx = 0, exIdx = 0;

const els = {
  banner: document.getElementById("sectionBanner"),
  sectionNumber: document.getElementById("sectionNumber"),
  unitNumber: document.getElementById("unitNumber"),
  sbTitle: document.getElementById("sbTitle"),
  roadmapColumn: document.getElementById("roadmapColumn"),
  homeView: document.getElementById("homeView"),
  lessonView: document.getElementById("lessonView"),
  exerciseTitle: document.getElementById("exerciseTitle"),
  exerciseHint: document.getElementById("exerciseHint"),
  exerciseAvatar: document.getElementById("exerciseAvatar"),
  exerciseContainer: document.getElementById("exerciseContainer"),
  checkBtn: document.getElementById("checkBtn"),
  skipBtn: document.getElementById("skipBtn"),
  bannerBack: document.getElementById("bannerBack"),
  popover: document.getElementById("practicePopover"),
  popoverCard: document.getElementById("popoverCard"),
  popoverTitle: document.getElementById("popoverTitle"),
  popoverSub: document.getElementById("popoverSub"),
  popoverStart: document.getElementById("popoverStart"),
};

/* ===== Helpers ===== */
function curChapter(){ return CHAPTERS[chapterIdx]; }
function curUnit(){ return curChapter().units[currentUnitIdx]; }
function setBannerColor(color){
  els.banner.style.background = color;
  els.banner.style.color = "#fff";
  els.banner.style.borderColor = "rgba(0,0,0,.2)";
  els.banner.style.maxWidth = "50%";
  els.banner.style.margin = "0 auto 8px";
  els.banner.style.padding = "18px 16px";
  els.banner.style.borderRadius = "18px";
  els.banner.style.overflow = "visible";
  els.banner.style.transition = "background-color 120ms linear";
}
function imageSrcForUnit(ch, unit){
  if (!unit.completed) {
    return "images/uncompleted.png";        // always same
  }
  return `images/${ch.imageId}-completed.png`; // chapter-specific
}

/* ===== Persistent displacement ===== */
const offsetKey = "unitOffsets_v7";
const offsets = JSON.parse(localStorage.getItem(offsetKey) || "{}");
function getOffset(chId, uId){
  const k = `${chId}-${uId}`;
  if(!(k in offsets)){ offsets[k] = Math.round(Math.random()*180 - 90); localStorage.setItem(offsetKey, JSON.stringify(offsets)); }
  return offsets[k];
}

function wireRickroll(){
  // Any sidebar tab and any rightbar button should Rickroll,
  // but don't hijack lesson node clicks.
  const sidebarButtons = document.querySelectorAll(".sidebar .tab");
  const rightbarButtons = document.querySelectorAll(".rightbar .btn, .rightbar button, .rightbar a");

  [...sidebarButtons, ...rightbarButtons].forEach(el=>{
    el.addEventListener("click", (e)=>{
      // if we're in the lesson view, let lesson UI work normally
      const inHome = !document.getElementById("homeView").classList.contains("hidden");
      if(!inHome) return;
      // Ignore clicks on practice popover "START" (that should start lesson)
      if (el.id === "popoverStart") return;

      e.preventDefault();
      e.stopPropagation();
      window.open(RICK, "_blank");
    }, { passive:false });
  });
}

/* ===== Roadmap rendering (reduced vertical gap + chapter divider) ===== */
function renderRoadmap(){
  els.roadmapColumn.innerHTML = "";

  CHAPTERS.forEach((ch, ci) => {
    // Divider between chapters (except before the first)
    if (ci > 0){
      const divider = document.createElement("div");
      divider.style.cssText = "display:flex;align-items:center;gap:12px;margin:40px 0 12px;";

      const lineL = document.createElement("div");
      const lineR = document.createElement("div");

      [lineL, lineR].forEach(line => {
        line.style.cssText = "flex:1;height:1px;background:#16323b;";
      });

      const label = document.createElement("span");
      label.textContent = `${ch.title} — ${ch.chapterTitle}`;
      label.style.cssText = "color:#9fb1b8;font-weight:800;white-space:nowrap;";

      divider.appendChild(lineL);
      divider.appendChild(label);
      divider.appendChild(lineR);

      // Extra top margin ONLY for the first section
      if (ci === 0) divider.style.marginTop = "80px";

      els.roadmapColumn.appendChild(divider);
    }


    const group = document.createElement("section");
    group.className = "chapter-group";
    group.dataset.chapterId = ch.id;
    group.dataset.side = (ci % 2 === 0) ? "left" : "right";
    group.style.position = "relative";
    group.style.minHeight = "160px";

    // chapter mascot (custom per chapter)
    const man = document.createElement("img");
    man.src = `images/${ch.mascot || "man.png"}`;
    man.alt = "";
    man.className = "chapter-man";
    man.style.position = "absolute";
    man.style.top = "50%";
    man.style.transform = "translateY(-50%)";
    man.onload = () => {
      const ar = man.naturalWidth / man.naturalHeight || 1;
      const h = ch.mascotHeight || SIZE.roadmapManHeight;
      man.style.height = h + "px";
      man.style.width  = Math.round(h * ar) + "px";
    };
    if (group.dataset.side === "left")  man.style.left  = (CHAPTER_MAN_OFFSET + 8) + "px";
    if (group.dataset.side === "right") man.style.right = (CHAPTER_MAN_OFFSET + 8) + "px";
    group.appendChild(man);

    // nodes column
    const nodesWrap = document.createElement("div");
    nodesWrap.className = "nodes";
    nodesWrap.style.position = "relative";
    nodesWrap.style.display = "flex";
    nodesWrap.style.flexDirection = "column";
    nodesWrap.style.alignItems = "center";
    nodesWrap.style.gap = "12px"; // reduced vertical gap
    nodesWrap.style.zIndex = "0";

    ch.units.forEach((unit, ui) => {
      const node = document.createElement("div");
      node.className = "node";
      const dx = getOffset(ch.id, unit.id);
      node.style.transform = `translateX(${dx}px)`;
      node.style.display = "grid";
      node.style.placeItems = "center";
      node.style.cursor = "pointer";
      node.style.userSelect = "none";
      node.style.zIndex = "1";
      node.addEventListener("mouseenter", ()=> node.style.transform = `translateX(${dx}px) translateY(-3px)`);
      node.addEventListener("mouseleave", ()=> node.style.transform = `translateX(${dx}px)`);

        const img = document.createElement("img");
        img.alt = `${ch.id}-${unit.id}`;
        img.src = imageSrcForUnit(ch, unit);
        img.className = unit.completed ? "img-completed" : "img-uncompleted";
        img.style.display = "block";
        img.style.width  = "auto";
        img.style.objectFit = "contain";
        img.style.borderRadius = "16px";


      img.onerror = () => {
        img.remove();
        const ph = document.createElement("div");
        ph.style.cssText = `height:128px;width:128px;border-radius:16px;background:#12333b`;
        node.appendChild(ph);
      };

      node.appendChild(img);
      node.addEventListener("click", (ev) => openPopover(ev.currentTarget, ci, ui));
      nodesWrap.appendChild(node);
    });

    group.appendChild(nodesWrap);
    els.roadmapColumn.appendChild(group);
  });

  setupBannerTracker(); // keep banner in sync
  enhanceQuests();      // progress bars + fraction
}

/* ===== Stable, centered banner switching (fixed “last section only”) ===== */
let lastBannerIdx = -1;
function setupBannerTracker(){
  const sections = [...document.querySelectorAll(".chapter-group")];

  function pickChapter() {
    const sections = [...document.querySelectorAll(".chapter-group")];
    const bannerRect = els.banner.getBoundingClientRect();
    const targetY = bannerRect.bottom + 8;

    // 1) If page bottom reached → force last chapter
    const scrollBottom = window.scrollY + window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    if (scrollBottom >= docHeight - 5) {
      const lastIdx = sections.length - 1;
      if (lastIdx !== lastBannerIdx) {
        lastBannerIdx = lastIdx;
        chapterIdx = lastIdx;
        currentUnitIdx = 0;
        const ch = curChapter();
        setBannerColor(ch.color);
        els.sectionNumber.textContent = String(lastIdx + 1);
        els.unitNumber.textContent = "1";
        els.sbTitle.textContent = ch.chapterTitle || ch.title;
      }
      return;
    }

    // 2) Normal mid-page behavior (unchanged)
    let bestIdx = 0;
    let bestDist = Infinity;

    sections.forEach((sec, idx) => {
      const r = sec.getBoundingClientRect();

      // If section bottom is visible, weight it more strongly
      if (r.bottom > 0 && r.bottom < window.innerHeight) {
        bestIdx = idx;
        bestDist = 0;
        return;
      }

      const dist = Math.abs(r.top - targetY);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = idx;
      }
    });

    if (bestIdx !== lastBannerIdx) {
      lastBannerIdx = bestIdx;
      chapterIdx = bestIdx;
      currentUnitIdx = 0;
      const ch = curChapter();
      setBannerColor(ch.color);
      els.sectionNumber.textContent = String(bestIdx + 1);
      els.unitNumber.textContent = "1";
      els.sbTitle.textContent = ch.chapterTitle || ch.title;
    }
  }


  // rAF-backed scroll listener for stability
  let ticking = false;
  function onScrollOrResize(){
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(()=>{ ticking = false; pickChapter(); });
  }

  pickChapter();
  document.addEventListener("scroll", onScrollOrResize, { passive:true });
  window.addEventListener("resize", onScrollOrResize, { passive:true });
}

/* ===== Daily quests: progress bars with fraction (x/10) ===== */
function enhanceQuests(){
  const cards = [...document.querySelectorAll(".card")];
  const questCard = cards.find(c => c.querySelector(".card-title")?.textContent.toLowerCase().includes("daily quests"));
  if (!questCard) return;

  const list = questCard.querySelector(".mini-list");
  if (!list) return;

  list.innerHTML = "";
  QUESTS.forEach(q=>{
    const li = document.createElement("li");
    li.style.listStyle = "none";
    li.style.marginBottom = "10px";

    const row = document.createElement("div");
    row.style.cssText = "display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;";
    const label = document.createElement("div");
    label.textContent = q.text;
    label.style.cssText = "color:#9fb1b8;font-weight:800;";
    const frac = document.createElement("div");
    const n = Math.max(0, Math.min(10, Math.round((q.progress||0)*10)));
    frac.textContent = `${n}/10`;
    frac.style.cssText = "color:#9fb1b8;font-weight:800;";
    row.appendChild(label); row.appendChild(frac);

    const barWrap = document.createElement("div");
    barWrap.style.cssText = "width:100%;height:10px;border:1px solid #1f3a43;border-radius:999px;background:#0c1f25;overflow:hidden;";

    const bar = document.createElement("div");
    bar.className = "quest-fill";
    bar.style.width = "0%";
    bar.style.transition = "none";
    const target = Math.round((q.progress || 0) * 100) + "%";
    bar.setAttribute("data-final", target);



    li.appendChild(row);
    li.appendChild(barWrap);
    list.appendChild(li);
  });
}

/* ===== Popover (anchored, hides on scroll/outside) ===== */
function openPopover(nodeEl, ci, ui){
  chapterIdx = ci; currentUnitIdx = ui;
  const ch = curChapter();
  const total = ch.units.length; const num = ui+1;

  els.popoverTitle.textContent = ch.chapterTitle || ch.title;
  els.popoverSub.textContent   = `Lesson ${num} of ${total}`;
  els.popoverCard.style.background = ch.color;

  // white filled button; text in chapter color
  els.popoverStart.style.background = "#fff";
  els.popoverStart.style.color = ch.color;

  // position next to clicked node
  const r = nodeEl.getBoundingClientRect();
  const x = Math.min(window.innerWidth - 300, Math.max(12, r.left + r.width + 8));
  const y = Math.max(12, r.top - 10);
  els.popoverCard.style.left = x + "px";
  els.popoverCard.style.top  = y + "px";

  els.popover.classList.remove("hidden");

  // hide on outside click or scroll
  const closeOnOutside = (e)=>{
    if(!els.popoverCard.contains(e.target)) hide();
  };
  const closeOnScroll = ()=> hide();
  function hide(){
    els.popover.classList.add("hidden");
    document.removeEventListener("mousedown", closeOnOutside);
    window.removeEventListener("scroll", closeOnScroll, { passive:true });
  }
  document.addEventListener("mousedown", closeOnOutside);
  setTimeout(()=> window.addEventListener("scroll", closeOnScroll, { passive:true }), 0);

  els.popoverStart.onclick = ()=>{ hide(); startLesson(); };
}

/* ===== Lesson flow ===== */
function startLesson(){
  const ch = curChapter(), unit = curUnit();
  els.sectionNumber.textContent = String(chapterIdx + 1);
  els.unitNumber.textContent   = String(currentUnitIdx + 1);
  els.sbTitle.textContent      = unit.title;
  setBannerColor(ch.color);

  els.homeView.classList.add("hidden");
  els.lessonView.classList.remove("hidden");
  exIdx = 0;
  renderExercise(exIdx);
  els.bannerBack.onclick = backToHome;
}

function backToHome(){
  els.lessonView.classList.add("hidden");
  els.homeView.classList.remove("hidden");
  renderRoadmap();
  wireRickroll();
}

/* ===== Exercises (choice + match) ===== */
function renderExercise(i){
  const ex = curUnit().exercises[i];
  els.exerciseContainer.innerHTML = "";
  els.exerciseTitle.textContent = ex.prompt;
  els.exerciseHint.textContent  = ex.hint || "";

  // avatar keeps original aspect ratio
  const src = ex.character ? `images/${ex.character}` : "images/man.png";
  const tmp = new Image();
  tmp.onload = () => {
    const ar = tmp.naturalWidth / tmp.naturalHeight || 1;
    els.exerciseAvatar.style.height = SIZE.lessonAvatarHeight + "px";
    els.exerciseAvatar.style.width  = Math.round(SIZE.lessonAvatarHeight * ar) + "px";
    els.exerciseAvatar.style.border = "none";
  };
  tmp.src = src;
  els.exerciseAvatar.src = src;

  setCheckDisabled(true);

  if (ex.type === "choice"){
    const list = document.createElement("div");
    list.className = "choice-list";
    let selected = -1;

    ex.choices.forEach((c, idx) => {
      const row = document.createElement("div");
      row.className = "choice";
      row.innerHTML = `<div class="num">${idx + 1}</div><div>${c}</div>`;
      row.addEventListener("click", () => {
        [...list.children].forEach(el => el.classList.remove("selected"));
        row.classList.add("selected");
        selected = idx;
        setCheckDisabled(false);
        els.checkBtn.textContent = "CHECK";
        els.checkBtn.classList.remove("btn-danger");
      });
      list.appendChild(row);
    });
    els.exerciseContainer.appendChild(list);

    els.checkBtn.onclick = () => {
      if (selected === -1) return;
      const rows = [...list.children];
      const isCorrect = selected === ex.correctIndex;

      rows.forEach((r, i) => r.classList.toggle("selected", i===selected));
      rows.forEach(r => r.classList.remove("correct","incorrect"));

      if (isCorrect){ rows[selected].classList.add("correct"); setTimeout(nextOrFinish, 450); }
      else { rows[selected].classList.add("incorrect"); els.checkBtn.textContent = "TRY AGAIN"; els.checkBtn.classList.add("btn-danger"); }
    };
  }

  if (ex.type === "match"){
    const grid = document.createElement("div");
    grid.className = "match-grid";
    const leftCol = document.createElement("div"); leftCol.className = "column";
    const rightCol = document.createElement("div"); rightCol.className = "column";

    const leftWords  = ex.pairs.map(p => p[0]);
    const rightWords = ex.pairs.map(p => p[1]).slice();
    shuffle(rightWords);

    leftWords.forEach(w => { const it = document.createElement("div"); it.className="match-item"; it.textContent=w; it.dataset.side="L"; leftCol.appendChild(it); });
    rightWords.forEach(w => { const it = document.createElement("div"); it.className="match-item"; it.textContent=w; it.dataset.side="R"; rightCol.appendChild(it); });

    let selL=null, selR=null, matched=0;
    grid.appendChild(leftCol); grid.appendChild(rightCol);
    els.exerciseContainer.appendChild(grid);

    function handleSelect(el){
      if(el.classList.contains("matched")) return;
      if (el.dataset.side==="L"){ if(selL) selL.classList.remove("selected"); selL=el; el.classList.add("selected"); }
      if (el.dataset.side==="R"){ if(selR) selR.classList.remove("selected"); selR=el; el.classList.add("selected"); }
      if (selL && selR){
        const ok = ex.pairs.some(([a,b]) => a===selL.textContent && b===selR.textContent);
        if (ok){
          selL.classList.remove("selected"); selR.classList.remove("selected");
          selL.classList.add("matched"); selR.classList.add("matched");
          selL=selR=null; matched++;
          if (matched===ex.pairs.length){ setCheckDisabled(false); els.checkBtn.onclick=nextOrFinish; }
        } else {
          selL.classList.remove("selected"); selR.classList.remove("selected");
          selL=selR=null;
        }
      }
    }
    [...leftCol.children, ...rightCol.children].forEach(el => el.addEventListener("click", ()=>handleSelect(el)));
  }

  /* ============================================================
   BUILD SENTENCE — long bar + centered standalone layout
============================================================ */
if (ex.type === "build") {

  /* OUTER WRAPPER — centers entire exercise in the page */
  const wrapper = document.createElement("div");
  wrapper.style.cssText = `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    gap: 30px;
  `;
  els.exerciseContainer.appendChild(wrapper);

  /* LARGE ANSWER BAR */
  const answerBar = document.createElement("div");
  answerBar.style.cssText = `
    min-height: 62px;
    width: min(900px, 90vw);      /* MUCH WIDER */
    padding: 16px 18px;
    background:#0f2630;
    border:1px solid #1f3a43;
    border-radius:14px;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:12px;
    transition: all .25s ease;
  `;
  wrapper.appendChild(answerBar);

  /* WORD BANK — separate box, centered in middle of page */
  const wordBank = document.createElement("div");
  wordBank.style.cssText = `
    width: min(900px, 90vw);
    padding: 22px 18px;
    background:#0b2630;
    border:1px solid #1f3a43;
    border-radius:14px;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:16px;
  `;
  wrapper.appendChild(wordBank);

  /* Shuffle & place words */
  const pool = ex.words.slice();
  shuffle(pool);

  pool.forEach(word => {
    const bubble = document.createElement("div");
    bubble.textContent = word;
    bubble.className = "bubble-word";
    bubble.style.cssText = `
      padding: 12px 16px;
      background:#12333b;
      border:1px solid #1f3a43;
      border-radius:14px;
      cursor:pointer;
      font-weight:800;
      color:#fff;
      transition: transform .25s ease, opacity .25s ease;
      position: relative;
    `;

    /* CLICK → slide upwards to answer */
    bubble.addEventListener("click", () => {
      if (bubble.classList.contains("used")) return;

      bubble.classList.add("used");
      //bubble.style.opacity = "0.3";

      /* clone bubble for slide animation */
      const r = bubble.getBoundingClientRect();
      const clone = bubble.cloneNode(true);
      clone.style.position = "fixed";
      clone.style.left = r.left + "px";
      clone.style.top  = r.top + "px";
      clone.style.margin = "0";
      clone.style.zIndex = "9999";
      clone.style.pointerEvents = "none";
      document.body.appendChild(clone);

      /* animate INTO ANSWER BAR — CENTERED */
      requestAnimationFrame(() => {
          const answerRect = answerBar.getBoundingClientRect();
          const cloneRect  = clone.getBoundingClientRect();

          clone.style.transition = "all .35s cubic-bezier(.2,.8,.2,1)";

          // center X of the answer bar
          const centerX = answerRect.left + answerRect.width / 2;

          // move clone to the center
          clone.style.left = (centerX - cloneRect.width / 2) + "px";
          clone.style.top  = (answerRect.top + 20) + "px";
      });


      setTimeout(() => {
        clone.remove();

        /* actual element inside answer bar */
        const added = document.createElement("div");
        added.textContent = word;
        added.style.cssText = `
          padding: 12px 16px;
          background:#0b3a44;
          border:1px solid #1f3a43;
          border-radius:14px;
          cursor:pointer;
          font-weight:800;
          color:#fff;
          transition: transform .25s ease;
        `;
        answerBar.appendChild(added);

        /* remove word → slide DOWN back to word bank */
        added.addEventListener("click", () => {
          const r2 = added.getBoundingClientRect();
          const clone2 = added.cloneNode(true);
          clone2.style.position = "fixed";
          clone2.style.left = r2.left + "px";
          clone2.style.top  = r2.top + "px";
          clone2.style.zIndex = "9999";
          document.body.appendChild(clone2);

          added.remove();
          bubble.classList.remove("used");
          bubble.style.opacity = "1";

          const back = bubble.getBoundingClientRect();

          requestAnimationFrame(() => {
            const answerRect = answerBar.getBoundingClientRect();
            const cloneRect  = clone.getBoundingClientRect();

            clone.style.transition = "all .35s cubic-bezier(.2,.8,.2,1)";

            // Move to center
            const centerX = answerRect.left + answerRect.width / 2;
            clone.style.left = (centerX - cloneRect.width / 2) + "px";
            
            clone.style.top = (answerRect.top + 20) + "px";
          });


          setTimeout(() => clone2.remove(), 350);
        });

        checkStatus();
      }, 350);
    });

    wordBank.appendChild(bubble);
  });

  function currentSentence() {
    return [...answerBar.children].map(x => x.textContent).join(" ").trim();
  }

  function checkStatus() {
    els.checkBtn.disabled = false;
    els.checkBtn.textContent = "CHECK";
    els.checkBtn.classList.remove("btn-danger");
  }

  els.checkBtn.onclick = () => {
    const res = currentSentence();
    if (res === ex.correct.trim()) {
      els.checkBtn.textContent = "CORRECT";
      setTimeout(nextOrFinish, 600);
    } else {
      els.checkBtn.textContent = "TRY AGAIN";
      els.checkBtn.classList.add("btn-danger");
    }
  };
}



  els.skipBtn.onclick = nextOrFinish;
}

function nextOrFinish(){
  const unit = curUnit();
  if (exIdx >= unit.exercises.length - 1){
    unit.completed = true;
    backToHome();
  } else {
    exIdx++; renderExercise(exIdx);
  }
}

/* ===== Animate quest bars on page load ===== */
window.addEventListener("load", () => {
  const bars = document.querySelectorAll(".quest-fill");

  bars.forEach(bar => {
    const finalWidth = bar.getAttribute("data-final");   // we will store final width here
    if (!finalWidth) return;

    bar.style.width = "0%";             // ALWAYS start at 0
    bar.style.transition = "width 1.8s ease";

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bar.style.width = finalWidth;   // animate to target
      });
    });
  });
});


/* ===== Utilities ===== */
function setCheckDisabled(flag){ els.checkBtn.disabled = !!flag; }
function shuffle(a){ for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; }

/* ===== Boot ===== */
setBannerColor(curChapter().color);
renderRoadmap();
