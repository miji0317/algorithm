function solution(arr, divisor) {
  var answer = [];
  arr.map((num) => {
    if (num % divisor === 0) answer.push(num);
  });
  return answer.length !== 0
    ? answer.sort(function (a, b) {
        return a - b;
      })
    : [-1];
}
