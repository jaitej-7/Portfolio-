import GridImg from '../assets/Grid.jpg';
import QuantumImg from '../assets/Quantum Design system.jpg';
import QuantumVarsImg from '../assets/Variables setup in Figma Console.png';
import QuantumComponentsImg from '../assets/omponetsitems.png';
import GradArenaImg from '../assets/GradArena.jpg';
import HireSyncMockupImg from '../assets/hiresync_mockup.png';
import HireSyncEmpathyMap from '../assets/hiresync_empathy_map.jpg';

import HireSyncWireframesImg from '../assets/hiresync_wireframes.jpg';
import Case1AfterImg from '../assets/hiresync/Case-1 after.png';
import Case2Img from '../assets/hiresync/Case 2.png';
import Case3Img from '../assets/hiresync/Case-3.png';
import Case4Img from '../assets/hiresync/Case 04.png';
import AITrustImg from '../assets/hiresync/Designing for AI Trust.png';
import WebsiteImg from '../assets/hiresync/Website.png';
import Quantum3TierImg from '../assets/3-tire-arichiture-design-system-figma.png';
import QuantumComponentsSetupImg from '../assets/quantum_components_setup.png';
import QuantumUIAuditImg from '../assets/UI-audit-inconsistency-UX-Design.png';
// import SmartAIHRImg from '../assets/SmartAIHR.png';
// import KrishitantrickImg from '../assets/Krishitantrick.png';
export const projects = [
    {
        id: "quantum",
        image: QuantumImg,
        title: "Quantum Design System",
        category: "Design Systems • Infrastructure",
        tagline: "Building the single source of truth for design — scaling 5 products without breaking a pixel.",
        description: "A high-performance design foundation created to ensure consistency, speed, and clarity across a multi-product ecosystem.",
        role: "Design System Lead",
        timeline: "Ongoing (Est. 2024)",
        goal: "Establish a centralized, scalable design system that eliminates visual inconsistency, accelerates development, and supports multi-brand theming across a growing product suite.",
        challenge: `<h4 class="text-xl font-extrabold text-gray-900 mb-2">Context & The Core Problem</h4>
As our product suite expanded, design debt accumulated rapidly. Teams were building components in silos, leading to a <mark>40% variance in visual styles</mark> and doubling developer implementation time due to fragmented user experiences.

<h4 class="text-xl font-extrabold text-gray-900 mt-6 mb-2">The Goal</h4>
Establish a definitive centralized source of truth — a design system that is robust, highly organized, and natively supports <mark>multi-platform responsiveness and future multi-brand scalability</mark>.

<h4 class="text-xl font-extrabold text-gray-900 mt-6 mb-2">Target Users & Pain Points</h4>
• <mark>Designers:</mark> High cognitive load from constantly recreating UI elements and managing inconsistencies.
• <mark>Developers:</mark> Frustrated by vague specifications, lack of reusable code, and bottlenecked handoff processes.
• <mark>End Users:</mark> Suffer from jarring transitions and inconsistent UI patterns across the platform.

<h4 class="text-xl font-extrabold text-gray-900 mt-6 mb-2">UX & Technical Challenges</h4>
• Architecting a massive variable system that scales seamlessly without becoming overly complex.
• Ensuring <mark>strict WCAG AA compliance</mark> across a library of over 2,000 components.`,
        solution: `<h4 class="text-xl font-extrabold text-gray-900 mb-2">The Process & Architecture</h4>
I developed the Quantum Design System from the ground up, heavily leveraging Figma's advanced variables, modes, and component properties to create a bulletproof foundation.

<h4 class="text-xl font-extrabold text-gray-900 mt-6 mb-2">1. Variable Architecture & Token Strategy</h4>
Implemented a strict multi-tier token architecture comprising <mark>300 interconnected variables across 4 collections</mark>: Brands (142), Alias (79), Mapping (39), and Responsive (40).

<h4 class="text-xl font-extrabold text-gray-900 mt-6 mb-2">2. Typography & Spatial System</h4>
Established a fluid typographic scale mapped directly to variables (h1–h6, body sm/md/lg). Built a rigid mathematical spatial scale ranging from 1px to 64px, categorizing spatial relationships semantically to eliminate guesswork.

<h4 class="text-xl font-extrabold text-gray-900 mt-6 mb-2">3. Atomic Component Library</h4>
Scaled the system to an impressive <mark>2,288 components</mark> meticulously organized into <mark>916 component sets</mark>. I strictly adhered to atomic design principles, ensuring complex interactive components were built reliably from foundational atoms.

<h4 class="text-xl font-extrabold text-gray-900 mt-6 mb-2">4. Responsive Layout Automation</h4>
Utilized Figma Modes (Desktop, Tablet, Mobile) to fluidly adjust breakpoints, grids, margins, and gutters based on the frame context, automating responsive behavior for designers.`,
        decisions: `<h4 class="text-xl font-extrabold text-gray-900 mb-2">Key Decisions & Trade-offs</h4>

<h4 class="text-xl font-extrabold text-gray-900 mt-6 mb-2">1. Three-Tier Token Architecture</h4>
Decision: Separated variables into Brands, Alias, and Mapping collections.
Why: While initially complex to set up, this separation means that <mark>implementing a new brand theme</mark> is now a matter of mapping variables, rather than touching individual components.

<h4 class="text-xl font-extrabold text-gray-900 mt-6 mb-2">2. Semantic vs. Literal Naming</h4>
Decision: Used semantic names (e.g., \`surface/primary\`, \`text/action\`) instead of literal hex values or color names.
Why: <mark>Semantic naming bridges the gap</mark> between design and development, ensuring intent is clear and scalable.

<h4 class="text-xl font-extrabold text-gray-900 mt-6 mb-2">3. Strict Component Properties</h4>
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
        useCases: [
            {
                title: "The 3-Tier Token Architecture",
                complexContext: "Every product team was defining their own colors and spacing locally. When a brand refresh happened, it required manually hunting down hundreds of individual component overrides across 5 products.",
                simpleSolution: "I designed a layered token system — Brand tokens define raw values, Alias tokens assign semantic meaning, and Mapping tokens apply them to components. A full brand theme swap now takes minutes, not weeks.",
                image: Quantum3TierImg
            },
            {
                title: "Automated Responsive Layouts",
                complexContext: "Designers were manually duplicating frames for every screen size, creating three separate files for Desktop, Tablet, and Mobile — each drifting out of sync over time.",
                simpleSolution: "I used Figma Modes to bind spacing, grid gutters, and component sizes to responsive variables. A single component now adapts across all three breakpoints automatically — no duplication, no drift.",
                image: QuantumComponentsSetupImg
            }
        ],
        showcase: [
            QuantumVarsImg,
            QuantumComponentsImg
        ],
        impact: [
            "70% Faster development for new features and product updates",
            "100% Visual consistency guaranteed across 5+ independent products",
            "30% Reduction in designer-to-developer handoff time",
            "WCAG AA standards met platform-wide out of the box"
        ],
        learnings: `<h4 class="text-xl font-extrabold text-gray-900 mb-2">Reflections & Key Takeaways</h4>
1. <mark>Architecture is Everything:</mark> Investing time upfront to design a rigorous 3-tier variable system saved hundreds of hours when implementing new themes.
2. <mark>Adoption Requires Education:</mark> A design system is useless if teams don't leverage it. Creating comprehensive documentation and hosting integration workshops proved just as critical as building the components themselves.
3. <mark>Developer Alignment:</mark> Bringing developers into the token naming conversation early ensured that Figma variables mirrored the actual CSS/React architecture perfectly.

<h4 class="text-xl font-extrabold text-gray-900 mt-6 mb-2">What I'd Do Differently</h4>
If I were to start over, I would have integrated a design token export plugin earlier in the process to automate the sync between Figma and our GitHub repositories, rather than relying on manual updates during the initial rollout phase.`,
        link: "https://www.figma.com/proto/SFp3cT2KQ3c9Hhx30Y0OhV/Portfolio?page-id=0%3A1&node-id=100-193"
    },
    {
        id: "hiresync",
        image: HireSyncMockupImg,
        title: "G A HireSync",
        category: "Enterprise SaaS • AI Recruitment",
        tagline: "Designing high-impact screens to minimize cognitive load, streamline scheduling, and improve efficiency.",
        description: "Designing the enterprise recruitment workspace — optimizing candidate submittals, reducing visual clutter, and streamlining multi-party scheduling.",
        role: "Lead UX Architect & Product Designer",
        timeline: "12 Weeks",
        goal: "Build a frictionless hiring experience for all five user roles inside a single enterprise platform.",
        challenge: `<h4 class="text-xl font-extrabold text-gray-900 mb-2">Context & The Core Problem</h4>
Having five distinct user journeys within a single platform led to <mark>information clutter</mark> and <mark>workflow fragmentation</mark>. Users suffered from list-to-detail "ping-pong" navigation, decision fatigue, and scheduling friction.

<h4 class="text-xl font-extrabold text-gray-900 mt-6 mb-2">The Goal</h4>
Design high-impact screens to minimize cognitive load, streamline scheduling, and improve overall candidate submittal-to-hire efficiency.`,
        solution: `<h4 class="text-xl font-extrabold text-gray-900 mb-2">The UX Process & Discovery</h4>
I led the end-to-end design process, collaborating closely with PMs and Engineering. We started with <mark>generative research</mark> to map the recruiter's journey.

<h4 class="text-xl font-extrabold text-gray-900 mt-6 mb-2">1. Generative Research & Journey Mapping</h4>
Conducted <mark>12 semi-structured interviews</mark> with agency recruiters. We mapped their daily workflow and discovered that the biggest drop-off in efficiency occurred during the "Screening" phase due to scattered data.

<h4 class="text-xl font-extrabold text-gray-900 mt-6 mb-2">2. Information Architecture (IA)</h4>
Enterprise tools often fail due to poor navigation. I conducted an <mark>open card sorting session</mark> to reorganize the platform’s IA. We flattened the hierarchy, ensuring that Pipeline, Candidates, and AI Tools were accessible within one click from the Dashboard.

<h4 class="text-xl font-extrabold text-gray-900 mt-6 mb-2">3. Wireframing & Rapid Prototyping</h4>
Created low-fidelity wireframes to test layout structures for the Candidate Pipeline. We explored various list views and high-density data tables to accommodate bulk actions.

<h4 class="text-xl font-extrabold text-gray-900 mt-6 mb-2">4. Usability Testing & Iteration</h4>
Tested mid-fi prototypes with 5 recruiters. 
Insight: Users ignored the standalone "AI Insights" tab. 
Pivot: We shifted to a <mark>"Contextual AI"</mark> model, embedding AI recommendations directly inside the candidate profile card.

<h4 class="text-xl font-extrabold text-gray-900 mt-6 mb-2">5. Context-Driven Agile UX Framework</h4>
In a high-velocity product team, a rigid linear process is impractical. Instead, we dynamically adapted across three distinct sprint types:

• <mark>Track A (Quick-Win Heuristics):</mark> Implemented on high-density grids and tabular data rows. Audited screens directly against Nielsen's Usability Heuristics. Instantly updated sizing configurations, standardized spacing/radius tokens, and expanded clickable targets to 44x44px on mobile inside the active development sprint.
• <mark>Track B (Iterative Design & Test):</mark> Applied to multi-party workflows like the Interview Scheduler. Generated rapid wireframe prototypes, validated them via quick feedback interviews with recruiting managers, and refined the layouts in collaborative design iterations before developers wrote a single line of production code.
• <mark>Track C (Technical Feasibility):</mark> Applied to intelligent widgets like the Match Fit Gauge. Partnered with developers in technical backlog sprints to understand LLM processing latencies. This shaped how we designed loading animations (pulsing status loader steps instead of generic spin wheels) to keep user expectations clear.`,
        decisions: `<h4 class="text-xl font-extrabold text-gray-900 mb-2">Key UX Decisions & Trade-offs</h4>

<h4 class="text-xl font-extrabold text-gray-900 mt-6 mb-2">1. High-Density Data Tables over Kanban</h4>
Decision: We opted for a <mark>powerful, high-density Table View</mark> as the primary pipeline interface.
Why: While Kanban is visually appealing for stages, enterprise recruiters handle massive candidate pools. We found that data tables with robust filtering, sticky headers, and inline bulk actions drastically improved sorting speed for power users.

<h4 class="text-xl font-extrabold text-gray-900 mt-6 mb-2">2. Transparent AI (Building Trust)</h4>
Decision: AI skill-match scores are accompanied by a "Why this score?" tooltip showing the exact extracted keywords.
Why: Recruiters won't trust an AI black box. <mark>Exposing the AI's reasoning</mark> increased feature adoption by 40%.

<h4 class="text-xl font-extrabold text-gray-900 mt-6 mb-2">3. The Design System (Accessibility First)</h4>
Decision: Built a strict atomic design system using Figma variables.
Why: <mark>Enterprise dashboards demand high data density</mark>. We used Inter for legibility, ensured WCAG AA compliance for all text contrasts, and established a consistent spacing system (4pt grid) to make dense tables readable.`,
        placeholders: {
            challenge: `img:${HireSyncEmpathyMap}`
        },
        uxLaws: [
            {
                law: "Miller's Law & Jakob's Law",
                context: "The Recruiter's Active Jobs Board",
                problem: "Recruiters scanned a list of dozens of active jobs, each displaying client names, locations, vacancy counts, and team sizes, resulting in massive visual clutter and search fatigue.",
                solution: "Grouped job boards into expandable tab screens (e.g. Tech, Marketing, Sales), keeping the scanning choice count within 7±2 items. Aligned the sorting headers and filters with conventions recruiters already know from tools like LinkedIn Recruiter.",
                reduction: "40% Visual Search Time by chunking information and eliminating list-to-detail navigation search cycles.",
                image: Case1AfterImg
            },
            {
                law: "Zeigarnik Effect & Hick's Law",
                context: "Send Profiles / Resume Send",
                problem: "When forwarding shortlisted candidates to clients, recruiters suffered from high manual effort—manually drafting candidate bios, managing multiple resume attachments, and select-hunting contact details from disorganized lists.",
                solution: "Designed a unified submission panel that auto-compiles candidate highlights, links matched resume versions, and exposes quick-select client cards to let recruiters trigger submissions instantly.",
                reduction: "2.5x Faster candidate submissions to clients, eliminating email copy-paste cycles and attachment mismatch errors.",
                image: Case2Img
            },
            {
                law: "Aesthetic-Usability Effect & Miller's Law",
                context: "Client Batch Review & Shortlisting",
                problem: "Clients suffered from comparison fatigue when reviewing multiple candidates side-by-side, forced to hold skill matrices in active memory.",
                solution: "Restricted the side-by-side comparison matrix to a maximum of 3 profiles simultaneously to stay within working memory limits. Designed clean SVG match gauges (with red-to-green semantic color bands) to make candidate fit indices immediately scannable.",
                reduction: "30% Reduction in decision fatigue by offloading candidate comparisons to instant, highly polished visual status indicators.",
                image: Case3Img
            },
            {
                law: "Law of Common Region, Hick's Law & Fitts's Law",
                context: "Manager Requisitions & Workload Allocation",
                problem: "Managers struggled to track inactive requisitions and reallocate recruiter workloads without context switching, causing delayed actions.",
                solution: "Grouped requisitions inside clear boundary cards containing client-specific colored header bands. Refactored the workload reassignment modal to dynamically list only the top 3 recommended recruiters based on sector match. Scaled all modal action buttons to a 44px height positioned at the bottom-right for quick pointer targets.",
                reduction: "50% Fewer click paths required to reassign tasks, simplifying recruiter workload balancing to a single modal action.",
                image: Case4Img
            }
        ],
        features: [
            { title: "Unified Interview Scheduler", description: "Designed daily calendar slot heights to a minimum of 44px on mobile and modeled the navigation on standard layouts to reduce scheduling error rates by 45%." },
            { title: "Multi-Step Onboarding Flow", description: "Split the complex client signup process into a multi-step setup flow utilizing progressive disclosure, decreasing onboarding drop-offs by 35%." },
            { title: "Proximity Notification Panel", description: "Positioned high-importance action links adjacent to descriptions and grouped status messages to reduce target acquisition times by 60%." }
        ],
        useCases: [
            {
                title: "Simplifying the Candidate Pipeline",
                complexContext: "Enterprise recruiters often juggle 15+ open tabs just to cross-reference candidate resumes, technical scores, and email threads for a single role. The cognitive load was massive.",
                simpleSolution: "I designed a split-screen High-Density Pipeline Table with an embedded Contextual AI panel. Now, recruiters can view the candidate's resume, AI skill-match breakdown, and action items all within a single, unified scrollable view—eliminating tab fatigue.",
                image: Case1AfterImg
            },
            {
                title: "Designing for AI Trust",
                complexContext: "Our initial testing revealed a critical problem: recruiters didn't trust the AI. They saw a '95% Match' score but assumed it was a flawed black-box algorithm and ignored it.",
                simpleSolution: "I designed the AI scoring component to prioritize transparency. By adding a 'Why this score?' interaction that highlights exact keyword matches directly on the candidate's parsed resume, AI feature adoption increased by 40%.",
                image: AITrustImg
            }
        ],
        showcase: [
            WebsiteImg,
            Case2Img,
            Case3Img,
            Case4Img
        ],
        impact: [
            "35% Reduction in onboarding drop-off via progressive disclosure",
            "2.5x Faster resume submissions to clients via unified send panel",
            "45% Fewer calendar booking errors via scaled touch targets",
            "40% Reduction in overall time-to-screen per candidate",
            "85% Positive System Usability Scale (SUS) Score in beta"
        ],
        learnings: `<h4 class="text-xl font-extrabold text-gray-900 mb-2">Reflections & Key Takeaways</h4>
1. <mark>Enterprise UX is about Density & Clarity:</mark> Consumer apps favor whitespace; enterprise apps demand data density. The challenge was balancing scannability with comprehensive data.
2. <mark>Trust is the UX of AI:</mark> If users don't understand how the AI generated a result, they won't use it. Designing for AI requires designing for transparency.
3. <mark>Bridging the Gap:</mark> I also took on the frontend development for the HireSync website, using Antigravity to accelerate the engineering process. Being able to execute my own designs in code removes handoff friction and guarantees the live site looks exactly like the prototype.

<h4 class="text-xl font-extrabold text-gray-900 mt-6 mb-2">What I'd Do Differently</h4>
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
                image: GridImg
            },
            {
                title: "Designing for Multiple Roles",
                complexContext: "A Manager needs business health. A Team Lead needs delivery. Staff needs today's work. Clients need progress. A universal dashboard would fail them all.",
                simpleSolution: "I designed the information architecture around role-specific priorities while maintaining a shared underlying data model.",
                image: GridImg
            }
        ],
        showcase: [
            GridImg
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
