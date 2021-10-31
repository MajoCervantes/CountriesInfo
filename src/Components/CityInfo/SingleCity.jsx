import React from "react"
import { Link } from "react-router-dom"

import "../../Styles/CityInfo/SingleCity.css"

const SingleCity = ({
	name,
	flag,
	capital,
	region,
	data,
}) => {
	console.log(data)

	return (
		<>
			<div className='single-city'>
				<img src={flag} alt={name}></img>
				<h1>Nombre: {name}</h1>
				<div className='info'>
					{capital === "" ? (
						<p>Capital: Sin capital</p>
					) : (
						<p>Capital: {capital}</p>
					)}
					<p>Región: {region}</p>

					<Link to='/'>Inicio</Link>
					{capital === "" ? null : (
						<Link to={`/weather/${capital}`}>
							Clima
						</Link>
					)}
				</div>
			</div>
		</>
	)
}

export default SingleCity
