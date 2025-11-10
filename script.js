/* -----------------------------------------------------------
   Duolingo-style mock — behavior script (no connectors)
----------------------------------------------------------- */

/* ===== Content ===== */
const CHAPTERS = [
  {
    id:"C1", title:"Section 1", chapterTitle:"Use the plural", color:"#2c9cdb", imageId:"C1",
    units:[
      { id:"U1", title:"Ask questions", completed:false, exercises:[
        { type:"choice", character:"man.png", hint:"short", prompt:"Select the correct meaning", choices:["krátký","tam","jméno"], correctIndex:0 },
        { type:"match", character:"man.png", hint:"Connect the words", prompt:"Match the pairs",
          pairs:[["co","what"],["nebo","or"],["sůl","salt"],["krátký","short"]] }
      ]},
      { id:"U2", title:"Phrases", completed:false, exercises:[
        { type:"choice", character:"man.png", hint:"book", prompt:"Select the correct meaning", choices:["kočka","kniha","slon"], correctIndex:1 }
      ]},
      { id:"U3", title:"Basics 2", completed:false, exercises:[
        { type:"choice", character:"man.png", hint:"hello", prompt:"Select the correct meaning", choices:["ahoj","dům","chléb"], correctIndex:0 }
      ]},
      { id:"U4", title:"Checkpoint", completed:false, exercises:[
        { type:"match", character:"man.png", hint:"Connect the words", prompt:"Match the pairs",
          pairs:[["pes","dog"],["kočka","cat"],["voda","water"],["dům","house"]] }
      ]},
    ],
  },
  {
    id:"C2", title:"Section 2", chapterTitle:"Past & future", color:"#9c5df9", imageId:"C2",
    units:[
      { id:"U5", title:"Past tense 1", completed:false, exercises:[
        { type:"choice", character:"man.png", hint:"went", prompt:"Select the correct meaning", choices:["šel","jí","spí"], correctIndex:0 }
      ]},
      { id:"U6", title:"Plans", completed:false, exercises:[
        { type:"choice", character:"man.png", hint:"will", prompt:"Select the correct meaning", choices:["bude","byl","měl"], correctIndex:0 }
      ]},
      { id:"U7", title:"Time phrases", completed:false, exercises:[
        { type:"match", character:"man.png", hint:"Connect the words", prompt:"Match the pairs",
          pairs:[["včera","yesterday"],["zítra","tomorrow"],["brzy","soon"],["dnes","today"]] }
      ]},
      { id:"U8", title:"Checkpoint", completed:false, exercises:[
        { type:"choice", character:"man.png", hint:"review", prompt:"Select the correct meaning", choices:["opakování","okurka","město"], correctIndex:0 }
      ]},
    ],
  },
  {
    id:"C3", title:"Section 3", chapterTitle:"Travel & places", color:"#00c2a8", imageId:"C3",
    units:[
      { id:"U9",  title:"Directions", completed:false, exercises:[
        { type:"choice", character:"man.png", hint:"left", prompt:"Select the correct meaning", choices:["vlevo","vpravo","nahoru"], correctIndex:0 }
      ]},
      { id:"U10", title:"Transport",  completed:false, exercises:[
        { type:"match", character:"man.png", hint:"Connect the words", prompt:"Match the pairs",
          pairs:[["vlak","train"],["auto","car"],["loď","boat"],["letadlo","airplane"]] }
      ]},
      { id:"U11", title:"Hotel",      completed:false, exercises:[
        { type:"choice", character:"man.png", hint:"room", prompt:"Select the correct meaning", choices:["pokoj","stůl","zahrada"], correctIndex:0 }
      ]},
      { id:"U12", title:"Checkpoint", completed:false, exercises:[
        { type:"choice", character:"man.png", hint:"review", prompt:"Select the correct meaning", choices:["opakování","chleba","měsíc"], correctIndex:0 }
      ]},
    ],
  },
  {
    id:"C4", title:"Section 4", chapterTitle:"Food & ordering", color:"#ff7a59", imageId:"C4",
    units:[
      { id:"U13", title:"Menu words", completed:false, exercises:[
        { type:"choice", character:"man.png", hint:"soup", prompt:"Select the correct meaning", choices:["polévka","ryba","vejce"], correctIndex:0 }
      ]},
      { id:"U14", title:"Ordering",   completed:false, exercises:[
        { type:"match", character:"man.png", hint:"Connect the words", prompt:"Match the pairs",
          pairs:[["prosím","please"],["děkuji","thank you"],["účet","bill"],["sklenice","glass"]] }
      ]},
      { id:"U15", title:"Allergies",  completed:false, exercises:[
        { type:"choice", character:"man.png", hint:"nuts", prompt:"Select the correct meaning", choices:["ořechy","mléko","vejce"], correctIndex:0 }
      ]},
      { id:"U16", title:"Checkpoint", completed:false, exercises:[
        { type:"choice", character:"man.png", hint:"review", prompt:"Select the correct meaning", choices:["opakování","kolo","les"], correctIndex:0 }
      ]},
    ],
  },
];


const RICK = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

/* ===== Easy knobs ===== */
const SIZE = {
  roadmapManHeight: 250,   // man.png next to chapters
  lessonAvatarHeight: 120, // avatar in lesson
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
  return `images/${ch.imageId}-${unit.completed ? "completed" : "uncompleted"}.png`;
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
      divider.style.cssText = "display:flex;align-items:center;gap:12px;margin:24px 0 12px;";
      const lineL = document.createElement("div");
      const lineR = document.createElement("div");
      [lineL,lineR].forEach(line=>{
        line.style.cssText = "flex:1;height:1px;background:#16323b;";
      });
      const label = document.createElement("span");
      label.textContent = `${ch.title} — ${ch.chapterTitle}`;
      label.style.cssText = "color:#9fb1b8;font-weight:800;white-space:nowrap;";
      divider.appendChild(lineL); divider.appendChild(label); divider.appendChild(lineR);
      els.roadmapColumn.appendChild(divider);
    }

    const group = document.createElement("section");
    group.className = "chapter-group";
    group.dataset.chapterId = ch.id;
    group.dataset.side = (ci % 2 === 0) ? "left" : "right";
    group.style.position = "relative";
    group.style.minHeight = "160px";

    // chapter man.png
    const man = document.createElement("img");
    man.src = "images/klarka1.png";
    man.alt = "";
    man.className = "chapter-man";
    man.style.position = "absolute";
    man.style.top = "50%";
    man.style.transform = "translateY(-50%)";
    man.onload = () => {
      const ar = man.naturalWidth / man.naturalHeight || 1;
      man.style.setProperty("height", `${SIZE.roadmapManHeight}px`, "important");
      man.style.setProperty("width", `${Math.round(SIZE.roadmapManHeight * ar)}px`, "important");
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
        img.className = unit.completed ? "img-completed" : "img-uncompleted"; // << add this
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

  function pickChapter(){
    // Use distance of section TOP to a point slightly below the sticky banner top.
    const bannerRect = els.banner.getBoundingClientRect();
    const targetY = bannerRect.bottom + 8; // just below the banner
    let bestIdx = 0, bestDist = Infinity;

    sections.forEach((sec, idx) => {
      const r = sec.getBoundingClientRect();
      const dist = Math.abs(r.top - targetY);
      if (dist < bestDist){ bestDist = dist; bestIdx = idx; }
    });

    if (bestIdx !== lastBannerIdx){
      lastBannerIdx = bestIdx;
      chapterIdx = bestIdx; currentUnitIdx = 0;
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
    const fill = document.createElement("div");
    fill.style.height = "100%";
    fill.style.width = Math.round((q.progress||0)*100) + "%";
    fill.style.background = "#58cc02";
    fill.style.borderRadius = "999px";
    barWrap.appendChild(fill);

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

/* ===== Utilities ===== */
function setCheckDisabled(flag){ els.checkBtn.disabled = !!flag; }
function shuffle(a){ for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; }

/* ===== Boot ===== */
setBannerColor(curChapter().color);
renderRoadmap();
