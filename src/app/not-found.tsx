import { withBase } from "@/lib/base-path";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-full max-w-lg flex-col justify-center px-6 py-24">
      <p className="text-sm font-semibold text-[#00B956]">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">
        Такой страницы нет
      </h1>
      <p className="mt-3 text-muted-foreground">
        Вернитесь к выбору сценария или откройте лендинг «только приехал» /
        «уже в России».
      </p>
      <p className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
        <a href={withBase("/")} className="text-[#00B956] hover:underline">
          На главную
        </a>
        <a href={withBase("/arrive")} className="text-[#00B956] hover:underline">
          Только приехал
        </a>
        <a href={withBase("/here")} className="text-[#00B956] hover:underline">
          Уже в России
        </a>
      </p>
    </main>
  );
}
