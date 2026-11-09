export const personalInfo = {
  name: "Karan Bhavsar",
  tagline: "Software Engineer",
  builds: [
    "full-stack web applications",
    "AI-powered products",
    "modern web experiences",
  ],
  bio: "Information Technology engineering student graduating in 2027 with a CGPA of 8.9/10. Full Stack Developer Intern with hands-on experience building web applications using React.js, Node.js, Express.js, and MongoDB.",
  bio2: "Developed projects integrating AI APIs, REST APIs, and database operations to address practical problems. Interested in developing innovative software solutions through analytical thinking, debugging, and clean, maintainable code.",
  email: "bhavsarkaran37@gmail.com",
  phone: "+91 9028560109",
  location: "Nashik, Maharashtra, India",
  linkedin: "https://linkedin.com/in/karan-bhavsar-a08866282",
  github: "https://github.com/Karanb1106",
  profileImage: "/profile.png",
  resume: "/Karan_Bhavsar.pdf",
};

export const stats = [
  { number: "3", label: "Projects Built" },
  { number: "8.9", label: "CGPA / 10" },
  { number: "1", label: "Internship" },
  { number: "5+", label: "Certifications" },
];

export const skills = {
  "Programming Languages": [
    { name: "C++", level: 80, icon: "⚙️" },
    { name: "C", level: 75, icon: "🔧" },
    { name: "JavaScript", level: 88, icon: "🌐" },
    { name: "Python (Basics)", level: 55, icon: "🐍" },
  ],
  Frontend: [
    { name: "React.js", level: 88, icon: "⚛️" },
    { name: "Next.js", level: 78, icon: "▲" },
    { name: "HTML5 & CSS3", level: 90, icon: "🎨" },
    { name: "Tailwind CSS", level: 82, icon: "💨" },
    { name: "Responsive Design", level: 85, icon: "📱" },
  ],
  Backend: [
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "Express.js", level: 83, icon: "⚡" },
    { name: "REST APIs", level: 87, icon: "🔗" },
    { name: "JWT Authentication", level: 78, icon: "🔐" },
    { name: "API Integration", level: 85, icon: "🔌" },
  ],
  "Database & Tools": [
    { name: "MongoDB", level: 85, icon: "🍃" },
    { name: "MySQL", level: 78, icon: "🗄️" },
    { name: "Git & GitHub", level: 87, icon: "📦" },
    { name: "VS Code", level: 92, icon: "💻" },
    { name: "Postman", level: 83, icon: "📮" },
  ],
};

export const techStack = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "JavaScript",
  "C++",
  "Tailwind CSS",
  "REST API",
  "JWT",
  "Git",
  "GitHub",
  "Postman",
  "VS Code",
  "HTML5",
  "CSS3",
  "OpenAI API",
  "Google Gemini API",
  "Razorpay",
];

export const projects = [
  {
    id: 1,
    title: "MockMentor AI",
    subtitle: "AI-Powered Interview Preparation Platform",
    description:
      "Developed a full-stack interview preparation platform that generates personalized interview questions and AI-powered feedback to support interview practice. Integrated OpenAI GPT-4o-mini for AI-generated responses and Razorpay to support payment-related workflows. Built REST API integrations between frontend and backend, connecting application logic with MongoDB for data management.",
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "OpenAI GPT-4o-mini",
      "Razorpay",
    ],
    github: "https://github.com/Karanb1106",
    live: null,
    featured: true,
    category: "Full Stack",
    gradient: "from-blue-500 to-violet-600",
  },
  {
    id: 2,
    title: "AI-Powered Code Reviewer",
    subtitle: "Intelligent Code Analysis Tool",
    description:
      "Built an AI-assisted code review application that analyzes submitted code and generates feedback on readability, code quality, performance, and maintainability. Implemented code submission, syntax highlighting, and Markdown-rendered feedback in a responsive React interface. Integrated the Google Gemini API through a Node.js and Express.js backend to process review requests and return AI-generated suggestions.",
    tech: [
      "MERN Stack",
      "Google Gemini API",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    github: "https://github.com/Karanb1106",
    live: null,
    featured: true,
    category: "AI/ML",
    gradient: "from-violet-500 to-pink-600",
  },
  {
    id: 3,
    title: "SmartURL",
    subtitle: "URL Shortener Application",
    description:
      "Developed a responsive URL-shortening application using reusable React components and dynamic routing. Structured frontend components and responsive layouts to support consistent navigation and a user-friendly experience across different screen sizes.",
    tech: ["Next.js", "React.js", "Tailwind CSS"],
    github: "https://github.com/Karanb1106",
    live: null,
    featured: true,
    category: "Frontend",
    gradient: "from-cyan-500 to-blue-600",
  },
];

export const experience = [
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "MainCrafts Technologies Pvt. Ltd.",
    location: "Remote",
    duration: "Jan 2026 – Feb 2026",
    description: [
      "Developed responsive full-stack web applications using React.js, Node.js, Express.js, and MongoDB.",
      "Built and integrated REST APIs, connecting frontend components with backend services and database operations.",
      "Debugged application workflows and implemented reusable components to improve code readability and maintainability.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    color: "blue",
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering",
    field: "Information Technology",
    institution:
      "MVPS's Karmaveer Baburao Ganpatrao Thakhare College of Engineering",
    location: "Nashik, Maharashtra",
    duration: "2023 – 2027",
    cgpa: "8.9/10",
    highlights: [
      "Coursework: C++, OOP, DBMS, SQL, Data Structures, Fundamental Programming Concepts",
      "Active in development of real-world full-stack projects using MERN stack",
      "Secured 22nd rank in CodeSprint final round of The CodeClash on Unstop",
    ],
  },
  {
    id: 2,
    degree: "Class XII (HSC)",
    field: "Science",
    institution: "Moolji Jaitha College",
    location: "Jalgaon, Maharashtra",
    duration: "2021 – 2023",
    cgpa: "63.83%",
    highlights: ["Higher Secondary Certificate in Science stream"],
  },
  {
    id: 3,
    degree: "Class X (SSC)",
    field: "Secondary Education",
    institution: "Sheth Lalji Narayanji Sarvajanik Vidyalaya",
    location: "Jalgaon, Maharashtra",
    duration: "2020 – 2021",
    cgpa: "92.60%",
    highlights: ["Strong academic foundation with 92.60% score"],
  },
];

export const achievements = [
  {
    id: 1,
    title: "CodeSprint – 22nd Rank",
    description:
      "Secured 22nd rank in the CodeSprint final round of The CodeClash competitive programming contest on Unstop.",
    icon: "🏆",
    year: "2024",
    color: "gold",
  },
  {
    id: 2,
    title: "LeetCode 50 Days Badge",
    description:
      "Earned the LeetCode 50 Days Badge for consistent coding practice and problem-solving dedication.",
    icon: "⚡",
    year: "2024",
    color: "orange",
  },
  {
    id: 3,
    title: "Full Stack Development – GFG",
    description:
      "Completed Full Stack Development certification through GeeksforGeeks SkillUp Nation program.",
    icon: "🌐",
    year: "2024",
    color: "green",
  },
  {
    id: 4,
    title: "EY AI Skills Passport",
    description:
      "Completed EY AI Skills Passport certification, demonstrating proficiency in AI tools and concepts.",
    icon: "🤖",
    year: "2026",
    color: "blue",
  },
  {
    id: 5,
    title: "McKinsey Forward Program",
    description:
      "Completed McKinsey.org Forward program focused on future-ready skills and professional development.",
    icon: "📈",
    year: "2025",
    color: "violet",
  },
  {
    id: 6,
    title: "IBM AI Ethics Certification",
    description:
      "Completed IBM Ethical Considerations for Generative AI certification from IBM.",
    icon: "🎓",
    year: "2025",
    color: "cyan",
  },
];
