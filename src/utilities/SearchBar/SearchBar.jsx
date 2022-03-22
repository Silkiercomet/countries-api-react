import {useState, useEffect, useRef} from 'react'
import {BsSearch} from "react-icons/bs"
import styles from "./searchbar.module.css"
const SearchBar = ({display, countries, setDisplay, setCurrentPage,dark}) => {
  const [input, setInput] = useState("")
  const [render, setRender] = useState(false)
  const filterOptions = ["Filter by region", "Africa", "America", "Asia", "Europea", "Oceania"]
  const selectRef = useRef()
  const regions = {
      "Filter by region":() => countries,
      "Africa":() => countries.filter(country => country.region === "Africa"),
      "America":() => countries.filter(country => country.region === "Americas"),
      "Asia":() => countries.filter(country => country.region === "Asia"),
      "Europea":() => countries.filter(country => country.region === "Europe"),
      "Oceania":() => countries.filter(country => country.region === "Oceania")
  }

  useEffect(() => {
      if(input !== ""){
          let count = display.filter(c => c.name.common.toLowerCase().includes(input.toLocaleLowerCase()))
          setCurrentPage(1)
          setDisplay(count)
      }else{
          setCurrentPage(1)
          setDisplay(regions[selectRef.current.value]?.())
      }
  },[input,render])
return (
  <menu className={styles.menu}>
      <li className={dark ? `dark-bg-element ${styles.menu__input}` : `light-bg-element ${styles.menu__input}`}>
        <BsSearch />
        <input type="text" className={dark ? "dark-bg-element dark" : 'light-bg-element light'} placeholder='Search for a country' onChange={(e) => setInput(e.target.value)}/>
      </li>
      <li className={dark ? `dark-bg-element ${styles.menu__select}` : `light-bg-element ${styles.menu__select}`}>
        <select name="Filter by Region" ref={selectRef} className={dark ? "dark-bg-element dark" : 'light-bg-element light'} onChange={(e) => {setDisplay(regions[e.target.value]?.())
        setRender(!render)}}>
            {filterOptions.map((opt,index) => <option value={opt} key={index}>{opt}</option>)}
        </select>
      </li>
  </menu>
)
}

export default SearchBar