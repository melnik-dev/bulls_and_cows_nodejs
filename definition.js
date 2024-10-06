function definition(compNum, userNum) {
  let countBull = 0; // 1
  let countCow = 0; // 2
  const compArr = compNum.split("");
  const userArr = userNum.split("");
  // console.log(compArr);
  // console.log(userArr);
  const colorMap = { 0: 0, 1: 0, 2: 0, 3: 0 };

  // считаем количество быков
  for (let i = 0; i < compArr.length; i++) {
    if (compArr[i] === userArr[i]) {
      colorMap[i] = 1;
      countBull++;
    }
  }
  // считаем количество коров
  for (let i = 0; i < compArr.length; i++) {
    if (compArr[i] !== userArr[i] && compArr.includes(userArr[i])) {
      colorMap[i] = 2;
      countCow++;
    }
  }
  return { countBull, countCow, colorMap };
}
export { definition };
