// import React from 'react';
// // import './Cards.css';

// const Cards = ({ results }) => {
//     let display;

//     if (results) {
//         display = results.map((character) => (
//             <div className="cardsContainer">
//                 <div key={character.id} >
//                     <div className="flip-card">
//                         <div className="flip-card-inner">
//                             <div className="flip-card-front">
//                                 <img src={character.image} alt="" className="image-fluid" />
//                             </div>
//                             <div className="flip-card-back">
//                                 <div className="fs-4 fw-bold mb-4">{character.name}</div>
//                                 <div className="fs-6">Last Location:</div>
//                                 <div className="fs-5">{character.location.name}</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         ));
//     }
//     // else {
//     //     // display = <div>Not found</div>;  ////???????????
//     // }

//     return (
//         <div className="container"><div className="row">{display}</div></div>
//     );        ////????????????????
// };

// export default Cards;



// import React from 'react';


// const Cards = ({ results }) => {
//     return (
//         <div className="cardsContainer">
//             {results && results.map((character) => (
//                 <div key={character.id}>
//                     <div className="flip-card">
//                         <div className="flip-card-inner">
//                             <div className="flip-card-front">
//                                 <img src={character.image} alt="" className="image-fluid" />
//                             </div>
//                             <div className="flip-card-back">
//                                 <div className="fs-4 fw-bold mb-4">{character.name}</div>
//                                 <div className="fs-6">Last Location:</div>
//                                 <div className="fs-5">{character.location.name}</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Cards;


import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Cards = ({ results }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const handleShowModal = (character) => {
        setSelectedCharacter(character);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedCharacter(null);
        setShowModal(false);
    };

    return (
        <div className="cardsContainer">
            {results && results.map((character) => (
                <div key={character.id}>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={character.image} alt="" className="image-fluid" />
                            </div>
                            <div className="flip-card-back">
                                <div className="fs-4 fw-bold mb-4">{character.name}</div>
                                <div className="fs-6">Last Location:</div>
                                <div className="fs-5">{character.location.name}</div>
                                <Button onClick={() => handleShowModal(character)}>Read More</Button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {selectedCharacter && (
                <div className="modal">
                    <Modal show={showModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
                        <Modal.Header closeButton>
                            <Modal.Title><h2>{selectedCharacter.name}</h2></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img src={selectedCharacter.image} alt="" className="image-fluid mb-4" />
                            <div><strong>species:</strong> {selectedCharacter.species}</div>
                            <div><strong>gender:</strong> {selectedCharacter.gender}</div>
                            <div><strong>Status:</strong> {selectedCharacter.status}</div>
                            <div><strong>Location:</strong> {selectedCharacter.location.name}</div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            )}
        </div>
    );
};

export default Cards;



//++++++++++++++++++++++++ explanation for this code+++++++++++++++++++++++++++++++++++++++++++++++++



// This is a React functional component called Cards that takes a prop called results.

// Inside the component, a div with class name "container" is created and inside it, there is another div with
// class name "cardsContainer".This div contains a mapping over the results array prop to render a set of cards
// based on the data passed in.

// For each item in results, a div with a flip - card class is created.This class is used to create a flip card effect
//  where the front of the card displays an image of the character and the back of the card displays additional information
//  about the character.

// The key attribute is set to the character object's id property to uniquely identify each card.

// Inside the flip - card div, there is another div with the class flip-card - inner.This inner div is used
// to create the flip animation.Inside this div, there are two more divs: flip - card - front and flip - card - back.

// The flip - card - front div contains an img element with the src attribute set to the character object's image property,
// and the alt attribute set to an empty string.

// The flip - card - back div contains a div element with the classes fs - 4 fw - bold mb - 4, displaying the character's
// name in a larger font size with bold text.Below that, there is another div element with the class fs-6 displaying the
// text "Last Location:", followed by another div element with the class fs-5, displaying the character's last location.

// If the results prop is falsy, meaning that it is undefined, null, or an empty array, no cards will be rendered.

//     Finally, the Cards component is exported as the default export of this module so that it can be imported and used
//         in other parts of the application.








