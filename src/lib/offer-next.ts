import type { Locale } from "@/lib/i18n";

export const MEGASILA_HUB = "https://moscow.megafon.ru/services/megapowers/megasily/";
export const TARIFF_PAGES = {
  minimum: "https://moscow.megafon.ru/tariffs/all/mf_minimum_plus.html",
  family: "https://moscow.megafon.ru/tariffs/all/semejnyj_plus.html",
} as const;

type Text = Record<Locale, string>;

const t = {
  autoBadge: {
    ru: "Само",
    uz: "O‘zi",
    tg: "Худ",
    ky: "Өзү",
  } satisfies Text,
  optInBadge: {
    ru: "Подключить",
    uz: "Ulash",
    tg: "Пайваст",
    ky: "Кошуу",
  } satisfies Text,
  ruDetail: {
    ru: "Подробнее на русском →",
    uz: "Ruscha batafsil →",
    tg: "Ба русӣ муфассал →",
    ky: "Орусча толугураак →",
  } satisfies Text,
} as const;

export const meaningTariffs = [
  {
    id: "minimum" as const,
    name: "Минимум +",
    level: { ru: "Работа и учёба", uz: "Ish va o‘qish", tg: "Кор ва таҳсил", ky: "Иш жана окуу" } satisfies Text,
    price: "от 850 ₽",
    minutes: "400 минут по России",
    data: {
      ru: "Пакет интернета на звонки, смену и учёбу",
      uz: "Qo‘ng‘iroq, smena va o‘qish uchun internet",
      tg: "Интернет барои занг, смена ва таҳсил",
      ky: "Чалуу, смена жана окуу үчүн интернет",
    } satisfies Text,
    purpose: {
      ru: "Хватает на смену, карты и учёбу. Когда минуты кончились — на МегаФон России звоните дальше.",
      uz: "Smena, xarita va o‘qishga yetadi. Daqiqa tugasa, MegaFon Rossiyaga qo‘ng‘iroq davom etadi.",
      tg: "Ба смена, харита ва таҳсил кифоя. Дақиқа тамом — ба МегаФон Русия ҳанӯз занг задан мумкин.",
      ky: "Смена, карта жана окууга жетет. Мүнөт бүтсө, MegaFon Россияга чала бересиз.",
    } satisfies Text,
    groups: [
      {
        title: { ru: "На связи", uz: "Aloqa", tg: "Алоқа", ky: "Байланыш" },
        items: {
          ru: ["400 минут по России", "Мессенджеры и карты уже в пакете"],
          uz: ["Rossiya bo‘ylab 400 daqiqa", "Messenjer va xarita paketda"],
          tg: ["400 дақиқа дар Русия", "Мессенҷер ва харита дар баста"],
          ky: ["Россия боюнча 400 мүнөт", "Мессенджер менен карта пакетте"],
        },
      },
      {
        title: { ru: "Работа и учёба", uz: "Ish va o‘qish", tg: "Кор ва таҳсил", ky: "Иш жана окуу" },
        items: {
          ru: [
            "Интернета хватит на смену, чаты и учёбу",
            "Минуты кончились — на МегаФон России можно звонить дальше",
          ],
          uz: [
            "Internet smena, chat va o‘qishga yetadi",
            "Daqiqa tugasa, MegaFon Rossiyaga qo‘ng‘iroq davom etadi",
          ],
          tg: [
            "Интернет барои смена, чат ва таҳсил кифоя",
            "Дақиқа тамом — ба МегаФон Русия ҳанӯз занг задан мумкин",
          ],
          ky: [
            "Интернет смена, чат жана окууга жетет",
            "Мүнөт бүтсө, MegaFon Россияга чала бересиз",
          ],
        },
      },
    ],
  },
  {
    id: "family" as const,
    name: "Семейный +",
    level: { ru: "Безлимит и семья", uz: "Cheksiz va oila", tg: "Беҳад ва оила", ky: "Чексиз жана үй-бүлө" } satisfies Text,
    price: "от 1 140 ₽",
    minutes: "1 500 минут по России",
    data: {
      ru: "Безлимит: такси, видео, семья",
      uz: "Cheksiz: taksi, video, oila",
      tg: "Беҳад: таксӣ, видео, оила",
      ky: "Чексиз: такси, видео, үй-бүлө",
    } satisfies Text,
    purpose: {
      ru: "Интернет не кончится на такси и видео. До пяти человек на одном тарифе. Звонки домой — в мессенджерах, которые работают в России.",
      uz: "Taksi va videoda internet tugamaydi. Bitta tarif — 5 kishigacha. Uyga qo‘ng‘iroq — Rossiyada ishlaydigan messenjerlarda.",
      tg: "Дар таксӣ ва видео интернет намемирад. Як тариф — то панҷ нафар. Занг ба хона — дар мессенҷерҳои Русия.",
      ky: "Такси менен видеодо интернет бүтпөйт. Бир тариф — беш кишиге чейин. Үйгө чалуу — Россияда иштеген мессенджерлерде.",
    } satisfies Text,
    groups: [
      {
        title: { ru: "Работа", uz: "Ish", tg: "Кор", ky: "Иш" },
        items: {
          ru: ["Яндекс Go, такси, карты, склады — интернет не сядет среди смены"],
          uz: ["Yandex Go, taksi, xarita, ombor — internet smenada tugamaydi"],
          tg: ["Yandex Go, таксӣ, харита, анбор — интернет дар смена намемирад"],
          ky: ["Yandex Go, такси, карта, кампа — интернет сменада бүтпөйт"],
        },
      },
      {
        title: { ru: "Кино и ТВ", uz: "Kino va TV", tg: "Кино ва ТВ", ky: "Кино жана ТВ" },
        items: {
          ru: ["Видео и телевидение", "Можно раздать интернет на ноутбук"],
          uz: ["Video va televideniye", "Internetni noutbukka ulash mumkin"],
          tg: ["Видео ва телевизион", "Интернетро ба ноутбук додан мумкин"],
          ky: ["Видео жана телеберүү", "Интернетти ноутбукка берсе болот"],
        },
      },
      {
        title: { ru: "Родные", uz: "Yaqinlar", tg: "Наздикон", ky: "Жакындар" },
        items: {
          ru: [
            "Звонки и переписка в мессенджерах, которые работают в России",
            "Соцсети и сайты своей страны",
          ],
          uz: [
            "Rossiyada ishlaydigan messenjerlarda qo‘ng‘iroq va yozishuv",
            "Ijtimoiy tarmoq va o‘z mamlakat saytlari",
          ],
          tg: [
            "Занг ва нависандагӣ дар мессенҷерҳои Русия",
            "Шабакаҳои иҷтимоӣ ва сомонаҳои кишвари худ",
          ],
          ky: [
            "Россияда иштеген мессенджерлерде чалуу жана жазуу",
            "Соцтармак жана өз өлкөнүн сайттары",
          ],
        },
      },
      {
        title: { ru: "МегаСемья", uz: "MegaOila", tg: "МегаОила", ky: "МегаҮй-бүлө" },
        items: {
          ru: ["Один тариф на всех — до пяти человек"],
          uz: ["Bitta tarif hammaga — 5 kishigacha"],
          tg: ["Як тариф ба ҳама — то панҷ нафар"],
          ky: ["Бир тариф баарына — беш кишиге чейин"],
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
      ru: "Минуты в СНГ и Китай дешевле. Само, если вы не гражданин России.",
      uz: "MDH va Xitoyga daqiqalar arzonroq. RF fuqarosi bo‘lmasangiz, o‘zi yonadi.",
      tg: "Дақиқа ба ИДМ ва Чин арзонтар. Агар шаҳрванди РФ набошед, худаш мегирад.",
      ky: "КМШ жана Кытайга мүнөт арзаныраак. РФ жараны болбосоңуз, өзү күйөт.",
    } satisfies Text,
  },
  {
    id: "transfers",
    name: {
      ru: "Бонус за перевод в салоне",
      uz: "Salonda pul o‘tkazsangiz — bonus",
      tg: "Дар салон пул гузаронед — бонус",
      ky: "Салондон которсоңуз — бонус",
    } satisfies Text,
    text: {
      ru: "Деньги домой отправляйте в салоне МегаФона, не в приложении. От 30 000 ₽ — минуты или месяцы связи.",
      uz: "Uyga pulni MegaFon salonida o‘tkazing, ilovada emas. 30 000 ₽ dan daqiqa yoki oy beriladi.",
      tg: "Пул ба хона — дар салони МегаФон, на дар барнома. Аз 30 000 ₽ дақиқа ё моҳ медиҳанд.",
      ky: "Үйгө акчаны MegaFon салонунан которуңуз, тиркемеден эмес. 30 000 ₽ ден мүнөт же ай берилет.",
    } satisfies Text,
  },
  {
    id: "return-gb",
    name: {
      ru: "+20 ГБ, если вернулись",
      uz: "Qaytsangiz — +20 GB",
      tg: "Бозгаштед — +20 ГБ",
      ky: "Кайтсаңыз — +20 ГБ",
    } satisfies Text,
    text: {
      ru: "Уезжали домой на сезон и снова на тарифе — до шести месяцев приходит +20 ГБ.",
      uz: "Mavsumga ketib, tarifga qaytsangiz — 6 oygacha +20 GB tushadi.",
      tg: "Ба мавсим рафтед ва боз дар тариф ҳастед — то шаш моҳ +20 ГБ меояд.",
      ky: "Сезонго кетип, тарифке кайтсаңыз — алты айга чейин +20 ГБ түшөт.",
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
      ru: "В приложении, по 0500 или в салоне. Пакет на Таджикистан, Узбекистан, Киргизию и ещё несколько стран.",
      uz: "Ilovada, 0500 yoki salonda. Tojikiston, O‘zbekiston, Qirg‘iziston va boshqa mamlakatlar.",
      tg: "Дар барнома, 0500 ё салон. Тоҷикистон, Ӯзбекистон, Қирғизистон ва чанд кишвари дигар.",
      ky: "Тиркемеде, 0500 же салондо. Тажикстан, Өзбекстан, Кыргызстан жана башка өлкөлөр.",
    } satisfies Text,
    ruHref: TARIFF_PAGES.minimum,
  },
  {
    id: "all-countries",
    name: {
      ru: "Звони во все страны",
      uz: "Boshqa mamlakatlarga qo‘ng‘iroq",
      tg: "Ба кишварҳои дигар занг",
      ky: "Башка өлкөлөргө чалуу",
    } satisfies Text,
    how: {
      ru: "Тоже в приложении, по 0500 или в салоне. Сколько стоит минута — зависит от страны.",
      uz: "Ham ilovada, 0500 yoki salonda. Daqiqa narxi mamlakatga qarab.",
      tg: "Ҳам дар барнома, 0500 ё салон. Нархи дақиқа аз кишвар вобаста аст.",
      ky: "Да тиркемеде, 0500 же салондо. Мүнөттүн баасы өлкөгө жараша.",
    } satisfies Text,
    ruHref: TARIFF_PAGES.family,
  },
] as const;

export const megaSilas = [
  {
    name: "Связь при нуле",
    text: {
      ru: "Баланс ушёл в минус — ещё несколько дней можно звонить и сидеть в интернете из пакета.",
      uz: "Balans minus bo‘lsa, bir necha kun paketdan qo‘ng‘iroq va internet ishlaydi.",
      tg: "Баланс манфӣ шуд — чанд рӯз аз баста ҳанӯз занг ва интернет ҳаст.",
      ky: "Баланс минуска кетсе, бир нече күн пакеттен чалуу жана интернет иштейт.",
    } satisfies Text,
  },
  {
    name: "Бонусные ГБ",
    text: {
      ru: "На Минимум + можно получать до +10 ГБ, если платите вовремя. Эту силу надо включить самому.",
      uz: "Minimum + da o‘z vaqtida to‘lasangiz, +10 GB gacha. Lekin shu kuchni o‘zingiz yoqing.",
      tg: "Дар Минимум + агар сари вақт диҳед — то +10 ГБ. Аммо ин қувваро худатон гиред.",
      ky: "Минимум + да өз убагында төлөсөңүз, +10 ГБ чейин. Бирок бул күчтү өзүңүз күйгүзүңүз.",
    } satisfies Text,
  },
  {
    name: "Безлимит на мессенджеры",
    text: {
      ru: "MAX, Telegram, Snapchat не едят гигабайты.",
      uz: "MAX, Telegram, Snapchat gigabayt yemaydi.",
      tg: "MAX, Telegram, Snapchat гигабайт намехӯранд.",
      ky: "MAX, Telegram, Snapchat гигабайт жебейт.",
    } satisfies Text,
  },
  {
    name: "Безлимит на соцсети",
    text: {
      ru: "ВКонтакте, Одноклассники, TikTok, Twitch — тоже без пакета.",
      uz: "VK, OK, TikTok, Twitch — ham paketdan emas.",
      tg: "VK, OK, TikTok, Twitch — ҳам бе баста.",
      ky: "VK, OK, TikTok, Twitch — да пакеттен эмес.",
    } satisfies Text,
  },
  {
    name: "Безлимит на видео",
    text: {
      ru: "VK Видео и RUTUBE смотрите без расхода гигабайт.",
      uz: "VK Video va RUTUBE gigabayt yemaydi.",
      tg: "VK Video ва RUTUBE гигабайт намехӯранд.",
      ky: "VK Video жана RUTUBE гигабайт жебейт.",
    } satisfies Text,
  },
  {
    name: "Музыка и кино",
    text: {
      ru: "Яндекс Музыка, Иви, Okko, Кинопоиск, START — интернет на эти сервисы отдельно.",
      uz: "Yandex Music, Ivi, Okko, Kinopoisk, START — shu servislarga internet alohida.",
      tg: "Yandex Music, Ivi, Okko, Kinopoisk, START — ба ин сервисҳо интернет алоҳида.",
      ky: "Yandex Music, Ivi, Okko, Kinopoisk, START — бул сервистерге интернет өзүнчө.",
    } satisfies Text,
  },
  {
    name: "Перенос остатков",
    text: {
      ru: "Минуты и гигабайты остались — перейдут на следующий месяц.",
      uz: "Daqiqa va gigabayt qolsa, keyingi oyga o‘tadi.",
      tg: "Дақиқа ва гигабайт монд — ба моҳи дигар мегузарад.",
      ky: "Мүнөт менен гигабайт калса, кийинки айга өтөт.",
    } satisfies Text,
  },
  {
    name: "Онлайн-кинотеатр START",
    text: {
      ru: "База фильмов и ТВ. Полный каталог — дешевле на сайте START.",
      uz: "Filmlar va TV. To‘liq katalog — START saytida arzonroq.",
      tg: "Филмҳо ва ТВ. Каталоги пурра — дар сомонаи START арзонтар.",
      ky: "Тасмалар жана ТВ. Толук каталог — START сайтында арзаныраак.",
    } satisfies Text,
  },
] as const;

export const megaSilaHow = {
  title: {
    ru: "Как включить МегаСилы",
    uz: "MegaKuchlarni qanday yoqish",
    tg: "МегаҚувваро чӣ тавр гирифтан",
    ky: "МегаКүчтү кантип күйгүзүү",
  } satisfies Text,
  steps: {
    ru: [
      "Нужен тариф «Минимум +» или «Семейный +».",
      "Откройте приложение МегаФон: Мой тариф → МегаСилы.",
      "Включите то, что нужно.",
      "Нажмите «Применить». Можно ещё по 0500 или набрать *105*1969# / *105*2027#.",
    ],
    uz: [
      "«Minimum +» yoki «Oilaviy +» tarifi kerak.",
      "MegaFon ilovasini oching: Mening tarifim → MegaKuchlar.",
      "Keragini yoqing.",
      "«Qo‘llash» ni bosing. Yoki 0500, *105*1969# yoki *105*2027#.",
    ],
    tg: [
      "Тарифи «Минимум +» ё «Оилавӣ +» лозим.",
      "Барномаи МегаФон: Тарифи ман → МегаҚувваҳо.",
      "Лозимиашро гиред.",
      "«Татбиқ»-ро пахш кунед. Ё 0500, *105*1969# ё *105*2027#.",
    ],
    ky: [
      "«Минимум +» же «Үй-бүлөлүк +» тарифи керек.",
      "MegaFon тиркемеси: Менин тарифим → МегаКүчтөр.",
      "Керектүүсүн күйгүзүңүз.",
      "«Колдонуу» басыңыз. Же 0500, *105*1969# же *105*2027#.",
    ],
  },
  note: {
    ru: "На Минимум + можно взять девять сил, на Семейный + — так же. Сменили тариф — силы слетят, включите ещё раз.",
    uz: "Minimum + da to‘qqizta kuch. Oilaviy + da ham. Tarif almashtirsangiz, qayta yoqing.",
    tg: "Дар Минимум + нӯҳ қувва. Дар Оилавӣ + ҳам. Тариф иваз шуд — аз нав гиред.",
    ky: "Минимум + да тогуз күч. Үй-бүлөлүк + да ошондой. Тариф алмашса — кайра күйгүзүңүз.",
  } satisfies Text,
} as const;

export const offerUi = {
  ...t,
  meaningTitle: {
    ru: "Какой тариф вам",
    uz: "Qaysi tarif sizga",
    tg: "Кадом тариф ба шумо",
    ky: "Кайсы тариф сизге",
  } satisfies Text,
  meaningLead: {
    ru: "Минимум + — звонки и интернет на смену. Семейный + — безлимит и до пяти человек.",
    uz: "Minimum + — smenaga qo‘ng‘iroq va internet. Oilaviy + — cheksiz internet va 5 kishigacha.",
    tg: "Минимум + — занг ва интернет ба смена. Оилавӣ + — беҳад ва то панҷ нафар.",
    ky: "Минимум + — сменага чалуу жана интернет. Үй-бүлөлүк + — чексиз жана беш кишиге чейин.",
  } satisfies Text,
  autoTitle: {
    ru: "Само, без заявки",
    uz: "O‘zi, arizasiz",
    tg: "Худ, бе ариза",
    ky: "Өзү, арызсыз",
  } satisfies Text,
  autoLead: {
    ru: "Если вы не гражданин России — включать ничего не нужно.",
    uz: "RF fuqarosi bo‘lmasangiz, hech narsa yoqish shart emas.",
    tg: "Агар шаҳрванди Русия набошед — чизе гирифтан лозим нест.",
    ky: "Россия жараны болбосоңуз — эч нерсе күйгүзүүнүн кереги жок.",
  } satisfies Text,
  optInTitle: {
    ru: "Звонки за границу",
    uz: "Chet elga qo‘ng‘iroq",
    tg: "Занг ба хориҷа",
    ky: "Чет өлкөгө чалуу",
  } satisfies Text,
  optInLead: {
    ru: "Включают в приложении, по 0500 или в салоне. Полные условия — на русском на сайте МегаФона.",
    uz: "Ilovada, 0500 yoki salonda yoqiladi. To‘liq shartlar — MegaFon saytida ruscha.",
    tg: "Дар барнома, 0500 ё салон мегиранд. Шартҳои пурра — дар сомонаи МегаФон ба русӣ.",
    ky: "Тиркемеде, 0500 же салондо күйгүзүлөт. Толук шарттар — MegaFon сайтында орусча.",
  } satisfies Text,
  silaTitle: {
    ru: "МегаСилы",
    uz: "MegaKuchlar",
    tg: "МегаҚувваҳо",
    ky: "МегаКүчтөр",
  } satisfies Text,
  silaLead: {
    ru: "Опции тарифа. Включаете сами в приложении.",
    uz: "Tarif opsiyalari. Ilovada o‘zingiz yoqasiz.",
    tg: "Опсияҳои тариф. Дар барнома худатон мегиред.",
    ky: "Тариф опциялары. Тиркемеден өзүңүз күйгүзөсүз.",
  } satisfies Text,
  silaMinimum: {
    ru: "Условия Минимум +",
    uz: "Minimum + shartlari",
    tg: "Шартҳои Минимум +",
    ky: "Минимум + шарттары",
  } satisfies Text,
  silaFamily: {
    ru: "Условия Семейный +",
    uz: "Oilaviy + shartlari",
    tg: "Шартҳои Оилавӣ +",
    ky: "Үй-бүлөлүк + шарттары",
  } satisfies Text,
  previousKicker: {
    ru: "Предыдущая версия страницы",
    uz: "Sahifaning avvalgi versiyasi",
    tg: "Версияи қаблии саҳифа",
    ky: "Барактын мурунку версиясы",
  } satisfies Text,
  previousLive: {
    ru: "Открыть текущую",
    uz: "Joriy sahifani ochish",
    tg: "Ҷории кунуниро кушоед",
    ky: "Учурдагыны ачуу",
  } satisfies Text,
} as const;
