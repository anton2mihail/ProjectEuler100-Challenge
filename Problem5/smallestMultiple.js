function smallestMult(n) {
    const divisors = [...Array(n+1).keys()].filter((el, idx, arr) => {
    return !arr.includes(el * 2);
    }); 
    console.log(divisors);
    // let smallestMultiple = (n**2 % 2 === 0) ? n**2 : n**2 + 1;
    let smallestMultiple = 10;
    let isSmallest = false;
    while(!isSmallest){
        smallestMultiple+=10;
        if(divisors.filter((el) => {
            return smallestMultiple % el !== 0;
        }).length === 0){
            isSmallest = true;
        }
    }
    return smallestMultiple;
}
  
smallestMult(10);
  