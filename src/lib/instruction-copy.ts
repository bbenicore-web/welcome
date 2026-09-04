import type { Locale } from "@/lib/i18n";

export type InstructionCopy = {
  hero: string;
  download: string;
  gainTitle: string;
  gainSub: string;
  widgets: { href: string; label: string }[];
  share: string;
  productKicker: string;
  productCta: string;
  benefits: { title: string; text: string }[];
  howTitle: string;
  step1Title: string;
  step1Text: string;
  placeTitle: string;
  placeText: string;
  placeBtn: string;
  bringTitle: string;
  bring: { title: string; text: string }[];
  translateBtn: string;
  step2Title: string;
  step2Items: { title: string; text: string }[];
  bioTitle: string;
  bioText: string;
  bring2Title: string;
  bring2: { title: string; text: string }[];
  step3Title: string;
  step3Text: string;
  step3Items: { title: string; text: string; note?: string }[];
  step4Title: string;
  step4Items: { title: string; text: string; btn: string }[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  leadTitle: string;
  leadText: string;
  apply: string;
};

const ru: InstructionCopy = {
  hero: "Сим-карта и документы за один визит",
  download: "Скачать инструкцию",
  gainTitle: "Оформите тариф МегаФон",
  gainSub:
    "Как оформить документы и получить сим-карту с тарифом «Минимум +» или «Семейный +»?",
  widgets: [
    { href: "#snils", label: "Получите СНИЛС" },
    { href: "#getsim", label: "Получите документы и сим-карту" },
    { href: "#activation", label: "Активируйте сим-карту" },
    { href: "#payment", label: "Оплатите тариф" },
  ],
  share: "Поделиться инструкцией",
  productKicker: "Тарифы витрины из ТЗ",
  productCta: "Как оформить тариф",
  benefits: [
    {
      title: "«Тёплый приём» сам",
      text: "Выгодные минуты в СНГ и Китай. Подключается автоматически всем нерезидентам — отдельно ничего жать не нужно.",
    },
    {
      title: "Мессенджеры и связь с близкими",
      text: "Общайтесь с родными в доступных в РФ мессенджерах. На «Семейный +» интернета хватает на видео и национальные сайты.",
    },
    {
      title: "100 международных минут",
      text: "Пакет на МегаФон Таджикистан, Узбекистан, Киргизию, Армению, Казахстан, Китай, Индию, Пакистан. Подключить: USSD, приложение, салон.",
    },
    {
      title: "+10 ГБ, если платите вовремя",
      text: "На «Минимум +» и пакетных тарифах интернет капает сам, когда плата приходит в срок.",
    },
    {
      title: "Бонусы за переводы в СНГ",
      text: "Только в салоне МегаФона, не в приложении. От 30 000 ₽ — 50 международных минут. От 50 000 ₽ — месяц связи. Дальше — три месяца и полгода.",
    },
    {
      title: "МегаСемья до 5 человек",
      text: "На «Семейный +»: безлимитный интернет и делёжка тарифа. Кто уезжал на сезон — «+20 ГБ за возврат» до 6 месяцев.",
    },
  ],
  howTitle: "Как оформить документы и сим-карту",
  step1Title: "Получите СНИЛС",
  step1Text:
    "СНИЛС — это страховой номер индивидуального лицевого счёта. Его можно получить в МФЦ (Мои документы) или СФР (Социальный фонд России). Туда нужно прийти лично и взять с собой документы. Документ будет готов сразу. В редких случаях процесс может занять до 5 рабочих дней.",
  placeTitle: "МФЦ, СФР или банк — затем салон МегаФон",
  placeText:
    "СНИЛС, регистрацию на Госуслугах и биометрию делают в МФЦ, Социальном фонде или банке. Сим-карту МегаФон оформляют очно в салоне: договор, IMEI телефона, не больше 10 номеров на человека.",
  placeBtn: "Оставить заявку на салон",
  bringTitle: "Что нужно взять с собой",
  bring: [
    {
      title: "Документ о пребывании в РФ",
      text: "Миграционная карта, временная регистрация или ВНЖ",
    },
    {
      title: "Оригинал паспорта",
      text: "и его заверенный перевод, который можно сделать в бюро переводов",
    },
    {
      title: "Мобильный телефон и электронная почта",
      text: "для установки сим-карты и подтверждения данных на портале Госуслуги",
    },
  ],
  translateBtn: "Бюро переводов на карте",
  step2Title: "Получите документы и сим-карту",
  step2Items: [
    {
      title: "Обратитесь за помощью к сотруднику МФЦ, СФР или банка",
      text: "Он поможет оформить СНИЛС, зарегистрироваться на Госуслугах и возьмёт биометрию — лицо и голос.",
    },
    {
      title: "Оформите сим-карту в салоне МегаФон",
      text: "Скажите, что нужна первая SIM в России и тариф «Минимум +» или «Семейный +». «Тёплый приём» включится сам.",
    },
    {
      title: "Назовите IMEI телефона",
      text: "Его впишут в договор. На одного человека — не больше 10 номеров у всех операторов.",
    },
    {
      title: "Оформите карту банка РФ",
      text: "Карта понадобится для пополнения сим-карты и других покупок. Это можно сделать в банке в тот же день.",
    },
  ],
  bioTitle: "Рекомендуем подготовиться к сдаче биометрии",
  bioText: "Сотрудник банка попросит вас произнести несколько цифр",
  bring2Title: "Что нужно взять с собой в салон",
  bring2: [
    {
      title: "Документ о пребывании в РФ",
      text: "Миграционная карта, временная регистрация или ВНЖ",
    },
    {
      title: "Оригинал паспорта",
      text: "и его заверенный перевод, который можно сделать в бюро переводов",
    },
    {
      title: "СНИЛС",
      text: "оформленный ранее через МФЦ или СФР (шаг 1)",
    },
    {
      title: "Мобильный телефон и электронная почта",
      text: "для установки сим-карты и подтверждения данных на портале Госуслуги",
    },
  ],
  step3Title: "Активируйте сим-карту",
  step3Text: "После сдачи биометрии и регистрации на Госуслугах",
  step3Items: [
    {
      title: "Войдите на Госуслуги",
      text: "через любое устройство с камерой: смартфон, планшет, ноутбук",
      note: "Если у вас нет устройства с камерой, вы можете воспользоваться компьютером в МФЦ",
    },
    {
      title: "Перейдите в раздел «Уведомления»",
      text: "через меню в левом верхнем углу",
    },
    {
      title: "Откройте уведомление о подтверждении личности",
      text: "и следуйте инструкциям",
    },
    {
      title: "Привяжите номер МегаФон",
      text: "к учётной записи на Госуслугах",
    },
  ],
  step4Title: "Оплатите тариф",
  step4Items: [
    {
      title: "В салоне МегаФон",
      text: "Пополните баланс на кассе или через перевод в салоне — так же копятся бонусы за переводы в СНГ",
      btn: "Оставить заявку",
    },
    {
      title: "На сайте МегаФон",
      text: "Быстро, без отдельной кассы",
      btn: "Оплатить на сайте",
    },
    {
      title: "Через мобильное приложение",
      text: "Скачайте и оплатите со смартфона",
      btn: "Скачать приложение",
    },
  ],
  faqTitle: "Вопросы и ответы",
  faq: [
    {
      q: "Что входит в тарифы витрины?",
      a: "«Минимум +» — базовый: от 850 ₽, 400 минут по России, интернет в пакете, безлимит на МегаФон России, когда минуты закончились, +10 ГБ за оплату вовремя. «Семейный +» — максимальный: от 1 140 ₽, 1 500 минут, безлимитный интернет, МегаСемья до 5 человек, видеосервисы и сайты страны, откуда вы приехали. «Тёплый приём» подключается сам. 100 международных минут — по желанию.",
    },
    {
      q: "Где узнать о тарифе подробнее?",
      a: "Точные условия — в салоне МегаФон и на megafon.ru. Цены на этой странице ориентировочные, по Москве, с НДС.",
    },
    {
      q: "Как получить дополнительные гигабайты?",
      a: "Платите «Минимум +» вовремя — приходят +10 ГБ. Если уезжали на сезон и вернулись на тариф — +20 ГБ до 6 месяцев. Бонусы за переводы в СНГ дают только в салоне МегаФона, не в приложении.",
    },
    {
      q: "Как изменить IMEI в договоре?",
      a: "Вставьте сим-карту в новое устройство, откройте приложение МегаФон, нажмите «Обновить» и подтвердите личность на Госуслугах.",
    },
    {
      q: "Что будет с моим счётом, когда я вернусь в свою страну?",
      a: "Счёт останется открытым и сохранится за вами. Чтобы закрыть счёт, обратитесь в поддержку или салон.",
    },
    {
      q: "Что будет с моей сим-картой, когда я вернусь в свою страну?",
      a: "Сим-карта будет активна, если вы пополняете баланс минимум раз в 6 месяцев. Если не пополнить вовремя, номер заблокируют. Чтобы разблокировать — напишите в поддержку. При возврате на тариф может подключиться «+20 ГБ за возврат».",
    },
  ],
  leadTitle: "Подскажем, куда идти за СНИЛС и в какой салон",
  leadText:
    "Оставьте номер. Перезвоним, скажем, что взять с собой и где сдать биометрию рядом с вами.",
  apply: "Оставить заявку",
};

const uz: InstructionCopy = {
  hero: "Chet el fuqarosi SIM-kartani qanday olishi mumkin?",
  download: "Yo‘riqnomani yuklab olish",
  gainTitle: "MegaFon tarifini rasmiylashtiring",
  gainSub:
    "Hujjatlarni qanday rasmiylashtirish va «Minimum +» yoki «Oilaviy +» tarifi bilan SIM-karta olish mumkin?",
  widgets: [
    { href: "#snils", label: "ShIHSR ni oling" },
    { href: "#getsim", label: "Hujjatlar va SIM-karta oling" },
    { href: "#activation", label: "SIM-kartani faollashtiring" },
    { href: "#payment", label: "Tarifni to'lang" },
  ],
  share: "Ko'rsatmalarni baham ko'ring",
  productKicker: "TZ dagi tariflar",
  productCta: "Tarifni qanday rasmiylashtirish mumkin",
  benefits: [
    {
      title: "«Iliq kutib olish» o‘zi ulanadi",
      text: "MDH va Xitoyga foydali daqiqalar. Barcha norezidentlarga avtomatik.",
    },
    {
      title: "Messenjerlar va yaqinlar",
      text: "RF da ishlaydigan messenjerlarda gaplashing. «Oilaviy +» da video va milliy saytlar uchun internet yetadi.",
    },
    {
      title: "100 xalqaro daqiqa",
      text: "Tojikiston, O‘zbekiston, Qirg‘iziston, Armaniston, Qozog‘iston, Xitoy, Hindiston, Pokiston MegaFoniga. USSD, ilova yoki salon.",
    },
    {
      title: "O‘z vaqtida to‘lasangiz +10 GB",
      text: "«Minimum +» va paketli tariflarda internet o‘zi qo‘shiladi.",
    },
    {
      title: "MDH ga o‘tkazmalar uchun bonuslar",
      text: "Faqat MegaFon salonida, ilovada emas. 30 000 ₽ dan — 50 xalqaro daqiqa.",
    },
    {
      title: "MegaOila 5 kishigacha",
      text: "«Oilaviy +»: cheksiz internet. Mavsumdan qaytsangiz — +20 GB, 6 oygacha.",
    },
  ],
  howTitle: "Hujjatlar va SIM-kartani qanday rasmiylashtirish",
  step1Title: "ShIHSR ni oling",
  step1Text:
    "ShIHSR - bu shaxsiy individual hisob raqamning sug’urta raqami. Uni KFM (mening hujjatlarim) yoki RIJ (Rossiya Ijtimoiy Jamg‘armasi) da olish mumkin. U yerga shaxsan tashrif buyurishingiz va o’zingiz bilan hujjatlarni olib kelishingiz kerak. Hujjat darhol tayyor bo’ladi. Kamdan kam hollarda jarayon 5 ish kunigacha davom etishi mumkin.",
  placeTitle: "KFM, RIJ yoki bank — keyin MegaFon saloni",
  placeText:
    "ShIHSR, Gosuslugi va biometriya — KFM, jamg‘arma yoki bankda. MegaFon SIM-kartasi salonida: shartnoma, telefon IMEI, odamga 10 ta raqamdan oshmasin.",
  placeBtn: "Salon uchun ariza qoldiring",
  bringTitle: "O'zingiz bilan nima olishingiz kerak",
  bring: [
    {
      title: "Rossiya Federatsiyasiga kelish to'g'risidagi hujjat",
      text: "Migratsiya kartasi, vaqtinchalik ro’yxatdan o’tish yoki yashash uchun ruxsatnoma",
    },
    {
      title: "Pasport asli",
      text: "va uning tarjima agentligida amalga oshirilishi mumkin bo'lgan tasdiqlangan tarjimasi",
    },
    {
      title: "Mobil telefon va elektron pochta",
      text: "SIM-kartani o'rnatish va Davlat xizmatlari portalida ma'lumotlarni tasdiqlash uchun",
    },
  ],
  translateBtn: "Xaritadagi tarjima byurosi",
  step2Title: "Hujjatlar va SIM-karta oling",
  step2Items: [
    {
      title: "KFM, RIJ yoki bank xodimiga murojaat qiling",
      text: "U ShIHSR, Gosuslugi va biometriyani — yuz va ovozni rasmiylashtirishga yordam beradi.",
    },
    {
      title: "MegaFon salonida SIM-karta oling",
      text: "Rossiyada birinchi SIM va «Minimum +» yoki «Oilaviy +» kerakligini ayting. «Iliq kutib olish» o‘zi ulanadi.",
    },
    {
      title: "Telefon IMEI sini ayting",
      text: "Shartnomaga yoziladi. Barcha operatorlarda odamga 10 ta raqamdan oshmasin.",
    },
    {
      title: "RF bank kartasini rasmiylashtiring",
      text: "SIM ni to‘ldirish uchun kerak. Bankda shu kuni qilish mumkin.",
    },
  ],
  bioTitle:
    "Biometrik ma'lumotlarni topshirishga tayyorgarlik ko'rishingizni tavsiya qilamiz",
  bioText: "Bank xodimi sizdan bir nechta raqamlarni aytib berishingizni so'raydi",
  bring2Title: "Salonga nima olib borish kerak",
  bring2: [
    {
      title: "Rossiya Federatsiyasiga kelish to'g'risidagi hujjat",
      text: "Migratsiya kartasi, vaqtinchalik ro’yxatdan o’tish yoki yashash uchun ruxsatnoma",
    },
    {
      title: "Pasport asli",
      text: "va tasdiqlangan tarjimasi",
    },
    {
      title: "ShIHSR",
      text: "ilgari KFM yoki RIJ orqali rasmiylashtirilgan (1-qadam)",
    },
    {
      title: "Mobil telefon va elektron pochta",
      text: "SIM-kartani o'rnatish va Davlat xizmatlari portalida ma'lumotlarni tasdiqlash uchun",
    },
  ],
  step3Title: "SIM-kartani faollashtiring",
  step3Text: "Biometrik ma'lumotlarni topshirgandan va Davlat xizmatlarida ro'yxatdan o'tgandan so'ng",
  step3Items: [
    {
      title: "Gosuslugiga kiring",
      text: "Kamerali har qanday qurilma orqali: smartfon, planshet, noutbuk",
      note: "Agar sizda kamerali qurilma bo'lmasa, KFM da kompyuterdan foydalanishingiz mumkin",
    },
    {
      title: "«Bildirishnomalar» bo‘limiga o‘ting",
      text: "chap yuqori burchakdagi menyu orqali",
    },
    {
      title: "Shaxsni tasdiqlash bildirishnomasini oching",
      text: "va ko'rsatmalarga amal qiling",
    },
    {
      title: "MegaFon raqamingizni bog‘lang",
      text: "Davlat xizmatlaridagi hisob yozuviga",
    },
  ],
  step4Title: "Tarifni to'lang",
  step4Items: [
    {
      title: "MegaFon salonida",
      text: "Kassada yoki salon orqali o‘tkazmada to‘ldiring — MDH bonuslari ham shu yerda",
      btn: "Ariza qoldirish",
    },
    {
      title: "MegaFon saytida",
      text: "Tez va alohida kassasiz",
      btn: "Saytda to'lash",
    },
    {
      title: "Mobil ilova orqali",
      text: "Ko'chirib oling va smartfoningizdan to'lang",
      btn: "Ilovani ko'chirib olish",
    },
  ],
  faqTitle: "Savollarga javoblar",
  faq: [
    {
      q: "Vitrina tariflariga nima kiradi?",
      a: "«Minimum +» — asosiy: 850 ₽ dan, Rossiya bo‘ylab 400 daqiqa, paket internet, o‘z vaqtida to‘lov uchun +10 GB. «Oilaviy +» — maksimal: 1 140 ₽ dan, 1 500 daqiqa, cheksiz internet, MegaOila 5 kishigacha. «Iliq kutib olish» o‘zi ulanadi.",
    },
    {
      q: "Tarif haqida batafsil qayerdan o‘qish mumkin?",
      a: "Aniq shartlar — MegaFon saloni va megafon.ru da. Bu sahifadagi narxlar Moskvaga oid, QQSli, taxminiy.",
    },
    {
      q: "Qo‘shimcha gigabaytlarni qanday olaman?",
      a: "«Minimum +» ni o‘z vaqtida to‘lang — +10 GB. Mavsumdan qaytsangiz — +20 GB, 6 oygacha. MDH o‘tkazma bonuslari faqat salonda.",
    },
    {
      q: "Shartnomada IMEI ni qanday o‘zgartirish mumkin?",
      a: "SIM ni yangi qurilmaga soling, MegaFon ilovasida «Yangilash» ni bosing va Gosuslugida shaxsni tasdiqlang.",
    },
    {
      q: "O‘z mamlakatimga qaytsam hisobimga nima bo‘ladi?",
      a: "Hisob ochiq qoladi va sizda saqlanadi. Yopish uchun yordam xizmati yoki salonga murojaat qiling.",
    },
    {
      q: "O‘z mamlakatimga qaytsam SIM-kartamga nima bo‘ladi?",
      a: "Balansni kamida 6 oyda bir marta to‘ldirsangiz, SIM faol qoladi. To‘ldirmasangiz, raqam bloklanadi. Qaytgach «+20 GB qaytish» ulanishi mumkin.",
    },
  ],
  leadTitle: "ShIHSR va yaqin salonga yo‘l ko‘rsatamiz",
  leadText:
    "Raqam qoldiring. Qo‘ng‘iroq qilamiz: nima olib borish va biometriyani qayerda topshirishni aytamiz.",
  apply: "Ariza qoldirish",
};

const tg: InstructionCopy = {
  hero: "Сим-корт ва ҳуҷҷатҳо дар як ташриф",
  download: "Дастурамалро сарборӣ кардан",
  gainTitle: "Тарофаи МегаФон ба расмият дароред",
  gainSub:
    "Чӣ тавр ҳуҷҷатҳоро ба расмият дароварда, сим-корт бо тарофаи «Минимум +» ё «Оилавӣ +» гирифтан мумкин аст?",
  widgets: [
    { href: "#snils", label: "СНИЛС гиред" },
    { href: "#getsim", label: "Ҳуҷҷатҳо ва сим-корт гиред" },
    { href: "#activation", label: "Сим-кортро фаъол кунед" },
    { href: "#payment", label: "Тарофаро пардохт кунед" },
  ],
  share: "Дастурҳоро мубодила кунед",
  productKicker: "Тарофаҳо аз ТЗ",
  productCta: "Тарофаро чӣ хел ба расмият даровардан",
  benefits: [
    {
      title: "«Қабули гарм» худ пайваст мешавад",
      text: "Дақиқаҳои судманд ба ИДМ ва Чин. Ба ҳамаи ғайрирезидентҳо худкор.",
    },
    {
      title: "Мессенҷерҳо ва наздикон",
      text: "Дар мессенҷерҳои дастрас дар РФ муошират кунед. Дар «Оилавӣ +» интернет барои видео ва сайтҳои миллӣ мерасад.",
    },
    {
      title: "100 дақиқаи байналмилалӣ",
      text: "Ба МегаФон Тоҷикистон, Ӯзбекистон, Қирғизистон, Арманистон, Қазоқистон, Чин, Ҳиндустон, Покистон. USSD, барнома, салон.",
    },
    {
      title: "+10 ГБ ҳангоми пардохти саривақт",
      text: "Дар «Минимум +» интернет худ меояд, агар ҳақро сари вақт диҳед.",
    },
    {
      title: "Бонус барои интиқол ба ИДМ",
      text: "Танҳо дар салони МегаФон, на дар барнома. Аз 30 000 ₽ — 50 дақиқаи байналмилалӣ.",
    },
    {
      title: "МегаОила то 5 нафар",
      text: "Дар «Оилавӣ +»: интернети бемаҳдуд. Аз мавсим баргардед — +20 ГБ то 6 моҳ.",
    },
  ],
  howTitle: "Чӣ тавр ҳуҷҷатҳо ва сим-кортро ба расмият даровардан",
  step1Title: "СНИЛС гиред",
  step1Text:
    "СНИЛС –– рақами суғуртаи суратҳисоби шахсии инфиродӣ мебошад. Онро дар Маркази сершуғл (Ҳуҷҷатҳои ман) ё ФИР (Фонди иҷтимоии Россия) гирифтан мумкин аст. Бояд шахсан ба он ҷо омада, ҳуҷҷатҳоро бо худ гиред. Ҳуҷҷат фавран омода мешавад. Дар ҳолатҳои кам, раванд метавонад то 5 рӯзи корӣ тӯл кашад.",
  placeTitle: "МФЦ, ФИР ё бонк — сипас салони МегаФон",
  placeText:
    "СНИЛС, Госуслуги ва биометрия дар МФЦ, фонд ё бонк. Сим-корти МегаФон дар салон: шартнома, IMEI, на зиёда аз 10 рақам ба як нафар.",
  placeBtn: "Дархост ба салон гузоред",
  bringTitle: "Бо худ бояд чӣ гирифт",
  bring: [
    {
      title: "Ҳуҷҷати будубош дар РФ",
      text: "Корти муҳоҷиратӣ, бақайдгирии муваққатӣ ё ИИ (иҷозатномаи истиқомат)",
    },
    {
      title: "Шиносномаи аслӣ",
      text: "ва тарҷумаи тасдиқшудаи он, ки метавонад дар агентии тарҷума анҷом дода шавад",
    },
    {
      title: "Телефони мобилӣ ва почтаи электронӣ",
      text: "барои насб кардани сим-корт ва тасдиқи маълумот дар портали Госуслуги",
    },
  ],
  translateBtn: "Бюрои тарҷума дар харита",
  step2Title: "Ҳуҷҷатҳо ва сим-корт гиред",
  step2Items: [
    {
      title: "Ба корманди МФЦ, ФИР ё бонк муроҷиат кунед",
      text: "Ӯ СНИЛС, Госуслуги ва биометрия — чеҳра ва овозро ба расмият медарорад.",
    },
    {
      title: "Дар салони МегаФон сим-корт гиред",
      text: "Гӯед, ки SIM-и аввал дар Россия ва тарофаи «Минимум +» ё «Оилавӣ +» лозим аст. «Қабули гарм» худ пайваст мешавад.",
    },
    {
      title: "IMEI-и телефонро бигӯед",
      text: "Ба шартнома менависанд. Ба як нафар на зиёда аз 10 рақам дар ҳамаи операторон.",
    },
    {
      title: "Корти бонки РФ ба расмият дароред",
      text: "Барои пур кардани сим-корт лозим аст. Дар бонк ҳамон рӯз кардан мумкин.",
    },
  ],
  bioTitle: "Тавсия медиҳем, ки ба супоридани маълумоти биометрӣ омода шавед",
  bioText: "Корманди бонк хоҳиш мекунад, ки чанд рақамро бигӯед",
  bring2Title: "Ба салон бо худ чӣ гирифтан",
  bring2: [
    {
      title: "Ҳуҷҷати будубош дар РФ",
      text: "Корти муҳоҷиратӣ, бақайдгирии муваққатӣ ё ИИ",
    },
    {
      title: "Шиносномаи аслӣ",
      text: "ва тарҷумаи тасдиқшудаи он",
    },
    {
      title: "СНИЛС",
      text: "пештар тавассути МФЦ ё ФИР (қадами 1)",
    },
    {
      title: "Телефони мобилӣ ва почтаи электронӣ",
      text: "барои насб кардани сим-корт ва тасдиқ дар Госуслуги",
    },
  ],
  step3Title: "Сим-кортро фаъол кунед",
  step3Text: "Пас аз супоридани биометрия ва сабти ном дар Госуслуги",
  step3Items: [
    {
      title: "Ба Госуслуги дароед",
      text: "тавассути ҳар дастгоҳ бо камера: смартфон, планшет, ноутбук",
      note: "Агар дастгоҳ бо камера набошад, аз компютери МФЦ истифода баред",
    },
    {
      title: "Ба бахши «Огоҳиномаҳо» гузаред",
      text: "тавассути меню дар кунҷи чапи боло",
    },
    {
      title: "Огоҳиномаи тасдиқи шахсиятро кушоед",
      text: "ва дастурҳоро риоя кунед",
    },
    {
      title: "Рақами МегаФонро пайваст кунед",
      text: "ба ҳисоби Госуслуги",
    },
  ],
  step4Title: "Тарофаро пардохт кунед",
  step4Items: [
    {
      title: "Дар салони МегаФон",
      text: "Тавозунро дар хазина ё тавассути интиқол дар салон пур кунед — бонусҳои ИДМ ҳам ҳамин ҷо",
      btn: "Дархост гузоред",
    },
    {
      title: "Дар сомонаи МегаФон",
      text: "Тез, бе хазинаи алоҳида",
      btn: "Дар сомона пардохт кунед",
    },
    {
      title: "Тавассути барномаи мобилӣ",
      text: "Боргирӣ кунед ва аз смартфон пардохт кунед",
      btn: "Барномаро боргирӣ кунед",
    },
  ],
  faqTitle: "Саволҳо ва ҷавобҳо",
  faq: [
    {
      q: "Ба тарофаҳои витрина чӣ дохил аст?",
      a: "«Минимум +» — асосӣ: аз 850 ₽, 400 дақиқа дар Россия, интернети баста, +10 ГБ барои пардохти саривақт. «Оилавӣ +» — максималӣ: аз 1 140 ₽, 1 500 дақиқа, интернети бемаҳдуд, МегаОила то 5 нафар. «Қабули гарм» худ пайваст мешавад.",
    },
    {
      q: "Тафсилоти тарофаро аз куҷо хондан мумкин?",
      a: "Шартҳои дақиқ — дар салони МегаФон ва megafon.ru. Нархҳо дар ин саҳифа тахминӣ, барои Москва, бо ҚДВ.",
    },
    {
      q: "Гигабайтҳои иловагӣ чӣ тавр гирифтан?",
      a: "«Минимум +»-ро сари вақт пардохт кунед — +10 ГБ. Аз мавсим баргардед — +20 ГБ то 6 моҳ. Бонусҳои интиқол танҳо дар салон.",
    },
    {
      q: "IMEI-ро дар шартнома чӣ тавр иваз кардан?",
      a: "Сим-кортро ба дастгоҳи нав гузоред, дар барномаи МегаФон «Навсозӣ»-ро пахш кунед ва шахсиятро дар Госуслуги тасдиқ кунед.",
    },
    {
      q: "Ҳангоми баргаштан ба кишвари худ бо ҳисоб чӣ мешавад?",
      a: "Ҳисоб кушода мемонад ва барои шумо нигоҳ дошта мешавад. Барои пӯшидан ба дастгирӣ ё салон муроҷиат кунед.",
    },
    {
      q: "Ҳангоми баргаштан бо сим-корт чӣ мешавад?",
      a: "Агар тавозунро ҳадди ақал дар 6 моҳ як бор пур кунед, сим-корт фаъол мемонад. Дар акси ҳол рақам баста мешавад. Ҳангоми бозгашт «+20 ГБ барои бозгашт» пайваст шуда метавонад.",
    },
  ],
  leadTitle: "Мегӯем, куҷо СНИЛС гирифтан ва кадом салон",
  leadText:
    "Рақам гузоред. Занг мезанем: чӣ бо худ гирифтан ва биометрияро дар куҷо супоридан.",
  apply: "Дархост гузоред",
};

const ky: InstructionCopy = {
  hero: "Сим-карта жана документтер бир жолу барууга туура келет",
  download: "Нускаманы жүктөө",
  gainTitle: "МегаФон тарифин тариздеңиз",
  gainSub:
    "Документтерди кантип тариздеп, «Минимум +» же «Үй-бүлөлүк +» тарифи менен SIM-карта алууга болот?",
  widgets: [
    { href: "#snils", label: "ЖЭКН алыңыз" },
    { href: "#getsim", label: "Документтер жана SIM алыңыз" },
    { href: "#activation", label: "SIM-картаны иштетиңиз" },
    { href: "#payment", label: "Тарифти төлөңүз" },
  ],
  share: "Инструкцияларды бөлүшүү",
  productKicker: "ТЗдагы тарифтер",
  productCta: "Тарифти кантип тариздөөгө болот",
  benefits: [
    {
      title: "«Жылуу тосуп алуу» өзү кошулат",
      text: "КМШ жана Кытайга пайдалуу мүнөттөр. Бардык резидент эместерге автоматтык.",
    },
    {
      title: "Мессенджерлер жана жакындар",
      text: "РФде иштеген мессенджерлерде сүйлөшүңүз. «Үй-бүлөлүк +» видео жана улуттук сайттарга жетет.",
    },
    {
      title: "100 эл аралык мүнөт",
      text: "Тажикстан, Өзбекстан, Кыргызстан, Армения, Казакстан, Кытай, Индия, Пакистан МегаФонуна. USSD, колдонмо, салон.",
    },
    {
      title: "Убагында төлөсөңүз +10 ГБ",
      text: "«Минимум +» тарифинде интернет өзү кошулат.",
    },
    {
      title: "КМШ которуулары үчүн бонус",
      text: "Жалгыз МегаФон салонунда, колдонмодо эмес. 30 000 ₽ ден — 50 эл аралык мүнөт.",
    },
    {
      title: "МегаҮй-бүлө 5 кишиге чейин",
      text: "«Үй-бүлөлүк +»: чексиз интернет. Сезондон кайтсаңыз — +20 ГБ, 6 айга чейин.",
    },
  ],
  howTitle: "Документтерди жана SIM-картаны кантип тариздөө",
  step1Title: "ЖЭКН алыңыз",
  step1Text:
    "ЖЭКН — жеке эсептин камсыздандыруу номери. Аны КФБден (Мои документы) же РСФден (Россиянын Социалдык фонду) алууга болот. Ал жакка өзү жана жанында документтерин алып баруу керек. Документ дароо даяр болот. Сейрек учурларда процесс 5 жумушчу күнгө чейин созулушу мүмкүн.",
  placeTitle: "КФБ, РСФ же банк — андан кийин МегаФон салону",
  placeText:
    "ЖЭКН, Госуслуги жана биометрия — КФБ, фонд же банкта. МегаФон SIM — салондо: келишим, телефондун IMEI, адамга 10 номерден ашпасын.",
  placeBtn: "Салонго өтүнмө калтырыңыз",
  bringTitle: "Эмнени алып барыш керек",
  bring: [
    {
      title: "Россия Федерациясында болуу жөнүндө документ",
      text: "Миграциялык карта, убактылуу каттоо же жашап турууга уруксат (ЖТУ)",
    },
    {
      title: "Паспорттун түпнускасы",
      text: "жана анын күбөлөндүрүлгөн котормосу, котормо агенттигинде жасалышы мүмкүн",
    },
    {
      title: "Мобилдик телефон жана электрондук почта",
      text: "SIM-картаны орнотуу жана Госуслуги порталында маалыматтарды ырастоо үчүн",
    },
  ],
  translateBtn: "Картадагы котормо бюросу",
  step2Title: "Документтер жана SIM-карта алыңыз",
  step2Items: [
    {
      title: "КФБ, РСФ же банк кызматкерине кайрылыңыз",
      text: "Ал ЖЭКН, Госуслуги жана биометрияны — жүз жана үндү тариздөөгө жардам берет.",
    },
    {
      title: "МегаФон салонунан SIM алыңыз",
      text: "Россиядагы биринчи SIM жана «Минимум +» же «Үй-бүлөлүк +» керек экенин айтыңыз. «Жылуу тосуп алуу» өзү кошулат.",
    },
    {
      title: "Телефондун IMEIсин айтыңыз",
      text: "Келишимге жазылат. Бардык операторлордо адамга 10 номерден ашпасын.",
    },
    {
      title: "РФ банк картасын тариздеңиз",
      text: "SIM толуктоо үчүн керек. Банкта ошол эле күнү жасаса болот.",
    },
  ],
  bioTitle: "Биометрияны берүүгө даярданууну сунуштайбыз",
  bioText: "Банк кызматкери сизден бир нече санды айтууну суранат",
  bring2Title: "Салонго эмне алып баруу керек",
  bring2: [
    {
      title: "Россия Федерациясында болуу жөнүндө документ",
      text: "Миграциялык карта, убактылуу каттоо же ЖТУ",
    },
    {
      title: "Паспорттун түпнускасы",
      text: "жана күбөлөндүрүлгөн котормосу",
    },
    {
      title: "ЖЭКН",
      text: "мурда КФБ же РСФ аркылуу таризделген (1-кадам)",
    },
    {
      title: "Мобилдик телефон жана электрондук почта",
      text: "SIM орнотуу жана Госуслугиде ырастоо үчүн",
    },
  ],
  step3Title: "SIM-картаны иштетиңиз",
  step3Text: "Биометрияны тапшыргандан жана Госуслугиге катталгандан кийин",
  step3Items: [
    {
      title: "Госуслугиге кириңиз",
      text: "камералуу каалаган түзмөк аркылуу: смартфон, планшет, ноутбук",
      note: "Камералуу түзмөгүңүз жок болсо, КФБдеги компьютерди колдонсоңуз болот",
    },
    {
      title: "«Билдирмелер» бөлүмүнө өтүңүз",
      text: "жогорку сол бурчтагы меню аркылуу",
    },
    {
      title: "Инсанды ырастоо билдирмесин ачыңыз",
      text: "жана көрсөтмөлөрдү аткарыңыз",
    },
    {
      title: "МегаФон номерин байлаңыз",
      text: "Госуслуги эсебине",
    },
  ],
  step4Title: "Тарифти төлөңүз",
  step4Items: [
    {
      title: "МегаФон салонунда",
      text: "Кассада же салон аркылуу которууда толуктаңыз — КМШ бонустары да ушул жерде",
      btn: "Өтүнмө калтыруу",
    },
    {
      title: "МегаФон сайтында",
      text: "Тез, өзүнчө кассасыз",
      btn: "Сайтта төлөө",
    },
    {
      title: "Мобилдик колдонмо аркылуу",
      text: "Жүктөп алып, смартфондон төлөңүз",
      btn: "Колдонмону жүктөө",
    },
  ],
  faqTitle: "Суроолор жана жооптор",
  faq: [
    {
      q: "Витрина тарифтерине эмне кирет?",
      a: "«Минимум +» — негизги: 850 ₽ ден, Россия боюнча 400 мүнөт, пакеттик интернет, өз убагында төлөө үчүн +10 ГБ. «Үй-бүлөлүк +» — максималдуу: 1 140 ₽ ден, 1 500 мүнөт, чексиз интернет, МегаҮй-бүлө 5 кишиге чейин. «Жылуу тосуп алуу» өзү кошулат.",
    },
    {
      q: "Тариф жөнүндө кеңири кайдан окуса болот?",
      a: "Так шарттар — МегаФон салонунда жана megafon.ru да. Бул барактагы баалар Москва үчүн, КНС менен, болжолдуу.",
    },
    {
      q: "Кошумча гигабайтты кантип алуу керек?",
      a: "«Минимум +» ти өз убагында төлөңүз — +10 ГБ. Сезондон кайтсаңыз — +20 ГБ, 6 айга чейин. Которуу бонустары жалаң салондо.",
    },
    {
      q: "Келишимде IMEIни кантип өзгөртүү керек?",
      a: "SIMди жаңы түзмөккө салыңыз, МегаФон колдонмосунда «Жаңыртуу» басыңыз жана Госуслугиде инсанды ырастаңыз.",
    },
    {
      q: "Өз өлкөмө кайтсам эсебиме эмне болот?",
      a: "Эсеп ачык калат жана сизде сакталат. Жабуу үчүн колдоо же салонго кайрылыңыз.",
    },
    {
      q: "Өз өлкөмө кайтсам SIM-картама эмне болот?",
      a: "Балансты кеминде 6 айда бир жолу толуктасаңыз, SIM активдүү калат. Болбосо номер бөгөттөлөт. Кайтканда «+20 ГБ кайтуу» кошулушу мүмкүн.",
    },
  ],
  leadTitle: "ЖЭКН жана жакын салонду айтабыз",
  leadText:
    "Номер калтырыңыз. Чалабыз: эмне алып баруу жана биометрияны кайда тапшыруу.",
  apply: "Өтүнмө калтыруу",
};

export const instructionCopy: Record<Locale, InstructionCopy> = {
  ru,
  uz,
  tg,
  ky,
};

export const biometryLines = [
  "0 1 2 3 4 5 6 7 8 9",
  "9 8 7 6 5 4 3 2 1 0",
  "5 9 4 7 3 1 8 6 0 2",
] as const;

export const biometryIpa = [
  "но́л' ад'и́н два́ тр'и́ ч'иты́р'э п'а́т' шэ́ст' с'э́м' во́с'им' д'э́в'ат'",
  "д'э́в'ат' во́с'им' с'э́м' шэ́ст' п'а́т' ч'иты́р'э тр'и́ два́ ад'и́н но́л'",
  "п'а́т' д'э́в'ат' ч'иты́р'э с'э́м' тр'и́ ад'и́н во́с'им' шэ́ст' но́л' два́",
] as const;
