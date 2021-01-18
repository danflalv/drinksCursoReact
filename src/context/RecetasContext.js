import React, { createContext, useContext, useState } from 'react';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
    
    //States 
    const [recetas, guardarRecetas] = useState([]);
    const [busqueda, buscarRecetas] = useState({
        nombre: '',
        categoria: ''
    });
    

    return ( 
        <RecetasContext.Provider
            value={{
                buscarRecetas
            }}
        >
            {props.children}
        </RecetasContext.Provider>
     );
}
 
export default RecetasProvider;