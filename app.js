window.addEventListener('load', ()=>{
  let lon
  let lat

  let temperaturaValor = document.getElementById('temperatura-valor')
  let temperaturaDescripcion= document.getElementById('temperatura-descripcion')

  let ubicacion = document.getElementById('ubicacion')
  let iconoAnimado = document.getElementById('icono-Animado')

  let vientoVelocidad = document.getElementById('Viento-velocidad')

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition( posicion => {
      lon = posicion.coords.longitude
      lat = posicion.coords.latitude
      //console.log(posicion.coords.latitude)

      //const url = 'https://api.openweathermap.org/data/2.5/weather?lat=4.538507&lon=-75.676773&appid=9a135c0218a1298ae83897722aa954dc'
        //console.log(url)

        const url = 'https://api.openweathermap.org/data/2.5/weather?q=Quindio&lang=es&units=metric&appid=9a135c0218a1298ae83897722aa954dc'
                    //console.log(url)

                    fetch(url)
                    .then( Response=> { return Response.json () })
                    .then( data => {
                      
                      let temp = Math.round (data.main.temp)
                      temperaturaValor.textContent = `${temp} °C`
                     let desc = (data.weather[0].description)
                      temperaturaDescripcion.textContent = desc.toUpperCase()

                      ubicacion.textContent = data.name
                      vientoVelocidad.textContent = `${data.wind.speed} m/s`
                      //console.log(data.wind.speed)

                        // para iconos estaticos
                        /*console.log(data.weather[0].icon)
                        let iconCode = data.weather[0].icon
                        const urlicon = `http://openweathermap.org/img/wn/${iconCode}.png`
                        console.log(urlicon)
                        */

                        //iconos animados
                        console.log(data.weather[0].main)
                        switch (data.weather[0].main){
                        case 'Clouds':
                          iconoAnimado.src = 'animated/cloudy.svg'
                          console.log('NUBES')
                          break;

                          case 'Clear':
                          iconoAnimado.src = 'animated/day.svg'
                          console.log('LIMPIO')
                          break;

                          case 'Rain':
                          iconoAnimado.src = 'animated/rainy-6.svg'
                          console.log('Lluvia ligera')
                          break;

                          
                        }




                    })
                    .catch(error => {
                      console.log(error)
                    })
      })

  }


})


