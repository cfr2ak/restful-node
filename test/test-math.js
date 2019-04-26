const math = require('../modules/math');

exports.addTest = function (test) {
    test.equal(math.add(1, 1), 3);
    test.done()
};

exports.substractTest = function (test) {
    test.equal(math.subtract(4, 2), 2);
    test.done()
};