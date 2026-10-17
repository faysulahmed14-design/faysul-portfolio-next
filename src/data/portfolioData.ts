export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  department: string;
  institution: string;
  cgpa: string;
  location: string;
  email: string;
  phone: string;
  bio: string;
  github: string;
  linkedin: string;
  cvUrl: string;
  avatar: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  badge?: string;
  logo?: string;
  tagline?: string;
}

export interface SkillItem {
  name: string;
  category: string;
  level?: string;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  live?: string;
  featured?: boolean;
}

export interface ResearchItem {
  title: string;
  domain: string;
  description: string;
  tags: string[];
}

export interface Achievement {
  title: string;
  detail: string;
  icon: string;
  category?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  result: string;
  location: string;
}

export interface ReferenceItem {
  name: string;
  role: string;
  institution: string;
  email: string;
  phone?: string;
}

export const portfolioData = {
  personalInfo: {
    name: "Faysul Ahmed",
    title: "Co-Founder & Co-CTO at Axiora Software Labs | Software Engineering Student & Researcher",
    subtitle: "Building digital experiences that matter with code, AI and hardware.",
    department: "Department of Software Engineering",
    institution: "Daffodil International University",
    cgpa: "3.89 (up to 6th semester)",
    location: "DSC, Ashulia, Savar, Dhaka, Bangladesh",
    email: "faysulahmed14@gmail.com",
    phone: "01303338036",
    bio: "I am a dedicated Software Engineering student and Co-Founder & Co-CTO of Axiora Software Labs. Passionate about technology, system architecture, problem-solving, and continuous learning. I thrive in diverse, collaborative environments and enjoy leading innovative digital solutions. As an aspiring international student, I aim to broaden my academic and cultural perspectives, connect globally, and grow into a confident, impactful Software Engineer and tech entrepreneur.",
    github: "https://github.com/faysulahmed14-design",
    linkedin: "https://www.linkedin.com/in/faysul-ahmed-",
    cvUrl: "/assets/Faysul_Ahmed_CV.pdf",
    avatar: "/assets/profile.jpg",
  },

  stats: [
    { label: "Executive Role", value: "Co-CTO" },
    { label: "Avg CGPA (6th Sem)", value: "3.89" },
    { label: "Core Projects", value: "4+" },
    { label: "ML Research", value: "2" },
  ],

  experiences: [
    {
      title: "Co-Founder & Co-CTO",
      company: "Axiora Software Labs",
      period: "Present",
      description: "Co-leading technical architecture, engineering strategy, and product roadmap. Directing software development, cloud infrastructure, and innovative client & internal solutions.",
      badge: "Executive Leadership",
      logo: "/assets/axiora.png",
      tagline: "Where Intelligence Meets Innovation."
    },
    {
      title: "Research Executive (Intern)",
      company: "Skill Chefs",
      period: "August 2026 – Present",
      description: "Conducting domain research on emerging tech paradigms, analyzing user learning trends, and developing structured technical and academic evaluation methodologies.",
      badge: "Internship"
    },
    {
      title: "Student Associate",
      company: "Skil Jobs",
      period: "October 2026 – Present",
      description: "Driving student outreach, coordinating cross-institutional youth employability summits, and linking aspiring engineers with corporate skill-building programs.",
      badge: "Associate"
    },
    {
      title: "Computer Operator (Data Entry)",
      company: "Neoventis Biotech (Dealer)",
      period: "October 2024 – December 2024",
      description: "Managed pharmaceutical inventory tracking, high-volume transactional data entry, and digital database validation with high precision.",
      badge: "Contract"
    }
  ] as Experience[],

  skills: [
    { name: "C", category: "Programming", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
    { name: "Java", category: "Programming", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "JavaScript", category: "Frontend / Web", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "Python", category: "Programming & ML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "HTML & CSS", category: "Web UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "Arduino", category: "Embedded Systems", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg" },
    { name: "File Handling", category: "C Data Logic", icon: "code" },
    { name: "MS Office", category: "Word, Excel, PPT", icon: "office" },
    { name: "AI Tools", category: "Claude, GPT, Kimi", icon: "ai" },
    { name: "Canva & Media", category: "Design & Visuals", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" },
  ] as SkillItem[],

  coreCompetencies: [
    "System Design & Logic",
    "File Handling & Data Management",
    "Team Leadership & Coordination",
    "Event Planning & Execution",
    "Problem Solving & Analytical Thinking"
  ],

  spokenLanguages: [
    { name: "English", level: "Expert (Reading, Writing, Speaking)" },
    { name: "Bengali", level: "Native (Reading, Writing, Speaking)" },
    { name: "Hindi", level: "Conversational (Speaking, Intermediate Literacy)" }
  ],

  projects: [
    {
      id: "campusnova",
      title: "CampusNova",
      category: "Cross-University EdTech Platform",
      description: "Designed and developed an EdTech platform connecting students, mentors, and alumni across 6 key pillars: Academic, Research, Sports, Cultural, Skill, and Career.",
      tags: ["EdTech", "Web Platform", "Cross-University", "Mentorship"],
      image: "/assets/campusnova.png",
      github: "https://github.com/faysulahmed14-design",
      live: "#contact",
      featured: true
    },
    {
      id: "neoventis",
      title: "Neoventis Medicine",
      category: "Digital Healthcare & Pharmacy",
      description: "A digital healthcare platform designed to make accessing medicines convenient in Bangladesh. Enables medicine exploration, real-time pricing and stock lookup, cart management, and order tracking.",
      tags: ["Healthcare", "E-Commerce", "Order Tracking", "Web System"],
      image: "/assets/neoventis.png",
      github: "https://github.com/faysulahmed14-design",
      live: "#contact",
      featured: true
    },
    {
      id: "c-detective",
      title: "C-Detective",
      category: "Forensics & System Application",
      description: "Terminal-based criminal investigation software built in C. Analyzes criminal case files, validates input, manages question banks, and profiles suspects through robust C file handling.",
      tags: ["C Programming", "File Handling", "Data Structures", "CLI"],
      image: "",
      github: "https://github.com/faysulahmed14-design",
      live: "#contact",
      featured: false
    },
    {
      id: "obstacle-robot",
      title: "Obstacle Avoiding Robot",
      category: "Robotics & Embedded Systems",
      description: "Autonomous obstacle avoidance robotic vehicle constructed with an Arduino microcontroller, 3 specialized sensors (Light, Ultrasonic, IR), and 2 motor drivers for collision-free navigation.",
      tags: ["Arduino", "Embedded C++", "Ultrasonic Sensor", "Hardware"],
      image: "/assets/robot.jpg",
      github: "https://github.com/faysulahmed14-design",
      live: "#contact",
      featured: true
    }
  ] as Project[],

  research: [
    {
      title: "Early Prediction of Diabetes Risk Using Machine Learning",
      domain: "Healthcare AI Research",
      description: "Developing a machine learning-based framework to predict diabetes risk at an early stage using commonly available patient biometric metrics, facilitating timely clinical screening and preventative intervention.",
      tags: ["Machine Learning", "Healthcare Analytics", "Early Screening", "Predictive Modeling"]
    },
    {
      title: "A Machine Learning Approach to Forecasting Demand, Supply, and Consumption Patterns",
      domain: "Decision Science Research",
      description: "Developing an ML-based forecasting framework that models dynamic demand and consumption trends from historical datasets to improve supply chain accuracy and data-driven inventory planning.",
      tags: ["Time-Series Analysis", "Supply Chain", "Consumption Modeling", "Decision Science"]
    }
  ] as ResearchItem[],

  achievements: [
    {
      title: "Global Model FAO Scholarship 2026",
      detail: "International scholarship recognition for academic excellence & leadership potential.",
      icon: "trophy"
    },
    {
      title: "World Future Energy Summit 2027",
      detail: "Selected participant for global energy summit and clean technology forum.",
      icon: "globe"
    },
    {
      title: "Senior Patrol Leader (SPL) — Bangladesh Scouts",
      detail: "Led unit of 100+ scouts, organized multiple camps & jamborees across schools & universities.",
      icon: "award"
    },
    {
      title: "DIU Code Trap Programming Contest (Spring-25)",
      detail: "Competitive programming contest participant & Event Volunteer for Spring-26.",
      icon: "code"
    },
    {
      title: "ICPC Regional Contest 2024 Volunteer",
      detail: "Coordinated logistical and team operations during the December 07, 2024 regional contest.",
      icon: "handshake"
    },
    {
      title: "Future Leader Bootcamp: Social Business & AI",
      detail: "Intensive leadership, social entrepreneurship and artificial intelligence training by SBSF.",
      icon: "rocket"
    },
    {
      title: "10th Bangladesh & 3rd SAANSO Scout Jamboree",
      detail: "Jotajoti Jamboree & national scouting distinctions for camp execution and service.",
      icon: "tent"
    },
    {
      title: "Typing Titans — DIU SEC",
      detail: "High-speed and accuracy distinction by DIU Software Engineering Club.",
      icon: "keyboard"
    },
    {
      title: "Active Club Memberships (DIU)",
      detail: "Software Engineering Club, Software Quality Assurance Club (SQAC), and Investment Club.",
      icon: "users"
    }
  ] as Achievement[],

  education: [
    {
      degree: "B.Sc in Software Engineering",
      institution: "Daffodil International University, Savar, Dhaka",
      period: "2022 — Present",
      result: "Average CGPA: 3.89 (up to 6th semester)",
      location: "Savar, Dhaka"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Dhaka Residential Model College, Dhaka",
      period: "Passing Year: 2023",
      result: "GPA: 5.00 / 5.00",
      location: "Dhaka"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Comilla Shikkha Board Model College, Comilla",
      period: "Passing Year: 2021",
      result: "GPA: 5.00 / 5.00",
      location: "Comilla"
    }
  ] as EducationItem[],

  references: [
    {
      name: "Dr. Imran Mahmud",
      role: "Associate Professor & Head",
      institution: "Department of Software Engineering, Daffodil International University",
      email: "imranmahmud@daffodilvarsity.edu.bd"
    },
    {
      name: "MD. Selim Reza",
      role: "Assistant Professor",
      institution: "Department of Software Engineering, Daffodil International University",
      email: "selim.swe@diu.edu.bd",
      phone: "01719310512"
    }
  ] as ReferenceItem[]
};
