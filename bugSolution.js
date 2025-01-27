function myFunction() {
  let x = 10;
  if (true) {
    x = 20; // Modifies the same 'x' in the outer scope
  }
  console.log(x); // This will print 20
}