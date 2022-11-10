'use-strict';
const showRecipe = async function () {
  try {
    const res = await fetch(
      'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886?key=0fa1bb56-ce3a-4f05-b47c-c4cd0fd712a6'
    );
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    console.log(res, data);
    //let { recipe } = data.data.recipe;
    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    alert(err);
  }
};

showRecipe();
