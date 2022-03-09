const express = require('express')
const app = express()
const port = 3000
const controllers = require('./controllers.js');
const helpers = require ('./helpers');

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  //test with orgLogin = 'hackreactor' and teamSlug = 'a-staff-rpt'
  controllers.getTeamMembers(/* orgLogin, teamSlug */)
    .then((members) => {
      return helpers.getTeamMemberIds(members)
    })
    .then((data) => {
      /* the idea is to take the data here (an array of memberIds and then map them to
        controllers.createOrgInvite */
    })
    .catch((error) => {
      res.sendStatus(404);
      console.log('error getting invitee ids: ', error)
    })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})