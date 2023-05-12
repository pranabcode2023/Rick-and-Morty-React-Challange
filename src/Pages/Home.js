// import React, { useState, useEffect } from 'react';
// // import Cards from '../Components/Cards';
// import Navbar from '../Components/Navbar';
// import Search from '../Components/Search';
// import Cards from '../Components/Cards2';



// function Home() {
//     const [pageNumber, setPageNumber] = useState(1);
//     const [fetchData, setFetchData] = useState([]);
//     const [error, setError] = useState(false);
//     const { info, results } = fetchData;

//     const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
//     const [searchInput, setSearchInput] = useState('');
//     const [filteredResults, setFilteredResults] = useState([]);

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

//     const updateResults = (input) => {
//         const filteredResults = results.filter(result =>
//             result.name.toLowerCase().includes(input.toLowerCase())
//         );
//         setFilteredResults(filteredResults);
//     };

//     return (
//         <div>
//             <Navbar />
//             <h1>Rick & Morty Challenge</h1>
//             <Search searchInput={searchInput} setSearchInput={setSearchInput} updateResults={updateResults} />
//             <Cards results={searchInput ? filteredResults : results} />

//             {error && (<p>{error}</p>)}



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



// import React, { useState, useEffect } from 'react';
// import Navbar from '../Components/Navbar';
// import Search from '../Components/Search';
// import Cards from '../Components/Cards2';

// function Home() {
//     const [pageNumber, setPageNumber] = useState(1);
//     const [fetchData, setFetchData] = useState([]);
//     const [error, setError] = useState(false);
//     const { info, results } = fetchData;

//     const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
//     const [searchInput, setSearchInput] = useState('');
//     const [filteredResults, setFilteredResults] = useState([]);

//     useEffect(() => {
//         async function fetchCharacters() {
//             try {
//                 const data = await fetch(api).then((res) => res.json());
//                 setFetchData(data);
//                 if (data) {
//                     setError(false);
//                 }
//                 console.log(data);
//             } catch {
//                 console.log('error');
//                 setError('something went wrong');
//             }
//         }
//         fetchCharacters();
//     }, [api]);

//     const updateResults = (input) => {
//         const filteredResults = results.filter((result) =>
//             result.name.toLowerCase().includes(input.toLowerCase())
//         );
//         setFilteredResults(filteredResults);
//     };

//     return (
//         <div>
//             <Navbar searchInput={searchInput} setSearchInput={setSearchInput} updateResults={updateResults} />
//             <h1>Rick & Morty Challenge</h1>
//             <Cards results={searchInput ? filteredResults : results} />

//             {error && <p>{error}</p>}

//             {info && (
//                 <div className="pagination-container">
//                     <button className="pagination-button" disabled={pageNumber === 1} onClick={() => setPageNumber((prev) => prev - 1)}>
//                         Previous
//                     </button>

//                     <span className="pagination-page">
//                         Page {pageNumber} of {info.pages}
//                     </span>
//                     <button className="pagination-button" disabled={pageNumber === info.pages} onClick={() => setPageNumber((prev) => prev + 1)}>
//                         Next
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Home;


import React, { useState, useEffect } from 'react';
import Cards from '../Components/Cards';



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
                if (data) {
                    setError(false);
                }
                console.log(data);
            } catch {
                console.log('error');
                setError('something went wrong');
            }
        }
        fetchCharacters();
    }, [api]);

    const updateResults = (input) => {
        const filteredResults = results.filter((result) =>
            result.name.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredResults(filteredResults);
    };

    return (
        <div>
            <nav>
                <div className="Logo">
                    <img src="../images/logo.png" alt="logo" />
                </div>
                <br /><br />
                {/* <h1>Rick & Morty</h1> */}
                <input placeholder='Search' type="text" value={searchInput} onChange={(event) => {
                    setSearchInput(event.target.value);
                    updateResults(event.target.value);
                }} />
                {/* <button className="searchBtn" onClick={() => updateResults(searchInput)}>Search</button> */}
            </nav>

            {error && <p>{error}</p>}
            <Cards results={searchInput ? filteredResults : results} />
            {info && (
                <div className="pagination-container">
                    <button className="pagination-button" disabled={pageNumber === 1} onClick={() => setPageNumber((prev) => prev - 1)}>
                        Previous
                    </button>
                    <span className="pagination-page">
                        Page {pageNumber} of {info.pages}
                    </span>
                    <button className="pagination-button" disabled={pageNumber === info.pages} onClick={() => setPageNumber((prev) => prev + 1)}>
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}

export default Home;




// This is a React component called Home.It imports several other components from files
// located in the "../Components" directory: Cards2, Navbar, and Search.

// The component uses several state variables that are created using the useState hook:

// pageNumber: a number representing the current page of data to fetch from an API.
//     fetchData: an object representing the data fetched from the API, containing an info
// property(object) and a results property(array).
//         error: a boolean value indicating whether an error occurred while fetching data.
//             searchInput: a string representing the user's input in a search field.
// filteredResults: an array of objects representing the results filtered based on the user's search input.
// The component also uses the useEffect hook to fetch data from the Rick and Morty API when the component mounts
//  or the api variable(created based on the current pageNumber) changes.

// The updateResults function is used to update the filteredResults state based on the user's search input.

// In the component's return statement, the Navbar and h1 components are rendered, followed by the Search component with
// its searchInput, setSearchInput, and updateResults props.The Cards2 component is then rendered,
//  with its results prop set to either filteredResults(if searchInput is truthy) or results(if searchInput is falsy).

// If an error occurs while fetching data, a p element displaying the error message is rendered.

//     Finally, if info is truthy(indicating that data has been fetched), a pagination section is rendered,
// allowing the user to navigate through the pages of data.


