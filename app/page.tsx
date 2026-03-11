"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const content = {
  en: {
    nav: { about: "about", features: "features", contact: "contact" },
    hero: {
      title: <>A New &rarr;<br />Generation</>,
      subtitle: "Automated QA that monitors every call, coaches every rep, and shows you exactly where revenue is won or lost.",
    },
    about: {
      label1: "(About Verbascore)",
      label2: "Bridging the gap between spend & revenue",
      text: "We are an automated platform providing services for modern sales teams. We look forward to meeting your demands. Stay tuned for insights that transform your missed calls into closed opportunities.",
    },
    marquee: "QA — Coaching — Analytics",
    info: {
      title1: "How it works",
      list1: [
        ["01 Connect System", "Plug & play"],
        ["02 Upload Scripts", "AI processing"],
        ["03 Get Real-Time QA", "Actionable reports"],
        ["04 Coach Reps", "Close more"]
      ],
      title2: "Core Features",
      list2: [
        ["Call Monitoring", "Automatic transcription"],
        ["Script Adherence", "Instant alerts"],
        ["Owner Dashboard", "High-level metrics"],
        ["ROI Tracking", "Attribution mapping"]
      ],
    },
    footerSection: {
      title: "Verbascore Is Actively Expanding Its Footprint Domestic And Internationally",
      text: "In industries where every phone call is a potential sale, Verbascore ensures no opportunity slips through the cracks. We help you understand the full picture from ad click to closed deal.",
      link1: "LinkedIn \u2192",
      link2: "Instagram \u2192",
    },
    footer: "ALL RIGHTS RESERVED."
  },
  ro: {
    nav: { about: "despre", features: "funcționalități", contact: "contact" },
    hero: {
      title: <>O Nouă &rarr;<br />Generație</>,
      subtitle: "QA automatizat care monitorizează fiecare apel, antrenează fiecare reprezentant și îți arată exact unde câștigi sau pierzi venituri.",
    },
    about: {
      label1: "(Despre Verbascore)",
      label2: "Reducem decalajul dintre cheltuieli și venituri",
      text: "Suntem o platformă automatizată care oferă servicii pentru echipele moderne de vânzări. Așteptăm cu nerăbdare să răspundem cerințelor dumneavoastră. Urmăriți-ne pentru informații care transformă apelurile pierdute în oportunități închise.",
    },
    marquee: "QA — Antrenament — Analiză",
    info: {
      title1: "Cum funcționează",
      list1: [
        ["01 Conectează Sistemul", "Plug & play"],
        ["02 Încarcă Scripturile", "Procesare AI"],
        ["03 Obține QA în Timp Real", "Rapoarte acționabile"],
        ["04 Antrenează Reprezentanții", "Închide mai mult"]
      ],
      title2: "Funcționalități de Bază",
      list2: [
        ["Monitorizare Apeluri", "Transcriere automată"],
        ["Respectarea Scriptului", "Alerte instantanee"],
        ["Panou pentru Proprietari", "Valori la nivel înalt"],
        ["Urmărirea ROI", "Cartografierea atribuirii"]
      ],
    },
    footerSection: {
      title: "Verbascore Își Extinde Activ Prezența La Nivel Național Și Internațional",
      text: "În industriile unde fiecare apel telefonic este o potențială vânzare, Verbascore se asigură că nicio oportunitate nu se pierde. Te ajutăm să înțelegi întreaga imagine, de la clicul pe anunț până la încheierea tranzacției.",
      link1: "LinkedIn \u2192",
      link2: "Instagram \u2192",
    },
    footer: "TOATE DREPTURILE REZERVATE."
  }
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<"en" | "ro">("en");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const d = content[lang];

  return (
    <div className={styles.container}>
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
        <a href="#" className={styles.logoArea}>
          <svg className={styles.logoSvg} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 50 L40 10 L70 10 L50 50 Z" fill="#3b82f6" />
            <path d="M40 90 L60 50 L90 50 L70 90 Z" fill="#0ea5e9" />
            <path d="M10 70 L25 55 L45 55 L30 70 Z" fill="#0ea5e9" />
            <path d="M65 45 L80 30 L100 30 L85 45 Z" fill="#3b82f6" />
          </svg>
          VERBASCORE
        </a>
        <nav className={styles.nav}>
          <a href="#about" className={styles.navLink}>{d.nav.about}</a>
          <a href="#features" className={styles.navLink}>{d.nav.features}</a>
          <a href="#contact" className={styles.navLink}>{d.nav.contact}</a>
        </nav>
        <div className={styles.langSwitch}>
          <button
            onClick={() => setLang("en")}
            style={{ color: lang === "en" ? "#fff" : "rgba(255,255,255,0.3)", background: "transparent", border: "none", cursor: "pointer", fontSize: "0.875rem" }}
          >
            EN
          </button>
          <button
            onClick={() => setLang("ro")}
            style={{ color: lang === "ro" ? "#fff" : "rgba(255,255,255,0.3)", background: "transparent", border: "none", cursor: "pointer", fontSize: "0.875rem" }}
          >
            RO
          </button>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={styles.heroVideo}
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className={styles.heroGradient} />
          <div className={styles.heroContent}>
            <motion.h1
              className={styles.heroTitle}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
            >
              {d.hero.title}
            </motion.h1>
            <motion.p
              className={styles.heroSubtitle}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {d.hero.subtitle}
            </motion.p>
          </div>
        </section>

        <motion.section
          id="about"
          className={styles.about}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
        >
          <div className={styles.aboutTop}>
            <span>{d.about.label1}</span>
            <span>{d.about.label2}</span>
          </div>
          <p>{d.about.text}</p>
        </motion.section>

        <motion.section
          className={styles.imageSection}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className={styles.fogOverlay} />
          <Image
            src="/new-middle-image.png"
            alt="Office landscape"
            fill
            className="object-cover"
          />
        </motion.section>

        <section className={styles.marqueeSection}>
          {d.marquee}
        </section>

        <motion.section
          id="features"
          className={styles.infoGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className={styles.infoCol} variants={fadeUpVariant}>
            <h2 className={styles.infoTitle}>{d.info.title1}</h2>
            <ul className={styles.infoList}>
              {d.info.list1.map((item, i) => (
                <li key={i}>
                  <span>{item[0]}</span>
                  <span>{item[1]}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div className={styles.infoCol} variants={fadeUpVariant}>
            <h2 className={styles.infoTitle}>{d.info.title2}</h2>
            <ul className={styles.infoList}>
              {d.info.list2.map((item, i) => (
                <li key={i}>
                  <span>{item[0]}</span>
                  <span>{item[1]}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.section>

        <motion.section
          id="contact"
          className={styles.twoColContent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className={styles.contentImage} variants={fadeUpVariant}>
            <Image
              src="/background-image.png"
              alt="Technology expansion"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div className={styles.contentBlock} variants={fadeUpVariant}>
            <h3>{d.footerSection.title}</h3>
            <p>
              {d.footerSection.text}
              <br /><br />
              <br /><br />
              <span className={styles.socialLinks} style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <a href="https://www.linkedin.com/company/verbascore/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                  {d.footerSection.link1}
                </a>
                <a href="https://www.instagram.com/verbascore.app" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                  {d.footerSection.link2}
                </a>
              </span>
            </p>
          </motion.div>
        </motion.section>
      </main>

      <footer className={styles.footer}>
        <span>&copy; {new Date().getFullYear()} VERBASCORE</span>
        <span>{d.footer}</span>
      </footer>
    </div>
  );
}