import { GaleryItem } from "src/components/shared/gallery/Gallery";

import Background1 from "../images/backgrounds/background_2.png";
import Background2 from "../images/backgrounds/background_3.png";
import Background3 from "../images/backgrounds/background_4.png";
import Background4 from "../images/backgrounds/background_5.png";

const routeOptionsExp = {
  state: { expid: 1 }
};

const routeOptionsExp2 = {
  state: { expid: 2 }
};

const to1 = { ...routeOptionsExp, pathname: '/experience' }
const to2 = { ...routeOptionsExp2, pathname: '/experience' }

const item1 = {
  src: Background1,
  to: to1
}
const item2 = {
  src: Background2,
  to: to1
}
const item3 = {
  src: Background3,
  to: to2
}
const item4 = {
  src: Background4,
  to: to2
}

const items = [item1, item2, item3, item4];

const getRandomNumbers = (min: number, max: number) => {
  return Math.floor(Math.random() * max) + min
}

export const getImages = (amount: number) => {
  let result: GaleryItem[] = [];
  let len = amount > items.length ? items.length : amount;
  for (let i = 0; i < amount; i++) {
    const rand = getRandomNumbers(0, amount - 1);
    result.push(items[rand])
  }
  return result;
}

export const images: GaleryItem[] = [item1, item2, item3];
