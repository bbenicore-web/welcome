export type Locale = "ru" | "uz" | "tg" | "ky";

export const locales: { id: Locale; native: string; label: string }[] = [
  { id: "ru", native: "Русский", label: "RU" },
  { id: "uz", native: "O‘zbekcha", label: "UZ" },
  { id: "tg", native: "Тоҷикӣ", label: "TJ" },
  { id: "ky", native: "Кыргызча", label: "KG" },
];

export const tariffs = [
  {
    id: "s",
    price: 490,
    gb: 20,
    minutes: 400,
    homeMinutes: 50,
    sms: 50,
  },
  {
    id: "m",
    price: 650,
    gb: 35,
    minutes: 700,
    homeMinutes: 100,
    sms: 100,
    popular: true,
  },
  {
    id: "l",
    price: 890,
    gb: 50,
    minutes: 1200,
    homeMinutes: 250,
    sms: 200,
  },
] as const;

export const countries = [
  { id: "uz", flag: "🇺🇿", rate: "5 ₽" },
  { id: "tj", flag: "🇹🇯", rate: "5 ₽" },
  { id: "kg", flag: "🇰🇬", rate: "20 ₽" },
  { id: "am", flag: "🇦🇲", rate: "3 ₽" },
  { id: "kz", flag: "🇰🇿", rate: "25 ₽" },
  { id: "az", flag: "🇦🇿", rate: "30 ₽" },
] as const;

export const cities = [
  "moscow",
  "spb",
  "kazan",
  "ekb",
  "nsk",
  "krasnodar",
] as const;

type Dict = {
  metaTitle: string;
  metaDescription: string;
  brand: string;
  product: string;
  nav: { rates: string; tariffs: string; how: string; faq: string };
  getSim: string;
  heroKicker: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroLead: string;
  heroSecondary: string;
  heroNote: string;
  stats: { value: string; label: string }[];
  phoneFrom: string;
  phoneHome: string;
  phoneRate: string;
  phoneBalance: string;
  messengersOn: string;
  ratesTitle: string;
  ratesLead: string;
  rateUnit: string;
  countryNames: Record<(typeof countries)[number]["id"], string>;
  countryNotes: Record<(typeof countries)[number]["id"], string>;
  tariffsTitle: string;
  tariffsLead: string;
  perMonth: string;
  popular: string;
  tariffNames: Record<(typeof tariffs)[number]["id"], string>;
  internet: string;
  minutesRu: string;
  minutesHome: string;
  sms: string;
  megafonUnlimited: string;
  chooseTariff: string;
  benefitsTitle: string;
  benefits: { title: string; text: string }[];
  stepsTitle: string;
  stepsLead: string;
  steps: { title: string; text: string }[];
  ussdHint: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
  formTitle: string;
  formLead: string;
  formName: string;
  formPhone: string;
  formCity: string;
  formCountry: string;
  formTariff: string;
  formComment: string;
  formSubmit: string;
  formSending: string;
  formSuccessTitle: string;
  formSuccessText: string;
  formAnother: string;
  formError: string;
  cityNames: Record<(typeof cities)[number], string>;
  originCountries: string[];
  dialogTitle: string;
  dialogLead: string;
  footerLegal: string;
  footerNotOfficial: string;
  footerRights: string;
  lang: string;
  closeMenu: string;
  openMenu: string;
};

export const dictionaries: Record<Locale, Dict> = {
  ru: {
    metaTitle: "МегаФон для мигрантов — тарифы «Тёплый приём»",
    metaDescription:
      "Связь в России и звонки домой без переплат. SIM за 15 минут, мессенджеры даже при нулевом балансе, выгодные минуты в Узбекистан, Таджикистан и Киргизию.",
    brand: "МегаФон",
    product: "Тёплый приём",
    nav: { rates: "Звонки домой", tariffs: "Тарифы", how: "Как подключить", faq: "Вопросы" },
    getSim: "Получить SIM",
    heroKicker: "Для гостей из стран СНГ",
    heroTitle: "Связь с домом —",
    heroTitleAccent: "без переплат",
    heroLead:
      "Тарифы «Тёплый приём»: интернет и минуты по России, звонки родным от 5 ₽, WhatsApp и Telegram даже если на счёте ноль. SIM оформляют в салоне за 15 минут — нужен только паспорт.",
    heroSecondary: "Сравнить тарифы",
    heroNote: "Паспорт · 15 минут в салоне · связь по всей России",
    stats: [
      { value: "5 ₽", label: "минута в Узбекистан и на МегаФон Таджикистан" },
      { value: "15 мин", label: "на оформление SIM в салоне" },
      { value: "0 ₽", label: "мессенджеры при любом балансе" },
    ],
    phoneFrom: "Входящий",
    phoneHome: "Мама · Ташкент",
    phoneRate: "5 ₽ / мин · «Тёплый приём»",
    phoneBalance: "Баланс 0 ₽ — мессенджеры работают",
    messengersOn: "WhatsApp, Telegram, IMO — безлимит",
    ratesTitle: "Звоните домой по своим правилам",
    ratesLead:
      "Специальные цены на международные звонки для граждан Узбекистана, Таджикистана, Киргизии, Армении, Казахстана и Азербайджана. Точную стоимость в вашем регионе подтвердят в салоне.",
    rateUnit: "за минуту",
    countryNames: {
      uz: "Узбекистан",
      tj: "Таджикистан",
      kg: "Киргизия",
      am: "Армения",
      kz: "Казахстан",
      az: "Азербайджан",
    },
    countryNotes: {
      uz: "на любые номера",
      tj: "на МегаФон Таджикистан",
      kg: "на MegaCom и другие",
      am: "на номера Ucom",
      kz: "на любые номера",
      az: "на любые номера",
    },
    tariffsTitle: "Выберите пакет на месяц",
    tariffsLead:
      "Минуты, гигабайты и звонки домой в одном платеже. Безлимит на МегаФон России — даже когда пакет минут закончился.",
    perMonth: "за 30 дней",
    popular: "Чаще берут",
    tariffNames: { s: "Тёплый приём S", m: "Тёплый приём M", l: "Тёплый приём L" },
    internet: "интернета",
    minutesRu: "минут по России",
    minutesHome: "минут домой",
    sms: "SMS по России",
    megafonUnlimited: "Безлимит на МегаФон России",
    chooseTariff: "Хочу этот тариф",
    benefitsTitle: "Что важно, когда вы далеко от дома",
    benefits: [
      {
        title: "Мессенджеры при любом балансе",
        text: "WhatsApp, Telegram, Viber, IMO и навигация не расходуют пакет и остаются доступны до следующего платежа — даже при минусе.",
      },
      {
        title: "Такси и карты всегда с собой",
        text: "Яндекс Go, Uber, 2ГИС, Google Карты и MAPS.ME работают без интернета по тарифу. Доедете до смены и не потеряетесь в новом городе.",
      },
      {
        title: "Меню на родном языке",
        text: "Наберите *105*2022# — подсказки, остатки и баланс можно смотреть на узбекском или таджикском.",
      },
      {
        title: "Кешбэк с переводов домой",
        text: "1% возвращается за переводы в Узбекистан и Таджикистан с номера МегаФон — мелочь, которая копится каждый месяц.",
      },
      {
        title: "Защита от случайных подписок",
        text: "«МегаФон Защита» спрашивает подтверждение, если кто-то пытается подключить платную услугу на ваш номер.",
      },
      {
        title: "Связь по всей России",
        text: "Одни и те же условия в Москве, на стройке в области и в поездке в другой регион. Крым и отдельные территории — по особым правилам.",
      },
    ],
    stepsTitle: "Как получить SIM",
    stepsLead: "Никакого сайта и ожидания курьера: приходите в салон с паспортом.",
    steps: [
      {
        title: "Возьмите паспорт",
        text: "Нужен документ, удостоверяющий личность. Временная регистрация не обязательна для оформления SIM.",
      },
      {
        title: "Выберите тариф и номер",
        text: "В салоне подскажут пакет под звонки домой и покажут красивые номера, если они есть.",
      },
      {
        title: "Подпишите договор",
        text: "Регистрация SIM занимает около 15 минут. Первый платёж можно внести сразу на кассе.",
      },
      {
        title: "Позвоните домой в тот же день",
        text: "Вставьте SIM, включите роуминг данных при необходимости и сохраните USSD *105*2022#.",
      },
    ],
    ussdHint: "Язык меню: *105*2022#",
    faqTitle: "Частые вопросы",
    faq: [
      {
        q: "Какие документы нужны?",
        a: "Достаточно паспорта или иного документа, удостоверяющего личность. СНИЛС и российская регистрация для базового оформления не требуются. Сотрудник салона сверит данные и зарегистрирует SIM по закону.",
      },
      {
        q: "Я уже живу в России. Мне подойдёт «Тёплый приём»?",
        a: "Да. Линейка рассчитана на иностранных граждан из стран СНГ, которые звонят домой и пользуются интернетом в России. Если звонков за границу мало, в салоне могут предложить другой пакет.",
      },
      {
        q: "Что будет, если закончатся минуты или гигабайты?",
        a: "Звонки на МегаФон России остаются безлимитными. Остальные звонки и интернет тарифицируются отдельно или можно докупить пакет. Мессенджеры, такси и карты продолжают работать.",
      },
      {
        q: "Можно ли раздавать интернет?",
        a: "Тарифы «Тёплый приём» не предназначены для модемов и раздачи. Для телефона и обычных приложений скорость обычная, торренты ограничиваются.",
      },
      {
        q: "Цены на сайте — окончательные?",
        a: "Это демонстрационный лендинг: цифры ориентированы на публичные условия линейки «Тёплый приём» и могут отличаться в вашем регионе и на дату подключения. Актуальные цены — в салоне и на megafon.ru.",
      },
    ],
    formTitle: "Оставьте номер — салон перезвонит",
    formLead:
      "Заявка уходит консультанту. Перезвоним в рабочие часы, подскажем ближайший салон и подготовим тариф.",
    formName: "Как к вам обращаться",
    formPhone: "Телефон для звонка",
    formCity: "Город",
    formCountry: "Откуда вы",
    formTariff: "Какой тариф смотрите",
    formComment: "Комментарий",
    formSubmit: "Отправить заявку",
    formSending: "Отправляем…",
    formSuccessTitle: "Заявка принята",
    formSuccessText:
      "Консультант перезвонит в ближайшие рабочие часы. Возьмите паспорт, когда пойдёте в салон.",
    formAnother: "Отправить ещё одну",
    formError: "Укажите имя и телефон — так консультант сможет дозвониться.",
    cityNames: {
      moscow: "Москва",
      spb: "Санкт-Петербург",
      kazan: "Казань",
      ekb: "Екатеринбург",
      nsk: "Новосибирск",
      krasnodar: "Краснодар",
    },
    originCountries: [
      "Узбекистан",
      "Таджикистан",
      "Киргизия",
      "Армения",
      "Казахстан",
      "Азербайджан",
      "Другая страна",
    ],
    dialogTitle: "Заявка на SIM «Тёплый приём»",
    dialogLead: "Оставьте контакты — подготовим тариф и назовём ближайший салон.",
    footerLegal:
      "Цены указаны в рублях с НДС и носят ознакомительный характер. Пакеты обновляются каждые 30 дней, остатки не переносятся. Условия международных звонков зависят от направления и региона договора.",
    footerNotOfficial:
      "Демонстрационный лендинг. Не является официальным сайтом ПАО «МегаФон». Актуальные тарифы, опция «Тёплый приём» и регистрация SIM — на megafon.ru и в салонах связи.",
    footerRights: "МегаФон · связь для тех, кто работает в России и звонит домой",
    lang: "Язык",
    closeMenu: "Закрыть меню",
    openMenu: "Открыть меню",
  },
  uz: {
    metaTitle: "MegaFon migrantlar uchun — «Iliq kutib olish» tariflari",
    metaDescription:
      "Rossiyada aloqa va uyga arzon qo‘ng‘iroqlar. SIM 15 daqiqada, balans nol bo‘lsa ham messenjerlar, O‘zbekiston, Tojikiston va Qirg‘izistonga foydali daqiqalar.",
    brand: "MegaFon",
    product: "Iliq kutib olish",
    nav: { rates: "Uyga qo‘ng‘iroq", tariffs: "Tariflar", how: "Qanday ulash", faq: "Savollar" },
    getSim: "SIM olish",
    heroKicker: "MDH mamlakatlaridan kelgan mehmonlar uchun",
    heroTitle: "Uy bilan aloqa —",
    heroTitleAccent: "ortiqcha to‘lovsiz",
    heroLead:
      "«Iliq kutib olish» tariflari: Rossiya bo‘yicha internet va daqiqalar, oilaga 5 ₽ dan qo‘ng‘iroq, balans nol bo‘lsa ham WhatsApp va Telegram. SIM salonida 15 daqiqada — faqat pasport kerak.",
    heroSecondary: "Tariflarni solishtirish",
    heroNote: "Pasport · salonda 15 daqiqa · butun Rossiya bo‘ylab aloqa",
    stats: [
      { value: "5 ₽", label: "O‘zbekiston va MegaFon Tojikistonga bir daqiqa" },
      { value: "15 daq", label: "salonda SIM rasmiylashtirish" },
      { value: "0 ₽", label: "har qanday balansda messenjerlar" },
    ],
    phoneFrom: "Kiruvchi",
    phoneHome: "Ona · Toshkent",
    phoneRate: "5 ₽ / daq · «Iliq kutib olish»",
    phoneBalance: "Balans 0 ₽ — messenjerlar ishlaydi",
    messengersOn: "WhatsApp, Telegram, IMO — cheksiz",
    ratesTitle: "Uyga o‘z shartlaringiz bilan qo‘ng‘iroq qiling",
    ratesLead:
      "O‘zbekiston, Tojikiston, Qirg‘iziston, Armaniston, Qozog‘iston va Ozarbayjon fuqarolari uchun xalqaro qo‘ng‘iroqlarning maxsus narxi. Aniq summani salonda tasdiqlaydilar.",
    rateUnit: "daqiqasiga",
    countryNames: {
      uz: "O‘zbekiston",
      tj: "Tojikiston",
      kg: "Qirg‘iziston",
      am: "Armaniston",
      kz: "Qozog‘iston",
      az: "Ozarbayjon",
    },
    countryNotes: {
      uz: "har qanday raqamga",
      tj: "MegaFon Tojikistonga",
      kg: "MegaCom va boshqalarga",
      am: "Ucom raqamlariga",
      kz: "har qanday raqamga",
      az: "har qanday raqamga",
    },
    tariffsTitle: "Oyiga paket tanlang",
    tariffsLead:
      "Daqiqalar, gigabaytlar va uyga qo‘ng‘iroqlar bitta to‘lovda. MegaFon Rossiya raqamlariga cheksiz — paket tugasa ham.",
    perMonth: "30 kuniga",
    popular: "Ko‘proq olinadi",
    tariffNames: { s: "Iliq kutib olish S", m: "Iliq kutib olish M", l: "Iliq kutib olish L" },
    internet: "internet",
    minutesRu: "Rossiya bo‘yicha daqiqa",
    minutesHome: "uyga daqiqa",
    sms: "Rossiya bo‘yicha SMS",
    megafonUnlimited: "MegaFon Rossiyaga cheksiz",
    chooseTariff: "Shu tarifni xohlayman",
    benefitsTitle: "Uydan uzoqda muhim bo‘lgan narsalar",
    benefits: [
      {
        title: "Har qanday balansda messenjerlar",
        text: "WhatsApp, Telegram, Viber, IMO va navigatsiya paketni sarflamaydi va keyingi to‘lovgacha ishlayveradi — minus bo‘lsa ham.",
      },
      {
        title: "Taksi va xarita doim yonida",
        text: "Yandex Go, Uber, 2GIS, Google Maps va MAPS.ME tarif internetisiz ishlaydi. Smenaga yetib borasiz, yangi shaharda yo‘lni adashtirmaysiz.",
      },
      {
        title: "Menyu ona tilingizda",
        text: "*105*2022# tering — qoldiq va balansni o‘zbek yoki tojik tilida ko‘rish mumkin.",
      },
      {
        title: "Uyga pul o‘tkazmadan keshbek",
        text: "MegaFon raqamidan O‘zbekiston va Tojikistonga o‘tkazmalar uchun 1% qaytadi.",
      },
      {
        title: "Tasodifiy obunalardan himoya",
        text: "«MegaFon Himoya» pullik xizmat ulanmoqchi bo‘lsa, tasdiq so‘raydi.",
      },
      {
        title: "Butun Rossiya bo‘ylab aloqa",
        text: "Moskva, viloyatdagi qurilish va boshqa mintaqaga safarda shu shartlar. Qrim va ayrim hududlar — alohida qoidalar.",
      },
    ],
    stepsTitle: "SIM qanday olinadi",
    stepsLead: "Sayt va kuryer kutish shart emas: pasport bilan salonga keling.",
    steps: [
      {
        title: "Pasport oling",
        text: "Shaxsni tasdiqlovchi hujjat kifoya. SIM uchun vaqtincha ro‘yxatdan o‘tish shart emas.",
      },
      {
        title: "Tarif va raqam tanlang",
        text: "Salonda uyga qo‘ng‘iroqlar uchun paketni maslahat berishadi va chiroyli raqamlar bo‘lsa ko‘rsatishadi.",
      },
      {
        title: "Shartnoma imzolang",
        text: "SIM ro‘yxati taxminan 15 daqiqa. Birinchi to‘lovni kassada darhol qilish mumkin.",
      },
      {
        title: "Shu kuni uyga qo‘ng‘iroq qiling",
        text: "SIMni soling va *105*2022# kodini saqlab qo‘ying.",
      },
    ],
    ussdHint: "Menyu tili: *105*2022#",
    faqTitle: "Ko‘p so‘raladigan savollar",
    faq: [
      {
        q: "Qanday hujjatlar kerak?",
        a: "Pasport yoki boshqa shaxsni tasdiqlovchi hujjat yetarli. SNILS va Rossiya ro‘yxati asosiy rasmiylashtirish uchun shart emas.",
      },
      {
        q: "Men allaqachon Rossiyada yashayman. «Iliq kutib olish» menga to‘g‘ri keladimi?",
        a: "Ha. Tarif MDH fuqarolari — uyga qo‘ng‘iroq qiladigan va Rossiyada internet ishlatadiganlar uchun. Chet elga kam qo‘ng‘iroq qilsangiz, salonda boshqa paket taklif qilishlari mumkin.",
      },
      {
        q: "Daqiqa yoki gigabayt tugasa nima bo‘ladi?",
        a: "MegaFon Rossiyaga qo‘ng‘iroqlar cheksiz qoladi. Qolgan qo‘ng‘iroqlar va internet alohida to‘lanadi yoki paket xarid qilish mumkin. Messenjerlar ishlashda davom etadi.",
      },
      {
        q: "Internet tarqatish mumkinmi?",
        a: "«Iliq kutib olish» modem va tarqatish uchun mo‘ljallanmagan. Telefon va oddiy ilovalar uchun tezlik odatiy.",
      },
      {
        q: "Saytdagi narxlar yakuniymi?",
        a: "Bu namoyish lendinqi: raqamlar «Iliq kutib olish» ochiq shartlariga tayanadi va mintaqa hamda ulanish sanasiga qarab farq qilishi mumkin. Aniq narx — salonda va megafon.ru da.",
      },
    ],
    formTitle: "Raqamingizni qoldiring — salon qo‘ng‘iroq qiladi",
    formLead:
      "Ariza maslahatchiga ketadi. Ish vaqtida qo‘ng‘iroq qilamiz, yaqin salonni aytamiz va tarifni tayyorlaymiz.",
    formName: "Ismingiz",
    formPhone: "Qo‘ng‘iroq uchun telefon",
    formCity: "Shahar",
    formCountry: "Qayerdansiz",
    formTariff: "Qaysi tarifni ko‘ryapsiz",
    formComment: "Izoh",
    formSubmit: "Ariza yuborish",
    formSending: "Yuborilmoqda…",
    formSuccessTitle: "Ariza qabul qilindi",
    formSuccessText:
      "Maslahatchi yaqin ish soatlarida qo‘ng‘iroq qiladi. Salonga pasport olib boring.",
    formAnother: "Yana yuborish",
    formError: "Ism va telefonni yozing — shunda maslahatchi yetib boradi.",
    cityNames: {
      moscow: "Moskva",
      spb: "Sankt-Peterburg",
      kazan: "Qozon",
      ekb: "Yekaterinburg",
      nsk: "Novosibirsk",
      krasnodar: "Krasnodar",
    },
    originCountries: [
      "O‘zbekiston",
      "Tojikiston",
      "Qirg‘iziston",
      "Armaniston",
      "Qozog‘iston",
      "Ozarbayjon",
      "Boshqa mamlakat",
    ],
    dialogTitle: "«Iliq kutib olish» SIM arizasi",
    dialogLead: "Kontakt qoldiring — tarifni tayyorlab, yaqin salonni aytamiz.",
    footerLegal:
      "Narxlar QQS bilan rublda, tanishuv uchun. Paketlar har 30 kunda yangilanadi, qoldiq o‘tmaydi. Xalqaro qo‘ng‘iroq shartlari yo‘nalish va shartnoma mintaqasiga bog‘liq.",
    footerNotOfficial:
      "Namoyish lendinqi. PJSC «MegaFon» rasmiy sayti emas. Joriy tariflar va SIM ro‘yxati — megafon.ru va aloqa salonlarida.",
    footerRights: "MegaFon · Rossiyada ishlaydigan va uyga qo‘ng‘iroq qiladiganlar uchun aloqa",
    lang: "Til",
    closeMenu: "Menyuni yopish",
    openMenu: "Menyuni ochish",
  },
  tg: {
    metaTitle: "МегаФон барои муҳоҷирон — тарифҳои «Пешвози гарм»",
    metaDescription:
      "Алоқа дар Русия ва зангҳо ба хона бе пардохти зиёдатӣ. SIM дар 15 дақиқа, мессенҷерҳо ҳатто бо баланси сифр.",
    brand: "МегаФон",
    product: "Пешвози гарм",
    nav: { rates: "Занг ба хона", tariffs: "Тарифҳо", how: "Чӣ тавр пайваст", faq: "Саволҳо" },
    getSim: "Гирифтани SIM",
    heroKicker: "Барои меҳмонон аз кишварҳои ИДМ",
    heroTitle: "Алоқа бо хона —",
    heroTitleAccent: "бе зиёдатпардохт",
    heroLead:
      "Тарифҳои «Пешвози гарм»: интернет ва дақиқаҳо дар Русия, занг ба хешон аз 5 ₽, WhatsApp ва Telegram ҳатто агар баланс сифр бошад. SIM дар салон 15 дақиқа — танҳо шиноснома лозим аст.",
    heroSecondary: "Муқоисаи тарифҳо",
    heroNote: "Шиноснома · 15 дақиқа дар салон · алоқа дар тамоми Русия",
    stats: [
      { value: "5 ₽", label: "дақиқа ба Ӯзбекистон ва МегаФон Тоҷикистон" },
      { value: "15 дақ", label: "барои расмиёти SIM дар салон" },
      { value: "0 ₽", label: "мессенҷерҳо бо ҳар баланс" },
    ],
    phoneFrom: "Даромад",
    phoneHome: "Модар · Душанбе",
    phoneRate: "5 ₽ / дақ · «Пешвози гарм»",
    phoneBalance: "Баланс 0 ₽ — мессенҷерҳо кор мекунанд",
    messengersOn: "WhatsApp, Telegram, IMO — бемаҳдуд",
    ratesTitle: "Ба хона бо шартҳои худ занг занед",
    ratesLead:
      "Нархҳои махсус барои шаҳрвандони Ӯзбекистон, Тоҷикистон, Қирғизистон, Арманистон, Қазоқистон ва Озарбойҷон. Нархи дақиқро дар салон тасдиқ мекунанд.",
    rateUnit: "барои як дақиқа",
    countryNames: {
      uz: "Ӯзбекистон",
      tj: "Тоҷикистон",
      kg: "Қирғизистон",
      am: "Арманистон",
      kz: "Қазоқистон",
      az: "Озарбойҷон",
    },
    countryNotes: {
      uz: "ба ҳама рақамҳо",
      tj: "ба МегаФон Тоҷикистон",
      kg: "ба MegaCom ва дигарҳо",
      am: "ба рақамҳои Ucom",
      kz: "ба ҳама рақамҳо",
      az: "ба ҳама рақамҳо",
    },
    tariffsTitle: "Бастаи моҳонаро интихоб кунед",
    tariffsLead:
      "Дақиқаҳо, гигабайтҳо ва занг ба хона дар як пардохт. Бемаҳдуд ба МегаФони Русия — ҳатто баъди тамом шудани баста.",
    perMonth: "барои 30 рӯз",
    popular: "Бештар мегиранд",
    tariffNames: { s: "Пешвози гарм S", m: "Пешвози гарм M", l: "Пешвози гарм L" },
    internet: "интернет",
    minutesRu: "дақиқа дар Русия",
    minutesHome: "дақиқа ба хона",
    sms: "SMS дар Русия",
    megafonUnlimited: "Бемаҳдуд ба МегаФони Русия",
    chooseTariff: "Ҳамин тарифро мехоҳам",
    benefitsTitle: "Он чизҳое, ки дур аз хона муҳиманд",
    benefits: [
      {
        title: "Мессенҷерҳо бо ҳар баланс",
        text: "WhatsApp, Telegram, Viber, IMO ва навигация бастаро сарф намекунанд ва то пардохти навбатӣ мемонанд — ҳатто бо минус.",
      },
      {
        title: "Таксӣ ва харита ҳамеша бо шумо",
        text: "Яндекс Go, Uber, 2ГИС, Google Maps ва MAPS.ME бе интернети тариф кор мекунанд.",
      },
      {
        title: "Меню бо забони модарӣ",
        text: "*105*2022# занед — бақия ва балансро бо тоҷикӣ ё ӯзбекӣ дидан мумкин аст.",
      },
      {
        title: "Кешбэк аз интиқол ба хона",
        text: "1% барои интиқол ба Ӯзбекистон ва Тоҷикистон аз рақами МегаФон бармегардад.",
      },
      {
        title: "Муҳофизат аз обунаҳои тасодуфӣ",
        text: "«МегаФон Ҳимоя» тасдиқ мепурсад, агар хидмати пулакӣ пайваст карданӣ шаванд.",
      },
      {
        title: "Алоқа дар тамоми Русия",
        text: "Ҳамон шартҳо дар Маскав, дар сохтмон ва дар сафар ба минтақаи дигар.",
      },
    ],
    stepsTitle: "Чӣ тавр SIM гирифтан",
    stepsLead: "Бе сайт ва интизори курьер: бо шиноснома ба салон биёед.",
    steps: [
      {
        title: "Шиноснома гиред",
        text: "Ҳуҷҷати шахсӣ кифоя аст. Бақайдгирии муваққатӣ барои SIM ҳатмӣ нест.",
      },
      {
        title: "Тариф ва рақамро интихоб кунед",
        text: "Дар салон бастаро барои занг ба хона маслиҳат медиҳанд.",
      },
      {
        title: "Шартнома имзо кунед",
        text: "Бақайдгирии SIM тақрибан 15 дақиқа. Пардохти аввалро дар хазина кардан мумкин аст.",
      },
      {
        title: "Ҳамон рӯз ба хона занг занед",
        text: "SIM-ро гузоред ва рамзи *105*2022#-ро захира кунед.",
      },
    ],
    ussdHint: "Забони меню: *105*2022#",
    faqTitle: "Саволҳои зиёд такроршаванда",
    faq: [
      {
        q: "Кадом ҳуҷҷатҳо лозиманд?",
        a: "Шиноснома ё ҳуҷҷати дигари шахсӣ кифоя аст. СНИЛС ва бақайдгирии русӣ барои расмиёти асосӣ ҳатмӣ нестанд.",
      },
      {
        q: "Ман аллакай дар Русия зиндагӣ мекунам. «Пешвози гарм» мувофиқ аст?",
        a: "Ҳа. Хати тариф барои шаҳрвандони ИДМ, ки ба хона занг мезананд ва дар Русия интернет истифода мебаранд.",
      },
      {
        q: "Агар дақиқа ё гигабайт тамом шавад?",
        a: "Зангҳо ба МегаФони Русия бемаҳдуд мемонанд. Мессенҷерҳо, таксӣ ва харитаҳо корро давом медиҳанд.",
      },
      {
        q: "Интернетро паҳн кардан мумкин аст?",
        a: "Тарифҳои «Пешвози гарм» барои модем ва паҳнкунӣ пешбинӣ нашудаанд.",
      },
      {
        q: "Нархҳои сайт ниҳоӣ ҳастанд?",
        a: "Ин лендинги намоишӣ аст. Рақамҳо метавонанд аз рӯи минтақа фарқ кунанд. Нархи аслӣ — дар салон ва megafon.ru.",
      },
    ],
    formTitle: "Рақам гузоред — салон занг мезанад",
    formLead:
      "Дархост ба мушовир меравад. Дар соатҳои корӣ занг мезанем, салони наздиктаринро мегӯем.",
    formName: "Номи шумо",
    formPhone: "Телефон барои занг",
    formCity: "Шаҳр",
    formCountry: "Аз куҷо ҳастед",
    formTariff: "Кадом тарифро мебинед",
    formComment: "Шарҳ",
    formSubmit: "Фиристодани дархост",
    formSending: "Фиристода истодааст…",
    formSuccessTitle: "Дархост қабул шуд",
    formSuccessText: "Мушовир дар соатҳои корӣ занг мезанад. Шиноснома ба салон гиред.",
    formAnother: "Боз фиристодан",
    formError: "Ном ва телефонро нависед — то мушовир дастрас шавад.",
    cityNames: {
      moscow: "Маскав",
      spb: "Санкт-Петербург",
      kazan: "Қозон",
      ekb: "Екатеринбург",
      nsk: "Новосибирск",
      krasnodar: "Краснодар",
    },
    originCountries: [
      "Ӯзбекистон",
      "Тоҷикистон",
      "Қирғизистон",
      "Арманистон",
      "Қазоқистон",
      "Озарбойҷон",
      "Кишвари дигар",
    ],
    dialogTitle: "Дархости SIM «Пешвози гарм»",
    dialogLead: "Тамос гузоред — тарифро тайёр мекунем ва салони наздикро мегӯем.",
    footerLegal:
      "Нархҳо бо ААА ба рубл, барои шиносоӣ. Бастаҳо ҳар 30 рӯз нав мешаванд, бақия намегузарад.",
    footerNotOfficial:
      "Лендинги намоишӣ. Сомонаи расмии ПАО «МегаФон» нест. Тарифҳои аслӣ — дар megafon.ru ва салонҳо.",
    footerRights: "МегаФон · алоқа барои онҳое, ки дар Русия кор мекунанд ва ба хона занг мезананд",
    lang: "Забон",
    closeMenu: "Пӯшидани меню",
    openMenu: "Кушодани меню",
  },
  ky: {
    metaTitle: "МегаФон мигранттар үчүн — «Жылуу тосуп алуу» тарифтери",
    metaDescription:
      "Орусияда байланыш жана үйгө арзан чалуулар. SIM 15 мүнөттө, баланс нөл болсо да мессенджерлер.",
    brand: "МегаФон",
    product: "Жылуу тосуп алуу",
    nav: { rates: "Үйгө чалуу", tariffs: "Тарифтер", how: "Кантип кошуу", faq: "Суроолор" },
    getSim: "SIM алуу",
    heroKicker: "КМШ өлкөлөрүнөн келген коноктор үчүн",
    heroTitle: "Үй менен байланыш —",
    heroTitleAccent: "ашыкча төлөмсүз",
    heroLead:
      "«Жылуу тосуп алуу» тарифтери: Орусия боюнча интернет жана мүнөттөр, үйгө 5 ₽дан чалуу, баланс нөл болсо да WhatsApp менен Telegram. SIM салондо 15 мүнөттө — паспорт эле керек.",
    heroSecondary: "Тарифтерди салыштыруу",
    heroNote: "Паспорт · салондо 15 мүнөт · бүткүл Орусия боюнча байланыш",
    stats: [
      { value: "5 ₽", label: "Өзбекстан жана МегаФон Тажикстанга бир мүнөт" },
      { value: "15 мүн", label: "салондо SIM тариздөө" },
      { value: "0 ₽", label: "каалаган баланста мессенджерлер" },
    ],
    phoneFrom: "Кирүүчү",
    phoneHome: "Апа · Бишкек",
    phoneRate: "5 ₽ / мүн · «Жылуу тосуп алуу»",
    phoneBalance: "Баланс 0 ₽ — мессенджерлер иштейт",
    messengersOn: "WhatsApp, Telegram, IMO — чексиз",
    ratesTitle: "Үйгө өз шарттарыңыз менен чалыңыз",
    ratesLead:
      "Өзбекстан, Тажикстан, Кыргызстан, Армения, Казакстан жана Азербайжан жарандары үчүн эл аралык чалуулардын атайын баасы. Так сумманы салондо ырасташат.",
    rateUnit: "мүнөтүнө",
    countryNames: {
      uz: "Өзбекстан",
      tj: "Тажикстан",
      kg: "Кыргызстан",
      am: "Армения",
      kz: "Казакстан",
      az: "Азербайжан",
    },
    countryNotes: {
      uz: "каалаган номерге",
      tj: "МегаФон Тажикстанга",
      kg: "MegaCom жана башкаларга",
      am: "Ucom номерлерине",
      kz: "каалаган номерге",
      az: "каалаган номерге",
    },
    tariffsTitle: "Айлык пакетти тандаңыз",
    tariffsLead:
      "Мүнөттөр, гигабайттар жана үйгө чалуулар бир төлөмдө. МегаФон Орусияга чексиз — пакет бүтсө да.",
    perMonth: "30 күнгө",
    popular: "Көбүрөөк алышат",
    tariffNames: { s: "Жылуу тосуп алуу S", m: "Жылуу тосуп алуу M", l: "Жылуу тосуп алуу L" },
    internet: "интернет",
    minutesRu: "Орусия боюнча мүнөт",
    minutesHome: "үйгө мүнөт",
    sms: "Орусия боюнча SMS",
    megafonUnlimited: "МегаФон Орусияга чексиз",
    chooseTariff: "Ушул тарифти каалайм",
    benefitsTitle: "Үйдөн алыс жүргөндө маанилүү нерселер",
    benefits: [
      {
        title: "Каалаган баланста мессенджерлер",
        text: "WhatsApp, Telegram, Viber, IMO жана навигация пакетти сарптабайт жана кийинки төлөмгө чейин иштейт.",
      },
      {
        title: "Такси жана карта дайыма жаныңызда",
        text: "Яндекс Go, Uber, 2ГИС, Google Maps жана MAPS.ME тарифтик интернетсиз иштейт.",
      },
      {
        title: "Меню эне тилиңизде",
        text: "*105*2022# териңиз — калдык менен балансты өзбек же тажик тилинде көрө аласыз.",
      },
      {
        title: "Үйгө которуудан кешбэк",
        text: "МегаФон номеринен Өзбекстан жана Тажикстанга которуулар үчүн 1% кайтып келет.",
      },
      {
        title: "Кокустук жазылуулардан коргоо",
        text: "«МегаФон Коргоо» акылуу кызмат кошулганда ырастоо сурайт.",
      },
      {
        title: "Бүткүл Орусия боюнча байланыш",
        text: "Москвада, курулушта жана башка регионго сапарда ошол эле шарттар.",
      },
    ],
    stepsTitle: "SIM кантип алынат",
    stepsLead: "Сайт жана курьер күтүүнүн кереги жок: паспорт менен салонго келиңиз.",
    steps: [
      {
        title: "Паспорт алыңыз",
        text: "Өздүк документ жетиштүү. SIM үчүн убактылуу каттоо милдеттүү эмес.",
      },
      {
        title: "Тариф жана номер тандаңыз",
        text: "Салондо үйгө чалуулар үчүн пакетти кеңештешет.",
      },
      {
        title: "Келишимге кол коюңуз",
        text: "SIM каттоосу болжол менен 15 мүнөт. Биринчи төлөмдү кассада төлөсө болот.",
      },
      {
        title: "Ошол эле күнү үйгө чалыңыз",
        text: "SIMди салып, *105*2022# кодун сактап коюңуз.",
      },
    ],
    ussdHint: "Меню тили: *105*2022#",
    faqTitle: "Көп берилүүчү суроолор",
    faq: [
      {
        q: "Кайсы документтер керек?",
        a: "Паспорт же башка өздүк документ жетиштүү. СНИЛС жана орус каттоосу негизги тариздөө үчүн милдеттүү эмес.",
      },
      {
        q: "Мен Орусияда жашайм. «Жылуу тосуп алуу» мага туура келеби?",
        a: "Ооба. Тариф КМШ жарандары — үйгө чалып, Орусияда интернет колдонгондор үчүн.",
      },
      {
        q: "Мүнөт же гигабайт бүтсө эмне болот?",
        a: "МегаФон Орусияга чалуулар чексиз калат. Мессенджерлер, такси жана карталар иштей берет.",
      },
      {
        q: "Интернет таратууга болобу?",
        a: "«Жылуу тосуп алуу» модем жана таратуу үчүн арналган эмес.",
      },
      {
        q: "Сайттагы баалар акыркыбы?",
        a: "Бул демонстрациялык лендинг. Сандар регионго жараша айырмаланышы мүмкүн. Так баа — салондо жана megafon.ru да.",
      },
    ],
    formTitle: "Номериңизди калтырыңыз — салон чалат",
    formLead:
      "Арыз кеңешчиге кетет. Иш сааттарында чалабыз, жакынкы салонду айтабыз.",
    formName: "Атыңыз",
    formPhone: "Чалуу үчүн телефон",
    formCity: "Шаар",
    formCountry: "Кайдансыз",
    formTariff: "Кайсы тарифти карап жатасыз",
    formComment: "Комментарий",
    formSubmit: "Арыз жөнөтүү",
    formSending: "Жөнөтүлүүдө…",
    formSuccessTitle: "Арыз кабыл алынды",
    formSuccessText: "Кеңешчи жакынкы иш сааттарында чалат. Салонго паспорт алып барыңыз.",
    formAnother: "Дагы жөнөтүү",
    formError: "Ат менен телефонду жазыңыз — ошондо кеңешчи жетет.",
    cityNames: {
      moscow: "Москва",
      spb: "Санкт-Петербург",
      kazan: "Казан",
      ekb: "Екатеринбург",
      nsk: "Новосибирск",
      krasnodar: "Краснодар",
    },
    originCountries: [
      "Өзбекстан",
      "Тажикстан",
      "Кыргызстан",
      "Армения",
      "Казакстан",
      "Азербайжан",
      "Башка өлкө",
    ],
    dialogTitle: "«Жылуу тосуп алуу» SIM арызы",
    dialogLead: "Байланыш калтырыңыз — тарифти даярдап, жакынкы салонду айтабыз.",
    footerLegal:
      "Баалар НДС менен рубль менен, таанышуу үчүн. Пакеттер ар 30 күндө жаңыланат, калдык өтпөйт.",
    footerNotOfficial:
      "Демонстрациялык лендинг. ПАО «МегаФон» расмий сайты эмес. Актуу тарифтер — megafon.ru жана байланыш салондорунда.",
    footerRights: "МегаФон · Орусияда иштеп, үйгө чалгандар үчүн байланыш",
    lang: "Тил",
    closeMenu: "Менюну жабуу",
    openMenu: "Менюну ачуу",
  },
};
