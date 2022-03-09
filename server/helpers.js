const getTeamMemberInfo = (teamMembers) => {
  let memberInfo = [];
  for (let i = 0; i < teamMembers.data.length; i++) {
    let member = {};
    member.id = teamMembers.data[i].id;
    member.name = teamMembers.data[i].login;
    memberInfo.push(member);
  }
  return memberInfo;
}

const extractMemberIds = (memberInfo) => {
  return new Promise ((resolve, reject) => {
    let inviteeIds = [];
    for (let i = 0; i < memberInfo.length; i++) {
      inviteeIds.push(memberInfo[i].id)
    }
    resolve(inviteeIds);
  });
}

module.exports.getTeamMemberInfo = getTeamMemberInfo;
module.exports.extractMemberIds = extractMemberIds;