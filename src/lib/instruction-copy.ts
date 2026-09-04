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
  hero: "Добро пожаловать в Россию",
  download: "Скачать инструкцию",
  gainTitle: "Оформите тариф МегаФон",
  gainSub:
    "Подключайте сим‑карту МегаФон и будьте на связи с родными.",
  widgets: [
    { href: "#snils", label: "Паспорт и СНИЛС" },
    { href: "#getsim", label: "Госуслуги и биометрия" },
    { href: "#activation", label: "Сим-карта и подтверждение" },
    { href: "#payment", label: "Оплата тарифа" },
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
  howTitle: "Как оформить и подтвердить сим-карту",
  step1Title: "Переведите паспорт и получите СНИЛС",
  step1Text:
    "Сначала переведите паспорт на русский язык в бюро переводов и заверьте перевод у нотариуса. С паспортом и переводом оформите СНИЛС — страховой номер лицевого счёта — в Социальном фонде России (СФР) или МФЦ. Документ обычно готов сразу при обращении.",
  placeTitle: "Биометрию оформляют в банке, а не в салоне",
  placeText:
    "МегаФон — оператор связи, мы не снимаем биометрию. Запись лица и голоса делают в банке и сохраняют в Единой биометрической системе (ЕБС). В салоне МегаФон оформляют саму сим-карту: договор и IMEI телефона, не больше 10 номеров на человека.",
  placeBtn: "Оставить заявку на салон",
  bringTitle: "Что взять с собой",
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
  step2Title: "Зарегистрируйтесь на Госуслугах и сдайте биометрию",
  step2Items: [
    {
      title: "Зарегистрируйтесь на Госуслугах",
      text: "На сайте или лично в МФЦ либо банке. Возьмите паспорт, перевод и СНИЛС. После проверки на телефон или почту придёт пароль для первого входа.",
    },
    {
      title: "Зарегистрируйте биометрию в банке",
      text: "Это запись голоса и скан лица. Возьмите паспорт, перевод и СНИЛС и обратитесь в банк — запись в Единую биометрическую систему займёт несколько секунд.",
    },
    {
      title: "Узнайте IMEI телефона",
      text: "Идентификатор устройства, в котором будет работать сим-карта. Его впишут в договор — без него не появится связь. На человека — не больше 10 номеров у всех операторов.",
    },
    {
      title: "Оформите карту банка РФ",
      text: "Карта понадобится для пополнения сим-карты и оплаты тарифа. Это можно сделать в банке в тот же день.",
    },
  ],
  bioTitle: "Как проходит биометрия в банке",
  bioText: "Сотрудник банка попросит произнести несколько цифр и сделает скан лица",
  bring2Title: "Что взять в банк и салон",
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
  step3Title: "Оформите сим-карту и подтвердите биометрию",
  step3Text:
    "Когда СНИЛС, Госуслуги и биометрия готовы — приходите в салон МегаФон за сим-картой.",
  step3Items: [
    {
      title: "Оформите сим-карту в салоне МегаФон",
      text: "Скажите, что нужна первая SIM в России и тариф «Минимум +» или «Семейный +». «Тёплый приём» включится сам.",
    },
    {
      title: "Подтвердите биометрию",
      text: "Самостоятельно на Госуслугах или в салоне МегаФон. Сим-картой можно пользоваться сразу после подтверждения.",
      note: "Для подтверждения на Госуслугах нужно устройство с камерой: смартфон, планшет или ноутбук. Если камеры нет — воспользуйтесь компьютером в МФЦ.",
    },
    {
      title: "Откройте уведомление о подтверждении личности",
      text: "в разделе «Уведомления» на Госуслугах и следуйте инструкциям.",
    },
    {
      title: "Привяжите номер МегаФон",
      text: "к учётной записи на Госуслугах.",
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
  apply: "Оставить заявку",
};

const uz: InstructionCopy = {
  hero: "Rossiyaga xush kelibsiz",
  download: "Yo‘riqnomani yuklab olish",
  gainTitle: "MegaFon tarifini rasmiylashtiring",
  gainSub:
    "MegaFon SIM-kartasini ulang va yaqinlaringiz bilan aloqada bo‘ling.",
  widgets: [
    { href: "#snils", label: "Pasport va ShIHSR" },
    { href: "#getsim", label: "Gosuslugi va biometriya" },
    { href: "#activation", label: "SIM-karta va tasdiqlash" },
    { href: "#payment", label: "Tarif to'lovi" },
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
  howTitle: "SIM-kartani qanday rasmiylashtirish va tasdiqlash",
  step1Title: "Pasportni tarjima qiling va ShIHSR oling",
  step1Text:
    "Avval pasportni tarjima byurosida rus tiliga tarjima qildiring va notarius tasdiqlatib oling. Pasport va tarjima bilan Rossiya Ijtimoiy Jamg‘armasi (RIJ) yoki MFCda ShIHSR — shaxsiy hisob sug‘urta raqamini rasmiylashtiring. Hujjat odatda murojaat paytida darhol tayyor bo‘ladi.",
  placeTitle: "Biometriya bankda olinadi, salonda emas",
  placeText:
    "MegaFon — aloqa operatori, biz biometriya olmaymiz. Yuz va ovoz yozuvi bankda amalga oshiriladi va Yagona biometrik tizimda (YBT) saqlanadi. MegaFon salonida esa SIM-kartaning o‘zi rasmiylashtiriladi: shartnoma va telefon IMEI, bir kishiga 10 tadan ortiq raqam emas.",
  placeBtn: "Salon uchun ariza qoldiring",
  bringTitle: "O‘zingiz bilan nima olish kerak",
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
  step2Title: "Gosuslugida ro‘yxatdan o‘ting va biometriya topshiring",
  step2Items: [
    {
      title: "Gosuslugida ro‘yxatdan o‘ting",
      text: "Saytda yoki shaxsan MFC yoki bankda. Pasport, tarjima va ShIHSRni oling. Tekshiruvdan so‘ng telefon yoki pochtaga birinchi kirish uchun parol keladi.",
    },
    {
      title: "Bankda biometriya topshiring",
      text: "Bu ovoz yozuvi va yuz skani. Pasport, tarjima va ShIHSRni olib bankka boring — Yagona biometrik tizimga yozuv bir necha soniya oladi.",
    },
    {
      title: "Telefon IMEIsini biling",
      text: "SIM-karta ishlaydigan qurilma identifikatori. U shartnomaga yoziladi — usiz aloqa bo‘lmaydi. Bir kishiga barcha operatorlarda 10 tadan ortiq raqam emas.",
    },
    {
      title: "RF bank kartasini rasmiylashtiring",
      text: "Karta SIM-kartani to‘ldirish va tarif to‘lovi uchun kerak. Bankda shu kuni qilish mumkin.",
    },
  ],
  bioTitle: "Bankda biometriya qanday o‘tadi",
  bioText: "Bank xodimi bir nechta raqamni aytishingizni so‘raydi va yuz skanini oladi",
  bring2Title: "Bank va salonga nima olib borish kerak",
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
  step3Title: "SIM-kartani rasmiylashtiring va biometriyani tasdiqlang",
  step3Text:
    "ShIHSR, Gosuslugi va biometriya tayyor bo‘lgach — SIM-karta uchun MegaFon saloniga keling.",
  step3Items: [
    {
      title: "MegaFon salonida SIM-karta oling",
      text: "Rossiyada birinchi SIM va «Minimum +» yoki «Oilaviy +» kerakligini ayting. «Iliq kutib olish» o‘zi ulanadi.",
    },
    {
      title: "Biometriyani tasdiqlang",
      text: "Mustaqil ravishda Gosuslugida yoki MegaFon salonida. Tasdiqlangandan so‘ng SIM-kartadan darhol foydalanish mumkin.",
      note: "Gosuslugida tasdiqlash uchun kamerali qurilma kerak: smartfon, planshet yoki noutbuk. Kamera bo‘lmasa — MFCdagi kompyuterdan foydalaning.",
    },
    {
      title: "Shaxsni tasdiqlash bildirishnomasini oching",
      text: "Gosuslugidagi «Bildirishnomalar» bo‘limida va ko‘rsatmalarga amal qiling.",
    },
    {
      title: "MegaFon raqamingizni bog‘lang",
      text: "Gosuslugidagi hisob yozuviga.",
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
  apply: "Ariza qoldirish",
};

const tg: InstructionCopy = {
  hero: "Ба Русия хуш омадед",
  download: "Дастурамалро сарборӣ кардан",
  gainTitle: "Тарофаи МегаФон ба расмият дароред",
  gainSub:
    "Сим-корти МегаФонро пайваст кунед ва бо наздиконатон дар тамос бошед.",
  widgets: [
    { href: "#snils", label: "Шиноснома ва СНИЛС" },
    { href: "#getsim", label: "Госуслуги ва биометрия" },
    { href: "#activation", label: "Сим-корт ва тасдиқ" },
    { href: "#payment", label: "Пардохти тароф" },
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
  howTitle: "Чӣ тавр сим-кортро ба расмият даровардан ва тасдиқ кардан",
  step1Title: "Шиносномаро тарҷума кунед ва СНИЛС гиред",
  step1Text:
    "Аввал шиносномаро дар бюрои тарҷума ба забони русӣ тарҷума карда, назди нотариус тасдиқ кунонед. Бо шиноснома ва тарҷума СНИЛС — рақами суғуртаи суратҳисоби шахсиро дар Фонди иҷтимоии Россия (ФИР) ё МФЦ ба расмият дароред. Ҳуҷҷат одатан фавран ҳангоми муроҷиат омода мешавад.",
  placeTitle: "Биометрия дар бонк гирифта мешавад, на дар салон",
  placeText:
    "МегаФон — оператори алоқа аст, мо биометрия намегирем. Сабти рӯй ва овоз дар бонк анҷом дода мешавад ва дар Системаи ягонаи биометрӣ (СЯБ) нигоҳ дошта мешавад. Дар салони МегаФон бошад, худи сим-корт ба расмият дароварда мешавад: шартнома ва IMEI-и телефон, ба як нафар на зиёда аз 10 рақам.",
  placeBtn: "Дархост ба салон гузоред",
  bringTitle: "Бо худ чӣ гирифтан лозим аст",
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
  step2Title: "Дар Госуслуги сабти ном кунед ва биометрия супоред",
  step2Items: [
    {
      title: "Дар Госуслуги сабти ном кунед",
      text: "Дар сайт ё шахсан дар МФЦ ё бонк. Шиноснома, тарҷума ва СНИЛСро гиред. Пас аз санҷиш ба телефон ё почта парол барои вуруди аввал меояд.",
    },
    {
      title: "Дар бонк биометрия супоред",
      text: "Ин сабти овоз ва скани рӯй аст. Шиноснома, тарҷума ва СНИЛСро гирифта ба бонк муроҷиат кунед — сабт ба Системаи ягонаи биометрӣ чанд сония мегирад.",
    },
    {
      title: "IMEI-и телефонро бидонед",
      text: "Идентификатори дастгоҳе, ки сим-корт дар он кор мекунад. Он ба шартнома навишта мешавад — бе он алоқа намешавад. Ба як нафар дар ҳамаи операторон на зиёда аз 10 рақам.",
    },
    {
      title: "Корти бонки РФ ба расмият дароред",
      text: "Корт барои пур кардани сим-корт ва пардохти тароф лозим аст. Дар бонк ҳамон рӯз кардан мумкин.",
    },
  ],
  bioTitle: "Биометрия дар бонк чӣ тавр мегузарад",
  bioText: "Корманди бонк хоҳиш мекунад, ки чанд рақамро бигӯед ва скани рӯйро мегирад",
  bring2Title: "Ба бонк ва салон чӣ гирифтан",
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
  step3Title: "Сим-кортро ба расмият дароред ва биометрияро тасдиқ кунед",
  step3Text:
    "Вақте СНИЛС, Госуслуги ва биометрия тайёр шуданд — барои сим-корт ба салони МегаФон оед.",
  step3Items: [
    {
      title: "Дар салони МегаФон сим-корт гиред",
      text: "Гӯед, ки SIM-и аввал дар Россия ва тарофаи «Минимум +» ё «Оилавӣ +» лозим аст. «Қабули гарм» худ пайваст мешавад.",
    },
    {
      title: "Биометрияро тасдиқ кунед",
      text: "Мустақилона дар Госуслуги ё дар салони МегаФон. Пас аз тасдиқ сим-кортро фавран истифода бурдан мумкин.",
      note: "Барои тасдиқ дар Госуслуги дастгоҳи дорои камера лозим аст: смартфон, планшет ё ноутбук. Агар камера набошад — аз компютери МФЦ истифода баред.",
    },
    {
      title: "Огоҳиномаи тасдиқи шахсиятро кушоед",
      text: "дар бахши «Огоҳиномаҳо»-и Госуслуги ва дастурҳоро риоя кунед.",
    },
    {
      title: "Рақами МегаФонро пайваст кунед",
      text: "ба ҳисоби Госуслуги.",
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
  apply: "Дархост гузоред",
};

const ky: InstructionCopy = {
  hero: "Россияга кош келиңиз",
  download: "Нускаманы жүктөө",
  gainTitle: "МегаФон тарифин тариздеңиз",
  gainSub:
    "МегаФон сим-картасын туташтырыңыз да, жакындарыңыз менен байланышта болуңуз.",
  widgets: [
    { href: "#snils", label: "Паспорт жана ЖЭКН" },
    { href: "#getsim", label: "Госуслуги жана биометрия" },
    { href: "#activation", label: "SIM-карта жана ырастоо" },
    { href: "#payment", label: "Тариф төлөмү" },
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
  howTitle: "SIM-картаны кантип таризтөө жана ырастоо",
  step1Title: "Паспортту которуп, ЖЭКН алыңыз",
  step1Text:
    "Адегенде паспортту котормо бюросунда орус тилине которуп, нотариустан күбөлөндүрүңүз. Паспорт жана котормо менен ЖЭКН — жеке эсептин камсыздандыруу номерин Россиянын Социалдык фондунан (РСФ) же МФЦден тариздеңиз. Документ көбүнчө кайрылганда дароо даяр болот.",
  placeTitle: "Биометрия банкта алынат, салондо эмес",
  placeText:
    "МегаФон — байланыш оператору, биз биометрия албайбыз. Бет жана үн жазуусу банкта жасалып, Бирдиктүү биометрикалык системада (ББС) сакталат. МегаФон салонунда болсо SIM-картанын өзү таризделет: келишим жана телефондун IMEIи, бир адамга 10 номерден ашык эмес.",
  placeBtn: "Салонго өтүнмө калтырыңыз",
  bringTitle: "Өзүңүз менен эмне алуу керек",
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
  step2Title: "Госуслугиге катталып, биометрия тапшырыңыз",
  step2Items: [
    {
      title: "Госуслугиге катталыңыз",
      text: "Сайтта же өзүңүз МФЦ же банкта. Паспорт, котормо жана ЖЭКНди алыңыз. Текшерүүдөн кийин телефонго же почтага биринчи кирүү үчүн сырсөз келет.",
    },
    {
      title: "Банкта биометрия тапшырыңыз",
      text: "Бул үн жазуусу жана беттин сканы. Паспорт, котормо жана ЖЭКНди алып банкка барыңыз — Бирдиктүү биометрикалык системага жазуу бир нече секунд алат.",
    },
    {
      title: "Телефондун IMEIсин билиңиз",
      text: "SIM-карта иштей турган түзмөктүн идентификатору. Ал келишимге жазылат — ансыз байланыш болбойт. Бир адамга бардык операторлордо 10 номерден ашык эмес.",
    },
    {
      title: "РФ банк картасын тариздеңиз",
      text: "Карта SIM толуктоо жана тариф төлөө үчүн керек. Банкта ошол эле күнү жасаса болот.",
    },
  ],
  bioTitle: "Банкта биометрия кантип өтөт",
  bioText: "Банк кызматкери бир нече санды айтууну сурайт жана беттин сканын алат",
  bring2Title: "Банкка жана салонго эмне алып баруу",
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
  step3Title: "SIM-картаны тариздеп, биометрияны ырастаңыз",
  step3Text:
    "ЖЭКН, Госуслуги жана биометрия даяр болгондо — SIM-карта үчүн МегаФон салонуна келиңиз.",
  step3Items: [
    {
      title: "МегаФон салонунан SIM алыңыз",
      text: "Россиядагы биринчи SIM жана «Минимум +» же «Үй-бүлөлүк +» керек экенин айтыңыз. «Жылуу тосуп алуу» өзү кошулат.",
    },
    {
      title: "Биометрияны ырастаңыз",
      text: "Өз алдынча Госуслугиде же МегаФон салонунда. Ырастагандан кийин SIM-картаны дароо колдонсо болот.",
      note: "Госуслугиде ырастоо үчүн камералуу түзмөк керек: смартфон, планшет же ноутбук. Камера жок болсо — МФЦдеги компьютерди колдонуңуз.",
    },
    {
      title: "Инсанды ырастоо билдирмесин ачыңыз",
      text: "Госуслугидеги «Билдирмелер» бөлүмүндө жана көрсөтмөлөрдү аткарыңыз.",
    },
    {
      title: "МегаФон номерин байлаңыз",
      text: "Госуслуги эсебине.",
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
