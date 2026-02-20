'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'about',
        'projects',
        'achievements',
        'experience',
        'certifications',
      ];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;

          if (i === sections.length - 1) {
            const documentHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            const scrollBottom = scrollPosition + windowHeight;

            if (
              scrollBottom >= documentHeight - 100 ||
              scrollPosition >= offsetTop - 50
            ) {
              setActiveSection(section);
              break;
            }
          } else {
            const offsetBottom = offsetTop + element.offsetHeight;
            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Major Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'certifications', label: 'Certifications' },
  ];

  return (
    <>
      <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden xl:block">
        <div className="flex flex-col space-y-3">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`cursor-pointer text-left px-3 py-2 transition-all duration-200 text-lg border-l-2 ${
                activeSection === section.id
                  ? 'border-foreground text-foreground'
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </nav>

      <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-border z-50 xl:hidden">
        <nav className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="cursor-pointer md:hidden p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>

            <div className="hidden md:flex justify-center flex-1">
              <div className="flex xl:space-x-6 space-x-2 overflow-x-auto">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`cursor-pointer px-3 py-1 transition-all duration-200 text-sm whitespace-nowrap border-b-2 ${
                      activeSection === section.id
                        ? 'border-foreground text-foreground'
                        : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="fixed left-0 top-0 h-full w-64 bg-background border-r border-border shadow-lg">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-lg font-semibold">Navigation</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-muted rounded-md transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full cursor-pointer text-left px-4 py-3 transition-all duration-200 border-l-2 ${
                      activeSection === section.id
                        ? 'border-foreground text-foreground'
                        : 'border-transparent text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}

      <main className="max-w-4xl mx-auto px-6 py-8 pt-20 xl:pt-8">
        <section id="hero" className="mb-16">
          <div className="flex items-center gap-6 mb-6">
            <Image
              src="https://yg7xmhez0r.ufs.sh/f/2wsbR7eha6fqKLlANC994Iiypzd65vUEunVX7c3e2slkfGT0"
              alt="Iftekhar Ahmad"
              width={96}
              height={96}
              className="w-24 h-24 md:w-30 md:h-30 rounded-full border"
            />
            <div>
              <h1 className="text-4xl font-bold mb-2">Iftekhar Ahmad</h1>
              <h2 className="text-xl text-muted-foreground">
                Software Engineer
              </h2>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            👋 Hi, I build scalable web applications and love to shape complex
            challenges into simple solutions with clean and efficient code. I
            care about building products that don&apos;t just use, but talk
            about
          </p>
          <blockquote className="mt-4 text-muted-foreground italic border-l-2 border-border pl-4">
            &quot;Code is like humor. When you have to explain it, it&apos;s
            bad. I believe in writing code that speaks for itself and building
            relationships that last.&quot;
          </blockquote>
          <div className="mt-6 space-x-4">
            <a
              href="mailto:ahmad.iftekhar2004@gmail.com"
              className="text-primary hover:underline"
            >
              ahmad.iftekhar2004@gmail.com
            </a>
            <a
              href="https://github.com/iftekhs"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/iftekhar04/"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <section id="about" className="mb-16">
          <h2 className="text-2xl font-bold mb-6">About Me</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a software engineer with 5+ years of experience building
              web applications using modern technologies. I specialize in
              full-stack development with a focus on React, Node.js, and cloud
              technologies.
            </p>
            <p>
              When I&apos;m not coding, I enjoy contributing to open source
              projects, learning new technologies, and sharing knowledge with
              the developer community through blog posts and technical talks.
            </p>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Core Skills
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <span className="text-sm">JavaScript/TypeScript</span>
                <span className="text-sm">React/Next.js</span>
                <span className="text-sm">PHP/Laravel</span>
                <span className="text-sm">Python/Django</span>
                <span className="text-sm">MySQL/PostgreSQL</span>
                <span className="text-sm">AWS/Google Cloud</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Major Projects</h2>
          <div className="space-y-8">
            <div className="border-l-2 border-border pl-6">
              <div className="flex flex-col  gap-3 mb-2">
                <Image
                  src="https://lancepilot.com/images/logo-icon.svg"
                  alt="Lancepilot logo"
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded"
                />
                <h3 className="text-xl font-semibold">Lancepilot</h3>
              </div>
              <p className="text-muted-foreground mb-3">
                World&apos;s first WhatsApp outreaching tool- designed to help
                businesses connect with leads, manage campaigns and scale
                converstaions. Core features include Multi Tenancy, White
                Labeling, API and webhook, Bulk Messaging.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs bg-muted px-2 py-1 rounded">
                  React
                </span>
                <span className="text-xs bg-muted px-2 py-1 rounded">
                  Laravel
                </span>
                <span className="text-xs bg-muted px-2 py-1 rounded">
                  Mysql
                </span>
              </div>
              <div className="space-x-4">
                <a
                  href="https://lancepilot.com/"
                  target="_blank"
                  className="text-primary text-sm underline inline-flex items-center gap-1"
                  rel="noreferrer"
                >
                  View Application
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="border-l-2 border-border pl-6">
              <div className="flex flex-col  gap-3 mb-2">
                <img
                  src="https://oumts6nefv.ufs.sh/f/xb97pP2S5jPKDW9RsM8rlbSiN60dOWsXQ3avTkue2yMxzAhI"
                  alt="ArushiMart logo"
                  className="w-[120px] h-[30px] rounded"
                />
                <h3 className="text-xl font-semibold">ArushiMart</h3>
              </div>
              <p className="text-muted-foreground mb-3">
                Built a full-stack fashion e-commerce platform with product
                management and order tracking features along with responsive UI.
                Developed a POS system to support in-store sales, inventory
                updates and transaction management.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs bg-muted px-2 py-1 rounded">
                  Nextjs
                </span>
                <span className="text-xs bg-muted px-2 py-1 rounded">
                  TypeScript
                </span>
                <span className="text-xs bg-muted px-2 py-1 rounded">
                  PostgresSQL
                </span>
              </div>
              <div className="space-x-4">
                <a
                  href="https://arushimart.com/"
                  target="_blank"
                  className="text-primary text-sm underline inline-flex items-center gap-1"
                  rel="noreferrer"
                >
                  View Application
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="border-l-2 border-border pl-6">
              <div className="flex flex-col gap-3 mb-2">
                <div className="w-16 h-16 bg-black rounded flex items-center justify-center">
                  <span className="text-xl text-white font-bold">SS</span>
                </div>
                <h3 className="text-xl font-semibold">StartStartups</h3>
              </div>
              <p className="text-muted-foreground mb-3">
                SaaS startup platforms- helping the aspiring entrepreneurs to
                launch their own SaaS business. Key features include User
                Authentication, In-app purchase & refund system, Dynamic Art and
                Community management.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs bg-muted px-2 py-1 rounded">
                  Next.js
                </span>
                <span className="text-xs bg-muted px-2 py-1 rounded">
                  Laravel
                </span>
                <span className="text-xs bg-muted px-2 py-1 rounded">
                  PostgreSQL
                </span>
              </div>
              <div className="space-x-4">
                <a
                  href="https://www.startstartups.com/"
                  target="_blank"
                  className="text-primary text-sm underline inline-flex items-center gap-1"
                  rel="noreferrer"
                >
                  View Application
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="space-y-8">
            <div className="border-l-2 border-border pl-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold">
                  Senior Software Engineer
                </h3>
              </div>
              <p className="text-primary font-medium mb-1">Lancepilot LTD.</p>
              <p className="text-sm text-muted-foreground mb-3">
                Nov 2024 - Present
              </p>
              <p className="text-muted-foreground mb-3">
                Drove technical strategy and scalable architecture at
                Lancepilot, leading a 7+ developer team, setting coding
                standards, and ensuring resilient, high-performance systems
                through optimized workflows and mentorship.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-muted px-2 py-1 rounded">
                  React
                </span>
                <span className="text-xs bg-muted px-2 py-1 rounded">
                  Node.js
                </span>
                <span className="text-xs bg-muted px-2 py-1 rounded">AWS</span>
                <span className="text-xs bg-muted px-2 py-1 rounded">
                  Docker
                </span>
              </div>
            </div>

            <div className="border-l-2 border-border pl-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold">
                  Junior Software Engineer
                </h3>
              </div>
              <p className="text-primary font-medium mb-1">Lancepilot LTD.</p>
              <p className="text-sm text-muted-foreground mb-3">
                Jan 2024 - Nov 2024
              </p>
              <p className="text-muted-foreground mb-3">
                Built and maintained web applications from scratch using modern
                JavaScript frameworks. Collaborated with design team to create
                responsive, user-friendly interfaces.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-muted px-2 py-1 rounded">
                  Vue.js
                </span>
                <span className="text-xs bg-muted px-2 py-1 rounded">
                  Python
                </span>
                <span className="text-xs bg-muted px-2 py-1 rounded">
                  PostgreSQL
                </span>
                <span className="text-xs bg-muted px-2 py-1 rounded">
                  Redis
                </span>
              </div>
            </div>

            <div className="border-l-2 border-border pl-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold">
                  Full-Stack Web Developer
                </h3>
              </div>
              <p className="text-primary font-medium mb-1">
                Premium Solutions Ltd.
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                Jun 2021 - Jun 2023
              </p>
              <p className="text-muted-foreground mb-3">
                Started my professional journey developing client websites and
                learning industry best practices. Gained experience in version
                control, testing, and agile development methodologies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-muted px-2 py-1 rounded">
                  JavaScript
                </span>
                <span className="text-xs bg-muted px-2 py-1 rounded">PHP</span>
                <span className="text-xs bg-muted px-2 py-1 rounded">
                  MySQL
                </span>
                <span className="text-xs bg-muted px-2 py-1 rounded">
                  WordPress
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="achievements" className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Top Accomplishments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-border pl-6">
              <h3 className="text-lg font-semibold mb-1">Lancepilot</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {' '}
                Product Hunt • 2024
              </p>
              <p className="text-muted-foreground">
                Architected and built a multi-tenant platform with Laravel,
                React and AWS, winning Product Hunt’s Product of the Day and
                Week in 2024 and also earning industry recognition for
                innovation.
              </p>
            </div>

            <div className="border-l-2 border-border pl-6">
              <h3 className="text-lg font-semibold mb-1">Subsavely</h3>
              <p className="text-sm text-muted-foreground mb-2">2024</p>
              <p className="text-muted-foreground">
                Architected and led a team of 7 software-engineers to
                successfully design and develop a high-performance, scalable
                subscription management application, making it a breeze to
                manage billing, notifications and subscription lifecycle
                tracking.
              </p>
            </div>
          </div>
        </section>

        <section id="certifications" className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-border pl-6">
              <h3 className="text-lg font-semibold mb-1">CSE Fundamentals</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Phitron • 2024
              </p>
              <p className="text-muted-foreground">
                Completed a rigorous course mastering core computer science
                concepts, data-structure algorithms and problem-solving
                techniques.
              </p>
            </div>

            <div className="border-l-2 border-border pl-6">
              <h3 className="text-lg font-semibold mb-1">AWS Fundamentals</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Laracasts • 2023
              </p>
              <p className="text-muted-foreground">
                Gained hands-on knowledge of core AWS services, cloud
                architecture, and best practices for building secure and
                scalable applications.
              </p>
            </div>

            <div className="border-l-2 border-border pl-6">
              <h3 className="text-lg font-semibold mb-1">
                Responsive Real-World Websites with HTML & CSS
              </h3>
              <p className="text-sm text-muted-foreground mb-2">Udemy • 2021</p>
              <p className="text-muted-foreground">
                Gained skills in creating mobile-friendly, responsive websites
                modern HTML and CSS best practices.
              </p>
            </div>

            <div className="border-l-2 border-border pl-6">
              <h3 className="text-lg font-semibold mb-1">
                The Complete Full-Stack Web Development Bootcamp
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Programming Hero 2022 • Udemy 2021
              </p>
              <p className="text-muted-foreground">
                Developed expertise in front-end, back-end technologies, UI
                design, server-side logic, building scalable web applications
                through hands-on projects.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          <div className="border-l-2 border-border pl-6">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I&apos;m always interested in new opportunities and
              collaborations. Whether you have a project in mind, want to
              discuss technology, or just want to connect, feel free to reach
              out!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-muted rounded flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:ahmad.iftekhar2004@gmail.com"
                      className="text-primary hover:underline"
                    >
                      ahmad.iftekhar2004@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-muted rounded flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-muted rounded flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <a
                      href="https://github.com/iftekhs"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/iftekhs
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-muted rounded flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/iftekhar04/"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/iftekhar04
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Currently Available</h3>
              <p className="text-muted-foreground">
                I&apos;m open to full-time opportunities, freelance projects,
                and consulting work. Let&apos;s discuss how we can work together
                to bring your ideas to life.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              Iftekhar Ahmad
            </p>
            <div className="space-x-4">
              <a
                href="mailto:ahmad.iftekhar2004@gmail.com"
                className="text-muted-foreground hover:text-foreground text-sm"
              >
                Email
              </a>
              <a
                href="https://github.com/iftekhs"
                className="text-muted-foreground hover:text-foreground text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/iftekhar04"
                className="text-muted-foreground hover:text-foreground text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
