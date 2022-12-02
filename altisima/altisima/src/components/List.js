import React, { useState } from 'react';
import Input from './Input';
import Player from './Player';
import '../stylesheets/List.css'

function List() {

    const [players, setPlayers] = useState([]);

    const addPlayer = player => {
        if (player.name.trim()) {
            player.name = player.name.trim();
            const updatedPlayers = [player, ...players];
            setPlayers(updatedPlayers);
        }
    }

    return (
        <>
        <Input onSubmit={addPlayer} />
          <div className='list-container'>
            {
                players.map((player) => 
                <Player
                    key={player.id}
                    id={player.id}
                    name={player.name} />
                )
            }
          </div>
        </>
    );
}
    
export default List;