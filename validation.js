import { isUniqCombinationDigits } from "./operationNum.js";

function validation(value) {
  let isValid = true;
  let msg = "";
  switch (true) {
    case value === "":
      isValid = false;
      msg = "Введите что-нибудь";
      break;
    case isNaN(value) || value.length !== 4:
      isValid = false;
      msg = "Ход - четырехзначное число. Попробуйте еще раз.";
      break;
    case +value[0] === 0:
      isValid = false;
      msg = "0 не может быть первым числом.";
      break;
    case !isUniqCombinationDigits(value):
      isValid = false;
      msg = "Цифры в числе должны быть уникальны";
      break;
  }
  return { isValid, msg };
}
export { validation };
