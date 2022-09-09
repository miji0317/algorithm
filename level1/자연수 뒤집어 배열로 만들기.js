function solution(n) {
  var answer = [];
  String(n)
    .split("")
    .reverse()
    .forEach((str) => answer.push(Number(str)));
  return answer;
}
