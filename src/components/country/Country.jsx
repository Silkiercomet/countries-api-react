import styles from "./country.module.css"
import {AiOutlineArrowLeft} from "react-icons/ai"
const Country = ({display, setDisplay, countries, setPage,dark}) => {
  const officialName = display[0].name.nativeName
  const officialCurrencie = display[0].currencies[Object.keys(display[0].currencies)[0]]
  const officialLanguages = Object.values(display[0].languages)
  const capital = display[0].capital === undefined? "none" : display[0].capital[0]

  const handleClick = (e) => {
    let newCountry = countries.filter(country => country.cca3 === e)
    setDisplay(newCountry)
  } 
  const handleName = (e) => {
    let newCountry = countries.filter(country => country.cca3 === e)
    return newCountry[0].name.common
  } 

  const borders = !display[0].borders ? "no borders" : display[0].borders.map(border => <button className={dark ? `dark-bg-element ${styles.country__btn_border}` : `light-bg-element ${styles.country__btn_border}`} key={border} onClick={()=>handleClick(border)}>{handleName(border)}</button>)

  return (
    <main className={styles.country__container}>
      <button onClick={()=>{setDisplay(countries); setPage(0)}} className={dark ? `dark-bg-element ${styles.country__btn}` : `light-bg-element ${styles.country__btn}`}><AiOutlineArrowLeft /> Back</button>
      <section className={styles.country__content}>
        <figure className={styles.imgFlag__container}>
          <img src={display[0].flags.svg} alt={display[0].name.common} className={styles.imgFlag} />
        </figure>
        <article className={styles.details}>
        <h1>{display[0].name.common}</h1>
        <div className={styles.details__container}>
          <ul>
            <li><span className={styles.bold}>Native Name:</span> {officialName[Object.keys(officialName)[0]].official}</li>
            <li><span className={styles.bold}>Population:</span> {display[0].population}</li>
            <li><span className={styles.bold}>Region:</span> {display[0].region}</li>
            <li><span className={styles.bold}>Sub Region:</span> {display[0].subregion}</li>
            <li><span className={styles.bold}>Capital:</span> {capital}</li>
          </ul>
          <ul>
            <li><span className={styles.bold}>Top Level Domain:</span> {display[0].tld[0]}</li>
            <li><span className={styles.bold}>Currencies:</span> {`${officialCurrencie.name} "${officialCurrencie.symbol}"`}</li>
            <li><span className={styles.bold}>Languages:</span> {officialLanguages.join(", ")}</li>
          </ul>
        </div>
        <div className={styles.border__container}>
         <span className={styles.bold}>Border Countries</span> {borders}
        </div>
        </article>
      </section>
    </main>
  )
}

export default Country