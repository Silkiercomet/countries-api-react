import axios from "axios";
import { Country, Navbar, Countries } from "./components";
import { useState, useEffect } from "react";
import { Loader } from "./utilities";
function App() {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [display, setDisplay] = useState([]);
  const [page, setPage] = useState(0);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const getCountries = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
        setDisplay(response.data);
        setLoading(false);
        localStorage.setItem("countries", JSON.stringify(response.data));
      } catch (error) {
        setLoading(true);
        console.log(error);
      }
    };
    const getLocalCountries = () => {
      setLoading(true);
      setCountries(JSON.parse(localStorage.getItem("countries")));
      setDisplay(JSON.parse(localStorage.getItem("countries")));
      setLoading(false);
    };
    window.localStorage.length < 10 ? getCountries() : getLocalCountries();
  }, []);

  return (
    <div className={dark ? "dark height" : "light height"}>
      <Navbar setDark={setDark} dark={dark} />
      <main className={dark ? "dark-bg" : "light-bg"}>
        {loading === false ? (
          page !== 1 ? (
            <Countries
              display={display}
              setDisplay={setDisplay}
              countries={countries}
              setPage={setPage}
              dark={dark}
            />
          ) : (
            <Country
              display={display}
              countries={countries}
              setDisplay={setDisplay}
              setPage={setPage}
              dark={dark}
            />
          )
        ) : (
          <div className="center">
            <Loader />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
