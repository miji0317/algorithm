function solution(n) {
  var answer = 0;
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  arr.forEach((num) => (answer += num));
  return answer;
}
