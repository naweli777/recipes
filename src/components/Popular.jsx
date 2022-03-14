import { useEffect,useState } from "react";

function Popular() {

  const[popular,setPopular]=useState([]);

  const getPopular = async()=>
  {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`)
    const data =await api.json();
    console.log({data})

    setPopular(data.recipes)
  }

  useEffect(()=>{
    getPopular();
  },[])
  return (
    <div>
      {popular.map((recipe)=>{
        return(
          <div key={recipe.id}>
            {recipe.title}
            </div>
        )

      })}

    </div>
  )
}

export default Popular