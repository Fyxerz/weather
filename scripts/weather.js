const fetch = require('node-fetch')

const KEY = '&APPID=afe3aa4dc7bf9cb1d8c8f1b622caf8d8'

<<<<<<< HEAD
fetch('http://api.openweathermap.org/data/2.5/weather?q=Murcia' + KEY)
  .then(response => response.json())
  .then(json => console.log(json))



  
=======
fetch('api.openweathermap.org/data/2.5/weather?q=Murcia' + KEY)
  .then(response => console.log(response))
>>>>>>> 50fc584337bfc003972ee3535ca452489d828451
