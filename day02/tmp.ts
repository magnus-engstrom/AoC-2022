import { readFileSync, promises as fsPromises } from 'fs';


const list: string[] = readFileSync('day02/input.txt', 'utf-8').split('\n');

var score: number = 0;
list.forEach(function(row: string){
  switch(row.replace(" ", "")) {
    //WIN
    case "CX":
      score+=6;
      break;
    case "AY":
      score+=6;
      break;
    case "BZ":
      score+=6;
      break;
    //DRAW
    case "AX":
      score+=3;
      break;
    case "BY":
      score+=3;
      break;
    case "CZ":
      score+=3;
      break;
  }
  switch(row.split(" ")[1]) {
    case "X":
      score+=1;
      break;
    case "Y":
      score+=2;
      break;
    case "Z":
      score+=3;
      break;
  }
});
console.log("Part 1:");
console.log("Total score will be "+score);
