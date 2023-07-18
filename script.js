// Exercise 1

function sum(num1, num2) {
  let result;
  if (num1 === undefined || num2 === undefined) {
    result = "Введите два числа";
  } else if (typeof num1 !== "number" || typeof num2 !== "number") {
    result = "Одно из значений не является числом";
  } else {
    result = num1 + num2;
  }
  console.log(result);
}

sum(2, 4); // 6

sum("d", 4); // введенные данные не являются числами

sum(1, [2]); // введенные данные не являются числами

sum(1); // введите два параметра

sum(); // введите два параметра

// Exercise 2

function square(a) {
  if (a === undefined) {
    console.error("Функция не может быть вызвана без аргумента");
  } else {
    console.log(a * a);
  }
}

square(2);

square();

// Exercise 3

const random = (num) => {
  const rn = Math.floor(Math.random() * 10);
  if (num > 10 || num < 0) {
    console.log("Число вне заданного диапазона0");
  } else if (num !== rn) {
    console.log("Вы не угадали");
  } else {
    console.log("Вы угадали!");
  }
};

random(1);
random(11);
random(0);

// Exercise 4

function copyArr(arr) {
  const result = arr.map((item) => {
    return item;
  });
  return result;
}

const arr = [1, 2, 3, 4, 5];

console.log(copyArr(arr));

function copyArr2(arr) {
  let result = [];
  arr.forEach((item) => {
    result.push(item);
  });
  return result;
}

let newArr = copyArr2(arr);

console.log(newArr);

newArr[0] = 2;

console.log(arr);

console.log(newArr);

// Exercise 5

const objWithNum = {
  a: 10,
  b: 20,
  c: "string",
  d: 12,
};

function sumNumObj(obj) {
  let result = 0;
  for (let num in obj) {
    if (typeof obj[num] === "number") {
      result += obj[num];
    }
  }
  console.log(result);
}

sumNumObj(objWithNum);

// Exercise 6

function ucFirst(str) {
  console.log(str[0].toUpperCase() + str.slice(1));
}

ucFirst("hello");

// Задание 6 и 7 уже прорешивали на уроке

// Exercise 9

let stations = [
  "MAN675847583748sjt567654;Manchester Piccadilly",

  "GNF576746573fhdg4737dh4;Greenfield",

  "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",

  "SYB4f65hf75f736463;Stalybridge",

  "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
];

function perc(arr) {
  arr.forEach((item) => {
    let code = item.slice(0, 3);
    let n = item.indexOf(";");
    let name = item.slice(n + 1, item.length);
    console.log(code.concat(`: ${name}`));
  });
}

perc(stations);

// Exercise 8

function reverse(str) {
  let arr = str.split("");
  let newArr = arr.reverse();
  console.log(newArr.join(""));
}

reverse("Hello");

// Exercise 10

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

function unique(arr) {
  let unEl = [];
  arr.forEach((item) => {
    if (!unEl.includes(item)) {
      unEl.push(item);
    }
  });
  return unEl;
}

console.log(unique(strings));

// Exercise 11

const evg1 = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];

const evg2 = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10];

const ul1 = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];

const ul2 = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4];

function verifyCats(jane, julia) {
  let filtJane = jane.slice(1, -1);
  let all = filtJane.concat(julia);
  all.forEach((item, index) => {
    if (item >= 2) {
      console.log(`Кошка №${index + 1} взрослая, ей ${item} лет`);
    } else {
      console.log(`Кошка №${index + 1} еще котенок`);
    }
  });
}

verifyCats(evg1, ul1);

verifyCats(evg2, ul2);

// Exercise 12

let arr1 = [5, 4, 3, 8, 0];

function filt(arr, lim) {
  console.log(arr.filter((num) => num >= lim));
}

filt(arr1, 5);

// Exercise 13

let words = ["yes", "hello", "no", "easycode", "what"];

function long(arr) {
  arr.forEach((item) => {
    if (item.length > 3) {
      console.log(item);
    }
  });
}

long(words);

// Exercise 14

let forSort = [[14, 45], [1], ["a", "c", "d"]];

function order(arr) {
  let sorted = arr.sort((a, b) => {
    return a.length - b.length;
  });
  console.log(sorted);
}

order(forSort);

// Exercise 15

let catAges1 = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];

let catAges2 = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];

function getAverageHumanAge(arr) {
  let humanAge = arr.map((item) => {
    if (item <= 2) {
      return item * 10;
    } else {
      return item * 7;
    }
  });
  let filteredByAge = humanAge.filter((age) => age >= 18);
  let sum = filteredByAge.reduce((acc, cur) => acc + cur);
  let result = sum / (filteredByAge.length - 1);
  console.log(result);
}

getAverageHumanAge(catAges2);
