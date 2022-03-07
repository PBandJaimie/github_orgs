const axios = require('axios');
const config = require('./config.js');

const createOrg = (...) => {

  return axios({
    method: '',
    url: '',
    headers: {
      'User-Agent': 'request',
      'Authorization': config.TOKEN
    }
  })
    .then((data) => {
      //example stuff here
    .catch((err) => {
      console.log('ERROR in ...', err);
    })
};