import React from 'react'
import styles from './styles.module.css'
import Text from './../text'
import Image from './../img'

const Card = ({poster, title}) => {
	return (
		<div className={styles.card}>
		<div className={styles.imgArea}>
		{
			poster ?
			<Image 
				path={`http://image.tmdb.org/t/p/w500/${poster}`} 
				caption={title} /> :
			<div className={styles.noImage}>
				No image found!
			</div>
		}
		</div>
			
			<Text textType="title">{title}</Text>
		</div>
	)
}

export default Card