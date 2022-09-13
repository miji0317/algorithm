function solution(s) {
  let string = "";
  let arr = s.split(" ").map((str) => str.split(""));
  arr.map((str, i) => {
    str.map((s, i) => {
      i % 2 === 0 ? (string += s.toUpperCase()) : (string += s.toLowerCase());
    });
    i + 1 !== arr.length ? (string += " ") : string;
  });
  return string;
}
