# welcome

Два лендинга МегаФон по бизнес-требованиям «Единая платформа»:

- `/arrive` — копия инструкции СберМобайла (документы, биометрия, активация, оплата), продукты из ТЗ: Минимум + и Семейный +
- `/here` — копия воронки Яндекс Еды (заявка в герое, форматы, калькулятор, плюшки, шаги) под связь: Минимум +, Семейный + и все спецпродукты ТЗ

Языки первого этапа: русский, таджикский, узбекский, киргизский.

Тексты опираются на исследования сегмента: звонки и видео домой, мессенджеры при нуле, сохранение номера на сезон. Оформление SIM — по цепочке 2025 года: паспорт с переводом, СНИЛС, подтверждённые Госуслуги, биометрия, IMEI и договор в салоне (не больше 10 номеров).

Репозиторий: [github.com/bbenicore-web/welcome](https://github.com/bbenicore-web/welcome)

## GitHub Pages

Сайт собирается в статику (`output: "export"`). Settings → Pages → Source: **GitHub Actions**. Workflow `.github/workflows/pages.yml` кладёт сборку в `/welcome`.

Адрес: https://bbenicore-web.github.io/welcome/

Локально:

```bash
npm install
npm run dev
```

Откройте http://localhost:43123 — выбор сценария

- Только приехал: http://localhost:43123/arrive
- Уже в России: http://localhost:43123/here
- Сегменты и CJM: http://localhost:43123/cjm

Полный документ: http://localhost:43123/cjm/print

PDF: http://localhost:43123/migranty-cjm.pdf

Статическая сборка, как на GitHub Pages (без `basePath`):

```bash
npm run build && npm start
```
