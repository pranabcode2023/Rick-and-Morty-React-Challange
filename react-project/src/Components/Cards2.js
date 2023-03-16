import React from 'react';
// import './Cards.css';


const Cards = ({ results }) => {


    return <div className="container">

        <div className="row">
            {results && results.map((character) => (
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
            ))}
        </div>
    </div>;        ////????????????????
};

export default Cards;
