import React, { useState, useEffect } from "react"

import { useParams } from "react-router-dom"

//Styles
import "../Styles/WeatherInfo/WeatherInfo.css"

//Components
import CityWeather from "../Components/WeatherInfo/CityWeather"
import Loader from "./Loader"

//Hooks
import FetchDataAPI from "../Hooks/FetchDataAPI"

const WeatherInfo = () => {
	const capital = useParams()
	const [weatherData, setWeatherData] =
		useState(null)

	const [loader, setLoader] = useState(false)

	const { data } = FetchDataAPI(
		`https://restcountries.com/v3.1/capital/${capital.capital}`,
		setLoader
	)

	useEffect(() => {
		const handleFetchWeatherAPI = async () => {
			const key = `e1c652e014cb934943f2771b6f55628e`
			try {
				const response = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?q=${capital.capital}&appid=${key}`
				)
				const result = await response.json()
				setWeatherData(result)
				console.log(result)
			} catch (error) {
				console.log(error)
			}
		}
		handleFetchWeatherAPI()
	}, [capital])

	console.log(weatherData)

	return (
		<>
			{weatherData &&
			weatherData.weather[0].description.includes(
				"clear sky"
			) ? (
				<div
					className='weather-img-container'
					style={{
						backgroundImage:
							"url(https://www.uniradioserver.com/media/news_thumbs/201803/20180310111346_61.jpeg)",
						backgroundRepeat: "no repeat",
						backgroundSize: "cover",
					}}></div>
			) : weatherData &&
			  weatherData.weather[0].description.includes(
					"clouds"
			  ) ? (
				<div
					className='weather-img-container'
					style={{
						backgroundImage:
							"url(https://upload.wikimedia.org/wikipedia/commons/5/50/Cielo_Nublado.jpg)",
						backgroundRepeat: "no repeat",
						backgroundSize: "cover",
					}}></div>
			) : weatherData &&
			  weatherData.weather[0].description.includes(
					"rain"
			  ) ? (
				<div
					className='weather-img-container'
					style={{
						backgroundImage:
							"url(https://st.depositphotos.com/1006753/5080/i/600/depositphotos_50807889-stock-photo-city-view-through-a-window.jpg)",
						backgroundRepeat: "no repeat",
						backgroundSize: "cover",
					}}></div>
			) : weatherData &&
			  weatherData.weather[0].description.includes(
					"drizzle"
			  ) ? (
				<div
					className='weather-img-container'
					style={{
						backgroundImage:
							"url(https://st.depositphotos.com/1006753/5080/i/600/depositphotos_50807889-stock-photo-city-view-through-a-window.jpg)",
						backgroundRepeat: "no repeat",
						backgroundSize: "cover",
					}}></div>
			) : weatherData &&
			  weatherData.weather[0].description.includes(
					"sleet"
			  ) ? (
				<div
					className='weather-img-container'
					style={{
						backgroundImage:
							"url(https://image.shutterstock.com/image-photo/winter-background-snow-frost-free-260nw-1166024464.jpg)",
						backgroundRepeat: "no repeat",
						backgroundSize: "cover",
					}}></div>
			) : weatherData &&
			  weatherData.weather[0].description.includes(
					"snow"
			  ) ? (
				<div
					className='weather-img-container'
					style={{
						backgroundImage:
							"url(https://image.shutterstock.com/image-photo/winter-background-snow-frost-free-260nw-1166024464.jpg)",
						backgroundRepeat: "no repeat",
						backgroundSize: "cover",
					}}></div>
			) : weatherData &&
			  weatherData.weather[0].description.includes(
					"thunderstorm"
			  ) ? (
				<div
					className='weather-img-container'
					style={{
						backgroundImage:
							"url(https://services.meteored.com/img/article/destellos-azules-hallazgo-en-las-nubes-288651-2_1024.jpg)",
						backgroundRepeat: "no repeat",
						backgroundSize: "cover",
					}}></div>
			) : (
				<div
					className='weather-img-container'
					style={{
						backgroundImage:
							"url(https://upload.wikimedia.org/wikipedia/commons/2/27/Una_ma%C3%B1ana_de_neblina_los_frios_pueden_llegar_hasta_los_10_C%C2%B0.jpg)",
						backgroundRepeat: "no repeat",
						backgroundSize: "cover",
					}}></div>
			)}
			{weatherData &&
			data.length > 0 &&
			!loader ? (
				<div className='weather-container'>
					<CityWeather
						name={weatherData.name}
						description={
							weatherData.weather[0].description
						}
						icon={weatherData.weather[0].icon}
						temp={weatherData.main.temp}
						tempMax={weatherData.main.temp_max}
						tempMin={weatherData.main.temp_min}
						humidity={weatherData.main.humidity}
						windSpeed={weatherData.wind.speed}
						flag={data[0].flags.png}
					/>{" "}
				</div>
			) : (
				<Loader />
			)}
		</>
	)
}

export default WeatherInfo
