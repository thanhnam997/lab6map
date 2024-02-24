/* Input elements */
let expenseNameInput = document.querySelector('#expense-name');
let expenseAmountInput = document.querySelector('#expense-amount');
let addExpenseButton = document.querySelector('#add-expense');

/* Get chart canvas and context */
let chartCanvas = document.querySelector('#expenses-doughnut-chart');
let ctx = chartCanvas.getContext('2d');

// TODO create chart object
let expenseChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [],
            backgroundColor: []
        }],
        labels: []
    },
    options: {}
});

// TODO (optional) replace with colors of your choice. The array can have as many or as few colors as you like 
let chartColors = ['tomato', 'orange', 'dodgerblue', 'mediumseagreen', 'slateblue', 'violet'];

function addExpenseToChart(name, amount) {
    // TODO add expense to chart 
    expenseChart.data.labels.push(name);
    expenseChart.data.datasets[0].data.push(amount);

    let colorCount = expenseChart.data.datasets[0].backgroundColor.length;
    let color = chartColors[colorCount % chartColors.length];

    expenseChart.data.datasets[0].backgroundColor.push(color);
    expenseChart.update();
}

addExpenseButton.addEventListener('click', function() {
    let errors = [];

    let expenseName = expenseNameInput.value;
    let expenseAmount = expenseAmountInput.value;

    // Validate both fields are filled in, and the amount is a positive number
    if (expenseName.length === 0) {
        errors.push('Enter a type of expense');
    }

    if (expenseAmount.length === 0 || expenseAmount < 0) {
        errors.push('Enter a positive amount for the expense');
    }

    // If any errors, alert and return - do not proceed to add to chart 
    if (errors.length > 0) {
        alert(errors.join('\n'));
        return;
    }

    // Call function to update chart
    addExpenseToChart(expenseName, expenseAmount);

    // Clear inputs, ready for the next expense name and amount.
    expenseNameInput.value = '';
    expenseAmountInput.value = '';
});

// Add event listener to click the Add Expense button when the enter key is pressed 
window.addEventListener('keyup', function(event) {
    // Check if enter key is pressed, which has keyCode 13
    if (event.keyCode === 13) {
        addExpenseButton.click();  // Click the button
        expenseNameInput.focus();  // Move focus to expense name input for convenience
    }
});
