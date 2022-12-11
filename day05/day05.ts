require('fs').readFile('day05/input.txt', 'utf8', (err: string, data: string) => {
  let [crateData, instructions] = data.split('\n\n');
  const rows: string[] = crateData.split('\n');
  let crates: any[] = [];
  for (let i=0; i<rows[0].length; i++) {
    let n: number = parseInt(rows[rows.length-1][i])
    if (isNaN(n)) continue;
    crates.push([]);
    rows.forEach(r => crates[n-1] = ((isNaN(parseInt(r[i])) && r[i] != ' ') ? [r[i]] : []).concat(crates[n-1]))
  }
  let createsP2: any[] = JSON.parse(JSON.stringify(crates))
  for (const ins of instructions.split('\n')) {
    const move: number[] = ins.split(' ').map(v => parseInt(v)).filter(x => !isNaN(x));
    let lifted: string[] = crates[move[1]-1].splice(-move[0], move[0])
    crates[move[2]-1].push(...lifted.reverse());
    lifted = createsP2[move[1]-1].splice(-move[0], move[0])
    createsP2[move[2]-1].push(...lifted);
  };
  console.log('Part 1:', crates.map(v => v[v.length-1]).join(''));
  console.log('Part 2:', createsP2.map(v => v[v.length-1]).join(''));
});