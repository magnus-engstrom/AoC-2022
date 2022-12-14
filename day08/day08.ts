require('fs').readFile('day08/input.txt', 'utf8', (err: string, data: string) => {
  let rows: string[] = data.split('\n');
  let size: number = rows[0].length;
  let grid: number[] = rows.map(x => x.split('').map(x => parseInt(x))).flat();
  let gridPositions = new Set();
  let treeViews: number[][] = [...Array(size*size).keys()].map(x => []);
  const getTrees: Function = (row: number[]) => {
    return row.filter((x, v) => {
      return v != 0 && v != size-1 && grid[x] > Math.max(...row.slice(0, v).map(g => grid[g]));
    }); 
  }
  const calculateView: Function = (row: number[]) => {
    return row.map((x, i) => {
      let height: number = grid[x];
      let cFwd, cBkw = cFwd = 0;
      for (let n of row.slice(i+1, row.length)) { cFwd++; if (grid[n] < height) break; }
      for (let n of row.slice(0, i).reverse()) { cBkw++ ; if (grid[n] < height) break; }
      return cFwd*cBkw;
    });
  }
  for (let i of [...Array(size).keys()].slice(1, size-1)) {
    let row = [...Array(size).keys()].map(x => x+i*size);
    let col: number[] = [...Array(size).keys()].map(v => i+v*size);
    let scenicScores: number[][] = [calculateView(row), calculateView(col)]
    row.forEach((n, i) => treeViews[n].push(scenicScores[0][i]));
    col.forEach((n, i) => treeViews[n].push(scenicScores[1][i]));
    let values: number[] = getTrees(row).concat(getTrees(row.reverse()))
      .concat(getTrees(col)).concat(getTrees(col.reverse()));
    gridPositions = new Set([...gridPositions, ...values]);
  }
  console.log('Part 1:', gridPositions.size + 2*size + 2*(size-2));
  console.log('Part 2:', Math.max(...treeViews.filter(x => x.length > 0).map(x => x.reduce((a,b) => a*b))));
});
