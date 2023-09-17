// function which gives prime at position n
export function nthPrime(n) {
  var primes = [2];
  var x = 1;
  var count = 0;
  do {
    for (var y = 2; y < x; y++) {
      if (x % y === 0) {
        count++;
      }
    }
    if (count === 0) {
      primes.push(x);
      x++;
    } else {
      x++;
      count = 0;
    }
  } while (primes.length < n);
  return primes[primes.length - 1];
}
