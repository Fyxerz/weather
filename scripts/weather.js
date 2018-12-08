const KEY = '&APPID=afe3aa4dc7bf9cb1d8c8f1b622caf8d8'


fetch('api.openweathermap.org/data/2.5/weather?q=Murcia' + KEY)
  .then(response => console.log(response))
