import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styles from './styles.module.css'
import Input from './../../components/ui/input'
import Text from './../../components/ui/text'
import List from './../../components/ui/list'
import Keyboard from './../../components/keyboard'
import ErrorBox from './../../components/ui/errorBox'

const Search = () => {
	const [searchInput, setInput] = useState('');
	const [keyboardType, setKeyboardType] = useState(true);
	const [error, setError] = useState(false);
	const [recentSearch] = useState([
		{ title : 'Jathi Ratnalu Movie'},
		{ title : 'Kids English Telugu Dubbed Movies'},
		{ title : '3D Animation Movies'},
		{ title : 'Action Movies in Telugu 2020'}
	])
	
	const history = useHistory();

	const keyboardHandler = () => {
		setKeyboardType(!keyboardType)
	}

	const clickHandler = e => {
		const val = e.target.value;
		setInput(searchInput + val);	
	}

	const inputHandler = e => {
		const val = e.target.value;
		setInput(val);	
	}

	const removeCharacterHandler = () => {
		if (!searchInput) return;

		const currentValue = searchInput;
		const newValue = currentValue.slice(0, -1);
		setInput(newValue);
	}

	const clearHandler = () => {
		setInput('');
	}

	const enterCheckHandler = e => {
		if (e.key === "Enter") {
			return searchHandler();
		}
	}

	const searchHandler = async () => {
		const APIKEY = "65dcb163dc3bdbbc318c9c070cb6ee09";

		const link = `https://api.themoviedb.org/3/search/movie?query=${searchInput}&api_key=${APIKEY}&include_adult=false`;
		const response = await axios.get(link);

		if (response.status !== 200) { 
			setError(true)
		} else {
			history.push({pathname: '/search-results', state: response.data});
		}
	}

	const closeErrorHandler = () => {
		setError(false);
	}

	return (
		<div className={styles.search}>
			<Input 
				type="text"
				name="search"
				placeholder="Search"
				autoComplete="off"
				boxType="searchBox"
				value={searchInput}
				onChange={inputHandler}
				onKeyPress={enterCheckHandler} />
			
			<div className={styles.gridContainer}>
				<div className={styles.recentBox}>
					<Text textType="heading">
						Recent Search Items
					</Text>
					{
						recentSearch.map((item, index) => {
							return(
							<List key={index} >{item.title}</List>
						)})
					}
				</div>
				<div className={styles.keyboard}>
					<Keyboard 
						keyboardType={keyboardType}
						clearHandler={clearHandler}
						removeCharacterHandler={removeCharacterHandler}
						clickHandler={clickHandler}
						keyboardHandler={keyboardHandler}
						searchHandler={searchHandler} />
				</div>
			</div>
			{
				error &&  <ErrorBox 
			 		clicked={closeErrorHandler}
			 		message="Error, Please try again later" />
			}
		</div>
	)
}

export default Search