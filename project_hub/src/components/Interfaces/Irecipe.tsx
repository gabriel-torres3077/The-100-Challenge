interface IRecipe{
    id: number,
    title: string,
    thumb: string,
    country: string,
    video: string,
    instructions: string,
    source: string,
    ingredients: Array<Array<string>>,
}

export default IRecipe;