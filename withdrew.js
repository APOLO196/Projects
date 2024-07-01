class MyBankAccount {
  constructor(accountNumber, initialBalance = 0) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    } else {
      console.log('Deposit amount must be positive.');
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
    } else {
      console.log('Invalid withdrawal amount.');
    }
  }

  getBalance() {
    return this.balance;
  }
}

class MyBank {
  constructor() {
    this.accounts = new Map();
  }

  createAccount(accountNumber, initialBalance = 0) {
    if (this.accounts.has(accountNumber)) {
      console.log('Account already exists.');
      return null;
    } else {
      const newAccount = new MyBankAccount(accountNumber, initialBalance);
      this.accounts.set(accountNumber, newAccount);
      console.log(`Account ${accountNumber} created with balance ${initialBalance}.`);
      return newAccount;
    }
  }

  getAccount(accountNumber) {
    if (this.accounts.has(accountNumber)) {
      return this.accounts.get(accountNumber);
    } else {
      console.log('Account does not exist.');
      return null;
    }
  }
}

// Примерна употреба
const myBank = new MyBank();

const myAccount = myBank.createAccount('123456', 1000);

const existingAccount = myBank.getAccount('123456');
if (existingAccount) {
  console.log(`Balance: ${existingAccount.getBalance()}`); // Balance: 1000
}

if (existingAccount) {
  existingAccount.deposit(500);
  console.log(`Balance after deposit: ${existingAccount.getBalance()}`); // Balance after deposit: 1500
}

if (existingAccount) {
  existingAccount.withdraw(200);
  console.log(`Balance after withdrawal: ${existingAccount.getBalance()}`); // Balance after withdrawal: 1300
}

const nonExistentAccount = myBank.getAccount('654321');
if (!nonExistentAccount) {
  console.log('Error: Account does not exist.');
}
