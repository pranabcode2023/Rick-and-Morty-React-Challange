// import React from 'react'

// const Cards = ({ results }) => {

//     let display;

//     if (results) {
//         display = results.map((x) => {
//             let { id, name, image, location } = x;

//             return (
//                 <div key={id} className="col-4">
//                     <div className="">
//                         <img src={image} alt="" className="image-fluid" />
//                         <div className="fs-4 fw-bold mb-4">{name}</div>
//                         <div className=''>
//                             <div className='fs-6'>last location</div>
//                             <div className='fs-5'>{location.name}</div>
//                         </div>
//                     </div>
//                 </div>
//             );
//         });
//     }
//     else {
//         display = "Not found";
//     }

//     console.log(results);
//     return (
//         <div>{display}</div>
//     )
// }

// export default Cards

// import React from 'react';
// // import './Cards.css';

// const Cards = ({ results }) => {
//     let display;

//     if (results) {
//         display = results.map((character) => (
//             <div key={character.id} className="col-4">
//                 <div className="flip-card">
//                     <div className="flip-card-inner">
//                         <div className="flip-card-front">
//                             <img src={character.image} alt="" className="image-fluid" />
//                         </div>
//                         <div className="flip-card-back">
//                             <div className="fs-4 fw-bold mb-4">{character.name}</div>
//                             <div className="fs-6">Last Location:</div>
//                             <div className="fs-5">{character.location.name}</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         ));
//     } else {
//         // display = <div>Not found</div>;
//     }

//     return <div className="container">{display}</div>;
// };

// export default Cards;

import React from 'react';
// import './Cards.css';

const Cards = ({ results }) => {
    let display;

    if (results) {
        display = results.map((character) => (
            <div key={character.id} className="col-md-3">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={character.image} alt="" className="image-fluid" />
                        </div>
                        <div className="flip-card-back">
                            <div className="fs-4 fw-bold mb-4">{character.name}</div>
                            <div className="fs-6">Last Location:</div>
                            <div className="fs-5">{character.location.name}</div>
                        </div>
                    </div>
                </div>
            </div>
        ));
    } else {
        // display = <div>Not found</div>;  ???????????
    }

    return <div className="container"><div className="row">{display}</div></div>;        ////????????????????
};

export default Cards;
