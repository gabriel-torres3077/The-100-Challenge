interface IRecipe{
    id: number,
    title: string,
    country: string,
    video: string,
    source: string,
    ingredients: Array<Array<string>>,
}

export default IRecipe;