import Link from "next/link";
import { nav, site, whatsappUrl } from "@/content/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gold-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-gold-600">{site.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{site.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            Consultations à Lausanne et à distance.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-wide text-ink">Me joindre</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>
              <a href={site.phoneHref} className="hover:text-gold-600">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold-600">
                WhatsApp
              </a>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold-600">
                Formulaire de contact
              </Link>
            </li>
            <li className="pt-2">
              Je reçois à l&apos;{site.place.name}
              <br />
              {site.place.street}, {site.place.postalCode} {site.place.city}
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-wide text-ink">Le site</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold-600">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/mentions-legales" className="hover:text-gold-600">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/confidentialite" className="hover:text-gold-600">
                Confidentialité
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold-100">
        <div className="mx-auto max-w-6xl px-5 py-6 text-xs leading-relaxed text-ink-soft sm:px-8">
          <p>
            Les accompagnements proposés relèvent du bien-être et du développement personnel.
            Ils ne remplacent ni un diagnostic, ni un avis, ni un traitement médical.
          </p>
          <p className="mt-3">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
