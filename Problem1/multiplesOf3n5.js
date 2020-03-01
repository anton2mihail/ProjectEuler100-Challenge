function multiplesOf3and5(number) {
   return [...Array(number).keys()].filter((num) => {
        return (num % 5 === 0) || (num % 3 === 0);
    }).reduce((acc, el) => {
        return acc + el;
    });
}
  
  multiplesOf3and5(1000);
  