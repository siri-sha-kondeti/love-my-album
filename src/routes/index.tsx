import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight, Boxes, ChevronDown, Code2, FileText, GraduationCap, LifeBuoy, Lock, Mail,
  Menu, Network, Phone, Repeat, Send, ShieldCheck, Users, Wrench, X, Layers, Globe2,
} from "lucide-react";
import { aboutHighlights, competencies, education, experience, expertiseStrip, profile, skills } from "@/lib/cv";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sirisha Kondeti — Senior SAP EDI and Functional Consultant" },
      { name: "description", content: "Portfolio of Sirisha Kondeti: 7+ years in SAP SD, SAP MM, SAP GTS Trade, EDI integration, IDoc processing, and production support." },
      { property: "og:title", content: "Sirisha Kondeti — Senior SAP EDI and Functional Consultant" },
      { property: "og:description", content: "SAP SD, MM, GTS Trade, EDI integration, IDoc processing, and production support." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const skillIcons = [Boxes, Repeat, FileText, Network, Lock, Layers, ShieldCheck, LifeBuoy, Wrench];
const compIcons = [Repeat, Layers, Boxes, Network, Code2, LifeBuoy, FileText, Users];

function Eyebrow({ children, light }: { children: ReactNode; light?: boolean }) {
  return <p className={`text-xs font-bold uppercase tracking-[0.2em] ${light ? "text-accent" : "text-accent"}`}>{children}</p>;
}

function SectionHead({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-muted-foreground">{intro}</p>}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    nav.forEach((n) => { const el = document.getElementById(n.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary-foreground/10 bg-primary/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="text-lg font-extrabold tracking-tight text-primary-foreground">
          Sirisha<span className="text-accent">.</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`}
              className={`text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-ring ${active === n.id ? "text-accent" : "text-primary-foreground/80 hover:text-primary-foreground"}`}>
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden rounded-full bg-accent px-5 py-2 text-sm font-bold text-accent-foreground transition hover:brightness-110 md:inline-flex">
          Contact Me
        </a>
        <button className="text-primary-foreground md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-primary-foreground/10 px-5 pb-4 md:hidden" aria-label="Mobile">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}
              className={`block py-2.5 text-sm font-medium ${active === n.id ? "text-accent" : "text-primary-foreground/85"}`}>
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-primary pt-16 text-primary-foreground">
      <div className="dot-grid absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div className="fade-up">
          <Eyebrow light>Hello, I'm</Eyebrow>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">{profile.name}</h1>
          <p className="mt-3 text-xl font-semibold text-accent">{profile.title}</p>
          <p className="mt-5 max-w-lg leading-relaxed text-hero-muted">{profile.summary[0]}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#experience" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground transition hover:brightness-110">
              View My Experience <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-bold transition hover:bg-primary-foreground/10">
              Contact Me
            </a>
            <a href="#skills" className="inline-flex items-center px-3 py-3 text-sm font-semibold text-hero-muted underline-offset-4 hover:text-primary-foreground hover:underline">
              Explore My Skills
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm fade-up">
          <div className="absolute -left-6 top-10 h-24 w-24 rounded-full border-2 border-accent/60" aria-hidden />
          <div className="absolute -right-4 bottom-6 h-16 w-16 rotate-12 rounded-xl bg-accent/80" aria-hidden />
          <div className="relative aspect-square rounded-full bg-gradient-to-br from-secondary to-primary p-2 ring-1 ring-primary-foreground/20">
            <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-primary-foreground/5">
              <span className="text-7xl font-extrabold tracking-tight text-primary-foreground/90">SK</span>
              <span className="mt-2 text-xs uppercase tracking-[0.25em] text-hero-muted">Portrait</span>
            </div>
          </div>
          <div className="absolute -right-2 top-6 rounded-xl bg-background px-4 py-3 text-foreground shadow-xl">
            <p className="text-2xl font-extrabold text-primary">7+</p>
            <p className="text-xs text-muted-foreground">Years experience</p>
          </div>
          <div className="absolute -left-2 bottom-4 flex items-center gap-2 rounded-xl bg-background px-4 py-3 text-foreground shadow-xl">
            <Globe2 className="h-5 w-5 text-accent" />
            <p className="text-xs font-semibold leading-tight">North America · South<br />America · Europe</p>
          </div>
        </div>
      </div>
      <div className="relative border-t border-primary-foreground/10 bg-primary-foreground/5">
        <ul className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-8 gap-y-3 px-5 py-5">
          {expertiseStrip.map((e) => (
            <li key={e} className="flex items-center gap-2 text-sm font-semibold text-primary-foreground/90">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />{e}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative bg-surface py-24">
      <div className="dot-grid-muted absolute inset-y-0 right-0 w-1/3 opacity-60" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <Eyebrow>About me</Eyebrow>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">Connecting business processes through SAP and EDI</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            {profile.summary.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
          </div>
        </div>
        <ul className="grid content-start gap-3">
          {aboutHighlights.map((h, i) => (
            <li key={h} className={`flex items-start gap-3 rounded-xl border p-4 ${i % 3 === 0 ? "border-accent/30 bg-highlight" : "bg-card"}`}>
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{i + 1}</span>
              <span className="text-sm font-semibold text-foreground">{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="Technical skills" title="Expertise across SAP and EDI" intro="Grouped as listed in the CV — modules, standards, integration, protocols, configuration, documentation, support, and tools." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => {
            const Icon = skillIcons[i];
            const featured = i === 1;
            return (
              <article key={s.title}
                className={`rounded-2xl border p-6 transition hover:-translate-y-1 hover:shadow-lg ${featured ? "border-primary bg-primary text-primary-foreground" : "bg-card"}`}>
                <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${featured ? "bg-accent text-accent-foreground" : "bg-highlight text-highlight-foreground"}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <li key={it} className={`rounded-full px-3 py-1 text-xs font-medium ${featured ? "bg-primary-foreground/10 text-primary-foreground" : "bg-muted text-foreground"}`}>{it}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RoleCard({ role, defaultOpen }: { role: (typeof experience)[number]; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const preview = 3;
  const items = open ? role.responsibilities : role.responsibilities.slice(0, preview);
  return (
    <li className="relative pl-10">
      <span className="absolute left-0 top-6 flex h-6 w-6 items-center justify-center rounded-full border-4 border-background bg-accent" aria-hidden />
      <article className="rounded-2xl border bg-card p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-xl font-bold text-primary">{role.title}</h3>
            <p className="mt-1 font-semibold text-foreground">{role.company}</p>
            <p className="mt-1 text-sm text-muted-foreground">{role.meta.join(" · ")}</p>
          </div>
          <span className="shrink-0 rounded-full bg-highlight px-3 py-1 text-xs font-bold text-highlight-foreground">{role.duration}</span>
        </div>
        {role.overview && <p className="mt-4 rounded-lg bg-muted p-4 text-sm italic text-muted-foreground">{role.overview}</p>}
        <h4 className="mt-5 text-xs font-bold uppercase tracking-widest text-secondary">Roles and Responsibilities</h4>
        <ul className="mt-3 space-y-2.5">
          {items.map((r) => (
            <li key={r} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{r}
            </li>
          ))}
        </ul>
        {role.responsibilities.length > preview && (
          <button onClick={() => setOpen(!open)} aria-expanded={open}
            className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary hover:text-accent focus-visible:outline-2 focus-visible:outline-ring">
            {open ? "Show less" : `Show all ${role.responsibilities.length} responsibilities`}
            <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
          </button>
        )}
      </article>
    </li>
  );
}

function Experience() {
  return (
    <section id="experience" className="bg-surface py-24">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHead eyebrow="Professional experience" title="Career timeline" />
        <ol className="relative space-y-8 before:absolute before:bottom-0 before:left-[11px] before:top-6 before:w-0.5 before:bg-border">
          {experience.map((r, i) => <RoleCard key={r.title} role={r} defaultOpen={i === 0} />)}
        </ol>
      </div>
    </section>
  );
}

function Project() {
  const tags = ["ANSI X12", "EDIFACT", "XML", "SAP IDocs", "Citrix", "GIS"];
  const r = experience[0];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="Featured project" title="EDI Mapping and Integration Support — Sealed Air" />
        <article className="grid overflow-hidden rounded-3xl border md:grid-cols-[1fr_1.4fr]">
          <div className="relative bg-primary p-8 text-primary-foreground">
            <div className="dot-grid absolute inset-0 opacity-50" aria-hidden />
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-semibold">
                <Lock className="h-3 w-3" /> Employer: Confidential
              </span>
              <dl className="mt-6 space-y-4 text-sm">
                <div><dt className="text-hero-muted">Client</dt><dd className="text-lg font-bold">Sealed Air</dd></div>
                <div><dt className="text-hero-muted">Engagement</dt><dd className="font-semibold">Freelance, May 2024 – May 2025</dd></div>
              </dl>
              <p className="mt-6 text-sm leading-relaxed text-hero-muted">{r.overview}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {tags.map((t) => <li key={t} className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">{t}</li>)}
              </ul>
            </div>
          </div>
          <div className="bg-card p-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-secondary">Documented responsibilities</h3>
            <ul className="mt-4 space-y-3">
              {r.responsibilities.map((x) => (
                <li key={x} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{x}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

function Competencies() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="Core competencies" title="What I bring to a project" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {competencies.map((c, i) => {
            const Icon = compIcons[i];
            return (
              <div key={c} className="rounded-2xl border bg-card p-6 text-center transition hover:shadow-md">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-sm leading-relaxed text-foreground/85">{c}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHead eyebrow="Education" title="Academic background" />
        <div className="flex flex-col gap-5 rounded-2xl border bg-card p-8 sm:flex-row sm:items-center">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-highlight text-highlight-foreground">
            <GraduationCap className="h-8 w-8" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-bold text-primary">{education.degree}</h3>
            <p className="mt-1 text-muted-foreground">{education.institution}</p>
          </div>
          <span className="shrink-0 rounded-full bg-muted px-4 py-1.5 text-sm font-bold text-foreground">{education.duration}</span>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Please enter your name, a valid email address, and a message.");
      return;
    }
    setError("");
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject || "Portfolio enquiry")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
  const field = "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-ring/30";
  return (
    <section id="contact" className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
      <div className="dot-grid absolute inset-0 opacity-50" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
        <div>
          <Eyebrow light>Contact</Eyebrow>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Have an SAP or EDI role in mind? Let's talk.</h2>
          <p className="mt-4 max-w-md text-hero-muted">Recruiters, hiring managers, and prospective consulting clients are welcome to get in touch.</p>
          <div className="mt-8 space-y-4">
            <a href={profile.phoneHref} className="flex items-center gap-4 rounded-xl bg-primary-foreground/5 p-4 transition hover:bg-primary-foreground/10">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground"><Phone className="h-5 w-5" /></span>
              <span><span className="block text-xs text-hero-muted">Phone</span><span className="font-semibold">{profile.phone}</span></span>
            </a>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-4 rounded-xl bg-primary-foreground/5 p-4 transition hover:bg-primary-foreground/10">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground"><Mail className="h-5 w-5" /></span>
              <span className="min-w-0"><span className="block text-xs text-hero-muted">Email</span><span className="block truncate font-semibold">{profile.email}</span></span>
            </a>
          </div>
        </div>
        <form onSubmit={submit} noValidate className="rounded-2xl bg-card p-6 text-card-foreground shadow-2xl sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-semibold">Name<input className={`${field} mt-1.5`} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} /></label>
            <label className="text-sm font-semibold">Email<input type="email" className={`${field} mt-1.5`} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} /></label>
          </div>
          <label className="mt-4 block text-sm font-semibold">Subject<input className={`${field} mt-1.5`} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} maxLength={150} /></label>
          <label className="mt-4 block text-sm font-semibold">Message<textarea rows={5} className={`${field} mt-1.5 resize-none`} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={2000} /></label>
          {error && <p role="alert" className="mt-3 text-sm font-medium text-destructive">{error}</p>}
          {sent && !error && <p role="status" className="mt-3 text-sm font-medium text-highlight-foreground">Your email app should now be open with the message ready to send.</p>}
          <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:bg-secondary">
            Compose email <Send className="h-4 w-4" />
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">Opens your email app, addressed to Sirisha.</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-extrabold text-primary">{profile.name}<span className="text-accent">.</span></p>
          <p className="text-sm text-muted-foreground">{profile.title}</p>
        </div>
        <nav className="flex flex-wrap gap-5" aria-label="Footer">
          {nav.map((n) => <a key={n.id} href={`#${n.id}`} className="text-sm text-muted-foreground hover:text-primary">{n.label}</a>)}
          <a href={`mailto:${profile.email}`} className="text-sm text-muted-foreground hover:text-primary">Email</a>
        </nav>
      </div>
      <p className="mx-auto mt-8 max-w-6xl border-t px-5 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Project />
        <Competencies />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
