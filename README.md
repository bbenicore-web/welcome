# welcome

Два лендинга МегаФон по бизнес-требованиям «Единая платформа»:

- `/arrive` — только приехал: легализация как у СберМобайла, затем почему МегаФон и продукты
- `/here` — уже в России: почему МегаФон и продукты под барьеры, переход со своим номером

Языки первого этапа: русский, таджикский, узбекский, киргизский.

Тексты опираются на исследования сегмента: звонки и видео домой, мессенджеры при нуле, сохранение номера на сезон. Оформление SIM — по цепочке 2025 года: паспорт с переводом, СНИЛС, подтверждённые Госуслуги, биометрия, IMEI и договор в салоне (не больше 10 номеров).

## GitHub Pages

Сайт собирается в статику (`output: "export"`), чтобы его можно было выложить на GitHub Pages.

Целевой репозиторий: [github.com/bbenicore-web/welcome](https://github.com/bbenicore-web/welcome)

Адрес после публикации: https://bbenicore-web.github.io/welcome/

1. Создайте репозиторий `welcome` в организации `bbenicore-web` и запушьте `main`.
2. Settings → Pages → Source: **GitHub Actions**.
3. Workflow `.github/workflows/pages.yml` соберёт сайт с `basePath=/welcome` и выложит его.

Пока репозиторий на GitHub не создан и в этой среде нет `gh` login, Pages включить отсюда нельзя. Vercel в этом случае был запасным публичным URL, а не целевым хостингом.

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
