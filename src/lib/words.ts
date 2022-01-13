import { WORDS } from "../constants/wordlist";

export const isWordInWordList = (word: string) => {
  return WORDS.includes(word.toLowerCase());
};

export const isWinningWord = (word: string) => {
  return solution === word;
};

export const getRandomWord = () => {  
  const index = Math.floor(Math.random()*WORDS.length);

  return WORDS[index].toUpperCase();
};

export const solution = getRandomWord();
