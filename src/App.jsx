import axios from "axios"
import { useEffect, useState } from "react"
import WeatherDetail from "./assets/components/WeatherDetail"


function App() {
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=6c679085b42030631f49f98ad5f7e573
const [weather, setWeather] = useState(null)

const succes = (position)=>{
console.log(position)
//se puede desestructurar de algo desestructurado
const {coords: {latitude,longitude}}=position
console.log(latitude,longitude)
// peticion a API
//instalamos axios
axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=6c679085b42030631f49f98ad5f7e573&lang=es&units=metric`)
.then(({data})=>setWeather(data))
.catch((error)=>console.log(error))
}
useEffect(() => {
  navigator.geolocation.getCurrentPosition(succes)
}, [])


  return (
    <main className="flex justify-center items-center h-screen bg-[url(/imagentre.jpeg)]">
      {
        weather ? <WeatherDetail weather={weather} /> : <span>Loading...</span>
      }
    </main>
  )
}
export default App
