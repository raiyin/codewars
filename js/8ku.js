function numberToString(num) {
    return num.toString();
}

const assert = require('chai').assert;
describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(numberToString(67), '67');
    });
});
