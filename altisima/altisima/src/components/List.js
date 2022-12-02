import React, { useState } from 'react';
import Input from './Input';
import Player from './Player';
import '../stylesheets/List.css'

function List() {

    const [players, setPlayers] = useState([]);

    const addPlayer = player => {
        console.log('Jugador agregado');
        console.log(player);
    }

    return (
        <>
        <Input />
          <div className='list-container'>
            {
                players.map((player) => 
                <Player
                    name={player.name} />
                )
            }
          </div>
        </>
    );
}
    
export default List;