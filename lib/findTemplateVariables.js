module.exports = function (inputString) {
  const regex = /\{\[\.([^\]]+)\.\]\}/g;
  let matches = [], found;
  let templateVariables = [];

  if (typeof inputString !== 'string') {
    throw new Error('input should by of type String')
  }

  while (found = regex.exec(inputString)) {
    matches.push(found[1]);
    regex.lastIndex = found.index+1;
  }

  return matches.reduce((templateVariables, match) => {
    if (templateVariables.indexOf(match) === -1) {
      templateVariables.push(match)
    }
    return templateVariables
  }, templateVariables)
}