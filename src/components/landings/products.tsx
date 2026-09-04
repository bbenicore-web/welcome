import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { catalogTariffs, specials } from "@/lib/products";

export function ProductTariffs({
  onPick,
}: {
  onPick: (id: string) => void;
}) {
  return (
    <section id="tariffs" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Тарифы витрины
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Для мигрантов доступны публичные тарифы плюс спецпродукты. Базовый —
          «Минимум +». Максимальный — «Семейный +».
        </p>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {catalogTariffs.map((tariff) => {
            const popular = "popular" in tariff && tariff.popular;
            return (
              <article
                key={tariff.id}
                className={`flex flex-col rounded-3xl p-6 ring-1 ${
                  popular
                    ? "bg-[#07150d] text-white ring-[#00B956]"
                    : "bg-[#f3faf5] ring-black/5"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p
                      className={`text-xs font-semibold uppercase tracking-wide ${
                        popular ? "text-[#9dffc2]" : "text-[#00B956]"
                      }`}
                    >
                      {tariff.level}
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold">{tariff.name}</h3>
                  </div>
                  {popular ? (
                    <Badge className="border-transparent bg-[#00B956] text-white">
                      Чаще берут
                    </Badge>
                  ) : null}
                </div>
                <p className="mt-4 text-3xl font-semibold">
                  {tariff.price}
                  <span
                    className={`ml-2 text-sm font-normal ${popular ? "text-white/60" : "text-muted-foreground"}`}
                  >
                    за 30 дней
                  </span>
                </p>
                <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm">
                  {[tariff.minutes, tariff.data, tariff.extra, ...tariff.points].map(
                    (line) => (
                      <li key={line} className="flex items-start gap-2">
                        <Check
                          className={`mt-0.5 size-4 shrink-0 ${popular ? "text-[#9dffc2]" : "text-[#00B956]"}`}
                        />
                        <span>{line}</span>
                      </li>
                    ),
                  )}
                </ul>
                <Button
                  onClick={() => onPick(tariff.id)}
                  className={`mt-8 h-12 rounded-full text-base font-semibold ${
                    popular
                      ? "bg-[#00B956] text-white hover:bg-[#00a34c]"
                      : "bg-[#07150d] text-white hover:bg-black"
                  }`}
                >
                  Хочу этот тариф
                </Button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SpecialProducts() {
  return (
    <section id="products" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Спецпродукты к тарифу
      </h2>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Сгруппированы по смыслу. Где написано «сам» — подключается автоматически.
        Остальное — в приложении, USSD или салоне, без прыжка на русскую простыню.
      </p>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <SpecialGroup title="Звони родным" items={specials.calls} />
        <SpecialGroup title="Переводи выгодно" items={specials.money} />
        <SpecialGroup title="Интернет за дисциплину" items={specials.data} />
      </div>
    </section>
  );
}

function SpecialGroup({
  title,
  items,
}: {
  title: string;
  items: { name: string; how: string; text: string }[];
}) {
  return (
    <div className="rounded-3xl bg-white p-6 ring-1 ring-black/5">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="mt-4 space-y-4">
        {items.map((item) => (
          <li key={item.name}>
            <p className="font-medium">{item.name}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#00B956]">
              {item.how}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
