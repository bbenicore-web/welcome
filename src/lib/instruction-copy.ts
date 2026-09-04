import type { Locale } from "@/lib/i18n";

export type ActivationStep = {
  id: string;
  title: string;
  text: string;
  needs?: string[];
  links?: { label: string; href: string }[];
};

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
  activationSteps: ActivationStep[];
  step4Title: string;
  step4Items: { title: string; text: string; btn: string }[];
  faqTitle: string;
  faq: { id?: string; q: string; a: string }[];
  leadTitle: string;
  leadText: string;
  leadPoints: string[];
  apply: string;
};

const imeiHref = "#faq-imei";
const translateMapHref =
  "https://2gis.ru/moscow/search/%D0%B1%D1%8E%D1%80%D0%BE%20%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D0%BE%D0%B2";
const mfcMapHref = "https://www.gosuslugi.ru/";
const gosuslugiAndroidHref =
  "https://play.google.com/store/apps/details?id=ru.gosuslugi.androidapp";
const gosuslugiIosHref = "https://apps.apple.com/ru/app/id723512330";
const megafonOfficesHref = "https://www.megafon.ru/";

const ru: InstructionCopy = {
  hero: "Добро пожаловать в Россию",
  download: "Скачать инструкцию",
  gainTitle: "Оформите тариф МегаФон",
  gainSub:
    "Подключайте сим‑карту МегаФон и будьте на связи с родными.",
  widgets: [
    { href: "#buy-sim", label: "Приобретите сим-карту" },
    { href: "#get-snils", label: "Получите СНИЛС" },
    { href: "#gosuslugi", label: "Госуслуги" },
    { href: "#biometry", label: "Биометрия в банке" },
    { href: "#activate", label: "Активация на Госуслугах" },
  ],
  share: "Поделиться инструкцией",
  productKicker: "Тарифы для гостей из СНГ",
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
  howTitle: "Что нужно сделать для активации сим-карты",
  activationSteps: [
    {
      id: "buy-sim",
      title: "Приобретите сим-карту",
      text: "Заранее перед приездом в Россию или в салоне МегаФона. При заключении договора понадобится идентификатор устройства (IMEI), в котором вы будете использовать сим-карту — без него не появится связь.",
      links: [
        { label: "Как узнать идентификатор устройства (IMEI)", href: imeiHref },
      ],
    },
    {
      id: "get-snils",
      title: "Получите СНИЛС",
      text: "Обычно документ готов сразу, но иногда это занимает до 5 рабочих дней. Обратитесь в отделение МФЦ, в отделение СФР или к работодателю. Понадобится:",
      needs: [
        "паспорт и его нотариально заверенный перевод",
        "имейл, к которому у вас есть доступ",
      ],
      links: [{ label: "Бюро переводов на карте", href: translateMapHref }],
    },
    {
      id: "gosuslugi",
      title: "Зарегистрируйтесь на Госуслугах",
      text: "Обратитесь в МФЦ или банк для создания учётной записи на Госуслугах. Будут нужны СНИЛС и паспорт.",
      links: [{ label: "Карта отделений МФЦ", href: mfcMapHref }],
    },
    {
      id: "biometry",
      title: "Зарегистрируйте биометрию в банке",
      text: "Сотрудник сфотографирует вас и запишет ваш голос. Будут нужны СНИЛС и паспорт. Заранее уточните, есть ли в отделении оборудование для биометрии.",
    },
    {
      id: "activate",
      title: "Активируйте сим-карту на Госуслугах",
      text: "Скачайте приложение «Госуслуги» для Android или iOS, найдите в нём уведомление о сим-карте и следуйте инструкции. Или обратитесь за помощью в салон МегаФона.",
      links: [
        { label: "Госуслуги для Android", href: gosuslugiAndroidHref },
        { label: "Госуслуги для iOS", href: gosuslugiIosHref },
        { label: "Салоны МегаФон", href: megafonOfficesHref },
      ],
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
      q: "Что входит в тарифы?",
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
      id: "faq-imei",
      q: "Что такое идентификатор устройства (IMEI) и как его узнать?",
      a: "IMEI — уникальный номер телефона, в котором будет работать сим-карта. Наберите на клавиатуре *#06# — номер появится на экране. Его вписывают в договор: без IMEI связь не появится.",
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
    "Оставьте номер. Перезвоним и подскажем, что взять с собой, где рядом зарегистрировать биометрию и в какой салон МегаФон прийти за сим-картой.",
  leadPoints: [
    "Где купить сим-карту и как узнать IMEI",
    "Куда идти за СНИЛС, Госуслугами и биометрией",
    "Как активировать сим-карту на Госуслугах",
  ],
  apply: "Оставить заявку",
};

const uz: InstructionCopy = {
  hero: "Rossiyaga xush kelibsiz",
  download: "Yo‘riqnomani yuklab olish",
  gainTitle: "MegaFon tarifini rasmiylashtiring",
  gainSub:
    "MegaFon SIM-kartasini ulang va yaqinlaringiz bilan aloqada bo‘ling.",
  widgets: [
    { href: "#buy-sim", label: "SIM-karta oling" },
    { href: "#get-snils", label: "ShIHSR oling" },
    { href: "#gosuslugi", label: "Gosuslugi" },
    { href: "#biometry", label: "Bankda biometriya" },
    { href: "#activate", label: "Gosuslugida faollashtirish" },
  ],
  share: "Ko'rsatmalarni baham ko'ring",
  productKicker: "MDH mehmonlari uchun tariflar",
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
  howTitle: "SIM-kartani faollashtirish uchun nima qilish kerak",
  activationSteps: [
    {
      id: "buy-sim",
      title: "SIM-kartani xarid qiling",
      text: "Oldindan, Rossiyaga kelishdan avval yoki MegaFon salonida. Shartnoma tuzilganda qurilma identifikatori (IMEI) so‘raladi — usiz aloqa bo‘lmaydi.",
      links: [
        { label: "Qurilma identifikatorini (IMEI) qanday bilish mumkin", href: imeiHref },
      ],
    },
    {
      id: "get-snils",
      title: "ShIHSR oling",
      text: "Odatda hujjat darhol tayyor, ba’zan 5 ish kunigacha. MFC bo‘limi, RIJ bo‘limi yoki ish beruvchiga murojaat qiling. Kerak bo‘ladi:",
      needs: [
        "pasport va uning notarial tasdiqlangan tarjimasi",
        "kirish mumkin bo‘lgan elektron pochta",
      ],
      links: [{ label: "Xaritadagi tarjima byurosi", href: translateMapHref }],
    },
    {
      id: "gosuslugi",
      title: "Gosuslugida ro‘yxatdan o‘ting",
      text: "Hisob yozuvi ochish uchun MFC yoki bankka boring. ShIHSR va pasport kerak.",
      links: [{ label: "MFC bo‘limlari xaritasi", href: mfcMapHref }],
    },
    {
      id: "biometry",
      title: "Bankda biometriya topshiring",
      text: "Xodim sizni suratga oladi va ovozingizni yozadi. ShIHSR va pasport kerak. Oldindan bo‘limda biometriya jihozlari borligini so‘rang.",
    },
    {
      id: "activate",
      title: "SIM-kartani Gosuslugida faollashtiring",
      text: "«Gosuslugi» ilovasini Android yoki iOS uchun yuklab oling, SIM-karta haqidagi bildirishnomani toping va ko‘rsatmaga amal qiling. Yoki MegaFon salonida yordam so‘rang.",
      links: [
        { label: "Gosuslugi Android uchun", href: gosuslugiAndroidHref },
        { label: "Gosuslugi iOS uchun", href: gosuslugiIosHref },
        { label: "MegaFon salonlari", href: megafonOfficesHref },
      ],
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
      q: "Tariflarga nima kiradi?",
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
      id: "faq-imei",
      q: "Qurilma identifikatori (IMEI) nima va uni qanday bilish mumkin?",
      a: "IMEI — SIM-karta ishlaydigan telefonning unikal raqami. Klaviaturada *#06# ni tering — raqam ekranda chiqadi. Uni shartnomaga yozadilar: IMEIsiz aloqa bo‘lmaydi.",
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
    "Raqam qoldiring. Qo‘ng‘iroq qilib, nima olib borish, yaqin atrofda qayerda biometriya topshirish va qaysi MegaFon saloniga borishni aytamiz.",
  leadPoints: [
    "SIM-kartani qayerdan olish va IMEIni qanday bilish",
    "ShIHSR, Gosuslugi va biometriya uchun qayerga borish",
    "SIM-kartani Gosuslugida qanday faollashtirish",
  ],
  apply: "Ariza qoldirish",
};

const tg: InstructionCopy = {
  hero: "Ба Русия хуш омадед",
  download: "Дастурамалро сарборӣ кардан",
  gainTitle: "Тарофаи МегаФон ба расмият дароред",
  gainSub:
    "Сим-корти МегаФонро пайваст кунед ва бо наздиконатон дар тамос бошед.",
  widgets: [
    { href: "#buy-sim", label: "Сим-корт гиред" },
    { href: "#get-snils", label: "СНИЛС гиред" },
    { href: "#gosuslugi", label: "Госуслуги" },
    { href: "#biometry", label: "Биометрия дар бонк" },
    { href: "#activate", label: "Фаъолсозӣ дар Госуслуги" },
  ],
  share: "Дастурҳоро мубодила кунед",
  productKicker: "Тарофаҳо барои меҳмонон аз ИДМ",
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
  howTitle: "Барои фаъол кардани сим-корт чӣ кор кардан лозим аст",
  activationSteps: [
    {
      id: "buy-sim",
      title: "Сим-корт харед",
      text: "Пешакӣ пеш аз омадан ба Русия ё дар салони МегаФон. Ҳангоми бастани шартнома идентификатори дастгоҳ (IMEI) лозим мешавад — бе он алоқа намешавад.",
      links: [
        { label: "Идентификатори дастгоҳро (IMEI) чӣ тавр донистан", href: imeiHref },
      ],
    },
    {
      id: "get-snils",
      title: "СНИЛС гиред",
      text: "Одатан ҳуҷҷат фавран тайёр мешавад, вале баъзан то 5 рӯзи корӣ мегирад. Ба шӯъбаи МФЦ, шӯъбаи ФИР ё корфармо муроҷиат кунед. Лозим аст:",
      needs: [
        "шиноснома ва тарҷумаи нотариалии он",
        "почтаи электронӣ, ки ба он дастрасӣ доред",
      ],
      links: [{ label: "Бюрои тарҷума дар харита", href: translateMapHref }],
    },
    {
      id: "gosuslugi",
      title: "Дар Госуслуги сабти ном кунед",
      text: "Барои сохтани ҳисоб ба МФЦ ё бонк муроҷиат кунед. СНИЛС ва шиноснома лозиманд.",
      links: [{ label: "Харитаи шӯъбаҳои МФЦ", href: mfcMapHref }],
    },
    {
      id: "biometry",
      title: "Дар бонк биометрия супоред",
      text: "Корманд шуморо акс мегирад ва овозатонро сабт мекунад. СНИЛС ва шиноснома лозиманд. Пешакӣ пурсед, ки дар шӯъба таҷҳизоти биометрия ҳаст ё не.",
    },
    {
      id: "activate",
      title: "Сим-кортро дар Госуслуги фаъол кунед",
      text: "Барномаи «Госуслуги»-ро барои Android ё iOS боргирӣ кунед, огоҳинома дар бораи сим-кортро ёбед ва дастурро риоя кунед. Ё дар салони МегаФон кӯмак пурсед.",
      links: [
        { label: "Госуслуги барои Android", href: gosuslugiAndroidHref },
        { label: "Госуслуги барои iOS", href: gosuslugiIosHref },
        { label: "Салонҳои МегаФон", href: megafonOfficesHref },
      ],
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
      q: "Ба тарофаҳо чӣ дохил аст?",
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
      id: "faq-imei",
      q: "Идентификатори дастгоҳ (IMEI) чист ва онро чӣ тавр донистан?",
      a: "IMEI — рақами ягонаи телефоне, ки дар он сим-корт кор мекунад. Дар клавиатура *#06#-ро занед — рақам дар экран мебарояд. Онро ба шартнома менависанд: бе IMEI алоқа намешавад.",
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
    "Рақам гузоред. Занг мезанем ва мегӯем: чӣ бо худ гирифтан, дар куҷои наздик биометрия супоридан ва ба кадом салони МегаФон барои сим-корт омадан.",
  leadPoints: [
    "Сим-кортро аз куҷо харидан ва IMEI-ро чӣ тавр донистан",
    "Барои СНИЛС, Госуслуги ва биометрия куҷо рафтан",
    "Сим-кортро дар Госуслуги чӣ тавр фаъол кардан",
  ],
  apply: "Дархост гузоред",
};

const ky: InstructionCopy = {
  hero: "Россияга кош келиңиз",
  download: "Нускаманы жүктөө",
  gainTitle: "МегаФон тарифин тариздеңиз",
  gainSub:
    "МегаФон сим-картасын туташтырыңыз да, жакындарыңыз менен байланышта болуңуз.",
  widgets: [
    { href: "#buy-sim", label: "SIM-карта алыңыз" },
    { href: "#get-snils", label: "ЖЭКН алыңыз" },
    { href: "#gosuslugi", label: "Госуслуги" },
    { href: "#biometry", label: "Банкта биометрия" },
    { href: "#activate", label: "Госуслугиде активдештирүү" },
  ],
  share: "Инструкцияларды бөлүшүү",
  productKicker: "КМШ конокторуна тарифтер",
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
  howTitle: "SIM-картаны активдештирүү үчүн эмне кылуу керек",
  activationSteps: [
    {
      id: "buy-sim",
      title: "SIM-карта сатып алыңыз",
      text: "Алдын ала, Россияга келерден мурда же МегаФон салонунда. Келишим түзүлгөндө түзмөктүн идентификатору (IMEI) керек болот — ансыз байланыш болбойт.",
      links: [
        { label: "Түзмөктүн идентификаторун (IMEI) кантип билсе болот", href: imeiHref },
      ],
    },
    {
      id: "get-snils",
      title: "ЖЭКН алыңыз",
      text: "Көбүнчө документ дароо даяр болот, кээде 5 жумуш күнгө чейин созулат. МФЦ бөлүмүнө, РСФ бөлүмүнө же иш берүүчүгө кайрылыңыз. Керек болот:",
      needs: [
        "паспорт жана анын нотариалдык күбөлөндүрүлгөн котормосу",
        "кире турган электрондук почта",
      ],
      links: [{ label: "Картадагы котормо бюросу", href: translateMapHref }],
    },
    {
      id: "gosuslugi",
      title: "Госуслугиге катталыңыз",
      text: "Эсеп түзүү үчүн МФЦ же банкка кайрылыңыз. ЖЭКН жана паспорт керек.",
      links: [{ label: "МФЦ бөлүмдөрүнүн картасы", href: mfcMapHref }],
    },
    {
      id: "biometry",
      title: "Банкта биометрия тапшырыңыз",
      text: "Кызматкер сизди сүрөткө тартып, үнүңүздү жазат. ЖЭКН жана паспорт керек. Алдын ала бөлүмдө биометрия жабдуусу барбы деп сураңыз.",
    },
    {
      id: "activate",
      title: "SIM-картаны Госуслугиде активдештириңиз",
      text: "«Госуслуги» колдонмосун Android же iOS үчүн жүктөп алыңыз, SIM-карта тууралуу билдирмени табыңыз жана көрсөтмөнү аткарыңыз. Же МегаФон салонунан жардам сураңыз.",
      links: [
        { label: "Госуслуги Android үчүн", href: gosuslugiAndroidHref },
        { label: "Госуслуги iOS үчүн", href: gosuslugiIosHref },
        { label: "МегаФон салондору", href: megafonOfficesHref },
      ],
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
      q: "Тарифтерге эмне кирет?",
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
      id: "faq-imei",
      q: "Түзмөктүн идентификатору (IMEI) деген эмне жана аны кантип билсе болот?",
      a: "IMEI — SIM-карта иштей турган телефондун уникалдуу номери. Клавиатурада *#06# териңиз — номер экранда чыгат. Ал келишимге жазылат: IMEIsiz байланыш болбойт.",
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
    "Номер калтырыңыз. Чалып айтабыз: эмне алып баруу, жакын жерден кайда биометрия тапшыруу жана SIM-карта үчүн кайсы МегаФон салонуна баруу.",
  leadPoints: [
    "SIM-картаны кайдан алуу жана IMEIни кантип билүү",
    "ЖЭКН, Госуслуги жана биометрия үчүн кайда баруу",
    "SIM-картаны Госуслугиде кантип активдештирүү",
  ],
  apply: "Өтүнмө калтыруу",
};

export const instructionCopy: Record<Locale, InstructionCopy> = {
  ru,
  uz,
  tg,
  ky,
};
