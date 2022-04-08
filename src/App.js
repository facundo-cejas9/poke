import React, { useState } from 'react'
import "./App.scss";
import { Pokedex } from './components/Pokedex';
import { SearchPokemon } from './components/SearchPokemon';

export const App = () => {
  

  
    return (
    <div className='App'>

    
        <div className='column'>
            <Pokedex />
        
        </div>

       
        
    </div>
  )
}


export default App;