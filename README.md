# Subhankar Pani – Space Portfolio

A modern, interactive, space-themed personal portfolio built with **Next.js, React, TypeScript, Tailwind CSS, and Framer Motion**.

The portfolio showcases my background, technical skills, academic journey, professional experience, certifications, achievements, and projects through an animated and visually immersive interface.

🔗 **GitHub Repository:** [SubhankarPani/my_portfolio](https://github.com/SubhankarPani/my_portfolio)

---

## ✨ Features

### 🌌 Space-Themed User Interface

- Dark space-inspired design.
- Animated star background.
- Black hole video background in the hero section.
- Responsive navigation bar.
- Modern layouts with gradient styling and visual effects.

### 👨‍💻 About Me

- Personal introduction.
- Profile image.
- Overview of development interests and technical background.

### 🛠 Technical Skills

Displays technical skills using categorized visual cards.

The current skill configuration includes:

- **Frontend:** HTML, CSS, JavaScript, TypeScript, React, Material UI, Framer Motion.
- **Backend:** Node.js, Express.js.
- **Databases:** MongoDB, Firebase, MySQL.
- **Tools & Other Technologies:** Docker, Figma.

### 🎓 Academic History

A visual academic timeline presenting:

- Secondary education.
- Higher secondary education.
- Bachelor of Technology in Computer Science and Engineering.

### 💼 Professional Experience

Displays professional and internship experience, including:

- Cognizant – Program Analyst Trainee.
- Cognizant – Internship.
- Tata Steel – SAP Internship.

### 📜 Certifications

Includes certification previews for:

- Flutter & Dart – The Complete Guide.
- Python Fundamentals for Beginners.
- Adobe Illustrator.
- AWS Academy Cloud Foundation.

### 🏆 Wall of Fame

- Dedicated achievements and awards section.
- Image carousel with automatic transitions.
- Previous and next navigation.
- Slide indicators.
- Pause-on-hover behavior.

### 🚀 Projects Showcase

- Project cards with images and descriptions.
- Interactive hover effects.
- External project links.

### 🔐 Performance & Security Section

A dedicated visual section featuring animated lock graphics and video backgrounds.

### 📱 Responsive Navigation

- Desktop navigation.
- Mobile hamburger menu.
- Section navigation links.
- Social media links.

---

## 🛠 Tech Stack

| Category | Technologies |
|---|---|
| Framework | Next.js 14 |
| Frontend | React 18 |
| Language | TypeScript, JavaScript |
| Styling | Tailwind CSS, CSS |
| Animations | Framer Motion |
| 3D Graphics | Three.js, React Three Fiber, React Three Drei |
| Icons | React Icons, Heroicons |
| UI Utilities | clsx, tailwind-merge |
| Image Optimization | Next.js Image |
| Build Tooling | Next.js |
| Package Manager | npm |
| Deployment-ready Framework | Next.js |

---

## 🏗 Project Architecture

The application follows the Next.js App Router structure and uses reusable React components to organize the portfolio sections.

```text
                Next.js Application
                        |
                   App Router
                        |
                  app/layout.tsx
                        |
              Global Layout & Metadata
                        |
              +---------+----------+
              |                    |
           Navbar             Main Content
                                   |
                  +----------------+----------------+
                  |                |                |
                 Hero            About            Skills
                  |                |                |
              Academics        Experience      Certifications
                  |                |                |
              Wall of Fame    Security Section   Projects
                                   |
                                 Footer
```

---

## 📂 Project Structure

```text
my_portfolio/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── main/
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── academics.tsx
│   │   ├── internship.tsx
│   │   ├── skills.tsx
│   │   ├── certifications.tsx
│   │   ├── WallOfFame.tsx
│   │   ├── encryption.tsx
│   │   ├── projects.tsx
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── star-background.tsx
│   │
│   └── sub/
│       ├── HeroCanvas.tsx
│       ├── ParticleEarth.tsx
│       ├── hero-content.tsx
│       ├── project-card.tsx
│       ├── skill-data-provider.tsx
│       └── skill-text.tsx
│
├── config/
│   └── index.ts
│
├── constants/
│   └── index.ts
│
├── lib/
│   ├── motion.ts
│   └── utils.ts
│
├── public/
│   ├── awards/
│   ├── projects/
│   ├── skills/
│   ├── videos/
│   ├── my-photo.png
│   ├── logo.png
│   └── other assets
│
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js
- npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/SubhankarPani/my_portfolio.git
cd my_portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

### 4. Create a Production Build

```bash
npm run build
```

### 5. Start the Production Server

```bash
npm start
```

---

## 🎨 Customization

The portfolio is designed to be customizable.

### Update Personal Information

Edit the relevant components inside:

```text
components/main/
```

For example:

- `about.tsx` – Personal introduction.
- `academics.tsx` – Educational background.
- `internship.tsx` – Professional experience.
- `certifications.tsx` – Certification details.

### Update Skills

Modify the skill configuration in:

```text
constants/index.ts
```

The skill data is organized into frontend, backend, full-stack, and other skill categories.

### Update Projects

Modify the `PROJECTS` array in:

```text
constants/index.ts
```

Each project card supports:

- Project title.
- Description.
- Image.
- External link.

### Update Images and Videos

Replace or add assets inside:

```text
public/
```

The repository organizes media into folders such as:

- `awards/`
- `projects/`
- `skills/`
- `videos/`

---

## 📱 Portfolio Sections

| Section | Description |
|---|---|
| Hero | Introduction and animated space-themed landing area |
| About | Personal profile and introduction |
| Skills | Visual technical skills showcase |
| Academic History | Education timeline |
| Internship Experience | Professional and internship timeline |
| Certifications | Certification gallery |
| Wall of Fame | Achievement image carousel |
| Performance & Security | Animated security-themed section |
| Projects | Project showcase |
| Footer | Social and community links |

---

## 🚀 Future Enhancements

- Add detailed descriptions and dedicated pages for individual projects.
- Connect project cards to actual project repositories and live demos.
- Add a working contact form.
- Improve accessibility and keyboard navigation.
- Optimize videos and large image assets.
- Add additional interactive 3D elements.
- Improve metadata and search engine optimization.
- Add more recent professional experience, skills, and certifications.

---

## 👨‍💻 Author

**Subhankar Pani**

- GitHub: [SubhankarPani](https://github.com/SubhankarPani)

---

*Designed to showcase my journey, technical skills, experience, and projects through an interactive space-themed portfolio.*
