import React, { useState } from "react"

//CustomHook
import FetchDataAPI from "../Hooks/FetchDataAPI"

//Components
import SearchForm from "../Components/Home/SearchForm"
import AllCountries from "../Components/Home/AllCountries"
import Loader from "./Loader"

const Home = () => {
	const [loader, setLoader] = useState(false)

	const { data } = FetchDataAPI(
		"https://restcountries.com/v3.1/all",
		setLoader
	)
	console.log(data)

	return (
		<>
			{loader ? (
				<Loader />
			) : (
				<div>
					<SearchForm />
					{data.map((Country) => (
						<AllCountries
							key={Country.name.official}
							flag={Country.flags.png}
							name={Country.name.common}
						/>
					))}
				</div>
			)}
		</>
	)
}

export default Home
