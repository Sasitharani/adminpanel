# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

git commands
git add .
git commit -m "Your commit message"
git push origin <branch-name>
git clone <repository-url>
git remote set-url <name> <newurl>         || git remote set-url origin https://github.com/username/new-repo.git

create new branch
git checkout main// CHECK OUT FROM OLD BRANCH
git checkout -b basic // Create a new branch and switch in to it
git push origin basic // push it to remote


Merge code
git fetch origin
git checkout -b new-branch-name origin/main
git merge old-branch-name
git commit -m "Merged changes from old-branch-name"
git push origin new-branch-name

