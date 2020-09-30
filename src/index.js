exports.min = function min(array) {
    // const result = Array.from(arguments);
    return Math.min(...array);
};
exports.max = function max(array) {
    return Math.max(...array);
};

exports.avg = function avg(array) {
    return array.reduce((a, b) => a + b) / array.length;
};
