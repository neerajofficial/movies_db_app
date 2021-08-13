import React from 'react'
import styles from './styles.module.css'

const Button = props => {
	const { btnType, clicked, ...otherProps } = props;

	return (
		<button 
			className={[styles.button, styles[btnType]].join(' ')} 
			onClick={clicked}
			{...otherProps} >
				{props.children} </button>
	)
}

export default Button