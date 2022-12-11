require('fs').readFile('day03/input.txt', 'utf8', (err: string, data: string) => {
  const letters: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const rucksacks: any[] = data.split('\n');
  const compartments: any[] = rucksacks.map(r => {
    return [r.slice(0, r.length/2).split(''), r.slice(r.length/2, r.length)];
  });
  let sum: number = compartments.map(c => {
    let l: string = c[0].filter((v: string) => c[1].indexOf(v) !== -1)[0];
    return letters.indexOf(l)+1;
  }).reduce((a, b) => a+b);
  console.log('Part 1:', sum);

  let score: number = 0;
  for (let i: number = 0; i < rucksacks.length; i+=3) {
    const group: any[] = rucksacks.slice(i, i+3);
    let v = group[0].split('').filter((l: string) => {
     return group[1].indexOf(l) !== -1 && group[2].indexOf(l) !== -1
    })
    score += letters.indexOf(v[0])+1;
  }
  console.log('Part 2:', score);
});