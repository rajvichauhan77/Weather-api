let weather = document.getElementById("weather")
let weatherWeek = document.getElementById("weatherWeek")

let key = `effa31e218ecf5fd73ce7c877c45a11a`

let b_url = `https://api.openweathermap.org/`

let end_point = `data/2.5/weather?q=London&appid=`

let api_url = b_url+end_point+key

let week_endpoint =  `data/2.5/forecast`

let week_url = b_url+week_endpoint+`?q=London&appid=`+key

// let url = `http://api.openweathermap.org/data/2.5/weather?q=London&appid=effa31e218ecf5fd73ce7c877c45a11a`

//  let last_url = `https://pro.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=effa31e218ecf5fd73ce7c877c45a11a
//  `


document.getElementById("search")
.addEventListener("change", function(e){
    getWeather( b_url+end_point+`q=${e.target.value}`+key)
})


getweather(api_url)

function getweather(api_url){

    fetch(api_url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        showWeather(data)
    })

}


getWeatherWeek(week_url)

function getWeatherWeek(week_url){

    fetch(week_url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.list)
        showWeatherweek(data.list)
    })

}

function showWeather(data){

    weather.innerHTML = `

        
    <div class="row  ">
        <div class="col-6 ">
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

function showWeatherweek(d){

    weatherWeek.innerHTML = ""

    d.map((data) =>{
        weatherWeek.innerHTML += `

                 
            <div class="row g-3 p-3 shadow my-4 m-auto">
                <div class="col-4 m-auto">
                    <span class="badge text-dark">${data.dt_txt}</span>
                </div>
                <div class="col-2">
                   <i class="bi bi-cloud-sun-fill"></i>
               <br/><span class="fs-4">${data.weather[0].main}</span>
                </div>
                <div class="col-2">
                  <span>${data.weather[0].main}</span>
                </div>
                <div class="col-1">
                  <i class="bi bi-thermometer"></i>
                    <small>${(data.main.temp-273.15).toFixed(2)}</small>
                </div>
                <div class="col-1">
                <i class="bi bi-wind"></i>
                    <small>${data.wind.speed} m/s</small>
                </div>
                <div class="col-1">
                <i class="bi bi-moisture"></i>
                    <small>${data.main.humidity}m/s</small>
                </div>
            </div>

        `
    })
}





