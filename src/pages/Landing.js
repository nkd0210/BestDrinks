import { useLoaderData } from "react-router";
import axios from "axios";
import CocktailList from "../components/CocktailList";

const cocktailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';


export const loader = async () => {
    const searchTerm = '';

    const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
    return { drinks: response.data.drinks, searchTerm }

}

function Landing() {
    const { drinks, searchTerm } = useLoaderData();
    return (
        <>
            <CocktailList drinks={drinks} />

        </>
    )
}

export default Landing
