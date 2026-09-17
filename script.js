// ===== SpendWise Interactive App =====

let monthlyBudget = 1500;

let expenses = [
  { name: "Groceries", amount: 45, category: "Food" },
  { name: "Bus Pass", amount: 20, category: "Transport" },
  { name: "Rent", amount: 500, category: "Rent" },
  { name: "Movie Night", amount: 15, category: "Entertainment" },
  { name: "Phone Bill", amount: 30, category: "Other" }
];

const expenseForm = document.getElementById("expense-form");
const expenseNameInput = document.getElementById("expense-name");
const expenseAmountInput = document.getElementById("expense-amount");
const expenseCategoryInput = document.getElementById("expense-category");
const expensesListEl = document.getElementById("expenses-list");
const budgetAmountEl = document.getElementById("budget-amount");
const totalSpentEl = document.getElementById("total-spent");
const remainingBalanceEl = document.getElementById("remaining-balance");
const budgetStatusEl = document.getElementById("budget-status");
const cardsGridEl = document.getElementById("cards-grid");

function calculateTotalExpenses(expenseArray) {
  let total = 0;
  for (let i = 0; i < expenseArray.length; i++) {
    total += expenseArray[i].amount;
  }
  return total;
}

function calculateCategoryTotals(expenseArray) {
  let totals = {};
  for (let i = 0; i < expenseArray.length; i++) {
    let category = expenseArray[i].category;
    let amount = expenseArray[i].amount;

    if (totals[category]) {
      totals[category] += amount;
    } else {
      totals[category] = amount;
    }
  }
  return totals;
}

function renderExpensesList() {
  expensesListEl.innerHTML = "";

  for (let i = 0; i < expenses.length; i++) {
    let expense = expenses[i];

    let li = document.createElement("li");
    li.innerHTML = "<span>" + expense.name + " (" + expense.category + ")</span>" +
      "<span>$" + expense.amount.toFixed(2) +
      " <button class='delete-btn' data-index='" + i + "'>Delete</button></span>";
    expensesListEl.appendChild(li);
  }

  let deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      let index = parseInt(button.getAttribute("data-index"));
      expenses.splice(index, 1);
      updateDashboard();
    });
  });
}

function renderCategoryCards() {
  cardsGridEl.innerHTML = "";
  let categoryTotals = calculateCategoryTotals(expenses);

  for (let category in categoryTotals) {
    let card = document.createElement("div");
    card.className = "card";
    card.setAttribute("tabindex", "0");
    card.innerHTML = "<h3>" + category + "</h3>" +
      "<p class='amount'>$" + categoryTotals[category].toFixed(2) + "</p>" +
      "<p class='label'>This month</p>";
    cardsGridEl.appendChild(card);
  }
}

function updateBudgetSummary() {
  let totalSpent = calculateTotalExpenses(expenses);
  let remainingBalance = monthlyBudget - totalSpent;

  budgetAmountEl.textContent = monthlyBudget.toFixed(2);
  totalSpentEl.textContent = totalSpent.toFixed(2);
  remainingBalanceEl.textContent = remainingBalance.toFixed(2);

  if (remainingBalance < 0) {
    budgetStatusEl.textContent = "Warning: You are over budget this month!";
    budgetStatusEl.className = "status-message over-budget";
  } else if (remainingBalance < monthlyBudget * 0.1) {
    budgetStatusEl.textContent = "Careful: You're close to your budget limit.";
    budgetStatusEl.className = "status-message over-budget";
  } else {
    budgetStatusEl.textContent = "You are within your budget.";
    budgetStatusEl.className = "status-message under-budget";
  }
}

function updateDashboard() {
  renderExpensesList();
  renderCategoryCards();
  updateBudgetSummary();
}

expenseForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = expenseNameInput.value.trim();
  let amount = parseFloat(expenseAmountInput.value);
  let category = expenseCategoryInput.value;

  if (name === "" || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid expense name and amount.");
    return;
  }

  expenses.push({ name: name, amount: amount, category: category });

  expenseNameInput.value = "";
  expenseAmountInput.value = "";

  updateDashboard();
});

updateDashboard();