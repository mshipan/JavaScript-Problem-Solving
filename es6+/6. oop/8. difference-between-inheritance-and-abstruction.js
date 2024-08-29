// Concrete Class that implements the abstract method
// class PayPal extends PaymentProcessor {
//   processPayment(amount) {
//     console.log(Processing payment of $${amount} through PayPal.);
//   }
// }

// is this not inheritance ? so, why this relate to abstraction?

// আপনার পর্যবেক্ষণ সঠিক যে এই উদাহরণটি ইনহেরিট্যান্স (Inheritance) সম্পর্কিত। তবে এখানে Abstraction এবং Inheritance উভয়ই প্রয়োগ করা হয়েছে। আসুন বিস্তারিতভাবে এটি ব্যাখ্যা করি:

// Inheritance:
// Inheritance হলো Object-Oriented Programming (OOP)-এর একটি প্রক্রিয়া যেখানে একটি ক্লাস (Child বা Subclass) আরেকটি ক্লাসের (Parent বা Superclass) থেকে বৈশিষ্ট্য (properties)
// এবং মেথড (methods) উত্তরাধিকার সূত্রে পায়। উদাহরণে PayPal ক্লাসটি PaymentProcessor ক্লাস থেকে ইনহেরিট করেছে এবং এর ফলে PayPal ক্লাসটি PaymentProcessor ক্লাসের বৈশিষ্ট্যগুলো পেয়েছে।

// Inheritance উদাহরণ:
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

class PayPal extends PaymentProcessor {
  processPayment(amount) {
    console.log(`Processing payment of $${amount} through PayPal.`);
  }
}

// এখানে PayPal ক্লাসটি PaymentProcessor ক্লাস থেকে ইনহেরিট করেছে এবং processPayment() মেথডটি নিজের মত করে ওভাররাইড করেছে।

// Abstraction:
// Abstraction হলো OOP-এর এমন একটি ধারণা যা জটিলতা লুকিয়ে রেখে একটি ক্লাসের বাইরে কেবলমাত্র প্রয়োজনীয় দিকগুলো প্রকাশ করে। এটি এমনভাবে ডিজাইন করা হয়েছে যাতে ব্যবহারকারী কেবলমাত্র
// সেই ইন্টারফেস বা ফাংশনালিটি দেখতে পারে যা সে ব্যবহার করবে, কিন্তু অভ্যন্তরীণ ইমপ্লিমেন্টেশন থেকে বিচ্ছিন্ন থাকবে।

// Abstraction-এর বাস্তবায়ন:

// - PaymentProcessor ক্লাসটি একটি abstract ক্লাসের মত কাজ করছে। এটি একটি সাধারণ ইন্টারফেস হিসেবে কাজ করে এবং কোন একটি নির্দিষ্ট পেমেন্ট প্রক্রিয়া কীভাবে কাজ করবে তা সংজ্ঞায়িত করে না।
// - PaymentProcessor ক্লাসটি নিজে নিজে ইনস্ট্যান্সিয়েট করা যায় না কারণ এটি কেবলমাত্র একটি ব্লুপ্রিন্ট যা পরবর্তী ক্লাসগুলোর (যেমন PayPal) জন্য কাঠামো তৈরি করে।

// এখানে, Abstraction প্রয়োগ করা হয়েছে PaymentProcessor ক্লাসের মাধ্যমে, যা একটি ইন্টারফেসের মত কাজ করছে। এটি শুধুমাত্র processPayment মেথডটি ডিফাইন করে দেয়, কিন্তু এটি
// কীভাবে বাস্তবায়িত হবে তা সাবক্লাসগুলোর (যেমন PayPal) উপর নির্ভর করে। এভাবে, PayPal ক্লাসটি এই মেথডটি নিজের মত করে ইমপ্লিমেন্ট করে।

// সংক্ষেপে:
// - Inheritance: PayPal ক্লাসটি PaymentProcessor ক্লাস থেকে ইনহেরিট করছে।
// - Abstraction: PaymentProcessor ক্লাসটি একটি abstraction হিসাবে কাজ করছে, যা একটি ইন্টারফেস বা সাধারণ কাঠামো তৈরি করে এবং সাবক্লাসগুলিকে সেই কাঠামোর ভিত্তিতে নিজস্ব ইমপ্লিমেন্টেশন
//   করতে বাধ্য করে।

// তাহলে, এখানে Inheritance এবং Abstraction উভয়ই কার্যকর হচ্ছে। Inheritance ক্লাসগুলির মধ্যে সম্পর্ক স্থাপন করে এবং Abstraction সেই সম্পর্কের মাধ্যমে জটিলতা লুকিয়ে রেখে সাধারণ
// ইন্টারফেস প্রদান করে।
