function fiboEvenSum(n) {
   return [...Array(n).keys()].reduce((acc, el, idx) => {
        if(idx <= 1) acc.push(el);
        else if (sumPrevTwo(acc) <= n) acc.push(sumPrevTwo(acc));
        return acc;
    }, [])
    .filter((el) => el % 2 === 0)
    .reduce((acc, el) => acc+ el);
}

function sumPrevTwo(arr) {
    const len = arr.length;
    return arr[len - 1] + arr[len - 2];
}
  
fiboEvenSum(60);
  