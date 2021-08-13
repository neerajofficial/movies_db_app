import React from 'react'
import styles from './styles.module.css'

const Image = props => {
	return (
		<img 
			className={styles.image} 
			src={props.path} 
			alt={props.caption} />
	)
}

export default Image