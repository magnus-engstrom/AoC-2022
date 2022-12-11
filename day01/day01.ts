require('fs').readFile('day01/input.txt', 'utf8', (err: string, data: string) => {
  const calories = data.split('\n\n').map((rows: string) => {
    return rows.split('\n').map(v => parseInt(v));
  });
  let caloriesPerElf = calories.map(v => v.reduce((a, b) => a + b));
  caloriesPerElf.sort((a, b) => a - b);
  console.log('Part 1: ', caloriesPerElf.at(-1));
  console.log('Part 2: ', caloriesPerElf.slice(-3).reduce((a, b) => a + b));
});