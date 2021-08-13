import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import Text from './../../components/ui/text'
import Card from './../../components/ui/card'
import ErrorBox from './../../components/ui/errorBox'

const SearchResult = props => {
	const {results} = props.location.state;

	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (results && results.length > 0) {
			setMovies(results)
		} else {
			setError(true);
		}
	}, [results]);

	const closeErrorHandler = () => {
		setError(false);
	}

	return (
		<div className={styles.searchResult}>
			<Text textType="heading--results">
				Search Results
			</Text>
			<div className={styles.moviesList}>
			{
				movies && 
				movies.map(movie => (
					<Card key={movie.id} title={movie.title} poster={movie.poster_path} />
				))
			}
			</div>
			{
				error &&  <ErrorBox 
			 		clicked={closeErrorHandler}
			 		message="No movie found!" />
			}
		</div>
	)
}

export default SearchResult