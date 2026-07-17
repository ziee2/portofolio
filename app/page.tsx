'use client';

import { useEffect, useMemo, useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { dict, commonData, type ProjectItem, type ProjectTrack, type CertificateItem } from './content';

import portraitImage from '../assets/fotooo.png';
import projectDashboardImage from '../assets/project/Dashboard Owner.jpg';
import flyPaperImage from '../assets/project/file_2024-06-01_04.49.33.png';
import chickenScanImage from '../assets/project/file_2024-06-01_04.50.40.png';
import logoUnej from '../assets/Logo-UNEJ-2020.png';
import ukmLaosImage from '../assets/ukmlaos.jpg';

import cert01 from '../assets/sertifikat/Coursera SIIEEXK95VJ1_page-0001.jpg';
import cert02 from '../assets/sertifikat/Coursera UZJXQ81I09FB_page-0001.jpg';
import cert03 from '../assets/sertifikat/Coursera V8PPR7G6J6L7_page-0001.jpg';
import cert04 from '../assets/sertifikat/Coursera L5GWHY2S65F3_page-0001.jpg';
import cert05 from '../assets/sertifikat/Coursera NIBUU6LLFMPP_page-0001.jpg';
import cert06 from '../assets/sertifikat/Coursera Y5GPPKOQ0Z1V_page-0001.jpg';
import cert07 from '../assets/sertifikat/sertifikat_course_184_2958460_250624122158_page-0001.jpg';
import cert08 from '../assets/sertifikat/sertifikat_course_555_2958460_051024142545_page-0001.jpg';

const heroNotes = [
  'AI Engineer',
  'Machine Learning Engineer',
  'Data Scientist',
];

const projectTracks = ['Semua', 'AI Engineer', 'Data', 'Software Development', 'Game Development'] as const;

const socialLinks = [
  { label: 'fariedfarizi24@gmail.com', href: 'mailto:fariedfarizi24@gmail.com' },
  { label: 'WhatsApp', href: 'https://wa.me/+6285236487807' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/moh-faried-al-farizi-0237b128b/' },
  { label: 'GitHub', href: 'https://github.com/ziee2' },
];



export type ExperienceItem = {
  period: string;
  title: string;
  org: string;
  image: StaticImageData | StaticImageData[];
  focus: string;
  impact: string;
  summary: string;
  tools: string[];
  highlights: string[];
  demoUrl?: string;
  repoUrl?: string;
};



const certificates = commonData.certificates;

const sectionFade = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const [titleIndex, setTitleIndex] = useState(0);
  const [typedTitle, setTypedTitle] = useState('');
  const [activeProjectTrack, setActiveProjectTrack] = useState<ProjectTrack>('Semua');
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState<'id' | 'en'>('en');

  const t = dict[language];
  const projects = t.sections.projects.items;
  const experience = (t.sections.experience.items as unknown) as ExperienceItem[];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) {
      setTypedTitle(heroNotes[0]);
      return;
    }

    const currentTitle = heroNotes[titleIndex];
    let cursor = 0;
    setTypedTitle('');

    const timer = window.setInterval(() => {
      cursor += 1;
      setTypedTitle(currentTitle.slice(0, cursor));

      if (cursor >= currentTitle.length) {
        window.clearInterval(timer);
        window.setTimeout(() => setTitleIndex((prev) => (prev + 1) % heroNotes.length), 1400);
      }
    }, 65);

    return () => window.clearInterval(timer);
  }, [shouldReduceMotion, titleIndex]);

  const skillChips = useMemo(
    () => ['Research-driven', 'Deployment-ready', 'Data-informed', 'Project-led', 'AI-focused'],
    [],
  );

  const filteredProjects = useMemo(() => {
    if (activeProjectTrack === 'Semua' || activeProjectTrack === 'All') {
      return projects;
    }

    const filtered = projects.filter((project: ProjectItem) => project?.tracks?.includes(activeProjectTrack));
    return filtered.length > 0 ? filtered : projects;
  }, [activeProjectTrack, projects]);

  const sortedProjects = useMemo(
    () => [...filteredProjects].sort((a, b) => Number(b.featured) - Number(a.featured)),
    [filteredProjects],
  );

  const leadProject = sortedProjects[0];
  const sideProjects = sortedProjects.slice(1, 3);
  const extraProjects = sortedProjects.slice(3);

  useEffect(() => {
    if (!selectedProject && !selectedExperience && !selectedCertificate && !selectedImage) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
        setSelectedExperience(null);
        setSelectedCertificate(null);
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', onEsc);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onEsc);
    };
  }, [selectedProject, selectedExperience, selectedCertificate, selectedImage]);

  return (
    <main className="relative min-h-screen bg-[#f7f4ef] text-ink selection:bg-cyan-100 selection:text-cyan-900">
      {/* Global Premium Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.08),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.04),transparent_40%),linear-gradient(135deg,rgba(255,255,255,0.9),rgba(247,244,239,1))]" />
        <div className="absolute inset-0 opacity-[0.25] [background-image:linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-300/15 blur-[120px]" />
        <div className="absolute top-[40%] right-[-5%] w-[40%] h-[40%] rounded-full bg-sky-300/10 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[10%] w-[30%] h-[30%] rounded-full bg-teal-300/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <nav className="fixed left-1/2 top-4 z-40 flex w-[95%] max-w-5xl -translate-x-1/2 items-center justify-between rounded-full border border-slate-200/60 bg-white/80 px-4 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-xl transition-all duration-300 md:top-5 md:px-6 md:py-3">
          <div>
            <p className="text-sm font-semibold tracking-tight text-ink">Moh. Faried Al Farizi</p>
            <p className="hidden text-[10px] font-medium text-slate-500 md:block">AI Engineer · Data Scientist · Computer Vision</p>
          </div>

          <div className="flex items-center gap-3 md:gap-5">
            <div className="hidden items-center gap-1 md:flex">
              {dict[language].nav.map((item: any) => (
                <a key={item.id} href={`#${item.id}`} className="rounded-full px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-ink">
                  {item.label}
                </a>
              ))}
            </div>

            <div className="relative flex items-center gap-1 rounded-full bg-slate-100/80 p-1 border border-slate-200/50">
              <div className={`absolute top-1 bottom-1 w-[38px] rounded-full bg-white shadow-sm transition-transform duration-300 ease-out ${language === 'en' ? 'translate-x-0' : 'translate-x-[42px]'}`} />
              <button onClick={() => setLanguage('en')} className={`relative w-[38px] rounded-full py-1.5 text-[10px] font-bold transition-colors z-10 ${language === 'en' ? 'text-ink' : 'text-slate-500 hover:text-ink'}`}>
                EN
              </button>
              <button onClick={() => setLanguage('id')} className={`relative w-[38px] rounded-full py-1.5 text-[10px] font-bold transition-colors z-10 ${language === 'id' ? 'text-ink' : 'text-slate-500 hover:text-ink'}`}>
                ID
              </button>
            </div>
          </div>
        </nav>

        <AnimatePresence mode="wait">
          <motion.div
            key={language}
            initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <section className="relative px-6 pb-8 md:px-10 lg:px-16">
              <div className="mx-auto grid max-w-7xl gap-10 pb-10 pt-28 lg:grid-cols-[1fr_0.88fr] lg:items-center lg:pb-16 lg:pt-36">
                <motion.div variants={sectionFade} initial="hidden" animate="show" custom={0} className="max-w-3xl">
                  <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                    {t.hero.badge}
                  </span>
                  <h1 className="mt-6 font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl xl:text-7xl">
                    <span className="text-4xl md:text-[2rem] leading-tight block">{t.hero.title}</span>
                  </h1>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-muted md:text-base">
                    {t.hero.desc}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {skillChips.map((chip) => (
                      <span key={chip} className="rounded-full border border-white/80 bg-white/80 px-3 py-1 text-xs font-medium text-muted shadow-sm">
                        {chip}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href="#projects" className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(15,23,42,0.18)]">
                      {t.hero.exploreBtn}
                    </a>
                    <a href="#certificates" className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                      {t.hero.proofBtn}
                    </a>
                    <a href="/cv/CV_Moh. Faried Al Farizi.pdf" download target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)] flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                      {language === 'id' ? 'Unduh CV' : 'Download CV'}
                    </a>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {socialLinks.map((link) => (
                      <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm text-muted shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-200 hover:text-ink">
                        {link.label === 'fariedfarizi24@gmail.com' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>}
                        {link.label === 'WhatsApp' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>}
                        {link.label === 'LinkedIn' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>}
                        {link.label === 'GitHub' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>}
                        {link.label}
                      </a>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <div className="absolute -left-8 top-8 h-28 w-28 rounded-full bg-cyan-300/10 blur-3xl" />
                  <div className="absolute -right-10 bottom-10 h-36 w-36 rounded-full bg-sky-300/10 blur-3xl" />
                  <div className="rounded-[1.4rem] border border-white/80 bg-white/80 p-2.5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl">
                    <div className="relative overflow-hidden rounded-[1.2rem] border border-white bg-white shadow-sm">
                      <div className="relative bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.1),transparent_70%),linear-gradient(to_bottom,rgba(248,250,252,1),rgba(226,232,240,0.3))]">
                        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
                          <Image
                            src={portraitImage}
                            alt="Moh. Faried Al Farizi portrait"
                            width={900}
                            height={1100}
                            className="h-[300px] w-full object-contain object-bottom p-1 md:h-[400px]"
                            priority
                          />
                        </motion.div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/40 bg-white/70 p-3 backdrop-blur-md shadow-sm">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent">{t.hero.profileSnapshot}</p>
                            <h2 className="mt-1 text-xs font-semibold text-ink md:text-sm">{t.hero.profileSubtitle}</h2>
                          </div>
                          <div className="rounded-full bg-ink px-2.5 py-1 text-[10px] font-semibold text-white">2026</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-4 md:px-10 lg:px-16">
              <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                {t.hero.stats.map((stat, index) => (
                  <motion.div key={stat.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.55, delay: index * 0.05 }} className="rounded-[1rem] border border-cyan-100 bg-gradient-to-br from-white via-[#fcfeff] to-cyan-50 p-4 shadow-sm">
                    <p className="text-xl font-bold text-ink md:text-2xl">{stat.value}</p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted md:text-xs">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
              <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-4">
                {t.valueProps.map((text, index) => (
                  <motion.div key={text} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.45, delay: index * 0.05 }} className="rounded-[1.2rem] border border-white/80 bg-white/80 p-3.5 shadow-sm backdrop-blur-xl">
                    <p className="text-[11px] leading-5 text-muted md:text-xs md:leading-6">{text}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <Section id="about" title={t.sections.about.title} copy={t.sections.about.copy}>
              <div className="mx-auto max-w-4xl">
                <Card className="relative overflow-hidden p-6 sm:p-10 border border-slate-200 bg-white shadow-soft">
                  <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-cyan-100/40 blur-3xl" />
                  <div className="relative z-10 flex flex-col md:flex-row md:items-start md:gap-8">
                    <div className="mb-6 flex shrink-0 items-center justify-center md:mb-0">
                      <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-slate-100 bg-white p-3 shadow-sm md:h-32 md:w-32">
                        <Image src={logoUnej} alt="University Logo" width={300} height={300} className="h-full w-full object-contain" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-accent">{language === 'en' ? 'Background' : 'Latar Belakang'}</p>
                          <h3 className="mt-2 text-xl font-bold text-ink md:text-2xl">{language === 'en' ? 'University of Jember' : 'Universitas Jember'}</h3>
                          <p className="mt-1 text-sm font-semibold text-slate-600 md:text-base">{language === 'en' ? 'Informatics (Computer Science)' : 'Informatika'}</p>
                        </div>
                        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 shadow-sm">
                          <span className="h-2 w-2 rounded-full bg-emerald-400" />
                          <span className="text-[11px] font-bold text-slate-600 md:text-xs">{language === 'en' ? 'Aug 2022 - Jan 2026' : 'Agt 2022 - Jan 2026'}</span>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-wrap items-center gap-4 border-y border-slate-100 py-4">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{language === 'en' ? 'Degree' : 'Gelar'}</span>
                          <span className="mt-0.5 text-sm font-semibold text-slate-700">{t.sections.about.bgDegree}</span>
                        </div>
                        <div className="hidden h-8 w-px bg-slate-200 md:block" />
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{language === 'en' ? 'GPA' : 'IPK'}</span>
                          <span className="mt-0.5 text-sm font-semibold text-cyan-600">{t.sections.about.bgGpa}</span>
                        </div>
                      </div>
                      <p className="mt-4 text-[13px] leading-relaxed text-slate-600 md:text-sm">
                        {language === 'en'
                          ? 'Thesis: Performance comparison of ResNet50V2, EfficientNetB4, and DenseNet201 in Mask R-CNN for rust disease segmentation in apple leaves.'
                          : 'Skripsi: Perbandingan performa ResNet50V2, EfficientNetB4, dan DenseNet201 pada Mask R-CNN untuk segmentasi penyakit karat daun apel.'}
                      </p>
                      <div className="mt-6 rounded-2xl border border-cyan-100/50 bg-cyan-50/30 p-5 backdrop-blur-sm">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-700">{language === 'en' ? 'Achievements' : 'Pencapaian'}</h4>
                        <ul className="mt-3 space-y-2 text-[13px] leading-relaxed text-slate-600">
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                            <span>{language === 'en' ? 'Finalist of the Student Digital Innovation Competition (LIDM)' : 'Finalis Lomba Inovasi Digital Mahasiswa (LIDM)'}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                            <div className="flex flex-col gap-2.5">
                              <span>{language === 'en' ? '3rd place in Laos development by UKM Linux and Open Source' : 'Juara 3 Laos Development oleh UKM Linux dan Open Source'}</span>
                              <button type="button" onClick={() => setSelectedImage(ukmLaosImage)} className="text-left w-max">
                                <Image src={ukmLaosImage} alt="UKM Laos Achievement" width={400} height={300} className="h-auto w-36 rounded-lg border border-slate-200/60 shadow-sm object-cover transition-transform hover:scale-105" />
                              </button>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </Section>

            <Section id="experience" title={t.sections.experience.title} copy={t.sections.experience.copy}>
              <div className="relative md:pl-24">
                <div className="absolute left-[23px] top-10 hidden h-[calc(100%-1rem)] w-[2px] bg-gradient-to-b from-cyan-300/30 via-slate-300 to-cyan-300/30 md:block" />
                <div className="space-y-6">
                  {experience.map((item, index) => (
                    <motion.article key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.06 }} className="relative md:pl-0">
                      <span className="absolute left-[-81px] top-16 hidden h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm z-10 md:flex">
                        <span className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.9)]" />
                      </span>
                      <div className="absolute left-[-120px] top-[6.25rem] hidden w-[100px] justify-center z-10 md:flex">
                        <span className="rounded-full border border-slate-200 bg-white/90 px-2.5 py-1 text-center text-[9px] font-bold uppercase tracking-wider text-slate-500 shadow-sm backdrop-blur-sm">{item.period}</span>
                      </div>

                      <div className="group grid gap-4 md:gap-6 rounded-[1.5rem] border border-slate-200/80 bg-white/60 p-3.5 md:p-5 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-md lg:grid-cols-[1.1fr_0.9fr]">
                        <div className="relative order-1 lg:order-2 rounded-[1.25rem] border border-slate-100/50 bg-[#f7f4ef]/40 p-2 md:p-2.5 shadow-inner transition-colors group-hover:bg-[#f7f4ef]/80">
                          <div className="relative h-40 w-full overflow-hidden rounded-[0.85rem] md:h-full md:min-h-[13rem]">
                            <Image src={Array.isArray(item.image) ? item.image[0] : item.image} alt={item.title} fill className="object-contain bg-slate-50 object-center transition duration-700 ease-out group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent opacity-60" />
                          </div>
                        </div>
                        <div className="order-2 lg:order-1 flex flex-col justify-center px-1 py-1 md:py-2">
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">{item.org}</p>
                          <h3 className="mt-2 text-sm font-semibold text-ink md:text-base">{item.title}</h3>

                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {item.tools.map((tool) => (
                              <span key={tool} className="rounded-full border border-slate-200 bg-[#fbfaf7] px-2 py-0.5 text-[10px] font-medium text-muted">
                                {tool}
                              </span>
                            ))}
                          </div>

                          <p className="mt-2 rounded-lg bg-[#f8fafc] px-3 py-2 text-[11px] font-medium leading-5 text-slate-600">{item.focus}</p>
                          <p className="mt-2.5 text-[11px] leading-5 text-muted md:text-xs md:leading-6">{item.summary}</p>

                          <button type="button" onClick={() => { setSelectedExperience(item); setCurrentImageIndex(0); }} className="mt-2 text-[10px] font-semibold text-ink transition hover:text-accent">
                            {t.sections.projects.seeDetail}
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </Section>

            <Section id="projects" title={t.sections.projects.title} copy={t.sections.projects.copy}>
              <div className="flex flex-wrap items-center gap-2">
                {t.sections.projects.tracks.map((track) => (
                  <motion.button
                    key={track}
                    type="button"
                    onClick={() => {
                      setActiveProjectTrack(track);
                      setShowMoreProjects(false);
                    }}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition md:text-sm ${(activeProjectTrack === track || (track === t.sections.projects.tracks[0] && (activeProjectTrack === 'Semua' || activeProjectTrack === 'All'))) ? 'border-ink bg-ink text-white' : 'border-slate-200 bg-white text-muted hover:border-cyan-200 hover:text-ink'}`}
                  >
                    {track}
                  </motion.button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProjectTrack}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-5 space-y-4"
                >
                  {leadProject ? (
                    <div className="grid gap-3 lg:grid-cols-[1.18fr_0.82fr]">
                      <motion.article whileHover={{ y: -4 }} className="group overflow-hidden rounded-[1.45rem] border border-slate-200 bg-white shadow-soft transition">
                        <div className="relative overflow-hidden">
                          <Image src={Array.isArray(leadProject.image) ? leadProject.image[0] : leadProject.image} alt={leadProject.title} width={1600} height={1000} className="h-44 w-full object-contain bg-slate-50 object-center transition duration-500 group-hover:scale-105 md:h-56" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
                          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold text-ink">{leadProject.period}</div>
                          <div className="absolute right-4 top-4 rounded-full bg-black/75 px-3 py-1 text-[10px] font-semibold text-white">{leadProject.tracks[0]}</div>
                        </div>
                        <div className="p-4 md:p-5">
                          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent">{leadProject.category}</p>
                          <h3 className="mt-1.5 text-base font-bold text-ink md:text-xl">{leadProject.title}</h3>
                          <div className="mt-2.5 flex flex-wrap gap-1.5">
                            {leadProject.stack.map((tool: string) => (
                              <span key={tool} className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[9px] font-medium text-slate-600 md:text-[10px]">
                                {tool}
                              </span>
                            ))}
                          </div>
                          <p className="mt-3 rounded-lg border border-slate-100 bg-slate-50/50 p-3 text-[11px] font-medium leading-relaxed text-slate-700 md:text-xs">{leadProject.outcome}</p>
                          <p className="mt-3 text-[11px] leading-relaxed text-slate-500 md:text-xs md:leading-relaxed">{leadProject.summary}</p>
                          <div className="mt-5 flex flex-wrap items-center gap-2 pt-4 border-t border-slate-100">
                            <button type="button" onClick={() => { setSelectedProject(leadProject); setCurrentImageIndex(0); }} className="group flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[11px] font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800">
                              {t.sections.projects.detail} <span>→</span>
                            </button>
                            {leadProject.repoUrl && leadProject.repoUrl !== '' && (
                              <a href={leadProject.repoUrl} target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-ink">
                                {leadProject.repoLabel || 'GitHub'}
                              </a>
                            )}
                            {leadProject.demoUrl ? (
                              <a href={leadProject.demoUrl} target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-ink">
                                {leadProject.demoLabel || 'Demo'}
                              </a>
                            ) : null}
                          </div>
                        </div>
                      </motion.article>
                      <div className="grid gap-3 content-start">
                        {sideProjects.map((project) => (
                          <motion.article key={project.title} whileHover={{ y: -3 }} className="group overflow-hidden rounded-[1.2rem] border border-slate-200 bg-white shadow-sm transition">
                            <div className="relative overflow-hidden">
                              <Image src={Array.isArray(project.image) ? project.image[0] : project.image} alt={project.title} width={1200} height={800} className="h-28 w-full object-contain bg-slate-50 object-center transition duration-500 group-hover:scale-105" />
                              <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-semibold text-ink">{project.period}</div>
                            </div>
                            <div className="p-3.5">
                              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">{project.category}</p>
                              <h4 className="mt-1.5 text-sm font-semibold text-ink">{project.title}</h4>
                              <p className="mt-1.5 text-[11px] leading-5 text-muted">{project.outcome}</p>
                              <div className="mt-3 flex flex-wrap items-center gap-2">
                                <button type="button" onClick={() => { setSelectedProject(project); setCurrentImageIndex(0); }} className="rounded-full bg-ink px-3 py-1.5 text-[10px] font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800">
                                  {t.sections.projects.detail}
                                </button>
                                {project.repoUrl && project.repoUrl !== '' && (
                                  <a href={project.repoUrl} target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-semibold text-slate-600 transition hover:-translate-y-0.5 hover:bg-slate-50 hover:text-ink">
                                    {project.repoLabel || 'GitHub'}
                                  </a>
                                )}
                                {project.demoUrl ? (
                                  <a href={project.demoUrl} target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-semibold text-slate-600 transition hover:-translate-y-0.5 hover:bg-slate-50 hover:text-ink">
                                    {project.demoLabel || 'Demo'}
                                  </a>
                                ) : null}
                              </div>
                            </div>
                          </motion.article>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs leading-5 text-muted md:text-sm">
                      {t.sections.projects.showingParams(filteredProjects.length, activeProjectTrack)}
                    </p>
                    {extraProjects.length > 0 ? (
                      <motion.button
                        type="button"
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setShowMoreProjects((prev) => !prev)}
                        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-ink transition hover:border-cyan-200 hover:text-accent md:text-sm"
                      >
                        {showMoreProjects ? t.sections.projects.hideMore : t.sections.projects.showMore}
                      </motion.button>
                    ) : null}
                  </div>

                  {showMoreProjects && extraProjects.length > 0 ? (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {extraProjects.map((project, index) => (
                        <motion.article key={project.title} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col h-full overflow-hidden rounded-[1.15rem] border border-slate-200 bg-white shadow-sm">
                          <Image src={Array.isArray(project.image) ? project.image[0] : project.image} alt={project.title} width={1200} height={800} className="w-full object-contain bg-slate-50 h-36" />
                          <div className="p-3.5 flex flex-col flex-1">
                            <div className="flex items-start justify-between gap-2">
                              <h4 className="text-xs font-semibold text-ink md:text-sm line-clamp-2">{project.title}</h4>
                              <span className="shrink-0 rounded-full bg-ink/5 px-2 py-0.5 text-[10px] font-semibold text-muted">{project.category}</span>
                            </div>
                            <p className="mt-1 text-[10px] leading-5 text-muted md:text-[11px] md:leading-5 line-clamp-3">{project.summary}</p>
                            <div className="mt-auto pt-3 flex flex-wrap items-center gap-2">
                              <button type="button" onClick={() => { setSelectedProject(project); setCurrentImageIndex(0); }} className="rounded-full bg-ink px-3 py-1.5 text-[10px] font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800">
                                {t.sections.projects.seeDetail}
                              </button>
                              {project.repoUrl && project.repoUrl !== '' && (
                                <a href={project.repoUrl} target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-semibold text-slate-600 transition hover:-translate-y-0.5 hover:bg-slate-50 hover:text-ink">
                                  {project.repoLabel || 'GitHub'}
                                </a>
                              )}
                              {project.demoUrl ? (
                                <a href={project.demoUrl} target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-semibold text-slate-600 transition hover:-translate-y-0.5 hover:bg-slate-50 hover:text-ink">
                                  {project.demoLabel || 'Demo'}
                                </a>
                              ) : null}
                            </div>
                          </div>
                        </motion.article>
                      ))}
                    </div>
                  ) : null}
                </motion.div>
              </AnimatePresence>
            </Section>

            <Section id="skills" title={t.sections.skills.title} copy={t.sections.skills.copy}>
              <div className="grid gap-3 lg:grid-cols-3">
                {t.sections.skills.groups.map((group: { title: string, items: string[] }, index: number) => (
                  <motion.article key={group.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.06 }} className="relative overflow-hidden rounded-[1.25rem] border border-white/60 bg-white/40 p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl">
                    <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-200/40 blur-2xl" />
                    <h3 className="relative z-10 text-sm font-bold tracking-wide text-cyan-900 md:text-base">{group.title}</h3>
                    <div className="relative z-10 mt-3 flex flex-wrap gap-2">
                      {group.items.map((item, idx) => (
                        <span key={`${item}-${idx}`} className="rounded-xl border border-cyan-100 bg-white/70 px-3 py-1.5 text-xs font-semibold text-cyan-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:text-[13px]">
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                ))}
              </div>
              <div className="mt-6 w-full overflow-hidden relative py-2">
                {/* Gradient Masks for fading edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

                {/* Marquee Track */}
                <div className="flex w-max animate-marquee gap-3 md:gap-4 items-center hover:[animation-play-state:paused]">
                  {[...Array(4)].flatMap(() => [
                    { name: 'Unity', icon: <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg> },
                    { name: 'Canva', icon: <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg> },
                    { name: 'Enterprise Architect', icon: <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg> },
                    { name: 'Visual Studio Code', icon: <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg> },
                    { name: 'GitHub', icon: <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> }
                  ]).map((tool, index) => (
                    <div key={`${tool.name}-${index}`} className="flex items-center justify-center gap-2 rounded-[1rem] border border-slate-200/60 bg-white/50 px-5 py-2.5 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur-md transition hover:border-cyan-200 hover:bg-white hover:text-cyan-800 md:text-[13px] whitespace-nowrap">
                      <span className="text-cyan-700/80">{tool.icon}</span>
                      {tool.name}
                    </div>
                  ))}
                </div>
              </div>
            </Section>

            <Section id="certificates" title={t.sections.certificates.title} copy={t.sections.certificates.copy}>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {certificates.map((certificate, index) => (
                  <motion.article key={certificate.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.04 }} className="h-full">
                    <button onClick={() => setSelectedCertificate(certificate)} className="w-full h-full flex flex-col overflow-hidden rounded-[1.25rem] border border-slate-200/80 bg-white/60 p-2 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:shadow-md hover:border-cyan-200 text-left group">
                      <div className="w-full bg-[#f7f4ef]/50 rounded-[0.85rem] p-3 transition-colors group-hover:bg-[#f7f4ef]">
                        <Image src={certificate.image} alt={certificate.title} width={1200} height={900} className="h-36 w-full rounded-md object-contain mix-blend-multiply" />
                      </div>
                      <div className="px-3 pb-2 pt-4 flex flex-1 flex-col gap-1 w-full">
                        <h4 className="text-[13px] font-bold leading-tight text-ink md:text-sm line-clamp-2">{certificate.title}</h4>
                        <p className="mt-auto pt-1 text-[11px] font-medium uppercase tracking-wider text-slate-500">{certificate.issuer}</p>
                      </div>
                    </button>
                  </motion.article>
                ))}
              </div>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center">
                <p className="text-[13px] font-medium text-slate-500">
                  {language === 'en' ? 'Not all certificates are included here.' : 'Semua sertifikat belum dimasukkan ke sini.'}
                </p>
                <a href="https://www.linkedin.com/in/mohfariedalfarizi/details/certifications/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-[#0077b5] hover:text-[#0077b5] hover:shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  {language === 'en' ? 'View more on LinkedIn' : 'Lihat lebih banyak di LinkedIn'}
                </a>
              </div>
            </Section>

            <section className="mx-auto max-w-7xl px-6 pb-10 md:px-10 lg:px-16 lg:pb-16">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.55 }} className="rounded-[1.15rem] bg-ink px-4 py-5 text-white shadow-soft md:px-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">{t.sections.closing.note}</p>
                <h2 className="mt-2 text-base font-semibold md:text-xl italic">{t.sections.closing.title}</h2>
                <p className="mt-2 max-w-3xl text-[11px] leading-5 text-white/80 md:text-sm md:leading-6">
                  {t.sections.closing.desc}
                </p>
                <div className="mt-5 flex gap-3">
                  <a href="mailto:fariedfarizi24@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-cyan-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    {language === 'en' ? 'Email Me' : 'Kirim Email'}
                  </a>
                </div>
              </motion.div>
            </section>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {selectedProject ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
              <motion.div initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.98 }} transition={{ duration: 0.24 }} className="w-full max-w-3xl max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-[1.4rem] border border-slate-200 bg-white shadow-[0_28px_90px_rgba(15,23,42,0.35)]" onClick={(event) => event.stopPropagation()}>
                <div className="relative group">
                  {(() => {
                    const images = Array.isArray(selectedProject.image) ? selectedProject.image : [selectedProject.image];
                    return (
                      <div className="relative h-52 w-full md:h-64">
                        <Image src={images[currentImageIndex]} alt={selectedProject.title} width={1600} height={1000} className="h-full w-full object-contain bg-slate-50 object-center" />
                        {images.length > 1 && (
                          <>
                            <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5 z-20">
                              {images.map((_, idx) => (
                                <button key={idx} onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }} className={`h-1.5 rounded-full transition-all ${idx === currentImageIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'}`} />
                              ))}
                            </div>
                            <button onClick={(e) => { e.stopPropagation(); setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1)); }} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm opacity-0 transition-opacity hover:bg-black/60 group-hover:opacity-100">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                            </button>
                            <button onClick={(e) => { e.stopPropagation(); setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0)); }} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm opacity-0 transition-opacity hover:bg-black/60 group-hover:opacity-100">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </button>
                          </>
                        )}
                      </div>
                    );
                  })()}
                  <button type="button" onClick={() => setSelectedProject(null)} className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white z-30 transition hover:bg-black">
                    {t.sections.projects.close}
                  </button>
                </div>
                <div className="space-y-3 p-4 md:p-5.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{selectedProject.category}</span>
                    <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-muted">{selectedProject.period}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-ink md:text-2xl">{selectedProject.title}</h3>
                  <p className="text-sm leading-7 text-muted">{selectedProject.summary}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.stack.map((tool) => (
                      <span key={tool} className="rounded-full border border-slate-200 bg-[#fbfaf7] px-2.5 py-1 text-xs font-medium text-muted">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="rounded-[1rem] border border-cyan-100 bg-cyan-50 p-3.5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.sections.projects.highlights}</p>
                    <ul className="mt-2.5 space-y-1.5 text-sm text-slate-700">
                      {selectedProject.highlights.map((point) => (
                        <li key={point}>• {point}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    <a href={selectedProject.repoUrl || '#'} target="_blank" rel="noreferrer" className="rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5 md:text-sm">
                      {selectedProject.repoLabel || t.sections.projects.seeGithub}
                    </a>
                    {selectedProject.demoUrl ? (
                      <a href={selectedProject.demoUrl || '#'} target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-ink transition hover:-translate-y-0.5 md:text-sm">
                        {selectedProject.demoUrl.includes('huggingface') ? (language === 'en' ? 'View Hugging Face' : 'Lihat Hugging Face') : t.sections.projects.seeDemo}
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : null}

          {selectedExperience ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm" onClick={() => setSelectedExperience(null)}>
              <motion.div initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.98 }} transition={{ duration: 0.24 }} className="w-full max-w-3xl max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-[1.4rem] border border-slate-200 bg-white shadow-[0_28px_90px_rgba(15,23,42,0.35)]" onClick={(event) => event.stopPropagation()}>
                <div className="relative group">
                  {(() => {
                    const images = Array.isArray(selectedExperience.image) ? selectedExperience.image : [selectedExperience.image];
                    return (
                      <div className="relative h-52 w-full md:h-64">
                        <Image src={images[currentImageIndex]} alt={selectedExperience.title} width={1600} height={1000} className="h-full w-full object-contain bg-slate-50 object-center" />
                        {images.length > 1 && (
                          <>
                            <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5 z-20">
                              {images.map((_, idx) => (
                                <button key={idx} onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }} className={`h-1.5 rounded-full transition-all ${idx === currentImageIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'}`} />
                              ))}
                            </div>
                            <button onClick={(e) => { e.stopPropagation(); setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1)); }} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm opacity-0 transition-opacity hover:bg-black/60 group-hover:opacity-100">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                            </button>
                            <button onClick={(e) => { e.stopPropagation(); setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0)); }} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm opacity-0 transition-opacity hover:bg-black/60 group-hover:opacity-100">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </button>
                          </>
                        )}
                      </div>
                    );
                  })()}
                  <button type="button" onClick={() => setSelectedExperience(null)} className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white z-30 transition hover:bg-black">
                    {language === 'en' ? 'Close' : 'Tutup'}
                  </button>
                </div>
                <div className="space-y-3 p-4 md:p-5.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{selectedExperience.org}</span>
                    <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-muted">{selectedExperience.period}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-ink md:text-2xl">{selectedExperience.title}</h3>
                  <p className="text-sm leading-7 text-muted">{selectedExperience.summary}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedExperience.tools.map((tool: string) => (
                      <span key={tool} className="rounded-full border border-slate-200 bg-[#fbfaf7] px-2.5 py-1 text-xs font-medium text-muted">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="rounded-[1rem] border border-cyan-100 bg-cyan-50 p-3.5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{language === 'en' ? 'Highlights' : 'Pencapaian'}</p>
                    <ul className="mt-2.5 space-y-1.5 text-sm text-slate-700">
                      {selectedExperience.highlights?.map((point: string) => (
                        <li key={point}>• {point}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {selectedExperience.repoUrl && (
                      <a href={selectedExperience.repoUrl} target="_blank" rel="noreferrer" className="rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5 md:text-sm">
                        {t.sections.projects.seeGithub}
                      </a>
                    )}
                    {selectedExperience.demoUrl && (
                      <a href={selectedExperience.demoUrl} target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-ink transition hover:-translate-y-0.5 md:text-sm">
                        {t.sections.projects.seeDetail}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {selectedCertificate ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm sm:p-6" onClick={() => setSelectedCertificate(null)}>
              <motion.div initial={{ opacity: 0, scale: 0.95, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 10 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="relative max-h-full w-full max-w-2xl overflow-y-auto rounded-[1.5rem] bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <div className="relative aspect-[4/3] w-full bg-[#f7f4ef] p-6 sm:p-10 flex items-center justify-center">
                  <Image src={selectedCertificate.image} alt={selectedCertificate.title} fill className="object-contain mix-blend-multiply p-4" />
                  <button onClick={() => setSelectedCertificate(null)} className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-ink shadow backdrop-blur transition hover:bg-white sm:h-10 sm:w-10">
                    ✕
                  </button>
                </div>
                <div className="p-5 md:p-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{selectedCertificate.issuer}</span>
                    <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-muted">{selectedCertificate.date}</span>
                  </div>
                  <h3 className="text-xl font-bold leading-snug text-ink md:text-2xl">{selectedCertificate.title}</h3>

                  <div className="pt-2">
                    <a href={selectedCertificate.url} target="_blank" rel="noreferrer" className="rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800">
                      {language === 'en' ? 'View Certificate' : 'Lihat Sertifikat'}
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {selectedImage && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.2 }} className="relative max-h-[90vh] max-w-5xl rounded-lg overflow-hidden border border-white/10 shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <button type="button" onClick={() => setSelectedImage(null)} className="absolute right-4 top-4 rounded-full bg-black/70 p-2 text-white z-10 transition hover:bg-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>
                <Image src={selectedImage} alt="Preview" width={1600} height={1200} className="max-h-[85vh] w-auto object-contain bg-black/50" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

function Section({
  id,
  title,
  copy,
  children,
}: {
  id: string;
  title: string;
  copy: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-16 lg:py-16">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.25 }} transition={{ duration: 0.55 }}>
        <h2 className="mt-5 text-2xl font-semibold tracking-tight text-ink md:text-4xl">{title}</h2>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-muted md:text-base">{copy}</p>
      </motion.div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <article className={`rounded-[1.2rem] border border-slate-200 bg-white p-4 shadow-soft ${className || ''}`}>{children}</article>;
}
