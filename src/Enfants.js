import React from 'react';

export default function Enfants({enfants}) {
  return (
    <div className='cadreEnfants w-50 mx-auto text-center'>
            <p> {enfants.nom} à {enfants.age} ans</p>            
    </div>
  );
}
