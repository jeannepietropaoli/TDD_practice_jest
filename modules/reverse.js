export function reverse(string) {
    const stringArray = string.split('');
    const reverseStringArray = [];
    stringArray.forEach(letter => {
        reverseStringArray.unshift(letter);
    });
    return reverseStringArray.join('')
}