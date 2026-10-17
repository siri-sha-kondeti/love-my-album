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

function Eyebrow({ children }: { children: ReactNode; light?: boolean }) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-accent">
      <span className="h-px w-6 bg-accent" />{children}
    </p>
  );
}

function SectionHead({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gradient-brand sm:text-5xl">{title}</h2>
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
  const chips = [
    { label: "ANSI X12", pos: "-left-4 top-16", anim: "float-slow" },
    { label: "EDIFACT", pos: "-right-6 top-1/2", anim: "float-slower" },
    { label: "SAP IDocs", pos: "left-6 -bottom-2", anim: "float-slower" },
    { label: "XML", pos: "right-10 -top-3", anim: "float-slow" },
  ];
  return (
    <section id="home" className="relative isolate overflow-hidden bg-primary pt-16 text-primary-foreground">
      <div className="dot-grid absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" aria-hidden />
      <div className="glow-accent absolute -right-40 -top-40 -z-10 h-[38rem] w-[38rem] rounded-full blur-2xl" aria-hidden />
      <div className="glow-secondary absolute -bottom-52 -left-40 -z-10 h-[34rem] w-[34rem] rounded-full blur-2xl" aria-hidden />

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 py-20 md:py-28 lg:grid-cols-[1.15fr_1fr]">
        <div className="fade-up">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-primary-foreground/90">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            7+ years in SAP & EDI integration
          </span>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Sirisha <span className="text-gradient">Kondeti</span>
          </h1>
          <p className="mt-5 text-lg font-semibold text-primary-foreground/90 sm:text-xl">
            {profile.title}
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-hero-muted">{profile.summary[0]}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#experience" className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-lg shadow-accent/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/40">
              View My Experience <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="glass inline-flex items-center rounded-full px-7 py-3.5 text-sm font-bold transition hover:-translate-y-0.5">
              Contact Me
            </a>
            <a href="#skills" className="inline-flex items-center gap-1 px-3 py-3 text-sm font-semibold text-hero-muted transition hover:text-primary-foreground">
              Explore My Skills <ChevronDown className="h-4 w-4" />
            </a>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-3">
            {[["7+", "Years experience"], ["3", "Continents"], ["850·830·855", "EDI transactions"]].map(([v, l]) => (
              <div key={l} className="glass rounded-2xl px-4 py-3">
                <dt className="sr-only">{l}</dt>
                <dd className="truncate text-xl font-extrabold">{v}</dd>
                <dd className="text-xs text-hero-muted">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md fade-up">
          <div className="spin-slow absolute -inset-6 rounded-full border border-dashed border-primary-foreground/20" aria-hidden />
          <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-br from-accent via-secondary to-transparent opacity-70 blur-sm" aria-hidden />
          <div className="glass relative aspect-[4/5] overflow-hidden rounded-[2.5rem]">
            <div className="dot-grid absolute inset-0 opacity-40" aria-hidden />
            <div className="relative flex h-full flex-col items-center justify-center">
            <div className="flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-accent to-secondary shadow-2xl">
              <img
                src="https://i.postimg.cc/V6zTmQs9/Sirisha-profile-pic-(8).jpg"
                alt="Sirisha Kondeti"
                className="h-full w-full object-cover"
              />
            </div>
              <p className="mt-6 text-sm font-semibold">{profile.name}</p>
              <p className="text-xs uppercase tracking-[0.25em] text-hero-muted">Senior SAP EDI &amp; Functional Consultant</p>
            </div>
            <div className="glass absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl p-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground"><Globe2 className="h-5 w-5" /></span>
              <p className="text-xs font-semibold leading-snug">International projects across North America, South America & Europe</p>
            </div>
          </div>
          {chips.map((c) => (
            <span key={c.label} className={`glass absolute ${c.pos} ${c.anim} hidden rounded-full px-3.5 py-1.5 text-xs font-bold shadow-lg sm:inline-flex`}>
              {c.label}
            </span>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden border-t border-primary-foreground/10">
        <ul className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3 px-5 py-6">
          {expertiseStrip.map((e) => (
            <li key={e} className="glass rounded-full px-4 py-1.5 text-sm font-semibold text-primary-foreground/90 transition hover:border-accent hover:text-accent">
              {e}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-glow relative py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <Eyebrow>About me</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-primary sm:text-5xl">
            Connecting business processes through <span className="text-gradient-brand">SAP and EDI</span>
          </h2>
          <div className="mt-8 space-y-5 border-l-2 border-accent/40 pl-6 leading-relaxed text-muted-foreground">
            {profile.summary.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
          </div>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {aboutHighlights.map((h, i) => (
            <li key={h} className={`card-modern p-5 ${i === 0 || i === 7 ? "sm:col-span-2 bg-primary text-primary-foreground" : ""}`}>
              <span className={`text-xs font-extrabold tracking-widest ${i === 0 || i === 7 ? "text-accent" : "text-secondary"}`}>{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-2 text-sm font-semibold leading-snug">{h}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative bg-surface py-28">
      <div className="dot-grid-muted absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_60%)]" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="Technical skills" title="Expertise across SAP and EDI" intro="Grouped as listed in the CV — modules, standards, integration, protocols, configuration, documentation, support, and tools." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => {
            const Icon = skillIcons[i % skillIcons.length]!;
            const featured = i === 1;
            return (
              <article key={s.title}
                className={`card-modern group overflow-hidden p-7 ${featured ? "border-primary bg-primary text-primary-foreground lg:row-span-1" : ""}`}>
                {featured && <div className="glow-accent absolute -right-20 -top-20 h-56 w-56 rounded-full" aria-hidden />}
                <div className="relative flex items-center justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${featured ? "bg-accent text-accent-foreground" : "bg-brand text-primary-foreground"} shadow-lg transition group-hover:scale-110`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className={`text-xs font-bold ${featured ? "text-hero-muted" : "text-muted-foreground"}`}>{s.items.length} skills</span>
                </div>
                <h3 className="relative mt-5 text-lg font-bold">{s.title}</h3>
                <ul className="relative mt-4 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <li key={it} className={`rounded-full border px-3 py-1 text-xs font-medium transition ${featured ? "border-primary-foreground/15 bg-primary-foreground/10 text-primary-foreground" : "border-border bg-muted text-foreground group-hover:border-accent/30"}`}>{it}</li>
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

function RoleCard({ role, defaultOpen, index }: { role: (typeof experience)[number]; defaultOpen: boolean; index: number }) {
  const [open, setOpen] = useState(defaultOpen);
  const preview = 3;
  const items = open ? role.responsibilities : role.responsibilities.slice(0, preview);
  return (
    <li className="relative pl-14">
      <span className="absolute left-0 top-7 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-extrabold text-primary-foreground shadow-lg ring-8 ring-surface" aria-hidden>
        {String(index + 1).padStart(2, "0")}
      </span>
      <article className="card-modern p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-xl font-bold text-primary sm:text-2xl">{role.title}</h3>
            <p className="mt-1 font-semibold text-foreground">{role.company}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {role.meta.map((m) => <span key={m} className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">{m}</span>)}
            </div>
          </div>
          <span className="shrink-0 rounded-full bg-highlight px-3.5 py-1.5 text-xs font-bold text-highlight-foreground">{role.duration}</span>
        </div>
        {role.overview && <p className="mt-5 rounded-2xl border-l-4 border-accent bg-muted p-4 text-sm italic text-muted-foreground">{role.overview}</p>}
        <h4 className="mt-6 text-xs font-bold uppercase tracking-widest text-secondary">Roles and Responsibilities</h4>
        <ul className="mt-3 grid gap-2.5">
          {items.map((r) => (
            <li key={r} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{r}
            </li>
          ))}
        </ul>
        {role.responsibilities.length > preview && (
          <button onClick={() => setOpen(!open)} aria-expanded={open}
            className="mt-5 inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-bold text-primary transition hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-ring">
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
    <section id="experience" className="bg-surface py-28">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHead eyebrow="Professional experience" title="Career timeline" />
        <ol className="relative space-y-10 before:absolute before:bottom-6 before:left-[19px] before:top-8 before:w-0.5 before:bg-gradient-to-b before:from-accent before:via-secondary/50 before:to-transparent">
          {experience.map((r, i) => <RoleCard key={r.title} role={r} index={i} defaultOpen={i === 0} />)}
        </ol>
      </div>
    </section>
  );
}

function Project() {
  const tags = ["ANSI X12", "EDIFACT", "XML", "SAP IDocs", "Citrix", "GIS"];
  const r = experience[0]!;
  return (
    <section className="section-glow py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="Featured project" title="EDI Mapping and Integration Support — Sealed Air" />
        <article className="grid overflow-hidden rounded-[2rem] border shadow-2xl md:grid-cols-[1fr_1.4fr]">
          <div className="relative isolate overflow-hidden bg-primary p-8 text-primary-foreground sm:p-10">
            <div className="dot-grid absolute inset-0 -z-10 opacity-40" aria-hidden />
            <div className="glow-accent absolute -bottom-24 -left-24 -z-10 h-72 w-72 rounded-full" aria-hidden />
            <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold">
              <Lock className="h-3 w-3" /> Employer: Confidential
            </span>
            <dl className="mt-8 grid gap-3 text-sm">
              <div className="glass rounded-2xl p-4"><dt className="text-xs text-hero-muted">Client</dt><dd className="text-xl font-bold">Sealed Air</dd></div>
              <div className="glass rounded-2xl p-4"><dt className="text-xs text-hero-muted">Engagement</dt><dd className="font-semibold">Freelance, May 2024 – May 2025</dd></div>
            </dl>
            <p className="mt-6 text-sm leading-relaxed text-hero-muted">{r.overview}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {tags.map((t) => <li key={t} className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">{t}</li>)}
            </ul>
          </div>
          <div className="bg-card p-8 sm:p-10">
            <h3 className="text-xs font-bold uppercase tracking-widest text-secondary">Documented responsibilities</h3>
            <ol className="mt-5 space-y-4">
              {r.responsibilities.map((x, i) => (
                <li key={x} className="flex gap-4 text-sm leading-relaxed text-foreground/85">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-highlight text-xs font-extrabold text-highlight-foreground">{i + 1}</span>{x}
                </li>
              ))}
            </ol>
          </div>
        </article>
      </div>
    </section>
  );
}

function Competencies() {
  return (
    <section className="bg-surface py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="Core competencies" title="What I bring to a project" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {competencies.map((c, i) => {
            const Icon = compIcons[i % compIcons.length]!;
            return (
              <div key={c} className="card-modern group p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-primary-foreground shadow-lg transition group-hover:rotate-6 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-3xl font-extrabold text-border transition group-hover:text-accent/40">{String(i + 1).padStart(2, "0")}</span>
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
    <section id="education" className="section-glow py-28">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHead eyebrow="Education" title="Academic background" />
        <div className="card-modern overflow-hidden p-0">
          <div className="h-1.5 bg-brand" />
          <div className="flex flex-col gap-6 p-8 sm:flex-row sm:items-center">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand text-primary-foreground shadow-lg">
              <GraduationCap className="h-8 w-8" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-xl font-bold text-primary">{education.degree}</h3>
              <p className="mt-1 text-muted-foreground">{education.institution}</p>
            </div>
            <span className="shrink-0 rounded-full bg-highlight px-4 py-1.5 text-sm font-bold text-highlight-foreground">{education.duration}</span>
          </div>
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
    <section id="contact" className="relative isolate overflow-hidden bg-primary py-28 text-primary-foreground">
      <div className="dot-grid absolute inset-0 -z-10 opacity-40" aria-hidden />
      <div className="glow-accent absolute -right-40 top-0 -z-10 h-[36rem] w-[36rem] rounded-full blur-2xl" aria-hidden />
      <div className="glow-secondary absolute -bottom-40 -left-40 -z-10 h-[30rem] w-[30rem] rounded-full blur-2xl" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
        <div>
          <Eyebrow light>Contact</Eyebrow>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">Have an SAP or EDI role in mind? <span className="text-gradient">Let's talk.</span></h2>
          <p className="mt-4 max-w-md text-hero-muted">Recruiters, hiring managers, and prospective consulting clients are welcome to get in touch.</p>
          <div className="mt-8 space-y-4">
            <a href={profile.phoneHref} className="flex items-center gap-4 glass rounded-2xl p-4 transition hover:-translate-y-0.5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground"><Phone className="h-5 w-5" /></span>
              <span><span className="block text-xs text-hero-muted">Phone</span><span className="font-semibold">{profile.phone}</span></span>
            </a>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-4 glass rounded-2xl p-4 transition hover:-translate-y-0.5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground"><Mail className="h-5 w-5" /></span>
              <span className="min-w-0"><span className="block text-xs text-hero-muted">Email</span><span className="block truncate font-semibold">{profile.email}</span></span>
            </a>
          </div>
        </div>
        <form onSubmit={submit} noValidate className="rounded-[2rem] bg-card p-6 text-card-foreground shadow-2xl ring-1 ring-primary-foreground/20 sm:p-10">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-semibold">Name<input className={`${field} mt-1.5`} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} /></label>
            <label className="text-sm font-semibold">Email<input type="email" className={`${field} mt-1.5`} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} /></label>
          </div>
          <label className="mt-4 block text-sm font-semibold">Subject<input className={`${field} mt-1.5`} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} maxLength={150} /></label>
          <label className="mt-4 block text-sm font-semibold">Message<textarea rows={5} className={`${field} mt-1.5 resize-none`} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={2000} /></label>
          {error && <p role="alert" className="mt-3 text-sm font-medium text-destructive">{error}</p>}
          {sent && !error && <p role="status" className="mt-3 text-sm font-medium text-highlight-foreground">Your email app should now be open with the message ready to send.</p>}
          <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl">
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
    <footer className="border-t bg-surface py-12">
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
export default Index;