import React, { useState } from "react"
import { useParams } from "react-router-dom"

//Hook
import FetchDataAPI from "../Hooks/FetchDataAPI"

//Styles
import "../Styles/CityInfo/SingleCity.css"

import SingleCity from "../Components/CityInfo/SingleCity"
import Loader from "./Loader"

const CityInfo = () => {
	const [loader, setLoader] = useState(false)

	const { name } = useParams()
	const { data } = FetchDataAPI(
		`https://restcountries.com/v3.1/name/${name}?fullText=true`,
		setLoader
	)
	console.log(data)

	return (
		<>
			{loader ? (
				<Loader />
			) : (
				<div>
					{data.map((city) => (
						<SingleCity
							key={city.name.official}
							flag={city.flags.png}
							name={city.name.common}
							capital={city.capital}
							region={city.region}
							demonym={city.demonyms}
							data={data}
						/>
					))}
				</div>
			)}
		</>
	)
}

export default CityInfo
