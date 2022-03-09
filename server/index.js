const express = require('express');
const app = express();
const port = 3000;
const controllers = require('./controllers.js');
const helpers = require ('./helpers');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));


app.get('/inviteeInfo', (req, res) => {
  // testing with orgLogin = 'hackreactor' and teamSlug = 'a-staff-rpt'
  controllers.getTeamMembers(req.query.orgName, req.query.teamSlug)
    .then((members) => {
      return helpers.getTeamMemberInfo(members)
    })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.sendStatus(404);
      console.log('error getting invitee ids: ', error)
    })
})

app.post('/sendInvites', (req, res) => {
  return helpers.extractMemberIds(req.body.inviteeInfo)
    .then((ids) => {
      console.log('not sure how to test this without sending actual invites')
      // ids.forEach(id => controllers.createOrgInvite(req.body.orgName, id))
      //for now, just sending status a block early
      res.status(200).json({status:"ok"})
    })
    // .then((success) => {
    //   console.log('success: ', success)
    //   res.sendStatus(201);
    // })
    // .catch((error) => {
    //   res.sendStatus(404);
    //   console.log('error sending invites: ', error)
    // })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})