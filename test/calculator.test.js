import {calculator} from '../modules/calculator'

test('add integers from calculator object', () => {
    expect(calculator.add(1,2)).toBe(3)
})

test('subtract integers from calculator object', () => {
    expect(calculator.substract(4,2)).toBe(2)
})

test('divide integers from calculator object', () => {
    expect(calculator.divide(4,2)).toBe(2)
})

test('multiply integers from calculator object', () => {
    expect(calculator.multiply(4,2)).toBe(8)
})



