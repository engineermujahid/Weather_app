const apiKey = "9c77c3a2f520de808b29d47c43370615";
const apiCall = "https://api.openweathermap.org/data/2.5/weather?units=metric&"

// const checkWeather = async () => {
//     let position = document.querySelector("#position").value
//     if (!position) {
//         document.querySelector("#cityName").innerHTML = "Enter city name poperly"
//     } else {
//         const responce = await fetch(`${apiCall}q=${position}&appid=${apiKey}`)
//         const data = await responce.json()
//         console.log(data)
//         document.querySelector("#cityName").innerHTML = data.name
//         document.querySelector("#temp").innerHTML = `${data.main.temp} &deg;C`;
//         document.querySelector("#feel").innerHTML = `Feels Like: ${data.main.feels_like} &deg;C`;
//         document.querySelector("#minTemp").innerHTML = `Min: ${data.main.temp_min} &deg;C`;
//         document.querySelector("#maxTemp").innerHTML = `Max: ${data.main.temp_max} &deg;C`;
//         document.querySelector("#humi").innerHTML = `Humidity: ${data.main.humidity}%`
//         document.querySelector("#wind").innerHTML = `Wind Speed: ${data.wind.speed} kph`
//         document.querySelector("#weather_description").innerHTML = data.weather[0].description;
//         document.querySelector("#position").value = ''
//     }
// }
const checkWeather = async () => {
    let position = document.querySelector("#position").value
    if (!position) {
        document.querySelector("#cityName").innerHTML = "Enter city name poperly"
    } else {
        const promise = new Promise(async (resolve, reject) => {
            const responce = await fetch(`${apiCall}q=${position}&appid=${apiKey}`)
            const data = await responce.json()
            console.log(data)
            // return data
            if (data.cod == 200) {
                resolve(data)
            } else {
                reject(data.message)
            }
        })
        promise.then((data) => {

            console.log(data)
            document.querySelector("#cityName").innerHTML = data.name
            document.querySelector("#temp").innerHTML = `${data.main.temp} &deg;C`;
            document.querySelector("#feel").innerHTML = `Feels Like: ${data.main.feels_like} &deg;C`;
            document.querySelector("#minTemp").innerHTML = `Min: ${data.main.temp_min} &deg;C`;
            document.querySelector("#maxTemp").innerHTML = `Max: ${data.main.temp_max} &deg;C`;
            document.querySelector("#humi").innerHTML = `Humidity: ${data.main.humidity}%`
            document.querySelector("#wind").innerHTML = `Wind Speed: ${data.wind.speed} kph`
            document.querySelector("#weather_description").innerHTML = data.weather[0].description;
            document.querySelector("#position").value = ''
        }).catch((msg) => {
            document.querySelector("#cityName").innerHTML = msg

        })

    }
}


