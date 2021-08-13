import React from 'react'
import styles from './styles.module.css'
import Button from './../../ui/button'

const KeyboardActions = props => {
	const {
		clearHandler,
		clickHandler,
		searchHandler
	} = props;

	return (
		<div className={styles.bottomActions}>
			<div>
				<Button 
					value="&nbsp;"
					clicked={clickHandler} 
					btnType="keyAction">SPACE</Button>
			</div>
			<div>
				<Button
					clicked={clearHandler} 
					btnType="keyAction">CLEAR</Button>
			</div>
			<div>
				<Button 
					clicked={searchHandler}
					btnType="keyAction--search">SEARCH</Button>
			</div>
		</div>
	)
}

export default KeyboardActions