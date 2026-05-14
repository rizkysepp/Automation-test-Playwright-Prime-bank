# Playwright Automation Testing - PrimeBank Investment Platform

## 📌 Project Overview

Automation testing project using Playwright for PrimeBank Investment Platform by Replit

Features covered:
- Login
- Buy Products
- View Transaction
- Switching Products
- Buy Products from Watchlist
- News
- Income & Expense
- Reports
- Customer Profile

---

# 🛠 Tech Stack

- Playwright
- JavaScript
- Node.js
- VS Code

---

# ▶️ Run Automation

## Run all test

```bash
npx playwright test
```

## Run specific test

```bash
npx playwright test tests/test_from_repplit_app.spec.js
```

## Run chromium only

```bash
npx playwright test --project=chromium
```

## Run UI mode

```bash
npx playwright test --ui
```

---

# 📊 Show Report

```bash
npx playwright show-report
```

---

# 🧾 Handling Print Popup

```javascript
await page.evaluate(() => {
  window.print = () => {};
});
```

Used to bypass native browser print popup during automation.

---

# 👨‍💻 Author

Rizky Septian