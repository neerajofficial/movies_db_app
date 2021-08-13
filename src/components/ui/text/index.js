import React from 'react'
import styles from './styles.module.css'

const Text = props => {
	const { 
		children,
		textType,
		...otherProps 
	} = props;

	return (
		<p className={[styles.text, styles[textType]].join(' ')} 
			{...otherProps}>
				{props.children} 
		</p>
	)
}

export default Text