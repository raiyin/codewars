import { assert } from 'chai';

function numberToString(num) {
    return num.toString();
}

assert.strictEqual(numberToString(67), '67', 'Numbers are not equal!');
