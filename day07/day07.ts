require('fs').readFile('day07/input.txt', 'utf8', (err: string, data: string) => {
  let dirs: {[k: string]: any} = {'/-/': {parent: undefined, size: 0}};
  let parsing: boolean = false;
  let cDir = '/';
  for (let cmd of data.split('\n')) {
    if (cmd.indexOf('$') > -1) parsing = false;
    if (cmd.indexOf('$ cd') > -1 && cmd != '$ cd ..') cDir = cDir + '-' + cmd.split(' cd ')[1];
    if (cmd === '$ cd ..') cDir = dirs[cDir].parent;
    let s: string = cmd.split(' ')[1];
    if (parsing) {
      if (cmd.indexOf('dir') > -1 && !(cDir+'-'+s in dirs)) dirs[cDir+'-'+s] = {parent: cDir, size: 0};
      if (cmd.indexOf('dir') === -1) {
        let dirP: string = cDir;
        while (typeof(dirP) !== 'undefined') {
          dirs[dirP].size += parseInt(cmd.split(' ')[0]);
          dirP = dirs[dirP].parent;
        }
      }
    }
    if (cmd.indexOf('$ ls') > -1) parsing = true;
  }
  let sizes: number[] = Object.values(dirs).map(x => x.size);
  console.log('Part 1:', sizes.filter(x => x < 100000).reduce((a, b) => a+b));
  let limit: number = 3e7 - (7e7 - dirs['/-/'].size);
  console.log('Part 2:', sizes.sort(x => x - limit).reverse()[0]);
})