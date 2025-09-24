import React, { useState, useEffect } from 'react';
import './Home.css';
import {
  Mail,
  MessageCircle,
  Linkedin,
  Github,
  ExternalLink,
  Code,
  Palette,
  Database,
  Smartphone,
  Globe,
  Zap,
  User,
  Briefcase,
  Phone
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution dengan React, Java, dan C++. Fitur lengkap termasuk payment gateway dan admin dashboard.",
      icon: <Globe className="project-icon" />,
      tech: ["React.js", "Java", "C++"],
      gradient: "gradient-blue-purple",
      githubLink: "https://github.com/MelvinJonathan/ecommerce-platform"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplikasi manajemen tugas dengan drag & drop, real-time updates, dan team collaboration features.",
      icon: <Smartphone className="project-icon" />,
      tech: ["React.js", "Python", "HTML"],
      gradient: "gradient-green-teal",
      githubLink: "https://github.com/MelvinJonathan/task-manager"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Dashboard analytics real-time dengan visualisasi data interaktif dan reporting system yang komprehensif.",
      icon: <Zap className="project-icon" />,
      tech: ["SQL", "C#"],
      gradient: "gradient-orange-red",
      githubLink: "https://github.com/MelvinJonathan/analytics-dashboard"
    }
  ];

  const skills = [
    { name: "React.js", icon: <Code className="skill-icon" />, level: 90 },
    { name: "C++", icon: <Code className="skill-icon" />, level: 80 },
    { name: "Java", icon: <Code className="skill-icon" />, level: 90 },
    { name: "UI/UX Design", icon: <Palette className="skill-icon" />, level: 80 },
    { name: "SQL", icon: <Database className="skill-icon" />, level: 85 },
    { name: "C#", icon: <Code className="skill-icon" />, level: 75 },
    { name: "Python", icon: <Code className="skill-icon" />, level: 85 }
  ];

  const techTags = ['React.js', 'C#', 'Java', 'C++', 'SQL', 'HTML', 'Python'];

  // Profile photo - ganti dengan path foto kamu
  const profilePhoto = "src/assets/Images2.png"; // atau "src/assets/images/melvin-profile.jpg"

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">Portfolio</div>
          <div className="nav-links">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-link ${activeSection === section ? 'nav-link-active' : ''}`}
              >
                {section === 'about' ? 'About Me' : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="section home-section">
        <div className="bg-grid-pattern"></div>
        <div className="section-container">
          <div className="home-content">
            <div className="profile-avatar">
              {/* Menggunakan foto profil jika tersedia, fallback ke icon User */}
              <img 
                src={profilePhoto} 
                alt="Melvin Jonathan Profile"
                className="profile-photo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <User className="avatar-icon" style={{display: 'none'}} />
            </div>

            <h1 className="home-title">
              Halo, Saya Melvin Jonathan
            </h1>

            <p className="home-subtitle">
              Computer Science Student & Full Stack Developer
            </p>

            <p className="home-description">
              Mahasiswa Computer Science yang passionate dalam membangun aplikasi web modern. 
              Mengutamakan clean code, performance, dan user experience dalam setiap project.
            </p>

            <div className="home-buttons">
              <button
                onClick={() => scrollToSection('about')}
                className="btn btn-primary"
              >
                Pelajari Lebih Lanjut
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-secondary"
              >
                Hubungi Saya
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Tentang Saya</h2>
            <div className="section-divider"></div>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p className="about-paragraph">
                Mahasiswa S1 Computer Science di Binus University dengan kemampuan manajemen waktu yang baik,
                memungkinkan saya untuk menyeimbangkan kegiatan akademis dan proyek pribadi secara efektif. Saya
                memiliki kemampuan bersosialisasi yang kuat untuk berkolaborasi dalam tim dan mudah beradaptasi dengan
                lingkungan kerja yang dinamis.
              </p>

              <p className="about-paragraph">
                Saya bersemangat untuk mengaplikasikan pengetahuan dan keterampilan yang saya miliki dalam 
                proyek-proyek profesional. Fokus saya adalah menciptakan solusi yang tidak hanya functional, 
                tetapi juga maintainable dan performant.
              </p>

              <div className="tech-tags">
                {techTags.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="skills-container">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <div className="skill-info">
                      <div className="skill-icon-container">
                        {skill.icon}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Proyek Terbaru</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Beberapa proyek yang telah saya kerjakan menggunakan berbagai teknologi programming.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className={`project-image ${project.gradient}`}>
                  <div className="project-overlay"></div>
                  <div className="project-icon-container">
                    {project.icon}
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="project-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-buttons">
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn project-btn-secondary"
                    >
                      <Github className="btn-icon" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="contact-overlay"></div>
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title text-white">Mari Berkolaborasi</h2>
            <div className="section-divider bg-white"></div>
            <p className="section-description text-white">
              Tertarik untuk bekerja sama? Saya siap membantu mewujudkan proyek Anda!
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-item">
              <div className="contact-icon gradient-blue-purple">
                <Mail className="contact-icon-svg" />
              </div>
              <h3 className="contact-title">Email</h3>
              <p className="contact-info">melvinjonathan72@gmail.com</p>
            </div>

            <div className="contact-item">
              <div className="contact-icon gradient-green-teal">
                <MessageCircle className="contact-icon-svg" />
              </div>
              <h3 className="contact-title">WhatsApp</h3>
              <p className="contact-info">+62 813-5062-5319</p>
            </div>

            <div className="contact-item">
              <div className="contact-icon gradient-blue-indigo">
                <Linkedin className="contact-icon-svg" />
              </div>
              <h3 className="contact-title">LinkedIn</h3>
              <p className="contact-info">linkedin.com/in/melvin-jonathan</p>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/MelvinJonathan"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <Github className="social-icon" />
            </a>

            <a
              href="https://www.linkedin.com/in/melvin-jonathan"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <Linkedin className="social-icon" />
            </a>

            <a
              href="mailto:melvinjonathan72@gmail.com"
              className="social-btn"
            >
              <Mail className="social-icon" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;