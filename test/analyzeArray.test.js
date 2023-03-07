import {analyzeArray} from '../modules/analyzeArray';

test('check average', () => {
    expect(analyzeArray([1,2,3,4,0]).average).toBe(2)
})

test('check min', () => {
    expect(analyzeArray([1,2,3,4,0]).min).toBe(0)
})

test('check max', () => {
    expect(analyzeArray([1,2,3,4,0]).max).toBe(4)
})

test('check length', () => {
    expect(analyzeArray([1,2,3,4,0]).length).toBe(5)
})

test('check entire object', () => {
    expect(analyzeArray([1,2,3,4,0])).toEqual({average : 2, min : 0, max : 4, length : 5})
})


