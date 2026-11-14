// All portfolio content lives here. Edit this file to update the site.

const GITHUB = "https://github.com/shreyamhetre";

export const profile = {
  name: "Shreya Mhetre",
  role: "AI Engineer",
  location: "Pune, India",
  email: "shreyamhetre2002@gmail.com",
  phone: "+91 9168426159",
  github: GITHUB,
  linkedin: "https://linkedin.com/in/shreya-mhetre-768a79246",
  resume: `${process.env.PUBLIC_URL}/resume.pdf`,
  typed: [
    "Building production LLM systems",
    "Agentic RAG · Multi-agent orchestration",
    "Full-stack AI products on AWS",
    "From prototype to production",
  ],
  summary:
    "AI Engineer with 2.5+ years of experience building production LLM systems and full-stack AI products, including agentic RAG pipelines, multi-agent orchestration with CrewAI, and cloud-native platforms on AWS.",
};

export const stats = [
  { value: "2.5+", label: "Years building" },
  { value: "30", label: "Markets served" },
  { value: "40K", label: "Rows per ETL job" },
  { value: "4", label: "AI products shipped" },
];

export const experience = {
  company: "Equations Work",
  place: "Pune, India",
  roles: [
    { title: "AI Engineer", period: "Aug 2025 – Present" },
    { title: "Software Engineer", period: "Mar 2024 – Jun 2025" },
    { title: "Project Intern", period: "Jun 2023 – Mar 2024" },
  ],
  projects: [
    {
      name: "Agentic Yoda",
      subtitle: "AI Compliance Platform",
      stack: ["Next.js", "Python", "PostgreSQL", "pgvector", "LangChain", "CrewAI", "Gemini API"],
      points: [
        "Built a RAG-based compliance tool that compares internal SOPs against federal regulations and automatically identifies compliance gaps.",
        "Used LangChain to build the document ingestion and retrieval pipeline, storing embeddings in PostgreSQL with pgvector and generating compliance reports using Gemini.",
        "Added a CrewAI multi-agent layer with Verifier and Refiner agents to validate and improve the generated reports.",
      ],
    },
    {
      name: "Prime Video Affiliate Marketing Platform",
      subtitle: "Owned end to end · 30 markets",
      stack: ["Next.js", "Node.js", "Express.js", "AWS", "Docker", "OAuth", "JWT"],
      points: [
        "Migrated the React.js frontend to Next.js with Server-Side Rendering to improve SEO, and maintained the Node.js backend.",
        "Built REST APIs serving web and mobile clients using an MVC architecture in Node.js and Express.js.",
        "Designed AWS Glue ETL jobs that validate and transform up to 40K rows of raw content data into structured JSON for region-specific rendering.",
        "Built an event-driven push notification system with S3, Lambda, SQS and Firebase, plus Lambda-based on-demand ZIP generation for secure asset downloads.",
        "Implemented OAuth login, JWT partner validation, CloudFront geo-routing and caching, Google Tag Manager tracking, and AWS Secrets Manager.",
      ],
    },
    {
      name: "Prophesizer",
      subtitle: "Financial Forecasting & Visualization",
      stack: ["Python", "Flask", "Neo4j", "Crawl4AI", "Babylon.js", "WebXR", "MediaPipe"],
      points: [
        "Built an AI platform that analyzes newspaper articles, maps them to affected industries and listed companies in a knowledge graph, and predicts potential stock market impact.",
        "Used web search and Crawl4AI to gather related coverage, then LLM prompts to extract entities and build the Neo4j knowledge graph.",
        "Built an interactive 3D graph visualization in Babylon.js with hand-gesture and voice-controlled navigation.",
      ],
    },
    {
      name: "Image Annotation Tool & ML Marketplace",
      subtitle: "AI-assisted labeling",
      stack: ["React.js", "Flask", "YOLOv8", "Grounding DINO", "SAM"],
      points: [
        "Developed a web-based annotation tool with image upload and XML / TXT export, increasing annotation efficiency by 30%.",
        "Integrated YOLOv8, Grounding DINO and Segment Anything Model for AI-assisted auto-annotation, reducing manual labeling effort.",
      ],
    },
  ],
};

// Replace `link` values with the exact repo URLs if they differ.
export const projects = [
  {
    name: "BrainBase",
    tagline: "Enterprise Knowledge AI Assistant",
    period: "Oct – Nov 2026",
    featured: true,
    stack: ["Python", "FastAPI", "LangGraph", "PostgreSQL", "Next.js", "TypeScript", "OpenAI", "MCP", "Langfuse", "Docker"],
    points: [
      "RAG assistant with role-based access control that answers with citations across the handbook, Slack, GitLab issues & wikis, and uploaded documents, using hybrid semantic + keyword search.",
      "LangGraph orchestration that routes each message to chat, knowledge lookup, action or clarification, and rewrites follow-ups to stand alone.",
      "Evidence verification step (Jev) checks that sources support an answer before generating one; confirmed actions like creating GitLab issues or Slack posts run via MCP with audit logging.",
    ],
    links: [{ label: "GitHub", href: `${GITHUB}?tab=repositories` }],
  },
  {
    name: "PromptDock",
    tagline: "Open-source prompt versioning & LLM evaluation",
    period: "Oct – Nov 2026",
    featured: true,
    stack: ["Python", "FastAPI", "PostgreSQL", "React", "Docker", "GitHub Actions"],
    points: [
      "Published on PyPI and Docker with immutable prompt versions, dev / preprod / prod environment tags, and one-click rollback.",
      "Python SDK, REST API, CLI, React dashboard, and an MCP server so AI agents can manage prompts directly, with evaluation gates before production promotion.",
      "Automated tests and a GitHub Actions pipeline across multiple Python and PostgreSQL versions that publishes releases automatically.",
    ],
    links: [
      { label: "GitHub", href: `${GITHUB}?tab=repositories` },
      { label: "PyPI", href: "https://pypi.org/search/?q=promptdock" },
    ],
  },
  {
    name: "AI Research Assistant",
    tagline: "Agentic RAG for research papers",
    period: "Apr – Jun 2025",
    stack: ["Python", "LangChain", "CrewAI", "Gemini API", "pgvector", "React.js", "Docker"],
    points: [
      "CrewAI agents collaborate on document parsing, retrieval and academic query resolution.",
      "Multi-turn Q&A, summarization, MCQ generation and pgvector semantic search for related work, containerized with Docker.",
    ],
    links: [{ label: "GitHub", href: `${GITHUB}?tab=repositories` }],
  },
  {
    name: "SmartCue",
    tagline: "AI task management system",
    period: "May – Jul 2025",
    stack: ["Python", "FastAPI", "PostgreSQL", "Gemini API", "React.js", "Material UI"],
    points: [
      "Unifies GitHub Issues, a calendar and an AI assistant through a custom MCP server.",
      "AI-driven task creation with Gemini and real-time GitHub issue sync via webhooks.",
      "Responsive React frontend with a custom meeting calendar and dynamic event styling.",
    ],
    links: [{ label: "GitHub", href: `${GITHUB}?tab=repositories` }],
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "JavaScript", "SQL"] },
  { group: "GenAI & LLM Systems", items: ["LangChain", "LangGraph", "CrewAI", "Agentic AI", "RAG", "MCP", "Prompt Engineering", "Embeddings", "Gemini API", "OpenAI API", "Ollama"] },
  { group: "Frameworks", items: ["React.js", "Next.js", "Node.js", "Express.js", "FastAPI", "Flask"] },
  { group: "Vector Search & Data", items: ["pgvector", "PostgreSQL", "Neo4j", "Semantic Search", "Vector Indexing"] },
  { group: "Computer Vision", items: ["YOLOv8", "SAM", "Grounding DINO", "MediaPipe", "OpenCV"] },
  { group: "Cloud & DevOps", items: ["AWS S3", "Lambda", "Glue", "SQS", "CloudFront", "Secrets Manager", "Docker", "Jenkins", "CI/CD", "Nginx", "ETL"] },
  { group: "Tools & Other", items: ["Git", "REST APIs", "WebSocket", "Firebase", "OAuth", "JWT", "SSR", "Babylon.js", "WebXR"] },
];

export const education = {
  school: "Savitribai Phule Pune University",
  degree: "Bachelor of Engineering in Computer Engineering",
  period: "Aug 2020 – May 2024",
  place: "Pune, India",
};
