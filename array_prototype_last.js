//leet code problem 2619 javascript
// Extend Array.prototype to include a 'last' method
Array.prototype.last = function() {
    // Check if the array is empty
    if (this.length === 0) {
        return -1; // Return -1 if the array is empty
    }
    return this[this.length - 1]; // Return the last element
};

// Example usage
const jsonArray = JSON.parse('[1, 2, 3, 4, 5]');
console.log(jsonArray.last()); // Output: 5

const emptyJsonArray = JSON.parse('[]');
console.log(emptyJsonArray.last()); // Output: -1
