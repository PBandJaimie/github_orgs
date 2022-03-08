const getTeamMemberIds = (teamMembers) => {
  let memberIds = [];
  for (let i = 0; i < teamMembers.data.length; i++) {
    memberIds.push(teamMembers.data[i].id)
  }
  return memberIds;
}

module.exports.getTeamMemberIds = getTeamMemberIds