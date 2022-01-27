
import React from 'react';
import "./Personnages.css"

export default function Pesonnages({ geoffrey, passer }) {
    return (
        <div className='cadrePerso w-25 mx-auto text-center'>
            <div className="titre mb-5 bg-secondary text-dark m-3 p-1">
                <h1>CV</h1>
                <h4>{geoffrey.nom} {geoffrey.prenom} </h4>

            </div>
            <div className="contenu border border-info text-white">
                <div className="section d-flex flex-column justify-content-start ">
                    <p>{geoffrey.nom}</p>
                    <p>{geoffrey.prenom}</p>
                    <p>{geoffrey.age}</p>
                    <p>{geoffrey.commune}</p>
                </div>
                <button onClick={passer} className='btn btn-success p-2 rounded-pill'>Personne suivante</button>

            </div>
        </div>
    );
}
