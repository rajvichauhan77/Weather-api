let key = `effa31e218ecf5fd73ce7c877c45a11a`

let b_url = `https://api.openweathermap.org/`

let end_point = `data/2.5/weather?q=London&appid=`

let api_url = b_url+end_point+key

let week_url = ``

// let url = `http://api.openweathermap.org/data/2.5/weather?q=London&appid=effa31e218ecf5fd73ce7c877c45a11a`

getweather(api_url)

function getweather(api_url){

    fetch(api_url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        showWeather(data)
    })

}

function showWeather(data){

    weather.innerHTML = `

        
    <div class="row">
        <div class="col-6">
              <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="">
              <i class="bi bi-cloud-sun-fill"></i>
               <br/><span class="fs-4">${data.weather[0].main}</span>
               
        </div>
        <div class="col-6 mt-3">
                    <b class="fs-4">${data.name}</b>
                    <br/>
                    <p>${data.weather[0].description}</p>
                </div>
         <div class="col-6 mt-3">
         <i class="bi bi-thermometer-high"></i>
            <b>${(data.main.temp-273.15).toFixed(2)}</b>
        </div>
         <div class="col-6">
                <b><i class="bi bi-wind"></i></b>
                <b>${data.wind.speed} m/s</b>
        </div>
                 <div class="col-4 mt-3">
                <b><i class="bi bi-thermometer-sun"></i></b>
                <b>${data.wind.deg} m/s</b>
        </div>
            </div>
                 <div class="col-4 mt-3">
                <b><i class="bi bi-moisture"></i></b>
                <b>${data.main.humidity} m/s</b>
        </div>
    </div>

    `

}

