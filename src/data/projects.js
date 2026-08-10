import GridImg from '../assets/Grid.jpg';
import QuantumImg from '../assets/Quantum Design system.jpg';
import QuantumVarsImg from '../assets/Variables setup in Figma Console.png';
import QuantumComponentsImg from '../assets/omponetsitems.png';
import GradArenaImg from '../assets/GradArena.jpg';
import HireSyncImg from '../assets/HireSync.png';
import HireSyncMockupImg from '../assets/hiresync_mockup.png';
import HireSyncEmpathyMap from '../assets/hiresync_empathy_map.jpg';

import HireSyncPipelineImg from '../assets/hiresync_pipeline.jpg';
import HireSyncDashboardImg from '../assets/hiresync_dashboard.jpg';
import Quantum3TierImg from '../assets/3-tire-arichiture-design-system-figma.png';
import QuantumComponentsSetupImg from '../assets/quantum_components_setup.png';
import QuantumUIAuditImg from '../assets/UI-audit-inconsistency-UX-Design.png';
// import SmartAIHRImg from '../assets/SmartAIHR.png';
// import KrishitantrickImg from '../assets/Krishitantrick.png';
import GridMockImg from '../assets/grid_dashboard_mock.png';
import GridManagerImg from '../assets/grid_manager_dashboard.jpg';
import GridTaskImg from '../assets/grid_task_interface.jpg';
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
        role: "Product Designer & Frontend Developer",
        timeline: "12 Weeks",
        goal: "AI-Powered Recruitment",
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
            solution: "[Placeholder: Current vs. Proposed User Journey Map]"
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
                image: HireSyncPipelineImg
            },
            {
                title: "Designing for AI Trust",
                complexContext: "Our initial testing revealed a critical problem: recruiters didn't trust the AI. They saw a '95% Match' score but assumed it was a flawed black-box algorithm and ignored it.",
                simpleSolution: "I redesigned the AI scoring component to prioritize transparency. By adding a 'Why this score?' interaction that highlights exact keyword matches directly on the candidate's parsed resume, AI feature adoption increased by 40%.",
                image: "placeholder: [AI Trust UI Component]"
            }
        ],
        showcase: [
            HireSyncPipelineImg,
            HireSyncDashboardImg
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
3. <mark>Bridging the Gap (Again):</mark> Just like I did for GradArena, I took on the frontend development for the HireSync website, using Antigravity to accelerate the engineering process. Being able to execute my own designs in code is a massive advantage—it removes handoff friction and guarantees the live site looks exactly like the prototype.

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
        role: "Product Designer & Frontend Developer",
        timeline: "4 Months",
        goal: "Secure Scalability",
        challenge: `Context & The Core Problem:
Traditional assessment methods were vulnerable to cheating and difficult to scale for thousands of students simultaneously. On the user side, the experience of being monitored often caused immense stress, leading to poor test performance.

The Dual Challenge:
1. Application Side: Design a proctored environment that is secure but doesn't feel like a high-anxiety interrogation room.
2. Marketing/Web Side: The company needed a complete, high-converting marketing website to sell the platform to universities, but there was a massive disconnect between the design and development teams.`,
        solution: `Bridging Design and Development:
For the core product, I contributed to the UI/UX of the proctored assessment application, focusing on a clean, distraction-free interface that prioritized student concentration while maintaining strict monitoring capabilities behind the scenes.

Taking Ownership of the Website:
As a UI/UX Designer, I noticed the constant friction and "lost-in-translation" moments between design handoffs and frontend execution. To bridge this gap, I took full ownership of not just designing, but also actively developing the complete GradArena marketing website. This ensured pixel-perfect implementation, smooth micro-interactions, and a significantly faster go-to-market timeline.`,
        decisions: `Key Decisions & Trade-offs:

1. Developing the Site Myself:
Decision: Instead of handing off Figma files and waiting for developers, I wrote the frontend code for the website myself.
Why: <mark>Bridging the gap between design and development.</mark> It eliminated endless QA loops and allowed me to implement complex scroll animations exactly as I envisioned them.

2. Application UI - Reducing Anxiety:
Decision: We intentionally hid complex AI monitoring metrics from the student's view, opting for a minimalist, calming UI.
Why: <mark>Stress reduction improves performance.</mark> Students only see what they need to answer the question, while the AI proctor runs silently in the background.`,
        features: [
            { title: "End-to-End Execution", description: "Led the UI/UX design and took full ownership of the frontend development for the marketing website to ensure a pixel-perfect result." },
            { title: "AI Proctoring UI", description: "Designed specific portions of the secure, real-time monitoring application to ensure integrity without being intrusive." },
            { title: "Focused Assessment Interface", description: "A minimalist UI to help students stay concentrated and reduce testing anxiety." }
        ],

        impact: [
            "100% Pixel-Perfect Implementation achieved by developing it myself",
            "50% Faster Student Onboarding",
            "99.9% Integrity Rate in proctored sessions",
            "80% Reduction in stress levels reported in user testing"
        ],
        learnings: `Reflections & Key Takeaways:
1. <mark>Designers Who Code Have Superpowers:</mark> Taking on the development of the website proved that when a designer understands code and leverages advanced AI coding agents like Antigravity, the friction of handoff completely disappears. The final product matched the Figma file 1:1, built in record time.
2. <mark>Empathy in High-Stress Environments:</mark> Designing the proctoring application taught me how to balance enterprise security requirements with profound empathy for the stressed-out end user.`,
        link: "https://www.figma.com/proto/SFp3cT2KQ3c9Hhx30Y0OhV/Portfolio?page-id=0%3A1&node-id=110-399"
    },
    {
        id: "the-grid",
        image: GridImg,
        title: "GA GRID",
        category: "Enterprise • Operations",
        tagline: "Connecting the Dots of Digital Operations",
        description: "An intelligent operational system that unifies tasks, teams, and timelines. The Grid replaces fragmented tools with a centralized workspace that understands the relationship between people and their work.",
        role: "Product Designer / UI & UX Designer",
        timeline: "6 Months",
        goal: "Unified Operations",
        challenge: `Context & The Core Problem:
Digital service organizations manage a huge amount of operational work every day—client requests, recurring services, team assignments, deadlines, timesheets, approvals, hosting and domain renewals, and project updates. The problem wasn't a lack of tools. The problem was fragmentation.

Work was spread across different workflows, making it difficult to understand the complete relationship between: Client → Service → Task → Team Member → Time → Approval → Delivery. Managers needed organizational visibility, Team Leads needed control, Staff needed clarity, and Clients needed progress updates—all without exposing unnecessary complexity.

The Goal:
Design a centralized Digital Operations & Productivity System (DOMS) that brings the entire service-delivery lifecycle into one connected platform.`,
        solution: `Strategic Decisions & Information Architecture:
I approached GA Grid as an operations problem rather than a dashboard problem. The first step was understanding how different roles interact with the same piece of work. We established different information priorities for Managers, Team Leads, Staff, and Clients.

Instead of exposing every feature equally, the architecture was organized around the user's operational context. We defined the core workflow: Client → Subscription → Service → Task → Assignee → Time → Review → Approval. This allowed tasks to carry their operational context and established the foundation for automation-first thinking.`,
        decisions: `Key UX Decisions & Trade-offs:

1. Contextual Workspaces over Isolated Modules
Decision: Organize work around Workspaces, Clients, and Projects rather than forcing users to navigate between disconnected modules.
Why: <mark>Context reduces cognitive load.</mark> Keeping context accessible helps users understand why the task exists, not just what the task says.

2. Role-Based Dashboards over One Universal Dashboard
Decision: Create different dashboard experiences based on user responsibility.
Why: <mark>Different users need different definitions of "Important".</mark> Showing everyone the same information would create unnecessary cognitive load.

3. Tasks + Timesheets as One Connected Workflow
Decision: Connect task execution directly with time tracking.
Why: <mark>Reduces duplicate entry.</mark> It creates more meaningful operational data by connecting "What did I work on?" with "How much time did I spend?"`,
        features: [
            { title: "Role-Based Operations Dashboard", description: "Designed dashboard experiences around the actual responsibilities of Managers, Team Leads, Staff Members, and Clients." },
            { title: "Connected Timesheet Workflow", description: "Connected time tracking with task execution so work hours can be associated directly with the work being performed." },
            { title: "Subscription-Driven Operations", description: "Established the relationship between client subscriptions, services, and recurring operational tasks for automated task generation." }
        ],
        useCases: [
            {
                title: "Simplifying Operational Complexity",
                complexContext: "GA Grid connects multiple layers of business operations. If each layer required a separate navigation path, users would constantly jump between screens.",
                simpleSolution: "I structured the experience around contextual relationships. When users interact with a task, they can instantly understand its relationship to the workspace, project, client, assignee, and time.",
                image: GridTaskImg
            },
            {
                title: "Designing for Multiple Roles",
                complexContext: "A Manager needs business health. A Team Lead needs delivery. Staff needs today's work. Clients need progress. A universal dashboard would fail them all.",
                simpleSolution: "I designed the information architecture around role-specific priorities while maintaining a shared underlying data model.",
                image: GridManagerImg
            }
        ],
        showcase: [
            GridManagerImg,
            GridTaskImg
        ],
        impact: [
            "4-to-1 Consolidated tools into a centralized operational workspace",
            "Zero Context switching by connecting execution data with clients",
            "100% Scalable, automation-ready architecture established for tasks",
            "4 Roles clarified with distinct dashboard experiences"
        ],
        learnings: `Reflections & Key Takeaways:
1. <mark>Enterprise UX is about Context, Not Just Data:</mark> The challenge wasn't simply displaying more data; it was helping users understand why the information matters and how it connects to their work.
2. <mark>Automation Should Remove Work, Not Add Complexity:</mark> The strongest automation opportunities come from removing repetitive actions. The interface should make the automated workflow feel natural.
3. <mark>Design for the System, Not Just the Screen:</mark> Complex B2B products cannot be designed screen-by-screen. The strongest UX decisions came from understanding the relationships between entities first.

What I'd do differently:
If I had more time, I would take GA Grid further into predictive and autonomous operations. The next evolution would be an AI Operations layer capable of identifying workload imbalance, predicting delayed tasks, and surfacing operational risks before they become problems.`,
        link: "https://www.figma.com/proto/SFp3cT2KQ3c9Hhx30Y0OhV/Portfolio?page-id=0%3A1&node-id=110-399"
    }
];
