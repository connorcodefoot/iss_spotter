
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes}  = require('./iss')

let myIp = '';
let myCoordinates = {};

fetchMyIP((error, ip) => {
 
  if (error) {
    console.log("It didn't work!" , error);
  }
  console.log('It worked! Returned IP:' , ip);

  fetchCoordsByIP(myIp, (error, coordinates) => {
 
    if (error) {
      console.log("It didn't work!" , error);
    }
  
    if(coordinates)
    console.log('It worked! Returned Coordinates:','lat:', coordinates.lat, 'long:', coordinates.long);

    fetchISSFlyOverTimes(coordinates, (error, response) => {

      if (error) {
        console.log("It didn't work!" )
      }
    
      if (response) {
      for (let res of response) {
        console.log(`Next pass at ${new Date(res.risetime)} for ${res.duration} seconds!`)
      }
      }
    
    })
  })
}); 