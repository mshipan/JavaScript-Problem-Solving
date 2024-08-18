// There are three types of loops

// They are

// 1. for
// 2. do...while
// 3. while

// Also have two statements in here
// 1. break
// 2. continue

// **** for ****
for (var i = 0; i < 10; i++) {
  console.log(`Go ` + i + ` step`);
}

// **** do...while ****
var num = 15;
do {
  console.log(`Inside the loop, num is: ` + num);
  num += 1;
} while (num < 10);
console.log(`Outside the loop`);

// **** while ****
var n = 1;
while (n < 10) {
  console.log(`Inside the loop`);
  n += 1;
}
console.log(`while Outside the loop`);

// **** break ****
for (var i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(`i = ` + i);
}

// **** continue ****
for (var i = 0; i < 10; i++) {
  if (i === 5) {
    console.log(i + ` is skipped`);
    continue;
  }
  console.log(`i = ` + i);
}
