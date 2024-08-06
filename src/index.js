// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) return [];

    let result = [];

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            // Even index: left to right
            result = result.concat(matrix[i]);
        } else {
            // Odd index: right to left
            result = result.concat(matrix[i].slice().reverse());
        }
    }

    return result;
};
