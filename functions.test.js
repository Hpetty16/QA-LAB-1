let myFunc = require (`./function`)

test(`Return Two Test`, () => {
  expect(myFunc.returnTwo()).toBe(2)
})

test(`Greeting Test`, () => {
  expect(myFunc.greeting(`Haywood`)).toBe(`Hello Haywood.`)
  expect(myFunc.greeting(`Jill`)).toBe(`Hello Jill.`)
})

test(`Add Test`, () => {
  expect(myFunc.add(1,2)).toBe(3)
  expect(myFunc.add(5,9)).toBe(14)
})

describe (`Math Challenge!`, () => {
  test (`multiply`, () => {
    expect(myFunc.multiply(15,3)).toBe(45)
  })
  test (`divide`,() => {
    expect(myFunc.divide(15,3)).toBe(5)
  })
  test(`subtract`, () => {
    expect(myFunc.subtract(20,5)).toBe(15)
  })
})