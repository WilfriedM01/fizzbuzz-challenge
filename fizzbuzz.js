module.exports = function () {
  let ans = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
      ans.push("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
      ans.push("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
      ans.push("Buzz");
    } else {
      console.log(i);
      ans.push(i);
    }
  }

  return ans;
};
