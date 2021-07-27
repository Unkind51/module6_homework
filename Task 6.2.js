function isSimple(num) {
  let result = `${num} - простое число.`
  if (num <= 1 ) {
    result = `${num} не относится к простым числам.`;
  } else
  if (num < 1000) {
    for (i = 2; i < num; i++) {
      if (num % i === 0) {
        result = `${num} не относится к простым числам.`;  
      }
    }
  } else {
    result = `Данные не верны.`;
  }
  console.log(result);
};
isSimple(99);
