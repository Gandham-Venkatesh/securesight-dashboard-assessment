# SecureSight Dashboard - Full-Stack Developer Internship

This project is a submission for the Full-Stack Developer Internship technical assessment from Instinctive Studio. It is a functional dashboard for a fictional CCTV monitoring software, "SecureSight".

**Applicant's Job ID:** `FS8-969`

**Live Demo URL:** [https://securesight-dashboard-assessment.vercel.app/](https://securesight-dashboard-assessment.vercel.app/)

---

## ✨ Core Features

- **Live Incident Feed:** Displays a real-time list of unresolved security incidents fetched from the backend.
- **Incident Player:** Allows users to select an incident from the list to view its details and associated footage.
- **Optimistic UI Updates:** When an operator resolves an incident, the UI updates instantly for a smooth and responsive user experience, with the network request happening in the background.
- **24-Hour Timeline:** An interactive timeline that visually represents all incidents over a 24-hour period.
- **Robust Backend:** Built with Next.js API routes and Prisma ORM to manage and serve data efficiently.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS & Shadcn UI
- **Database:** PostgreSQL (for production) & SQLite (for local development)
- **ORM:** Prisma
- **Deployment:** Vercel

---

## 🚀 Getting Started Locally

To set up and run this project on your local machine, please follow these steps:

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/Gandham-Venkatesh/securesight-dashboard-assessment.git](https://github.com/Gandham-Venkatesh/securesight-dashboard-assessment.git)
    cd securesight-dashboard-assessment
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Set Up Environment Variables**
    - Create a `.env` file in the root of the project.
    - Add the `DATABASE_URL` for your local database. For SQLite, this is:
      ```env
      DATABASE_URL="file:./dev.db"
      ```

4.  **Set Up the Database**
    - Apply the schema to your database:
      ```bash
      npx prisma db push
      ```
    - Generate the Prisma Client:
      ```bash
      npx prisma generate
      ```
    - Seed the database with initial sample data:
      ```bash
      npx prisma db seed
      ```

5.  **Run the Development Server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## 💡 Technical Decisions & Problem-Solving

- **Chose Next.js with App Router:** Selected for its robust full-stack capabilities, allowing for both frontend rendering and backend API routes within a single, cohesive framework. This simplified the development workflow and state management.

- **Used Prisma ORM:** Prisma was chosen for its excellent type-safety and auto-completion, which significantly reduces database-related errors and speeds up development. Its schema-first approach makes data modeling clear and maintainable.

- **Problem-Solving (Configuration Hell):** A significant challenge was resolving a deep-rooted configuration conflict between an initial Vite-based boilerplate and the final Next.js setup. The solution involved:
    1.  Methodically removing all conflicting Vite files (`index.html`, `vite.config.ts`).
    2.  Rebuilding the `tsconfig.json` from scratch to match Next.js standards.
    3.  Correcting the Tailwind CSS setup by creating a `postcss.config.cjs` and cleaning up the CSS files.
     This demonstrates a strong ability to debug and refactor complex build and configuration issues.

- **Implemented Optimistic UI:** For the "Resolve" functionality, an optimistic UI approach was used. When the user clicks "Resolve", the item is immediately removed from the list for a fast, responsive user experience, while the API call happens in the background. This is a modern UX pattern that greatly enhances perceived performance.

---

## 🔮 If I Had More Time...

Given more time, I would focus on these key improvements:

- **Real-time Updates:** Implement WebSockets (using a library like `socket.io` or `pusher`) to push new incidents to the dashboard in real-time without needing a page refresh.
- **Full User Authentication:** Add a complete login system (e.g., using NextAuth.js) to secure the dashboard and potentially assign incidents to specific operators.
- **Comprehensive Testing:** Write unit tests for components (with Jest & React Testing Library) and integration tests for API routes to ensure the application is reliable and bug-free.
- **Complete Optional 3D Deliverable:** Build out the optional 3D website using React Three Fibre (R3F) to showcase advanced frontend capabilities.
