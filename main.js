let ExpenseController = (() => {
    let total = 0, Food = 0, Travel = 0, Shopping = 0, Stationery=0, Entertainment=0, Rent=0, Others=0;

    return {
        inputEntry(userInput) {
            if (userInput['expenseType'] === 'Food') {
                Food += userInput['value'];
                total += userInput['value'];
            }
            if (userInput['expenseType'] === 'Shopping') {
                Shopping += userInput['value'];
                total += userInput['value'];
            }
            if (userInput['expenseType'] === 'Travel') {
                Travel += userInput['value'];
                total += userInput['value'];
            }
            if (userInput['expenseType'] === 'Stationery') {
                Stationery += userInput['value'];
                total += userInput['value'];
            }
            if (userInput['expenseType'] === 'Entertainment') {
                Entertainment += userInput['value'];
                total += userInput['value'];
            }
            if (userInput['expenseType'] === 'Rent') {
                Rent += userInput['value'];
                total += userInput['value'];
            }
            if (userInput['expenseType'] === 'Others') {
                Others += userInput['value'];
                total += userInput['value'];
            }
        },

        getFoodData() {
            return Food;
        },

        getTravelData() {
            return Travel;
        },

        getShoppingData() {
            return Shopping;
        },

        getTotalData() {
            return total;
        },
        getEntertainmentData() {
            return Entertainment;
        },
        getStationeryData() {
            return Stationery;
        },
        getRentData() {
            return Rent;
        },
        getOthersData() {
            return Others;
        },
    }

})();

let UIController = (() => {
    let expenseType = 'Food';

    let HTMLStrings = {
        inExpenseDescription: '.input-expense-description',
        inExpenseValue: '.input-expense-value',
        btnSubmitExpense: '.btn-submit-expense',
        expenseList: '.expense-list',
        currentMonth: '#current-month',
        typeTravel: '#type-Travel',
        typeFood: '#type-Food',
        typeShopping: '#type-Shopping',
        typeEntertainment: '#type-Entertainment',
        typeOthers: '#type-Others',
        typeStationery: '#type-Stationery',
        typeRent: '#type-Rent',
        trackingText: '.tracking-text',
        expenseChart: '#expense-chart',
        monthBudget: '#month-budget'
    };

    return {
        numberFormat(number) {
            return Intl.NumberFormat('en-IN').format(number);
        },
        showCurrentMonth() {
            let now, month, year, months;

            now = new Date();
            month = now.getMonth();
            year = now.getFullYear();
            months = [
                'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
                'November', 'December'
            ];
            document.querySelector(HTMLStrings.currentMonth).textContent = months[month] + " " +  year;
        },

        getHTMLStrings() {
            return HTMLStrings;
        },

        setExpenseType(type) {
            console.log('here', type);
            this.expenseType = type;
            let emoji ="💰";
            if (type === 'Food') {
                emoji ="​🍟​🍔​🍕​";
                if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-warning')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-warning');
                }
                if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-danger')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-danger');
                }
                if (!document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-success')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.add('btn-success');
                }
            }

            if (type === 'Travel') {
                emoji = "✈️🗽";
                if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-warning')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-warning');
                }
                if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-success')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-success');
                }
                if (!document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-danger')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.add('btn-danger');
                }
            }

            if (type === 'Shopping') {
                emoji = "🛒";
                if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-danger')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-danger');
                }
                if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-success')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-success');
                }
                if (!document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-warning')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.add('btn-warning');
                }
            }

            if (type === 'Entertainment') {
                emoji ="🎥🎡🎮";
                if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-warning')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-warning');
                }
                if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-danger')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-danger');
                }
                if (!document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-success')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.add('btn-success');
                }
            }

            if (type === 'Others') {
                emoji ="💰";
                if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-warning')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-warning');
                }
                if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-danger')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-danger');
                }
                if (!document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-success')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.add('btn-success');
                }
            }
            if (type === 'Rent') {
                emoji ="🏠";
                if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-warning')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-warning');
                }
                if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-danger')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-danger');
                }
                if (!document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-success')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.add('btn-success');
                }
            }

            if (type === 'Stationery') {
                emoji ="🖍✍📐📈";
                if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-warning')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-warning');
                }
                if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-danger')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-danger');
                }
                if (!document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-success')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.add('btn-success');
                }
            }

            document.querySelector(HTMLStrings.trackingText).textContent = "Tracking " + type + " " + emoji;

        },

        getUserExpenseInput() {
            return {
                description: document.querySelector(HTMLStrings.inExpenseDescription).value,
                value: parseInt(document.querySelector(HTMLStrings.inExpenseValue).value),
                date: new Date().toLocaleDateString(),
                expenseType: this.expenseType ? this.expenseType : 'Food'
            }
        },

        addListItem (inputObj) {
            let html, element;
            element = HTMLStrings.expenseList;

            if (inputObj['expenseType'] === 'Food') {
                html = '<div class="bottom-border"> <div class="row expense-row"><div class="col-2 expense-date fs-15">' + inputObj['date'] + ' </div><div class="col-8 expense-text fs-15"> ' + inputObj['description'] + ' </div><div class="col-2 expense-value expense-Food fs-15"> ₹ ' + this.numberFormat(inputObj['value']) + ' </div></div>'
            } else if (inputObj['expenseType'] === 'Travel') {
                html = '<div class="bottom-border"> <div class="row expense-row"><div class="col-2 expense-date fs-15">' + inputObj['date'] + ' </div><div class="col-8 expense-text fs-15"> ' + inputObj['description'] + ' </div><div class="col-2 expense-value expense-Travel fs-15"> ₹ ' + this.numberFormat(inputObj['value']) + ' </div></div>'
            } else if (inputObj['expenseType'] === 'Shopping') {
                html = '<div class="bottom-border"> <div class="row expense-row"><div class="col-2 expense-date fs-15">' + inputObj['date'] + ' </div><div class="col-8 expense-text fs-15"> ' + inputObj['description'] + ' </div><div class="col-2 expense-value expense-Shopping fs-15"> ₹ ' + this.numberFormat(inputObj['value']) + ' </div></div>'
            }else if (inputObj['expenseType'] === 'Entertainment') {
                html = '<div class="bottom-border"> <div class="row expense-row"><div class="col-2 expense-date fs-15">' + inputObj['date'] + ' </div><div class="col-8 expense-text fs-15"> ' + inputObj['description'] + ' </div><div class="col-2 expense-value expense-Entertainment fs-15"> ₹ ' + this.numberFormat(inputObj['value']) + ' </div></div>'
            }else if (inputObj['expenseType'] === 'Stationery') {
                html = '<div class="bottom-border"> <div class="row expense-row"><div class="col-2 expense-date fs-15">' + inputObj['date'] + ' </div><div class="col-8 expense-text fs-15"> ' + inputObj['description'] + ' </div><div class="col-2 expense-value expense-Stationery fs-15"> ₹ ' + this.numberFormat(inputObj['value']) + ' </div></div>'
            }else if (inputObj['expenseType'] === 'Rent') {
                html = '<div class="bottom-border"> <div class="row expense-row"><div class="col-2 expense-date fs-15">' + inputObj['date'] + ' </div><div class="col-8 expense-text fs-15"> ' + inputObj['description'] + ' </div><div class="col-2 expense-value expense-Rent fs-15"> ₹ ' + this.numberFormat(inputObj['value']) + ' </div></div>'
            }else if (inputObj['expenseType'] === 'Others') {
                html = '<div class="bottom-border"> <div class="row expense-row"><div class="col-2 expense-date fs-15">' + inputObj['date'] + ' </div><div class="col-8 expense-text fs-15"> ' + inputObj['description'] + ' </div><div class="col-2 expense-value expense-Others fs-15"> ₹ ' + this.numberFormat(inputObj['value']) + ' </div></div>'
            }


            document.querySelector(element).insertAdjacentHTML('beforeend', html);

            document.querySelector(HTMLStrings.inExpenseValue).value = "";
            document.querySelector(HTMLStrings.inExpenseDescription).value = "";
        },

        updateOverallTotal(totalValue) {
            document.querySelector(HTMLStrings.monthBudget).textContent  = "₹ " + this.numberFormat(totalValue);

            if (totalValue > 0) {
                if (document.querySelector(HTMLStrings.monthBudget).classList.contains('expense-Travel')) {
                    document.querySelector(HTMLStrings.monthBudget).classList.remove('expense-Travel');
                }
                document.querySelector(HTMLStrings.monthBudget).classList.add('expense-Food');
            } else {
                if (document.querySelector(HTMLStrings.monthBudget).classList.contains('expense-Food')) {
                    document.querySelector(HTMLStrings.monthBudget).classList.remove('expense-Food');
                }
                document.querySelector(HTMLStrings.monthBudget).classList.add('expense-Travel');
            } 
        },

        displayChart(Food = 0, Travel = 0, Shopping = 0, Stationery = 0, Entertainment = 0, Rent = 0, Others = 0 ) {
            let ctx = document.querySelector(HTMLStrings.expenseChart);
            let expenseChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Food', 'Travel', 'Shopping', 'Entertainment', 'Stationery', 'Rent', 'Others'],
                    datasets: [{
                        data: [Food, Travel, Shopping, Entertainment, Stationery, Rent, Others],
                        backgroundColor: [
                            '#039300',
                            'rgba(255, 84, 98, 1)',
                            'rgba(255, 206, 86, 1)',
                            '#2b5797',
                            '#e8c3b9',
                            '#1e7145',
                            '#00aba9'
                        ],
                        borderWidth: 0.5
                    }]
                },
                options: {
                    legend: {
                        labels: {
                            fontColor: 'white'
                        }
                    }
                }
            });
        }
    }
})();

((UIController, ExpenseController) => {

    let HTMLStrings = UIController.getHTMLStrings();
    let setupEventListeners = () => {
        document.querySelector(HTMLStrings.btnSubmitExpense).addEventListener('click', addExpense);
        document.querySelector(HTMLStrings.typeTravel).addEventListener('click', () => {
            setExpenseType('Travel')
        });
        document.querySelector(HTMLStrings.typeShopping).addEventListener('click', () => {
            setExpenseType('Shopping')
        });
        document.querySelector(HTMLStrings.typeFood).addEventListener('click', () => {
            setExpenseType('Food')
        });
        document.querySelector(HTMLStrings.typeEntertainment).addEventListener('click', () => {
            setExpenseType('Entertainment')
        });
        document.querySelector(HTMLStrings.typeRent).addEventListener('click', () => {
            setExpenseType('Rent')
        });
        document.querySelector(HTMLStrings.typeStationery).addEventListener('click', () => {
            setExpenseType('Stationery')
        });
        document.querySelector(HTMLStrings.typeOthers).addEventListener('click', () => {
            setExpenseType('Others')
        });
    };

    let setExpenseType = (type) => {
        UIController.setExpenseType(type);
    }

    let addExpense = () => {
        let input = UIController.getUserExpenseInput();
        console.log(input);

        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            console.log('Adding item');
            UIController.addListItem(input);
            ExpenseController.inputEntry(input);
            UIController.updateOverallTotal(ExpenseController.getTotalData());
            UIController.displayChart(ExpenseController.getFoodData(), ExpenseController.getTravelData(),
                ExpenseController.getShoppingData(),ExpenseController.getEntertainmentData,
                ExpenseController.getStationeryData,ExpenseController.getRentData,ExpenseController.getOthersData);
        }
    }

    let init = () => {
        console.log('Initializing...');
        setupEventListeners();
        UIController.showCurrentMonth();
    }

    init();

})(UIController, ExpenseController);