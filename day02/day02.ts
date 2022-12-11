require('fs').readFile('day02/input.txt', 'utf8', (err: string, data: string) => {
  const pointsSheet: string[] = ['ABC', 'XYZ'];
  const gameRounds: any[] = data.split('\n').map((v) => {
    const picks: number[] = v.split(' ').map((p, i) => pointsSheet[i].indexOf(p)+1)
    if (picks[1] === picks[0]) return picks[1] + 3;
    let s: number = 0;
    if (picks[1] === 1) s = 6 * ~~(picks[0] === 3);
    if (picks[1] === 2) s = 6 * ~~(picks[0] === 1);
    if (picks[1] === 3) s = 6 * ~~(picks[0] !== 1);
    return s + picks[1];
  });
  console.log('Part 1:', gameRounds.reduce((a, b) => a + b));
});

require('fs').readFile('day02/input.txt', 'utf8', (err: string, data: string) => {
  const pointsSheet: string[] = ['ABC', 'XYZ'];
  const gameRounds: any[] = data.split('\n').map((v) => {
    const [opponent, player] = v.split(' ').map((p, i) => pointsSheet[i].indexOf(p))
    let score: number = 0;
    score += ~~(player === 0) * ((opponent+2) % 3 + 1);
    score += ~~(player === 1) * (opponent + 4);
    score += ~~(player === 2) * ((opponent+1) % 3 + 7);
    return score;
  });
  console.log('Part 2:', gameRounds.reduce((a, b) => a + b));
});