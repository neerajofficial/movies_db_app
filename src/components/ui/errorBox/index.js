import React from 'react'
import styles from './styles.module.css'

const ErrorBox = ({ message, clicked }) => (
	<div className={styles.errorBox} onClick={clicked}>
		{message}
	</div>
)

export default ErrorBox;