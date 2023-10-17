import React from 'react'
import { useLoaderData, Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import Wrapper from '../assets/wrappers/CocktailPage'

const singleCocktailUrl =
    'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async ({ params }) => {
    const { id } = params;
    const response = await axios.get(`${singleCocktailUrl}${id}`);
    const { data } = response;
    return { id, data };
}

function Cocktail() {
    const { id, data } = useLoaderData();

    // if (!data) return <h2>something went wrong...</h2>
    if (!data) return <Navigate to='/' />;

    const singleDrink = data.drinks[0];

    const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instruction
    } = singleDrink;


    // liet ke cac ingredients
    // kiem tra xem bat dau bang strIngredient va kiem tra xem key do co gia tri hay khong
    // sau do lay ra cac gia tri cua cac key do
    const validIngredients = Object.keys(singleDrink)
        .filter((key) => {
            return key.startsWith('strIngredient') && singleDrink[key] !== null;
        })
        .map((key) => singleDrink[key])

    return (
        <Wrapper>
            <header>
                <Link to='/' className='btn'>
                    Back Home
                </Link>
                <h3>{name}</h3>
            </header>
            <div className='drink'>
                <img src={image} alt={name} className='img' />
                <div className='drink-info'>
                    <p>
                        <span className='drink-data'>Name : </span>
                        {name}
                    </p>
                    <p>
                        <span className='drink-data'>Category : </span>
                        {category}
                    </p>
                    <p>
                        <span className='drink-data'>Info : </span>
                        {info}
                    </p>
                    <p>
                        <span className='drink-data'>Glass : </span>
                        {glass}
                    </p>
                    <p>
                        <span className='drink-data'>Ingredients : </span>
                        {validIngredients.map((item, index) => {
                            return (
                                <span className='ing' key={item}>
                                    {item}{index < validIngredients.length - 1 ? ', ' : ''}
                                </span>
                            )
                        })}
                    </p>
                    <p>
                        <span className='drink-data'>Instruction : </span>
                        {instruction}
                    </p>

                </div>
            </div>
        </Wrapper>
    )
}

export default Cocktail
