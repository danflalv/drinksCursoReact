import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

//Creando el context
export const CategoriasContext = createContext();

//Crear un provider, este es aquel donde se encuentran las funciones y el state
const CategoriasProvider = (props)=>{
    const [categorias, guardarCategorias] =  useState([]);

    //Ejecutar llamado a la API
    useEffect(()=>{
        const obtenerCategorias = async () =>{
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const categorias = await axios.get(url);

            guardarCategorias(categorias.data.drinks);
        }

        obtenerCategorias();
    },[])

    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )   
}

export default CategoriasProvider;