// Create a PaymentProcessor class with a method processPayment. Then, create derived classes like CreditCardProcessor, PayPalProcessor, and BankTransferProcessor
// that override the method to process payments differently. Demonstrate how polymorphism allows you to use these classes interchangeably.

class PaymentProcessor {
  processPayment(amount) {
    throw new Error("Method 'processPayment' must be implemented.");
  }
}

class CreditCardProcessor extends PaymentProcessor {
  processPayment(amount) {
    console.log(`Processing credit card payment of $${amount}.`);
  }
}

class PayPalProcessor extends PaymentProcessor {
  processPayment(amount) {
    console.log(`Processing PayPal payment of $${amount}.`);
  }
}

class BankTransferProcessor extends PaymentProcessor {
  processPayment(amount) {
    console.log(`Processing bank transfer payment of $${amount}.`);
  }
}

// Demonstrate Polymorphism
function makePayment(processor, amount) {
  processor.processPayment(amount);
}

const creditCardProcessor = new CreditCardProcessor();
const payPalProcessor = new PayPalProcessor();
const bankTransferProcessor = new BankTransferProcessor();

makePayment(creditCardProcessor, 100); // Output: Processing credit card payment of $100.
makePayment(payPalProcessor, 200); // Output: Processing PayPal payment of $200.
makePayment(bankTransferProcessor, 300); // Output: Processing bank transfer payment of $300.

// ব্যাখ্যা:

// 1. PaymentProcessor ক্লাস:
//    এই ক্লাসটি একটি বেস ক্লাস হিসেবে কাজ করে, যেখানে processPayment নামক একটি মেথড ডিফাইন করা হয়েছে।
//    এই মেথডটি পরবর্তী ক্লাসগুলোতে ওভাররাইড (অন্যভাবে সংজ্ঞায়িত) করার জন্য ডিজাইন করা হয়েছে।
//    যদি কোনো ডেরাইভড (উত্তরাধিকারী) ক্লাস এই মেথডটি ইমপ্লিমেন্ট না করে, তাহলে একটি এরর ছুঁড়ে দেওয়া হবে।

// 2. ডেরাইভড ক্লাসসমূহ (CreditCardProcessor, PayPalProcessor, BankTransferProcessor):
//    এই ক্লাসগুলো PaymentProcessor ক্লাস থেকে এক্সটেন্ড (উত্তরাধিকার) করেছে এবং প্রতিটি ক্লাসের মধ্যে processPayment মেথডের নির্দিষ্ট ইমপ্লিমেন্টেশন দেওয়া হয়েছে,
//    যাতে বিভিন্ন পেমেন্ট পদ্ধতি অনুযায়ী পেমেন্ট প্রসেস করতে পারে।

// 3. পলিমরফিজম (Polymorphism):
//    makePayment ফাংশনটি পলিমরফিজমের উদাহরণ হিসাবে কাজ করে, যেখানে এটি PaymentProcessor থেকে ডেরাইভড যেকোনো অবজেক্টকে অ্যাক্সেপ্ট করতে পারে।
//    ফাংশনটি এই প্রসেসরের নির্দিষ্ট ধরনের প্রয়োজন হয় না জানার জন্য, তাই processPayment মেথডটি যেকোনো অবজেক্টের উপর কল করা যায়।
//    ফাংশনে যে অবজেক্টটি পাঠানো হয়, তার ওপর ভিত্তি করে সঠিক ইমপ্লিমেন্টেশন চালু হয়।
