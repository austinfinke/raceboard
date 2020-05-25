const inquirer = require('inquirer');
const moment = require('moment');
const axios = require('axios').default;
const Hash = require('../structure/HashTable');

const URL = `http://ergast.com/api/f1/`;
const Track = require('../structure/Track');
const driverData = require('./driverData');
const interact = require('./interact');

let ht;

module.exports = async function getDataByYear() {

  const years = [];
  for (let i = moment().format('YYYY'); i >= 1950; i--) {
    years.push(i);
  }

  let p = {
    name: 'year',
    type: 'list',
    message: 'select year',
    choices: years
  }

  ht = new Hash;
  ht.buildBuckets();

  inquirer
    .prompt(p)
    .then(async ans => {

      await axios({
        method: 'get',
        url: `${URL}${ans.year}.json`,
      })
        .then(async response => {
          let { Races } = response.data.MRData.RaceTable;
          let round;

          console.log('gathering data...');

          for await (const race of Races) {
            let track = new Track;
            round = parseInt(race.round);
            track
              .setName(race.raceName)
              .setCountry(race.Circuit.Location.country)
              .setRound(round)

            let d = driverData(ans.year, round);
            track.setDrivers(d);
            ht.insert(track);
          }
          interact(ht);
        })
        .catch(err => {
          console.log(`getData.js: ${err}`);
        })
    })
}





