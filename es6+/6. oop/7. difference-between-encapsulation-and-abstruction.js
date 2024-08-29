// I think encapsulation and abstraction are same thing, because of there definition. is it true?

// Encapsulation এবং Abstraction দুটি ভিন্ন Object-Oriented Programming (OOP) ধারণা, যদিও তারা সম্পর্কিত এবং একে অপরের সাথে কিছুটা ওভারল্যাপ করে।
// তাদের মধ্যে পার্থক্য রয়েছে, এবং এই পার্থক্য বোঝা খুবই গুরুত্বপূর্ণ। আসুন, এই ধারণাগুলির মধ্যে পার্থক্য ব্যাখ্যা করি।

// Encapsulation:
// Encapsulation হলো ডেটা এবং মেথডগুলোকে একটি ক্লাসের মধ্যে বেঁধে রাখা। এর মাধ্যমে একটি ক্লাসের ডেটা এবং মেথডগুলো বাইরের কোড থেকে সরাসরি অ্যাক্সেস করা যায় না।
// Encapsulation ব্যবহার করে ডেটাকে সুরক্ষিত রাখা হয় এবং বাইরের কোডকে কেবলমাত্র পাবলিক মেথডের মাধ্যমে সেই ডেটার সাথে কাজ করতে দেয়া হয়।

// Encapsulation উদাহরণ:
class BankAccount {
  // Private Properties (Encapsulation ব্যবহার করে)
  #balance = 0;

  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.#balance = balance;
  }

  // Public Method to access private property
  getBalance() {
    return `Your balance is $${this.#balance}`;
  }

  // Public Method to modify private property
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return `Deposit successful! New balance is $${this.#balance}`;
    } else {
      return "Deposit amount must be positive.";
    }
  }
}

const myAccount = new BankAccount(123456789, 1000);
console.log(myAccount.getBalance()); // Accessing private property through public method
console.log(myAccount.deposit(500)); // Modifying private property through public method
console.log(myAccount.getBalance());

// Abstraction:
// Abstraction হলো জটিলতা লুকিয়ে রেখে একটি ক্লাসের বাইরে কেবলমাত্র প্রয়োজনীয় দিকগুলো প্রদর্শন করা। এর মাধ্যমে ব্যবহারকারী কেবলমাত্র ক্লাসের কাজ কী তা জানে,
// কিন্তু কিভাবে সেই কাজটি সম্পন্ন হয় তা জানে না। এটি একটি উচ্চ-স্তরের ধারণা যেখানে ব্যবহারকারী শুধু ইন্টারফেস বা ফাংশনালিটি দেখেন, কিন্তু অভ্যন্তরীণ ইমপ্লিমেন্টেশন থেকে দূরে থাকেন।

// Abstraction উদাহরণ:

class PaymentProcessor {
  constructor() {
    if (this.constructor === PaymentProcessor) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }

  processPayment(amount) {
    throw new Error("Method 'processPayment()' must be implemented.");
  }
}

// Concrete Class that implements the abstract method
class PayPal extends PaymentProcessor {
  processPayment(amount) {
    console.log(`Processing payment of $${amount} through PayPal.`);
  }
}

// Another Concrete Class
class Stripe extends PaymentProcessor {
  processPayment(amount) {
    console.log(`Processing payment of $${amount} through Stripe.`);
  }
}

const payment1 = new PayPal();
payment1.processPayment(100);

const payment2 = new Stripe();
payment2.processPayment(200);

// পার্থক্য:
// 1. Encapsulation:

//    - প্রাথমিক উদ্দেশ্য: ডেটা এবং মেথডগুলিকে প্রাইভেট রেখে তাদের বাইরের কোড থেকে রক্ষা করা।
//    - ফোকাস: ডেটা হাইডিং এবং ডেটা ম্যানিপুলেশন নিয়ন্ত্রণ করা।
//    - কীভাবে ব্যবহৃত হয়: প্রাইভেট প্রোপার্টি এবং মেথডগুলো ব্যবহার করে ক্লাসের ভিতরে ডেটা সংরক্ষণ করে এবং বাইরের কোডকে পাবলিক মেথডের মাধ্যমে সেই ডেটার সাথে কাজ করতে দেয়া।
//    - উদাহরণ: প্রাইভেট প্রোপার্টি এবং পাবলিক মেথড ব্যবহার করে BankAccount ক্লাসের উদাহরণ।

// 2. Abstraction:

//    - প্রাথমিক উদ্দেশ্য: জটিলতা লুকিয়ে রেখে শুধু প্রয়োজনীয় এবং প্রাসঙ্গিক দিকগুলো প্রকাশ করা।
//    - ফোকাস: সিস্টেমের উচ্চ-স্তরের ইন্টারফেস এবং ফাংশনালিটির উপর।
//    - কীভাবে ব্যবহৃত হয়: ইন্টারফেস বা Abstract ক্লাস ব্যবহার করে। ক্লায়েন্ট শুধুমাত্র API এর মাধ্যমে কাজ করে, কিন্তু অভ্যন্তরীণ কার্যপ্রণালী সম্পর্কে জানে না।
//    - উদাহরণ: PaymentProcessor ক্লাসের উদাহরণ, যেখানে ক্লায়েন্ট শুধু processPayment() মেথড ব্যবহার করে, কিন্তু কিভাবে পেমেন্ট প্রক্রিয়া করা হয় তা জানে না।

// সংক্ষেপে:
// - Encapsulation হল একটি ক্লাসের ডেটা এবং মেথডগুলোকে প্রাইভেট রাখা এবং বাইরের কোড থেকে তাদের রক্ষা করা। এটি ডেটা সুরক্ষা এবং নিয়ন্ত্রণের জন্য ব্যবহৃত হয়।
// - Abstraction হল জটিলতা লুকিয়ে রাখা এবং শুধু প্রয়োজনীয় দিকগুলো প্রকাশ করা। এটি ব্যবহারকারীকে সিস্টেমের উচ্চ-স্তরের ইন্টারফেস দিয়ে কাজ করতে দেয়, যা অভ্যন্তরীণ কাজকর্ম থেকে বিচ্ছিন্ন থাকে।
