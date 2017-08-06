/* helper function that returns true or false
    if the string starts with or ends with []*/

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

// export it to the global scope
module.exports = {arrayFormattedCorrectly}
