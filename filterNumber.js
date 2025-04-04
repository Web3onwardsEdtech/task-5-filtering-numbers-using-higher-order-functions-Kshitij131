function filterNumbers(arr, criterion) {
    switch (criterion) {
        case 'even':
            return arr.filter(num => num % 2 === 0);
        case 'odd':
            return arr.filter(num => num % 2 !== 0);
        case 'positive':
            return arr.filter(num => num > 0);
        case 'negative':
            return arr.filter(num => num < 0);
        default:
            return arr;
    }
}

// Example Usage:
console.log(filterNumbers([1, 2, 3, 4, 5, 6], 'even'));           // [2, 4, 6]
console.log(filterNumbers([1, 2, 3, 4, 5, 6], 'odd'));            // [1, 3, 5]
console.log(filterNumbers([-1, -2, 3, 4, -5, 6], 'negative'));    // [-1, -2, -5]
console.log(filterNumbers([0, 1, -3, 5, -6], 'positive'));        // [1, 5]
console.log(filterNumbers([1, -2, 3, -4, 5, -6], ''));            // [1, -2, 3, -4, 5, -6]
