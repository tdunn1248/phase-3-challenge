fs = require('fs');


fs.readFile('./models/grocery.csv', 'utf8', (err, data) => {
  if (err) {
    console.log('we got an error');
    throw err
  }
  let items = data.split('\n')
  const fields = items[0]
  items.splice(0, 1)
  let sql = ''
  items.map(function (value) {
    if (value) {
      let item = value.split(',')
      const values = `'${item[0]}', ${item[1]}, '${item[2]}'`
      let row = `INSERT INTO grocery (${fields}) VALUES(${values});\n`;
      sql += row
    }
  })
  
  fs.writeFileSync('./models/load-data.sql', sql, 'utf8', (err) => {
    if (err) console.error(err)
  })

  const hardCodeSeed = fs.readFileSync('./models/hardCodeSeed.sql', 'utf8', (error, data) => {
    if (error) throw error
    return data
  })

  fs.appendFileSync('./models/load-data.sql', hardCodeSeed, (error) => {
    if (error) throw error
  })
})
