import React from 'react'
import Card from './Card';

import Sonic from '../../assets/images/sonic.jpg';
import Assassins from '../../assets/images/assassinscreed.jpg';
import Battlefield from '../../assets/images/Battlefield1.jpg';

const cards = [
{
  id: 1,
  title: 'Sonic',
  image: Sonic,
  text: 'Sonic the Hedgehog es una serie de videojuegos publicados por Sega y por Sonic Team. Hoy en día, Sonic es considerado uno de los personajes más influyentes del mundo de los videojuegos.'
},
{
  id: 2,
  title: "Assassin's Creed II",
  image: Assassins,
  text: "Assassin's Creed II es un videojuego de acción-aventura de ficción histórica, desarrollado por Ubisoft Montreal."
},
{
  id: 3,
  title: 'Battlefield 1',
  image: Battlefield,
  text: 'Battlefield 1 es un videojuego de disparos y acción bélica en primera persona. El título fue desarrollado por EA Digital Illusions CE y distribuido por Electronic Arts para PlayStation 4, Xbox One y Microsoft Windows.'
}
]
  
function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({id,title,image,text})=>(
          <div className="col-md-4" key={id}>
            <Card title={title} image={image} text={text} />
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Cards;

