function solution(n) {
  let arr = String(n)
    .split("")
    .sort(function compare(a, b) {
      return b - a;
    });
  return Number(arr.join(""));
}
