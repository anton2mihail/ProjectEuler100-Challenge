
function largestPalindromeProduct(n) {
    // Good luck!
    const isPalindrom = n => {
      return String(n).split("").reverse().join("") === String(n);
    }
    let largestPalindrome = 0;
    const lowerBound = Number(`1${Array.from({length:n}).join(0)}`);
    const upperBound= Number(`${Array.from({length: n+1}).join(9)}`);
    console.log({upperBound, lowerBound})
    for(var i=lowerBound; i<=upperBound; i++) {
      for(var j=lowerBound; j<=upperBound; j++) {
      const product = i*j;
        if(isPalindrom(product) && product > largestPalindrome ) {
          console.log(i, j, product, largestPalindrome)
          largestPalindrome = i*j;
        }
      }
    }
    return largestPalindrome;
  }
  
  largestPalindromeProduct(2);