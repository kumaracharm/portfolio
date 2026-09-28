import { useState } from 'react'
import './App.css'

const navItems = [
  { label: 'Work', href: '#projects' },
  { label: 'Project', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Research', href: '#research' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Resume', href: '/resume.pdf' },
  { label: 'Contact', href: '#contact' },
]

const skillGroups = [
  {
    title: 'Verification & HDL',
    items: [
      'SystemVerilog',
      'Verilog',
      'UVM',
      'SVA',
      'Constrained-Random Verification',
      'Transaction-Based Verification',
      'Scoreboarding',
      'Reference Modeling',
      'Assertion-Based Verification',
      'RTL Design',
    ],
  },
  {
    title: 'EDA Tools & Simulators',
    items: ['Cadence Incisive', 'SimVision', 'Icarus Verilog', 'GTKWave'],
  },
  {
    title: 'Hardware & Protocols',
    items: [
      'APB',
      'AXI Fundamentals',
      "I²C",
      'UART',
      'SPI',
      'Digital Logic',
      'Computer Architecture',
      'RISC-V Fundamentals',
      'Embedded Interfaces',
    ],
  },
  {
    title: 'Programming',
    items: ['C', 'Python', 'MATLAB'],
  },
]

const projects = [
  {
    id: 'apb',
    title: 'APB Protocol Verification',
    subtitle: 'SystemVerilog / UVM',
    year: '2026',
    tags: ['SystemVerilog', 'UVM', 'SVA', 'APB'],
    summary:
      'Developed a 32-bit APB slave-memory RTL verification environment using transaction-based SystemVerilog and UVM architecture.',
    problem:
      'Validate APB protocol compliance and memory behavior under normal and edge-case transactions using a reusable verification environment.',
    architecture:
      'A layered verification environment with randomized sequence generation, transaction-level control, protocol interface modeling, DUT execution, and monitor-driven checking.',
    role:
      'Built the verification environment, sequence and driver logic, scoreboard and reference model, and the assertion-based checks for APB transactions.',
    implementation:
      'Implemented a 32-bit APB slave-memory DUT and connected it to an interface-driven UVM testbench using generator, driver, monitor, scoreboard, and reference model components.',
    verification:
      'Verified reset and protocol behavior through systematic transaction checks, fault-injection scenarios, and SystemVerilog Assertions. Assertions were used to enforce protocol correctness and interface timing expectations.',
    technologies: [
      'SystemVerilog',
      'UVM',
      'APB Interface',
      'DUT',
      'Scoreboard',
      'Reference Model',
      'SVA',
      'Cadence Incisive',
      'SimVision',
    ],
    github: 'https://github.com/kumaracharm/APB-Protocol-Verification-SystemVerilog',
    details: [
      'Constrained-random APB transactions',
      'Generator / sequence',
      'Driver',
      'Monitor',
      'Scoreboard',
      'Reference model',
      'APB interface',
      'DUT',
      'SystemVerilog Assertions',
      'Reset and protocol checking',
      'Fault-injection analysis',
      'Cadence Incisive',
      'SimVision',
    ],
    flow: [
      'Transaction / Sequence',
      'Driver',
      'APB Interface',
      'DUT',
      'Monitor',
      'Scoreboard + Reference Model',
    ],
  },
  {
    id: 'sequence-detector',
    title: '101 Sequence Detector',
    subtitle: 'Verilog',
    year: '2025',
    tags: ['FSM', 'RTL', 'Verilog'],
    summary:
      'Mealy FSM-based 101 sequence detector supporting overlapping and non-overlapping detection.',
    problem:
      'Model and validate a sequence detector that recognizes the pattern 101 across overlapping and non-overlapping input streams.',
    architecture:
      'Finite-state machine implementation using RTL logic and a focused testbench for state transitions and output verification.',
    role:
      'Designed the FSM, wrote the RTL implementation, and evaluated the detector against transition and output scenarios.',
    implementation:
      'Created a clean Mealy-style RTL design in Verilog and validated signal transitions through directed testbench simulation.',
    verification:
      'Used testbench-driven transition/output verification to confirm correct detection behavior for both overlapping and non-overlapping sequences.',
    technologies: ['Verilog', 'RTL', 'FSM', 'Testbench'],
    github: 'https://github.com/kumaracharm',
    details: [
      'FSM design',
      'RTL implementation',
      'Verilog testbench',
      'Transition/output verification',
    ],
    flow: ['FSM State', 'RTL Logic', 'Outputs'],
  },
  {
    id: 'aquasol',
    title: 'AquaSol — Smart Farming Assistant',
    subtitle: 'Smart India Hackathon 2026',
    year: '2026',
    tags: ['ESP32', 'LoRa', 'Raspberry Pi 5'],
    summary:
      'System-level hardware and integration project selected at the college level for SIH 2026 with ESP32, LoRa, Raspberry Pi 5, RTK, UAV sensing, and offline/local processing.',
    problem:
      'Develop a smart farming platform that combines field sensing, local processing, and autonomous irrigation support for practical agricultural monitoring.',
    architecture:
      'Integrated sensing and communication hardware with IoT interfaces and edge processing to support irrigation decisions and environment-aware operations.',
    role:
      'Contributed to the system-level design, hardware integration, and sensor-interface architecture for local processing and automation.',
    implementation:
      'Connected ESP32 and Raspberry Pi 5 based components with LoRa, RTK, and I²C interfaces to integrate sensing, control, and local decision support.',
    verification:
      'Validated interface communication and system-level functionality across embedded and sensing hardware blocks in a prototype environment.',
    technologies: ['ESP32', 'LoRa', 'Raspberry Pi 5', 'RTK', "I²C", 'UAV sensing', 'Offline/local processing', 'Automated irrigation'],
    github: 'https://github.com/kumaracharm/AQUASOL_HARDWARE',
    details: [
      'ESP32',
      'LoRa',
      'Raspberry Pi 5',
      'RTK',
      "I²C",
      'UAV sensing',
      'Offline/local processing',
      'Automated irrigation',
    ],
    flow: ['Sensors', 'ESP32 / LoRa', 'Raspberry Pi 5', 'Local Processing', 'Automation'],
  },
  {
    id: 'nxp-cup',
    title: 'NXP CUP India 2026 — Autonomous Medical Vehicle / Buggy',
    subtitle: 'Autonomous Systems',
    year: '2026',
    tags: ['YOLOv9', 'ROS 2', 'Gazebo'],
    summary:
      'Autonomous medical vehicle architecture integrating object detection, road-sign recognition, edge-vector analysis, and ROS 2 / Gazebo-based simulation and hardware integration.',
    problem:
      'Support perception and navigation tasks for an autonomous buggy using vision-driven detection and route awareness in a constrained environment.',
    architecture:
      'Combined camera-based perception with edge-vector analysis and autonomous navigation workflows under ROS 2 and Gazebo-based simulation.',
    role:
      'Worked within the hardware/software integration effort focused on perception, edge analysis, and autonomous system pipeline development.',
    implementation:
      'Integrated YOLOv9-based detection, road-sign recognition, and vision-driven analysis with navigation and simulation workflows.',
    verification:
      'Validated the pipeline across simulation and system integration stages using practical autonomous perception workflows.',
    technologies: ['YOLOv9', 'Road-sign detection', 'Edge-vector analysis', 'ROS 2', 'Gazebo', 'Hardware/software integration'],
    github: 'https://github.com/kumaracharm',
    details: ['YOLOv9', 'Road-sign detection', 'Edge-vector analysis', 'ROS 2', 'Gazebo', 'Hardware/software integration'],
    flow: ['Vision', 'Detection', 'Edge Analysis', 'ROS 2', 'Navigation'],
  },
]

const achievements = [
  '2nd Prize — Innovation Week',
  'CampusNav',
  '2nd Prize — Ideathon',
  'Automatic Door-Based Power Management',
  'Top 5 — Circuit Debugging Competition',
  'IGINITRON 2K26, GM University',
  'College-Level Selection — Smart India Hackathon 2026',
  'Problem ID SIH26180',
]

const research = [
  {
    title: 'UAV Cybersecurity & Edge-AI Architecture',
    subtitle: 'DRDO Problem 26054',
    description:
      'Ongoing research and architecture effort focused on MALE UAV digital twin and edge-AI frameworks, onboard cybersecurity, telemetry and control protection, sensor spoofing, replay attacks, authenticated telemetry, secure boot, anti-rollback, and post-quantum cryptography concepts.',
  },
]

const educationStats = [
  { label: 'Semester SGPA', value: 'Sem 1 — 8.65 | Sem 2 — 9.00 | Sem 3 — 8.24 | Sem 4 — 9.76' },
  { label: 'Class XII', value: '88.5%' },
  { label: 'Class X', value: '96%' },
]

function App() {
  const [activeProject, setActiveProject] = useState('apb')
  const selectedProject =
    projects.find((project) => project.id === activeProject) ?? projects[0]

  return (
    <div className="page-shell">
      <aside className="left-panel">
        <nav className="site-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <section className="hero-block">
          <div className="hero-text-wrap">
            <p className="eyebrow">B.Tech ECE • GM University</p>
            <h1>KUMARACHAR M</h1>
            <p className="headline">VLSI DESIGN VERIFICATION</p>
            <p className="headline-sub">SYSTEMVERILOG • UVM • RTL</p>
            <p className="positioning-line">
              Junior VLSI Design Verification / RTL Design Engineer
            </p>
            <p className="supporting-copy">
              Electronics and Communication Engineering undergraduate focused on
              digital hardware, SystemVerilog, UVM, assertion-based verification and
              RTL design.
            </p>
            <div className="tag-list" aria-label="Core skills">
              {[
                'SystemVerilog',
                'UVM',
                'SVA',
                'APB',
                'Constrained-Random Verification',
                'Scoreboarding',
                'Reference Modeling',
                'RTL Design',
              ].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="hero-meta">
              <span>B.Tech ECE • GM University, Davangere, Karnataka • Class of 2028</span>
              <span>CGPA 8.91/10</span>
            </div>
            <div className="cta-row">
              <a className="button primary" href="#projects">
                View Projects
              </a>
              <a className="button secondary" href="https://github.com/kumaracharm">
                GitHub
              </a>
              <a className="button secondary" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </section>

        <section id="projects" className="project-list-section">
          <h2>Work</h2>
          <div className="project-list">
            {projects.map((project) => (
              <button
                key={project.id}
                type="button"
                className={project.id === activeProject ? 'project-card active' : 'project-card'}
                onClick={() => setActiveProject(project.id)}
              >
                <div className="project-header">
                  <span className="project-title">{project.title}</span>
                  <span className="project-year">{project.year}</span>
                </div>
                <div className="project-subtitle">{project.subtitle}</div>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </section>
      </aside>

      <main className="right-panel">
        <div className="photo-panel">
          <div className="photo-header">
            <span>github.com/kumaracharm</span>
          </div>
          <div className="portrait-wrap">
            <img src="/profile-illustration.svg" alt="Abstract portfolio portrait illustration" />
          </div>
        </div>

        <section id="about" className="content-card">
          <h2>About</h2>
          <p>
            I am an Electronics and Communication Engineering undergraduate focused on
            VLSI Design Verification and digital hardware. My work includes
            SystemVerilog and UVM-based verification, APB protocol verification,
            SystemVerilog Assertions, constrained-random stimulus, scoreboarding and
            reference-model-based checking.
          </p>
          <p>
            Alongside VLSI work, I have worked on embedded systems, UAV platforms,
            robotics and hardware integration projects, giving me broader exposure to
            hardware interfaces and system-level engineering.
          </p>

          <div className="education-grid">
            {educationStats.map((item) => (
              <div key={item.label} className="education-item">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>

          <div className="about-layout">
            <div className="about-image-card">
              <img src="/profile-illustration.svg" alt="Profile art" />
            </div>
            <div className="info-card">
              <div className="mini-row">
                <span className="label">Email</span>
                <a href="mailto:ldevi117586@gmail.com">ldevi117586@gmail.com</a>
              </div>
              <div className="mini-row">
                <span className="label">Phone</span>
                <a href="tel:+917259907985">+91 7259907985</a>
              </div>
              <div className="mini-row">
                <span className="label">GitHub</span>
                <a href="https://github.com/kumaracharm">kumaracharm</a>
              </div>
              <div className="mini-row">
                <span className="label">LinkedIn</span>
                <a href="https://www.linkedin.com/in/kumar-achar-m-b26199339">Profile</a>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="content-card">
          <h2>Skills</h2>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-group">
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="project-detail-panel">
          <div className="detail-header">
            <div>
              <p className="detail-label">Featured Project</p>
              <h3>{selectedProject.title}</h3>
            </div>
            <span>{selectedProject.subtitle}</span>
          </div>
          <div className="sva-badge">11 SVA Checks</div>
          <p className="detail-summary">{selectedProject.summary}</p>

          <div className="detail-grid">
            <div className="detail-block">
              <h4>Problem</h4>
              <p>{selectedProject.problem}</p>
            </div>
            <div className="detail-block">
              <h4>Architecture</h4>
              <p>{selectedProject.architecture}</p>
            </div>
            <div className="detail-block">
              <h4>My Role</h4>
              <p>{selectedProject.role}</p>
            </div>
            <div className="detail-block">
              <h4>Implementation</h4>
              <p>{selectedProject.implementation}</p>
            </div>
            <div className="detail-block wide">
              <h4>Verification / Testing</h4>
              <p>{selectedProject.verification}</p>
            </div>
          </div>

          <div className="architecture-shell">
            <div className="architecture-flow">
              {selectedProject.flow.map((item, index) => (
                <div key={item} className="flow-item">
                  <span>{item}</span>
                  {index < selectedProject.flow.length - 1 && <span className="arrow">↓</span>}
                </div>
              ))}
            </div>
            <div className="assertions-box">
              <span>Assertions</span>
              <small>Verification layer</small>
            </div>
          </div>

          <div className="tech-list">
            {selectedProject.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <div className="project-meta-row">
            <ul>
              {selectedProject.details.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a className="button primary" href={selectedProject.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </section>

        <section id="research" className="content-card">
          <h2>Research</h2>
          {research.map((item) => (
            <div className="research-item" key={item.title}>
              <h3>{item.title}</h3>
              <p className="research-subtitle">{item.subtitle}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </section>

        <section id="achievements" className="content-card">
          <h2>Achievements</h2>
          <ul className="achievement-list">
            {achievements.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
        </section>

        <section id="resume" className="content-card resume-card">
          <h2>Resume</h2>
          <a className="button secondary" href="/resume.pdf">
            Download Resume
          </a>
          <p>
            Place the PDF in the public folder as <strong>/resume.pdf</strong> when it is ready.
          </p>
        </section>

        <section id="contact" className="content-card contact-card">
          <h2>Contact</h2>
          <div className="contact-block">
            <p className="contact-name">KUMARACHAR M</p>
            <div className="contact-row">
              <span>Email:</span>
              <a href="mailto:ldevi117586@gmail.com">ldevi117586@gmail.com</a>
            </div>
            <div className="contact-row">
              <span>Phone:</span>
              <a href="tel:+917259907985">+91 7259907985</a>
            </div>
            <div className="contact-row">
              <span>GitHub:</span>
              <a href="https://github.com/kumaracharm">github.com/kumaracharm</a>
            </div>
            <div className="contact-row">
              <span>LinkedIn:</span>
              <a href="https://www.linkedin.com/in/kumar-achar-m-b26199339">linkedin.com/in/kumar-achar-m-b26199339</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
