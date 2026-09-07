import type { Locale } from "@/lib/i18n";

export const MEGASILA_HUB = "https://moscow.megafon.ru/services/megapowers/megasily/";
export const TARIFF_PAGES = {
  minimum: "https://moscow.megafon.ru/tariffs/all/mf_minimum_plus.html",
  family: "https://moscow.megafon.ru/tariffs/all/semejnyj_plus.html",
} as const;

type Text = Record<Locale, string>;

const t = {
  autoBadge: {
    ru: "Сразу",
    uz: "Darhol",
    tg: "Фавран",
    ky: "Дароо",
  } satisfies Text,
  optInBadge: {
    ru: "Нужно подключить",
    uz: "Ulanish kerak",
    tg: "Пайваст кардан лозим",
    ky: "Кошуу керек",
  } satisfies Text,
  ruDetail: {
    ru: "Подробнее на русском",
    uz: "Batafsil rus tilida",
    tg: "Муфассал ба русӣ",
    ky: "Орусча кеңири",
  } satisfies Text,
} as const;

export const meaningTariffs = [
  {
    id: "minimum" as const,
    name: "Минимум +",
    level: { ru: "Базовый", uz: "Asosiy", tg: "Асосӣ", ky: "Негизги" } satisfies Text,
    price: "от 850 ₽",
    minutes: "400 минут по России",
    data: {
      ru: "Пакет интернета — хватит оставаться на связи, работать и учиться",
      uz: "Internet paketi — aloqa, ish va o‘qish uchun yetadi",
      tg: "Бастаи интернет — барои алоқа, кор ва таҳсил кифоя",
      ky: "Интернет пакети — байланыш, иш жана окуу үчүн жетет",
    } satisfies Text,
    purpose: {
      ru: "Базовый тариф, чтобы оставаться на связи, работать и учиться.",
      uz: "Aloqada qolish, ishlash va o‘qish uchun asosiy tarif.",
      tg: "Тарифи асосӣ, то дар алоқа монед, кор кунед ва таҳсил кунед.",
      ky: "Байланышта болуу, иштөө жана окуу үчүн негизги тариф.",
    } satisfies Text,
    groups: [
      {
        title: { ru: "На связи", uz: "Aloqada", tg: "Дар алоқа", ky: "Байланышта" },
        items: {
          ru: ["400 минут по России", "Мессенджеры и карты в пакете"],
          uz: ["Rossiya bo‘yicha 400 daqiqa", "Messenjer va xarita paketda"],
          tg: ["400 дақиқа дар Русия", "Мессенҷер ва харита дар баста"],
          ky: ["Россия боюнча 400 мүнөт", "Мессенджер менен карта пакетте"],
        },
      },
      {
        title: { ru: "Работа и учёба", uz: "Ish va o‘qish", tg: "Кор ва таҳсил", ky: "Иш жана окуу" },
        items: {
          ru: [
            "Интернета хватит на смену, чаты с бригадиром и учёбу",
            "Безлимит на МегаФон России, когда минуты закончились",
          ],
          uz: [
            "Internet smena, brigadir chatlari va o‘qish uchun yetadi",
            "Daqiqalar tugasa, MegaFon Rossiyaga cheksiz",
          ],
          tg: [
            "Интернет барои смена, чат бо бригадир ва таҳсил кифоя",
            "Вақте дақиқаҳо тамом шуд — беҳад ба МегаФон Русия",
          ],
          ky: [
            "Интернет смена, бригадир чаттары жана окуу үчүн жетет",
            "Мүнөт бүтсө, MegaFon Россияга чексиз",
          ],
        },
      },
    ],
  },
  {
    id: "family" as const,
    name: "Семейный +",
    level: { ru: "Комфорт", uz: "Komfort", tg: "Комфорт", ky: "Комфорт" } satisfies Text,
    price: "от 1 140 ₽",
    minutes: "1 500 минут по России",
    data: {
      ru: "Безлимитный интернет — хватит на работу, развлечения и близких",
      uz: "Cheksiz internet — ish, ko‘ngilochar va yaqinlar uchun yetadi",
      tg: "Интернети беҳад — барои кор, фароғат ва наздикон кифоя",
      ky: "Чексиз интернет — иш, көңүл ачуу жана жакындар үчүн жетет",
    } satisfies Text,
    purpose: {
      ru: "Комфорт-класс: безлимитный интернет, которого точно хватит.",
      uz: "Komfort-klass: aniq yetadigan cheksiz internet.",
      tg: "Синфи комфорт: интернети беҳад, ки ҳатман кифоя аст.",
      ky: "Комфорт-класс: так жете турган чексиз интернет.",
    } satisfies Text,
    groups: [
      {
        title: { ru: "Работа", uz: "Ish", tg: "Кор", ky: "Иш" },
        items: {
          ru: ["Яндекс Go, такси, навигация, склады — интернет не кончится в смену"],
          uz: ["Yandex Go, taksi, navigatsiya, ombor — internet smenada tugamaydi"],
          tg: ["Yandex Go, таксӣ, навигация, анбор — интернет дар смена тамом намешавад"],
          ky: ["Yandex Go, такси, навигация, кампа — интернет сменада бүтпөйт"],
        },
      },
      {
        title: { ru: "Развлечения", uz: "Ko‘ngilochar", tg: "Фароғат", ky: "Көңүл ачуу" },
        items: {
          ru: ["Видеосервисы и ТВ", "Раздача интернета на ноутбук или второй телефон"],
          uz: ["Video servislar va TV", "Internetni noutbuk yoki ikkinchi telefonga ulashish"],
          tg: ["Видеосервисҳо ва ТВ", "Интернетро ба ноутбук ё телефони дуюм додан"],
          ky: ["Видеосервистер жана ТВ", "Интернетти ноутбук же экинчи телефонго берүү"],
        },
      },
      {
        title: { ru: "Общение с близкими", uz: "Yaqinlar bilan aloqa", tg: "Алоқа бо наздикон", ky: "Жакындар менен байланыш" },
        items: {
          ru: [
            "Звонки и сообщения в мессенджерах, которые работают в РФ",
            "Соцсети и национальные сайты страны, откуда вы приехали",
          ],
          uz: [
            "RF da ishlaydigan messenjerlarda qo‘ng‘iroq va xabar",
            "Ijtimoiy tarmoq va o‘z mamlakatingiz saytlari",
          ],
          tg: [
            "Занг ва паём дар мессенҷерҳое, ки дар РФ кор мекунанд",
            "Шабакаҳои иҷтимоӣ ва сомонаҳои кишвари шумо",
          ],
          ky: [
            "РФде иштеген мессенджерлерде чалуу жана билдирүү",
            "Соцтармактар жана өз өлкөңүздүн сайттары",
          ],
        },
      },
      {
        title: { ru: "МегаСемья", uz: "MegaOila", tg: "МегаОила", ky: "МегаҮй-бүлө" },
        items: {
          ru: ["Делить тариф с близкими — до 5 человек"],
          uz: ["Tarifni yaqinlar bilan bo‘lishish — 5 kishigacha"],
          tg: ["Тарифро бо наздикон тақсим кардан — то 5 нафар"],
          ky: ["Тарифти жакындар менен бөлүшүү — 5 кишиге чейин"],
        },
      },
    ],
  },
] as const;

export const autoMigrantProducts = [
  {
    id: "warm",
    name: {
      ru: "Тёплый приём",
      uz: "Iliq kutib olish",
      tg: "Қабули гарм",
      ky: "Жылуу тосуп алуу",
    } satisfies Text,
    text: {
      ru: "Выгодные минуты в СНГ и Китай. Подключается сам всем нерезидентам — ничего жать не нужно.",
      uz: "MDH va Xitoyga arzon daqiqalar. Barcha norezidentlarga o‘zi yoqiladi — hech narsa bosish shart emas.",
      tg: "Дақиқаҳои фоиданок ба ИДМ ва Чин. Ба ҳамаи ғайрирезидентҳо худаш пайваст мешавад.",
      ky: "КМШ жана Кытайга арзан мүнөттөр. Бардык резидент эместерге өзү күйөт.",
    } satisfies Text,
  },
  {
    id: "transfers",
    name: {
      ru: "Бонусы за переводы в салоне",
      uz: "Salonda pul o‘tkazma bonusi",
      tg: "Бонус барои интиқол дар салон",
      ky: "Салондо которуу бонусу",
    } satisfies Text,
    text: {
      ru: "Перевод домой именно в салоне МегаФона, не в приложении. От 30 000 ₽ — минуты или месяцы связи.",
      uz: "Uyga pulni MegaFon salonida o‘tkazing, ilovada emas. 30 000 ₽ dan — daqiqa yoki oylik aloqa.",
      tg: "Пулро ба хона дар салони МегаФон гузаронед, на дар барнома. Аз 30 000 ₽ — дақиқа ё моҳҳои алоқа.",
      ky: "Үйгө акчаны MegaFon салонунан которуңуз, тиркемеден эмес. 30 000 ₽ ден — мүнөт же айлык байланыш.",
    } satisfies Text,
  },
  {
    id: "return-gb",
    name: {
      ru: "+20 ГБ за возврат",
      uz: "Qaytganda +20 GB",
      tg: "+20 ГБ ҳангоми бозгашт",
      ky: "Кайтканда +20 ГБ",
    } satisfies Text,
    text: {
      ru: "Уезжали на сезон и снова пользуетесь тарифом — пакет капает до 6 месяцев сам.",
      uz: "Mavsumga ketib, tarifga qaytsangiz — paket 6 oygacha o‘zi tushadi.",
      tg: "Ба мавсим рафтед ва боз тарифро истифода мебаред — баста то 6 моҳ худаш меояд.",
      ky: "Сезонго кетип, тарифе кайтып келсеңиз — пакет 6 айга чейин өзү түшөт.",
    } satisfies Text,
  },
] as const;

export const optInMigrantProducts = [
  {
    id: "intl100",
    name: {
      ru: "100 международных минут",
      uz: "100 xalqaro daqiqa",
      tg: "100 дақиқаи байналмилалӣ",
      ky: "100 эл аралык мүнөт",
    } satisfies Text,
    how: {
      ru: "В приложении МегаФон, по 0500 или в салоне. Без перехода на русский сайт.",
      uz: "MegaFon ilovasida, 0500 yoki salonda ulang. Rus saytiga o‘tish shart emas.",
      tg: "Дар барномаи МегаФон, 0500 ё дар салон. Ба сомонаи русӣ гузаштан лозим нест.",
      ky: "MegaFon тиркемесинде, 0500 же салондо. Орус сайтына кирбей эле.",
    } satisfies Text,
    ruHref: TARIFF_PAGES.minimum,
  },
  {
    id: "all-countries",
    name: {
      ru: "Звони во все страны",
      uz: "Barcha mamlakatlarga qo‘ng‘iroq",
      tg: "Ба ҳамаи кишварҳо занг занед",
      ky: "Бардык өлкөлөргө чалуу",
    } satisfies Text,
    how: {
      ru: "Подключить в приложении, по 0500 или в салоне. Цена зависит от страны.",
      uz: "Ilova, 0500 yoki salonda ulang. Narx mamlakatga qarab.",
      tg: "Дар барнома, 0500 ё салон пайваст кунед. Нарх аз кишвар вобаста аст.",
      ky: "Тиркеме, 0500 же салондон кошуңуз. Баа өлкөгө жараша.",
    } satisfies Text,
    ruHref: TARIFF_PAGES.family,
  },
] as const;

export const megaSilas = [
  {
    name: "Связь при нуле",
    text: {
      ru: "Минуты, ГБ и СМС ещё несколько дней, если баланс ушёл в минус.",
      uz: "Balans minus bo‘lsa, daqiqa, GB va SMS bir necha kun ishlaydi.",
      tg: "Агар баланс манфӣ шавад, дақиқа, ГБ ва СМС чанд рӯз кор мекунанд.",
      ky: "Баланс минуска кетсе, мүнөт, ГБ жана SMS бир нече күн иштейт.",
    } satisfies Text,
  },
  {
    name: "Бонусные ГБ",
    text: {
      ru: "На Минимум + до +10 ГБ, если оплатили тариф вовремя. Это МегаСила, её нужно включить.",
      uz: "Minimum + da o‘z vaqtida to‘lasangiz +10 GB gacha. Bu MegaKuch — yoqish kerak.",
      tg: "Дар Минимум + то +10 ГБ, агар сари вақт пардохт кунед. Ин МегаҚувва — фаъол кардан лозим.",
      ky: "Минимум + да өз убагында төлөсөңүз +10 ГБ чейин. Бул МегаКүч — күйгүзүү керек.",
    } satisfies Text,
  },
  {
    name: "Безлимит на мессенджеры",
    text: {
      ru: "МАКС, Telegram, Snapchat не тратят пакет ГБ.",
      uz: "MAX, Telegram, Snapchat GB paketini yemaydi.",
      tg: "MAX, Telegram, Snapchat бастаи ГБ-ро намехӯранд.",
      ky: "MAX, Telegram, Snapchat ГБ пакетин жебейт.",
    } satisfies Text,
  },
  {
    name: "Безлимит на соцсети",
    text: {
      ru: "ВКонтакте, Одноклассники, TikTok, Twitch без расхода ГБ.",
      uz: "VK, OK, TikTok, Twitch GB sarflamaydi.",
      tg: "VK, OK, TikTok, Twitch ГБ сарф намекунанд.",
      ky: "VK, OK, TikTok, Twitch ГБ сарптабайт.",
    } satisfies Text,
  },
  {
    name: "Безлимит на видео",
    text: {
      ru: "VK Видео и RUTUBE без расхода пакета.",
      uz: "VK Video va RUTUBE paketni yemaydi.",
      tg: "VK Video ва RUTUBE бастарро намехӯранд.",
      ky: "VK Video жана RUTUBE пакетти жебейт.",
    } satisfies Text,
  },
  {
    name: "Музыка и кинотеатры",
    text: {
      ru: "Яндекс Музыка, Иви, Okko, Кинопоиск, START и другие — интернет на сервисы.",
      uz: "Yandex Music, Ivi, Okko, Kinopoisk, START — servislar uchun internet.",
      tg: "Yandex Music, Ivi, Okko, Kinopoisk, START — интернет барои сервисҳо.",
      ky: "Yandex Music, Ivi, Okko, Kinopoisk, START — сервистерге интернет.",
    } satisfies Text,
  },
  {
    name: "Перенос остатков",
    text: {
      ru: "Неистраченные минуты, ГБ и СМС переходят на следующий месяц.",
      uz: "Sarflanmagan daqiqa, GB va SMS keyingi oyga o‘tadi.",
      tg: "Дақиқа, ГБ ва СМС-и истифоданашуда ба моҳи баъдӣ мегузаранд.",
      ky: "Сарпталбаган мүнөт, ГБ жана SMS кийинки айга өтөт.",
    } satisfies Text,
  },
  {
    name: "Онлайн-кинотеатр START",
    text: {
      ru: "Базовая коллекция и ТВ. Полный каталог — по спеццене на сайте START.",
      uz: "Asosiy to‘plam va TV. To‘liq katalog — START saytida maxsus narxda.",
      tg: "Маҷмӯаи асосӣ ва ТВ. Каталоги пурра — дар сомонаи START бо нархи махсус.",
      ky: "Негизги топтом жана ТВ. Толук каталог — START сайтында атайын баада.",
    } satisfies Text,
  },
] as const;

export const megaSilaHow = {
  title: {
    ru: "Как включить МегаСилы",
    uz: "MegaKuchlarni qanday yoqish",
    tg: "МегаҚувваҳоро чӣ тавр фаъол кардан",
    ky: "МегаКүчтөрдү кантип күйгүзүү",
  } satisfies Text,
  steps: {
    ru: [
      "Тариф МегаФон 3.0: «Минимум +» или «Семейный +».",
      "Приложение или Личный кабинет → Мой тариф → плитка «МегаСилы».",
      "Включите переключатели нужных сил.",
      "Нажмите «Применить». Или наберите 0500, *105*1969# или *105*2027#.",
    ],
    uz: [
      "MegaFon 3.0 tarifi: «Minimum +» yoki «Oilaviy +».",
      "Ilova yoki kabinet → Mening tarifim → «MegaKuchlar».",
      "Kerakli kuchlarning kalitini yoqing.",
      "«Qo‘llash» ni bosing. Yoki 0500, *105*1969# yoki *105*2027#.",
    ],
    tg: [
      "Тарифи МегаФон 3.0: «Минимум +» ё «Оилавӣ +».",
      "Барнома ё кабинет → Тарифи ман → «МегаҚувваҳо».",
      "Қувваҳои лозимиро фаъол кунед.",
      "«Татбиқ»-ро пахш кунед. Ё 0500, *105*1969# ё *105*2027#.",
    ],
    ky: [
      "MegaFon 3.0 тарифи: «Минимум +» же «Үй-бүлөлүк +».",
      "Тиркеме же кабинет → Менин тарифим → «МегаКүчтөр».",
      "Керектүү күчтөрдүн которгучун күйгүзүңүз.",
      "«Колдонуу» басыңыз. Же 0500, *105*1969# же *105*2027#.",
    ],
  },
  note: {
    ru: "На «Минимум +» — 9 МегаСил на выбор. На «Семейный +» тот же конструктор. При смене тарифа силы сбрасываются — включите снова.",
    uz: "«Minimum +» da 9 ta MegaKuch tanlanadi. «Oilaviy +» da ham shu. Tarif almashsa, kuchlar o‘chadi — qayta yoqing.",
    tg: "Дар «Минимум +» — 9 МегаҚувва. Дар «Оилавӣ +» ҳамин конструктор. Тариф иваз шавад — аз нав фаъол кунед.",
    ky: "«Минимум +» да 9 МегаКүч. «Үй-бүлөлүк +» да ошол конструктор. Тариф алмашса — кайра күйгүзүңүз.",
  } satisfies Text,
} as const;

export const offerUi = {
  ...t,
  meaningTitle: {
    ru: "Два тарифа по смыслу",
    uz: "Ikki tarif — ma’nosi bo‘yicha",
    tg: "Ду тариф аз рӯи маъно",
    ky: "Эки тариф мааниси боюнча",
  } satisfies Text,
  meaningLead: {
    ru: "Базовый — чтобы быть на связи, работать и учиться. Комфорт — безлимит на работу, ТВ, близких и МегаСемью.",
            uz: "Asosiy — aloqa, ish va o‘qish. Komfort — ish, TV, yaqinlar va MegaOila uchun cheksiz.",
    tg: "Асосӣ — алоқа, кор ва таҳсил. Комфорт — беҳад барои кор, ТВ, наздикон ва МегаОила.",
    ky: "Негизги — байланыш, иш жана окуу. Комфорт — иш, ТВ, жакындар жана МегаҮй-бүлө үчүн чексиз.",
  } satisfies Text,
  autoTitle: {
    ru: "Для гостей из СНГ — сразу",
    uz: "MDH mehmonlari uchun — darhol",
    tg: "Барои меҳмонони ИДМ — фавран",
    ky: "КМШ коноктору үчүн — дароо",
  } satisfies Text,
  autoLead: {
    ru: "Эти продукты включаются сами. Отдельная заявка не нужна.",
    uz: "Bu mahsulotlar o‘zi yoqiladi. Alohida ariza shart emas.",
    tg: "Ин маҳсулотҳо худашон пайваст мешаванд. Аризаи алоҳида лозим нест.",
    ky: "Бул продукттар өзү күйөт. Атайын арыз керек эмес.",
  } satisfies Text,
  optInTitle: {
    ru: "Подключить отдельно",
    uz: "Alohida ulash",
    tg: "Алоҳида пайваст кардан",
    ky: "Айрым кошуу",
  } satisfies Text,
  optInLead: {
    ru: "Кратко на вашем языке. Подробные условия — ссылка на русскую страницу МегаФона.",
    uz: "Qisqacha o‘z tilingizda. To‘liq shartlar — MegaFonning ruscha sahifasi.",
    tg: "Мухтасар бо забони шумо. Шартҳои пурра — саҳифаи русии МегаФон.",
    ky: "Кыскача өз тилиңизде. Толук шарттар — MegaFonдун орусча барагы.",
  } satisfies Text,
  silaTitle: {
    ru: "Стандартные МегаСилы",
    uz: "Oddiy MegaKuchlar",
    tg: "МегаҚувваҳои стандартӣ",
    ky: "Стандарттуу МегаКүчтөр",
  } satisfies Text,
  silaLead: {
    ru: "Конструктор тарифа МегаФон 3.0. Не путать с продуктами для нерезидентов — силы включают сами в приложении.",
    uz: "MegaFon 3.0 tarif konstruktori. Norezident mahsulotlari emas — kuchlarni ilovada o‘zingiz yoqasiz.",
    tg: "Конструктори тарифи МегаФон 3.0. Ин маҳсулоти ғайрирезидент нест — қувваҳоро дар барнома худатон фаъол мекунед.",
    ky: "MegaFon 3.0 тариф конструктору. Резидент эмес продукттар эмес — күчтөрдү тиркемеден өзүңүз күйгүзөсүз.",
  } satisfies Text,
  silaMinimum: {
    ru: "МегаСилы на Минимум +",
    uz: "Minimum + MegaKuchlari",
    tg: "МегаҚувваҳо дар Минимум +",
    ky: "Минимум + МегаКүчтөрү",
  } satisfies Text,
  silaFamily: {
    ru: "МегаСилы на Семейный +",
    uz: "Oilaviy + MegaKuchlari",
    tg: "МегаҚувваҳо дар Оилавӣ +",
    ky: "Үй-бүлөлүк + МегаКүчтөрү",
  } satisfies Text,
  draftKicker: {
    ru: "Черновик новой версии",
    uz: "Yangi versiya qoralamasi",
    tg: "Сиёҳнависӣ версияи нав",
    ky: "Жаңы версиянын долбоору",
  } satisfies Text,
  draftOld: {
    ru: "Смотреть текущую страницу",
    uz: "Joriy sahifani ko‘rish",
    tg: "Саҳифаи ҷориро дидан",
    ky: "Учурдагы баракты көрүү",
  } satisfies Text,
} as const;
