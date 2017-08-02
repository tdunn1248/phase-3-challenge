function arrayFormattedCorrectly(array) {
  if(array.endsWith(']')) {
    if(array.startsWith('[')) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

module.exports = {arrayFormattedCorrectly}
