const sentence = "hello there from lighthouse labs";
timer = 0;

for (const char of sentence) {
  timer += 50;
  setTimeout(() => {
    process.stdout.write(char)
  }, timer);
};

setTimeout(() => {

  console.log('\n');

}, 2000);
