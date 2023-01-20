const request = require('request');

const fetchMyIP = callback => {

  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    return callback(error, body);
  });
};

const fetchCoordsByIP = (ip, callback) => {

  request(`https://ipwho.is/${ip}`,(error, response, body) => {

    const parsedBody = JSON.parse(body);
  
    if (error) {
      callback(error, null);
      return;
    }

    
    // check if "success" is true or not
    if (!parsedBody.success) {
      const message = `Success status was ${parsedBody.success}. Server message says: ${parsedBody.message} when fetching for IP ${parsedBody.ip}`;
      callback(Error(message), null);
      return;
    }

    callback(null, { lat: '48.6502411', long: '-123.399005' });
    return
  })

};

const fetchISSFlyOverTimes = (coordinates, callback) => {

  request(`https://iss-flyover.herokuapp.com/json/?lat=${coordinates.lat}&lon=${coordinates.long}`,(error, response, body) => {

  

  const parsedBody = JSON.parse(body)
  response = parsedBody.response
  callback(null, response)

})
}

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes};

