import React from 'react'
import styles from "./card.module.css"

const Card = ({country, dark}) => {
  
  const capital = country.capital === undefined? "none" : country.capital[0]
  const countryName = country.name.common.length > 16? `${country.name.common.slice(0,16)}...`:country.name.common;
  return (
    <div className={dark ? `dark-bg-element ${styles.card}` : `light-bg-element ${styles.card}`}>
      <figure className={styles.flag}>
        <img src={country.flags.svg} alt={country.name.common} className={styles.flag__image}/>
      </figure>
      <article className={styles.content__card}>
      <h2>{countryName}</h2>
      <ul>
        <li>Population: {country.population}</li>
        <li>Region: {country.region}</li>
        <li>Capital: {capital}</li>
      </ul>
      </article>
     
    </div>
  )
}

export default Card