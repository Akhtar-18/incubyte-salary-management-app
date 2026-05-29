# incubyte-salary-management-app
Assessment for Incubyte - Salary management app

## Features

## Employee Management

- Add employees
- View employees
- Update employee details
- Delete employees
- Pagination support
- Search & filtering
- Sorting support

## Salary Insights Dashboard

- Average salary by country
- Minimum salary by country
- Maximum salary by country
- Average salary by job title
- Department-level insights
- Employee distribution analytics

## Performance

- Seed script for 10,000 employees
- Batch inserts using Prisma
- Indexed database columns
- Optimized aggregation queries
- Fast API responses

## Engineering Practices

- Test Driven Development (TDD)
- Unit tests
- API tests
- Frontend component tests
- Incremental git commits
- Clean layered architecture
- AI-assisted development workflow

---

# Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Material UI
- React Query
- Axios
- Vitest
- React Testing Library

## Backend

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- SQLite
- Zod Validation
- Jest / Supertest

---

# Project Structure

```txt
incubyte-salary-management-app/
│
├── backend/
│   ├── prisma/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── repositories/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── tests/
│   │   ├── validations/
│   │   └── types/
│   │
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── tests/
│   │   └── types/
│   │
│   └── package.json
│
└── README.md
```
## Architecture

The backend follows a layered architecture:

```txt
Route → Controller → Service → Repository → Prisma → SQLite
```

### Benefits

* Separation of concerns
* Easier testing
* Better maintainability
* Scalable structure

---

# TDD Approach

This project was intentionally developed using Test Driven Development.

Typical workflow followed:

1. Write failing test
2. Implement minimal code
3. Refactor safely
4. Commit incrementally

Both backend and frontend include meaningful automated tests.

---

# Database Design

## Employee Model

```prisma
model Employee {
  id          Int      @id @default(autoincrement())
  fullName    String
  email       String   @unique
  jobTitle    String
  country     String
  salary      Float
  department  String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([country])
  @@index([jobTitle])
  @@index([department])
  @@index([salary])
}
```

Indexes were added for optimized filtering and aggregation queries.

---

# Seed Strategy (10,000 Employees)

The seed script:

* Generates 10,000 employees
* Uses batch inserts for performance
* Combines names from:

  * `first_names.txt`
  * `last_names.txt`
* Uses Faker.js for realistic employee data

### Performance considerations

* Batched `createMany`
* Indexed queries
* Controlled memory usage

---

# API Endpoints

## Employees

| Method | Endpoint         | Description        |
| ------ | ---------------- | ------------------ |
| GET    | `/employees`     | Get all employees  |
| GET    | `/employees/:id` | Get employee by ID |
| POST   | `/employees`     | Create employee    |
| PUT    | `/employees/:id` | Update employee    |
| DELETE | `/employees/:id` | Delete employee    |

## Salary Insights

| Method | Endpoint                            | Description                 |
| ------ | ----------------------------------- | --------------------------- |
| GET    | `/salary-insights/country/:country` | Country salary metrics      |
| GET    | `/salary-insights/job-title`        | Average salary by job title |

---

# Setup Instructions

## Clone Repository

```bash
git clone https://github.com/Akhtar-18/incubyte-salary-management-app.git
```

---

# Backend Setup

## Navigate

```bash
cd backend
```

## Install Dependencies

```bash
npm install
```

## Create Environment File

Create `.env`

```env
DATABASE_URL="file:./dev.db"
PORT=4000
FRONTEND_URL=http://localhost:5173
```

## Generate Prisma Client

```bash
npx prisma generate
```

## Run Migrations

```bash
npx prisma migrate dev
```

## Seed Database

```bash
npm run seed
```

## Start Backend

```bash
npm run dev
```

Backend runs on:

```txt
http://localhost:4000
```

---

# Frontend Setup

## Navigate

```bash
cd frontend
```

## Install Dependencies

```bash
npm install
```

## Start Frontend

```bash
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

# Running Tests

## Backend Tests

```bash
cd backend
npm test
```

## Frontend Tests

```bash
cd frontend
npm run test
```

---

# AI Usage

AI tools were intentionally used during development for:

* Architecture brainstorming
* TDD workflow acceleration
* Refactoring guidance
* Performance optimization ideas especially
* Test case generation assistance

All generated code was reviewed, validated, tested, and refactored manually.

---

# Engineering Decisions

## Why Prisma?

* Type safety
* Excellent DX
* Fast development
* Strong aggregation support

## Why React Query?

* Server-state management
* Built-in caching
* Loading/error handling
* Automatic refetching

## Why SQLite?

* Lightweight
* Easy local setup
* Perfect for assessment scope

## Why Layered Architecture?

* Maintainability
* Scalability
* Better testing boundaries

---

# Future Improvements

* Authentication & RBAC
* Export reports (CSV/PDF)
* Advanced analytics
* Charts & data visualization
* Docker support
* CI/CD pipelines
* Audit logs
* Role-based dashboards

---

# Author

## Akhtar Parveen

Full Stack Developer
React | Node.js | TypeScript | Prisma | MERN | Laravel

GitHub: https://github.com/Akhtar-18

LinkedIn: https://www.linkedin.com/in/akhtar-parveen-1806/

