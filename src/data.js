import img1 from "./img/photo-card-1.jpg";
import img2 from "./img/photo-card-2.jpg";
import img3 from "./img/photo-card-3.jpg";
import img4 from "./img/photo-card-4.jpg";
import img5 from "./img/photo-card-5.jpg";
import img6 from "./img/photo-card-6.jpg";
import { RANDOMIZED } from "./settings";

const finnish = [
  {
    id: "1",
    token: "house",
    word: "Talo",
    type: "word",
  },
  {
    id: "2",
    token: "house",
    url: img4,
    type: "image",
  },
  {
    id: "3",
    token: "dog",
    word: "Koira",
    type: "word",
  },
  {
    id: "4",
    token: "dog",
    url: img6,
    type: "image",
  },
  {
    id: "5",
    token: "teapot",
    word: "Teekannu",
    type: "word",
  },
  {
    id: "6",
    token: "teapot",
    url: img5,
    type: "image",
  },
  {
    id: "7",
    token: "bed",
    word: "Vuode",
    type: "word",
  },
  {
    id: "8",
    token: "bed",
    url: img2,
    type: "image",
  },
  {
    id: "9",
    token: "headphone",
    word: "Kuuloke",
    type: "word",
  },
  {
    id: "10",
    token: "headphone",
    url: img1,
    type: "image",
  },
  {
    id: "11",
    token: "laptop",
    word: "Kannettava",
    type: "word",
  },
  {
    id: "12",
    token: "laptop",
    url: img3,
    type: "image",
  },
];

const german = [
  {
    id: "1",
    token: "house",
    word: "Haus",
    type: "word",
  },
  {
    id: "2",
    token: "house",
    url: img4,
    type: "image",
  },
  {
    id: "3",
    token: "dog",
    word: "Hund",
    type: "word",
  },
  {
    id: "4",
    token: "dog",
    url: img6,
    type: "image",
  },
  {
    id: "5",
    token: "teapot",
    word: "Teekanne",
    type: "word",
  },
  {
    id: "6",
    token: "teapot",
    url: img5,
    type: "image",
  },
  {
    id: "7",
    token: "bed",
    word: "Bett",
    type: "word",
  },
  {
    id: "8",
    token: "bed",
    url: img2,
    type: "image",
  },
  {
    id: "9",
    token: "headphone",
    word: "Kopfhörer",
    type: "word",
  },
  {
    id: "10",
    token: "headphone",
    url: img1,
    type: "image",
  },
  {
    id: "11",
    token: "laptop",
    word: "Laptop",
    type: "word",
  },
  {
    id: "12",
    token: "laptop",
    url: img3,
    type: "image",
  },
];

const italian = [
  {
    id: "1",
    token: "house",
    word: "Сasa",
    type: "word",
  },
  {
    id: "2",
    token: "house",
    url: img4,
    type: "image",
  },
  {
    id: "3",
    token: "dog",
    word: "Сane",
    type: "word",
  },
  {
    id: "4",
    token: "dog",
    url: img6,
    type: "image",
  },
  {
    id: "5",
    token: "teapot",
    word: "Teiera",
    type: "word",
  },
  {
    id: "6",
    token: "teapot",
    url: img5,
    type: "image",
  },
  {
    id: "7",
    token: "bed",
    word: "Letto",
    type: "word",
  },
  {
    id: "8",
    token: "bed",
    url: img2,
    type: "image",
  },
  {
    id: "9",
    token: "headphone",
    word: "Cuffia",
    type: "word",
  },
  {
    id: "10",
    token: "headphone",
    url: img1,
    type: "image",
  },
  {
    id: "11",
    token: "laptop",
    word: "Portatile",
    type: "word",
  },
  {
    id: "12",
    token: "laptop",
    url: img3,
    type: "image",
  },
];

const Words = {
  finnish,
  german,
  italian,
};

const getWords = (type) =>
  RANDOMIZED
    ? [...Words[type]].sort(() => 0.5 - Math.random())
    : [...Words[type]];

const results = [
  { name: "Вася", steps: 1 },
  { name: "Аня", steps: 3 },
  { name: "Петя", steps: 5 },
];

export { getWords, results };
