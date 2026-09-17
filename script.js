// ===== SpendWise JavaScript Foundation =====

// ----- 1. Application Data (variables) -----
let monthlyBudget = 1500;       // total budget for the month (number)
let userName = "Ibrahim";       // name of the user (string)

// Expense-related data
let expenseNames = ["Food", "Transport", "Rent", "Entertainment", "Savings", "Utilities"];
let expenseAmounts = [320, 120, 500, 85, 400, 150];

// ----- 2. Collect User Input -----
function getBudgetFromUser() {
  let input = prompt("Enter your monthly budget ($):", monthlyBudget);
  let parsedInput = parseFloat(input);

  if (!isNaN(parsedInput) && parsedInput > 0) {
    monthlyBudget = parsedInput;
  }

  console.log("Monthly budget set to: $" + monthlyBudget);
}

// ----- 3. Budget Calculations (functions) -----
function calculateTotalExpenses(amounts) {
  let total = 0;
  for (let i = 0; i < amounts.length; i++) {
    total += amounts[i];
  }
  return total;
}

function calculateRemainingBalance(budget, totalExpenses) {
  return budget - totalExpenses;
}

function calculateAverageExpense(amounts) {
  let total = calculateTotalExpenses(amounts);
  return total / amounts.length;
}

// ----- 4. Run the App and Display Results -----
function runSpendWise() {
  getBudgetFromUser();

  let totalExpenses = calculateTotalExpenses(expenseAmounts);
  let remainingBalance = calculateRemainingBalance(monthlyBudget, totalExpenses);
  let averageExpense = calculateAverageExpense(expenseAmounts);

  console.log("===== SpendWise Summary for " + userName + " =====");
  console.log("Monthly Budget: $" + monthlyBudget.toFixed(2));
  console.log("Total Expenses: $" + totalExpenses.toFixed(2));
  console.log("Remaining Balance: $" + remainingBalance.toFixed(2));
  console.log("Average Expense: $" + averageExpense.toFixed(2));

  if (remainingBalance < 0) {
    console.log("Warning: You are over budget this month!");
  } else {
    console.log("You are within your budget.");
  }
}

// Start the app
runSpendWise();