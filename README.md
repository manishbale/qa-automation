# QA Automation Framework - Playwright + TypeScript

## Overview

This project is a Playwright automation framework built using TypeScript for UI and API testing.

The framework demonstrates:
- UI automation testing
- API automation testing
- Page Object Model (POM)
- Smoke and regression test scenarios
- Assertions and validations
- GitHub Actions CI workflow
- Cross-browser Playwright execution

---

# Tech Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions
- VS Code

---

# Project Structure

```text
qa-automation/
│
├── tests/
│   ├── api/
│   │   └── users-api.spec.ts
│   │
│   ├── login.spec.ts
│   ├── login-pom.spec.ts
│   ├── invalid-login.spec.ts
│   ├── logout.spec.ts
│   ├── add-to-cart.spec.ts
│   └── checkout.spec.ts
│
├── pages/
│   └── LoginPage.ts
│
├── utils/
│
├── test-data/
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

# UI Test Scenarios

### Login Test
- Validates successful login flow

### Invalid Login Test
- Validates error handling for invalid credentials

### Logout Test
- Validates successful logout functionality

### Add To Cart Test
- Validates adding products to cart

### Checkout Flow Test
- Validates complete checkout functionality

### Login Using POM
- Demonstrates Page Object Model implementation

---

# API Test Scenarios

### GET API Validation
- Validates API response status
- Validates response body data

### POST API Validation
- Validates POST request creation
- Validates response payload

---

# Features Implemented

- Playwright TypeScript framework setup
- UI automation
- API automation
- Page Object Model (POM)
- Assertions and validations
- Smoke and regression tagging
- GitHub Actions CI workflow
- Cross-browser configuration

---

# Installation

Clone repository:

```bash
git clone https://github.com/manishbale/qa-automation.git
```

Move into project:

```bash
cd qa-automation
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

# Run Tests

Run all tests:

```bash
npx playwright test
```

Run chromium tests only:

```bash
npx playwright test --project=chromium
```

Run headed mode:

```bash
npx playwright test --headed
```

Open HTML report:

```bash
npx playwright show-report
```

---

# CI/CD

GitHub Actions workflow is configured for automated Playwright test execution.

Workflow file:

```text
.github/workflows/playwright.yml
```

---

# Future Improvements

- Data-driven testing
- Environment configuration
- Fixtures and hooks
- Parallel execution optimization
- Reporting integration
- Docker integration
- Jenkins/GitHub Actions enhancements

---

# Author

Manish Bale

QA Engineer | Playwright Automation | API Testing | TypeScript | GitHub Actions | Software Testing Enthusiast