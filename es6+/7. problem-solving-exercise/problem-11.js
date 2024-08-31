// Create a BankAccount class with private properties for balance and account number. Include methods to deposit, withdraw, and check the balance.
// Ensure that the balance cannot be directly accessed or modified outside the class.

class BankAccount {
  #balance;
  constructor(balance, accountNumber) {
    this.#balance = balance;
    this.accountNumber = accountNumber;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return `Deposit successful! New balance is $${this.#balance}`;
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      return `Withdrawn: $${amount}. New Balance: $${this.#balance}`;
    } else {
      return "Invalid withdraw amount.";
    }
  }

  checkBalance() {
    return `My current balance of the account number ${
      this.accountNumber
    } is $${this.#balance}`;
  }
}

const account = new BankAccount(500, 123456);
console.log(account.deposit(500));
console.log(account.withdraw(50));
console.log(account.checkBalance());
