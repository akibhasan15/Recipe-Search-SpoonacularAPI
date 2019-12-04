import React from 'react'
import {Link} from "react-router-dom";

const Recipes= props=>(

      <div className="container">
            <div className="row">
    {props.recipes.map((recipe)=>{
            
        return (
                  <div key={recipe.title} className="col-4" style={{marginBottom:"1rem"}}>
                      <div className="recipes__box">
                          <img src={`https://spoonacular.com/recipeImages/${recipe.id}-556x370.${recipe.image.split(".").pop()}`} 
                          alt={`${recipe.image}`} 
                          className="recipe__box-img"/>
                          <div className="recipe__text">
                            <h5 className="recipes__title">
                            {recipe.title.length < 20?`${recipe.title}`:`${recipe.title.substring(0,25)}...`}
                            </h5>
                          </div>
                          <button className="recipe_buttons">
                              <Link to={{pathname:`/recipe/${recipe.id}`,
                            state:{recipe:recipe.id}}}>View Recipe</Link></button>
                      </div>
                  </div>
            
        );
      
       
  }
) }
  </div>
          </div>
)

export default  Recipes