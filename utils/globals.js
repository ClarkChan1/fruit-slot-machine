let fruitMapping = {
  1: "/images/apple.svg",
  2: "/images/banana.svg",
  3: "/images/grape.svg",
  4: "/images/lemon.svg",
  5: "/images/orange.svg",
  6: "/images/pear.svg",
  7: "/images/strawberry.svg",
  8: "/images/watermelon.svg",
};

let costToPlay = 10;
let twoMatchPrize = 25;
let threeMatchPrize = 150;

let defaultCoins = 100;
let defaultSlot1 = fruitMapping[1];
let defaultMessage = "press spin to play";
let defaultStats = {
  rolls: 0,
  match2: 0,
  jackpot: 0,
  coinsLost: 0,
  coinsEarned: 0,
};

export {
  fruitMapping,
  costToPlay,
  twoMatchPrize,
  threeMatchPrize,
  defaultMessage,
  defaultCoins,
  defaultSlot1,
  defaultStats,
};
