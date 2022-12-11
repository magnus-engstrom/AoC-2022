require('fs').readFile('day04/input.txt', 'utf8', (err: string, data: string) => {
  const sections: any[] = data.split('\n').map(r => r.split(','));
  const sectionRanges = sections.map(s => s.map((c: any) => {
    return c.split('-').reduce((a:string, b:string) => [parseInt(a), parseInt(b)])
  })).map(n => {
    return n.reduce((a: number[], b: number[]) => {
      return [
        [...Array(a[1]+1).keys()].slice(a[0], a[1]+1),
        [...Array(b[1]+1).keys()].slice(b[0], b[1]+1),
      ]
    });
  });
  const overlaps = sectionRanges.filter(r => {
    let a = r[0];
    let b = r[1];
    return (a[0] >= b[0] && a[a.length-1] <= b[b.length-1]) || (a[0] <= b[0] && a[a.length-1] >= b[b.length-1]);
  })
  console.log('Part 1:', overlaps.length);
  const partialOverlaps = sectionRanges.filter(r => {
    let a = r[0];
    let b = r[1];
    return ((a[0] >= b[0] && a[0] <= b[b.length-1])
      || (a[1] >= b[0] && a[1] <= b[b.length-1])
      || (b[1] >= a[0] && b[1] <= a[b.length-1])
      || (b[0] >= a[0] && b[0] <= a[a.length-1])
      );
  })
  console.log('Part 2:', partialOverlaps.length);
});