function combinePWD(letterAttay) {
  let randomNum = Math.floor(Math.random() * letterAttay.length);
  return letterAttay[randomNum];
}

function gereratePWD(options) {
  const lowerArray = "abcdefghijklmnopqrstuvwxyz".split("");
  const upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const numArray = "0123456789".split("");
  const symbolsArray = "!?<>|@#$%^&*+-_(){}[];".split("");
  let returnPWD = "";
  let PWDContainer = [];

  if (!options.PWDlength) {
    returnPWD = " You must fill in how many password want to generate";
    return returnPWD;
  } else if (
    !options.lower &&
    !options.upper &&
    !options.number &&
    !options.symbol
  ) {
    returnPWD = "You must choose at least one selection";
    return returnPWD;
  }

  if (options.lower === "checked") {
    PWDContainer = PWDContainer.concat(lowerArray);
  }
  if (options.upper === "checked") {
    PWDContainer = PWDContainer.concat(upperArray);
  }
  if (options.number === "checked") {
    PWDContainer = PWDContainer.concat(numArray);
  }
  if (options.symbol === "checked") {
    PWDContainer = PWDContainer.concat(symbolsArray);
  }
  if (options.exclude.length) {
    //回傳一個將重複值刪掉的exclude array
    const excludeArray = [...new Set(options.exclude.split(""))];
    PWDContainer = PWDContainer.filter((item) => !excludeArray.includes(item));
  }

  //如果使用者希望以某些字開頭，那些字要直接放進returnPWD，PWDlength也要扣掉options.frontWord的長度再去生成隨機密碼，如果要放在前面的字多於希望產出的密碼長度要警示
  if (options.frontWord) {
    if (options.frontWord.length > options.PWDlength) {
      returnPWD =
        "The length you set is shorter than the character you want to put in front";
      return returnPWD;
    } else {
      const frontArray = options.frontWord.split("");
      frontArray.filter((word) => {
        returnPWD += word;
      });
    }
  }

  //如果PWDContainer內沒東西代表設置有誤(Ex.選擇數字但又把0~9全部exclude)
  if (!PWDContainer.length) {
    returnPWD = "Please rechecked your selection";
    return returnPWD;
  }

  //這邊多設一個newPWDlength是為了不去影響options.PWDlength傳回去的值，應該是因為obj是reference data，一當修改會去影響指向的值
  const newPWDlength = options.frontWord
    ? options.PWDlength - options.frontWord.length
    : options.PWDlength;
  for (let i = 0; i < newPWDlength; i++) {
    returnPWD += combinePWD(PWDContainer);
  }

  return returnPWD;
}

module.exports = gereratePWD;
