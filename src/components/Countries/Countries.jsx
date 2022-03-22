import {Card, Pagination, SearchBar} from "../../utilities"
import { useState } from "react";
import styles from "./countries.module.css"

const Countries = ({display, setDisplay, countries, setPage, dark}) => {

  //get current posts

  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(8)
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentCountries = display.slice(indexOfFirstPost, indexOfLastPost);

  //count pages
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <main >
        <SearchBar setDisplay={setDisplay} display={display} countries={countries} setCurrentPage={setCurrentPage} dark={dark}/>
        <ul className={styles.countries__grid}>
        {currentCountries.map(country => <li key={country.name.common} onClick={()=>{setDisplay([country]); setPage(1)}}><Card dark={dark} country={country}/></li>)}
        </ul>
        {(display.length > 8) && <Pagination
        postsPerPage={postPerPage}
        totalPosts={display.length}
        paginate={paginate}
        currentPage={currentPage}
      />}
        
    </main>
    
  )
}

export default Countries