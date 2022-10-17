// 1. Create a function, inside the function add a second function, and again add a third function into the second function.

function func() {
  return function () {
    return function () {
      return "hello";
    };
  };
}
console.log(func()()());

// 2. Create 3 variables.
var one = "apple";
var two = "banana";
var three = "carrot";

// 3. Define 3 the variables in the correct place so that:
//  a.The first variable is accessible inside every function.
//  b.The second variable is accessible inside the second and third function only.
//  c.The third variable is accessible inside the third function only.

var four = "doughnut";

function func1() {
  var one = "apple";
  console.log(one, four);

  function func2() {
    var two = "banana";
    console.log(one, two, four);

    function func3() {
      var three = "carrot";
      var four = "doughnut";
      console.log(one, two, three, four);
      function func4() {
        var five = "egg";
        console.log(five);
      }
      func4();
    }
    func3();
  }
  func2();
}
func1();

// 4. Define a 4th variable inside the 3rd function. This variable should be accessible by every function.
// see Q3
// 5. Create a scope inside the 3rd function, place a variable inside it that is only accessible inside that scope.
// see Q3
// 6. Create an object which contains a function which console.logs this.something, where something is any name you like.

var myName1 = {
  name: "paula",
  func: function () {
    return this.name;
  },
};
console.log(myName1.func());

// 7. Create an object which contains a variable which has the same name as you used above.

var myName2 = {
  name: "sam",
};

// 8. Use call to send the object at q7 to the function inside q6, forcing the function to use the this you sent it.~

console.log(myName1.func.call(myName2));
