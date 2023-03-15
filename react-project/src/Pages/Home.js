import React, { useState, useEffect } from 'react'
import Cards from '../Components/Cards';
import Navbar from '../Components/Navbar'
import Search from '../Components/Search';

function Home() {
    let [pageNumber, setPageNumber] = useState(1);
    let [fetchData, updateFetchData] = useState([]);
    let { info, results } = fetchData;

    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            updateFetchData(data);
        })();
    }, [api]);

    return (
        <div>
            <Navbar />
            <h1>Ricky & Morty challange</h1>
            <Search />
            <Cards results={results} />
            <h2>Search</h2>
            <h2>content</h2>



        </div>
    )
}
export default Home;