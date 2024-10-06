import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { getUniqCombinationNum } from "./operationNum.js";
import { validation } from "./validation.js";
import { definition } from "./definition.js";
import chalk from "chalk";

const randomNum = getUniqCombinationNum();
const rl = readline.createInterface({ input, output });
const log = console.log;
let move = 0;

log("Компьютер уже что-то задумал. Играем!");
log("Введите четырехзначное число:");
rl.on("line", (input) => {
  const { isValid, msg } = validation(input);
  if (isValid) {
    move++;
    const { countBull, countCow, colorMap } = definition(randomNum, input);
    const inputArr = input.split("");

    function colorNum(i) {
      return `${colorMap[i] === 1 ? chalk.greenBright(inputArr[i]) : colorMap[i] === 2 ? chalk.cyanBright(inputArr[i]) : inputArr[i]}`;
    }

    log("Ваше число: " + colorNum(0) + colorNum(1) + colorNum(2) + colorNum(3));
    log(chalk.greenBright(`Количество быков: ${countBull};`), chalk.cyanBright(`Количество коров: ${countCow}`));
    if (countBull === 4) {
      log(chalk.greenBright(`Победа! Сделано ходов: ${move}`));
      rl.close();
    } else log("Введите четырехзначное число:");
  } else {
    log(chalk.redBright(msg));
  }
});

rl.on("SIGINT", () => {
  log("Конец игры ");
  log("Компьютер задумал:", randomNum);
  rl.close();
});
