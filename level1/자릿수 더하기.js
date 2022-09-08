function solution(n) {
  let arr = String(n).split("");
  return arr.reduce((acc, cur, idx) => {
    return (acc += Number(cur));
  }, 0);
}
