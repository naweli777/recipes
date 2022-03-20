import React, { useState,useEffect } from 'react';
import styled from "styled-components"
import {motion} from 'framer-motion';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

function Cuisine() {

  const[cuisine,setCuisine]= useState([])

  let params = useParams();

  const getCuisine=async(name)=>
  { return axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=10&cuisine=${name}`)
    .then((res)=>{
      console.log(res.data.results);
      setCuisine(res.data.results)
    }

    ).catch(error=>
      {
        console.error("error fetching")
      });

  }

  useEffect(()=>
  {
    getCuisine(params.type)
    console.log(params.type)
  },[params.type])
  return (
    <Grid>
      {cuisine.map((item)=>{
        return(
          <Card key ={item.id}>
            <img src={item.image} alt={item.title}/>
            <h4>{item.title}</h4>
          </Card>
        )

      })}


    </Grid>
  )
}

const Grid = styled.div`
  display:Grid;
  grid-template-columns :repeat(auto-fit, minmax(20rem,1fr));
  grid-gap:3rem;
`;
const Card = styled.div`
  img{
    width:100%;
    border-radius:2rem;
  }
  a{
    text-decoration:none
  }
  h4{
    text-align:center;
    padding:1rem;
  }
`

export default Cuisine;