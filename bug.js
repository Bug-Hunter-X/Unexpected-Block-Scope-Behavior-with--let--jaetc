function myFunction() {
  let x = 10;
  if (true) {
    let x = 20; // This 'x' is only in scope within the 'if' block
  }
  console.log(x); // This will print 10, not 20
}