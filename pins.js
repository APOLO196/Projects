class MyBankAccount {
    constructor(accountNumber, initialBalance = 0) {
      this.accountNumber = accountNumber;
      this.balance = initialBalance;
      this.pin = this.generatePin();
    }
  
    generatePin() {
      return Math.floor(1000 + Math.random() * 9000); // Генерира произволен ПИН от 4 цифри
    }
  
    checkPin(inputPin) {
      return this.pin === inputPin;
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
  
    getBalance(inputPin) {
      if (this.checkPin(inputPin)) {
        return this.balance;
      } else {
        console.log('Invalid PIN.');
        return null;
      }
    }
  
    getAccountDetails(inputPin) {
      if (this.checkPin(inputPin)) {
        return {
          accountNumber: this.accountNumber,
          balance: this.balance,
        };
      } else {
        console.log('Invalid PIN.');
        return null;
      }
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
        console.log(`Account ${accountNumber} created with balance ${initialBalance}. PIN: ${newAccount.pin}`);
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

  // Създаваме нова банка
const myBank = new MyBank();

// Създаваме нова сметка
const myAccount = myBank.createAccount('123456', 1000);
const accountPin = myAccount ? myAccount.pin : null; // Запазваме ПИН кода за по-късно използване

// Проверяваме баланса на съществуваща сметка с правилния ПИН
const existingAccount = myBank.getAccount('123456');
if (existingAccount) {
  console.log(existingAccount.getAccountDetails(accountPin)); // Показва данните за акаунта
  console.log(`Balance: ${existingAccount.getBalance(accountPin)}`); // Balance: 1000
}

// Опит за проверка на баланса с грешен ПИН
if (existingAccount) {
  const wrongPin = 1234;
  console.log(existingAccount.getAccountDetails(wrongPin)); // Invalid PIN
  console.log(`Balance: ${existingAccount.getBalance(wrongPin)}`); // Invalid PIN
}

// Депозиране на средства
if (existingAccount) {
  existingAccount.deposit(500);
  console.log(`Balance after deposit: ${existingAccount.getBalance(accountPin)}`); // Balance after deposit: 1500
}

// Теглене на средства
if (existingAccount) {
  existingAccount.withdraw(200);
  console.log(`Balance after withdrawal: ${existingAccount.getBalance(accountPin)}`); // Balance after withdrawal: 1300
}

// Опит за влизане в несъществуваща сметка
const nonExistentAccount = myBank.getAccount('654321');
if (!nonExistentAccount) {
  console.log('Error: Account does not exist.');
}
// Проверка на баланса с правилния ПИН
if (existingAccount) {
   
    const  pinInput = readlineSync.question('Enter your PIN: ');
    const pin = parseInt(pinInput);
    if (existingAccount.checkPin(pin)) {
      console.log(existingAccount.getAccountDetails(pin)); // Показва данните за акаунта
      console.log(`Balance: ${existingAccount.getBalance(pin)}`); // Показва баланса
    } else {
      console.log('Invalid PIN.');
    }
  }
  
  // Опит за проверка на баланса с грешен ПИН
  if (existingAccount) {
    const wrongPin = 1234; // Тук трябва да въведете грешен ПИН от клавиатурата
    console.log(existingAccount.getAccountDetails(wrongPin)); // Invalid PIN
    console.log(`Balance: ${existingAccount.getBalance(wrongPin)}`); // Invalid PIN
  }