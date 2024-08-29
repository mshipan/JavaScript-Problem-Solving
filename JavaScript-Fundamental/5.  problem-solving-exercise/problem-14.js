// Create a function that declares a variable inside an if block and attempts to access it outside the block. Analyze what happens and explain why.

function testScope() {
  if (true) {
    var insideIfVar = "I am inside if block";
    let insideIfLet = "I am also inside if block";
    const insideIfConst = "I am a constant inside if block";
  }

  console.log(insideIfVar); // This will work
  console.log(insideIfLet); // This will throw an error
  console.log(insideIfConst); // This will throw an error
}

testScope();

// আউটপুট ব্যাখ্যা:
// 1. console.log(insideIfVar);
//    - আউটপুট: "I am inside if block"
//    - ব্যাখ্যা: var দিয়ে ডিক্লার করা ভেরিয়েবল ফাংশন-স্কোপড (function-scoped)। এটি পুরো ফাংশনের মধ্যে অ্যাক্সেসযোগ্য হয়, এমনকি যদি এটি কোনো ব্লকের (যেমন if) ভিতরে ডিক্লার করা হয়।
//      সুতরাং, insideIfVar কে ব্লকের বাইরে অ্যাক্সেস করা সম্ভব।

// 2. console.log(insideIfLet);
//    - আউটপুট: Error: insideIfLet is not defined
//    - ব্যাখ্যা: let দিয়ে ডিক্লার করা ভেরিয়েবল ব্লক-স্কোপড (block-scoped)।
//      এটি শুধুমাত্র সেই ব্লকের মধ্যে অ্যাক্সেসযোগ্য যেখানে এটি ডিক্লার করা হয়েছে। তাই if ব্লকের বাইরে insideIfLet কে অ্যাক্সেস করা সম্ভব নয়, এবং এটি অ্যাক্সেস
//      করার চেষ্টা করলে একটি ReferenceError হয়।

// 3. console.log(insideIfConst);
//    - আউটপুট: Error: insideIfConst is not defined
//    - ব্যাখ্যা: const দিয়ে ডিক্লার করা ভেরিয়েবলও ব্লক-স্কোপড। এটি let এর মতো একই নিয়ম অনুসরণ করে, অর্থাৎ এটি শুধুমাত্র সেই ব্লকের মধ্যে অ্যাক্সেসযোগ্য যেখানে এটি ডিক্লার করা হয়েছে।
//      তাই if ব্লকের বাইরে insideIfConst কে অ্যাক্সেস করার চেষ্টা করলে একইভাবে ReferenceError হয়।

// বিশ্লেষণ:
// 1. var ভেরিয়েবলগুলো ফাংশন-স্কোপড, তাই ব্লকের বাইরে থেকেও এগুলোকে অ্যাক্সেস করা যায়।
// 2. let এবং const ভেরিয়েবলগুলো ব্লক-স্কোপড, তাই এগুলোকে কেবলমাত্র সেই ব্লকের ভিতরেই অ্যাক্সেস করা যায় যেখানে এগুলো ডিক্লার করা হয়েছে।
