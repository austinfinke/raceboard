const inquirer = require('inquirer');
const heapsort = require('../structure/HeapSort');

module.exports = function interact(hT) {

  let tracks = '';
  for (const track of hT.table) {
    tracks += track.print()
  }
  let tracksArr = tracks.split(',');
  tracksArr.pop();


  let p = {
    name: 'view',
    type: 'list',
    message: 'select track',
    choices: heapsort(tracksArr)
  }

  inquirer
  .prompt(p)
  .then(async ans => {
    let selected = hT.search(ans.view)
    let board = await selected.data.getDrivers();

    board.forEach(d => {
      console.log(`Position: ${d.getPosition()}`);
      console.log(`Driver: ${d.getName()}, ${d.getTeam()}`);
      console.log(`Result: ${d.getResult()}`);
      console.log('');
    })  

  })
}
