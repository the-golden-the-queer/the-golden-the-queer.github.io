let userName = "皮卡丘";
let userPRN = "他";
let dogBreed = "黃金獵犬"; // 預設狗品種

const story = {
  // 主線開頭
  main_start: {
    type: "system",
    text: "某個傍晚，作為好友的他傳來了訊息……",
    delayNext: 1500,
    next: "friend_greeting"
  },
  friend_greeting: {
    text: "還好嗎？今天過得如何？",
    options: [
      { text: "欸其實還不錯", next: "branch_A" },
      { text: "普通吧。", next: "branch_B" },
      { text: "哎哎哎", next: "branch_C" }
    ]
  },

  // ================= A 分線 =================
  branch_A: {
    text: "呀呼！",
    delayNext: 1000,
    next: "branch_A_fun"
  },
  branch_A_fun: {
    text: "有什麼好玩的？",
    options: [
      { text: "今天學姊下課帶我們去看他的狗狗", next: "A1_dog" },
      { text: "我發現發票中了500塊XD", next: "A2_invoice" }
    ]
  },

  // A1 分支
  A1_dog: {
    text: "哪一種狗狗🤩🤩",
    options: [
      { text: "柯基", setBreed: "柯基", next: "A1_dog_reply" },
      { text: "米克斯，最普通的那種", setBreed: "米克斯", next: "A1_dog_reply" },
      { text: "黃金獵犬", setBreed: "黃金獵犬", next: "A1_dog_reply" }
    ]
  },
  A1_dog_reply: {
    text: "你的最愛",
    delayNext: 1200,
    next: "A1_pet_cafe"
  },
  A1_pet_cafe: {
    text: "你還記得那間寵物咖啡店嗎",
    options: [
      { text: "記得！", next: "A1_end1" },
      { text: "咖哩店旁邊那家嗎？", next: "A1_end2" }
    ]
  },

  // A1 結尾 1
  A1_end1: {
    text: "明天要不要一起去？",
    options: [
      { 
        text: "（好期待）", 
        autoSend: ["好啊", "幾點"], 
        next: "A1_end1_time" 
      }
    ]
  },
  A1_end1_time: {
    text: "下午兩點好嗎？還是你要晚一點？",
    options: [
      { 
        text: "欸可以", 
        autoSend: ["欸可以", "明天見，晚安"], 
        next: "cafe_intro_A" 
      }
    ]
  },

  // A1 結尾 2
  A1_end2: {
    text: "嗯嗯嗯，那明天下午兩點好嗎",
    options: [
      { 
        text: "（好期待）", 
        autoSend: ["可以啊", "好期待"], 
        next: "cafe_intro_A" 
      }
    ]
  },

  // A2 分支
  A2_invoice: {
    text: "太好了吧！",
    delayNext: 1000,
    next: "A2_invoice_2"
  },
  A2_invoice_2: {
    text: "欸其實我也有中獎",
    delayNext: 1000,
    next: "A2_invoice_3"
  },
  A2_invoice_3: {
    text: "但只有兩百",
    options: [
      { text: "耶，我們都是幸運的人類", next: "A21_invite" },
      { text: "有錢錢真棒", next: "A22_invite" }
    ]
  },
  A21_invite: {
    text: "那你明天要不要一起出來喝個咖啡",
    delayNext: 1200,
    next: "A21_invite_2"
  },
  A21_invite_2: {
    text: "慶祝我們很幸運",
    options: [
      { 
        text: "（好期待）", 
        autoSend: ["好啊", "要咖哩店旁邊那家嗎？有狗狗的"], 
        next: "A2_time_confirm" 
      }
    ]
  },
  A22_invite: {
    text: "那你明天要不要一起出來喝個咖啡",
    delayNext: 1200,
    next: "A22_invite_2"
  },
  A22_invite_2: {
    text: "反正有錢錢",
    options: [
      { 
        text: "（好期待）", 
        autoSend: ["好啊", "要咖哩店旁邊那家嗎？有狗狗的"], 
        next: "A2_time_confirm" 
      }
    ]
  },
  A2_time_confirm: {
    text: "嗯嗯嗯，那明天下午兩點好嗎",
    options: [
      { 
        text: "可以啊", 
        autoSend: ["可以啊", "好期待"], 
        next: "cafe_intro_A" 
      }
    ]
  },

  // ================= B 分線 =================
  branch_B: {
    text: "哦？",
    options: [
      { text: "我買早餐的時候弄丟水壺了", next: "B1_bottle" },
      { text: "跟老闆個別Meeting，好累", next: "C2_meeting" }
    ]
  },

  // B1 水壺分支
  B1_bottle: {
    text: "要不要我明天經過早餐店的時候幫你找看看？",
    options: [
      { 
        text: "好嗚嗚", 
        autoSend: ["好嗚嗚", "麻煩了"], 
        next: "B_end_invite" 
      },
      { 
        text: "真的嗎", 
        autoSend: ["真的嗎", "拜託你了"], 
        next: "B_end_invite" 
      }
    ]
  },
  B_end_invite: {
    text: "是說要不要明天放假我們一起去寵物咖啡店",
    delayNext: 1200,
    next: "B_end_invite_2"
  },
  B_end_invite_2: {
    text: "如果有找到水壺我也可以一起給你",
    options: [
      { 
        text: "（好啊）", 
        autoSend: ["好啊", "幾點"], 
        next: "B_time_confirm" 
      }
    ]
  },
  B_time_confirm: {
    text: "下午兩點好嗎？還是你要晚一點？",
    options: [
      { 
        text: "欸可以", 
        autoSend: ["欸可以", "明天見，晚安"], 
        next: "cafe_intro_B1" 
      }
    ]
  },

  // ================= C 分線 =================
  branch_C: {
    text: "怎麼了🥺🥺",
    options: [
      { text: "老闆今天又回絕我的實驗計畫了", next: "C1_boss" },
      { text: "跟老闆個別Meeting，好累", next: "C2_meeting" }
    ]
  },

  // C1 實驗計畫分支
  C1_boss: {
    text: "哇",
    delayNext: 1000,
    next: "C1_boss_2"
  },
  C1_boss_2: {
    text: "怎麼這樣",
    options: [
      { text: "他覺得不夠具體", next: "C11_detail" },
      { text: "他覺得目前資源不夠", next: "C12_resource" }
    ]
  },
  C11_detail: {
    text: "那怎麼辦",
    options: [
      { 
        text: "嘆氣", 
        autoSend: ["修正完再重新跟他討論阿", "不知道多少次了", "我不擅長讀研究所"], 
        next: "C1_sigh_reply" 
      }
    ]
  },
  C12_resource: {
    text: "那怎麼辦",
    options: [
      { 
        text: "嘆氣", 
        autoSend: ["修正完再重新跟他討論阿", "不知道多少次了", "我不擅長讀研究所"], 
        next: "C1_sigh_reply" 
      }
    ]
  },
  C1_sigh_reply: {
    text: "嗚嗚嗚",
    delayNext: 1000,
    next: "C2_meeting_direct"
  },
  C2_meeting_direct: {
    text: "拍拍～",
    delayNext: 1200,
    next: "C2_meeting_2"
  },

  // C2 會面分支
  C2_meeting: {
    text: "拍拍～",
    delayNext: 1200,
    next: "C2_meeting_2"
  },
  C2_meeting_2: {
    text: "要我陪你嗎",
    options: [
      { text: "好啊", next: "C2_invite" },
      { text: "可以嗎", next: "C2_invite" }
    ]
  },
  C2_invite: {
    text: "那要不要明天放假我們一起去寵物咖啡店",
    options: [
      { 
        text: "（好期待）", 
        autoSend: ["好啊", "幾點"], 
        next: "C2_time_confirm" 
      }
    ]
  },
  C2_time_confirm: {
    text: "下午兩點好嗎？還是你要晚一點？",
    options: [
      { 
        text: "欸可以", 
        autoSend: ["欸可以", "明天見，晚安"], 
        next: "cafe_intro_boss" 
      }
    ]
  },

  // ================= 咖啡廳與告白 =================
  cafe_intro_A: {
    type: "system",
    meetInPerson: true,
    text_fn: () => `隔天，在有很多${dogBreed}的咖啡廳`,
    delayNext: 1500,
    next: "cafe_greeting_A"
  },
  cafe_greeting_A: {
    text: "哈囉",
    options: [
      { text: "嗨～", next: "cafe_corner_A" },
      { text: "又見到你了", next: "cafe_corner_A" }
    ]
  },
  cafe_corner_A: {
    type: "system",
    text: "你們一起推門進店，被安排在角落的座位。",
    delayNext: 1500,
    next: "cafe_dog_talk_A"
  },
  cafe_dog_talk_A: {
    text_fn: () => `好多${dogBreed}呢！`,
    delayNext: 1200,
    next: "cafe_dog_bark_A"
  },
  cafe_dog_bark_A: {
    type: "system",
    text: "狗：「汪！」",
    options: [
      { text: "（伸出手摸腳邊狗狗的頭）", next: "cafe_paving_common" },
      { text: "（小聲地對牠汪回去）", next: "cafe_paving_common" }
    ]
  },

  cafe_intro_B1: {
    type: "system",
    meetInPerson: true,
    text_fn: () => `隔天，在有很多${dogBreed}的咖啡廳`,
    delayNext: 1500,
    next: "cafe_greeting_B1"
  },
  cafe_greeting_B1: {
    text: "哈囉",
    options: [
      { text: "嗨～", next: "cafe_corner_B1" },
      { text: "又見到你了", next: "cafe_corner_B1" }
    ]
  },
  cafe_corner_B1: {
    type: "system",
    text: "你們一起推門進店，被安排在角落的座位。",
    delayNext: 1500,
    next: "cafe_dog_talk_B1"
  },
  cafe_dog_talk_B1: {
    text_fn: () => `好多${dogBreed}呢！`,
    delayNext: 1200,
    next: "cafe_dog_bark_B1"
  },
  cafe_dog_bark_B1: {
    type: "system",
    text: "狗：「汪！」",
    options: [
      { text: "（伸出手摸腳邊狗狗的頭）", next: "cafe_paving_B1_water" },
      { text: "（小聲地對牠汪回去）", next: "cafe_paving_B1_water" }
    ]
  },
  cafe_paving_B1_water: {
    type: "system",
    text: "狗盯著你看，然後拿鼻子蹭你的大腿。",
    delayNext: 1500,
    next: "B1_water_talk_1"
  },
  B1_water_talk_1: {
    text: "水壺的事，我今天早上去問早餐店阿姨了",
    delayNext: 1200,
    next: "B1_water_talk_2"
  },
  B1_water_talk_2: {
    text: "他有幫忙留下來",
    delayNext: 1000,
    next: "B1_water_talk_3"
  },
  B1_water_talk_3: {
    text: "在這裡",
    options: [
      { text: "謝謝！", next: "cafe_paving_B1_end" },
      { text: "太感謝你了", next: "cafe_paving_B1_end" },
      { text: "你也太幫忙了吧", next: "cafe_paving_B1_end" }
    ]
  },
  cafe_paving_B1_end: {
    type: "system",
    text: "狗狗後來跑走了。你們快樂地聊了一下午，關於狗狗，關於哪裡比較適合放假去旅遊，以及彼此的工作煩惱和論文難題。",
    delayNext: 2000,
    next: "confess_start"
  },

  cafe_intro_boss: {
    type: "system",
    meetInPerson: true,
    text_fn: () => `隔天，在有很多${dogBreed}的咖啡廳`,
    delayNext: 1500,
    next: "cafe_greeting_boss"
  },
  cafe_greeting_boss: {
    text: "哈囉",
    options: [
      { text: "嗨～", next: "cafe_corner_boss" },
      { text: "又見到你了", next: "cafe_corner_boss" }
    ]
  },
  cafe_corner_boss: {
    type: "system",
    text: "你們一起推門進店，被安排在角落的座位。",
    delayNext: 1500,
    next: "cafe_dog_talk_boss"
  },
  cafe_dog_talk_boss: {
    text_fn: () => `好多${dogBreed}呢！`,
    delayNext: 1200,
    next: "cafe_dog_bark_boss"
  },
  cafe_dog_bark_boss: {
    type: "system",
    text: "狗：「汪！」",
    options: [
      { text: "（伸出手摸腳邊狗狗的頭）", next: "cafe_paving_common" },
      { text: "（小聲地對牠汪回去）", next: "cafe_paving_common" }
    ]
  },

  cafe_paving_common: {
    type: "system",
    text: "狗盯著你看，然後拿鼻子蹭你的大腿。你們快樂地聊了一下午，關於狗狗，關於哪裡比較適合放假去旅遊，以及彼此的工作煩惱和論文難題。",
    delayNext: 2000,
    next: "confess_start"
  },

  confess_start: {
    type: "system",
    text: "對方把一個小盒子塞進你的手裡。",
    delayNext: 1500,
    next: "confess_cookie_1"
  },
  confess_cookie_1: {
    text: "這是，我烤的餅乾。",
    delayNext: 1200,
    next: "confess_cookie_2"
  },
  confess_cookie_2: {
    text: "之後論文讀累了可以吃。",
    options: [
      { text: "謝謝你，我好開心", next: "confess_ask_1" }
    ]
  },
  confess_ask_1: {
    text: "其實啊，有件事想和你說",
    delayNext: 1200,
    next: "confess_ask_2"
  },
  confess_ask_2: {
    text: "我一直很喜歡你，你願意跟我交往嗎？",
    options: [
      { text: "交往啊……", next: "confess_D1" },
      { text: "你的意思是？", next: "confess_E1" }
    ]
  },
  confess_D1: {
    text: "對啊，讓我們彼此成為對方的伴侶，永遠的陪伴對方",
    options: [
      { text: "嗯嗯嗯", next: "confess_care" }
    ]
  },
  confess_E1: {
    text: "就是，讓我們彼此成為對方的伴侶，永遠的陪伴對方",
    options: [
      { text: "嗯嗯嗯", next: "confess_care" }
    ]
  },
  confess_care: {
    text: "然後彼此照顧",
    delayNext: 1000,
    next: "confess_willing"
  },
  confess_willing: {
    text: "你願意嗎？",
    delayNext: 1200,
    next: "green_dog_intro"
  },

  green_dog_intro: {
    type: "system",
    text: "這是綠衣狗狗，牠是潛藏在你靈魂中的一部份。牠會告訴你牠的感受和想法。不要忘了，某種程度上牠其實就是你。",
    delayNext: 2000,
    next: "green_dog_speak_1"
  },
  green_dog_speak_1: {
    type: "green_dog",
    text: "他說他要「永」、「遠」出現在你身邊！",
    options: [
      { text: "好（點頭）", triggerGreenDog: "green_dog_speak_2" },
      { text: "我想想", triggerGreenDog: "green_dog_speak_2" },
      { text: "我沒有談過戀愛", triggerGreenDog: "green_dog_speak_2" }
    ]
  },
  green_dog_speak_2: {
    type: "green_dog",
    text: "你會沒有任何獨處時間！",
    options: [
      { text: "好（點頭）", triggerGreenDog: "green_dog_speak_3" },
      { text: "我想想", triggerGreenDog: "green_dog_speak_3" },
      { text: "我沒有談過戀愛", triggerGreenDog: "green_dog_speak_3" }
    ]
  },
  green_dog_speak_3: {
    type: "green_dog",
    text: "你們之後不是朋友了！",
    options: [
      { text: "好（點頭）", next: "D11_reply_seq" },
      { text: "我想想", next: "D12_ask" },
      { text: "我沒有談過戀愛", next: "D13_know" }
    ]
  },

  // 狗狗連說四句台詞（自動發送完畢，畫面停留，點按鈕後才清空對話框）
  D11_reply_seq: {
    type: "green_dog",
    text: "好了，你答應了",
    autoSendGreenDog: [
      "你要嘗試一件你沒做過的事——談戀愛",
      "就像你那些每天跟伴侶黏在一起、彼此甜言蜜語的朋友一樣",
      "我其實也不確定這個決定對不對",
      "但反正你答應了"
    ],
    options: [
      { text: "（進入下一階段）", clearChat: true, silent: true, next: "new_chapter_start" }
    ]
  },

  D12_ask: {
    text: "你喜歡我嗎？",
    options: [
      { text: "我覺得跟你相處很快樂", next: "D121_know" }
    ]
  },
  D121_know: {
    text: "我知道，但",
    delayNext: 1000,
    next: "D121_like_q"
  },
  D121_like_q: {
    text: "你「喜歡」我嗎？",
    options: [
      { text: "喜歡，吧", next: "D121_will" },
      { text: "當然", next: "D121_will" },
      { text: "喜歡，但……", next: "D122_fit" }
    ]
  },
  D121_will: {
    text: "那你願意跟我交往嗎？",
    options: [
      { text: "好啊", next: "D11_reply_seq" },
      { text: "（點頭）", next: "D11_reply_seq" }
    ]
  },

  D122_fit: {
    text: "你覺得我們不合適嗎？",
    options: [
      { text: "我沒有這樣想", next: "D122_how" },
      { text: "怎麼說，我是喜歡你的", next: "D122_how" }
    ]
  },
  D122_how: {
    text: "那你覺得呢？",
    options: [
      { text: "好啊，那我們交往", next: "D11_reply_seq" },
      { text: "不然交往試試看？", next: "D11_reply_seq" }
    ]
  },

  D13_know: {
    text: "我知道",
    delayNext: 1000,
    next: "D13_but"
  },
  D13_but: {
    text: "但，如果你願意的話",
    delayNext: 1200,
    next: "D13_try"
  },
  D13_try: {
    text: "要不要就試試看？",
    options: [
      { 
        text: "我不知道", 
        autoSend: ["我不知道", "我覺得內心裡有好多事情我並不明白"], 
        next: "D131_like" 
      },
      { 
        text: "好啊", 
        next: "D11_reply_seq" 
      }
    ]
  },
  D131_like: {
    text: "像是？",
    options: [
      { text: "我不知道為什麼要談戀愛", next: "D131_why" },
      { text: "就很多", next: "D131_why" }
    ]
  },
  D131_why: {
    text: "你不會想談戀愛嗎？",
    options: [
      { text: "應該會吧", next: "D131_fit" },
      { text: "不知道", next: "D131_fit" }
    ]
  },
  D131_fit: {
    text: "那你覺得呢？我們談戀愛會是合適的嗎？",
    options: [
      { text: "還是，我們試試看？", next: "D11_reply_seq" }
    ]
  },

  // ================= 新接續故事（客廳與廚房受傷事件） =================
  new_chapter_start: {
    type: "system",
    text: "剛交往的一個晚上，你們一起待在你家客廳。你在讀一本詩集，他戴著耳機做設計工作。",
    delayNext: 2000,
    next: "dinner_prep"
  },
  dinner_prep: {
    type: "system",
    text: "七點到了，你們一起去廚房做晚餐。你捧著一包筆管麵在煮水。他在旁邊切洋蔥和菇。",
    options: [
      { text: "（拿出鹽罐）", autoSend: ["（拿出鹽罐）", "（撒鹽）"], next: "cut_finger_event" }
    ]
  },

  // 廚房受傷連續對話（自動連發）
  cut_finger_event: {
    text: "鹽要加多一點！",
    delayNext: 1000,
    next: "cut_finger_event_2"
  },
  cut_finger_event_2: {
    text: "啊啊",
    delayNext: 800,
    next: "cut_finger_event_3"
  },
  cut_finger_event_3: {
    text: "我切到手了",
    delayNext: 1200,
    next: "cut_finger_event_4"
  },
  cut_finger_event_4: {
    text: "（刀子掉下）",
    options: [
      { text: "你還好嗎？", next: "cut_finger_ask" },
      { text: "怎——麼——了——", next: "cut_finger_ask" },
      { text: "（什麼都不說，趕快過去幫他看傷口）", next: "cut_finger_ask" }
    ]
  },
  cut_finger_ask: {
    text: "（舉起他的拇指）",
    delayNext: 1000,
    next: "cut_finger_pain"
  },
  cut_finger_pain: {
    text: "好痛",
    options: [
      { 
        text: "（靠近看）", 
        autoSend: ["（靠近看）", "哇"], 
        next: "wound_choice" 
      }
    ]
  },
  wound_choice: {
    options: [
      { text: "我去拿藥膏過來！", next: "take_medicine_kitchen" },
      { text: "我房間有藥，我們一起去擦藥", next: "take_medicine_room" }
    ]
  },

  // F1：廚房拿藥
  take_medicine_kitchen: {
    text: "好……",
    delayNext: 1000,
    next: "kitchen_medicine_sys"
  },
  kitchen_medicine_sys: {
    type: "system",
    text: "你去櫃子裡拿了藥膏跟棉花棒……",
    options: [
      { text: "（幫他擦）", autoSend: ["（幫他擦）", "（你在棉花棒上抹上藥膏）"], next: "apply_med_F11" },
      { text: "（讓他自己擦）", autoSend: ["（讓他自己擦）", "給你，用完我再拿回去放"], next: "apply_med_F12" }
    ]
  },

  // F2：房間拿藥
  take_medicine_room: {
    text: "好……",
    delayNext: 1000,
    next: "room_medicine_sys"
  },
  room_medicine_sys: {
    type: "system",
    text: "你們一起去了客廳……",
    options: [
      { text: "（幫他擦）", autoSend: ["（幫他擦）", "（你在棉花棒上抹上藥膏）"], next: "apply_med_F21" },
      { text: "（讓他自己擦）", autoSend: ["（讓他自己擦）", "給你，用完我再拿回去放"], next: "apply_med_F22" }
    ]
  },

  // F11 幫他擦（廚房）
  apply_med_F11: {
    text: "好痛，輕一點——",
    options: [
      { text: "快好了，沒事，忍耐一下", next: "F11_comfort" },
      { text: "痛痛跟細菌都飛走囉", setPainAway: true, next: "F11_painaway_gd" }
    ]
  },
  F11_painaway_gd: {
    type: "green_dog",
    text: "你在說什麼啦",
    autoSendGreenDog: ["他又不是七歲小孩"],
    delayNext: 1,
    next: "F11_comfort"
  },
  F11_comfort: {
    text: "啊啊——",
    options: [
      { text: "好了！", next: "rest_sofa_choice", setRoute: "Fa" }
    ]
  },

  // F12 讓他自己擦（廚房）
  apply_med_F12: {
    text: "呃",
    delayNext: 1000,
    next: "F12_self_1"
  },
  F12_self_1: {
    text: "（接過藥膏開始擦藥）",
    delayNext: 1500,
    next: "F12_self_2"
  },
  F12_self_2: {
    text: "好痛喔！",
    delayNext: 1500,
    next: "F12_self_3"
  },
  F12_self_3: {
    text: "給你！",
    delayNext: 1000,
    next: "F12_self_4"
  },
  F12_self_4: {
    text: "謝謝",
    delayNext: 1200,
    next: "rest_sofa_choice", 
    setRoute: "Fb"
  },

  // F21 幫他擦（客廳/房間）
  apply_med_F21: {
    text: "好痛，輕一點——",
    options: [
      { text: "快好了，沒事，忍耐一下", next: "F21_comfort" },
      { text: "痛痛跟細菌都飛走囉", setPainAway: true, next: "F21_painaway_gd" }
    ]
  },
  F21_painaway_gd: {
    type: "green_dog",
    text: "你在說什麼啦",
    autoSendGreenDog: ["他又不是七歲小孩"],
    delayNext: 1,
    next: "F21_comfort"
  },
  F21_comfort: {
    text: "啊啊——",
    options: [
      { text: "好了！", next: "rest_sofa_choice", setRoute: "Fa" }
    ]
  },

  // F22 讓他自己擦（客廳/房間）
  apply_med_F22: {
    text: "呃",
    delayNext: 1000,
    next: "F22_self_1"
  },
  F22_self_1: {
    text: "（接過藥膏開始擦藥）",
    delayNext: 1500,
    next: "F22_self_2"
  },
  F22_self_2: {
    text: "好痛喔！",
    delayNext: 1500,
    next: "F22_self_3"
  },
  F22_self_3: {
    text: "給你！",
    delayNext: 1000,
    next: "F22_self_4"
  },
  F22_self_4: {
    text: "謝謝",
    delayNext: 1200,
    next: "rest_sofa_choice", 
    setRoute: "Fb"
  },

  // 沙發休息與做飯
  rest_sofa_choice: {
    options: [
      { 
        text: "你要不要先去沙發休息？", 
        autoSend: ["你要不要先去沙發休息？", "剩下我做就好"], 
        next: "sofa_rest_reply" 
      }
    ]
  },
  sofa_rest_reply: {
    text: "好啊",
    delayNext: 1000,
    next: "sofa_rest_walk"
  },
  sofa_rest_walk: {
    text: "（走去沙發）",
    delayNext: 1500,
    next: "cook_alone_sys"
  },
  cook_alone_sys: {
    type: "system",
    text: "你自己一個人在廚房把義大利麵做好，端到桌上。你們一起享用美味的義大利麵。",
    options: [
      { text: "好吃嗎？", next: "eat_pasta_reply" },
      { text: "吃吃看！", next: "eat_pasta_reply" }
    ]
  },
  eat_pasta_reply: {
    text: "很好吃！你比我想的會做飯欸",
    delayStart: 1000,
    options: [
      { text: "好開心喔", next: "after_pasta_branch" },
      { text: "（對他微笑）", next: "after_pasta_branch" }
    ]
  },

  // 有選「痛痛跟細菌都飛走囉」→ 抱抱路線；否則 → 原本的爭執路線
  after_pasta_branch: {
    type: "branch",
    branch: () => saidPainAway ? "hug_ask" : "call_name_event"
  },

  // ================= 抱抱路線 =================
  hug_ask: {
    text: "可以抱我嗎？",
    options: [
      { text: "好啊", autoSend: ["好啊", "（抱抱）"], next: "hug_dinner_sys" },
      { text: "吃完再抱啦", next: "hug_later_1" }
    ]
  },
  hug_later_1: {
    text: "你搪塞我",
    delayNext: 1000,
    next: "hug_later_2"
  },
  hug_later_2: {
    text: "你好不浪漫",
    options: [
      { text: "好啦現在抱", autoSend: ["好啦現在抱", "（抱抱）"], next: "hug_dinner_sys" }
    ]
  },
  hug_dinner_sys: {
    type: "system",
    text: "你們愉快地享用了晚餐。這樣的夜晚，之後還會度過很多次。",
    options: [
      { text: "（進入下一階段）", clearChat: true, silent: true, next: "anniv_intro_1" }
    ]
  },

  // 爭執連發訊息（自動播放）
  call_name_event: {
    text_fn: () => `欸${userName}`,
    options: [
      { text: "嗯？", next: "care_question_1" }
    ]
  },
  care_question_1: {
    text: "為什麼感覺你不太關心我",
    delayNext: 1500,
    next: "care_question_2"
  },
  care_question_2: {
    text: "我們不是在談戀愛嗎？",
    delayNext: 1500,
    next: "care_question_3"
  },
  care_question_3: {
    text: "我手都受傷了，為什麼感覺你沒有在乎我手痛這件事？",
    delayNext: 1000,
    next: "route_check_dialogue"
  },

  // 根據是否有幫忙擦藥走不同路線
  route_check_dialogue: {
    type: "route_check",
    options: []
  },

  // Fa 路線（有幫忙擦藥）
  Fa_start: {
    options: [
      { text: "我有在乎你啊", next: "Fa1_1" },
      { text: "我不是幫你擦藥了嗎？", next: "Fa2_1" }
    ]
  },
  Fa1_1: {
    text: "但你好像幾乎都沒有安慰我",
    delayNext: 1200,
    next: "Fa1_2"
  },
  Fa1_2: {
    text: "我覺得",
    delayNext: 1000,
    next: "Fa1_3"
  },
  Fa1_3: {
    text: "你讓我感覺我們只是朋友",
    options: [
      { 
        text: "可是我有問你痛不痛了", 
        autoSend: ["可是我有問你痛不痛了", "我也有幫你擦藥"], 
        next: "Fa1_4" 
      }
    ]
  },
  Fa1_4: {
    text: "你就不能讓我感覺更像伴侶一點嗎？",
    delayNext: 1500,
    next: "Fa_end_ask"
  },
  Fa_end_ask: {
    text: "我們上個禮拜才交往欸",
    options: [
      { text: "對不起……", next: "green_dog_disappointed" }
    ]
  },

  Fa2_1: {
    text: "但你好像幾乎都沒有安慰我",
    delayNext: 1200,
    next: "Fa2_2"
  },
  Fa2_2: {
    text: "我覺得",
    delayNext: 1000,
    next: "Fa2_3"
  },
  Fa2_3: {
    text: "你讓我感覺我們只是朋友",
    options: [
      { 
        text: "可是我有問你痛不痛了", 
        autoSend: ["可是我有問你痛不痛了", "我也很心疼你啊"], 
        next: "Fa2_4" 
      }
    ]
  },
  Fa2_4: {
    text: "可是我覺得你好冷淡",
    delayNext: 1500,
    next: "Fa_end_ask"
  },

  // Fb 路線（讓他自己擦藥）
  Fb_start: {
    options: [
      { text: "我有在乎你啊", next: "Fb_reply_1" },
      { text: "我有拿藥來給你，不是嗎？", next: "Fb_reply_1" }
    ]
  },
  Fb_reply_1: {
    text: "但你都沒有安慰我",
    delayNext: 1200,
    next: "Fb_reply_2"
  },
  Fb_reply_2: {
    text: "你甚至沒有幫我擦藥！",
    options: [
      { text: "所以，你希望我幫你擦藥？", next: "Fb1_1" },
      { text: "那我下次幫你擦藥，好嗎？", next: "Fb2_1" }
    ]
  },
  Fb1_1: {
    text: "對",
    delayNext: 1000,
    next: "Fb1_2"
  },
  Fb1_2: {
    text: "而且我覺得",
    delayNext: 1000,
    next: "Fb1_3"
  },
  Fb1_3: {
    text: "你讓我感覺我們只是朋友",
    options: [
      { text: "我是真的很心疼你", next: "Fb1_4" }
    ]
  },
  Fb1_4: {
    text: "可是我覺得你好冷淡",
    delayNext: 1500,
    next: "Fa_end_ask"
  },

  Fb2_1: {
    text: "好，謝謝",
    delayNext: 1200,
    next: "Fb2_2"
  },
  Fb2_2: {
    text: "是說我覺得",
    delayNext: 1000,
    next: "Fb2_3"
  },
  Fb2_3: {
    text: "今天你讓我感覺我們只是朋友",
    options: [
      { text: "我是真的很心疼你", next: "Fb2_4" }
    ]
  },
  Fb2_4: {
    text: "可是我覺得你好冷淡",
    delayNext: 1500,
    next: "Fa_end_ask"
  },

  // 綠色巨大狗狗批評（自動推進）
  green_dog_disappointed: {
    type: "green_dog",
    text: "你讓他失望了",
    delayNext: 1500,
    next: "green_dog_disappointed_2"
  },
  green_dog_disappointed_2: {
    type: "green_dog",
    text: "下次要記得多關心他",
    delayNext: 1500,
    next: "green_dog_disappointed_3"
  },
  green_dog_disappointed_3: {
    type: "green_dog",
    text: "雖然我不知道他想要怎麼樣啦",
    delayNext: 1500,
    next: "green_dog_disappointed_4"
  },
  green_dog_disappointed_4: {
    type: "green_dog",
    text: "不然你問他好了",
    options: [
      { text: "（問他）", next: "Fc_branch" },
      { text: "（不問）", next: "Fd_branch" }
    ]
  },

  // Fc 路線（問他）
  Fc_branch: {
    options: [
      { 
        text: "那，你覺得我怎麼做", 
        autoSend: ["那，你覺得我怎麼做", "你才會有交往的感覺？"], 
        next: "Fc_partner_reply_1" 
      }
    ]
  },
  Fc_partner_reply_1: {
    text: "就像一般的情侶一樣啊",
    delayNext: 1500,
    next: "Fc_partner_reply_2"
  },
  Fc_partner_reply_2: {
    text: "抱抱我，靠著我，跟我說你對我很擔心",
    delayNext: 1500,
    next: "Fc_green_dog_1"
  },
  Fc_green_dog_1: {
    type: "green_dog",
    text: "蛤",
    delayNext: 1000,
    next: "Fc_green_dog_2"
  },
  Fc_green_dog_2: {
    type: "green_dog",
    text: "他只是切到手",
    delayNext: 1200,
    next: "Fc_green_dog_3"
  },
  Fc_green_dog_3: {
    type: "green_dog",
    text: "而且我覺得這樣互動好不自然",
    delayNext: 1500,
    next: "Fc_green_dog_4"
  },
  Fc_green_dog_4: {
    type: "green_dog",
    text: "但你都答應交往了",
    delayNext: 1500,
    next: "Fc_green_dog_5"
  },
  Fc_green_dog_5: {
    type: "green_dog",
    text: "至少試看看吧",
    options: [
      { 
        text: "好……", 
        autoSend: ["好……", "我知道了"], 
        next: "chapter_ending_silent" 
      }
    ]
  },

  // Fd 路線（不問，直接無對話結束）
  Fd_branch: {
    type: "system",
    text: "你們彼此不發一語。他拿手機播了音樂，你們把義大利麵慢慢吃完。",
    options: [
      { text: "（進入下一階段）", clearChat: true, silent: true, next: "anniv_intro_1" }
    ]
  },

  chapter_ending_silent: {
    type: "system",
    text: "你們彼此不發一語。他拿手機播了音樂，你們把義大利麵慢慢吃完。",
    options: [
      { text: "（進入下一階段）", clearChat: true, silent: true, next: "anniv_intro_1" }
    ]
  },

  // ================= 交往六個月紀念日 =================
  anniv_intro_1: {
    type: "system",
    text: "後來，你們一起經歷過各種時光。像是假日一起出遊、認識彼此的朋友、或是在對方最需要的時候幫忙彼此，又或者是最普通的，一起吃飯、一起讀書、一起搭車。",
    delayNext: 3500,
    next: "anniv_intro_2"
  },
  anniv_intro_2: {
    type: "system",
    text: "在這之中，你們經歷了很多不同的情緒，為彼此快樂過、無聊過，也吵過架。",
    delayNext: 2500,
    next: "anniv_intro_3"
  },
  anniv_intro_3: {
    type: "system",
    text: "而今天，是你們交往六個月的紀念日，你們約好一起去逛街和吃飯……",
    delayNext: 2500,
    next: "anniv_baby"
  },
  anniv_baby: {
    text: "我的寶寶",
    delayNext: 1200,
    next: "anniv_gd_1"
  },
  anniv_gd_1: {
    type: "green_dog",
    text: "你不是他的",
    delayNext: 1000,
    next: "anniv_gd_2"
  },
  anniv_gd_2: {
    type: "green_dog",
    text: "你也不是寶寶",
    options: [
      { text_fn: () => `叫我${userName}`, next: "G_reply_1" },
      { text: "（就這樣吧）", silent: true, next: "H_reply_1" }
    ]
  },

  // G：請對方叫名字
  G_reply_1: {
    text_fn: () => `好，${userName}`,
    delayNext: 1000,
    next: "G_reply_2"
  },
  G_reply_2: {
    text: "（拉起一件灰色的上衣）",
    delayNext: 1200,
    next: "G_reply_3"
  },
  G_reply_3: {
    text: "我覺得這件衣服很適合你",
    options: [
      { text: "我也很喜歡耶", next: "I_reply" },
      { text: "看起來很小件欸", next: "J_reply_1" }
    ]
  },

  // H：就這樣吧
  H_reply_1: {
    text: "（拉起一件灰色的上衣）",
    delayNext: 1200,
    next: "H_reply_2"
  },
  H_reply_2: {
    text: "寶寶我覺得這件衣服很適合你",
    options: [
      { text: "我也很喜歡耶", next: "I_reply" },
      { text: "看起來很小件欸", next: "J_reply_1" }
    ]
  },

  // I：我也很喜歡
  I_reply: {
    text: "那你要不要去試穿？",
    options: [
      { text: "好啊", next: "I1_fitting_sys" },
      { text: "那你等下幫我看一下包包", next: "I1_fitting_sys" }
    ]
  },

  // J：看起來很小件
  J_reply_1: {
    text: "後面有一件大一點的",
    delayNext: 1000,
    next: "J_reply_2"
  },
  J_reply_2: {
    text: "要不要試這件",
    options: [
      { text: "好啊", next: "I1_fitting_sys" },
      { text: "那你等下幫我看一下包包", next: "I1_fitting_sys" }
    ]
  },

  // I1：試衣間（I、J 共用）
  I1_fitting_sys: {
    type: "system",
    text: "於是，你們走到了試衣間……",
    delayNext: 1500,
    next: "I1_reply"
  },
  I1_reply: {
    text: "我覺得很適合你耶",
    options: [
      { text: "我也覺得！", next: "I11_reply" },
      { text: "真的嗎？", next: "I12_reply_1" }
    ]
  },
  I11_reply: {
    text: "太讚了，我覺得可以買下來",
    delayNext: 1500,
    next: "checkout_sys"
  },
  I12_reply_1: {
    text: "對，你看袖子，讓你看起來很有精神",
    delayNext: 1200,
    next: "I12_reply_2"
  },
  I12_reply_2: {
    text: "太讚了，我覺得可以買下來",
    delayNext: 1500,
    next: "checkout_sys"
  },

  // 結帳
  checkout_sys: {
    type: "system",
    text: "於是你回試衣間把衣服換了下來，你們一起走到櫃檯。",
    delayNext: 2000,
    next: "checkout_clerk"
  },
  checkout_clerk: {
    type: "clerk",
    text: "這樣是1400元——，要刷卡還是付現？",
    delayNext: 1500,
    next: "checkout_card"
  },
  checkout_card: {
    text: "（拿出皮夾裡的信用卡）",
    delayNext: 1200,
    next: "checkout_gd_1"
  },
  checkout_gd_1: {
    type: "green_dog",
    text: "他要幫你付錢！",
    delayNext: 1000,
    next: "checkout_gd_2"
  },
  checkout_gd_2: {
    type: "green_dog",
    text: "但，你們好像沒有討論過？",
    options: [
      { text: "我來付好了！", next: "K_reply" },
      { text: "（等一下晚餐換我付好了）", autoSend: ["等一下晚餐換我付好了"], next: "L_reply_1" },
      { text: "（什麼都不做，就讓他付）", next: "M_swipe" }
    ]
  },

  // K：我來付
  K_reply: {
    text: "沒有關係，今天是紀念日",
    delayNext: 1200,
    next: "K_gd"
  },
  K_gd: {
    type: "green_dog",
    text: "你要快點，他要付錢了！",
    options: [
      { text: "我想自己付錢", next: "K1_reply_1" },
      { text: "我們沒有討論過吧？", next: "K1_reply_1" },
      { text: "好吧，等一下晚餐我來付好了", next: "K1_reply_1" }
    ]
  },
  K1_reply_1: {
    text: "沒關係啦",
    delayNext: 1000,
    next: "K1_reply_2"
  },
  K1_reply_2: {
    text: "（刷卡）",
    delayNext: 1200,
    next: "K1_machine_1"
  },
  K1_machine_1: {
    type: "machine",
    text: "我是機器",
    delayNext: 1000,
    next: "K1_machine_2"
  },
  K1_machine_2: {
    type: "machine",
    text: "（交易成功）",
    delayNext: 1500,
    next: "K1_gd_1"
  },
  K1_gd_1: {
    type: "green_dog",
    text: "呃",
    delayNext: 1000,
    next: "K1_gd_2"
  },
  K1_gd_2: {
    type: "green_dog",
    text: "怎麼辦",
    delayNext: 1000,
    next: "K1_gd_2b"
  },
  K1_gd_2b: {
    type: "green_dog",
    text: "他已經付錢了",
    delayNext: 2000,
    next: "K1_gd_3"
  },
  K1_gd_3: {
    type: "green_dog",
    text: "人類！！！！！",
    options: [
      { text: "哇……", next: "anniv_restaurant_sys" },
      { text: "等一下再說好了……", next: "anniv_restaurant_sys" }
    ]
  },

  // L：晚餐換我付
  L_reply_1: {
    text: "沒關係啦",
    delayNext: 1000,
    next: "L_reply_2"
  },
  L_reply_2: {
    text: "（刷卡）",
    delayNext: 1200,
    next: "L_machine_1"
  },
  L_machine_1: {
    type: "machine",
    text: "我是機器",
    delayNext: 1000,
    next: "L_machine_2"
  },
  L_machine_2: {
    type: "machine",
    text: "（交易成功）",
    delayNext: 1500,
    next: "L_gd_1"
  },
  L_gd_1: {
    type: "green_dog",
    text: "等一下你要付錢……",
    delayNext: 1500,
    next: "L_gd_2"
  },
  L_gd_2: {
    type: "green_dog",
    text: "他……有聽到嗎……",
    delayNext: 2000,
    next: "anniv_restaurant_sys"
  },

  // M：什麼都不做
  M_swipe: {
    text: "（刷卡）",
    setPayRoute: "M", // 記錄：結帳時什麼都不做（P1m 路線用）
    delayNext: 1200,
    next: "M_machine_1"
  },
  M_machine_1: {
    type: "machine",
    text: "我是機器",
    delayNext: 1000,
    next: "M_machine_2"
  },
  M_machine_2: {
    type: "machine",
    text: "（交易成功）",
    delayNext: 2000,
    next: "anniv_restaurant_sys"
  },

  anniv_restaurant_sys: {
    type: "system",
    text: "你們拎著紙袋，一起去了他預訂的餐廳……",
    options: [
      { text: "（進入下一階段）", clearChat: true, silent: true, next: "rest_intro" }
    ]
  },

  // ================= 紀念日晚餐（玫瑰） =================
  rest_intro: {
    type: "system",
    text: "在餐廳，你們點了雙人套餐，他拿出了一束玫瑰……",
    delayNext: 2000,
    next: "rest_rose"
  },
  rest_rose: {
    text: "給你，謝謝你陪我這麼久",
    options: [
      { text: "謝謝", autoSend: ["謝謝", "其實我……"], next: "rest_N_choice" }
    ]
  },
  rest_N_choice: {
    options: [
      { text: "不需要禮物沒關係", next: "rest_N_reply_1" },
      { text: "沒有很想收禮物", next: "rest_N_reply_1" },
      { text: "覺得你送我太多東西了", next: "rest_N_reply_1" }
    ]
  },
  rest_N_reply_1: {
    text: "你幹嘛這麼客氣",
    delayNext: 1000,
    next: "rest_N_reply_2"
  },
  rest_N_reply_2: {
    text: "我是你的伴侶耶",
    options: [
      { text: "這不是客氣", autoSend: ["這不是客氣", "我其實沒有那麼想收到花"], next: "rest_N1_reply" },
      { text: "我不覺得伴侶間該如此", next: "rest_N2_reply_1" }
    ]
  },

  // N1：不是客氣
  rest_N1_reply: {
    text: "你不喜歡玫瑰嗎？",
    options: [
      { text: "我很喜歡，只是……", next: "rest_N11_reply" },
      { text: "其實你送的我都喜歡", next: "rest_N12_reply" }
    ]
  },
  rest_N11_reply: {
    text: "只是什麼？",
    delayNext: 1500,
    next: "rest_N1a_gd"
  },
  rest_N12_reply: {
    text: "那，怎麼了？",
    delayNext: 1500,
    next: "rest_N1a_gd"
  },
  rest_N1a_gd: {
    type: "green_dog",
    text: "你有很多跟他無法釐清的事",
    autoSendGreenDog: ["跟他說吧"],
    options: [
      {
        text: "我覺得太多了",
        autoSend: ["我覺得太多了", "你今天買了衣服給我", "還送了我玫瑰", "我……其實很有壓力"],
        next: "rest_N1a_reply_1"
      },
      {
        text: "對於送禮物，我有話想說",
        autoSend: ["對於送禮物，我有話想說", "我……其實很有壓力"],
        next: "rest_N1a_reply_1"
      }
    ]
  },
  rest_N1a_reply_1: {
    text_fn: () => `${userName}`,
    delayNext: 1000,
    next: "rest_N1a_reply_2"
  },
  rest_N1a_reply_2: {
    text: "我又沒有要你還我什麼",
    delayNext: 1200,
    next: "rest_N1a_reply_3"
  },
  rest_N1a_reply_3: {
    text: "我只是覺得要給你一個驚喜",
    options: [
      { text: "但我們沒有討論過", next: "rest_N1a_reply_4" },
      { text: "我不覺得這是驚喜", next: "rest_N1a_reply_4" }
    ]
  },
  rest_N1a_reply_4: {
    text: "可是我是因為覺得你會喜歡才送的",
    delayNext: 1200,
    next: "rest_N1a_reply_5"
  },
  rest_N1a_reply_5: {
    text: "我做錯了什麼",
    options: [
      {
        text: "我覺得我有很多事得要跟你討論",
        autoSend: ["我覺得我有很多事得要跟你討論", "但你沒有錯……"],
        next: "rest_food_sys"
      }
    ]
  },

  // N2：伴侶間不該如此
  rest_N2_reply_1: {
    text: "那你覺得伴侶間該怎麼做？",
    delayNext: 1200,
    next: "rest_N2_reply_2"
  },
  rest_N2_reply_2: {
    text: "大家不是都這樣談戀愛的嗎",
    options: [
      { text: "對，但是", next: "rest_N2_reply_3" },
      { text: "我不知道大家怎麼談戀愛", next: "rest_N2_reply_3" }
    ]
  },
  rest_N2_reply_3: {
    text: "我知道了",
    delayNext: 1000,
    next: "rest_N2_reply_4"
  },
  rest_N2_reply_4: {
    text: "你覺得你要是主動的這方，對嗎？",
    options: [
      { text: "對，但這不是重點", next: "rest_N2_reply_4a" },
      { text: "其實我還滿喜歡當被動的那方", next: "rest_N2_reply_5" }
    ]
  },
  rest_N2_reply_4a: {
    text: "好啊，我也想嘗試被照顧看看",
    options: [
      { text: "其實……", next: "rest_food_sys" }
    ]
  },
  rest_N2_reply_5: {
    text: "那問題是什麼？",
    delayNext: 1000,
    next: "rest_N2_reply_6"
  },
  rest_N2_reply_6: {
    text: "跟我說好嗎",
    options: [
      { text: "好……", next: "rest_food_sys" }
    ]
  },

  // ================= 上菜後（P） =================
  rest_food_sys: {
    type: "system",
    text: "上菜了，熱呼呼的料理正冒著煙——",
    options: [
      { text: "我覺得我們的相處很怪", next: "rest_P_reply_1" },
      { text: "我其實到現在都不知道怎麼談戀愛", next: "rest_P_reply_1" }
    ]
  },
  rest_P_reply_1: {
    text: "可是我們不是已經戀愛六個月了嗎？",
    delayNext: 1200,
    next: "rest_P_reply_2"
  },
  rest_P_reply_2: {
    text: "我覺得沒什麼問題",
    delayNext: 1500,
    next: "rest_P_gd"
  },
  rest_P_gd: {
    type: "green_dog",
    text: "問題非常多，你自己應該也知道吧",
    autoSendGreenDog: ["你不應該再逃避了", "想想那些情話", "還有你剛剛對於付錢的抉擇"],
    options: [
      // P1z：前面不是 M 路線（有表態要付錢）
      {
        text: "（舉例給他聽）",
        showIf: () => payRoute !== "M",
        autoSend: [
          "我不知道要怎麼用情話的方式哄你",
          "我不知道為什麼要過紀念日或是送禮",
          "我不知道為什麼你那麼在乎永遠",
          "……",
          { pause: 2000 },
          "（不自覺掉下眼淚）"
        ],
        next: "rest_unfit"
      },
      // P1m：前面走 M 路線（什麼都不做，讓他付）
      {
        text: "（舉例給他聽）",
        showIf: () => payRoute === "M",
        autoSend: [
          "我不知道要怎麼用情話的方式哄你",
          "我不知道為什麼要過紀念日",
          "我不知道為什麼你那麼在乎永遠",
          "……",
          { pause: 2000 },
          "（不自覺掉下眼淚）"
        ],
        next: "rest_unfit"
      },
      // P2：反問對方
      {
        text: "（反問對方）",
        autoSend: ["那你不覺得哪裡奇怪嗎？"],
        next: "rest_P2_reply"
      }
    ]
  },
  rest_P2_reply: {
    text: "你好像不太喜歡甜言蜜語？",
    options: [
      {
        text: "對",
        autoSend: [
          "對",
          "我不知道要怎麼用情話的方式哄你",
          "我不知道為什麼要過紀念日",
          "我不知道為什麼你那麼在乎永遠",
          "……",
          { pause: 2000 },
          "（不自覺掉下眼淚）"
        ],
        next: "rest_unfit"
      }
    ]
  },

  rest_unfit: {
    options: [
      { text: "我覺得我不適合當個伴侶", next: "rest_unfit_reply" }
    ]
  },
  rest_unfit_reply: {
    text: "不適合當伴侶，還是不適合當我的伴侶？",
    options: [
      { text: "不適合當伴侶", next: "rest_Q_reply_1" },
      { text: "不適合當你的伴侶", next: "rest_R_reply_1" },
      { text: "這是同一件事", next: "rest_Q_reply_1" }      
    ]
  },

  // Q：不適合當伴侶
  rest_Q_reply_1: {
    text: "那我們為什麼要交往？",
    delayNext: 1200,
    next: "rest_Q_reply_2"
  },
  rest_Q_reply_2: {
    text: "你當時為什麼要答應我",
    delayNext: 1500,
    next: "rest_Q_gd"
  },
  rest_Q_gd: {
    type: "green_dog",
    text: "因為",
    autoSendGreenDog: ["他是一個超棒的人啊", "只是交往後真的好累"],
    options: [
      { text: "我真的很喜歡跟你相處", next: "rest_Q_choice" }
    ]
  },
  rest_Q_choice: {
    options: [
      { text: "但我們不適合當伴侶", next: "rest_Q1_reply_1" },
      { text: "我以為我們可以當伴侶", next: "rest_Q2_reply_1" }
    ]
  },
  rest_Q1_reply_1: {
    text: "那怎麼辦",
    delayNext: 1000,
    next: "rest_Q1_reply_2"
  },
  rest_Q1_reply_2: {
    text: "我真的不想跟你分手",
    options: [
      { text: "我沒有這個打算", autoSend: ["我沒有這個打算", "我覺得我們可以談一談……"], next: "rest_S_end" },
      { text: "我們當朋友就好，好嗎？", next: "rest_T_end" },
      { text: "我不想，但我覺得必須如此", next: "rest_U_end" }
    ]
  },
  rest_Q2_reply_1: {
    text: "所以，我們不合適了？",
    delayNext: 1200,
    next: "rest_breakup_1"
  },

  // R：不適合當你的伴侶
  rest_R_reply_1: {
    text: "你是要跟我分手嗎？",
    delayNext: 1200,
    next: "rest_breakup_2"
  },

  // Q2 與 R 共用：分手提問
  rest_breakup_1: {
    text: "你是要跟我分手嗎？",
    delayNext: 1200,
    next: "rest_breakup_2"
  },
  rest_breakup_2: {
    text: "在紀念日？",
    options: [
      { text: "我沒有這個打算", autoSend: ["我沒有這個打算", "我覺得我們可以談一談……"], next: "rest_S_end" },
      { text: "我們當朋友就好，好嗎？", next: "rest_T_end" },
      { text: "我不想，但我覺得必須如此", next: "rest_U_end" }
    ]
  },

  // ================= 結局 S / T / U =================
  rest_S_end: {
    type: "system",
    text: "你們討論了一陣子，然後陷入沉默。你們後來各自吃著各自的餐點，也各自結帳。他把花帶回去了。",
    setEnding: "S",
    options: [
      { text: "（進入下一階段）", clearChat: true, silent: true, next: "aro_monologue" }
    ]
  },
  rest_T_end: {
    type: "system",
    text: "你們討論了一陣子，然後陷入沉默。只是各自吃著各自的餐點，也各自結帳。他把花帶回去了。",
    setEnding: "T",
    options: [
      { text: "（進入下一階段）", clearChat: true, silent: true, next: "aro_monologue" }
    ]
  },
  rest_U_end: {
    type: "system",
    text: "你們後來各自吃著各自的餐點，也各自結帳。他把花帶回去了。",
    setEnding: "U",
    options: [
      { text: "（進入下一階段）", clearChat: true, silent: true, next: "aro_monologue" }
    ]
  },

  // ================= 打破第四面牆（背景全黑） =================
  aro_monologue: {
    type: "right",
    darkMode: true,
    seq: ["嘿", "螢幕前的那位", "可以不用再假裝是我了啦", { pause: 3000 }, "跟你說", "後來啊——"],
    options: [
      { text: "嗯？", silent: true, next: "aro_after_branch" }
    ]
  },
  // 依 S / T / U 結局分流
  aro_after_branch: {
    type: "branch",
    branch: () => ({ S: "aro_after_S", T: "aro_after_T", U: "aro_after_U" }[endingRoute] || "aro_after_S")
  },
  aro_after_S: {
    type: "right",
    seq: [
      "我跟他後來花了一個禮拜討論",
      "他還是不太理解我希望的關係",
      "我也不知道該怎麼辦",
      "反正我們還是會碰到彼此",
      "偶爾需要的時候會合作或幫忙",
      "他也有新的交往對象了",
      "我不知道你怎麼想",
      "但我還滿開心的"
    ],
    options: [
      { text: "好喔", silent: true, clearChat: true, next: "three_months" },
      { text: "怎麼會這樣", silent: true, clearChat: true, next: "three_months" }
    ]
  },
  aro_after_T: {
    type: "right",
    seq: [
      "我跟他後來花了一個禮拜討論",
      "他還是不太理解我希望的關係",
      "我也不知道該怎麼辦",
      "反正我們還是會碰到彼此",
      "但也說不上是朋友",
      "目前也就這樣吧……"
    ],
    options: [
      { text: "好喔", silent: true, clearChat: true, next: "three_months" },
      { text: "怎麼會這樣", silent: true, clearChat: true, next: "three_months" }
    ]
  },
  aro_after_U: {
    type: "right",
    // 先前走 M 路線（讓他付衣服錢）才會有退衣服那句
    seq_fn: () => [
      "我跟他沒有任何聯絡",
      ...(payRoute === "M" ? ["我把衣服拿去退了，他應該會收到錢吧"] : []),
      "但我沒有刪掉他的社群帳號",
      "我其實還是想跟他當朋友的",
      "但，就這樣吧……"
    ],
    options: [
      { text: "好喔", silent: true, clearChat: true, next: "three_months" },
      { text: "怎麼會這樣", silent: true, clearChat: true, next: "three_months" }
    ]
  },

  // ================= 三個月後 =================
  three_months: {
    type: "system",
    text: "三個月後……",
    delayNext: 2500,
    next: "tm_1"
  },
  tm_1: {
    type: "right",
    text: "欸臭狗",
    delayNext: 1500,
    next: "tm_2"
  },
  tm_2: {
    type: "green_dog",
    text: "汪",
    autoSendGreenDog: ["叫我？", "怎樣？"],
    delayNext: 1,
    next: "tm_3"
  },
  tm_3: {
    type: "right",
    text: "我跟你說，我發現你了",
    delayNext: 1500,
    next: "tm_4"
  },
  tm_4: {
    type: "green_dog",
    text: "我一直都在啊",
    delayNext: 1500,
    next: "tm_5"
  },
  tm_5: {
    type: "right",
    seq: ["我知道", "我跟朋友聊天後，他們說你是無浪漫"],
    delayNext: 500,
    next: "tm_6"
  },
  tm_6: {
    type: "green_dog",
    text: "那是什麼？",
    delayNext: 1500,
    next: "tm_7"
  },
  tm_7: {
    type: "right",
    seq: ["你看這個", { card: true }],
    delayNext: 1500,
    next: "tm_8"
  },
  tm_8: {
    type: "green_dog",
    text: "嗯……",
    delayNext: 1500,
    next: "tm_9"
  },
  tm_9: {
    type: "right",
    seq: ["我不確定我是不是無浪漫", "但，跟你很像？"],
    delayNext: 500,
    next: "tm_10"
  },
  tm_10: {
    type: "green_dog",
    text: "嗯……",
    options: [
      { text: "偷看一下狗狗在看什麼", openBlog: true }
    ]
  }
};

let chatWindow, optionsContainer, modalOverlay, modalContent;
let currentCareRoute = "Fa"; // 記錄擦藥路線
let payRoute = "";
let endingRoute = ""; // 記錄紀念日晚餐結局（S / T / U） // 記錄結帳路線（"M" = 什麼都不做，讓他付）
let saidPainAway = false; // 擦藥時是否選了「痛痛跟細菌都飛走囉」
let isChatting = true; // 見面前（傳訊息階段）才顯示「對方正在輸入...」

function showWaiting() {
  optionsContainer.innerHTML = isChatting ? '<div class="typing">對方正在輸入...</div>' : '';
}

function addMessage(text, type) {
  if (!chatWindow) return;
  const wrapper = document.createElement('div');
  wrapper.className = `message-wrapper ${type}`;

  if (type === 'system') {
    const sysText = document.createElement('div');
    sysText.className = 'system-text';
    sysText.innerText = text;
    wrapper.appendChild(sysText);
  } else {
    // 只有店員和機器顯示說話者標籤
    const speakerLabels = { clerk: '店員', machine: '機器' };
    if (speakerLabels[type]) {
      const label = document.createElement('div');
      label.className = 'speaker-label';
      label.innerText = speakerLabels[type];
      wrapper.appendChild(label);
    }

    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.innerText = text;
    wrapper.appendChild(bubble);
  }

  chatWindow.appendChild(wrapper);
  
  requestAnimationFrame(() => {
    chatWindow.scrollTop = chatWindow.scrollHeight;
  });
}

function displayNode(nodeKey) {
  const node = story[nodeKey];
  if (!node) return;

  // 路線判定節點
  if (node.type === "route_check") {
    if (currentCareRoute === "Fa") {
      displayNode("Fa_start");
    } else {
      displayNode("Fb_start");
    }
    return;
  }

  // 一般分流節點：branch() 回傳下一個節點名稱
  if (node.type === "branch") {
    displayNode(node.branch());
    return;
  }

  optionsContainer.innerHTML = '';
  const type = node.type || 'left';

  // 進入全黑背景（之後一直維持到遊戲重新開始）
  if (node.darkMode) {
    document.getElementById('phone-wrapper').classList.add('dark-mode');
  }
  if (node.setEnding) {
    endingRoute = node.setEnding;
  }
  
  // 進入見面場景後，就不再顯示「對方正在輸入...」
  if (node.meetInPerson) {
    isChatting = false;
  }

  // 節點層級的路線設定（例如 F12_self_4 / F22_self_4 的 setRoute）
  if (node.setRoute) {
    currentCareRoute = node.setRoute;
  }
  if (node.setPayRoute) {
    payRoute = node.setPayRoute;
  }

  // 取得動態文字（若有）；沒有文字的節點（只有選項）就不送出訊息
  const displayText = node.text_fn ? node.text_fn() : node.text;
  const hasText = displayText !== undefined && displayText !== null && displayText !== '';

  // 切換綠衣狗狗的聊天室情境背景色調
  const phoneWrapper = document.getElementById('phone-wrapper');
  if (type === 'green_dog' || nodeKey === 'green_dog_intro') {
    phoneWrapper.classList.add('green-dog-mode');
  } else {
    phoneWrapper.classList.remove('green-dog-mode');
  }

  const handleRender = () => {
    // seq：同一個說話者連續自動送出多則訊息（可含 { pause } 停頓、{ card } 網站縮圖）
    const seq = node.seq_fn ? node.seq_fn() : node.seq;
    if (seq && seq.length > 0) {
      if (hasText) addMessage(displayText, type);
      playSeq(seq, type, node.seqGap || 1100, () => {
        if (node.delayNext) {
          setTimeout(() => displayNode(node.next), node.delayNext);
        } else {
          renderOptions(node.options);
        }
      });
      return;
    }

    if (type === 'system') {
      if (hasText) addMessage(displayText, 'system');
      if (node.delayNext) {
        setTimeout(() => displayNode(node.next), node.delayNext);
      } else {
        renderOptions(node.options);
      }
    } else if (type === 'green_dog') {
      if (hasText) addMessage(displayText, 'green_dog');
      
      if (node.autoSendGreenDog && node.autoSendGreenDog.length > 0) {
        node.autoSendGreenDog.forEach((msgText, idx) => {
          setTimeout(() => {
            addMessage(msgText, 'green_dog');
          }, (idx + 1) * 800);
        });
        setTimeout(() => {
          if (node.delayNext) {
            displayNode(node.next);
          } else {
            renderOptions(node.options);
          }
        }, (node.autoSendGreenDog.length + 1) * 800);
      } else {
        if (node.delayNext) {
          setTimeout(() => displayNode(node.next), node.delayNext);
        } else {
          renderOptions(node.options);
        }
      }
    } else {
      if (hasText) addMessage(displayText, type); // left（對方）、clerk（店員）、machine（機器）
      
      if (node.delayNext) {
        setTimeout(() => {
          displayNode(node.next);
        }, node.delayNext);
      } else {
        renderOptions(node.options);
      }
    }
  };

  if (node.delayStart) {
    setTimeout(handleRender, node.delayStart);
  } else {
    handleRender();
  }
}

function playSeq(items, type, gap, done) {
  let t = 0;
  items.forEach(item => {
    if (typeof item === 'object' && item.pause) {
      t += item.pause;
      return;
    }
    setTimeout(() => {
      if (typeof item === 'object' && item.card) {
        addLinkCard(type);
      } else {
        addMessage(item, type);
      }
    }, t);
    t += gap;
  });
  setTimeout(done, t);
}

// 「（網站的縮圖）」：聊天中的連結預覽卡片
function addLinkCard(type) {
  const wrapper = document.createElement('div');
  wrapper.className = `message-wrapper ${type}`;
  wrapper.innerHTML = `
    <div class="bubble link-card-bubble">
      <div class="link-card">
        <div class="link-card-thumb">🐾</div>
        <div class="link-card-body">
          <div class="link-card-title">認識無浪漫：七個你可能想知道的事</div>
          <div class="link-card-site">性別狗勾吠叫中！</div>
        </div>
      </div>
    </div>`;
  chatWindow.appendChild(wrapper);
  requestAnimationFrame(() => {
    chatWindow.scrollTop = chatWindow.scrollHeight;
  });
}

// ================= 手機內的無浪漫網誌 =================
function openBlog() {
  const blog = document.getElementById('blog-overlay');
  const btn = document.getElementById('blog-end-btn');
  optionsContainer.innerHTML = '';
  btn.classList.remove('show');
  blog.scrollTop = 0;
  blog.style.display = 'block';
  checkBlogBottom();
}

function checkBlogBottom() {
  const blog = document.getElementById('blog-overlay');
  if (blog.scrollTop + blog.clientHeight >= blog.scrollHeight - 30) {
    document.getElementById('blog-end-btn').classList.add('show');
  }
}

function closeBlog() {
  document.getElementById('blog-overlay').style.display = 'none';
  showEndMenu();
}

// ================= 看完網誌後的全黑結尾頁 =================
function showEndPanel(panelId) {
  const overlay = document.getElementById('end-overlay');
  overlay.querySelectorAll('.end-panel').forEach(p => {
    p.style.display = (p.id === panelId) ? 'flex' : 'none';
  });
  overlay.style.display = 'flex';
  overlay.scrollTop = 0;
}

function showEndMenu() {
  showEndPanel('end-menu');
}

// 「再看一下狗狗在看什麼」：回到網誌，看完後一樣回到結尾選單
function reopenBlog() {
  document.getElementById('end-overlay').style.display = 'none';
  openBlog();
}

// 「看其他文章」：先跳出確認視窗
function confirmLeave() {
  modalContent.innerHTML = `
    <h3>提醒</h3>
    <p>將離開遊戲畫面，是否確定跳轉？</p>
    <div class="ios-btn-group">
      <button class="ios-btn ios-btn-divider" onclick="cancelLeave()">否</button>
      <button class="ios-btn" onclick="leaveToBlog()">是</button>
    </div>
  `;
  modalOverlay.style.display = 'flex';
}

function leaveToBlog() {
  window.location.href = 'https://the-golden-the-queer.github.io/blog.html';
}

function cancelLeave() {
  modalOverlay.style.display = 'none';
}

function renderOptions(options) {
  if (!options || options.length === 0) return;
  // showIf：依前面路線決定要不要顯示這個選項
  options = options.filter(opt => !opt.showIf || opt.showIf());
  options.forEach(opt => {
    const btn = document.createElement('button');
    const optText = opt.text_fn ? opt.text_fn() : opt.text;
    btn.innerText = optText;
    
    btn.onclick = () => {
      // 只在使用者真的點了這個選項時才套用設定
      if (opt.setBreed) {
        dogBreed = opt.setBreed;
      }
      if (opt.setRoute) {
        currentCareRoute = opt.setRoute;
      }
      if (opt.setPainAway) {
        saidPainAway = true; // 選過「痛痛跟細菌都飛走囉」→ 之後走抱抱路線
      }

      if (opt.openBlog) {
        openBlog();
        return;
      }

      if (opt.triggerGreenDog) {
        displayNode(opt.triggerGreenDog);
        return;
      }

      if (opt.clearChat && chatWindow) {
        chatWindow.innerHTML = '';
      }

      // silent：不把選項文字當成訊息送出（例如轉場按鈕）
      if (opt.silent) {
        if (opt.clearChat) {
          optionsContainer.innerHTML = '';
          setTimeout(() => displayNode(opt.next), 600);
        } else {
          showWaiting();
          setTimeout(() => displayNode(opt.next), 1000);
        }
        return;
      }

      if (opt.text !== "繼續") {
        showWaiting();

        if (opt.autoSend && opt.autoSend.length > 0) {
          // 一般字串每則間隔 0.4 秒；{ pause: 毫秒 } 代表停頓
          let t = 0;
          opt.autoSend.forEach(item => {
            if (typeof item === 'object' && item.pause) {
              t += item.pause;
              return;
            }
            setTimeout(() => {
              addMessage(item, 'right');
            }, t);
            t += 400;
          });

          setTimeout(() => {
            displayNode(opt.next);
          }, t + 800);

        } else {
          addMessage(optText, 'right');
          setTimeout(() => displayNode(opt.next), 1000);
        }
      } else {
        displayNode(opt.next);
      }
    };
    optionsContainer.appendChild(btn);
  });
}

function startSetup() {
  document.getElementById('paving-overlay').style.display = 'none';
  openModal1();
}

function openModal1() {
  modalContent.innerHTML = `
    <h3>設定角色資訊</h3>
    <p>請輸入你的基本設定以開始體驗</p>
    <div class="ios-field-group">
      <label for="input-name">你的名字</label>
      <input type="text" id="input-name" class="ios-input" placeholder="名字" value="皮卡丘">
    </div>
    <div class="ios-btn-group">
      <button class="ios-btn" onclick="submitModal1()">輸入完畢</button>
    </div>
  `;
  modalOverlay.style.display = 'flex';
}

function submitModal1() {
  const nameInput = document.getElementById('input-name').value.trim();

  if (nameInput) userName = nameInput;

  openModal2();
}

function openModal2() {
  modalContent.innerHTML = `
    <h3>確認設定</h3>
    <p style="text-align: center; margin-bottom: 16px;">
      名字：<strong>${userName}</strong>
    </p>
    <div class="ios-btn-group">
      <button class="ios-btn" onclick="loginGame()">登入</button>
    </div>
  `;
}

function loginGame() {
  modalOverlay.style.display = 'none';
  isChatting = true; // 從頭開始時回到傳訊息階段
  payRoute = "";
  endingRoute = "";
  saidPainAway = false;
  currentCareRoute = "Fa";
  document.getElementById('phone-wrapper').classList.remove('dark-mode');
  displayNode('main_start');
}

document.addEventListener('DOMContentLoaded', () => {
  chatWindow = document.getElementById('chat-window');
  optionsContainer = document.getElementById('options-container');
  modalOverlay = document.getElementById('modal-overlay');
  modalContent = document.getElementById('modal-content');

  // 網誌滑到底才出現按鈕
  document.getElementById('blog-overlay').addEventListener('scroll', checkBlogBottom);
});