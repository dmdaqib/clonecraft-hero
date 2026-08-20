import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  Diamond,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  PenTool,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
  Youtube,
} from "lucide-react";

import heroArm from "@/assets/hero-arm.jpg";
import styleRealism from "@/assets/style-realism.jpg";
import styleGeometric from "@/assets/style-geometric.jpg";
import stylePortrait from "@/assets/style-portrait.jpg";
import styleTraditional from "@/assets/style-traditional.jpg";
import styleMinimalist from "@/assets/style-minimalist.jpg";
import styleBlackGrey from "@/assets/style-blackgrey.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import ctaMachine from "@/assets/cta-machine.jpg";
import artistPhoto from "@/assets/artist-photo.png.asset.json";
import offerArm from "@/assets/offer-arm.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kryptonix Tattoo Studio | Custom Tattoos in Bangalore" },
      {
        name: "description",
        content:
          "Art you wear, for life. Custom tattoo designs, premium hygiene and 5+ years of artistry at Kryptonix Tattoo Studio, Bangalore.",
      },
      { property: "og:title", content: "Kryptonix Tattoo Studio | Art You Wear" },
      {
        property: "og:description",
        content:
          "Custom tattoos, premium hygiene and unmatched artistry. Book a free consultation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

const faqs = [
  [
    "Does getting a tattoo hurt?",
    "There is some discomfort, but we use premium needles and take breaks so every session stays manageable.",
  ],
  [
    "How do I book a session?",
    "Send us your idea on WhatsApp or book a free consultation — we sketch a custom design before your appointment.",
  ],
  [
    "Is the studio hygienic?",
    "100%. Single-use needles, sealed inks and a fully sterilised workstation for every client.",
  ],
  [
    "How much does a tattoo cost?",
    "Pricing depends on size, detail and placement. We share an exact quote after the design consultation.",
  ],
];

const features = [
  { icon: PenTool, title: "Custom Designs", text: "Personalized just for you" },
  { icon: ShieldCheck, title: "Safe & Hygienic", text: "100% sterile & safe" },
  { icon: Diamond, title: "Premium Quality", text: "Top inks & equipment" },
];

const stats = [
  { icon: Users, value: "1000+", label: "Happy Clients" },
  { icon: Sparkles, value: "1500+", label: "Tattoos Completed" },
  { icon: ShieldCheck, value: "5+", label: "Years Experience" },
  { icon: Star, value: "4.9/5", label: "Google Rating" },
];

const styles = [
  { img: styleRealism, name: "Realism", text: "Detailed. Realistic. Timeless." },
  { img: styleGeometric, name: "Geometric", text: "Symmetry. Patterns. Perfection." },
  { img: stylePortrait, name: "Portrait", text: "Faces. Memories. Forever." },
  { img: styleTraditional, name: "Traditional", text: "Bold Lines. Classic Vibes." },
  { img: styleMinimalist, name: "Minimalist", text: "Simple. Elegant. Meaningful." },
  { img: styleBlackGrey, name: "Black & Grey", text: "Shades. Depth. Emotion." },
];

const galleryFilters = [
  "All",
  "Realism",
  "Minimalist",
  "Black & Grey",
  "Geometric",
  "Traditional",
];

const gallery = [
  { img: gallery1, tag: "Black & Grey", alt: "Floral back tattoo" },
  { img: gallery2, tag: "Geometric", alt: "Compass and clock tattoo" },
  { img: gallery3, tag: "Realism", alt: "Goddess portrait tattoo" },
  { img: gallery4, tag: "Realism", alt: "Crowned lion tattoo" },
  { img: gallery5, tag: "Black & Grey", alt: "Warrior sleeve tattoo" },
  { img: gallery6, tag: "Minimalist", alt: "Fine line mountain tattoo" },
];

const reviews = [
  {
    quote:
      "Absolutely amazing experience! The artist understood my idea perfectly and the outcome was beyond my expectations.",
    name: "Rohan S.",
  },
  {
    quote:
      "Super professional and the hygiene standards are top-notch. Highly recommended Kryptonix!",
    name: "Anjali M.",
  },
  {
    quote:
      "Best tattoo studio in town! The detailing and finishing is just perfect. Will definitely come back for more.",
    name: "Vikram D.",
  },
  {
    quote:
      "Loved the whole process, from sketch to final ink. They took their time to get every line right.",
    name: "Neha K.",
  },
  {
    quote:
      "Clean studio, friendly artists and a design that I get compliments on every single day.",
    name: "Arjun P.",
  },
  {
    quote:
      "They turned a rough idea on my phone into the best piece of art I own. Worth every rupee.",
    name: "Sana R.",
  },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="font-display text-3xl font-extrabold leading-none tracking-tighter">
        K
      </span>
      <span className="leading-none">
        <span className="block font-display text-lg font-bold tracking-wide">
          KRYPTONIX
        </span>
        <span className="block text-[0.6rem] tracking-[0.3em] text-muted-foreground">
          TATTOO STUDIO
        </span>
      </span>
    </div>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-wide uppercase sm:text-3xl">
        {title}
      </h2>
      <div className="mt-3 flex items-center justify-center gap-2 text-muted-foreground">
        <span className="h-px w-8 bg-border" />
        <PenTool className="h-3.5 w-3.5" />
        <span className="h-px w-8 bg-border" />
      </div>
    </div>
  );
}

const socials = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com",
    style: { background: "var(--gradient-instagram)" },
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/917770012345",
    style: { background: "var(--brand-whatsapp)" },
  },
  {
    icon: Phone,
    label: "Call Us",
    href: "tel:+917770012345",
    style: { background: "var(--brand-call)" },
  },
];

function SocialDock() {
  const [docked, setDocked] = useState(false);

  useEffect(() => {
    const onScroll = () => setDocked(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed z-50 flex transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
        docked
          ? "bottom-6 left-1/2 -translate-x-1/2 translate-y-0 flex-row gap-4 rounded-full border border-border bg-card/90 px-5 py-3 shadow-[var(--shadow-soft)] backdrop-blur"
          : "top-1/2 right-5 -translate-y-1/2 flex-col gap-5 rounded-full border border-transparent px-2 py-2"
      }`}
    >
      {socials.map(({ icon: Icon, label, href, style }, i) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          aria-label={label}
          className="group auto-pop relative flex h-11 w-11 items-center justify-center rounded-full text-primary-foreground shadow-[var(--shadow-card)] transition-transform duration-300 hover:scale-125"
          style={{ ...style, animationDelay: `${i * 0.35}s` }}
        >
          <Icon className="h-5 w-5" strokeWidth={1.8} />
          <span
            className={`pointer-events-none absolute font-display text-[0.6rem] tracking-[0.14em] uppercase whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
              docked ? "-top-7" : "right-14"
            }`}
          >
            {label}
          </span>
        </a>
      ))}
    </div>
  );
}

function OfferModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6">
      <div
        className="absolute inset-0 animate-fade-in bg-primary/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 max-h-[92vh] w-full max-w-5xl animate-scale-in overflow-y-auto rounded-sm border border-amber-700/30 bg-background shadow-[var(--shadow-soft)]">
        <button
          onClick={onClose}
          aria-label="Close offer"
          className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/90 transition-transform duration-300 hover:scale-110 hover:bg-accent"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="grid lg:grid-cols-[1.05fr_1fr]">
          {/* Copy */}
          <div className="flex gap-5 p-7 sm:p-10">
            <div className="hidden shrink-0 flex-col items-center gap-4 lg:flex">
              <span className="font-display text-xl font-bold text-amber-700">✕</span>
              <span className="h-14 w-px bg-border" />
              <span
                className="eyebrow whitespace-nowrap"
                style={{ writingMode: "vertical-rl" }}
              >
                Follow Kryptonix
              </span>
              <span className="h-10 w-px bg-border" />
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-amber-700"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div>
              <p className="eyebrow text-amber-700">Limited Time Offer</p>
              <h2 className="mt-3 font-display text-4xl leading-[0.95] font-medium tracking-tight sm:text-5xl">
                Exclusive
                <span className="mt-1 block font-script text-5xl text-amber-700 sm:text-6xl">
                  Ink Offer
                </span>
              </h2>
              <p className="mt-5 text-sm text-muted-foreground">
                Premium tattoos. Exclusive savings.
                <br />
                Book your story today.
              </p>

              <div className="mt-6 flex items-stretch gap-5 border border-amber-700/40 p-5">
                <div>
                  <p className="eyebrow text-amber-700">Upto</p>
                  <p className="font-display text-5xl font-bold leading-none">
                    20<span className="text-amber-700">%</span>
                  </p>
                  <p className="font-display text-sm font-semibold tracking-[0.18em] text-amber-700 uppercase">
                    Off
                  </p>
                </div>
                <span className="w-px bg-amber-700/30" />
                <div className="self-center">
                  <p className="text-xs tracking-wide text-muted-foreground uppercase">
                    On all
                  </p>
                  <p className="font-display text-xl font-bold tracking-[0.1em] text-amber-700 uppercase">
                    Custom
                    <br />
                    Tattoos
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Offer valid for a limited time only.
                <br />
                Don't miss your chance to get inked.
              </p>

              <div className="mt-6 grid gap-4 border-t border-border pt-5 sm:grid-cols-2">
                {[
                  [ShieldCheck, "100% Safe & Hygienic", "Your safety is our priority."],
                  [PenTool, "Custom Designs", "Unique tattoos designed for you."],
                  [Star, "Experienced Artist", "Skilled. Creative. Passionate."],
                  [Diamond, "Premium Equipment", "Industry standard tools."],
                ].map(([Icon, title, text]) => {
                  const I = Icon as typeof ShieldCheck;
                  return (
                    <div
                      key={title as string}
                      className="flex items-start gap-3 transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      <I className="mt-0.5 h-5 w-5 text-amber-700" strokeWidth={1.4} />
                      <div>
                        <p className="font-display text-xs font-semibold tracking-[0.1em] uppercase">
                          {title as string}
                        </p>
                        <p className="text-xs text-muted-foreground">{text as string}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={onClose}
                className="mt-7 inline-flex items-center gap-2 font-display text-xs font-semibold tracking-[0.14em] uppercase text-muted-foreground transition-colors hover:text-foreground"
              >
                ← Back To Home
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative min-h-[260px] bg-background">
            <img
              src={offerArm.url}
              alt="Statue sleeve tattoo being inked with a tattoo machine"
              className="blend-image h-full w-full object-cover"
            />
            <div className="absolute top-6 right-6 flex h-32 w-32 flex-col items-center justify-center rounded-full border border-amber-700/40 bg-background/90 text-center backdrop-blur">
              <p className="text-[0.55rem] tracking-[0.18em] text-muted-foreground uppercase">
                Offer ends in
              </p>
              <p className="font-display text-xl font-bold">05 : 12 : 47</p>
              <p className="text-[0.5rem] tracking-[0.16em] text-muted-foreground uppercase">
                Days Hrs Mins
              </p>
            </div>

            <div className="absolute inset-x-5 bottom-5 space-y-3 rounded-sm border border-amber-700/40 bg-primary p-5">
              <p className="flex items-center gap-2 font-display text-[0.65rem] tracking-[0.14em] text-primary-foreground uppercase">
                <CalendarDays className="h-4 w-4 text-amber-500" /> Book your appointment now
              </p>
              <a
                href="#book"
                onClick={onClose}
                className="flex items-center justify-center gap-2 bg-amber-600 px-4 py-3 font-display text-[0.7rem] font-semibold tracking-[0.14em] uppercase transition-transform duration-300 hover:-translate-y-0.5"
              >
                Book A Consultation <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/917770012345"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 border border-amber-600/60 px-4 py-3 font-display text-[0.7rem] font-semibold tracking-[0.14em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" /> Chat On WhatsApp
              </a>
              <p className="flex items-center justify-center gap-2 border-t border-amber-600/30 pt-3 text-[0.65rem] tracking-[0.12em] text-primary-foreground/80 uppercase">
                <ShieldCheck className="h-4 w-4 text-amber-500" /> 100% safe &amp; hygienic studio
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Index() {
  const [filter, setFilter] = useState("All");
  const [offerOpen, setOfferOpen] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setOfferOpen(true), 10000);
    return () => window.clearTimeout(t);
  }, []);

  const visibleGallery =
    filter === "All" ? gallery : gallery.filter((g) => g.tag === filter);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SocialDock />
      {offerOpen && <OfferModal onClose={() => setOfferOpen(false)} />}
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
          <Logo />
          <nav className="hidden items-center gap-7 text-sm lg:flex">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="relative text-muted-foreground transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:text-foreground hover:after:w-full"
              >
                {label}
              </a>
            ))}
            <button
              onClick={() => setOfferOpen(true)}
              className="font-display text-xs font-semibold tracking-[0.14em] text-amber-700 uppercase transition-transform duration-300 hover:-translate-y-0.5"
            >
              Offer
            </button>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="tel:+917770012345"
              className="hidden items-center gap-2 text-sm font-medium sm:flex"
            >
              <Phone className="h-4 w-4" />
              +91 77700 12345
            </a>
            <a
              href="#book"
              className="rounded-sm bg-primary px-5 py-3 font-display text-xs font-semibold tracking-[0.14em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            <div className="flex items-center gap-3">
              <PenTool className="h-4 w-4 -rotate-45" />
              <p className="eyebrow">Ink Your Story</p>
            </div>
            <h1 className="mt-5 font-display text-5xl leading-[0.95] font-medium tracking-tight uppercase sm:text-6xl lg:text-7xl">
              Art you wear.
              <span className="mt-1 block font-extrabold">For life.</span>
            </h1>
            <p className="mt-6 max-w-md text-muted-foreground">
              Custom tattoos. Premium hygiene. Unmatched artistry.
              <br />
              We turn your ideas into timeless ink.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#book"
                className="inline-flex items-center gap-3 rounded-sm bg-primary px-7 py-4 font-display text-xs font-semibold tracking-[0.14em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
              >
                Book Consultation <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center gap-3 rounded-sm border border-primary px-7 py-4 font-display text-xs font-semibold tracking-[0.14em] uppercase transition-colors hover:bg-accent"
              >
                Explore Work
              </a>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {features.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-6 w-6" strokeWidth={1.4} />
                  <div>
                    <p className="font-display text-sm font-semibold">{title}</p>
                    <p className="text-xs text-muted-foreground">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <span className="pointer-events-none absolute -top-10 left-0 font-display text-[12rem] leading-none font-extrabold text-accent select-none">
              1
            </span>
            <img
              src={heroArm}
              alt="Black and grey realism statue tattoo on an upper arm"
              width={1024}
              height={1536}
              className="blend-image relative mx-auto max-h-[600px] w-full -scale-x-100 object-cover"
            />
          </div>
        </div>
      </section>

      {/* About + stats */}
      <section id="about" className="mx-auto max-w-7xl px-5 pb-16">
        <div className="grid gap-8 rounded-sm border border-border bg-card p-8 shadow-[var(--shadow-card)] lg:grid-cols-[1fr_2.4fr]">
          <div className="lg:border-r lg:border-border lg:pr-8">
            <p className="eyebrow">About Us</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Kryptonix Tattoo Studio is where creativity meets precision. Our
              artists specialise in custom designs that reflect your story and
              style.
            </p>
            <p className="mt-5 font-script text-2xl">Kryptonix Team</p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <Icon className="mx-auto h-7 w-7" strokeWidth={1.3} />
                <p className="mt-4 font-display text-3xl font-semibold">{value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-5 pb-16">
        <SectionHeading eyebrow="Our Services" title="Tattoo Styles We Specialize In" />
        <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {styles.map(({ img, name, text }) => (
            <article
              key={name}
              className="group media-hover rounded-sm border border-border bg-card shadow-[var(--shadow-card)]"
            >
              <img
                src={img}
                alt={`${name} tattoo example`}
                width={640}
                height={768}
                loading="lazy"
                className="h-44 w-full object-cover"
              />
              <div className="relative px-3 py-4 text-center">
                <h3 className="font-display text-xs font-semibold tracking-[0.12em] uppercase">
                  {name}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {text}
                </p>
                <span className="mx-auto mt-3 block h-px w-0 bg-primary transition-all duration-500 group-hover:w-10" />
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="#book"
            className="inline-flex rounded-sm bg-primary px-7 py-3.5 font-display text-xs font-semibold tracking-[0.14em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
          >
            View All Services
          </a>
        </div>
      </section>

      {/* Artist */}
      <section id="artist" className="relative mx-auto max-w-7xl overflow-hidden px-5 py-16">
        <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1fr]">
          {/* Left rail + portrait */}
          <div className="flex gap-6">
            <div className="hidden shrink-0 flex-col items-center gap-6 pt-2 lg:flex">
              <span className="font-display text-2xl font-bold tracking-tight text-[color:var(--color-brand-gold,theme(colors.amber.700))]">
                ✕
              </span>
              <span className="h-24 w-px bg-border" />
              <span
                className="eyebrow whitespace-nowrap"
                style={{ writingMode: "vertical-rl" }}
              >
                Kryptonix Tattoo Studio
              </span>
            </div>

            <div className="w-full">
              <div className="group relative overflow-hidden bg-primary shadow-[var(--shadow-card)]">
                <img
                  src={artistPhoto.url}
                  alt="Xing, founder and tattoo artist, arms crossed with full sleeve tattoos"
                  width={980}
                  height={1130}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute top-6 left-6 z-10 flex h-24 w-24 flex-col items-center justify-center rounded-full border border-amber-600/60 bg-black/60 text-center backdrop-blur transition-transform duration-500 group-hover:scale-110">
                  <span className="font-display text-2xl font-bold text-amber-500">
                    15+
                  </span>
                  <span className="text-[0.5rem] tracking-[0.2em] text-amber-200/80 uppercase">
                    Years
                    <br />
                    Of Craft
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pt-4">
            <p className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-amber-700" /> The Artist
            </p>
            <h3 className="mt-6 font-display text-4xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
              One hand behind
              <br />
              <span className="font-script text-5xl text-amber-700 sm:text-6xl">
                every
              </span>{" "}
              piece in this studio.
            </h3>
            <div className="mt-6 h-px w-full bg-border" />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              No handoffs, no rotating chairs — every consultation, every stencil
              and every session at Kryptonix is done by the same person. That's
              the whole model: fewer tattoos, more attention to each one.
            </p>

            <dl className="mt-8 divide-y divide-border border-y border-border text-sm">
              {[
                ["Studio Since", "2022"],
                ["Working Styles", "Black & grey, fine line, illustrative, colour"],
                ["Approach", "Custom design, appointment only"],
                ["Languages", "English, हिन्दी, ಕನ್ನಡ"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="grid gap-1 py-3 transition-colors hover:bg-accent sm:grid-cols-[180px_1fr]"
                >
                  <dt className="eyebrow">{label}</dt>
                  <dd className="text-muted-foreground">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap items-center gap-8">
              <div>
                <p className="font-script text-3xl">Kryptonix</p>
                <p className="eyebrow mt-1">Founder &amp; Artist</p>
              </div>
              <a
                href="#book"
                className="inline-flex items-center gap-3 rounded-sm bg-primary px-7 py-4 font-display text-xs font-semibold tracking-[0.14em] text-primary-foreground uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
              >
                Discuss Your Idea <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-7xl px-5 pb-16">
        <SectionHeading eyebrow="Our Work" title="Tattoo Gallery" />
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {galleryFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-sm px-4 py-2 text-xs font-medium transition-colors ${
                filter === f
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {visibleGallery.map(({ img, alt, tag }) => (
            <figure key={alt} className="group media-hover rounded-sm">
              <img
                src={img}
                alt={alt}
                width={640}
                height={768}
                loading="lazy"
                className="h-56 w-full object-cover"
              />
              <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/85 via-primary/20 to-transparent p-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="font-display text-[0.6rem] tracking-[0.16em] text-primary-foreground uppercase">
                  {tag}
                </span>
                <span className="mt-1 text-xs text-primary-foreground/80">{alt}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="#book"
            className="inline-flex items-center gap-3 rounded-sm border border-primary px-7 py-3.5 font-display text-xs font-semibold tracking-[0.14em] uppercase transition-colors hover:bg-accent"
          >
            View Full Gallery <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-7xl px-5 pb-16">
        <SectionHeading eyebrow="Client Love" title="What Our Clients Say" />
        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
          <div className="marquee-track gap-5">
            {[...reviews, ...reviews].map(({ quote, name }, i) => (
              <figure
                key={`${name}-${i}`}
                className="w-[300px] shrink-0 rounded-sm border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-soft)] sm:w-[360px]"
              >
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  “{quote}”
                </blockquote>
                <figcaption className="mt-5 font-display text-sm font-semibold">
                  — {name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="faq" className="mx-auto max-w-7xl px-5 pb-16">
        <SectionHeading eyebrow="Good To Know" title="Frequently Asked Questions" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {faqs.map(([q, a]) => (
            <div
              key={q}
              className="rounded-sm border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <p className="font-display text-sm font-semibold">{q}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="book" className="mx-auto max-w-7xl px-5 pb-16">
        <div className="grid overflow-hidden rounded-sm border border-border bg-card shadow-[var(--shadow-soft)] lg:grid-cols-[0.35fr_1fr]">
          <img
            src={ctaMachine}
            alt="Tattoo artist holding a tattoo machine"
            width={768}
            height={640}
            loading="lazy"
            className="h-full max-h-56 w-full object-cover"
          />
          <div className="flex flex-wrap items-center justify-between gap-6 p-8">
            <div>
              <p className="eyebrow">Ready To Get Inked?</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-wide uppercase">
                Book Your Consultation
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Let's bring your vision to life. Schedule your free consultation
                today!
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <a
                href="tel:+917770012345"
                className="inline-flex items-center gap-3 rounded-sm bg-primary px-7 py-4 font-display text-xs font-semibold tracking-[0.14em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
              >
                Book Now <ArrowRight className="h-4 w-4" />
              </a>
              <p className="text-xs text-muted-foreground">500+ designs inked</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <Logo />
            <p className="mt-4 text-xs text-muted-foreground">
              Custom tattoos. Premium hygiene. Unmatched artistry.
            </p>
            <div className="mt-5 flex gap-4 text-muted-foreground">
              <Instagram className="h-4 w-4" />
              <MessageCircle className="h-4 w-4" />
              <Youtube className="h-4 w-4" />
              <Mail className="h-4 w-4" />
            </div>
          </div>
          <div>
            <p className="eyebrow">Quick Links</p>
            <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="transition-colors hover:text-foreground">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Our Services</p>
            <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
              {[
                "Custom Tattoos",
                "Cover Up Tattoos",
                "Portrait Tattoos",
                "Minimalist Tattoos",
                "Geometric Tattoos",
                "Black & Grey Tattoos",
              ].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Contact Us</p>
            <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" /> +91 77700 12345
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" /> ink@kryptonix.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" /> Bangalore, India
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Working Hours</p>
            <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
              <li>Mon – Sat: 11:00 AM – 9:00 PM</li>
              <li>Sunday: 12:00 PM – 8:00 PM</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 border-t border-border px-5 py-5 text-xs text-muted-foreground">
          <p>© 2026 Kryptonix Tattoo Studio. All Rights Reserved.</p>
          <p className="flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
