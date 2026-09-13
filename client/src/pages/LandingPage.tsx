import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Cloud,
  Code2,
  Globe,
  Headphones,
  Landmark,
  Menu,
  RefreshCw,
  Server,
  Smartphone,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 1, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const sapServices = [
  {
    title: "SAP Core Banking",
    summary:
      "Lending, deposits, collateral, and payments on SAP and Fioneer — from implementation through optimization.",
    icon: Landmark,
    items: [
      "SAP Loans Management (CML)",
      "SAP Transactional Banking (TRBK)",
      "SAP Financial Products Subledger (FPSL)",
      "SAP Fioneer Cloud for Banking",
      "SAP Collateral Management (CMS)",
      "SAP S/4HANA Banking for Complex Loans",
      "SAP Payment Engine (FS-PE)",
    ],
  },
  {
    title: "SAP S/4HANA",
    summary:
      "ECC-to-S/4HANA moves and finance configuration so ledgers, treasury, and credit processes stay aligned.",
    icon: RefreshCw,
    items: [
      "ECC to S/4HANA transition",
      "Financial Accounting (FI)",
      "Contract and Lease Management (CLM / RE-FX)",
      "Treasury and Risk Management (TRM)",
      "Collections and Dispute Management",
      "Credit Management (CM)",
    ],
  },
  {
    title: "SAP Business Technology Platform",
    summary:
      "Integration, analytics, and cloud apps on BTP so SAP systems connect cleanly to the rest of the bank.",
    icon: Cloud,
    items: [
      "Cloud integration",
      "Analytics and reporting",
      "Application development",
      "Platform management",
    ],
  },
  {
    title: "SAP Omnichannel Banking",
    summary:
      "One customer journey across web, mobile, and branch instead of disconnected channel builds.",
    icon: Smartphone,
    items: [
      "Channel integration",
      "Customer journey design",
      "Digital banking",
      "Mobile solutions",
    ],
  },
  {
    title: "SAP Software Development",
    summary:
      "Custom applications, extensions, and APIs when standard SAP does not cover the process.",
    icon: Code2,
    items: [
      "Custom applications",
      "System extensions",
      "API development",
      "Technical architecture",
    ],
  },
];

const amsServices = [
  {
    title: "Help desk",
    summary: "Round-the-clock incident handling and user support for live SAP systems.",
    icon: Headphones,
  },
  {
    title: "Staff augmentation",
    summary: "Experienced SAP consultants who join your team for a project or an AMS roster.",
    icon: Users,
  },
  {
    title: "AMS service management",
    summary: "Maintenance, monitoring, and change control so the application keeps improving after go-live.",
    icon: Wrench,
  },
  {
    title: "Nearshore delivery",
    summary: "Cost-effective SAP work from nearshore teams in compatible time zones.",
    icon: Globe,
  },
  {
    title: "SAP Basis",
    summary: "System administration, performance, security, and infrastructure for the SAP landscape.",
    icon: Server,
  },
];

const stats = [
  { value: "20+", label: "Years delivering SAP" },
  { value: "Banking", label: "and financial services" },
  { value: "AMS", label: "support after go-live" },
];

const focusPoints = [
  "Core banking on SAP and Fioneer",
  "S/4HANA finance and treasury",
  "Help desk, Basis, and AMS",
];

export const LandingPage = (): JSX.Element => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollToSection = (sectionId: string) => {
    setMobileOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navItems = [
    { label: "About", sectionId: "about" },
    { label: "SAP Services", sectionId: "sap-services" },
    { label: "SAP AMS", sectionId: "sap-ams" },
  ];

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#303a7e] pt-[env(safe-area-inset-top)]">
        <div className="mx-auto flex h-16 min-w-0 max-w-6xl items-center justify-between gap-3 px-4 sm:h-[72px] sm:px-8">
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="flex min-w-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            aria-label="Raarv Inc home"
          >
            <img
              className="h-10 w-auto max-w-[7.5rem] min-w-0 object-contain object-left sm:h-14 sm:max-w-[10rem] md:h-16 md:max-w-[12rem]"
              alt="Raarv Inc"
              src="/figmaAssets/image-4.png"
            />
          </button>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                type="button"
                onClick={() => scrollToSection(item.sectionId)}
                className="text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="h-10 rounded-lg bg-white px-5 text-sm font-semibold text-[#303a7e] shadow-none hover:bg-blue-50"
            >
              Contact us
            </Button>
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white hover:bg-white/10 md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-white/10 md:hidden"
              aria-label="Mobile"
            >
              <div className="flex flex-col gap-1 px-4 py-4 sm:px-8">
                {navItems.map((item) => (
                  <button
                    key={item.sectionId}
                    type="button"
                    onClick={() => scrollToSection(item.sectionId)}
                    className="rounded-lg px-3 py-3 text-left text-base font-medium text-white hover:bg-white/10"
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="mt-2 h-11 rounded-lg bg-white text-sm font-semibold text-[#303a7e] hover:bg-blue-50"
                >
                  Contact us
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main className="min-w-0">
        <section
          id="about"
          className="relative scroll-mt-16 overflow-x-clip bg-gradient-to-b from-[#eef1f8] to-white sm:scroll-mt-[72px]"
        >
          <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 translate-x-1/3 -translate-y-1/4 rounded-full bg-[#303a7e]/10 blur-3xl sm:h-72 sm:w-72" />
          <div className="relative mx-auto grid max-w-6xl min-w-0 items-center gap-8 px-4 py-10 sm:gap-12 sm:px-8 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="flex min-w-0 flex-col gap-5 sm:gap-6"
            >
              <motion.p
                variants={fadeInUp}
                className="text-xs font-semibold uppercase tracking-[0.14em] text-[#303a7e] sm:text-sm sm:tracking-[0.18em]"
              >
                Boutique SAP consulting
              </motion.p>
              <motion.h1
                variants={fadeInUp}
                className="text-balance text-[1.85rem] font-bold leading-tight tracking-tight text-[#1a2148] sm:text-5xl lg:text-[56px] lg:leading-[1.1]"
              >
                SAP made simple.
                <br />
                Results made real.
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="max-w-xl text-pretty text-base leading-relaxed text-slate-700 sm:text-lg"
              >
                Raarv Inc is a boutique firm for SAP and Fioneer in financial
                services. We implement, extend, and support core banking,
                financials, and architecture for clients worldwide.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="h-12 w-full rounded-lg bg-[#303a7e] px-6 text-base font-semibold text-white shadow-none hover:bg-[#252d64] sm:w-auto"
                >
                  Contact us
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  onClick={() => scrollToSection("sap-services")}
                  variant="outline"
                  className="h-12 w-full rounded-lg border-[#303a7e]/25 bg-white px-6 text-base font-semibold text-[#303a7e] hover:bg-[#eef1f8] sm:w-auto"
                >
                  See our services
                </Button>
              </motion.div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="min-w-0 overflow-hidden rounded-2xl bg-[#303a7e] text-white shadow-xl shadow-[#303a7e]/25"
            >
              <div className="p-5 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70 sm:text-sm sm:tracking-[0.18em]">
                  Where we help
                </p>
                <h2 className="mt-3 text-balance text-xl font-semibold tracking-tight sm:text-[28px]">
                  SAP for banks and financial institutions
                </h2>
                <ul className="mt-6 space-y-4">
                  {focusPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-[15px] leading-relaxed text-white/90">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-1 divide-y divide-white/15 border-t border-white/15 bg-[#252d64] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {stats.map((stat) => (
                  <div key={stat.label} className="px-4 py-4 text-center sm:px-3 sm:py-5">
                    <p className="text-xl font-bold text-white sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm leading-snug text-white/75 sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.aside>
          </div>
        </section>

        <section
          id="sap-services"
          className="scroll-mt-16 bg-white py-12 sm:scroll-mt-[72px] sm:py-20"
        >
          <div className="mx-auto max-w-6xl min-w-0 px-4 sm:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="max-w-2xl min-w-0"
            >
              <motion.p
                variants={fadeInUp}
                className="text-xs font-semibold uppercase tracking-[0.14em] text-[#303a7e] sm:text-sm sm:tracking-[0.18em]"
              >
                What we implement
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="mt-3 text-2xl font-semibold tracking-tight text-[#1a2148] sm:text-4xl"
              >
                SAP services
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg"
              >
                Banking platforms, finance transformation, and custom SAP work —
                each described in plain language, with the modules we cover
                underneath.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="mt-10 grid gap-5 md:grid-cols-2"
            >
              {sapServices.slice(0, 2).map((service) => {
                const Icon = service.icon;
                return (
                  <motion.article
                    key={service.title}
                    variants={fadeInUp}
                    className="min-w-0 rounded-2xl border border-slate-200 bg-[#f7f8fc] p-5 transition-shadow hover:shadow-md sm:p-6"
                  >
                    <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#303a7e] text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-pretty text-lg font-semibold text-[#1a2148] sm:text-xl">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-[15px] leading-relaxed text-slate-700">
                          {service.summary}
                        </p>
                      </div>
                    </div>
                    <ul className="mt-5 space-y-2 border-t border-slate-200/80 pt-4">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 break-words text-sm leading-snug text-slate-700"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#303a7e]" />
                          <span className="min-w-0">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                );
              })}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="mt-5 grid gap-5 md:grid-cols-3"
            >
              {sapServices.slice(2).map((service) => {
                const Icon = service.icon;
                return (
                  <motion.article
                    key={service.title}
                    variants={fadeInUp}
                    className="min-w-0 rounded-2xl border border-slate-200 bg-[#f7f8fc] p-5 transition-shadow hover:shadow-md sm:p-6"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#303a7e] text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-pretty text-lg font-semibold text-[#1a2148]">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-slate-700">
                      {service.summary}
                    </p>
                    <ul className="mt-5 space-y-2 border-t border-slate-200/80 pt-4">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 break-words text-sm leading-snug text-slate-700"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#303a7e]" />
                          <span className="min-w-0">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section
          id="sap-ams"
          className="scroll-mt-16 bg-[#eef1f8] py-12 sm:scroll-mt-[72px] sm:py-20"
        >
          <div className="mx-auto max-w-6xl min-w-0 px-4 sm:px-8">
            <div className="grid min-w-0 items-start gap-10 lg:grid-cols-[1fr_0.85fr]">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={stagger}
                className="min-w-0"
              >
                <motion.p
                  variants={fadeInUp}
                  className="text-xs font-semibold uppercase tracking-[0.14em] text-[#303a7e] sm:text-sm sm:tracking-[0.18em]"
                >
                  After go-live
                </motion.p>
                <motion.h2
                  variants={fadeInUp}
                  className="mt-3 text-2xl font-semibold tracking-tight text-[#1a2148] sm:text-4xl"
                >
                  SAP application management
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  className="mt-4 max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg"
                >
                  We keep production SAP stable and staffed: help desk, Basis,
                  and extra specialists when your internal team needs capacity.
                </motion.p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {amsServices.map((service) => {
                    const Icon = service.icon;
                    return (
                      <motion.article
                        key={service.title}
                        variants={fadeInUp}
                        className="min-w-0 rounded-xl border border-[#303a7e]/10 bg-white p-5"
                      >
                        <Icon
                          className="h-5 w-5 text-[#303a7e]"
                          aria-hidden="true"
                        />
                        <h3 className="mt-3 text-base font-semibold text-[#1a2148]">
                          {service.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                          {service.summary}
                        </p>
                      </motion.article>
                    );
                  })}
                </div>
              </motion.div>

              <motion.img
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="hidden w-full min-w-0 rounded-2xl object-cover shadow-lg shadow-[#303a7e]/10 lg:sticky lg:top-28 lg:block"
                alt="SAP support and application management"
                src="/figmaAssets/image-6.png"
              />
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-16 bg-[#303a7e] py-12 sm:scroll-mt-[72px] sm:py-20"
        >
          <div className="mx-auto grid max-w-6xl min-w-0 gap-8 px-4 sm:gap-10 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70 sm:text-sm sm:tracking-[0.18em]">
                Next step
              </p>
              <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                Talk with us about your SAP landscape
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                Implementations, S/4HANA moves, or ongoing AMS — email or call
                and we will follow up with next steps.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button
                asChild
                className="h-12 w-full rounded-lg bg-white px-8 text-base font-semibold text-[#303a7e] shadow-none hover:bg-blue-50 sm:h-14 sm:w-auto sm:text-lg"
              >
                <a href="mailto:vasu@raarv.ca" aria-label="Email Raarv Inc">
                  Email
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 w-full rounded-lg border-white/30 bg-white/10 px-8 text-base font-semibold text-white hover:bg-white/15 hover:text-white sm:h-14 sm:w-auto sm:text-lg"
              >
                <a href="tel:+14165778708" aria-label="Call Raarv Inc">
                  Phone
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#252d64] py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-xs leading-relaxed text-white/70 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:text-sm">
          <p className="break-words">
            © {new Date().getFullYear()} Raarv Inc. (1001162638 ONTARIO INC).
            Consulting revamped.
          </p>
          <p>SAP consulting for financial services</p>
        </div>
      </footer>
    </div>
  );
};
