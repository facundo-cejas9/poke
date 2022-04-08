import { useState } from "react";


export const Api = async (id) => {
    
    try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}` ;
    const resp = await fetch(url);
    const data   = await resp.json();
    
    
   
return {
    nombre: "Nombre:"+" "+ data.name,
    id: data.id,
    peso: "Peso:"+ " "+ data.weight + " "+ "kgs",
    type: "Type:"+ " "+ data.types[0].type.name,
    imagen: data.sprites.front_default,
    error: false
};
    } catch (error) {
        alert("Pokemon no encontrado, busca otro")
    }

    finally {


        const url = `https://pokeapi.co/api/v2/pokemon/${id}` ;
    const resp = await fetch(url);
    const data   = await resp.json();
    
    
   
return {
    nombre: "Nombre:"+" "+ data.name,
    id: data.id,
    peso: "Peso:"+ " "+ data.weight + " "+ "kgs",
    type: "Type:"+ " "+ data.types[0].type.name,
    imagen: data.sprites.front_default,
    error: false
};

    
      
    }

    }


    
    
   
        









