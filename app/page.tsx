"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <a href="#about" className={styles.navLink}>about</a>
          <a href="#features" className={styles.navLink}>features</a>
          <a href="#contact" className={styles.navLink}>contact</a>
        </nav>
        <div className={styles.langSwitch}>
          <span>EN</span>
          <span style={{color: "rgba(255,255,255,0.3)"}}>FR</span>
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
            <h1 className={styles.heroTitle}>A New &rarr;<br/>Generation</h1>
            <p className={styles.heroSubtitle}>
              Automated QA that monitors every call, coaches every rep, and shows you exactly where revenue is won or lost.
              <br/><br/>
              <a href="#contact" className={styles.btnPrimary} style={{marginTop: "1rem"}}>
                Request Demo <ArrowRight size={16} />
              </a>
            </p>
          </div>
        </section>

        <section id="about" className={styles.about}>
          <div className={styles.aboutTop}>
            <span>(About Verbascore)</span>
            <span>Bridging the gap between spend &amp; revenue</span>
          </div>
          <p>
            We are excited to be the automation engine for modern sales teams. 
            We look forward to meeting your demands. Stay tuned for insights that 
            transform your missed calls into closed opportunities.
          </p>
        </section>



        <section className={styles.imageSection}>
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80"
            alt="Office landscape"
            fill
            className="object-cover"
          />
        </section>

        <section className={styles.marqueeSection}>
          QA — Coaching — Analytics — Integration
        </section>

        <section id="features" className={styles.infoGrid}>
          <div className={styles.infoCol}>
            <h2 className={styles.infoTitle}>How it works</h2>
            <ul className={styles.infoList}>
              <li>
                <span>01 Connect System</span>
                <span>Plug &amp; play</span>
              </li>
              <li>
                <span>02 Upload Scripts</span>
                <span>AI processing</span>
              </li>
              <li>
                <span>03 Get Real-Time QA</span>
                <span>Actionable reports</span>
              </li>
              <li>
                <span>04 Coach Reps</span>
                <span>Close more</span>
              </li>
            </ul>
          </div>
          <div className={styles.infoCol}>
            <h2 className={styles.infoTitle}>Core Features</h2>
            <ul className={styles.infoList}>
              <li>
                <span>Call Monitoring</span>
                <span>Automatic transcription</span>
              </li>
              <li>
                <span>Script Adherence</span>
                <span>Instant alerts</span>
              </li>
              <li>
                <span>Owner Dashboard</span>
                <span>High-level metrics</span>
              </li>
              <li>
                <span>ROI Tracking</span>
                <span>Attribution mapping</span>
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.twoColContent}>
          <div className={styles.contentImage}>
            <Image
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80"
              alt="Technology expansion"
              fill
              className="object-cover"
            />
          </div>
          <div className={styles.contentBlock}>
            <h3>Verbascore Is Actively Expanding Its Footprint Domestic And Internationally</h3>
            <p>
              In industries where every phone call is a potential sale, Verbascore ensures no opportunity slips through the cracks. We help you understand the full picture from ad click to closed deal.
              <br/><br/>
              <br/><br/>
              <a href="#contact" className={styles.btnPrimary}>
                Book a demo &rarr;
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>&copy; {new Date().getFullYear()} VERBASCORE</span>
        <span>ALL RIGHTS RESERVED.</span>
      </footer>
    </div>
  );
}