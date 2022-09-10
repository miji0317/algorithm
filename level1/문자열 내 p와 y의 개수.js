function solution(s) {
  let pCount = 0;
  let yCount = 0;
  let arr = s.toLowerCase().split("");
  arr.map((str) => {
    if (str.indexOf("p") !== -1) {
      pCount++;
    } else if (str.indexOf("y") !== -1) {
      yCount++;
    }
  });

  return pCount === yCount ? true : false;
}
