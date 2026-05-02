import GridImg from '../assets/Grid.jpg';
import QuantumImg from '../assets/Quantum Design system.jpg';
import GradArenaImg from '../assets/GradArena.jpg';
import HireSyncImg from '../assets/HireSync.png';
// import SmartAIHRImg from '../assets/SmartAIHR.png';
// import KrishitantrickImg from '../assets/Krishitantrick.png';

export const projects = [
    {
        id: 1,
        image: GridImg,
        title: "The Grid",
        category: "Product Design • AI Ops",
        tagline: "The Future of Agency & Enterprise Operations",
        description: "A scalable platform that automates the entire lifecycle of a project, from AI-driven scoping to automated team allocation.",
        role: "Lead Product Designer",
        timeline: "6 Months",
        goal: "Operational Efficiency",
        challenge: "As organizations scale, operational efficiency often collapses. Teams juggle disconnected tools like Jira and Slack, leading to 'friction at scale' and massive losses in billable hours due to context switching.",
        solution: "We built a unified ecosystem where communication happens inside the task context. The Grid features an AI Scoping Engine for profitability and an Intelligent Bandwidth Allocation system to match tasks to skillsets in real-time.",
        features: [
            { title: "AI Scoping Engine", description: "Automatically distinguishes between In-Scope and Out-of-Scope tasks based on client plans." },
            { title: "Intelligent Allocation", description: "Matches tasks to the right people based on skill sets and real-time bandwidth." },
            { title: "Contextual Unity", description: "Integrated chat threads per task to eliminate the productivity tax of app-switching." }
        ],
        impact: [
            "35% Efficiency Boost in team workflows",
            "Zero Scoping Errors via automated AI scoping",
            "92% Team Utilization across the organization"
        ],
        link: "https://www.figma.com/proto/SFp3cT2KQ3c9Hhx30Y0OhV/Untitled?page-id=0%3A1&node-id=96-22"
    },
    {
        id: 2,
        image: QuantumImg,
        title: "Quantum Design System",
        category: "Design Systems • Infrastructure",
        tagline: "Scaling Design with Atomic Precision",
        description: "A high-performance design foundation created to ensure consistency, speed, and clarity across a multi-product ecosystem.",
        role: "Design System Lead",
        timeline: "Ongoing",
        goal: "Scale & Consistency",
        challenge: "As the product suite grew, design debt started piling up. Every team was building components from scratch, leading to a 40% variance in visual styles and doubling developer implementation time.",
        solution: "We developed Quantum—a token-first architecture that serves as a single source of truth. It uses semantic design tokens and an atomic component library to ensure pixel-perfect consistency across 5+ products.",
        features: [
            { title: "Semantic Tokens", description: "A naming system that allowed launching Dark Mode across the entire suite in just 3 days." },
            { title: "Atomic Library", description: "60+ foundational components that are fully responsive and WCAG compliant." },
            { title: "Design-to-Code Sync", description: "Documentation that syncs directly with Figma variables for perfect alignment." }
        ],
        impact: [
            "70% Faster Development for new features",
            "100% Visual Consistency across the ecosystem",
            "Accessibility First (AA Standards met platform-wide)"
        ],
        link: "https://www.figma.com/proto/SFp3cT2KQ3c9Hhx30Y0OhV/Portfolio?page-id=0%3A1&node-id=100-193"
    },
    {
        id: 3,
        image: GradArenaImg,
        title: "GradArena",
        category: "EdTech • AI Assessment",
        tagline: "Empowering the Next Generation of Talent",
        description: "An AI-based proctored assessment platform designed to conduct secure, scalable online tests for students and graduates.",
        role: "Product Designer",
        timeline: "4 Months",
        goal: "Secure Scalability",
        challenge: "Traditional assessment methods were vulnerable to cheating and difficult to scale for thousands of students simultaneously. The experience was often stressful and non-intuitive.",
        solution: "We built a secure, AI-proctored environment that prioritizes the student experience. The platform features a clean, focused assessment interface and a robust dashboard for institutions to manage results at scale.",
        features: [
            { title: "AI Proctoring", description: "Secure, real-time monitoring to ensure integrity without being intrusive." },
            { title: "Focused UI", description: "Minimalist assessment interface to help students stay concentrated." },
            { title: "Institution Dashboard", description: "Comprehensive reporting and analytics for high-volume recruitment." }
        ],
        impact: [
            "50% Faster Student Onboarding",
            "99.9% Integrity Rate in proctored sessions",
            "Reduced Stress Levels reported in user testing"
        ],
        link: "https://www.figma.com/proto/SFp3cT2KQ3c9Hhx30Y0OhV/Portfolio?page-id=0%3A1&node-id=110-399"
    },
    /* 
    {
        id: 4,
        image: HireSyncImg,
        title: "HireSync",
        category: "Product Design • AI Recruitment",
        tagline: "Revolutionizing Hiring with AI Intelligence",
        description: "An AI-driven SaaS platform designed to optimize complex recruitment workflows, from candidate sourcing to final selection.",
        role: "UI/UX Designer",
        timeline: "4 Months",
        goal: "Optimize recruitment speed and candidate quality.",
        challenge: "Recruiters are overwhelmed by volume and lack tools to quickly identify top-tier talent.",
        solution: "Built an AI-assisted dashboard that ranks candidates based on skill compatibility and cultural fit.",
        features: [
            { title: "AI Candidate Ranking", description: "Automatically rank candidates based on deep analysis of skills and experience." },
            { title: "Automated Sourcing", description: "Scan multiple platforms to find potential candidates that match the job profile." }
        ],
        impact: [
            "40% reduction in time-to-hire",
            "Improved candidate quality scores",
            "Streamlined collaborative hiring process"
        ],
        link: "#"
    } 
    */
];


