"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Envoi impossible");
      }
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Envoi impossible");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="rounded-sm border border-gold-200 bg-gold-50 p-8 text-center"
      >
        <p className="font-serif text-2xl text-gold-700">Merci pour votre message.</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          Il est bien arrivé. Giuseppina vous répondra personnellement dès que possible.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-sm border border-gold-200 bg-white px-4 py-3 text-[15px] text-ink outline-none transition focus:border-gold-400 focus:ring-2 focus:ring-gold-200";

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="nom" className="mb-2 block text-sm text-ink">
          Nom
        </label>
        <input id="nom" name="nom" type="text" autoComplete="name" className={field} />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm text-ink">
          E-mail <span className="text-gold-600">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="telephone" className="mb-2 block text-sm text-ink">
          Téléphone
        </label>
        <input
          id="telephone"
          name="telephone"
          type="tel"
          autoComplete="tel"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-ink">
          Votre message <span className="text-gold-600">*</span>
        </label>
        <textarea id="message" name="message" required rows={6} className={field} />
      </div>

      {/* Piège à robots : invisible pour les humains, rempli par les spambots. */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="site-web">Ne pas remplir</label>
        <input id="site-web" name="siteWeb" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" ? (
        <p role="alert" className="text-sm text-red-700">
          {error}. Vous pouvez aussi écrire directement sur WhatsApp.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-sm bg-gold-500 px-6 py-3 text-sm font-medium tracking-wide text-white transition hover:bg-gold-600 disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
      </button>

      <p className="text-xs leading-relaxed text-ink-soft">
        Vos informations servent uniquement à répondre à votre message. Elles ne sont ni
        revendues, ni utilisées à des fins publicitaires.
      </p>
    </form>
  );
}
