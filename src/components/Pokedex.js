import React, { useEffect, useState } from 'react';
import { Api, onRight } from '../helpers/Api';
import img from "../img/power_77952.png"






export const Pokedex = (props) => {

    const [search, setSearch] = useState("");
    const [pokemon, setPokemon] = useState("");
    
    
    

 const onChange = (e) => {
    setSearch(e.target.value);
  }
  
  const onClick = async (e) => {
      const data = await Api(search);
      setPokemon(data);
      
      
      
  }



  const onCambio = async () => {
    let id = pokemon.id + 1;
    const apiCall = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await apiCall.json();
    setPokemon({
        nombre: "Nombre:"+" "+ data.name,
        id: data.id,
        peso: "Peso:"+ " "+ data.weight + " "+ "kgs",
        type: "Type:"+ " "+ data.types[0].type.name,
        imagen: data.sprites.front_default
    });
    
  }


  const onCambioAtras = async () => {
    let id = pokemon.id - 1;
    const apiCall = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await apiCall.json();
    setPokemon({
        nombre: "Nombre:"+" "+ data.name,
        id: data.id,
        peso: "Peso:"+ " "+ data.weight + " "+ "kgs",
        type: "Type:"+ " "+ data.types[0].type.name,
        imagen: data.sprites.front_default
    });
    
  }


  const spriteBacks = async () => {
    const id = pokemon.id
    const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await url.json()
    setPokemon({
        nombre: "Nombre:"+" "+ data.name,
        id: data.id,
        peso: "Peso:"+ " "+ data.weight + " "+ "kgs",
        type: "Type:"+ " "+ data.types[0].type.name,
        imagen: data.sprites.back_default
    })
  }

  const spriteFront = async () => {
    const id = pokemon.id
    const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await url.json()
    setPokemon({
        nombre: "Nombre:"+" "+ data.name,
        id: data.id,
        peso: "Peso:"+ " "+ data.weight + " "+ "kgs",
        type: "Type:"+ " "+ data.types[0].type.name,
        imagen: data.sprites.front_default
    })
  }

  const boton = () => {
      setPokemon(!pokemon)
      
  }

 




  
    return (
    <div className='pokedex-container'>
        <div className='top-buttons'>
        <div className="light">
        </div>

            <div className='three-dots'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

        <div className='image-container'>
            <div className='gray-container'>
                <div className='two-dot-container'>
                    <div></div>
                    <div></div>
                </div>
                <div className='poke-image'>
                   {pokemon &&
                   <img src={pokemon.imagen} className='imagensuli'>
                    
                   </img>
                   }
                </div>

                <div className='under-poke-image'>
                    <div className='red-dot'></div>
                    <div className='lines-container'>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                </div>

            </div>
        </div>

        <div className='controls-container'>
            <div className='enter-btn'>
                <div>
                    <img onClick={boton} className='power' src={img}/>
                </div>
            </div>
            <div className='middle-btns'>
                <div className='orange-blue-btns'>
                    <button onClick={spriteBacks}>
                           
                    </button>

                    <button onClick={spriteFront}>
                        
                     </button>
                </div>

                <div className='green-screen'>
                    <div>

                        {!pokemon &&
                         <h2 className='find'> Buscando Pokemon.. </h2>
                        }
                        {pokemon &&
                         <h4 className='princi'> {pokemon.nombre} </h4>
                        }

                        {pokemon &&
                         <h4 className='segundos'> {pokemon.peso} </h4>
                        }
                        
                        
                        {pokemon &&
                         <h4 className='segundos'> {pokemon.type} </h4>
                        }

                        {pokemon &&
                         <h4 className='segundos'> {pokemon.id} </h4>
                        }
                       
                        
                    </div>
                
                </div>

            </div>

            <div className='control-pad'>
                <div>
                    <div className='up'></div>
                </div>

                <div className='lbr'>
                    <div onClick={onCambioAtras} className='left'>
                        
                    </div>

                    <div onClick={onCambio} className='right'>
                        
                    </div>

                </div>

                <div className='down'>

                </div>

            </div>
        </div>

            <div className='pokemon'>
        <input className='poke-input'
        onChange={onChange}
        >
            
        </input>

        <div className='cami'>
            <button className='poke-boton' onClick={onClick}>
              
            </button>

            <div>
               
             </div>
        </div>
    </div>
    </div>
  )
}
