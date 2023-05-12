// import React, { useState } from 'react';

// function RickAndMortySearch() {
//     const [searchInput, setSearchInput] = useState('');
//     const [characters, setCharacters] = useState([]);

//     const inputChange = (event) => {
//         setSearchInput(event.target.value);
//     };

//     const searchClick = async () => {
//         const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchInput}`);
//         const data = await response.json();
//         setCharacters(data.results);
//     };

//     return (
//         <div>
//             <input type="text" value={searchInput} onChange={inputChange} />
//             <button onClick={searchClick}>Search</button>
//             <ul>
//                 {characters.map((character) => (
//                     <li key={character.id}>{character.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default RickAndMortySearch;

// import React from 'react';

// function Search({ searchInput, setSearchInput, updateResults }) {
//     const inputChange = (event) => {
//         setSearchInput(event.target.value);
//         updateResults(event.target.value);
//     };

//     return (
//         <form>
//             <input type="text" value={searchInput} onChange={inputChange} />
//             <button onClick={updateResults}>Search</button>
//         </form>
//     );
// }

// export default Search;
import React from 'react'

const Search = () => {
    return (
        <div>

        </div>
    )
}

export default Search


