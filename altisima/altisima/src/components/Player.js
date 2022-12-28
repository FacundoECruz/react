import React from 'react';
import '../stylesheets/Player.css'
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Player ({ id, name, deletePlayer }) {

    return (
      <div className='player-container'>
        <div 
          className='player-name'>
          {name}
        </div>
        <div 
          className='player-icon-container'
          onClick={() => deletePlayer(id)}>
          <AiOutlineCloseCircle className='player-icon'/>
        </div>
      </div>    
    )
  }

export default Player;