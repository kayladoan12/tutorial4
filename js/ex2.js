/* Tutorial 4
Example 2 JavaScript code
*/
console.log("Doan's Output from Tutorial 4 HW 4 Exercise 2")

function arrayToObject(arr) {
  return {
    first: arr[0],
    last: arr[arr.length - 1],
    length: arr.length
  };
}

function demo() {
  const arr1 = [10, 20, 30, 40, 50];
  const arr2 = ["k",2,"Hi", 6, [4,5], "bye", { name: "Doan", score : 99}];

  console.log("Input array:", arr1);
  console.log("Returned object:", arrayToObject(arr1));

  console.log("Input array:", arr2);
  console.log("Returned object:", arrayToObject(arr2));
}

demo();

