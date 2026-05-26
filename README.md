# QA Automation Framework - Playwright + TypeScript

## Overview
This project is a Playwright automation framework built using TypeScript.

## Features
- UI Automation
- Login Automation
- Page Object Model (POM)
- GitHub Actions CI
- Cross-browser support

## Tech Stack
- Playwright
- TypeScript
- Node.js

## Project Structure

```text
tests/
pages/
utils/
test-data/
```

## Run Tests

```bash
npx playwright test
```

Chromium only:

```bash
npx playwright test --project=chromium
```

## Future Improvements
- API automation
- Regression suite
- Smoke suite
- CI/CD reporting