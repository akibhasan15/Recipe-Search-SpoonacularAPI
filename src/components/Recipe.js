import React, { Component } from 'react'
import {Link} from "react-router-dom";

const API_KEY="YOUR_SPOONACULAR_API_KEY"

class Recipe extends Component {
    state={
        activeRecipe:[]
    }
   
   componentDidMount=()=>{
        const recipeId=this.props.location.state.recipe;
        console.log(recipeId)
        fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`).then(res=>res.json())
        .then(res=>this.setState({activeRecipe:res}))
        console.log(`${recipeId}`)
    }
    render() {
        console.log(this.state.activeRecipe);
        
        // console.log(this.props.location)
        // console.log(this.state.activeRecipe)
        const recipeImage=this.state.activeRecipe.image;
        const recipeTitle=this.state.activeRecipe.title;
        const recipePublisher=this.state.activeRecipe.creditsText;


        // console.log("recipe");
        //  console.log(recipe.id)
            console.log(recipeImage)
        //  console.log(recipe.image.split(".").pop());


        return (
           <div className="container">
               <div className="active-recipe">
                 
                   <img className="active-recipe__img" src={`${recipeImage}`}
                          alt={`${recipeTitle}`}
                          />
                    <h3 className="active-recipe__title">{recipeTitle}</h3>
                    <h4 className="active-recipe__publisher">
        Publisher: <span>{recipePublisher}</span>
                    </h4>
                    <button className="active-recipe__button"><Link to={{pathname:"/"
                           }}>Go Home</Link></button>
               </div>
           </div>
        )
    }
}
export default Recipe;