function calculateSequence(n) {
    var sequence = [1];

    for (var i = 1; i < n; i++) {
        var lastNumber = sequence[sequence.length - 1];
        var nextNumber = lastNumber + i + 1;
        sequence.push(nextNumber);
    }

    return sequence;
}

var n = 20;
var sequence = calculateSequence(n);
console.log(sequence);
//   --------------------------------------------------------------------
function printArrayTypes(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(typeof array[i]);
    }
}
let myArray = [1, "hello", true, [1, 2], null, { name: "mahdi" }];
printArrayTypes(myArray);
// -------------------------------------------------

function countVariables(...variables) {
    let count = 0;
    let variableTypes = {};

    variables.forEach((variable) => {
        const type = typeof variable;
        if (!variableTypes[type]) {
            variableTypes[type] = 1;
        } else {
            variableTypes[type]++;
        }
        count++;
    });

    console.log(variableTypes);
}

const variable1 = 5;
const variable2 = "Hello";
const variable3 = true;
const variable4 = [1, 2, 3];
const variable5 = { name: "John", age: 25 };

countVariables(variable1, variable2, variable3, variable4, variable5);
//   ===================================================================================
// function calc(num, count) {
//     var calc = [];

//     for (var i = 1; i <= count; i++) {
//         calc.push(num * i);
//     }

//     console.log(calc);
//   }

//   printcalc( prompt("number1"),prompt("bumber2 "));
//   ------------------------------------------------------------------------------------------------------------
function reverseArray(array) {
    let start = 0;
    let end = array.length - 1;

    while (start < end) {
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;

        start++;
        end--;
    }

    return array;
}

let numbers = [1, 2, 3, 4, 5];
console.log(reverseArray(numbers));
// -------------------------------------------------------------------------------------------------------------------------------------------------
function convertToSingleArray(arr) {
    if (arr.length === 1) {
        return arr[0];
    } else {
        return arr.flat();
    }
}

let multiDimensionalArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let singleArray = convertToSingleArray(multiDimensionalArray);
console.log(singleArray);

// -----------------------------------------------------------------------------------------------------
const myObject = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
  };
  const keys = Object.keys(myObject);
  
  console.log(keys);
// ----------------------------------------------------------------------------
function listProperties(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        console.log(prop + ': ' + obj[prop]);
      }
    }
  }
  
  var myObjects = {
    name: 'mahdi',
    age: 17,
    job: 'Developer'
  };
  
  listProperties(myObjects);
//   -----------------------------------------------------------------------------------

var objects = [
    { name: "آبجکت 1", status: "وضعیت 1" },
    { name: "آبجکت 2", status: "وضعیت 2" },
    { name: "آبجکت 3", status: "وضعیت 3" }
  ];
  
  for (var i = 0; i < objects.length; i++) {
    console.log(objects[i].status);
  }
//   ------------------------------------------------------------------------------------

  