import React from 'react'
import styles from './styles.module.css'

const Input = props => {
	const { 
		boxType,
		inputType,
		...otherProps 
	} = props;

	return (
		<div className={[styles.input_wrap, styles[boxType]].join(' ')}>
			<input 
				className={[styles.inputBox, styles[inputType]].join(' ')} 
				{...otherProps} />
	    </div>
	)
}

export default Input