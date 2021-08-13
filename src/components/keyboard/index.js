import React from 'react'
import styles from './styles.module.css'
import Alphabets from './alphabets'
import Numbers from './numbers'
import ClearChange from './clearChange'
import KeyboardActions from './keyboardActions'

const Keyboard = props => {
	const {
		keyboardType,
		clearHandler,
		removeCharacterHandler,
		clickHandler,
		keyboardHandler,
		searchHandler
	} = props;

	return (
		<div className={styles.keyboard}>
			{
				keyboardType ?
				<Alphabets clickHandler={clickHandler} /> :
				<Numbers clickHandler={clickHandler} />
			}
			
			<ClearChange 
				keyboardType={keyboardType}
				keyboardHandler={keyboardHandler}
				removeCharacterHandler={removeCharacterHandler} />

			<KeyboardActions
				clickHandler={clickHandler}
				clearHandler={clearHandler}
				searchHandler={searchHandler} />
		</div>
	)
}

export default Keyboard