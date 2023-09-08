import React from 'react'
import { useState, createContext } from "react";

export default function IngredientsContext({children}:any) {

    const IngredientsContext = createContext('');

    const [ingredients, setIngredients] = useState('asd');

  return (
    <IngredientsContext.Provider value={ingredients}>
        {children}
    </IngredientsContext.Provider>
  )
}
