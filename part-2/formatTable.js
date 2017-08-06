
// declare a function that has a data parameter
function formatTable(data) {
  // first item of data is going to be the column names, store them in a const

  const columnNames = Object.keys(data[0])
  // console log the 1st and 2nd index values of columnNames
  console.log(columnNames[0], " ",  columnNames[1])
  // log a beautiful column header  line
  console.log('-----', '-----------------')
}

// export to global scope 
module.exports = {formatTable}
