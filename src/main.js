const inquirer = require('inquirer');
const getDataByYear = require('./dataCollect/getDataByYear');

const init = () => {
  const s = 'welcome,\nthis is system will return f1 racing results based on selections.';
  console.log(s)
  const p = {
    name: 'welcome',
    message: 'continue?',
    type: 'confirm',
  }

  inquirer
    .prompt(p)
    .then(ans => {
      (ans.welcome) ? getDataByYear() : console.log('bye!');
    })

}

module.exports = init;

