import React, { useState } from 'react';
import Input from './Input';
import Player from './Player';
import '../stylesheets/List.css'

function List() {
    return (
        <>
          <Input />
          <div className='list-container'>
              LISTA DE JUGADORES
          </div>
        </>
      )
    }
    
    export default ListTask;