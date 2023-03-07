import {capitalize} from "../modules/capitalize";

test('capitalize first letter of a signle word', () => {
    expect(capitalize('resolve')).toBe('Resolve')
});

test('capitalize first letter of a string with spaces', () => {
    expect(capitalize('hello you')).toBe('Hello you')
});
