import BankPage from "../support/page/BankPage";

describe('Interview task', () => {
    const bankPage = new BankPage();

    it('Transaction validation', () => {
        bankPage.visit();
        bankPage.loginCustomer('Harry Potter');
        bankPage.deposit(100);
        bankPage.deposit(10);
        bankPage.deposit(5);
        bankPage.getBalance().should('contain', 'Balance : 115');
        bankPage.transactions();
        bankPage.validateTransactionSum(115);
    });
});
