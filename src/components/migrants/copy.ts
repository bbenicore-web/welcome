import type { Locale } from "@/lib/i18n";

export type MigrantCopy = {
  login: string;
  openMenu: string;
  closeMenu: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  heroTitleA: string;
  heroTitleB: string;
  heroLead: string;
  cta: string;
  benefitsTitle: string;
  benefitCards: { title: string; text: string }[];
  moreTitle: string;
  tiles: { title: string; text: string }[];
  tariffsTitle: string;
  tariffs: {
    id: "work" | "study" | "family";
    title: string;
    text: string;
    tags: string[];
  }[];
  details: string;
  connectTitle: string;
  tabOnline: string;
  tabSalon: string;
  onlineTitle: string;
  onlineSteps: string[];
  prepare: string;
  salonTitle: string;
  salonSteps: string[];
  findSalon: string;
  mapTitle: string;
  mapLead: string;
  mapSalon: string;
  mapDistance: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
  menu: { href: string; label: string }[];
  footerGroups: { title: string; links: { label: string; href: string }[] }[];
  appTitle: string;
  appText: string;
  phoneLabel: string;
  legal: string;
  disclaimer: string;
  formTitle: string;
  formLead: string;
  formName: string;
  formPhone: string;
  formCity: string;
  formSubmit: string;
  formSending: string;
  formSuccessTitle: string;
  formSuccessText: string;
  formError: string;
  formAnother: string;
  langLabel: string;
};

const ru: MigrantCopy = {
  login: "Войти",
  openMenu: "Открыть меню",
  closeMenu: "Закрыть меню",
  breadcrumbHome: "МегаФон",
  breadcrumbCurrent: "Связь для иностранных граждан",
  heroTitleA: "На связи",
  heroTitleB: "с близкими",
  heroLead: "Тарифы для гостей, интернет, звонки домой и полезные сервисы",
  cta: "Стать абонентом",
  benefitsTitle: "Связь для всего, что важно",
  benefitCards: [
    {
      title: "Быстрый интернет",
      text: "Мессенджеры, карты и видеозвонки без доплат.",
    },
    {
      title: "Связь с близкими",
      text: "Звонки домой по специальным ценам.",
    },
  ],
  moreTitle:
    "А чтобы каждый день был проще, позаботились и о других важных вещах",
  tiles: [
    { title: "Мессенджеры", text: "WhatsApp, Telegram и IMO при любом балансе" },
    { title: "Карты и такси", text: "Яндекс Go, 2ГИС и карты в пакете" },
    { title: "Родной язык", text: "Меню и баланс: *105*2022#" },
    { title: "Номер с вами", text: "Можно сохранить на сезон" },
  ],
  tariffsTitle: "Выбирайте свой тариф",
  tariffs: [
    {
      id: "work",
      title: "Для работы",
      text: "Безлимитный доступ к сервисам, которые помогают в работе и общении каждый день.",
      tags: ["безлимит на мессенджеры", "безлимит на соцсети", "безлимит на видео"],
    },
    {
      id: "study",
      title: "Для учёбы",
      text: "Безлимитный доступ к сервисам для занятий, карт и связи с близкими.",
      tags: ["безлимит на мессенджеры", "безлимит на видео", "безлимит на музыку"],
    },
    {
      id: "family",
      title: "Для семьи",
      text: "Объединяйте близких в МегаСемью: три участника в одной семейной группе",
      tags: ["МегаСемья", "общий пакет", "семейная группа"],
    },
  ],
  details: "Подробнее",
  connectTitle: "Как стать абонентом",
  tabOnline: "Онлайн",
  tabSalon: "В салоне",
  onlineTitle: "Можно подключиться онлайн",
  onlineSteps: [
    "Выберите тариф и способ получения SIM или eSIM.",
    "Подтвердите личность доступным для вас способом.",
    "Завершите оформление по подсказкам на экране.",
  ],
  prepare: "Пойти в салон",
  salonTitle: "Сначала подготовьте данные",
  salonSteps: [
    "Подготовьте паспорт и перевод, если он необходим.",
    "Оформите необходимые данные — СНИЛС и подтверждённые Госуслуги, если они требуются.",
    "Сдайте биометрию лица и голоса в уполномоченном банке.",
    "Пройдите проверку и оформите SIM или eSIM доступным способом.",
  ],
  findSalon: "Найти салон",
  mapTitle: "Поможем разобраться с подключением",
  mapLead:
    "Приходите в удобный салон связи. Ответим на вопросы и подскажем, какие документы понадобятся.",
  mapSalon: "Салон на Тверской",
  mapDistance: "Москва · ближайший салон",
  faqTitle: "Вопросы и ответы",
  faq: [
    {
      q: "Какие документы нужны, чтобы оформить SIM?",
      a: "Паспорт и перевод, если он необходим, СНИЛС, подтверждённые Госуслуги и биометрия лица и голоса. В салоне подскажут, что уже готово, а что можно сделать на месте.",
    },
    {
      q: "Можно ли подключиться онлайн или только в салоне?",
      a: "Онлайн — если данные уже подтверждены. Если нет, сначала подготовьте документы и приходите в салон.",
    },
    {
      q: "Сколько номеров можно оформить?",
      a: "Не больше 10 номеров на человека у всех операторов вместе.",
    },
  ],
  menu: [
    { href: "#tariffs", label: "Тарифы" },
    { href: "#connect", label: "Как подключить" },
    { href: "#salons", label: "Салоны" },
    { href: "#faq", label: "Вопросы" },
  ],
  footerGroups: [
    {
      title: "Связь",
      links: [
        { label: "Тарифы для гостей", href: "#tariffs" },
        { label: "Звонки домой", href: "#benefits" },
        { label: "eSIM и SIM", href: "#connect" },
      ],
    },
    {
      title: "Подключение",
      links: [
        { label: "Стать абонентом онлайн", href: "#connect" },
        { label: "Салоны связи", href: "#salons" },
        { label: "Какие документы нужны", href: "#faq" },
      ],
    },
    {
      title: "Поддержка",
      links: [
        { label: "Вопросы и ответы", href: "#faq" },
        { label: "8 800 550-05-00", href: "tel:88005500500" },
      ],
    },
  ],
  appTitle: "Приложение МегаФон",
  appText: "Баланс, остатки пакета и салоны рядом — в телефоне.",
  phoneLabel: "Бесплатно по России",
  legal:
    "Условия тарифов, звонков домой и список документов зависят от региона и даты подключения. Актуальные правила — на megafon.ru и в салоне связи.",
  disclaimer:
    "Демонстрационный лендинг. Не является официальным сайтом ПАО «МегаФон».",
  formTitle: "Стать абонентом",
  formLead: "Оставьте номер — подскажем салон и какие документы взять с собой.",
  formName: "Как к вам обращаться",
  formPhone: "Телефон",
  formCity: "Город",
  formSubmit: "Отправить заявку",
  formSending: "Отправляем…",
  formSuccessTitle: "Заявка принята",
  formSuccessText:
    "Перезвоним в рабочие часы и подскажем, что взять в салон: паспорт с переводом, СНИЛС и подтверждённые Госуслуги.",
  formError: "Укажите имя и телефон — так мы сможем перезвонить.",
  formAnother: "Отправить ещё одну",
  langLabel: "Язык страницы",
};

const uz: MigrantCopy = {
  ...ru,
  login: "Kirish",
  openMenu: "Menyuni ochish",
  closeMenu: "Menyuni yopish",
  breadcrumbHome: "MegaFon",
  breadcrumbCurrent: "Chet el fuqarolari uchun aloqa",
  heroTitleA: "Yaqinlar",
  heroTitleB: "bilan aloqada",
  heroLead:
    "Mehmonlar uchun tariflar, internet, uyga qo‘ng‘iroqlar va foydali xizmatlar",
  cta: "Abonent bo‘lish",
  benefitsTitle: "Muhim bo‘lgan hamma narsa uchun aloqa",
  benefitCards: [
    {
      title: "Tez internet",
      text: "Messenjerlar, xaritalar va videoqo‘ng‘iroqlar qo‘shimcha to‘lovsiz.",
    },
    {
      title: "Yaqinlar bilan aloqa",
      text: "Uyga qo‘ng‘iroqlar maxsus narxda.",
    },
  ],
  moreTitle: "Har bir kun osonroq bo‘lishi uchun boshqa muhim narsalarni ham o‘yladik",
  tiles: [
    { title: "Messenjerlar", text: "WhatsApp, Telegram va IMO har qanday balansda" },
    { title: "Xarita va taksi", text: "Yandex Go, 2GIS va xaritalar paketda" },
    { title: "Ona tili", text: "Menyu va balans: *105*2022#" },
    { title: "Raqam yonida", text: "Mavsumga saqlash mumkin" },
  ],
  tariffsTitle: "O‘z tarifingizni tanlang",
  tariffs: [
    {
      id: "work",
      title: "Ish uchun",
      text: "Ish va muloqotga yordam beradigan servislarga cheksiz kirish.",
      tags: ["messenjerlar", "ijtimoiy tarmoqlar", "video"],
    },
    {
      id: "study",
      title: "O‘qish uchun",
      text: "Darslar, xaritalar va yaqinlar bilan aloqa uchun cheksiz kirish.",
      tags: ["messenjerlar", "video", "musiqa"],
    },
    {
      id: "family",
      title: "Oila uchun",
      text: "Yaqinlarni MegaOilaga biriktiring: bitta oilaviy guruhda uch ishtirokchi",
      tags: ["MegaOila", "umumiy paket", "oilaviy guruh"],
    },
  ],
  details: "Batafsil",
  connectTitle: "Qanday abonent bo‘lish mumkin",
  tabOnline: "Onlayn",
  tabSalon: "Salonda",
  onlineTitle: "Onlayn ulanish mumkin",
  onlineSteps: [
    "Tarifni va SIM yoki eSIM olish usulini tanlang.",
    "Shaxsingizni sizga mos usulda tasdiqlang.",
    "Rasmiylashtirishni ekrandagi ko‘rsatmalar bo‘yicha yakunlang.",
  ],
  prepare: "Salonga borish",
  salonTitle: "Avval ma’lumotlarni tayyorlang",
  salonSteps: [
    "Pasport va tarjimani, agar kerak bo‘lsa, tayyorlang.",
    "Kerakli ma’lumotlarni rasmiylashtiring — SNILS va tasdiqlangan Gosuslugi, agar talab qilinsa.",
    "Yuz va ovoz biometriyasini vakolatli bankda topshiring.",
    "Tekshiruvdan o‘ting va SIM yoki eSIM ni mavjud usulda rasmiylashtiring.",
  ],
  findSalon: "Salon topish",
  mapTitle: "Ulashda yordam beramiz",
  mapLead:
    "Qulay aloqa saloniga keling. Savollarga javob beramiz va qanday hujjatlar kerakligini aytamiz.",
  mapSalon: "Tverskaya dagi salon",
  mapDistance: "Moskva · eng yaqin salon",
  faqTitle: "Savollar va javoblar",
  faq: [
    {
      q: "SIM rasmiylashtirish uchun qanday hujjatlar kerak?",
      a: "Pasport va tarjima, agar kerak bo‘lsa, SNILS, tasdiqlangan Gosuslugi hamda yuz va ovoz biometriyasi. Salonda nima tayyor, nimani joyida qilish mumkinligini aytishadi.",
    },
    {
      q: "Onlayn ulanish mumkinmi yoki faqat salondami?",
      a: "Ma’lumotlar tasdiqlangan bo‘lsa — onlayn. Aks holda avval hujjatlarni tayyorlab, salonga keling.",
    },
    {
      q: "Nechta raqam rasmiylashtirish mumkin?",
      a: "Bir kishiga barcha operatorlarda jami 10 tadan oshiq emas.",
    },
  ],
  menu: [
    { href: "#tariffs", label: "Tariflar" },
    { href: "#connect", label: "Qanday ulash" },
    { href: "#salons", label: "Salonlar" },
    { href: "#faq", label: "Savollar" },
  ],
  footerGroups: [
    {
      title: "Aloqa",
      links: [
        { label: "Mehmonlar uchun tariflar", href: "#tariffs" },
        { label: "Uyga qo‘ng‘iroq", href: "#benefits" },
        { label: "eSIM va SIM", href: "#connect" },
      ],
    },
    {
      title: "Ulash",
      links: [
        { label: "Onlayn abonent bo‘lish", href: "#connect" },
        { label: "Aloqa salonlari", href: "#salons" },
        { label: "Qanday hujjatlar kerak", href: "#faq" },
      ],
    },
    {
      title: "Yordam",
      links: [
        { label: "Savollar va javoblar", href: "#faq" },
        { label: "8 800 550-05-00", href: "tel:88005500500" },
      ],
    },
  ],
  appTitle: "MegaFon ilovasi",
  appText: "Balans, paket qoldig‘i va yaqin salonlar — telefonda.",
  phoneLabel: "Rossiya bo‘yicha bepul",
  legal:
    "Tarif, uyga qo‘ng‘iroq va hujjatlar ro‘yxati hudud va ulanish sanasiga bog‘liq. Dolzarb qoidalar — megafon.ru va salonda.",
  disclaimer: "Namoyish lentingi. PJSC «MegaFon» rasmiy sayti emas.",
  formTitle: "Abonent bo‘lish",
  formLead: "Raqamingizni qoldiring — salon va hujjatlarni aytamiz.",
  formName: "Ismingiz",
  formPhone: "Telefon",
  formCity: "Shahar",
  formSubmit: "Ariza yuborish",
  formSending: "Yuborilmoqda…",
  formSuccessTitle: "Ariza qabul qilindi",
  formSuccessText:
    "Ish vaqtida qo‘ng‘iroq qilamiz va salonga nima olish kerakligini aytamiz.",
  formError: "Ism va telefonni kiriting — qo‘ng‘iroq qila olamiz.",
  formAnother: "Yana bittasini yuborish",
  langLabel: "Sahifa tili",
};

const tg: MigrantCopy = {
  ...ru,
  login: "Ворид",
  openMenu: "Менюро кушоед",
  closeMenu: "Менюро пӯшед",
  breadcrumbHome: "МегаФон",
  breadcrumbCurrent: "Алоқа барои шаҳрвандони хориҷӣ",
  heroTitleA: "Дар тамос",
  heroTitleB: "бо наздикон",
  heroLead:
    "Тарифҳо барои меҳмонон, интернет, занг ба хона ва хидматҳои муфид",
  cta: "Абонент шудан",
  benefitsTitle: "Алоқа барои ҳар чизи муҳим",
  benefitCards: [
    {
      title: "Интернети тез",
      text: "Паёмрасонҳо, харитаҳо ва зангҳои видеоӣ бе пардохти иловагӣ.",
    },
    {
      title: "Алоқа бо наздикон",
      text: "Занг ба хона бо нархи махсус.",
    },
  ],
  moreTitle: "То ҳар рӯз осонтар шавад, дар бораи чизҳои дигари муҳим ҳам фикр кардем",
  tiles: [
    { title: "Паёмрасонҳо", text: "WhatsApp, Telegram ва IMO бо ҳар бақия" },
    { title: "Харита ва таксӣ", text: "Яндекс Go, 2ГИС ва харитаҳо дар баста" },
    { title: "Забони модарӣ", text: "Меню ва бақия: *105*2022#" },
    { title: "Рақам бо шумо", text: "Метавон барои мавсим нигоҳ дошт" },
  ],
  tariffsTitle: "Тарифи худро интихоб кунед",
  tariffs: [
    {
      id: "work",
      title: "Барои кор",
      text: "Дастрасии бемаҳдуд ба хидматҳое, ки ба кор ва муошират кӯмак мекунанд.",
      tags: ["паёмрасонҳо", "шабакаҳо", "видео"],
    },
    {
      id: "study",
      title: "Барои таҳсил",
      text: "Дастрасии бемаҳдуд барои дарс, харита ва алоқа бо наздикон.",
      tags: ["паёмрасонҳо", "видео", "мусиқӣ"],
    },
    {
      id: "family",
      title: "Барои оила",
      text: "Наздиконро дар МегаОила муттаҳид кунед: се иштирокчӣ дар як гурӯҳи оилавӣ",
      tags: ["МегаОила", "бастаи умумӣ", "гурӯҳи оилавӣ"],
    },
  ],
  details: "Муфассал",
  connectTitle: "Чӣ тавр абонент шавем",
  tabOnline: "Онлайн",
  tabSalon: "Дар салон",
  onlineTitle: "Метавон онлайн пайваст шуд",
  onlineSteps: [
    "Тариф ва роҳи гирифтани SIM ё eSIM-ро интихоб кунед.",
    "Шахсиятро бо усули дастрас тасдиқ кунед.",
    "Барасмиятдарориро аз рӯи нишондодҳои экран анҷом диҳед.",
  ],
  prepare: "Ба салон рафтан",
  salonTitle: "Аввал маълумотро омода кунед",
  salonSteps: [
    "Шиноснома ва тарҷумаро, агар лозим бошад, омода кунед.",
    "Маълумоти заруриро ба расмият дароред — СНИЛС ва Госуслуги тасдиқшуда, агар талаб шавад.",
    "Биометрияи рӯй ва овозиро дар бонки ваколатдор супоред.",
    "Санҷишро гузаред ва SIM ё eSIM-ро бо усули дастрас ба расмият дароред.",
  ],
  findSalon: "Салон ёфтан",
  mapTitle: "Барои пайвастшавӣ ёрӣ медиҳем",
  mapLead:
    "Ба салони мувофиқ биёед. Ба саволҳо ҷавоб медиҳем ва мегӯем, кадом ҳуҷҷатҳо лозиманд.",
  mapSalon: "Салон дар Тверская",
  mapDistance: "Маскав · наздиктарин салон",
  faqTitle: "Саволҳо ва ҷавобҳо",
  faq: [
    {
      q: "Барои SIM кадом ҳуҷҷатҳо лозиманд?",
      a: "Шиноснома ва тарҷума, агар лозим бошад, СНИЛС, Госуслуги тасдиқшуда ва биометрияи рӯй ва овоз. Дар салон мегӯянд, чӣ омода аст.",
    },
    {
      q: "Оё онлайн пайваст шудан мумкин аст?",
      a: "Агар маълумот тасдиқ шуда бошад — онлайн. Вагарна аввал ҳуҷҷатҳоро омода карда, ба салон биёед.",
    },
    {
      q: "Чанд рақам расмӣ кардан мумкин аст?",
      a: "На бештар аз 10 рақам барои як нафар дар ҳамаи операторҳо якҷоя.",
    },
  ],
  menu: [
    { href: "#tariffs", label: "Тарифҳо" },
    { href: "#connect", label: "Чӣ тавр пайваст шудан" },
    { href: "#salons", label: "Салонҳо" },
    { href: "#faq", label: "Саволҳо" },
  ],
  appTitle: "Барномаи МегаФон",
  appText: "Бақия, бастаи боқимонда ва салонҳои наздик — дар телефон.",
  phoneLabel: "Дар Русия ройгон",
  legal:
    "Шартҳои тариф, занг ба хона ва ҳуҷҷатҳо аз минтақа ва санаи пайвастшавӣ вобастаанд. Қоидаҳои ҷорӣ — дар megafon.ru ва салон.",
  disclaimer: "Лендинги намоишӣ. Сомонаи расмии ПАО «МегаФон» нест.",
  formTitle: "Абонент шудан",
  formLead: "Рақамро гузоред — салон ва ҳуҷҷатҳоро мегӯем.",
  formName: "Номи шумо",
  formPhone: "Телефон",
  formCity: "Шаҳр",
  formSubmit: "Ирсоли дархост",
  formSending: "Ирсол мешавад…",
  formSuccessTitle: "Дархост қабул шуд",
  formSuccessText: "Дар соатҳои корӣ занг мезанем ва мегӯем, чӣ ба салон гиред.",
  formError: "Ном ва телефонро нависед — то занг зада тавонем.",
  formAnother: "Боз як дархост",
  langLabel: "Забони саҳифа",
};

const ky: MigrantCopy = {
  ...ru,
  login: "Кирүү",
  openMenu: "Менюну ачуу",
  closeMenu: "Менюну жабуу",
  breadcrumbHome: "МегаФон",
  breadcrumbCurrent: "Чет өлкөлүк жарандар үчүн байланыш",
  heroTitleA: "Жакындарың",
  heroTitleB: "менен байланышта",
  heroLead:
    "Коноктор үчүн тарифтер, интернет, үйгө чалуу жана пайдалуу кызматтар",
  cta: "Абонент болуу",
  benefitsTitle: "Маанилүү нерселердин баары үчүн байланыш",
  benefitCards: [
    {
      title: "Ыкчам интернет",
      text: "Мессенджерлер, карталар жана видео чалуулар кошумча төлөмсүз.",
    },
    {
      title: "Жакындарың менен байланыш",
      text: "Үйгө чалуу өзгөчө баада.",
    },
  ],
  moreTitle: "Ар бир күн жеңил болушу үчүн башка маанилүү нерселерди да ойлодук",
  tiles: [
    { title: "Мессенджерлер", text: "WhatsApp, Telegram жана IMO каалаган баланста" },
    { title: "Карта жана такси", text: "Яндекс Go, 2ГИС жана карталар пакетте" },
    { title: "Эне тили", text: "Меню жана баланс: *105*2022#" },
    { title: "Номер жаныңда", text: "Сезонго сактап койсо болот" },
  ],
  tariffsTitle: "Өз тарифиңизди тандаңыз",
  tariffs: [
    {
      id: "work",
      title: "Иш үчүн",
      text: "Ишке жана баарлашууга жардам берген кызматтарга чексиз кирүү.",
      tags: ["мессенджерлер", "соцтармактар", "видео"],
    },
    {
      id: "study",
      title: "Окуу үчүн",
      text: "Сабак, карта жана жакындарың менен байланыш үчүн чексиз кирүү.",
      tags: ["мессенджерлер", "видео", "музыка"],
    },
    {
      id: "family",
      title: "Үй-бүлө үчүн",
      text: "Жакындарыңызды МегаҮй-бүлөгө бириктириңиз: бир топто үч катышуучу",
      tags: ["МегаҮй-бүлө", "орток пакет", "үй-бүлөлүк топ"],
    },
  ],
  details: "Кененирээк",
  connectTitle: "Кантип абонент болуу керек",
  tabOnline: "Онлайн",
  tabSalon: "Салондо",
  onlineTitle: "Онлайн туташса болот",
  onlineSteps: [
    "Тарифти жана SIM же eSIM алуу ыкмасын тандаңыз.",
    "Өздүгүңүздү жеткиликтүү ыкма менен ырастаңыз.",
    "Тариздөөнү экрандагы кеңештер боюнча бүтүрүңүз.",
  ],
  prepare: "Салонго баруу",
  salonTitle: "Адегенде маалыматты даярдаңыз",
  salonSteps: [
    "Паспортту жана котормону, керек болсо, даярдаңыз.",
    "Керектүү маалыматты тариздеңиз — СНИЛС жана ырасталган Госуслуги, эгер талап кылынса.",
    "Жүз жана үн биометриясын ыйгарым укуктуу банкта тапшырыңыз.",
    "Текшерүүдөн өтүп, SIM же eSIM’ди жеткиликтүү ыкма менен тариздеңиз.",
  ],
  findSalon: "Салон табуу",
  mapTitle: "Туташууга жардам беребиз",
  mapLead:
    "Ыңгайлуу салонго келиңиз. Суроолорго жооп беребиз жана кайсы документтер керек экенин айтабыз.",
  mapSalon: "Тверскаядагы салон",
  mapDistance: "Москва · жакынкы салон",
  faqTitle: "Суроолор жана жооптор",
  faq: [
    {
      q: "SIM тариздөө үчүн кайсы документтер керек?",
      a: "Паспорт жана котормо, керек болсо, СНИЛС, ырасталган Госуслуги жана жүз менен үндүн биометриясы. Салондо эмне даяр экенин айтышат.",
    },
    {
      q: "Онлайн туташса болобу же салондо ганабы?",
      a: "Маалымат ырасталган болсо — онлайн. Болбосо адегенде документтерди даярдап, салонго келиңиз.",
    },
    {
      q: "Канча номер тариздөөгө болот?",
      a: "Бир адамга бардык операторлордо чогуу 10 номерден ашык эмес.",
    },
  ],
  menu: [
    { href: "#tariffs", label: "Тарифтер" },
    { href: "#connect", label: "Кантип туташуу" },
    { href: "#salons", label: "Салондор" },
    { href: "#faq", label: "Суроолор" },
  ],
  appTitle: "МегаФон тиркемеси",
  appText: "Баланс, пакеттин калдыгы жана жакынкы салондор — телефондо.",
  phoneLabel: "Россия боюнча акысыз",
  legal:
    "Тариф, үйгө чалуу жана документтер аймакка жана туташуу күнүнө жараша болот. Учурдагы эрежелер — megafon.ru жана салондо.",
  disclaimer: "Демо лендинг. ПАО «МегаФон» расмий сайты эмес.",
  formTitle: "Абонент болуу",
  formLead: "Номериңизди калтырыңыз — салонду жана документтерди айтабыз.",
  formName: "Атыңыз",
  formPhone: "Телефон",
  formCity: "Шаар",
  formSubmit: "Арыз жөнөтүү",
  formSending: "Жөнөтүлүүдө…",
  formSuccessTitle: "Арыз кабыл алынды",
  formSuccessText: "Иш убактысында чалып, салонго эмне алууну айтабыз.",
  formError: "Ат жана телефонду жазыңыз — чала алабыз.",
  formAnother: "Дагы бир арыз",
  langLabel: "Барактын тили",
};

export const migrantCopy: Record<Locale, MigrantCopy> = { ru, uz, tg, ky };
