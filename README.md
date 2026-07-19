# Portfolio

Personal developer portfolio built with a production-style stack: a React (Vite) frontend and an Express API backend, deployed independently and backed by PostgreSQL.

🚧 **Status:** In active development — see the commit history for day-by-day progress.

## Tech Stack

| Layer      | Technology                                                    |
|------------|---------------------------------------------------------------|
| Frontend   | React, React Router, Tailwind CSS, Framer Motion, Axios, Vite |
| Backend    | Node.js, Express                                              |
| Database   | PostgreSQL (Neon)                                             |
| Deployment | Vercel (frontend), Render (backend), Neon (database)          |
------------------------------------------------------------------------------

## Project Structure

```
portfolio/
├── client/     # React frontend (Vite)
└── server/     # Express API
```

Each package manages its own dependencies and is deployed independently.

## Local Development

### Frontend

```bash
cd client
npm install
npm run dev
```

Runs on `http://localhost:5173` by default.

### Backend

```bash
cd server
npm install
npm run dev
```

Runs on `http://localhost:5000` by default. Confirm it's up with:

```bash
curl http://localhost:5000/api/health
```

## Roadmap

- [x] Project scaffolding (frontend + backend)
- [ ] Component architecture & design system
- [ ] Core sections: Hero, About, Skills, Projects
- [ ] Resume, education, and experience sections
- [ ] Contact form with database-backed message storage
- [ ] Dark mode, 404 page, loading states
- [ ] Accessibility, SEO, and performance pass
- [ ] Production deployment

## License

MIT
