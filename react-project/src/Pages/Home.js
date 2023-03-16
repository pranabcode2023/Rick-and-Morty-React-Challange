// import React, { useState, useEffect } from 'react'
// import Cards from '../Components/Cards';
// import Navbar from '../Components/Navbar'
// import Search from '../Components/Search';

// function Home() {
//     let [pageNumber, setPageNumber] = useState(1);
//     let [fetchData, setFetchData] = useState([]);
//     let { info, results } = fetchData;


//     let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`

//     useEffect(() => {
//         (async function () {
//             let data = await fetch(api).then((res) => res.json());
//             setFetchData(data);
//         })();
//     }, [api]);

//     return (
//         <div>
//             <Navbar />
//             <h1>Rick & Morty challange</h1>

//             <div className="container">
//                 <div className="row">
//                     <div className="col-3"></div>
//                 </div>
//                 <div className="row">
//                     {results &&
//                         results.map((x) => {
//                             let { id, name, image, location } = x;

//                             return (
//                                 <div key={id} className="col-md-3">
//                                     <div className="">
//                                         <img src={image} alt="" className="image-fluid" />
//                                         <div className="fs-4 fw-bold mb-4">{name}</div>
//                                         <div className=''>
//                                             <div className='fs-6'>last location</div>
//                                             <div className='fs-5'>{location.name}</div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     {!results && <div className="col">Not found</div>}
//                 </div>
//             </div>
//             <Cards />
//             <Search />
//         </div>
//     );
// }


// export default Home;


// import React, { useState, useEffect } from 'react';
// import Cards from '../Components/Cards';
// import Navbar from '../Components/Navbar';
// import Search from '../Components/Search';
// // import './Home.css';

// function Home() {
//     const [pageNumber, setPageNumber] = useState(1);
//     const [fetchData, setFetchData] = useState([]);
//     const { info, results } = fetchData;

//     const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

//     useEffect(() => {
//         async function fetchCharacters() {
//             const data = await fetch(api).then((res) => res.json());
//             console.log(data)
//             setFetchData(data);
//         }
//         fetchCharacters();
//     }, [api]);

//     return (
//         <div>
//             <Navbar />
//             <h1>Rick & Morty Challenge</h1>
//             <Search />
//             <Cards />
//             <div className="container">
//                 <div className="row">
//                     {results &&
//                         results.map((character) => (
//                             <div key={character.id} className="col-md-3">
//                                 <div className="flip-card">
//                                     <div className="flip-card-inner">
//                                         <div className="flip-card-front">
//                                             <img src={character.image} alt="" className="image-fluid" />
//                                         </div>
//                                         <div className="flip-card-back">
//                                             <div className="fs-4 fw-bold mb-4">{character.name}</div>
//                                             <div className="fs-6">Last Location:</div>
//                                             <div className="fs-5">{character.location.name}</div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     {/* {!results && <div className="col">Not found</div>} */}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Home;

// import React, { useState, useEffect } from 'react';
// import Cards from '../Components/Cards';
// import Cards2 from '../Components/Cards2';

// import Navbar from '../Components/Navbar';
// import Search from '../Components/Search';
// // import './Home.css';

// function Home() {
//     const [pageNumber, setPageNumber] = useState(1);
//     const [fetchData, setFetchData] = useState([]);
//     const [error, setError] = useState(false)
//     const { info, results } = fetchData;

//     const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

//     useEffect(() => {
//         async function fetchCharacters() {
//             try {

//                 const data = await fetch(api).then((res) => res.json());
//                 setFetchData(data);
//                 if (data) { setError(false) }
//                 console.log(data);

//             } catch {
//                 console.log('error')
//                 setError('something went wrong')
//             }

//         }
//         fetchCharacters();
//     }, [api]);

//     return (
//         <div>
//             <Navbar />
//             <h1>Rick & Morty Challenge</h1>
//             <Search />
//             {error && (<p>{error}</p>)}

//             {/* <Cards results={results} /> */}
//             <Cards2 results={results} />


//             {info && (
//                 <div className="pagination-container">
//                     <button
//                         className="pagination-button"
//                         disabled={pageNumber === 1}
//                         onClick={() => setPageNumber((prev) => prev - 1)}>

//                         Previous
//                     </button>

//                     <span className="pagination-page">
//                         Page {pageNumber} of {info.pages}
//                     </span>
//                     <button
//                         className="pagination-button"
//                         disabled={pageNumber === info.pages}
//                         onClick={() => setPageNumber((prev) => prev + 1)}>

//                         Next
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Home;


import React, { useState, useEffect } from 'react';
// import Cards from '../Components/Cards';
import Cards2 from '../Components/Cards2';
import Navbar from '../Components/Navbar';
import Search from '../Components/Search';

function Home() {
    const [pageNumber, setPageNumber] = useState(1);
    const [fetchData, setFetchData] = useState([]);
    const [error, setError] = useState(false);
    const { info, results } = fetchData;

    const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    useEffect(() => {
        async function fetchCharacters() {
            try {
                const data = await fetch(api).then((res) => res.json());
                setFetchData(data);
                if (data) { setError(false) }
                console.log(data);
            } catch {
                console.log('error')
                setError('something went wrong')
            }
        }
        fetchCharacters();
    }, [api]);

    const updateResults = (input) => {
        const filteredResults = results.filter(result =>
            result.name.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredResults(filteredResults);
    };

    return (
        <div>
            <Navbar />
            <h1>Rick & Morty Challenge</h1>
            <Search searchInput={searchInput} setSearchInput={setSearchInput} updateResults={updateResults} />
            <Cards2 results={searchInput ? filteredResults : results} />

            {error && (<p>{error}</p>)}



            {info && (
                <div className="pagination-container">
                    <button
                        className="pagination-button"
                        disabled={pageNumber === 1}
                        onClick={() => setPageNumber((prev) => prev - 1)}>
                        Previous
                    </button>

                    <span className="pagination-page">
                        Page {pageNumber} of {info.pages}
                    </span>
                    <button
                        className="pagination-button"
                        disabled={pageNumber === info.pages}
                        onClick={() => setPageNumber((prev) => prev + 1)}>
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}

export default Home;
