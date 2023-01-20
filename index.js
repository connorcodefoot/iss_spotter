
const { fetchMyIP, fetchCoordsByIP}  = require('./iss')

let myIp = '';

fetchMyIP((error, ip) => {
 
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
  return myIp = ip;
  
}); 




fetchCoordsByIP((myIp), (error, lat, long) => {
 
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned Coordinates:','lat:', lat, 'long:', long);

});

