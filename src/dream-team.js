const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if ( !Array.isArray(members) ) {
    return false;
  }

  members = members.filter(member => typeof member === 'string');
  members = members.map(member => member.toUpperCase().trim());
  members.sort();
  
  let teamName = '';

  members.forEach(currentName => {
    teamName = teamName + currentName[0];
  });
  
  return teamName;
};
