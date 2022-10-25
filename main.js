function sumOfSquares(a, b) {
    return a * a + b * b;
}
console.log(sumOfSquares(3, 5));

function product(a, b, c) {
    return a * b * c;
}
console.log(product(3, 4, 10));

function isEqual(a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}
console.log(isEqual(1, 1));
console.log(isEqual(1, 10));

function greatest2(a, b) {
    if (a >= b) {
        return a;
    } else {
        return b;
    }
}
console.log(greatest2(5, 2));

function greatest3(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
console.log(greatest3(3, 7, 1));