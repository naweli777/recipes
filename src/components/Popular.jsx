// import { useEffect, useState } from "react";
import {useQuery} from "react-query";
import axios from 'axios';

function Popular() {

// traditional method starts
  // const [popular, setPopular] = useState([]);

  // const getPopular = async () => {
  //   const api = await fetch(
  //     `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`
  //   );
  //   const data = await api.json();
  //   console.log({ data });

  //   setPopular(data.recipes);
  // };

  // useEffect(() => {
  //   getPopular();
  // }, []);

  // traditional method ends


  const {isLoading,data} = useQuery('popular',()=>{
  return axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`).then(res=>res.data);


  })

  if(isLoading)
  {
    return <h2>Loading...</h2>
  }

console.log({data})
  return (

    // <div>
    //   {popular.map((recipe) => {
    //     return <div key={recipe.id}>{recipe.title}</div>;
    //   })}
    // </div>
    <div>
      {data?.recipes?.map(recipe=>{
        return<div key={recipe.id}>{recipe.title}</div>
      })}
    </div>
  );
}

export default Popular;
