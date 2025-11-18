const CHAPTERS = [

/* ============================================================
   CHAPTER 1 — Board Game Night & Swimming (27th)
============================================================ */
{
  id:"C1",
  chapterTitle:"The arrival",
  color:"#2c9cdb",
  imageId:"C1",
  mascot:"klarka1.png",
  mascotheight:250,

  units:[

    /* ---------- Lesson 1 ---------- */
    {
      id:"U1",
      title:"Rolling & playing",
      completed:false,
      exercises:[

        {
          type:"choice",
          character:"friends.png",
          prompt:"Select the correct meaning",
          hint:"kocka",
          choices:["kostka","svetlo","riba"],
          correctIndex:0
        },

        {
          type:"match",
          character:"man.png",
          prompt:"Match the pairs",
          hint:"Board-game words",
          pairs:[
            ["igram","hraju"],
            ["miza","stůl"],
            ["karta","karta"],
            ["vržem","hodíme"]
          ]
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Vržem kocko.",
          correct:"Hodím kostkou",
          character:"friends.png",
          words:["Hodím","kostkou","Jdeme","rychle","já"]
        }

      ]
    },

    /* ---------- Lesson 2 ---------- */
    {
      id:"U2",
      title:"Fun & chaos",
      completed:false,
      exercises:[

        {
          type:"choice",
          character:"friends.png",
          prompt:"Select the correct meaning",
          hint:"zmagam",
          choices:["vyhraju","ponožka","cukr"],
          correctIndex:0
        },

        {
          type:"match",
          character:"man.png",
          prompt:"Match the pairs",
          hint:"Funny phrases",
          pairs:[
            ["goljuf","podvodník"],
            ["ne jezi se","člověče nezlob se"],
            ["moja poteza","můj tah"],
            ["prepir","hádka"]
          ]
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Jaz vedno zmagam.",
          correct:"Vždycky vyhraju",
          character:"friends.png",
          words:["Vždycky","vyhraju","já","kostka","hra"]
        }

      ]
    },

    /* ---------- Lesson 3 ---------- */
    {
      id:"U3",
      title:"Swimming time",
      completed:false,
      exercises:[

        {
          type:"choice",
          character:"friends.png",
          prompt:"Select the correct meaning",
          hint:"plavati",
          choices:["plavat","spát","topit"],
          correctIndex:0
        },

        {
          type:"match",
          character:"man.png",
          prompt:"Match the pairs",
          hint:"Swimming words",
          pairs:[
            ["voda","voda"],
            ["bazen","bazén"],
            ["mrzlo","studené"],
            ["kopalke","plavky"]
          ]
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Voda je zelo mrzla.",
          correct:"Voda je velmi studená",
          character:"friends.png",
          words:["Voda","je","velmi","studená","hra","kostka"]
        }

      ]
    },

    /* ---------- Lesson 4 ---------- */
    {
      id:"U4",
      title:"Game night wrap-up",
      completed:false,
      exercises:[

        {
          type:"choice",
          character:"friends.png",
          prompt:"Select the correct meaning",
          hint:"zabavno",
          choices:["zábavné","nemoc","okno"],
          correctIndex:0
        },

        {
          type:"match",
          character:"man.png",
          prompt:"Match the pairs",
          hint:"Goodbye phrases",
          pairs:[
            ["dobro igro","dobrá hra"],
            ["lahko noč","dobrou noc"],
            ["jutri","zítra"],
            ["spet igramo","hrajeme zase"]
          ]
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Igra je bila zabavna.",
          correct:"Hra byla zábavná",
          character:"friends.png",
          words:["Hra","byla","zábavná","já","kostka"]
        }

      ]
    }

  ]
},

/* ============================================================
   CHAPTER 2 — Sledding & Christmas Lights (28th)
============================================================ */
{
  id:"C2",
  chapterTitle:"The cold shines bright",
  color:"#9c5df9",
  imageId:"C2",
  mascot:"klarka2.png",
  mascotheight:250,

  units:[

    /* ---------- Lesson 1 ---------- */
    {
      id:"U5",
      title:"Snow basics",
      completed:false,
      exercises:[

        {
          type:"choice",
          character:"friends.png",
          prompt:"Select the correct meaning",
          hint:"sneg",
          choices:["sníh","květ","dům"],
          correctIndex:0
        },

        {
          type:"match",
          character:"man.png",
          prompt:"Match the pairs",
          hint:"Winter words",
          pairs:[
            ["mraz","mráz"],
            ["bundi","bundy"],
            ["rokavice","rukavice"],
            ["klobuk","klobouk"]
          ]
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Sneg je povsod.",
          correct:"Sníh je všude",
          character:"friends.png",
          words:["Sníh","je","všude","hra","kostka"]
        }

      ]
    },

    /* ---------- Lesson 2 ---------- */
    {
      id:"U6",
      title:"Sledding fun",
      completed:false,
      exercises:[

        {
          type:"choice",
          character:"friends.png",
          prompt:"Select the correct meaning",
          hint:"sankanje",
          choices:["sáňkování","vaření","kreslení"],
          correctIndex:0
        },

        {
          type:"match",
          character:"man.png",
          prompt:"Match the pairs",
          hint:"Sledding terms",
          pairs:[
            ["sanke","sáně"],
            ["padec","pád"],
            ["hrib","kopec"],
            ["hitro","rychle"]
          ]
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Gremo sankat.",
          correct:"Jdeme sáňkovat",
          character:"friends.png",
          words:["Jdeme","sáňkovat","já","malo","hra"]
        }

      ]
    },

    /* ---------- Lesson 3 ---------- */
    {
      id:"U7",
      title:"Christmas lights",
      completed:false,
      exercises:[

        {
          type:"choice",
          character:"friends.png",
          prompt:"Select the correct meaning",
          hint:"lučke",
          choices:["světýlka","ryby","brambory"],
          correctIndex:0
        },

        {
          type:"match",
          character:"man.png",
          prompt:"Match the pairs",
          hint:"Light decoration words",
          pairs:[
            ["božič","Vánoce"],
            ["drevo","strom"],
            ["lučke","světýlka"],
            ["temno","tma"]
          ]
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Lučke so čudovite.",
          correct:"Světýlka jsou nádherná",
          character:"friends.png",
          words:["Světýlka","jsou","nádherná","hra","kostka"]
        }

      ]
    },

    /* ---------- Lesson 4 ---------- */
    {
      id:"U8",
      title:"Evening chills",
      completed:false,
      exercises:[

        {
          type:"choice",
          character:"friends.png",
          prompt:"Select the correct meaning",
          hint:"zelo mrzlo",
          choices:["velmi studené","levné","tiché"],
          correctIndex:0
        },

        {
          type:"match",
          character:"man.png",
          prompt:"Match the pairs",
          hint:"Feelings",
          pairs:[
            ["mraz","mráz"],
            ["veselje","radost"],
            ["smeh","smích"],
            ["vroče","horko"]
          ]
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Zelo je mrzlo.",
          correct:"Je velmi studeno",
          character:"friends.png",
          words:["Je","velmi","studeno","hra","kostka"]
        }

      ]
    }

  ]
},
 
/* ============================================================
   CHAPTER 3 — Cookies & Ice Skating (29th)
============================================================ */
{
  id:"C3",
  chapterTitle:"Slippery slope to sugar overdose",
  color:"#00c2a8",
  imageId:"C3",
  mascot:"klarkamaj.png",
  mascotheight:250,

  units:[

    /* ---------- Lesson 1 ---------- */
    {
      id:"U9",
      title:"Baking with Saš & Tilen",
      completed:false,
      exercises:[

        {
          type:"choice",
          character:"friends.png",
          prompt:"Select the correct meaning",
          hint:"piškoti",
          choices:["sušenky","okna","čaj"],
          correctIndex:0
        },

        {
          type:"match",
          character:"friends.png",
          prompt:"Match the pairs",
          hint:"Baking",
          pairs:[
            ["sladkor","cukr"],
            ["moka","mouka"],
            ["čokolada","čokoláda"],
            ["maslo","máslo"]
          ]
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Pečemo piškote.",
          correct:"Pečeme sušenky",
          character:"friends.png",
          words:["Pečeme","sušenky","já","hra","kostka"]
        }

      ]
    },

    /* ---------- Lesson 2 ---------- */
    {
      id:"U10",
      title:"Kitchen chaos",
      completed:false,
      exercises:[

        {
          type:"choice",
          character:"friends.png",
          prompt:"Select the correct meaning",
          hint:"umazano",
          choices:["špinavé","rychlé","drahé"],
          correctIndex:0
        },

        {
          type:"match",
          character:"man.png",
          prompt:"Match the pairs",
          hint:"Kitchen mistakes",
          pairs:[
            ["preveč","příliš"],
            ["zažgano","spálené"],
            ["razbito","rozbité"],
            ["nered","nepořádek"]
          ]
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Kuhinja je nered.",
          correct:"Kuchyň je nepořádek",
          character:"friends.png",
          words:["Kuchyň","je","nepořádek","hra","kostka"]
        }

      ]
    },

    /* ---------- Lesson 3 ---------- */
    {
      id:"U11",
      title:"Ice skating",
      completed:false,
      exercises:[

        {
          type:"choice",
          character:"friends.png",
          prompt:"Select the correct meaning",
          hint:"drsanje",
          choices:["bruslení","běhání","zpěv"],
          correctIndex:0
        },

        {
          type:"match",
          character:"man.png",
          prompt:"Match the pairs",
          hint:"Skating words",
          pairs:[
            ["led","led"],
            ["padec","pád"],
            ["krog","kruh"],
            ["počasi","pomalu"]
          ]
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Drsam počasi.",
          correct:"Bruslím pomalu",
          character:"friends.png",
          words:["Bruslím","pomalu","já","hra","kostka"]
        }

      ]
    },

    /* ---------- Lesson 4 ---------- */
    {
      id:"U12",
      title:"Sweet evening",
      completed:false,
      exercises:[

        {
          type:"choice",
          character:"friends.png",
          prompt:"Select the correct meaning",
          hint:"topel čaj",
          choices:["teplý čaj","drahý dům","tmavý pokoj"],
          correctIndex:0
        },

        {
          type:"match",
          character:"friends.png",
          prompt:"Match the pairs",
          hint:"Warm evening words",
          pairs:[
            ["zajtrk","snídaně"],
            ["večerja","večeře"],
            ["toplo","teplo"],
            ["mirno","klidně"]
          ]
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Večer pijemo topel čaj.",
          correct:"Večer pijeme teplý čaj",
          character:"friends.png",
          words:["Večer","pijeme","teplý","čaj","hra","kostka"]
        }

      ]
    }

  ]
},

/* ============================================================
   CHAPTER 4 — Devu Concert & Bus Adventures (30th)
============================================================ */
{
  id:"C4",
  chapterTitle:"Musical journey",
  color:"#ff7a59",
  imageId:"C4",
  mascot:"klarka3.png",
  mascotheight:250,

  units:[

    /* ---------- Lesson 1 ---------- */
    {
      id:"U13",
      title:"Getting ready",
      completed:false,
      exercises:[

        {
          type:"choice",
          character:"friends.png",
          prompt:"Select the correct meaning",
          hint:"koncert",
          choices:["koncert","kočka","mléko"],
          correctIndex:0
        },

        {
          type:"match",
          character:"man.png",
          prompt:"Match the pairs",
          hint:"Preparation words",
          pairs:[
            ["obleka","oblečení"],
            ["glasba","hudba"],
            ["čas","čas"],
            ["telefon","telefon"]
          ]
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Gremo na koncert.",
          correct:"Jdeme na koncert",
          character:"friends.png",
          words:["Jdeme","na","koncert","hra","kostka"]
        }

      ]
    },

    /* ---------- Lesson 2 ---------- */
    {
      id:"U14",
      title:"At Devu",
      completed:false,
      exercises:[

        {
          type:"choice",
          character:"friends.png",
          prompt:"Select the correct meaning",
          hint:"glasno",
          choices:["hlasitě","levně","pomalu"],
          correctIndex:0
        },

        {
          type:"match",
          character:"man.png",
          prompt:"Match the pairs",
          hint:"Concert vocabulary",
          pairs:[
            ["množica","dav"],
            ["oder","pódium"],
            ["plesati","tancovat"],
            ["kričati","křičet"]
          ]
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Glasba je zelo glasna.",
          correct:"Hudba je velmi hlasitá",
          character:"friends.png",
          words:["Hudba","je","velmi","hlasitá","hra","kostka"]
        }

      ]
    },

    /* ---------- Lesson 3 ---------- */
    {
      id:"U15",
      title:"Bus chaos",
      completed:false,
      exercises:[

        {
          type:"choice",
          character:"friends.png",
          prompt:"Select the correct meaning",
          hint:"avtobus",
          choices:["autobus","vlak","loď"],
          correctIndex:0
        },

        {
          type:"match",
          character:"man.png",
          prompt:"Match the pairs",
          hint:"Bus trip words",
          pairs:[
            ["vozovnica","jízdenka"],
            ["vožnja","jízda"],
            ["prepozno","pozdě"],
            ["gneča","tlačenice"]
          ]
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Avtobus je poln.",
          correct:"Autobus je plný",
          character:"friends.png",
          words:["Autobus","je","plný","hra","kostka"]
        }

      ]
    },

    /* ---------- Lesson 4 ---------- */
    {
      id:"U16",
      title:"After the show",
      completed:false,
      exercises:[

        {
          type:"choice",
          character:"friends.png",
          prompt:"Select the correct meaning",
          hint:"utrujen",
          choices:["unavený","rychlý","smutný"],
          correctIndex:0
        },

        {
          type:"match",
          character:"man.png",
          prompt:"Match the pairs",
          hint:"Late-night words",
          pairs:[
            ["pozno","pozdě"],
            ["domov","domů"],
            ["spanje","spánek"],
            ["vožnja","jízda"]
          ]
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Zelo sem utrujen.",
          correct:"Jsem velmi unavený",
          character:"friends.png",
          words:["Jsem","velmi","unavený","hra","kostka"]
        }

      ]
    }

  ]
}

];