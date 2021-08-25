const {
  returnTwo,
  greeting,
  add,
  multiply,
  divide,
  subtract,
  isCity,
} = require("./functions");

test("Should return 2", () => {
  expect(returnTwo(2)).toEqual(2);
});

test("Hello, {name}", () => {
  expect(greeting("James")).toEqual("Hello, James.");
});

test("Hello, {name}", () => {
  expect(greeting("Jill")).toEqual("Hello, Jill.");
});

test("Return sum of parameters", () => {
  expect(add(1, 2)).toEqual(3);
});

describe("Math Functions", () => {
  test("Return sum of parameters", () => {
    expect(add(5, 9)).toEqual(14);
  });

  test("Return the results of multiplied parameters", () => {
    expect(multiply(9, 3)).toEqual(27);
    expect(multiply(2, 5)).toEqual(10);
  });

  test("Return the results of divided parameters", () => {
    expect(divide(9, 3)).toEqual(3);
    expect(divide(12, 3)).toEqual(4);
  });

  test("Return the results of substracted parameters", () => {
    expect(subtract(9, 3)).toEqual(6);
  });
});
