# Portfolio Website

A portfolio site to showcase Daniel's engineering and creative projects, built with React + Vite.

---

## Adding a New Project

1. Add the project icon/image to `media/projects/`
2. Create a new image folder under `/media/` and upload project images
3. Create a new project page under `/projects/`
4. Import the page in `App.jsx` and add its route
5. Add the project to the list and routing in `pages/Projects.jsx`

---

## Running Locally

```bash
npm run dev
```

Open the link provided in the terminal (typically `http://localhost:5173/`) in your browser.

---

## Deploying Changes

```bash
git pull                                     # Always pull first — picks up any changes from others
git status                                   # Check which files have been modified and ensure you are pushing from your personal branch
git add .                                    # Stage all changes (or git add <file> for specific files)
git commit -m "describe your changes here"   # Commit with a descriptive message
git push                                     # Upload to GitHub
```

After pushing, open a pull request on GitHub and merge if there are no conflicts. This triggers the deployment pipeline — once it completes, your changes will be live at **plascenciasegura.com**.