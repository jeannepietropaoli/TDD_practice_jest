import {reverse} from '../modules/reverse'

test('reverse single word', () => {
    expect(reverse('hello')).toBe('olleh')
});

test('reverse string with spaces', () => {
    expect(reverse('hungry as fuck')).toBe('kcuf sa yrgnuh')
});

test('reverse string with spaces and special char', () => {
    expect(reverse('ice, pop!')).toBe('!pop ,eci')
});