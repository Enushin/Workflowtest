/**
 * Sample JavaScript file for workflow testing
 */

function greet(name) {
  return `Hello, ${name}!`;
}

function add(a, b) {
  return a + b;
}

function main() {
  const greeting = greet("World");
  console.log(greeting);

  const sum = add(5, 10);
  console.log(`5 + 10 = ${sum}`);
}

// Run main function if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { greet, add };
