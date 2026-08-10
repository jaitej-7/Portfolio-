import GridImg from '../assets/Grid.jpg';
import QuantumImg from '../assets/Quantum Design system.jpg';
import QuantumVarsImg from '../assets/Variables setup in Figma Console.png';
import QuantumComponentsImg from '../assets/omponetsitems.png';
import GradArenaImg from '../assets/GradArena.jpg';
import HireSyncImg from '../assets/HireSync.png';
import HireSyncMockupImg from '../assets/hiresync_mockup.png';
import HireSyncEmpathyMap from '../assets/hiresync_empathy_map.jpg';
import HireSyncWireframes from '../assets/hiresync_wireframes.jpg';
import Quantum3TierImg from '../assets/3-tire-arichiture-design-system-figma.png';
import QuantumComponentsSetupImg from '../assets/quantum_components_setup.png';
import QuantumUIAuditImg from '../assets/UI-audit-inconsistency-UX-Design.png';
// import SmartAIHRImg from '../assets/SmartAIHR.png';
// import KrishitantrickImg from '../assets/Krishitantrick.png';
import GridMockImg from '../assets/grid_dashboard_mock.png';

export const projects = [
    {
        id: "quantum",
        image: QuantumImg,
        title: "Quantum Design System",
        category: "Design Systems • Infrastructure",
        tagline: "Scaling Design with Atomic Precision",
        description: "A high-performance design foundation created to ensure consistency, speed, and clarity across a multi-product ecosystem.",
        role: "Design System Lead",
        timeline: "Ongoing",
        goal: "Scale & Consistency",
        challenge: `Context & The Core Problem:
As our product suite expanded, design debt accumulated rapidly. Teams were building components in silos, leading to a <mark>40% variance in visual styles</mark> and doubling developer implementation time due to fragmented user experiences.

The Goal:
Establish a definitive centralized source of truth—a design system that is robust, highly organized, and natively supports <mark>multi-platform responsiveness and future multi-brand scalability</mark>.

Target Users & Pain Points:
• Designers: High cognitive load from constantly recreating UI elements and managing inconsistencies.
• Developers: Frustrated by vague specifications, lack of reusable code, and bottlenecked handoff processes.
• End Users: Suffer from jarring transitions and inconsistent UI patterns across the platform.

UX & Technical Challenges:
• Architecting a massive variable system that scales seamlessly without becoming overly complex.
• Ensuring <mark>strict WCAG AA compliance</mark> across a library of over 2,000 components.`,
        solution: `The Process & Architecture:
I developed the Quantum Design System from the ground up, heavily leveraging Figma's advanced variables, modes, and component properties to create a bulletproof foundation.

1. Variable Architecture & Token Strategy:
Implemented a strict multi-tier token architecture comprising <mark>300 interconnected variables across 4 collections</mark>: Brands (142), Alias (79), Mapping (39), and Responsive (40).

2. Typography & Spatial System:
Established a fluid typographic scale mapped directly to variables (h1-h6, body sm/md/lg). Built a rigid mathematical spatial scale ranging from 1px to 64px, categorizing spatial relationships semantically to eliminate guesswork.

3. Atomic Component Library:
Scaled the system to an impressive <mark>2,288 components</mark> meticulously organized into <mark>916 component sets</mark>. I strictly adhered to atomic design principles, ensuring complex interactive components were built reliably from foundational atoms.

4. Responsive Layout Automation:
Utilized Figma Modes (Desktop, Tablet, Mobile) to fluidly adjust breakpoints, grids, margins, and gutters based on the frame context, automating responsive behavior for designers.`,
        decisions: `Key UX Decisions & Trade-offs:

1. Three-Tier Token Architecture:
Decision: Separated variables into Brands, Alias, and Mapping collections.
Why: While initially complex to set up, this separation means that <mark>implementing a new brand theme</mark> is now a matter of mapping variables, rather than redesigning components.

2. Semantic vs. Literal Naming:
Decision: Used semantic names (e.g., \`surface/primary\`, \`text/action\`) instead of literal hex values or color names.
Why: <mark>Semantic naming bridges the gap</mark> between design and development, ensuring intent is clear and scalable.

3. Strict Component Properties:
Decision: Heavy reliance on boolean, text, and variant properties within Figma.
Why: Reduced the number of detached instances and <mark>forced designers to use the system</mark> as intended, maintaining consistency.`,
        placeholders: {
            challenge: `img:${QuantumUIAuditImg}`,
            solution: `img:${Quantum3TierImg}`,
            decisions: `img:${QuantumComponentsSetupImg}`
        },
        features: [
            { title: "Multi-Tier Variables", description: "300 variables across Brands, Alias, Mapping, and Responsive collections for ultimate scalability." },
            { title: "Massive Component Library", description: "2,288 components and 916 variants, all built with atomic precision." },
            { title: "Automated Responsiveness", description: "Figma modes drive fluid adjustments for Desktop, Tablet, and Mobile layouts." },
            { title: "Semantic Token System", description: "Design intent is hardcoded into the naming conventions, drastically reducing handoff friction." },
            { title: "Accessibility Built-In", description: "Color contrast and sizing inherently meet WCAG AA standards across the ecosystem." },
            { title: "Dynamic Iconography", description: "A robust set of functional icons mapped perfectly to tokenized color states." }
        ],
        showcase: [
            QuantumVarsImg,
            QuantumComponentsImg
        ],
        impact: [
            "70% Faster Development for new features",
            "100% Visual Consistency across the ecosystem",
            "AA WCAG Standards met platform-wide",
            "30% Reduction in developer handoff time"
        ],
        learnings: `Impact & Metrics:
• Achieved <mark>70% faster development</mark> for new features and product updates.
• Guaranteed <mark>100% visual consistency</mark> across 5+ independent products.
• Centralizing 2,200+ components reduced designer handoff time by <mark>30%</mark>.

Reflections & Key Takeaways:
1. <mark>Architecture is Everything:</mark> Investing time upfront to design a rigorous 3-tier variable system saved hundreds of hours down the line when implementing new themes.
2. <mark>Adoption Requires Education:</mark> A design system is useless if teams don't leverage it. Creating comprehensive documentation and hosting integration workshops proved just as critical as building the components themselves.
3. <mark>Developer Alignment:</mark> Bringing developers into the token naming conversation early ensured that Figma variables mirrored the actual CSS/React architecture perfectly.

What I'd do differently:
If I were to start over, I would have integrated a design token export plugin earlier in the process to automate the sync between Figma and our GitHub repositories, rather than relying on manual updates during the initial rollout phase.`,
        link: "https://www.figma.com/proto/SFp3cT2KQ3c9Hhx30Y0OhV/Portfolio?page-id=0%3A1&node-id=100-193"
    },
    {
        id: "hiresync",
        image: HireSyncMockupImg,
        title: "G A HireSync",
        category: "Enterprise SaaS • AI Recruitment",
        tagline: "Designing an AI-Powered Recruitment Management System for Faster, Smarter Hiring",
        description: "An AI-driven SaaS platform designed to optimize complex recruitment workflows, from candidate sourcing to final selection.",
        role: "Product Designer / UI & UX Designer",
        timeline: "12 Weeks",
        goal: "Design an AI-Powered Recruitment Management System for Faster, Smarter Hiring",
        challenge: `Context & The Core Problem:
Hiring is inherently human, yet modern recruiters spend <mark>60% of their time on robotic tasks</mark>—sifting through spreadsheets, navigating disconnected ATS systems, and managing chaotic email threads. 

The Goal:
Design a centralized, AI-powered Recruitment Management System that augments human decision-making rather than replacing it, <mark>drastically reducing cognitive load</mark> and time-to-hire.

Target Users & UX Pain Points:
• Recruiters (Primary): High cognitive load from <mark>constant context-switching</mark>. They suffer from "resume fatigue" and dread manual data entry.
• Hiring Managers (Secondary): Need quick, scannable insights. Frustrated by the lack of transparency in the hiring pipeline.
• Candidates (Tertiary): Suffer from black-hole experiences (no feedback, long wait times).

UX Challenges:
• Designing an interface that handles massive data tables without overwhelming the user.
• Integrating AI in a way that feels like a <mark>"co-pilot"</mark> rather than an untrustworthy "black box."`,
        solution: `The UX Process & Discovery:
I led the end-to-end design process, collaborating closely with PMs and Engineering. We started with <mark>generative research</mark> to map the recruiter's journey.

1. Generative Research & Journey Mapping:
Conducted <mark>12 semi-structured interviews</mark> with agency recruiters. We mapped their daily workflow and discovered that the biggest drop-off in efficiency occurred during the "Screening" phase due to scattered data.

2. Information Architecture (IA):
Enterprise tools often fail due to poor navigation. I conducted an <mark>open card sorting session</mark> to reorganize the platform’s IA. We flattened the hierarchy, ensuring that Pipeline, Candidates, and AI Tools were accessible within one click from the Dashboard.

3. Wireframing & Rapid Prototyping:
Created low-fidelity wireframes to test layout structures for the Candidate Pipeline. We explored various list views and high-density data tables to accommodate bulk actions.

4. Usability Testing & Iteration:
Tested mid-fi prototypes with 5 recruiters. 
Insight: Users ignored the standalone "AI Insights" tab. 
Pivot: We shifted to a <mark>"Contextual AI"</mark> model, embedding AI recommendations directly inside the candidate profile card.`,
        decisions: `Key UX Decisions & Trade-offs:

1. High-Density Data Tables over Kanban:
Decision: We opted for a <mark>powerful, high-density Table View</mark> as the primary pipeline interface.
Why: While Kanban is visually appealing for stages, enterprise recruiters handle massive candidate pools. We found that data tables with robust filtering, sticky headers, and inline bulk actions drastically improved sorting speed for power users.

2. Transparent AI (Building Trust):
Decision: AI skill-match scores are accompanied by a "Why this score?" tooltip showing the exact extracted keywords.
Why: Recruiters won't trust an AI black box. <mark>Exposing the AI's reasoning</mark> increased feature adoption by 40%.

3. The Design System (Accessibility First):
Decision: Built a strict atomic design system using Figma variables.
Why: <mark>Enterprise dashboards demand high data density</mark>. We used Inter for legibility, ensured WCAG AA compliance for all text contrasts, and established a consistent spacing system (4pt grid) to make dense tables readable.`,
        placeholders: {
            challenge: `img:${HireSyncEmpathyMap}`,
            solution: "[Placeholder: Current vs. Proposed User Journey Map]",
            decisions: `img:${HireSyncWireframes}`
        },
        features: [
            { title: "Contextual AI Copilot", description: "Embedded AI insights directly into the resume viewer to prevent context switching, rather than forcing users to a separate AI dashboard." },
            { title: "High-Density Pipeline Tables", description: "Engineered robust data tables with advanced filtering, sorting, and inline editing, allowing recruiters to manage hundreds of candidates efficiently without pagination fatigue." },
            { title: "WCAG AA Accessible UI", description: "Ensured strict adherence to WCAG AA contrast standards across all complex data visualizations and enterprise dashboards." },
            { title: "Smart Resume Parsing UI", description: "Created a split-screen view where the original PDF sits alongside the AI-extracted data, allowing recruiters to verify AI accuracy and build trust." },
            { title: "Progressive Disclosure Dashboard", description: "Used progressive disclosure to surface only the most critical KPIs on the home dashboard, hiding complex reporting behind drill-down interactions." },
            { title: "Figma Component Library", description: "Architected a scalable, token-based design system in Figma to hand off pixel-perfect, reusable components to the engineering team." }
        ],
        useCases: [
            {
                title: "Simplifying the Candidate Pipeline",
                complexContext: "Enterprise recruiters often juggle 15+ open tabs just to cross-reference candidate resumes, technical scores, and email threads for a single role. The cognitive load was massive.",
                simpleSolution: "I designed a split-screen High-Density Pipeline Table with an embedded Contextual AI panel. Now, recruiters can view the candidate's resume, AI skill-match breakdown, and action items all within a single, unified scrollable view—eliminating tab fatigue.",
                image: "placeholder: [Pipeline Before/After UI]" // User requested both placeholders and real images
            },
            {
                title: "Designing for AI Trust",
                complexContext: "Our initial testing revealed a critical problem: recruiters didn't trust the AI. They saw a '95% Match' score but assumed it was a flawed black-box algorithm and ignored it.",
                simpleSolution: "I redesigned the AI scoring component to prioritize transparency. By adding a 'Why this score?' interaction that highlights exact keyword matches directly on the candidate's parsed resume, AI feature adoption increased by 40%.",
                image: "placeholder: [AI Trust UI Component]"
            }
        ],
        showcase: [
            "placeholder: [Design System Snippet: Token architecture & accessibility contrast checks]",
            "placeholder: [Final UI: The High-Density Pipeline Data Table with Contextual AI]",
            "placeholder: [Final UI: The Dashboard with Progressive Disclosure KPIs]"
        ],
        impact: [
            "40% Reduction in time-to-screen",
            "85% Positive SUS Usability Score",
            "30% Fewer UI bugs post-handoff",
            "40% Increase in AI feature adoption"
        ],
        learnings: `Impact & Metrics:
• <mark>40% reduction</mark> in time-to-screen per candidate.
• <mark>85% positive SUS</mark> (System Usability Scale) score during final beta testing.
• Successfully handed off a robust Design System to engineering, <mark>reducing UI bugs by 30%</mark>.

Reflections & Key Takeaways:
1. <mark>Enterprise UX is about Density & Clarity:</mark> Consumer apps favor whitespace; enterprise apps demand data density. The challenge was balancing scannability with comprehensive data.
2. <mark>Trust is the UX of AI:</mark> If users don't understand how the AI generated a result, they won't use it. Designing for AI requires designing for transparency.
3. Cross-Functional Collaboration: Working closely with engineering early on helped us understand technical constraints (like API load times for resume parsing) and design skeleton loaders to improve perceived performance.

What I'd do differently:
If I had more time, I would have conducted deeper longitudinal testing (diary studies) to see how recruiters use the tool over a full month-long hiring cycle, rather than just task-based usability testing.`
    },
    {
        id: "gradarena",
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
    {
        id: "the-grid",
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
        placeholders: {
            challenge: `comingsoon_img:${GridMockImg}`,
            solution: `comingsoon_img:${GridMockImg}`,
            decisions: `placeholder: [Final Architecture]`
        },
        link: "https://www.figma.com/proto/SFp3cT2KQ3c9Hhx30Y0OhV/Untitled?page-id=0%3A1&node-id=96-22"
    }
];
