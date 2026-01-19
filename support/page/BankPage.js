class BankingPage {
    visit() {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    }

    loginCustomer(name) {
        cy.get('[ng-click="customer()"]').click();
        cy.get('#userSelect').select(name);
        cy.get('button[type="submit"]').click();
    }

    deposit(amount) {
        cy.get('[ng-click="deposit()"]').click();
        cy.get('[ng-model="amount"]').clear().type(amount);
        cy.get('button[type="submit"]').click();
        cy.contains('Deposit Successful');
        cy.wait(500);
    }

    transactions() {
        cy.get('[ng-click="transactions()"]').click();
    }

    getBalance() {
        return cy.get('div[ng-hide="noAccount"]').first().invoke('text');
    }

    validateTransactionSum(expectedAmount) {
        cy.get('tbody tr td:nth-child(2)').then($cells => {
            const total = $cells.toArray().reduce((sum, cell) => sum + parseInt(cell.innerText), 0);
            expect(total).to.equal(expectedAmount);
        });
    }
}

export default BankingPage;
