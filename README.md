
## Week 4 Updates
- Rebuilt the layout as a SpendWise dashboard shell using CSS Grid for the overall page structure (sidebar, topbar, main content) and Flexbox for internal layout of the header, sidebar nav, and cards.
- Defined a theme using CSS custom properties (--brand-color, --accent-color, --surface-color, --text-primary, --text-secondary) on :root.
- Added a responsive media query that collapses the layout to a single column below 768px, verified in the browser.
- Added hover/focus micro-interactions on dashboard cards using transform and box-shadow (250ms transition).
- Implemented a dark theme stretch goal using prefers-color-scheme to override the CSS custom properties.

## Week 5 Updates
- Created and linked script.js to the SpendWise dashboard.
- Stored budget and expense data using variables (monthlyBudget, userName, expenseNames, expenseAmounts).
- Collected user input for the monthly budget using a JavaScript prompt().
- Performed budget calculations: total expenses, remaining balance, and average expense.
- Organized logic into reusable functions: calculateTotalExpenses(), calculateRemainingBalance(), calculateAverageExpense(), and getBudgetFromUser().
- Displayed all results with clear labels in the browser console.