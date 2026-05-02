# 📝 Portfolio Update Guide

This guide outlines how to update your project data and resume in your portfolio.

---

## 📄 1. Updating the Resume

The resume is referenced in multiple components (Header.jsx, Hero.jsx). To update it:

1.  **Replace the file:** Overwrite src/assets/Resume.pdf with your new PDF file.
2.  **Naming:** Keep the filename as Resume.pdf to avoid updating import statements in the code.
3.  **If the name changes:** If you use a different name (e.g., Jai_Resume_2024.pdf), update the imports at the top of these files:
    - src/components/Header.jsx
    - src/components/Hero.jsx

---

## 🎨 2. Adding/Updating Projects

Projects are stored in src/data/projects.js. Each project is an object in the projects array.

### Step 1: Add the Project Image
- Place your project thumbnail/image in src/assets/.
- Use high-quality JPG or PNG files.

### Step 2: Update src/data/projects.js
- Import your new image at the top of the file:
  `javascript
  import MyNewProjectImg from '../assets/my-project-image.jpg';
  `
- Add a new object to the projects array following this schema:

`javascript
{
    id: 4, // Increment the ID
    image: MyNewProjectImg,
    title: \"Project Name\",
    category: \"Category • Subcategory\",
    tagline: \"Short catchy tagline\",
    description: \"Brief overview of the project.\",
    role: \"Your Role\",
    timeline: \"Duration\",
    goal: \"Project Objective\",
    challenge: \"The main problem you faced.\",
    solution: \"How you solved it.\",
    features: [
        { title: \"Feature 1\", description: \"Detail about feature 1.\" },
        { title: \"Feature 2\", description: \"Detail about feature 2.\" },
        { title: \"Feature 3\", description: \"Detail about feature 3.\" }
    ],
    impact: [
        \"Metric or outcome 1\",
        \"Metric or outcome 2\",
        \"Metric or outcome 3\"
    ],
    link: \"https://link-to-case-study.com\"
}
`

---

## 🚀 3. Going Live

Once you have updated your files locally, follow these steps to push the changes to your live site:

1.  **Build the Project:**
    Open your terminal in the project root and run:
    `ash
    npm run build
    `
2.  **Deploy:**
    - The build process will create a /dist folder.
    - Upload the contents of the /dist folder to your hosting provider (Vercel, Netlify, etc.).
    - If you have automated deployments (like GitHub Actions), simply git commit and git push your changes.

---

*Generated for Jai's Portfolio*
