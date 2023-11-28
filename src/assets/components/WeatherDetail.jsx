const WeatherDetail = ({ weather }) => {
    console.log(weather);
    const celsiusToF = (tempCelsius)=>{
const tempF = ((tempCelsius*(9/5))+32).toFixed(1)
return tempF
    }
    return (
        <article className="text-center grid gap-5">
            <h2 className="text-2xl  shadow-2xl ">
                {weather.name},{weather.sys.country}
            </h2>
            <div className="grid gap-4">
                <section className="bg-white/50 p-2 rounded-xl grid grid-cols-2 items-center">
                    <h2 className="col-span-2">{weather.weather[0].description}</h2>
                    <span className="text-3xl">{celsiusToF(weather.main.temp)}C</span>
                    <div>
                        <img className="block mx-auto"
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                            alt=""
                        />
                    </div>
                </section>
                <section className="grid grid-cols-3 justify-items-center bg-white/50 p-2 rounded-xl">
                    <div className="flex gap-1">
                        <div>
                            <img src="/mdi.svg" alt="" />
                        </div>
                        <div>
                            <span>{weather.wind.speed} m/s</span>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <div>
                            <img src="/pressre.svg" alt="" />
                        </div>
                        <div>
                            <span>{weather.main.humidity} % </span>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <div>
                            <img src="arrow.svg" alt="" />
                        </div>
                        <div>
                            <span>{weather.main.pressure}hPa </span>
                        </div>
                    </div>
                </section>
            </div>
            <button className="grid p-2 rounded-xl bg-white/80">Cambiar a F°</button>
        </article>
    );
};
export default WeatherDetail;
