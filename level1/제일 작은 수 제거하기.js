function solution(arr) {
  const i = arr.findIndex((num) => num === Math.min(...arr));
  arr.splice(i, 1);
  if (arr.lenth < 0) {
    return [-1];
  }
  return arr;
}
