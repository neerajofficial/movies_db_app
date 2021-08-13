import React from 'react'
import styles from './styles.module.css'
import Item from './item'

const List = props => {
	return (
		<ul className={styles.list}>
			<Item itemType="itemIcon"> 
				{props.children}
			</Item>
			
		</ul>
	)
}

export default List
