import React from 'react'
import styles from './styles.module.css'

const Item = ({children, itemType, ...otherProps}) => {
	return (
		<li className={[styles.item, styles[itemType]].join(' ')}>
			<p>
				{children}
			</p>
		</li>
	)
}

export default Item