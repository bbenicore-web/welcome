"use client";

import { useMemo, useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cities, tariffs } from "@/lib/i18n";
import { useLanguage } from "@/lib/language-context";

type CallbackFormProps = {
  defaultTariff?: string;
  compact?: boolean;
  /** Name + phone + city, like a recruitment landing. */
  hero?: boolean;
  onSubmitted?: () => void;
  idPrefix?: string;
  tariffChoices?: { id: string; name: string }[];
  submitLabel?: string;
};

export function CallbackForm({
  defaultTariff = "m",
  compact = false,
  hero = false,
  onSubmitted,
  idPrefix = "lead",
  tariffChoices,
  submitLabel,
}: CallbackFormProps) {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState<string>(cities[0]);
  const [country, setCountry] = useState("0");
  const [tariffId, setTariffId] = useState(defaultTariff);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const tariffOptions = useMemo(
    () =>
      tariffChoices ??
      tariffs.map((tariff) => ({
        id: tariff.id,
        name: t.tariffNames[tariff.id],
      })),
    [t, tariffChoices],
  );

  function reset() {
    setName("");
    setPhone("");
    setComment("");
    setError("");
    setDone(false);
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedName = name.trim();
    const digits = phone.replace(/\D/g, "");
    if (trimmedName.length < 2 || digits.length < 10) {
      setError(t.formError);
      return;
    }
    setError("");
    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 650));
    setSending(false);
    setDone(true);
    onSubmitted?.();
  }

  if (done) {
    return (
      <div className="flex flex-col items-start gap-3 rounded-[24px] bg-[#DDFFEC] p-5">
        <CheckCircle2 className="size-8 text-[#00B956]" aria-hidden />
        <p className="text-lg font-semibold text-foreground">{t.formSuccessTitle}</p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {t.formSuccessText}
        </p>
        <Button type="button" variant="outline" onClick={reset}>
          {t.formAnother}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className="grid gap-1.5">
        <Label htmlFor={`${idPrefix}-name`}>{t.formName}</Label>
        <Input
          id={`${idPrefix}-name`}
          name="name"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="h-11 bg-white text-base"
          required
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor={`${idPrefix}-phone`}>{t.formPhone}</Label>
        <Input
          id={`${idPrefix}-phone`}
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+7"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className="h-11 bg-white text-base"
          required
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor={`${idPrefix}-city`}>{t.formCity}</Label>
        <Select value={city} onValueChange={(value) => setCity(String(value))}>
          <SelectTrigger id={`${idPrefix}-city`} className="h-11 w-full bg-white">
            <SelectValue>
              {(value: string | null) =>
                value ? t.cityNames[value as keyof typeof t.cityNames] : ""
              }
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {cities.map((id) => (
              <SelectItem key={id} value={id}>
                {t.cityNames[id]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {hero ? null : (
        <>
          <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
            <div className="grid gap-1.5">
              <Label htmlFor={`${idPrefix}-country`}>{t.formCountry}</Label>
              <Select
                value={country}
                onValueChange={(value) => setCountry(String(value))}
              >
                <SelectTrigger
                  id={`${idPrefix}-country`}
                  className="h-11 w-full bg-white"
                >
                  <SelectValue>
                    {(value: string | null) =>
                      value ? t.originCountries[Number(value)] : ""
                    }
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {t.originCountries.map((item, index) => (
                    <SelectItem key={item} value={String(index)}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor={`${idPrefix}-tariff`}>{t.formTariff}</Label>
              <Select
                value={tariffId}
                onValueChange={(value) => setTariffId(String(value))}
              >
                <SelectTrigger
                  id={`${idPrefix}-tariff`}
                  className="h-11 w-full bg-white"
                >
                  <SelectValue>
                    {(value: string | null) =>
                      value
                        ? (tariffOptions.find((option) => option.id === value)
                            ?.name ?? "")
                        : ""
                    }
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {tariffOptions.map((option) => (
                    <SelectItem key={option.id} value={option.id}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor={`${idPrefix}-comment`}>{t.formComment}</Label>
            <Textarea
              id={`${idPrefix}-comment`}
              name="comment"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              className="min-h-24 bg-white text-base"
            />
          </div>
        </>
      )}
      {error ? (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}
      <Button
        type="submit"
        disabled={sending}
        className="h-[52px] rounded-[12px] bg-[#333] px-8 text-[15px] font-medium text-white hover:bg-[#404D46]"
      >
        {sending ? t.formSending : submitLabel ?? t.formSubmit}
      </Button>
    </form>
  );
}
