import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from './styles.module.css'
import Button from './../ui/button'
import Image from './../ui/img'

import backIcon from './../../assets/icons/arrow-back.png'
import closeIcon from './../../assets/icons/close-icon.png'

const Navigation = () => {
	let history = useHistory();

	const navigateBackHandler = () => {
		history.goBack();
	}

	const cancelHandler = () => {
		history.goBack();
	}

	return (
		<div className={styles.navigation} >
			<Button clicked={navigateBackHandler} btnType="round-icon"> 
				<Image path={backIcon} caption="back" /> 
			</Button>
			<Button clicked={cancelHandler} btnType="round-icon"> 
				<Image path={closeIcon} caption="cancel" /> 
			</Button>
		</div>
	)
}

export default Navigation