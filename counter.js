//LEVEL=EASY LANGUAGE=JAVASCRIPT
function createCounter(n) {
  // Create a variable to keep track of the current count
  let current = n;

  // Return a function that will be used to get the next count
  return function() {
    // Return the current count and then increment it for the next call
    return current++;
  };
}

// Example usage:
const counter = createCounter(5);

console.log(counter()); // Outputs: 5
console.log(counter()); // Outputs: 6
console.log(counter()); // Outputs: 7
// and so on...
