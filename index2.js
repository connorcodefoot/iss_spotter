const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss_promised')

fetchMyIP()
    .then((body) => {
    return fetchCoordsByIP(body)
  })
  .then((coords) => {
    return fetchISSFlyOverTimes(coords)
  })
  .then((flyOverTimes) => {
    printData(flyOverTimes)
  })


const printData = function(flyOverTimes) {

  const flyOverTimesParsed = JSON.parse(flyOverTimes)
  const passOvers = flyOverTimesParsed.response

  for (const pass of passOvers) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

 





/*const { nextISSTimesForMyLocation } = require('./iss_promised');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
}); */