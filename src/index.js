// complete the function
function prime(num) {
  if (
    (num > 1 && !Number.isInteger(num / 2) && !Number.isInteger(num / 3)) ||
    num == 2
  ) {
    return true;
  } else return false;
}

function solution(arg) {
  return prime(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
