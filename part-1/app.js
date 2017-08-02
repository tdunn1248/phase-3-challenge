const app = require('express')()
const bodyParser = require('body-parser')

const port = 3008

const daysOfWeek = {monday: 1, tuesday:2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (request, response) => {
  response.send('<h1>Simple Web App</h1>')
})

app.get('/api/days/:day', (request, response) => {
  /*
  When the parameter is an Array or Object, Express responds
  with the JSON representation:
  */
  response.set('Content-Type', 'text/html')
  if (daysOfWeek.hasOwnProperty(request.params.day)) {
    const dayNumber = daysOfWeek[request.params.day]
    response.status(200).send({response: dayNumber})
  } else {
    response.json({error: request.params.day + ' is not a valid day'})
  }
})

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

app.post('/api/arrays/concat', (request, response) => {
  const string1 = request.body.string1
  const string2 = request.body.string2
  if(arrayFormattedCorrectly(string1) === false || arrayFormattedCorrectly(string2) === false) {
    response.status(400).json({error: 'Input data should be type Array'})
  }

  const str1 = string1.replace(/[[\]]/g,'')
  const str2 = string2.replace(/[[\]]/g,'')
  const array1 = str1.split(",")
  const array2 = str2.split(",")
  const results = array1.concat(array2)

  response.set('Content-Type', 'application/json')
  response.status(200).json({response: results})
})

app.listen(port, () => console.log('Server runnin on port: ' + port))