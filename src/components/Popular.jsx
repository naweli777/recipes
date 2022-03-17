// import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

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

  const { isLoading, data } = useQuery("popular", () => {
    return axios
      .get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`
      )
      .then((res) => res.data);
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    // <div>
    //   {popular.map((recipe) => {
    //     return <div key={recipe.id}>{recipe.title}</div>;
    //   })}
    // </div>
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>

        <Splide 
        options={{
          perPage:4,
          arrows:false,
          pagination:false,
          drag:"free",
          gap:"5rem"

        }}>
          {data?.recipes?.map((recipe) => {
            return (
              <SplideSlide>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position:relative;

  img {
    border-radius: 2rem;
    position:absolute;
    left:0;
    width:100%;
    height:100%;
    object-fit:cover;
  }

  p{
    position:absolute;
    z-index:10;
    left:50%;
    bottom:0%;
    transform:translate(-50%,0%);
    color:white;
    width:100%;
    text-align:center;
    font-weight:600;
    font-size:1rem;
    height:40%;
    display:flex;
    justify-content:center;
    align-items:center;
  }
`;

export default Popular;
