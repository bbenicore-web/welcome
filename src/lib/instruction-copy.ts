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
  bioTitle: string;
  bioText: string;
  step4Title: string;
  step4Items: { title: string; text: string; btn: string; href?: string; outline?: boolean }[];
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
const megafonOfficesHref = "https://www.megafon.ru/help/offices/";

const ru: InstructionCopy = {
  hero: "Чтобы звонить домой — нужна российская SIM",
  download: "Смотреть шаги",
  gainTitle: "Оформите тариф МегаФон",
  gainSub:
    "Пять шагов: сим-карта, СНИЛС, Госуслуги, биометрия, активация. Оставьте номер — подскажем салон рядом.",
  widgets: [
    { href: "#buy-sim", label: "Приобретите сим-карту" },
    { href: "#get-snils", label: "Получите СНИЛС" },
    { href: "#gosuslugi", label: "Госуслуги" },
    { href: "#biometry", label: "Биометрия в банке" },
    { href: "#activate", label: "Активация на Госуслугах" },
  ],
  share: "Поделиться инструкцией",
  productKicker: "Для гостей из СНГ",
  productCta: "Хочу этот тариф",
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
  howTitle: "Пять шагов до связи",
  activationSteps: [
    {
      id: "buy-sim",
      title: "Купите сим-карту",
      text: "До приезда или в салоне МегаФона в России. В договор впишут IMEI телефона — без него связь не появится.",
      links: [
        { label: "Как узнать IMEI", href: imeiHref },
      ],
    },
    {
      id: "get-snils",
      title: "Получите СНИЛС",
      text: "Часто готово сразу, иногда до 5 рабочих дней. МФЦ, СФР или работодатель. С собой:",
      needs: [
        "паспорт и нотариальный перевод;",
        "почта, к которой есть доступ.",
      ],
      links: [{ label: "Бюро переводов на карте", href: translateMapHref }],
    },
    {
      id: "gosuslugi",
      title: "Зарегистрируйтесь на Госуслугах",
      text: "В МФЦ или банке. Нужны СНИЛС и паспорт.",
      links: [{ label: "Карта отделений МФЦ", href: mfcMapHref }],
    },
    {
      id: "biometry",
      title: "Сдайте биометрию в банке",
      text: "Фото лица и запись голоса. Нужны СНИЛС и паспорт. Спросите заранее, есть ли в отделении оборудование.",
    },
    {
      id: "activate",
      title: "Активируйте сим-карту на Госуслугах",
      text: "В приложении «Госуслуги» откройте уведомление о сим-карте и следуйте шагам. Или помогут в салоне МегаФона.",
      links: [
        { label: "Госуслуги для Android", href: gosuslugiAndroidHref },
        { label: "Госуслуги для iOS", href: gosuslugiIosHref },
        { label: "Салоны МегаФон", href: megafonOfficesHref },
      ],
    },
  ],
  bioTitle: "Как проходит биометрия в банке",
  bioText: "Сотрудник попросит произнести несколько цифр и снимет лицо",
  step4Title: "Как оплатить",
  step4Items: [
    {
      title: "В салоне МегаФон",
      text: "На кассе или переводом в салоне. Бонусы за переводы домой копятся только так",
      btn: "Найти на карте",
      href: megafonOfficesHref,
    },
    {
      title: "В приложении",
      text: "Оплатите со смартфона. Бонусы за переводы домой здесь не копятся",
      btn: "Скачать приложение",
      href: "https://www.megafon.ru/download/",
      outline: true,
    },
  ],
  faqTitle: "Частые вопросы",
  faq: [
    {
      q: "Что входит в тарифы?",
      a: "«Минимум +» от 850 ₽: 400 минут по России и интернет на смену. «Семейный +» от 1 140 ₽: 1 500 минут, безлимит и МегаСемья до 5 человек. «Тёплый приём» включается сам, если вы не гражданин России. 100 международных минут — по желанию.",
    },
    {
      q: "Где узнать о тарифе подробнее?",
      a: "Точные условия — в салоне МегаФон и на megafon.ru. Цены на этой странице ориентировочные, по Москве, с НДС.",
    },
    {
      q: "Как получить дополнительные гигабайты?",
      a: "На «Минимум +» до +10 ГБ за оплату вовремя — это МегаСила «Бонусные ГБ», её нужно включить в приложении. Если уезжали на сезон и вернулись на тариф — +20 ГБ до 6 месяцев. Бонусы за переводы домой дают только в салоне, не в приложении.",
    },
    {
      id: "faq-imei",
      q: "Что такое IMEI и как его узнать?",
      a: "IMEI — номер телефона, в котором будет работать сим-карта. Наберите *#06# — номер появится на экране. Его вписывают в договор: без IMEI связи не будет.",
    },
    {
      q: "Как изменить IMEI в договоре?",
      a: "Вставьте сим-карту в новый телефон, в приложении МегаФон нажмите «Обновить» и подтвердите личность на Госуслугах.",
    },
    {
      q: "Что будет со счётом, когда я вернусь домой?",
      a: "Счёт останется вашим. Чтобы закрыть — напишите в поддержку или зайдите в салон.",
    },
    {
      q: "Что будет с сим-картой, когда я вернусь домой?",
      a: "Сим-карта работает, если пополняете баланс хотя бы раз в 6 месяцев. Иначе номер заблокируют. Разблокировать можно через поддержку. При возврате на тариф может включиться +20 ГБ.",
    },
  ],
  leadTitle: "Подскажем салон и какие бумаги взять",
  leadText:
    "Оставьте номер. Перезвоним: куда за СНИЛС, где сдать биометрию и в какой салон идти за сим-картой.",
  leadPoints: [
    "Где купить сим-карту и как узнать IMEI",
    "Куда идти за СНИЛС, Госуслугами и биометрией",
    "Как активировать сим-карту на Госуслугах",
  ],
  apply: "Оставить номер",
};

const uz: InstructionCopy = {
  hero: "Uyga qo‘ng‘iroq uchun Rossiya SIMi kerak",
  download: "Qadamlarni ko‘rish",
  gainTitle: "MegaFon tarifini rasmiylashtiring",
  gainSub:
    "Besh qadam: SIM, ShIHSR, Gosuslugi, biometriya, faollashtirish. Raqam qoldiring — yaqin salonni aytamiz.",
  widgets: [
    { href: "#buy-sim", label: "SIM-karta oling" },
    { href: "#get-snils", label: "ShIHSR oling" },
    { href: "#gosuslugi", label: "Gosuslugi" },
    { href: "#biometry", label: "Bankda biometriya" },
    { href: "#activate", label: "Gosuslugida faollashtirish" },
  ],
  share: "Ko'rsatmalarni baham ko'ring",
  productKicker: "MDH mehmonlari uchun",
  productCta: "Shu tarifni xohlayman",
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
  howTitle: "Aloqaga besh qadam",
  activationSteps: [
    {
      id: "buy-sim",
      title: "SIM-karta oling",
      text: "Kelishdan oldin yoki MegaFon salonida. Shartnomaga telefon IMEI yoziladi — usiz aloqa bo‘lmaydi.",
      links: [
        { label: "IMEIni qanday bilish", href: imeiHref },
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
  bioTitle: "Bankda biometriya qanday o‘tadi",
  bioText: "Bank xodimi bir nechta raqamni aytishingizni so‘raydi va yuz skanini oladi",
  step4Title: "Qanday to‘lash",
  step4Items: [
    {
      title: "MegaFon salonida",
      text: "Kassada yoki salon orqali o‘tkazmada. Uyga pul bonuslari faqat shu yerda",
      btn: "Xaritadan topish",
      href: megafonOfficesHref,
    },
    {
      title: "Ilovada",
      text: "Smartfondan to‘lang. Uyga pul bonuslari bu yerda yig‘ilmaydi",
      btn: "Ilovani ko'chirib olish",
      href: "https://www.megafon.ru/download/",
      outline: true,
    },
  ],
  faqTitle: "Ko‘p so‘raladigan savollar",
  faq: [
    {
      q: "Tariflarga nima kiradi?",
      a: "«Minimum +» 850 ₽ dan: Rossiya bo‘ylab 400 daqiqa va smenaga internet. «Oilaviy +» 1 140 ₽ dan: 1 500 daqiqa, cheksiz internet, MegaOila 5 kishigacha. «Iliq kutib olish» RF fuqarosi bo‘lmasangiz o‘zi ulanadi. 100 xalqaro daqiqa — ixtiyoriy.",
    },
    {
      q: "Tarif haqida batafsil qayerdan o‘qish mumkin?",
      a: "Aniq shartlar — MegaFon saloni va megafon.ru da. Bu sahifadagi narxlar Moskvaga oid, QQSli, taxminiy.",
    },
    {
      q: "Qo‘shimcha gigabaytlarni qanday olaman?",
      a: "«Minimum +» da o‘z vaqtida to‘lov uchun +10 GB gacha — bu MegaKuch «Bonus GB», ilovada yoqish kerak. Mavsumdan qaytsangiz — +20 GB, 6 oygacha. Uyga o‘tkazma bonuslari faqat salonda.",
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
  leadTitle: "Yaqin salon va qanday hujjat olib borishni aytamiz",
  leadText:
    "Raqam qoldiring. Qo‘ng‘iroq qilamiz: ShIHSR qayerdan, biometriya qayerda, qaysi MegaFon saloniga SIM uchun borish.",
  leadPoints: [
    "SIM-kartani qayerdan olish va IMEIni qanday bilish",
    "ShIHSR, Gosuslugi va biometriya uchun qayerga borish",
    "SIM-kartani Gosuslugida qanday faollashtirish",
  ],
  apply: "Raqam qoldirish",
};

const tg: InstructionCopy = {
  hero: "Барои занг ба хона SIM-и Русия лозим",
  download: "Қадамҳоро дидан",
  gainTitle: "Тарофаи МегаФон ба расмият дароред",
  gainSub:
    "Панҷ қадам: сим-корт, СНИЛС, Госуслуги, биометрия, фаъолсозӣ. Рақам гузоред — салони наздикро мегӯем.",
  widgets: [
    { href: "#buy-sim", label: "Сим-корт гиред" },
    { href: "#get-snils", label: "СНИЛС гиред" },
    { href: "#gosuslugi", label: "Госуслуги" },
    { href: "#biometry", label: "Биометрия дар бонк" },
    { href: "#activate", label: "Фаъолсозӣ дар Госуслуги" },
  ],
  share: "Дастурҳоро мубодила кунед",
  productKicker: "Барои меҳмонон аз ИДМ",
  productCta: "Ҳамин тарофаро мехоҳам",
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
  howTitle: "То алоқа панҷ қадам",
  activationSteps: [
    {
      id: "buy-sim",
      title: "Сим-корт харед",
      text: "Пеш аз омадан ё дар салони МегаФон. Ба шартнома IMEI-и телефон навишта мешавад — бе он алоқа намешавад.",
      links: [
        { label: "IMEI-ро чӣ тавр донистан", href: imeiHref },
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
  bioTitle: "Биометрия дар бонк чӣ тавр мегузарад",
  bioText: "Корманди бонк хоҳиш мекунад, ки чанд рақамро бигӯед ва скани рӯйро мегирад",
  step4Title: "Чӣ тавр пардохт кардан",
  step4Items: [
    {
      title: "Дар салони МегаФон",
      text: "Дар хазина ё бо интиқол дар салон. Бонусҳои пул ба хона танҳо ҳамин ҷо",
      btn: "Дар харита ёбед",
      href: megafonOfficesHref,
    },
    {
      title: "Дар барнома",
      text: "Аз смартфон пардохт кунед. Бонусҳои пул ба хона ин ҷо ҷамъ намешаванд",
      btn: "Барномаро боргирӣ кунед",
      href: "https://www.megafon.ru/download/",
      outline: true,
    },
  ],
  faqTitle: "Саволҳои зиёд",
  faq: [
    {
      q: "Ба тарофаҳо чӣ дохил аст?",
      a: "«Минимум +» аз 850 ₽: 400 дақиқа дар Русия ва интернет ба смена. «Оилавӣ +» аз 1 140 ₽: 1 500 дақиқа, интернети бемаҳдуд, МегаОила то 5 нафар. «Қабули гарм» худ мегирад, агар шаҳрванди Русия набошед. 100 дақиқаи байналмилалӣ — бо хоҳиш.",
    },
    {
      q: "Тафсилоти тарофаро аз куҷо хондан мумкин?",
      a: "Шартҳои дақиқ — дар салони МегаФон ва megafon.ru. Нархҳо дар ин саҳифа тахминӣ, барои Москва, бо ҚДВ.",
    },
    {
      q: "Гигабайтҳои иловагӣ чӣ тавр гирифтан?",
      a: "Дар «Минимум +» то +10 ГБ барои пардохти саривақт — ин МегаҚувваи «Бонус ГБ», дар барнома гирифтан лозим. Аз мавсим баргардед — +20 ГБ то 6 моҳ. Бонусҳои интиқол танҳо дар салон.",
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
  leadTitle: "Салон ва кадом ҳуҷҷат гирифтанро мегӯем",
  leadText:
    "Рақам гузоред. Занг мезанем: СНИЛС аз куҷо, биометрия дар куҷо, ба кадом салони МегаФон барои сим-корт рафтан.",
  leadPoints: [
    "Сим-кортро аз куҷо харидан ва IMEI-ро чӣ тавр донистан",
    "Барои СНИЛС, Госуслуги ва биометрия куҷо рафтан",
    "Сим-кортро дар Госуслуги чӣ тавр фаъол кардан",
  ],
  apply: "Рақам гузоред",
};

const ky: InstructionCopy = {
  hero: "Үйгө чалуу үчүн Россия SIMи керек",
  download: "Кадамдарды көрүү",
  gainTitle: "МегаФон тарифин тариздеңиз",
  gainSub:
    "Беш кадам: SIM, ЖЭКН, Госуслуги, биометрия, активдештирүү. Номер калтырыңыз — жакын салонду айтабыз.",
  widgets: [
    { href: "#buy-sim", label: "SIM-карта алыңыз" },
    { href: "#get-snils", label: "ЖЭКН алыңыз" },
    { href: "#gosuslugi", label: "Госуслуги" },
    { href: "#biometry", label: "Банкта биометрия" },
    { href: "#activate", label: "Госуслугиде активдештирүү" },
  ],
  share: "Инструкцияларды бөлүшүү",
  productKicker: "КМШ конокторуна",
  productCta: "Ушул тарифти каалайм",
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
  howTitle: "Байланышка беш кадам",
  activationSteps: [
    {
      id: "buy-sim",
      title: "SIM-карта алыңыз",
      text: "Келерден мурда же МегаФон салонунда. Келишимге телефондун IMEI жазылат — ансыз байланыш болбойт.",
      links: [
        { label: "IMEIни кантип билсе болот", href: imeiHref },
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
  bioTitle: "Банкта биометрия кантип өтөт",
  bioText: "Банк кызматкери бир нече санды айтууну сурайт жана беттин сканын алат",
  step4Title: "Кантип төлөө",
  step4Items: [
    {
      title: "МегаФон салонунда",
      text: "Кассада же салон аркылуу которууда. Үйгө акча бонустары ушул жерде гана",
      btn: "Картадан табуу",
      href: megafonOfficesHref,
    },
    {
      title: "Тиркемеде",
      text: "Смартфондон төлөңүз. Үйгө акча бонустары бул жерде жыйналбайт",
      btn: "Колдонмону жүктөө",
      href: "https://www.megafon.ru/download/",
      outline: true,
    },
  ],
  faqTitle: "Көп берилүүчү суроолор",
  faq: [
    {
      q: "Тарифтерге эмне кирет?",
      a: "«Минимум +» 850 ₽ ден: Россия боюнча 400 мүнөт жана сменага интернет. «Үй-бүлөлүк +» 1 140 ₽ ден: 1 500 мүнөт, чексиз интернет, МегаҮй-бүлө 5 кишиге чейин. «Жылуу тосуп алуу» Россия жараны болбосоңуз өзү кошулат. 100 эл аралык мүнөт — каалоо боюнча.",
    },
    {
      q: "Тариф жөнүндө кеңири кайдан окуса болот?",
      a: "Так шарттар — МегаФон салонунда жана megafon.ru да. Бул барактагы баалар Москва үчүн, КНС менен, болжолдуу.",
    },
    {
      q: "Кошумча гигабайтты кантип алуу керек?",
      a: "«Минимум +» да өз убагында төлөө үчүн +10 ГБ чейин — бул МегаКүч «Бонус ГБ», тиркемеден күйгүзүү керек. Сезондон кайтсаңыз — +20 ГБ, 6 айга чейин. Которуу бонустары жалаң салондо.",
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
  leadTitle: "Салонду жана кайсы кагаз алып барууну айтабыз",
  leadText:
    "Номер калтырыңыз. Чалып айтабыз: ЖЭКН кайдан, биометрия кайда, SIM үчүн кайсы МегаФон салонуна баруу.",
  leadPoints: [
    "SIM-картаны кайдан алуу жана IMEIни кантип билүү",
    "ЖЭКН, Госуслуги жана биометрия үчүн кайда баруу",
    "SIM-картаны Госуслугиде кантип активдештирүү",
  ],
  apply: "Номер калтыруу",
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
