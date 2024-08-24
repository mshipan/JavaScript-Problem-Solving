// Write a program that demonstrates hoisting by declaring a function and a variable after they are used in the code. Explain the output.

console.log(myVar); // Output: undefined
myFunction(); // Output: "Hello from myFunction!"

var myVar = 10;

function myFunction() {
  console.log("Hello from myFunction!");
}

// আউটপুট ব্যাখ্যা:

// 1. console.log(myVar);
//    - আউটপুট: undefined
//    - ব্যাখ্যা: যদিও myVar ভেরিয়েবলটি পরে ডিক্লার করা হয়েছে, হোইস্টিংয়ের কারণে জাভাস্ক্রিপ্ট ইঞ্জিন প্রথমে সব ভেরিয়েবল ডিক্লারেশন (ডিফাইন করা ছাড়াই) উপরে নিয়ে আসে। অর্থাৎ, কোডটি বাস্তবে এমন হয়:
//      var myVar;
//      console.log(myVar); // undefined
//      myVar = 10;
//    - ডিক্লারেশনটি Hoist করা হয়, তবে ভেরিয়েবলটি ইনিশিয়ালাইজ করা হয় না, তাই undefined আউটপুট পাওয়া যায়।

// 2. myFunction();

//    - আউটপুট: "Hello from myFunction!"
//    - ব্যাখ্যা: হোইস্টিংয়ের কারণে সম্পূর্ণ ফাংশন ডিক্লারেশনটি উপরে নিয়ে আসা হয়, তাই ফাংশনটি ডিক্লারেশনের আগেই কল করা যায়। এটি বাস্তবে এমন হয়:
//      function myFunction() {
//      console.log("Hello from myFunction!");
//      }
//      myFunction(); // "Hello from myFunction!"

// 3. ভেরিয়েবল myVar এর ডিক্লারেশন এবং ইনিশিয়ালাইজেশন:

//    - পরে কোডে var myVar = 10; এর মাধ্যমে myVar ভেরিয়েবলটি ডিক্লার করা এবং ইনিশিয়ালাইজ করা হয়।

// ***********************************************
// Hoisting কী?
// হোইস্টিং হলো জাভাস্ক্রিপ্টের একটি মেকানিজম যেখানে ভেরিয়েবল এবং ফাংশনের ডিক্লারেশনগুলো তাদের স্কোপের টপে নিয়ে আসা হয়, অর্থাৎ, কোড ব্লকের উপরের দিকে আনা হয়। তবে ভেরিয়েবল
// ইনিশিয়ালাইজেশন Hoist হয় না, শুধু ডিক্লারেশন হয়।

// ফাংশন ডিক্লারেশন পুরোপুরি হোইস্ট হয়, অর্থাৎ ডিক্লারেশন এবং এর কোড ব্লক উভয়ই হোইস্ট করা হয়।
// ভেরিয়েবল ডিক্লারেশন হোইস্ট হয়, তবে ইনিশিয়ালাইজেশন হোইস্ট হয় না।
