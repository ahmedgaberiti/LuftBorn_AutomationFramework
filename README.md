# LuftBorn Automation Framework

Quick start:
1. Install deps: npm ci
2. Install Playwright browsers: npx playwright install
3. Run tests: npm test  (or npx playwright test tests)
4. Generate Allure report: npm run allure:generate
5. Open Allure report: npm run allure:open

Framework structure :
Java-script Playwright framework based POM design 
- tests/ — Playwright test specs
- pageobjects/ — Page Object classes used by tests
- test-data/ — JSON test data
- playwright.config.js — Playwright config (reporters, timeouts)
- package.json — scripts and devDependencies
- allure-results/ & allure-report/ — generated test reports
