import {caesarCipher} from '../modules/caesar';

test('single word', () => {
    expect(caesarCipher('hi',2)).toBe('jk')
})

test('sentence with spaces', () => {
    expect(caesarCipher('hello world',1)).toBe('ifmmp xpsme')
})

test('sentence with special characters', () => {
    expect(caesarCipher('hello, world!',1)).toBe('ifmmp, xpsme!')
})

test('sentence with single \'z\' character', () => {
    expect(caesarCipher('z',1)).toBe('a')
})

test('sentence with \'z\' character in a sentence', () => {
    expect(caesarCipher('Zi uz!',1)).toBe('Aj va!')
})

test('sentence with \'z\' character and a factor > 1', () => {
    expect(caesarCipher('z',3)).toBe('c')
})


