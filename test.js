function abc() {
  let i = 0;
  fn();
  function fn() {
    console.log(i);
  }
}
abc();
