# API testing of regres.in
- testing API endpoints using Playwright and Typescript, CRUD operations with authentication of a user, set to run on github actions pipeline after a push.
## Techstack
- Playwright
- Typescript
- Github Actions
## Installation
```bash
npm install
npx playwright install
```
## How to run a project
```bash
npx playwright test
```
## Project structure
- auth - authentication of a user, creates a cookie which is then passed into auth.spec.ts to validate
- pages - api client constructor with CRUD operations
- tests - validation of a cookie, users.spec.ts CRUD testing