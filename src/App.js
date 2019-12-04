import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Recipes from './components/Recipes'


const API_KEY="YOUR_SPOONACULAR_API_KEY"

class App extends Component {

    state = {
      recipes:[ ]
    };
     

  
getRecipe=(e)=>{
  e.preventDefault();
      const recipeName=e.target.elements.recipeName.value;
      console.log(recipeName);
      
    fetch(`https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&query=${recipeName}&number=6`).then(res=>res.json())
    .then(res=>this.setState({recipes:res.results}))
    
    //https://cors-anywhere.herokuapp.com/
    // https://cors-anywhere.herokuapp.com/
      
}
componentDidMount=()=> {
  const json=localStorage.getItem("recipes");
  const recipes =JSON.parse(json)
  this.setState({recipes:recipes})
  console.log(process.env.KEY);
}

componentDidUpdate=()=> {
  const recipes=JSON.stringify(this.state.recipes);
  localStorage.setItem("recipes",recipes);
}

  
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>

        <Form getRecipe={this.getRecipe} ></Form>
       
          <Recipes recipes={this.state.recipes}/>
    
  </div>
    );
  
}
}

export default App;
