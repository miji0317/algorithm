function solution(numbers) {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  var answer = arr
    .concat(numbers)
    .filter((item) => !arr.includes(item) || !numbers.includes(item));

  let result = 0;

  answer.map((item, i) => {
    result += item;
  });
  return result;
}
