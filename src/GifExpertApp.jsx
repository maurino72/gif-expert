import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>Gif Expert App</h1>

      {/* Input */}
        <AddCategory 
          // setCategories={setCategories} 
          onNewCategory={onAddCategory}
        />
      {/* Listado de Gifs */}
      <ol>
          {categories.map(category => (
            <GifGrid 
              key={category} 
              category={category} 
            />
          ))}
      </ol>
        {/* GifItem */}
    </>
  )
}
