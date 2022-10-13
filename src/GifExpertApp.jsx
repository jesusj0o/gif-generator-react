import { React, useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

//API KEY : W8fy615tiNsVYy94cY6CC4AqVjvy5tBp

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Star Wars'])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <h1>Gift Expert</h1>

      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      />


      {
        categories.map((category) => (
          <GifGrid category={category} key={category} />
          )
        )
      }

    </>
  )
}
