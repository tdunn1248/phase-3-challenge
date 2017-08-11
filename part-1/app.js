const app = require('express')()
const bodyParser = require('body-parser')

const port = 3008

const daysOfWeek = {monday: 1, tuesday:2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7}

app.use(bodyParser.json())

app.get('/', (request, response) => {
  response.send('<h1>Simple Web App</h1>')
})

app.get('/api/days/:day', (request, response) => {
  response.set('Content-Type', 'plain/text')
  if (daysOfWeek.hasOwnProperty(request.params.day)) {
    const dayNumber = daysOfWeek[request.params.day]
    response.status(200).send({response: dayNumber})
  } else {
    response.status(400).send({error: request.params.day + ' is not a valid day'})
  }
})

app.post('/api/arrays/concat', (request, response) => {
  const {array1, array2} = request.body

  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return response.status(400).json({message: 'Please send your json in array formats'})
  }

  response.set('Content-Type', 'application/json')
  response.status(200).json({response: array1.concat(array2)})
})

app.listen(port, () => console.log('Server runnin on port: ' + port))
