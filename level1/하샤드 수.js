function solution(x) {
  let sum = 0;
  let arr = String(x).split("");
  arr.map((str) => (sum += Number(str)));
  return x % sum === 0 ? true : false;
}
