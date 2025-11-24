/* ============================================================
   CONTENT FILE — Story-based CZ–SL Learning
============================================================ */

const CHAPTERS = [

/* ============================================================
   CHAPTER 1 — The arrival (27th)
============================================================ */
{
  id:"C1",
  chapterTitle:"The arrival",
  color:"#2c9cdb",
  imageId:"C1",
  mascot:"klarka1.png",
  mascotheight:250,

  units:[

    /* --------------------------------------------------------
       Lesson 1 — Rolling & playing
    -------------------------------------------------------- */
    {
      id:"U1",
      title:"Rolling & playing",
      completed:false,
      exercises:[

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"avtobus",
          character:"friends.png",
          choices:["autobus","strom","řeka"],
          correctIndex:0
        },

        {
          type:"match",
          prompt:"Match the pairs",
          hint:"Arrival small-talk",
          character:"man.png",
          pairs:[
            ["potovanje","cesta"],
            ["drevo","strom"],
            ["avti","auta"],
            ["Pogrešal sem te!!","Chyběla jsi mi!!"]
          ]
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Je bila vožnja dolga?",
          correct:"Byla dlouhá cesta?",
          character:"friends.png",
          words:["Byla","dlouhá","cesta?","já","ne"]
        },

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"človek ne jezi se",
          character:"friends.png",
          choices:["Člověče, nezlob se","dej si pozor","poglej drevo"],
          correctIndex:0
        },

        /* blank */
        {
          type:"build",
          prompt:"Translate",
          hint:"",
          correct:"",
          character:"friends.png",
          words:[]
        }

      ]
    },

    /* --------------------------------------------------------
       Lesson 2 — Fun & chaos
    -------------------------------------------------------- */
    {
      id:"U2",
      title:"Fun & chaos",
      completed:false,
      exercises:[

        {
          type:"match",
          prompt:"Match the pairs",
          hint:"Board game chaos",
          character:"friends.png",
          pairs:[
            ["kocka","kostka"],
            ["potegni dve karti","táhni dvě karty"],
            ["premešaj kup kart","zamíchej balíček"],
            ["sediš na mojem mestu","sedíš na mém místě"]
          ]
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Mami, Klarka goljufa!",
          correct:"Mami, Klárka podvádí!",
          character:"friends.png",
          words:["Mami,","Klárka","podvádí!","hra","ne"]
        },

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"počakaj me, grem lulat",
          character:"man.png",
          choices:["počkej na mě, jdu čůrat","dej mi karty","jdu ven"],
          correctIndex:0
        },

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"prinesi vročo čokolado",
          character:"friends.png",
          choices:["přines horkou čokoládu","vyhoď to","poglej dol"],
          correctIndex:0
        },

        /* blank */
        {
          type:"build",
          prompt:"Translate",
          hint:"",
          correct:"",
          character:"friends.png",
          words:[]
        }

      ]
    },


    /* --------------------------------------------------------
       Lesson 3 — Swimming time
    -------------------------------------------------------- */
    {
      id:"U3",
      title:"Swimming time",
      completed:false,
      exercises:[

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"levo stopalo zeleno",
          character:"friends.png",
          choices:["levá noha zelená","pravá ruka modrá","levé rameno červené"],
          correctIndex:0
        },

        {
          type:"match",
          prompt:"Match the pairs",
          hint:"Board-game mini actions",
          character:"man.png",
          pairs:[
            ["počakaj","počkej"],
            ["izberi","vyber"],
            ["zamenjaj","vyměň"],
            ["premakni","posuň"]
          ]
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Lahko sediš poleg mene.",
          correct:"Můžeš sedět vedle mě.",
          character:"friends.png",
          words:["Můžeš","sedět","vedle","mě.","hra"]
        },

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"czech mate :)",
          character:"friends.png",
          choices:["šach mat","pozdní tah","ne vem"],
          correctIndex:0
        },

        /* blank */
        {
          type:"build",
          prompt:"Translate",
          hint:"",
          correct:"",
          character:"friends.png",
          words:[]
        }

      ]
    },


    /* --------------------------------------------------------
       Lesson 4 — Game night wrap-up
    -------------------------------------------------------- */
    {
      id:"U4",
      title:"Game night wrap-up",
      completed:false,
      exercises:[

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"želiš igrati še malo ali iti gor?",
          character:"friends.png",
          choices:[
            "chceš ještě hrát, nebo jít nahoru?",
            "jdeš ven?",
            "si utrujen?"
          ],
          correctIndex:0
        },

        {
          type:"match",
          prompt:"Match the pairs",
          hint:"Warm goodbye",
          character:"man.png",
          pairs:[
            ["lahko noč","dobrou noc"],
            ["jutri nadaljujemo","zítra pokračujeme"],
            ["hvala za igro","díky za hru"],
            ["bilo je zabavno","bylo to zábavné"]
          ]
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Nesem vročo čokolado!",
          correct:"Nesu horkou čokoládu!",
          character:"friends.png",
          words:["Nesu","horkou","čokoládu!","já"]
        },

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"bilo je magično",
          character:"friends.png",
          choices:["bylo to magické","bylo to levné","bylo to rychlé"],
          correctIndex:0
        },

        /* blank */
        {
          type:"build",
          prompt:"Translate",
          hint:"",
          correct:"",
          character:"friends.png",
          words:[]
        }

      ]
    }

  ]
},

/* ============================================================
   CHAPTER 2 — The cold shines bright (28th)
============================================================ */
{
  id:"C2",
  chapterTitle:"The cold shines bright",
  color:"#9c5df9",
  imageId:"C2",
  mascot:"klarka2.png",
  mascotheight:250,

  units:[

    /* --------------------------------------------------------
       Lesson 1 — Snow basics
    -------------------------------------------------------- */
    {
      id:"U5",
      title:"Snow basics",
      completed:false,
      exercises:[

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"sneg",
          character:"friends.png",
          choices:["sníh","dům","nebe"],
          correctIndex:0
        },

        {
          type:"match",
          prompt:"Match the pairs",
          hint:"Gear up",
          character:"man.png",
          pairs:[
            ["rokavice","rukavice"],
            ["klobuk","klobouk"],
            ["šal","šála"],
            ["plašč","kabát"]
          ]
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Ne pozabi na rokavice!",
          correct:"Nezapomeň na rukavice!",
          character:"friends.png",
          words:["Nezapomeň","na","rukavice!"]
        },

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"kaj pa kapa?",
          character:"friends.png",
          choices:["A co čepice?","Kje je mraz?","Gremo spat?"],
          correctIndex:0
        },

        /* blank */
        {
          type:"build",
          prompt:"Translate",
          hint:"",
          correct:"",
          character:"friends.png",
          words:[]
        }

      ]
    },


    /* --------------------------------------------------------
       Lesson 2 — Sledding fun
    -------------------------------------------------------- */
    {
      id:"U6",
      title:"Sledding fun",
      completed:false,
      exercises:[

        {
          type:"match",
          prompt:"Match the pairs",
          hint:"Sledding words",
          character:"friends.png",
          pairs:[
            ["sanke","sáně"],
            ["pazi, drevo!","pozor, strom!"],
            ["Noter je bil kamen!!","Byl tam kamínek!!"],
            ["gremo hitreje","jeďme rychleji"]
          ]
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Ne vidim ničesar!",
          correct:"Nevidím nic!",
          character:"friends.png",
          words:["Nevidím","nic!"]
        },

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"bom nesel, ne skrbi",
          character:"man.png",
          choices:["ponesu to, neboj","počakaj me","gremo domov"],
          correctIndex:0
        },

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"prosim ne povej mami!!!",
          character:"friends.png",
          choices:["prosím, neříkej to mámě!!!","rad te imam","pojdiva domov"],
          correctIndex:0
        },

        /* blank */
        {
          type:"build",
          prompt:"Translate",
          hint:"",
          correct:"",
          character:"friends.png",
          words:[]
        }

      ]
    },


    /* --------------------------------------------------------
       Lesson 3 — Christmas lights
    -------------------------------------------------------- */
    {
      id:"U7",
      title:"Christmas lights",
      completed:false,
      exercises:[

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"toliko lučk!",
          character:"friends.png",
          choices:["tolik světýlek!","tolik ljudi!","tolik hrane!"],
          correctIndex:0
        },

        {
          type:"match",
          prompt:"Match the pairs",
          hint:"Magic walk",
          character:"man.png",
          pairs:[
            ["to je kot sanje","to je jako sen"],
            ["poglej, jelen!","podívej, jelen!"],
            ["čarobno je","je to kouzelné"],
            ["topla čokolada","horká čokoláda"]
          ]
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Tako je magično.",
          correct:"Je to tak kouzelné.",
          character:"friends.png",
          words:["Je","to","tak","kouzelné."]
        },

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"ljubim te Klarka <3",
          character:"friends.png",
          choices:["Miluju tě, Klárko <3","Rad imam psa","Vidím lučke"],
          correctIndex:0
        },

        /* blank */
        {
          type:"build",
          prompt:"Translate",
          hint:"",
          correct:"",
          character:"friends.png",
          words:[]
        }

      ]
    },


    /* --------------------------------------------------------
       Lesson 4 — Evening chills
    -------------------------------------------------------- */
    {
      id:"U8",
      title:"Evening chills",
      completed:false,
      exercises:[

        {
          type:"match",
          prompt:"Match the pairs",
          hint:"Winter mood",
          character:"friends.png",
          pairs:[
            ["zelo mrzlo","velmi studeno"],
            ["temno","tma"],
            ["sneg","sníh"],
            ["lučke","světýlka"]
          ]
        },

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"pojdimo na vročo čokolado!",
          character:"man.png",
          choices:["pojďme na horkou čokoládu!","pojdi spat","najdeva vlak"],
          correctIndex:0
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Čutim mraz.",
          correct:"Cítím mráz.",
          character:"friends.png",
          words:["Cítím","mráz."]
        },

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"tako je lepo",
          character:"friends.png",
          choices:["je to tak hezké","je to levné","je to temno"],
          correctIndex:0
        },

        /* blank */
        {
          type:"build",
          prompt:"Translate",
          hint:"",
          correct:"",
          character:"friends.png",
          words:[]
        }

      ]
    }

  ]
},

/* ============================================================
   CHAPTER 3 — Slippery slope to sugar overdose (29th)
============================================================ */
{
  id:"C3",
  chapterTitle:"Slippery slope to sugar overdose",
  color:"#00c2a8",
  imageId:"C3",
  mascot:"klarkamaj.png",
  mascotheight:250,

  units:[

    /* --------------------------------------------------------
       Lesson 1 — Baking with Saš & Tilen
    -------------------------------------------------------- */
    {
      id:"U9",
      title:"Baking with Saš & Tilen",
      completed:false,
      exercises:[

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"roža",
          character:"friends.png",
          choices:["květina","kniha","skříň"],
          correctIndex:0
        },

        {
          type:"match",
          prompt:"Match the pairs",
          hint:"Baking ingredients",
          character:"friends.png",
          pairs:[
            ["sladkor","cukr"],
            ["čokolada","čokoláda"],
            ["jajca","vejce"],
            ["moka","mouka"]
          ]
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Stepemo rumenjake.",
          correct:"Ušleháme žloutky.",
          character:"friends.png",
          words:["Ušleháme","žloutky."]
        },

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"prižgi pečico prosim",
          character:"friends.png",
          choices:["zapni troubu prosím","dones cukr","vzemi jajca"],
          correctIndex:0
        },

        /* blank */
        {
          type:"build",
          prompt:"Translate",
          hint:"",
          correct:"",
          character:"friends.png",
          words:[]
        }

      ]
    },


    /* --------------------------------------------------------
       Lesson 2 — Kitchen chaos
    -------------------------------------------------------- */
    {
      id:"U10",
      title:"Kitchen chaos",
      completed:false,
      exercises:[

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"tako dobro te je spet videti!",
          character:"man.png",
          choices:["je tak dobré tě zase vidět!","imam malo sladkorja","si lačen?"],
          correctIndex:0
        },

        {
          type:"match",
          prompt:"Match the pairs",
          hint:"Kitchen oopsies",
          character:"friends.png",
          pairs:[
            ["polito","rozlité"],
            ["umazano","špinavé"],
            ["zažgano","spálené"],
            ["nered","nepořádek"]
          ]
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Kako je bil božični sejem?",
          correct:"Jaký byl vánoční trh?",
          character:"friends.png",
          words:["Jaký","byl","vánoční","trh?"]
        },

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"(Hey baby wanna puck?)",
          character:"friends.png",
          choices:["—","—","—"],
          correctIndex:0
        },

        /* blank */
        {
          type:"build",
          prompt:"Translate",
          hint:"",
          correct:"",
          character:"friends.png",
          words:[]
        }

      ]
    },


    /* --------------------------------------------------------
       Lesson 3 — Ice skating
    -------------------------------------------------------- */
    {
      id:"U11",
      title:"Ice skating",
      completed:false,
      exercises:[

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"drsanje (indirect vocab)",
          character:"friends.png",
          choices:["klouzání","zpívání","kopání"],
          correctIndex:0
        },

        {
          type:"match",
          prompt:"Match the pairs",
          hint:"Skating moves",
          character:"man.png",
          pairs:[
            ["krog","kruh"],
            ["počasi","pomalu"],
            ["padec","pád"],
            ["obrat","otočka"]
          ]
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Drsim počasi.",
          correct:"Kloužu pomalu.",
          character:"friends.png",
          words:["Kloužu","pomalu."]
        },

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"pojdi malo hitreje",
          character:"friends.png",
          choices:["jeď trochu rychleji","je tma","dodaj sladkor"],
          correctIndex:0
        },

        /* blank */
        {
          type:"build",
          prompt:"Translate",
          hint:"",
          correct:"",
          character:"friends.png",
          words:[]
        }

      ]
    },


    /* --------------------------------------------------------
       Lesson 4 — Sweet evening
    -------------------------------------------------------- */
    {
      id:"U12",
      title:"Sweet evening",
      completed:false,
      exercises:[

        {
          type:"match",
          prompt:"Match the pairs",
          hint:"Cozy vibes",
          character:"friends.png",
          pairs:[
            ["večerja","večeře"],
            ["toplo","teplo"],
            ["mirno","klidně"],
            ["čaj","čaj"]
          ]
        },

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"dobro, gremo domov?",
          character:"man.png",
          choices:["dobře, jdeme domů?","kje je sladkor","želiš ven?"],
          correctIndex:0
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Večer pijemo topel čaj.",
          correct:"Večer pijeme teplý čaj.",
          character:"friends.png",
          words:["Večer","pijeme","teplý","čaj."]
        },

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"zelo lepo",
          character:"friends.png",
          choices:["velmi hezky","velmi draho","velmi pozdě"],
          correctIndex:0
        },

        /* blank */
        {
          type:"build",
          prompt:"Translate",
          hint:"",
          correct:"",
          character:"friends.png",
          words:[]
        }

      ]
    }

  ]
},

/* ============================================================
   CHAPTER 4 — Musical journey (30th)
============================================================ */
{
  id:"C4",
  chapterTitle:"Musical journey",
  color:"#ff7a59",
  imageId:"C4",
  mascot:"klarka3.png",
  mascotheight:250,

  units:[

    /* --------------------------------------------------------
       Lesson 1 — Getting ready
    -------------------------------------------------------- */
    {
      id:"U13",
      title:"Getting ready",
      completed:false,
      exercises:[

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"kopalke",
          character:"friends.png",
          choices:["plavky","kalhoty","kniha"],
          correctIndex:0
        },

        {
          type:"match",
          prompt:"Match the pairs",
          hint:"Warm-up",
          character:"man.png",
          pairs:[
            ["brisače","ručníky"],
            ["voda","voda"],
            ["jacuzzi","vířivka"],
            ["ne skrbi, lahko peljem","neboj, můžu řídit"]
          ]
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Vse si spakirala?",
          correct:"Zabalila jsi všechno?",
          character:"friends.png",
          words:["Zabalila","jsi","všechno?"]
        },

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"ti je bilo všeč?",
          character:"friends.png",
          choices:["líbilo se ti to?","si utrujena?","je ti mraz?"],
          correctIndex:0
        },

        /* blank */
        {
          type:"build",
          prompt:"Translate",
          hint:"",
          correct:"",
          character:"friends.png",
          words:[]
        }

      ]
    },


    /* --------------------------------------------------------
       Lesson 2 — At Devu
    -------------------------------------------------------- */
    {
      id:"U14",
      title:"At Devu",
      completed:false,
      exercises:[

        {
          type:"match",
          prompt:"Match the pairs",
          hint:"Concert items",
          character:"friends.png",
          pairs:[
            ["bobni","bicí"],
            ["kitara","kytara"],
            ["luči","světla"],
            ["mikrofon","mikrofon"]
          ]
        },

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"ne pozabi čepkov za ušesa",
          character:"man.png",
          choices:["ne zapomeň na špunty do uší","vzemi denar","daj bundu"],
          correctIndex:0
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Kako je bil koncert?",
          correct:"Jaký byl koncert?",
          character:"friends.png",
          words:["Jaký","byl","koncert?"]
        },

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"damn izgledaš vroče v tem",
          character:"friends.png",
          choices:["vypadáš v tom fakt skvěle","je ti vroče","pojdi spat"],
          correctIndex:0
        },

        /* blank */
        {
          type:"build",
          prompt:"Translate",
          hint:"",
          correct:"",
          character:"friends.png",
          words:[]
        }

      ]
    },


    /* --------------------------------------------------------
       Lesson 3 — Bus chaos
    -------------------------------------------------------- */
    {
      id:"U15",
      title:"Bus chaos",
      completed:false,
      exercises:[

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"vozovnica",
          character:"friends.png",
          choices:["jízdenka","světlo","okno"],
          correctIndex:0
        },

        {
          type:"match",
          prompt:"Match the pairs",
          hint:"Bus ride words",
          character:"man.png",
          pairs:[
            ["pozno","pozdě"],
            ["spanje","spánek"],
            ["vožnja","jízda"],
            ["avtobus","autobus"]
          ]
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Zamudila sva!",
          correct:"Zmeškali jsme to!",
          character:"friends.png",
          words:["Zmeškali","jsme","to!"]
        },

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"nočna vožnja",
          character:"friends.png",
          choices:["noční jízda","levná jízda","dolga pot"],
          correctIndex:0
        },

        /* blank */
        {
          type:"build",
          prompt:"Translate",
          hint:"",
          correct:"",
          character:"friends.png",
          words:[]
        }

      ]
    },


    /* --------------------------------------------------------
       Lesson 4 — After the show
    -------------------------------------------------------- */
    {
      id:"U16",
      title:"After the show",
      completed:false,
      exercises:[

        {
          type:"match",
          prompt:"Match the pairs",
          hint:"Late-night words",
          character:"friends.png",
          pairs:[
            ["karte","lístky"],
            ["spanje","spánek"],
            ["domov","domů"],
            ["utrujen","unavený"]
          ]
        },

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"samo zaspi",
          character:"friends.png",
          choices:["jen usni","jen počkej","pojej to"],
          correctIndex:0
        },

        {
          type:"build",
          prompt:"Translate",
          hint:"Bila je dolga noč.",
          correct:"Byla to dlouhá noc.",
          character:"friends.png",
          words:["Byla","to","dlouhá","noc."]
        },

        {
          type:"choice",
          prompt:"Select the correct meaning",
          hint:"gremo domov",
          character:"man.png",
          choices:["jdeme domů","jdeme ven","jdeme nazaj"],
          correctIndex:0
        },

        /* blank */
        {
          type:"build",
          prompt:"Translate",
          hint:"",
          correct:"",
          character:"friends.png",
          words:[]
        }

      ]
    }

  ]
}

];
