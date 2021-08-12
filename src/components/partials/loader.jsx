import React, { useState, useEffect } from 'react'

const Loader = () => {

	const [data, setData] = useState([])
	const [loading, setLoading] = useState(undefined)
	const [completed, setCompleted] = useState(undefined)

	useEffect(() => {
		setTimeout(() => {
			fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((json) => {
				console.log(json)
				setData(json)
				setLoading(true)

				setTimeout(() => {
					setCompleted(true)
				}, 1000)
			})
		}, 2000)
	}, [])
}

export default Loader