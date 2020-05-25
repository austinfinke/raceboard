const axios = require('axios').default;
const Driver = require('../structure/Driver');

module.exports = async function driverData(year, round) {
  const URL = `http://ergast.com/api/f1/`;
  let driverArr = [];

  await axios({
    method: `get`,
    url: `${URL}${year}/${round}/results.json`
  })
    .then(response => {
      const results = response.data.MRData.RaceTable.Races[0].Results;
      for (const d of results) {
        const driver = new Driver;
        driver
          .setTeam(d.Constructor.name)
          .setFName(d.Driver.givenName)
          .setLName(d.Driver.familyName)
          .setPosition(d.position);
        let time;
        (d.hasOwnProperty('Time')) ? time = d.Time.time : time = '---';
        driver.setResult(time);
        driverArr.push(driver);
      }
    })
    .catch(err => {
      console.log(`driverData.js: ${err}`);
    })
  return driverArr;
}



