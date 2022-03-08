# github_orgs
Programmatically create and invite people to github organizations as owners, students and staff, and have those organizations be owned by/linked to the hack reactor org.

## Getting started
1. run `npm install`
2. run `npm start`

## Creating invitations
The idea here will be to plug in the organizations name (orgName) and the team slug of the team you want to invite (teamSlug) into the '/createOrgInvites' request in index.js. This will loop through the team's members gathering their ids so that those ids can be mapped to create organization invites in which these members will be owners. Once these have been plugged in, navigate to http://localhost:3000/ to run the program.

## Problems
I've run into a few problems with the github api and the original goal.
1. There is currently not a way to programmatically create organizations. Thus, the organization would have to be created before using this tool.
2. There is no way to create "sub-organizations". By this, I mean that hackreactor could not technically own any of these organizations. I'm not sure if there is any way to link each organization to the hackreactor organization itself in the same way that teams can be linked.

## In the works...
1. I have not completed the request in index.js to include the actual invitation creation yet. This is to first get feedback on whether or not we want to go through with this tool since it can't create organizations (the very thing the tool was supposed to do).
2. Ultimately, I'd like to create a front-end client for this tool so that one could easily enter the organization name and team slug(s), press a button, and have the invitations be sent.