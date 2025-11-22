import { Briefcase, GraduationCap, Home, Mail, User, Code, Lightbulb, type LucideIcon } from "lucide-react"

export interface NavLink {
  href: string
  label: string
  icon?: LucideIcon
}

export const navLinks: NavLink[] = [
  { href: "#hero", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#experience", label: "Experience", icon: Briefcase },
  { href: "#skills", label: "Skills", icon: Code },
  { href: "#education", label: "Education", icon: GraduationCap },
  { href: "#projects", label: "Projects", icon: Lightbulb },
  { href: "#contact", label: "Contact", icon: Mail },
]

export const personalData = {
  name: "Mostafa Yasin",
  title: "Senior Python Backend Engineer",
  bio: `Senior Python Backend Engineer with 6+ years of experience building scalable, secure, and high-performing backend systems across the MENA region and Europe.

I love solving complex backend challenges, optimizing performance, and mentoring junior engineers. I'm passionate about clean code and continuous learning.

Currently working at Gatewatcher (France), where I am a part of the development of a next-gen Cyber Security platform to detect and mitigate cyber threats (NDR, NBA, DGA). My work involves cloud security, real-time data processing, and building robust APIs using Python, Django, and modern DevOps practices.

Previously built learning platforms, ERPs, and payment solutions at Paymob, Majara, and JAWA HR using Python, Django, FastAPI, and the Frappe framework. I’ve also led technical teams and collaborated cross-functionally with Product and Dev teams to ship products that impact thousands of users.

Core Skills:
Python · FastAPI · Django · Django Rest Framework · Frappe · REST APIs · Linux · Microservices · Docker · Git · PostgreSQL · Agile · Cloud Security · Unit & Integration Testing · CI/CD · Gherkins · Functional Testing

I’m currently open to new opportunities in the Gulf region or Europe, and available for relocation or remote work.

Let’s connect if you’re hiring for senior or lead backend roles, or if you’re building something ambitious in Python!`,
  email: "mostafa.a.yasin@gmail.com",
  phone: "+20 1154 628 593",
  location: "Cairo, Egypt",
  resumeUrl: "/resume-mostafa-yasin-2025.pdf",
  linkedIn: "https://www.linkedin.com/in/mostafa-yasin",
  github: "https://github.com/mostafa-yasen",
  profilePicture: "/profile-photo.jpg",
}

export const workExperience = [
  {
    id: 1,
    company: "GATEWATCHER",
    role: "Senior Software Engineer",
    startDate: "Jun 2024",
    endDate: "Present",
    description: [
      "Developed an innovative NDR platform using Python, enhancing threat detection capabilities by 10%, and protecting company networks.",
      "Led efforts to instantly detect and report cyberattacks, improving response times by 15% and ensuring proactive threat management.",
      "Implemented cutting-edge security measures for cloud environments, reducing potential vulnerabilities by 5% and ensuring robust data protection.",
      "Mentored junior engineers, fostering a culture of continuous learning and best practices.",
      "Wrote comprehensive functional tests, ensuring early bug detection.",
    ],
    logo: "/gatewatcher_logo.jpeg",
  },
  {
    id: 2,
    company: "Paymob",
    role: "Senior Software Engineer",
    startDate: "Jun 2023",
    endDate: "May 2024 (1 Year)",
    description: [
      "Developed in-store payment options using Python, FastAPI, Django, and Django Rest Framework, enhancing business growth by a good percentage.",
      "Integrated POS solutions for businesses, streamlining operations and increasing revenue by 25%.",
      "Collaborated with cross-functional teams to ensure seamless implementation of new payment gateways, improving transaction efficiency by 10%.",
      "Wrote comprehensive unit and integration tests, ensuring code quality and reliability.",
    ],
    logo: "/paymobcompany_logo.jpeg",
  },
  {
    id: 3,
    company: "Majaracapital",
    role: "Senior Software Engineer",
    startDate: "May 2022",
    endDate: "May 2023 (1 Year)",
    description: [
      "Developed and customized an LMS for students in Saudi Arabia using JavaScript, Python, Angular, Frappe Framework, and ERPNext, enhancing learning experiences.",
      "Built a platform for marketing and sales teams to manage questions, exams, notifications, progress monitoring, and subscriptions, improving operational efficiency by 80%.",
      "Managed a technical team to deliver product milestones in an agile approach, increasing project completion rates by 50%."
    ],
    logo: "/majaracapital_logo.jpeg",
  },
  {
    id: 4,
    company: "Axentor LLC.",
    role: "Software Engineer",
    startDate: "May 2021",
    endDate: "Apr 2022 (1 Year)",
    description: [
      "Developed a platform using Python to manage the sales team, enhancing operational efficiency by 60%.",
      "Built a POS solution for stock management, streamlining inventory processes and increasing accuracy by 60%.",
      "Created an HR management solution with biometric device integration for attendance tracking, improving tracking accuracy by 40%.",
    ],
    logo: "/axentor_logo.webp",
  },
  {
    id: 5,
    company: "Lavaloon",
    role: "Full Stack Software Engineer",
    startDate: "Aug 2019",
    endDate: "Apr 2021 (1 Year 9 Months)",
    description: [
      "Collaborated with product and design teams to deliver software components using Python, SQL, and the Frappe framework, enhancing system performance by a good percentage.",
      "Developed resilient end-user-facing web applications with Vue.js, improving user experience and engagement.",
      "Wrote efficient and testable code meeting technical requirements in Python OOP, reducing system bugs by 20%.",
    ],
    logo: "/lavaloon_logo.jpeg",
  },
]

export const skills = {
  programmingLanguages: ["Python", "Bash", "Shell", "JavaScript"],
  frontend: ["React", "Vue.js", "Angular", "Material UI", "HTML5", "CSS3", "Bootstrap", "Sass"],
  backend: ["Django", "Django Rest Framework", "RESTful APIs", "FastAPI", "Frappe Framework", "ERPNext", "Celery", "Redis", "Node.js", "Express.js"],
  testing: ["Unit Testing", "Integration Testing", "Functional Testing", "Gherkins", "Pytest"],
  devOps: ["Docker", "Kubernetes", "CI/CD", "Git", "GitHub Actions", "Gitlab CI", "AWS", "Linux"],
  cloud: ["AWS", "Azure",],
  security: ["Cloud Security", "Data Encryption", "Cybersecurity Best Practices"],
  architecture: ["Microservices", "Serverless Architecture", "Event-Driven Architecture"],
  softwareDevelopment: ["Agile", "Scrum", "Test-Driven Development", "Behavior-Driven Development"],
  versionControl: ["Git", "GitHub", "GitLab"],
  databases: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Firebase"],
  toolsAndPlatforms: ["Git", "GitHub", "GitLab", "Docker", "Kubernetes", "AWS", "Jenkins", "Jira", "CI/CD", "GitHub Actions", "Linux"],
  methodologies: ["Agile", "Scrum", "Test-Driven Development", "Behavior-Driven Development"],
  ai: ["RAG", "LangChain", "LangGraph", "ChatGPT", "GitHub Copilot", "AI-assisted Development", "Vibe Coding", "Prompt Engineering"],
}

export const education = [
  {
    id: 1,
    institution: "State University",
    degree: "B.S. in Computer Science",
    startDate: "Jan 2015",
    endDate: "Jun 2019",
    description: "Graduated with a good mark. President of the University Coding Club.",
  },
]

export const projects = [
  {
    id: 1,
    title: "Jahezacademy: E-learning Platform",
    description:
      "A Learning Management System provided for Saudi Arabian students to smartly practice on Qudrat and Tahsily quizzes.",
    technologies: ["Python", "Frappe", "ERPNext", "AWS EC2", "AWS RDS", "Angular", "TypeScript", "Payment Integration", "MariaDB"],
    imageUrl: "/jahezacademy_screen.png",
    liveLink: "https://jahezacademy.com",
    repoLink: "#",
  },
  {
    id: 2,
    title: "Paymob Accept: Payment Gateway (Payment Aggregator & Payment Service Provider)",
    description:
      "Paymob app is a fast and easy way to accept payments on your mobile phone anytime anywhere. Paymob app provides various payment acceptance solutions that suit all professions.",
    technologies: ["Python", "Django", "Django Rest Framework", "Celery", "Celery Beat", "Docker", "Kubernetes", "PostgreSQL", "Redis", "FastAPI"],
    imageUrl: "/paymob_screen.png",
    liveLink: "https://paymob.com",
    repoLink: "#",
  },
  {
    id: 3,
    title: "Gatewatcher GCenter: Network Visibility & Threat Intelligence Platform",
    description:
      "GCenter is a cyber threat intelligence platform designed to provide real-time, 360° visibility over enterprise network assets. I was part of the backend development team efforts to architect and implement core modules responsible for data ingestion, normalization, and threat detection using Python and FastAPI.",
    technologies: ["gRPC", "Swagger", "Python", "Django", "Django Rest Framework", "Celery", "FastAPI", "PostgreSQL", "Docker"],
    imageUrl: "/gatewatcher_screen.png",
    liveLink: "https://gatewatcher.com",
    repoLink: "#",
  },
]

export const siteConfig = {
  name: personalData.name,
  url: "https://your-domain.com",
  ogImage: "https://your-domain.com/og.png",
  description: `Personal resume website for ${personalData.name}, ${personalData.title}. Showcasing skills, experience, and projects.`,
  links: {
    linkedin: personalData.linkedIn,
    github: personalData.github,
  },
}
