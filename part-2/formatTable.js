function formatTable(data) {
  const columnNames = Object.keys(data[0])
  console.log(columnNames[0], " ",  columnNames[1])
  console.log('-----', '-----------------')
}

module.exports = {formatTable}
