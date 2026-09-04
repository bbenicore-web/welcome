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
  messengersPack: string;
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
      "Связь в России и звонки домой без переплат. WhatsApp, Telegram и IMO при любом балансе. SIM очно: паспорт, СНИЛС, Госуслуги и биометрия.",
    brand: "МегаФон",
    product: "Тёплый приём",
    nav: { rates: "Звонки домой", tariffs: "Тарифы", how: "Как подключить", faq: "Вопросы" },
    getSim: "Получить SIM",
    heroKicker: "Для гостей из стран СНГ",
    heroTitle: "Связь с домом —",
    heroTitleAccent: "без переплат",
    heroLead:
      "Тарифы «Тёплый приём»: интернет в России, звонки родным от 5 ₽, видеозвонки в WhatsApp, Telegram и IMO даже при нуле. SIM оформляют очно: паспорт с переводом, СНИЛС, подтверждённые Госуслуги и биометрия.",
    heroSecondary: "Сравнить тарифы",
    heroNote: "Паспорт с переводом · СНИЛС · Госуслуги · биометрия · до 10 номеров",
    stats: [
      { value: "5 ₽", label: "минута в Узбекистан и на МегаФон Таджикистан" },
      { value: "4 шага", label: "документы до договора в салоне" },
      { value: "0 ₽", label: "видеозвонки и мессенджеры при любом балансе" },
    ],
    phoneFrom: "Входящий",
    phoneHome: "Мама · Ташкент",
    phoneRate: "5 ₽ / мин · «Тёплый приём»",
    phoneBalance: "Баланс 0 ₽ — мессенджеры работают",
    messengersOn: "WhatsApp, Telegram, IMO — видео без пакета",
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
      "Минуты, гигабайты и звонки домой в одном платеже. Мессенджеры и видеозвонки не едят пакет. Безлимит на МегаФон России — даже когда минуты закончились.",
    perMonth: "за 30 дней",
    popular: "Чаще берут",
    tariffNames: { s: "Тёплый приём S", m: "Тёплый приём M", l: "Тёплый приём L" },
    internet: "интернета",
    minutesRu: "минут по России",
    minutesHome: "минут домой",
    sms: "SMS по России",
    megafonUnlimited: "Безлимит на МегаФон России",
    messengersPack: "WhatsApp, Telegram, IMO без пакета",
    chooseTariff: "Хочу этот тариф",
    benefitsTitle: "Что важно, когда вы далеко от дома",
    benefits: [
      {
        title: "Видеозвонки и мессенджеры при любом балансе",
        text: "WhatsApp, Telegram и IMO не расходуют пакет — даже если на счёте ноль. Так большинство говорит с семьёй: голосом и по видео.",
      },
      {
        title: "Такси и карты всегда с собой",
        text: "Яндекс Go, Uber, 2ГИС, Google Карты и MAPS.ME работают без интернета по тарифу. Доедете до смены и не потеряетесь в новом городе.",
      },
      {
        title: "Меню на родном языке",
        text: "Наберите *105*2022# — подсказки, остатки и баланс можно смотреть на узбекском, таджикском или киргизском.",
      },
      {
        title: "Кешбэк с переводов домой",
        text: "1% возвращается за переводы в Узбекистан и Таджикистан с номера МегаФон — мелочь, которая копится каждый месяц.",
      },
      {
        title: "Без скрытых подписок",
        text: "«МегаФон Защита» спрашивает подтверждение, если кто-то пытается подключить платную услугу. Списания без согласия — нет.",
      },
      {
        title: "Номер не сгорает на сезон",
        text: "Уезжаете домой — номер и условия можно сохранить до следующего сезона, без обнуления. Особенно важно, если вы возвращаетесь каждый год.",
      },
    ],
    stepsTitle: "Как оформить SIM",
    stepsLead:
      "С 2025 года иностранцу нельзя купить российскую SIM только по паспорту. Сначала СНИЛС, Госуслуги и биометрия — потом договор в салоне.",
    steps: [
      {
        title: "Паспорт и СНИЛС",
        text: "Нотариальный перевод паспорта и СНИЛС в СФР или МФЦ. Это не миграционная процедура: можно сделать параллельно с патентом или учётом.",
      },
      {
        title: "Подтвердите Госуслуги",
        text: "Подтверждённая учётная запись в МФЦ или банке. Без неё биометрию и договор не оформят.",
      },
      {
        title: "Сдайте биометрию",
        text: "Лицо и голос в уполномоченном банке или в салоне с терминалом. Если СНИЛС и Госуслуги уже есть, иногда всё получается за один визит.",
      },
      {
        title: "Договор и IMEI в салоне",
        text: "Очно передаёте IMEI телефона и подписываете договор. На одного человека — не больше 10 номеров у всех операторов вместе.",
      },
    ],
    ussdHint: "Язык меню: *105*2022#",
    faqTitle: "Частые вопросы",
    faq: [
      {
        q: "Какие документы нужны?",
        a: "Паспорт с нотариальным переводом, СНИЛС, подтверждённые Госуслуги и биометрия — лицо и голос. В салоне понадобится IMEI телефона. Одна регистрация или патент эту цепочку не заменяют.",
      },
      {
        q: "Можно ли оформить за одно посещение?",
        a: "Да, если СНИЛС, Госуслуги и биометрия уже есть. Иначе сначала МФЦ или банк, затем салон. В части салонов биометрию снимают на месте — уточните, когда перезвоним.",
      },
      {
        q: "Сколько SIM можно оформить?",
        a: "Не больше 10 номеров на человека у всех операторов суммарно. В салоне проверят лимит по вашим данным.",
      },
      {
        q: "Что будет с номером, если уеду домой на сезон?",
        a: "Номер можно сохранить до следующего сезона: не отключайте его и следите за условиями. В салоне подскажут, как не потерять номер и пакет.",
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
        q: "Цены на сайте — окончательные?",
        a: "Это демонстрационный лендинг: цифры ориентированы на публичные условия линейки «Тёплый приём» и могут отличаться в вашем регионе и на дату подключения. Актуальные цены — в салоне и на megafon.ru.",
      },
    ],
    formTitle: "Оставьте номер — салон перезвонит",
    formLead:
      "Подскажем, какие документы взять и в какой салон ехать. Перезвоним в рабочие часы.",
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
      "Консультант перезвонит в ближайшие рабочие часы. В салон возьмите паспорт с переводом, СНИЛС и подтверждённые Госуслуги.",
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
      "Rossiyada aloqa va uyga arzon qo‘ng‘iroqlar. WhatsApp, Telegram va IMO har qanday balansda. SIM ochiq: pasport, SNILS, Gosuslugi va biometriya.",
    brand: "MegaFon",
    product: "Iliq kutib olish",
    nav: { rates: "Uyga qo‘ng‘iroq", tariffs: "Tariflar", how: "Qanday ulash", faq: "Savollar" },
    getSim: "SIM olish",
    heroKicker: "MDH mamlakatlaridan kelgan mehmonlar uchun",
    heroTitle: "Uy bilan aloqa —",
    heroTitleAccent: "ortiqcha to‘lovsiz",
    heroLead:
      "«Iliq kutib olish» tariflari: Rossiyada internet, oilaga 5 ₽ dan qo‘ng‘iroq, WhatsApp, Telegram va IMO video qo‘ng‘iroqlari balans nol bo‘lsa ham. SIM ochiq rasmiylashtiriladi: tarjima qilingan pasport, SNILS, tasdiqlangan Gosuslugi va biometriya.",
    heroSecondary: "Tariflarni solishtirish",
    heroNote: "Tarjima qilingan pasport · SNILS · Gosuslugi · biometriya · 10 tagacha raqam",
    stats: [
      { value: "5 ₽", label: "O‘zbekiston va MegaFon Tojikistonga bir daqiqa" },
      { value: "4 qadam", label: "salon shartnomasigacha hujjatlar" },
      { value: "0 ₽", label: "har qanday balansda video va messenjerlar" },
    ],
    phoneFrom: "Kiruvchi",
    phoneHome: "Ona · Toshkent",
    phoneRate: "5 ₽ / daq · «Iliq kutib olish»",
    phoneBalance: "Balans 0 ₽ — messenjerlar ishlaydi",
    messengersOn: "WhatsApp, Telegram, IMO — paketdan tashqari video",
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
      "Daqiqalar, gigabaytlar va uyga qo‘ng‘iroqlar bitta to‘lovda. Messenjerlar va video qo‘ng‘iroqlar paketni yemaydi. MegaFon Rossiyaga cheksiz — daqiqa tugasa ham.",
    perMonth: "30 kuniga",
    popular: "Ko‘proq olinadi",
    tariffNames: { s: "Iliq kutib olish S", m: "Iliq kutib olish M", l: "Iliq kutib olish L" },
    internet: "internet",
    minutesRu: "Rossiya bo‘yicha daqiqa",
    minutesHome: "uyga daqiqa",
    sms: "Rossiya bo‘yicha SMS",
    megafonUnlimited: "MegaFon Rossiyaga cheksiz",
    messengersPack: "WhatsApp, Telegram, IMO paketsiz",
    chooseTariff: "Shu tarifni xohlayman",
    benefitsTitle: "Uydan uzoqda muhim bo‘lgan narsalar",
    benefits: [
      {
        title: "Har qanday balansda video va messenjerlar",
        text: "WhatsApp, Telegram va IMO paketni sarflamaydi — balans nol bo‘lsa ham. Oilaga ovoz va video orqali shunday gaplashiladi.",
      },
      {
        title: "Taksi va xarita doim yonida",
        text: "Yandex Go, Uber, 2GIS, Google Maps va MAPS.ME tarif internetisiz ishlaydi. Smenaga yetib borasiz, yangi shaharda yo‘lni adashtirmaysiz.",
      },
      {
        title: "Menyu ona tilingizda",
        text: "*105*2022# tering — qoldiq va balansni o‘zbek, tojik yoki qirg‘iz tilida ko‘rish mumkin.",
      },
      {
        title: "Uyga pul o‘tkazmadan keshbek",
        text: "MegaFon raqamidan O‘zbekiston va Tojikistonga o‘tkazmalar uchun 1% qaytadi.",
      },
      {
        title: "Yashirin obunalarsiz",
        text: "«MegaFon Himoya» pullik xizmat ulanmoqchi bo‘lsa, tasdiq so‘raydi. Ruxsatsiz yechib olish yo‘q.",
      },
      {
        title: "Raqam mavsumda yonmaydi",
        text: "Uyga ketsangiz, raqam va shartlarni keyingi mavsumgacha saqlash mumkin. Har yili qaytadiganlar uchun muhim.",
      },
    ],
    stepsTitle: "SIM qanday rasmiylashtiriladi",
    stepsLead:
      "2025-yildan chet ellik fuqaro rossiya SIMini faqat pasport bilan ololmaydi. Avval SNILS, Gosuslugi va biometriya — keyin salon shartnomasi.",
    steps: [
      {
        title: "Pasport va SNILS",
        text: "Pasportning notarial tarjimasi va SNILS SFR yoki MFCda. Bu migratsiya tartibi emas: patent yoki hisob bilan parallel qilish mumkin.",
      },
      {
        title: "Gosuslugini tasdiqlang",
        text: "MFC yoki bankda tasdiqlangan hisob. Bunsiz biometriya va shartnoma bo‘lmaydi.",
      },
      {
        title: "Biometriya topshiring",
        text: "Yuz va ovoz vakolatli bankda yoki terminali bor salonda. SNILS va Gosuslugi tayyor bo‘lsa, ba’zan bitta tashrif yetadi.",
      },
      {
        title: "Shartnoma va IMEI salonda",
        text: "Telefon IMEIsini ochiq topshirasiz va shartnoma imzolaysiz. Bir kishiga barcha operatorlarda jami 10 tadan ortiq raqam yo‘q.",
      },
    ],
    ussdHint: "Menyu tili: *105*2022#",
    faqTitle: "Ko‘p so‘raladigan savollar",
    faq: [
      {
        q: "Qanday hujjatlar kerak?",
        a: "Notarial tarjima qilingan pasport, SNILS, tasdiqlangan Gosuslugi va biometriya — yuz va ovoz. Salonda telefon IMEI kerak. Ro‘yxat yoki patent bu zanjirni almashtirmaydi.",
      },
      {
        q: "Bitta tashrifda olish mumkinmi?",
        a: "Ha, agar SNILS, Gosuslugi va biometriya tayyor bo‘lsa. Aks holda avval MFC yoki bank, keyin salon. Ba’zi salonlarda biometriyani joyida olishadi.",
      },
      {
        q: "Nechta SIM olish mumkin?",
        a: "Bir kishiga barcha operatorlarda jami 10 tadan ortiq raqam yo‘q. Salonda limitni tekshiradi.",
      },
      {
        q: "Mavsumga uyga ketsam, raqam nima bo‘ladi?",
        a: "Raqamni keyingi mavsumgacha saqlash mumkin: o‘chirmang va shartlarni kuzating. Salonda qanday saqlashni aytishadi.",
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
        q: "Saytdagi narxlar yakuniymi?",
        a: "Bu namoyish lendinqi: raqamlar «Iliq kutib olish» ochiq shartlariga tayanadi va mintaqa hamda ulanish sanasiga qarab farq qilishi mumkin. Aniq narx — salonda va megafon.ru da.",
      },
    ],
    formTitle: "Raqamingizni qoldiring — salon qo‘ng‘iroq qiladi",
    formLead:
      "Qaysi hujjatlarni olib kelish va qaysi salonga borishni aytamiz. Ish vaqtida qo‘ng‘iroq qilamiz.",
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
      "Maslahatchi yaqin ish soatlarida qo‘ng‘iroq qiladi. Salonga tarjima qilingan pasport, SNILS va tasdiqlangan Gosuslugini oling.",
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
      "Алоқа дар Русия ва зангҳо ба хона бе пардохти зиёдатӣ. WhatsApp, Telegram ва IMO бо ҳар баланс. SIM рӯ ба рӯ: шиноснома, СНИЛС, Госуслуги ва биометрия.",
    brand: "МегаФон",
    product: "Пешвози гарм",
    nav: { rates: "Занг ба хона", tariffs: "Тарифҳо", how: "Чӣ тавр пайваст", faq: "Саволҳо" },
    getSim: "Гирифтани SIM",
    heroKicker: "Барои меҳмонон аз кишварҳои ИДМ",
    heroTitle: "Алоқа бо хона —",
    heroTitleAccent: "бе зиёдатпардохт",
    heroLead:
      "Тарифҳои «Пешвози гарм»: интернет дар Русия, занг ба хешон аз 5 ₽, видеозангҳо дар WhatsApp, Telegram ва IMO ҳатто бо баланси сифр. SIM рӯ ба рӯ: шиноснома бо тарҷума, СНИЛС, Госуслуги ва биометрия.",
    heroSecondary: "Муқоисаи тарифҳо",
    heroNote: "Шиноснома бо тарҷума · СНИЛС · Госуслуги · биометрия · то 10 рақам",
    stats: [
      { value: "5 ₽", label: "дақиқа ба Ӯзбекистон ва МегаФон Тоҷикистон" },
      { value: "4 қадам", label: "ҳуҷҷатҳо то шартнома дар салон" },
      { value: "0 ₽", label: "видеозангҳо ва мессенҷерҳо бо ҳар баланс" },
    ],
    phoneFrom: "Даромад",
    phoneHome: "Модар · Душанбе",
    phoneRate: "5 ₽ / дақ · «Пешвози гарм»",
    phoneBalance: "Баланс 0 ₽ — мессенҷерҳо кор мекунанд",
    messengersOn: "WhatsApp, Telegram, IMO — видео бе баста",
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
      "Дақиқаҳо, гигабайтҳо ва занг ба хона дар як пардохт. Мессенҷерҳо ва видеозангҳо бастаро намехӯранд. Бемаҳдуд ба МегаФони Русия.",
    perMonth: "барои 30 рӯз",
    popular: "Бештар мегиранд",
    tariffNames: { s: "Пешвози гарм S", m: "Пешвози гарм M", l: "Пешвози гарм L" },
    internet: "интернет",
    minutesRu: "дақиқа дар Русия",
    minutesHome: "дақиқа ба хона",
    sms: "SMS дар Русия",
    megafonUnlimited: "Бемаҳдуд ба МегаФони Русия",
    messengersPack: "WhatsApp, Telegram, IMO бе баста",
    chooseTariff: "Ҳамин тарифро мехоҳам",
    benefitsTitle: "Он чизҳое, ки дур аз хона муҳиманд",
    benefits: [
      {
        title: "Видеозангҳо ва мессенҷерҳо бо ҳар баланс",
        text: "WhatsApp, Telegram ва IMO бастаро сарф намекунанд — ҳатто агар баланс сифр бошад. Бо оила овоз ва видео мегӯянд.",
      },
      {
        title: "Таксӣ ва харита ҳамеша бо шумо",
        text: "Яндекс Go, Uber, 2ГИС, Google Maps ва MAPS.ME бе интернети тариф кор мекунанд.",
      },
      {
        title: "Меню бо забони модарӣ",
        text: "*105*2022# занед — бақия ва балансро бо тоҷикӣ, ӯзбекӣ ё қирғизӣ дидан мумкин аст.",
      },
      {
        title: "Кешбэк аз интиқол ба хона",
        text: "1% барои интиқол ба Ӯзбекистон ва Тоҷикистон аз рақами МегаФон бармегардад.",
      },
      {
        title: "Бе обунаҳои пинҳонӣ",
        text: "«МегаФон Ҳимоя» тасдиқ мепурсад, агар хидмати пулакӣ пайваст карданӣ шаванд. Бе ризоят пул намегиранд.",
      },
      {
        title: "Рақам дар мавсим намесӯзад",
        text: "Ба хона меравед — рақам ва шартҳоро то мавсими оянда нигоҳ доштан мумкин аст, бе сифр шудан.",
      },
    ],
    stepsTitle: "Чӣ тавр SIM расмӣ кардан",
    stepsLead:
      "Аз соли 2025 шаҳрванди хориҷӣ SIM-и Русияро танҳо бо шиноснома харида наметавонад. Аввал СНИЛС, Госуслуги ва биометрия — баъд шартнома дар салон.",
    steps: [
      {
        title: "Шиноснома ва СНИЛС",
        text: "Тарҷумаи нотариалии шиноснома ва СНИЛС дар СФР ё МФЦ. Ин расмиёти муҳоҷират нест: бо патент ё бақайдгирӣ параллел кардан мумкин аст.",
      },
      {
        title: "Госуслугиро тасдиқ кунед",
        text: "Ҳисоби тасдиқшуда дар МФЦ ё бонк. Бе он биометрия ва шартнома намедиҳанд.",
      },
      {
        title: "Биометрия супоред",
        text: "Рӯй ва овоз дар бонки ваколатдор ё салони дорои терминал. Агар СНИЛС ва Госуслуги тайёр бошанд, гоҳе як ташриф кифоя аст.",
      },
      {
        title: "Шартнома ва IMEI дар салон",
        text: "IMEI-и телефонро рӯ ба рӯ медиҳед ва шартнома имзо мекунед. Ба як нафар на зиёда аз 10 рақам дар ҳамаи операторон.",
      },
    ],
    ussdHint: "Забони меню: *105*2022#",
    faqTitle: "Саволҳои зиёд такроршаванда",
    faq: [
      {
        q: "Кадом ҳуҷҷатҳо лозиманд?",
        a: "Шиноснома бо тарҷумаи нотариалӣ, СНИЛС, Госуслугиҳои тасдиқшуда ва биометрия — рӯй ва овоз. Дар салон IMEI-и телефон лозим аст. Бақайдгирӣ ё патент ин занҷирро иваз намекунад.",
      },
      {
        q: "Дар як ташриф гирифтан мумкин аст?",
        a: "Ҳа, агар СНИЛС, Госуслуги ва биометрия тайёр бошанд. Вагарна аввал МФЦ ё бонк, баъд салон. Дар баъзе салонҳо биометрияро дар ҷо гирифта метавонанд.",
      },
      {
        q: "Чанд SIM гирифтан мумкин аст?",
        a: "Ба як нафар на зиёда аз 10 рақам дар ҳамаи операторон. Дар салон лимитро месанҷанд.",
      },
      {
        q: "Агар ба хона барои мавсим равам, бо рақам чӣ мешавад?",
        a: "Рақамро то мавсими оянда нигоҳ доштан мумкин аст: хомӯш накунед ва шартҳоро назорат кунед. Дар салон мегӯянд, чӣ тавр гум накунед.",
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
        q: "Нархҳои сайт ниҳоӣ ҳастанд?",
        a: "Ин лендинги намоишӣ аст. Рақамҳо метавонанд аз рӯи минтақа фарқ кунанд. Нархи аслӣ — дар салон ва megafon.ru.",
      },
    ],
    formTitle: "Рақам гузоред — салон занг мезанад",
    formLead:
      "Мегӯем, кадом ҳуҷҷатҳоро гиред ва ба кадом салон равед. Дар соатҳои корӣ занг мезанем.",
    formName: "Номи шумо",
    formPhone: "Телефон барои занг",
    formCity: "Шаҳр",
    formCountry: "Аз куҷо ҳастед",
    formTariff: "Кадом тарифро мебинед",
    formComment: "Шарҳ",
    formSubmit: "Фиристодани дархост",
    formSending: "Фиристода истодааст…",
    formSuccessTitle: "Дархост қабул шуд",
    formSuccessText:
      "Мушовир дар соатҳои корӣ занг мезанад. Ба салон шиноснома бо тарҷума, СНИЛС ва Госуслугиҳои тасдиқшуда гиред.",
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
      "Орусияда байланыш жана үйгө арзан чалуулар. WhatsApp, Telegram жана IMO каалаган баланста. SIM жүзө: паспорт, СНИЛС, Госуслуги жана биометрия.",
    brand: "МегаФон",
    product: "Жылуу тосуп алуу",
    nav: { rates: "Үйгө чалуу", tariffs: "Тарифтер", how: "Кантип кошуу", faq: "Суроолор" },
    getSim: "SIM алуу",
    heroKicker: "КМШ өлкөлөрүнөн келген коноктор үчүн",
    heroTitle: "Үй менен байланыш —",
    heroTitleAccent: "ашыкча төлөмсүз",
    heroLead:
      "«Жылуу тосуп алуу» тарифтери: Орусияда интернет, үйгө 5 ₽дан чалуу, WhatsApp, Telegram жана IMO видео чалуулары баланс нөл болсо да. SIM жүзө таризделет: которулган паспорт, СНИЛС, ырасталган Госуслуги жана биометрия.",
    heroSecondary: "Тарифтерди салыштыруу",
    heroNote: "Которулган паспорт · СНИЛС · Госуслуги · биометрия · 10 номерге чейин",
    stats: [
      { value: "5 ₽", label: "Өзбекстан жана МегаФон Тажикстанга бир мүнөт" },
      { value: "4 кадам", label: "салон келишимине чейин документтер" },
      { value: "0 ₽", label: "каалаган баланста видео жана мессенджерлер" },
    ],
    phoneFrom: "Кирүүчү",
    phoneHome: "Апа · Бишкек",
    phoneRate: "5 ₽ / мүн · «Жылуу тосуп алуу»",
    phoneBalance: "Баланс 0 ₽ — мессенджерлер иштейт",
    messengersOn: "WhatsApp, Telegram, IMO — пакетсиз видео",
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
      "Мүнөттөр, гигабайттар жана үйгө чалуулар бир төлөмдө. Мессенджерлер жана видео чалуулар пакетти жебейт. МегаФон Орусияга чексиз.",
    perMonth: "30 күнгө",
    popular: "Көбүрөөк алышат",
    tariffNames: { s: "Жылуу тосуп алуу S", m: "Жылуу тосуп алуу M", l: "Жылуу тосуп алуу L" },
    internet: "интернет",
    minutesRu: "Орусия боюнча мүнөт",
    minutesHome: "үйгө мүнөт",
    sms: "Орусия боюнча SMS",
    megafonUnlimited: "МегаФон Орусияга чексиз",
    messengersPack: "WhatsApp, Telegram, IMO пакетсиз",
    chooseTariff: "Ушул тарифти каалайм",
    benefitsTitle: "Үйдөн алыс жүргөндө маанилүү нерселер",
    benefits: [
      {
        title: "Каалаган баланста видео жана мессенджерлер",
        text: "WhatsApp, Telegram жана IMO пакетти сарптабайт — баланс нөл болсо да. Үй-бүлө менен үн жана видео аркылуу ушундай сүйлөшөт.",
      },
      {
        title: "Такси жана карта дайыма жаныңызда",
        text: "Яндекс Go, Uber, 2ГИС, Google Maps жана MAPS.ME тарифтик интернетсиз иштейт.",
      },
      {
        title: "Меню эне тилиңизде",
        text: "*105*2022# териңиз — калдык менен балансты кыргыз, өзбек же тажик тилинде көрө аласыз.",
      },
      {
        title: "Үйгө которуудан кешбэк",
        text: "МегаФон номеринен Өзбекстан жана Тажикстанга которуулар үчүн 1% кайтып келет.",
      },
      {
        title: "Жашыруун жазылууларсыз",
        text: "«МегаФон Коргоо» акылуу кызмат кошулганда ырастоо сурайт. Уруксатсыз акча албайт.",
      },
      {
        title: "Номер мезгилде күйбөйт",
        text: "Үйгө кетсеңиз, номер менен шарттарды кийинки мезгилге чейин сактаса болот, нөлдөнбөйт.",
      },
    ],
    stepsTitle: "SIM кантип таризделет",
    stepsLead:
      "2025-жылдан чет элдик жаран орус SIMин паспорт менен гана сатып ала албайт. Адегенде СНИЛС, Госуслуги жана биометрия — анан салон келишими.",
    steps: [
      {
        title: "Паспорт жана СНИЛС",
        text: "Паспорттун нотариалдык котормосу жана СНИЛС СФР же МФЦда. Бул миграция процедурасы эмес: патент же каттоо менен параллель жасаса болот.",
      },
      {
        title: "Госуслугини ырастаңыз",
        text: "МФЦ же банкта ырасталган эсеп. Ансыз биометрия жана келишим берилбейт.",
      },
      {
        title: "Биометрия тапшырыңыз",
        text: "Бет жана үн ыйгарымдуу банкта же терминалы бар салондо. СНИЛС менен Госуслуги даяр болсо, кээде бир жолу баруу жетет.",
      },
      {
        title: "Келишим жана IMEI салондо",
        text: "Телефондун IMEIсин жүзө тапшырып, келишимге кол коёсуз. Бир адамга бардык операторлордо жалпы 10 номерден көп эмес.",
      },
    ],
    ussdHint: "Меню тили: *105*2022#",
    faqTitle: "Көп берилүүчү суроолор",
    faq: [
      {
        q: "Кайсы документтер керек?",
        a: "Нотариалдык которулган паспорт, СНИЛС, ырасталган Госуслуги жана биометрия — бет жана үн. Салондо телефондун IMEIси керек. Каттоо же патент бул чынжырды алмаштырбайт.",
      },
      {
        q: "Бир жолу барганда алууга болобу?",
        a: "Ооба, эгер СНИЛС, Госуслуги жана биометрия даяр болсо. Болбосо адегенде МФЦ же банк, анан салон. Айрым салондордо биометрияны жерден алышат.",
      },
      {
        q: "Канча SIM алууга болот?",
        a: "Бир адамга бардык операторлордо жалпы 10 номерден көп эмес. Салондо лимитти текшеришет.",
      },
      {
        q: "Мезгилге үйгө кетсем, номер эмне болот?",
        a: "Номерди кийинки мезгилге чейин сактаса болот: өчүрбөңүз жана шарттарды көзөмөлдөңүз. Салондо кантип жоготпоону айтышат.",
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
        q: "Сайттагы баалар акыркыбы?",
        a: "Бул демонстрациялык лендинг. Сандар регионго жараша айырмаланышы мүмкүн. Так баа — салондо жана megafon.ru да.",
      },
    ],
    formTitle: "Номериңизди калтырыңыз — салон чалат",
    formLead:
      "Кайсы документтерди алып баруу жана кайсы салонго барууну айтабыз. Иш сааттарында чалабыз.",
    formName: "Атыңыз",
    formPhone: "Чалуу үчүн телефон",
    formCity: "Шаар",
    formCountry: "Кайдансыз",
    formTariff: "Кайсы тарифти карап жатасыз",
    formComment: "Комментарий",
    formSubmit: "Арыз жөнөтүү",
    formSending: "Жөнөтүлүүдө…",
    formSuccessTitle: "Арыз кабыл алынды",
    formSuccessText:
      "Кеңешчи жакынкы иш сааттарында чалат. Салонго которулган паспорт, СНИЛС жана ырасталган Госуслугини алып барыңыз.",
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
