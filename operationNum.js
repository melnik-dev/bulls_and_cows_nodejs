function getRandomNum() {
  return String(Math.floor(Math.random() * (1000 - 9999)) + 9999);
}

function isUniqCombinationDigits(num) {
  num = String(num);
  let set = new Set();

  for (let i = 0; i < num.length; i++) {
    set.add(num[i]);
    if (set.size === 4) {
      return true;
    }
  }
  return false;
}

function getUniqCombinationNum() {
  let isUniq = false;
  while (!isUniq) {
    let num = getRandomNum();
    isUniq = isUniqCombinationDigits(num);
    if (isUniq) {
      return num;
    }
  }
}

export { getUniqCombinationNum, isUniqCombinationDigits };
