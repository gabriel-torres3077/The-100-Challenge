import './styles.css';
import { useState, useEffect } from 'react';
import IRecipe from '../../../components/Interfaces/Irecipe';

function MealGenerator() {
    const [recipe, setRecipe] = useState<IRecipe | null>(null);
    function extract_ingredients(data: any) {
        let ingredients: any[] = []

        let igr = Object.entries(data).filter(v => v[0].startsWith("strIngredient")).filter(v => String(v[1]) != "");
        let measure = Object.entries(data).filter(v => v[0].startsWith("strMeasure")).filter(v => String(v[1]) != "" && String(v[1]) != " " && String(v[1]) != null);

        for (let item in igr){
            ingredients.push([measure[item][1], igr[item][1]]);
        }
        return ingredients;
    }
    function makeDish(data: any) {
        let ingredients_extracted = extract_ingredients(data);

        var recipe: IRecipe = {
            id: data.idMeal,
            title: data.strMeal,
            thumb: data.strMealThumb,
            country: data.strArea,
            video: data.strYoutube,
            instructions: data.strInstructions,
            source: data.strSource,
            ingredients: ingredients_extracted
        }
        //console.log(recipe);
        setRecipe(recipe);
    }
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
             .then((res) => res.json())
             .then((data) => {
                console.log(data['meals'][0]);
                makeDish(data['meals'][0]);
            })
             .catch((err) => {
                console.log(err.message);
            });
    }, []);
    console.log(recipe)

    if (recipe) {
        return (
        <div className="meal-container">
            <div className="recipe-title">
              <h1><strong>{recipe.country}</strong> {recipe.title}</h1>
            </div>
            <div className="recipe-video">
                {recipe.video ? (
                    <div className="row">
                    <h5>Video Recipe</h5>
                    <div className="videoWrapper">
                    <iframe
                        width="950"
                        height="500"
                        src={`https://www.youtube.com/embed/${recipe.video.slice(-11)}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    </div>
                </div>
                ) : (
                    <div><h1>Erro ao carregar o vídeo!</h1></div>
                )}
            </div>
            <div className='recipe-info'>
                <div className='recipe-thumb'>
                    <img src={recipe.thumb} alt="Recipe logo" />
                </div>
                <div className='recipe-ingredients'>
                    <h2>Ingredients</h2>
                    <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>
                        {ingredient[0]} - {ingredient[1]}
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
            <div className='recipe-instructions'>
                <h2>Instructions</h2>
                <p>
                   {recipe.instructions} 
                </p>
                <a href={recipe.source} target='_blank' className='recipe-source'>Source</a>
            </div>
        </div>
        );
      } else {
        return <p>Loading...</p>;
      }
}

export default MealGenerator;
