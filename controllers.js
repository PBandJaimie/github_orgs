const axios = require('axios');
const config = require('./config.js');
const helpers = require ('./helpers');


/*new orgs with this naming convention cohort-project-groupX
created from student cohort team and probably a staff team.
Everyone as owners. Also, the new org would be owned/linked to
the hack reactor org*/


//get team members from student cohort team and staff team
const getTeamMembers = (orgLogin, teamSlug) => {
  return axios({
    method: 'GET',
    url: `https://api.github.com/orgs/${orgLogin}/teams/${teamSlug}/members`,
    headers: {
      'User-Agent': 'request',
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': `token ${config.TOKEN}`
    }
  })
    .then((members) => {
      return members
    })
    .catch((err) => {
      console.log('there\'s been an arror in controllers/getTeamMembers:', err)
    })
};

//invite each member and make them owners
const createOrgInvite = (orgName, inviteeId) => {
  return axios({
    method: 'POST',
    url: `https://api.github.com/orgs/${orgName}/invitations`,
    data: {
      invitee_id: inviteeId,
      role: admin
    },
    headers: {
      'User-Agent': 'request',
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': `token ${config.TOKEN}`
    }
  })
    .then((data) => {
      console.log('invitation creation accepted: ', data)
    })
    .catch((err) => {
      console.log(`ERROR in ${ghUser}'s ${orgName} invation creation`, err);
    });
};

module.exports.getTeamMembers = getTeamMembers;
module.exports.createOrgInvite = createOrgInvite;