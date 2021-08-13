import React from 'react'
import styles from './styles.module.css'
import Button from './../../ui/button'
import Image from './../../ui/img'
import clearIcon from './../../../assets/icons/clear-icon.png'

const ClearChange = props => {
	const {
		removeCharacterHandler,
		keyboardHandler,
		keyboardType
	} = props;

	return (
		<div className={styles.actions}>
			<div>
				<Button 
					clicked={removeCharacterHandler}
					btnType="keyChange">
					<Image 
						path={clearIcon} 
						caption="clear" />
				</Button>
			</div>
			<div className={styles.changeKeyboard}>
				<Button 
					clicked={keyboardHandler}
					btnType="keyChange">
					{
						keyboardType ?
						<span>123</span> :
						<span>ABC</span>
					}
				</Button>
			</div>
		</div>
	)
}

export default ClearChange