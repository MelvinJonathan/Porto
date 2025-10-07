import React, { useState, useEffect } from 'react';
import './Home.css';
import {
  Mail,
  MessageCircle,
  Linkedin,
  Github,
  Code,
  Palette,
  Database,
  Smartphone,
  Globe,
  Zap,
  User,
  ZapOffIcon,
  ZapIcon,
  PlugZap2,
  Globe2Icon
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);


  const profilePhoto = "/images/Images2.png";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);


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
      title: "HCI Project Individu",
      description: "Sebuah project yang di buat untuk menampilkan profil perusahaan, produk sereal, dan informasi seperti kontak, dll.",
      icon: <Globe className="project-icon" />,
      tech: ["HTML & CSS"],
      gradient: "gradient-blue-purple",
      githubLink: "https://github.com/MelvinJonathan/HCI_Project_Individu"
    },
    {
      id: 2,
      title: "Code Reengeneering Project",
      description: "Project Refactoring sebuah smell code.",
      icon: <ZapOffIcon className="project-icon" />,
      tech: ["Java"],
      gradient: "gradient-green-teal",
      githubLink: "https://github.com/MelvinJonathan/Code_Reengeneering_Project"
    },
    {
      id: 3,
      title: "Data Structure Project",
      description: "Program kamus slang berbasis struktur data Trie yang memungkinkan pengguna untuk menambahkan, mencari, dan menampilkan kata slang beserta deskripsinya.",
      icon: <Zap className="project-icon" />,
      tech: ["C++"],
      gradient: "gradient-orange-red",
      githubLink: "https://github.com/MelvinJonathan/Data_Structure_Project"
    },
    {
      id: 4,
      title: "Pattern Software Design Project",
      description: "Sebuah web yang di rancang untuk card shop.",
      icon: <Smartphone className="project-icon" />,
      tech: ["JavaScript"],
      gradient: "gradient-green-teal",
      githubLink: "https://github.com/MelvinJonathan/Pattern_Software_Design_Project"
    },
    {
      id: 5,
      title: "Software Engineering Project",
      description: "sebuah web chat bot yang dibuat sebagai tempat untuk belajar koding dan mencari jawaban dengan cepat, akurat.",
      icon: <Globe2Icon className="project-icon" />,
      tech: ["TypeScript"],
      gradient: "gradient-blue-purple",
      githubLink: "https://github.com/MelvinJonathan/AOL_Software_Engineering_Kelompok_2"
    }
  ];

  const skills = [
    { name: "React.js", icon: <Code className="skill-icon" />, level: 90 },
    { name: "C++", icon: <Code className="skill-icon" />, level: 80 },
    { name: "Java", icon: <Code className="skill-icon" />, level: 80 },
    { name: "HTML & CSS", icon: <Palette className="skill-icon" />, level: 85 },
    { name: "SQL", icon: <Database className="skill-icon" />, level: 90 },
    { name: "C#", icon: <Code className="skill-icon" />, level: 75 },
    { name: "Python", icon: <Code className="skill-icon" />, level: 85 }
  ];

  const techTags = ['React.js', 'C#', 'Java', 'C++', 'SQL', 'HTML & CSS', 'Python'];

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">Portofolio</div>
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
              {/* Foto profil */}
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
              Hi, I’m Melvin Jonathan
            </h1>

            <p className="home-subtitle">
              💻 Computer Science Student & Full Stack Developer
            </p>

            <p className="home-description">
              Passionate about building modern web applications with clean code, performance, and great user experience.
            </p>

            <div className="home-buttons">
              <button
                onClick={() => scrollToSection('about')}
                className="btn btn-primary"
              >
                Learn More
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-secondary"
              >
                Let’s Collaborate
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <div className="section-divider"></div>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p className="about-paragraph">
                I am a Computer Science student at Binus University with strong time management and teamwork skills, 
                allowing me to balance academic activities and personal projects effectively. Skilled in HTML, SQL, 
                React.js, Java, and C++, I am eager to apply my knowledge in professional projects. My focus is on 
                creating solutions that are not only functional, but also maintainable and high-performing. Open to 
                collaboration, I am excited to bring ideas to life and contribute to impactful projects.
              </p>

              <p className="about-paragraph">
                I am eager to apply my knowledge and skills to professional projects. My focus is on creating 
                solutions that are not only functional but also maintainable and high-performing.
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
            <h2 className="section-title">My Projects</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Several projects I have worked on.
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
            <h2 className="section-title text-white">Let's collaborate!</h2>
            <div className="section-divider bg-white"></div>
            <p className="section-description text-white">
              Interested in working together? I’m ready to help make your project a reality!
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