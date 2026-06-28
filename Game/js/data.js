const units = [
  {
    id: 1,
    name: "Unit 1 - Basic Vocabulary",
    lessons: [{
      questions: [
        { q: "What is the meaning of - agree", options: ["موافق بودن","الکل","سفر کردن","دعوت کردن"], correct: "موافق بودن" },
        { q: "What is the meaning of - alcohol", options: ["آب","الکل","چای","قهوه"], correct: "الکل" },
        { q: "What is the meaning of - arrive", options: ["رسیدن","رفتن","دیدن","خوردن"], correct: "رسیدن" },
        { q: "What is the meaning of - August", options: ["ماه آگست","ماه مارچ","ماه جون","ماه جولای"], correct: "ماه آگست" },
        { q: "What is the meaning of - boat", options: ["قایق","خانه","موتر","بس"], correct: "قایق" },
        { q: "What is the meaning of - breakfast", options: ["صبحانه","شام","نهار","چای"], correct: "صبحانه" },
        { q: "What is the meaning of - camera", options: ["کمره","کتاب","قلم","ساعت"], correct: "کمره" },
        { q: "What is the meaning of - capital", options: ["دهکده","پایتخت","شهر","کشور"], correct: "پایتخت" },
        { q: "What is the meaning of - catch", options: ["گرفتن","رفتن","دویدن","خوردن"], correct: "گرفتن" },
        { q: "What is the meaning of - duck", options: ["مرغابی","ماهی","مرغ","گاو"], correct: "مرغابی" },
        { q: "What is the meaning of - enjoy", options: ["لذت بردن","گریه","خواب","ترس"], correct: "لذت بردن" },
        { q: "What is the meaning of - invite", options: ["دعوت کردن","رفتن","خوردن","دیدن"], correct: "دعوت کردن" },
        { q: "What is the meaning of - love", options: ["نفرت","دوست داشتن","ترس","تنهایی"], correct: "دوست داشتن" },
        { q: "What is the meaning of - month", options: ["روز","ماه","سال","هفته"], correct: "ماه" },
        { q: "What is the meaning of - travel", options: ["سفر کردن","خوابیدن","نوشتن","خواندن"], correct: "سفر کردن" },
        { q: "What is the meaning of - typical", options: ["خاص","معمولی","عجیب","سخت"], correct: "معمولی" },
        { q: "What is the meaning of - visit", options: ["دیدار کردن","رفتن","دویدن","خریدن"], correct: "دیدار کردن" },
        { q: "What is the meaning of - weather", options: ["آب و هوا","زمین","آسمان","باران"], correct: "آب و هوا" },
        { q: "What is the meaning of - week", options: ["ماه","سال","هفته","روز"], correct: "هفته" },
        { q: "What is the meaning of - wine", options: ["آب","شراب","شیر","چای"], correct: "شراب" }
      ]
    }]
  },

  {
    id: 2,
    name: "Unit 2 - Adventure Words",
    lessons: [{
      questions: [
        { q: "adventure", options: ["ماجراجویی","آرامش","ترس","خواب"], correct: "ماجراجویی" },
        { q: "approach", options: ["نزدیک شدن","رفتن","خوردن","دیدن"], correct: "نزدیک شدن" },
        { q: "carefully", options: ["با دقت","سریع","آرام","بلند"], correct: "با دقت" },
        { q: "chemical", options: ["مواد شیمیایی","آب","خاک","هوا"], correct: "مواد شیمیایی" },
        { q: "create", options: ["ساختن","خراب کردن","رفتن","دیدن"], correct: "ساختن" },
        { q: "evil", options: ["شرور","خوب","آرام","شاد"], correct: "شرور" },
        { q: "experiment", options: ["آزمایش","بازی","کار","سفر"], correct: "آزمایش" },
        { q: "kill", options: ["کشتن","زنده کردن","خوابیدن","رفتن"], correct: "کشتن" },
        { q: "laboratory", options: ["لابراتوار","خانه","مدرسه","بازار"], correct: "لابراتوار" },
        { q: "laugh", options: ["خنده","گریه","ترس","خواب"], correct: "خنده" },
        { q: "loud", options: ["بلند","آرام","کوچک","سرد"], correct: "بلند" },
        { q: "nervous", options: ["مضطرب","آرام","شاد","قوی"], correct: "مضطرب" },
        { q: "noise", options: ["سروصدا","آرامش","سکوت","نور"], correct: "سروصدا" },
        { q: "project", options: ["پروژه","خانه","کتاب","ماشین"], correct: "پروژه" },
        { q: "scare", options: ["ترساندن","خنداندن","خواب","رفتن"], correct: "ترساندن" },
        { q: "shout", options: ["جیغ زدن","خندیدن","نشستن","رفتن"], correct: "جیغ زدن" },
        { q: "smell", options: ["بو کردن","دیدن","شنیدن","خوردن"], correct: "بو کردن" },
        { q: "terrible", options: ["وحشتناک","خوب","زیبا","آرام"], correct: "وحشتناک" },
        { q: "worse", options: ["بدتر","بهتر","خوب","عالی"], correct: "بدتر" }
      ]
    }]
  },

  {
    id: 3,
    name: "Unit 3 - Science & Space",
    lessons: [{
      questions: [
        { q: "alien", options: ["بیگانه","انسان","حیوان","گیاه"], correct: "بیگانه" },
        { q: "among", options: ["در میان","بالای","پایین","کنار"], correct: "در میان" },
        { q: "chart", options: ["نمودار","کتاب","خانه","درخت"], correct: "نمودار" },
        { q: "cloud", options: ["ابر","آب","هوا","زمین"], correct: "ابر" },
        { q: "describe", options: ["توصیف کردن","رفتن","خوردن","دیدن"], correct: "توصیف کردن" },
        { q: "ever", options: ["تا به حال","هرگز","همیشه","بعضی وقت"], correct: "تا به حال" },
        { q: "fail", options: ["ناکام شدن","موفق شدن","رفتن","خوابیدن"], correct: "ناکام شدن" },
        { q: "grade", options: ["نمره","کتاب","خانه","قلم"], correct: "نمره" },
        { q: "instead", options: ["به‌جای","در","بالا","پایین"], correct: "به‌جای" },
        { q: "library", options: ["کتابخانه","مدرسه","بازار","خانه"], correct: "کتابخانه" },
        { q: "photograph", options: ["عکس","فیلم","صدا","کتاب"], correct: "عکس" },
        { q: "planet", options: ["سیاره","ستاره","ماه","خورشید"], correct: "سیاره" },
        { q: "report", options: ["گزارش","نامه","دفتر","کتاب"], correct: "گزارش" },
        { q: "several", options: ["چندین","یک","هیچ","زیاد"], correct: "چندین" },
        { q: "shape", options: ["شکل","رنگ","نور","صدا"], correct: "شکل" },
        { q: "solve", options: ["حل کردن","پرسیدن","رفتن","دیدن"], correct: "حل کردن" },
        { q: "suddenly", options: ["ناگهان","آرام","سریع","کم کم"], correct: "ناگهان" },
        { q: "suppose", options: ["فرض کردن","دانستن","رفتن","دیدن"], correct: "فرض کردن" },
        { q: "understand", options: ["فهمیدن","نشنیدن","دیدن","رفتن"], correct: "فهمیدن" },
        { q: "view", options: ["منظره","خانه","کتاب","درخت"], correct: "منظره" }
      ]
    }]
  },

  {
    id: 4,
    name: "Unit 4 - Behavior & Society",
    lessons: [{
      questions: [
        { q: "appropriate", options: ["مناسب","بد","سخت","زیبا"], correct: "مناسب" },
        { q: "avoid", options: ["اجتناب کردن","رفتن","خوردن","دیدن"], correct: "اجتناب کردن" },
        { q: "behave", options: ["رفتار کردن","رفتن","خوردن","دیدن"], correct: "رفتار کردن" },
        { q: "calm", options: ["آرام","عصبانی","ترس","شاد"], correct: "آرام" },
        { q: "concern", options: ["نگرانی","آرامش","خواب","نور"], correct: "نگرانی" },
        { q: "content", options: ["راضی","ناراضی","عصبانی","ترس"], correct: "راضی" },
        { q: "expect", options: ["انتظار داشتن","رفتن","خوردن","دیدن"], correct: "انتظار داشتن" },
        { q: "frequently", options: ["مکرراً","هرگز","کم","یکبار"], correct: "مکرراً" },
        { q: "habit", options: ["عادت","خانه","کتاب","درخت"], correct: "عادت" },
        { q: "instruct", options: ["آموزش دادن","رفتن","دیدن","خوردن"], correct: "آموزش دادن" },
        { q: "issue", options: ["موضوع","خانه","کتاب","درخت"], correct: "موضوع" },
        { q: "none", options: ["هیچ","همه","زیاد","کم"], correct: "هیچ" },
        { q: "patient", options: ["صبور","عجول","بد","قوی"], correct: "صبور" },
        { q: "positive", options: ["مثبت","منفی","بد","سخت"], correct: "مثبت" },
        { q: "punish", options: ["مجازات کردن","تشویق","رفتن","دیدن"], correct: "مجازات کردن" },
        { q: "represent", options: ["نمایندگی کردن","رفتن","خوردن","دیدن"], correct: "نمایندگی کردن" },
        { q: "shake", options: ["تکان دادن","نشستن","رفتن","خوردن"], correct: "تکان دادن" },
        { q: "spread", options: ["پخش کردن","جمع کردن","رفتن","دیدن"], correct: "پخش کردن" },
        { q: "stroll", options: ["قدم زدن","دویدن","خوابیدن","رفتن"], correct: "قدم زدن" },
        { q: "village", options: ["روستا","شهر","کشور","خانه"], correct: "روستا" }
      ]
    }]
  },

  {
    id: 5,
    name: "Unit 5 - Daily Life",
    lessons: [{
      questions: [
        { q: "active", options: ["فعال","خسته","بد","سرد"], correct: "فعال" },
        { q: "adult", options: ["بالغ","کودک","نوجوان","پیر"], correct: "بالغ" },
        { q: "age", options: ["سن","قد","وزن","نام"], correct: "سن" },
        { q: "bad", options: ["بد","خوب","زیبا","شاد"], correct: "بد" },
        { q: "balance", options: ["تعادل","قدرت","سرعت","نور"], correct: "تعادل" },
        { q: "bike", options: ["بایسکل","موتر","بس","خانه"], correct: "بایسکل" },
        { q: "doctor", options: ["داکتر","معلم","مهندس","راننده"], correct: "داکتر" },
        { q: "football", options: ["فوتبال","والیبال","بسکتبال","تنیس"], correct: "فوتبال" },
        { q: "game", options: ["بازی","کار","خانه","کتاب"], correct: "بازی" },
        { q: "heart", options: ["قلب","مغز","دست","پا"], correct: "قلب" },
        { q: "life", options: ["زندگی","مرگ","خواب","نور"], correct: "زندگی" },
        { q: "often", options: ["اغلب","هرگز","کم","گاهی"], correct: "اغلب" },
        { q: "weight", options: ["وزن","قد","سن","رنگ"], correct: "وزن" }
      ]
    }]
  },

  {
    id: 6,
    name: "Unit 6 - Advanced Words",
    lessons: [{
      questions: [
        { q: "apart", options: ["جدا","باهم","نزدیک","بالا"], correct: "جدا" },
        { q: "bilingual", options: ["دوزبانه","یک زبانه","بی‌زبان","کم‌زبان"], correct: "دوزبانه" },
        { q: "completely", options: ["کاملاً","کم","زیاد","نیمه"], correct: "کاملاً" },
        { q: "foreign", options: ["خارجی","داخلی","محلی","قدیمی"], correct: "خارجی" },
        { q: "mirror", options: ["آینه","در","کتاب","خانه"], correct: "آینه" },
        { q: "natural", options: ["طبیعی","مصنوعی","بد","سخت"], correct: "طبیعی" },
        { q: "sport", options: ["ورزش","بازی","کار","درس"], correct: "ورزش" },
        { q: "surprised", options: ["متعجب","عصبانی","شاد","خسته"], correct: "متعجب" },
        { q: "tense", options: ["مضطرب","آرام","شاد","قوی"], correct: "مضطرب" },
        { q: "allow", options: ["اجازه دادن","ممانعت","رفتن","دیدن"], correct: "اجازه دادن" },
        { q: "announce", options: ["اعلام کردن","پنهان کردن","رفتن","خوردن"], correct: "اعلام کردن" },
        { q: "challenge", options: ["چالش","آسانی","خواب","نور"], correct: "چالش" },
        { q: "protect", options: ["محافظت کردن","خراب کردن","رفتن","دیدن"], correct: "محافظت کردن" },
        { q: "peace", options: ["صلح","جنگ","نفرت","ترس"], correct: "صلح" }
      ]
    }]
  }
];