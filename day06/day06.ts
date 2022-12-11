require('fs').readFile('day06/input.txt', 'utf8', (err: string, data: string) => {
  let pkgStart, msgStart = pkgStart = 0;
  for (let i: number = 0; i >= msgStart; i++) {
    if (new Set(data.slice(i, i+4)).size == 4 && pkgStart == 0) pkgStart = i+4;
    if (new Set(data.slice(i, i+14)).size == 14 && msgStart == 0) msgStart = i+14;
  }
  console.log('Part 1:', pkgStart);
  console.log('Part 2:', msgStart);
});