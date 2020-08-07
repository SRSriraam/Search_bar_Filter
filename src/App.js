import React,{Component} from 'react';
import {CardList} from './component/card-list/card-list.component'; 
import './App.css';
import  {SearchBox} from './component/search-box/search-box.component'

class App extends Component{
  constructor(){
    super()
    this.state={
      monsters:[],
      searchField:''
    }
    // this.handlchange=this.handlchange.bind(this);
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(Response=>Response.json())
    .then(users=>this.setState({monsters:users}));
  }

  handlchange=(e)=>{//binding no need because arrow function
    this.setState({searchField: e.target.value})
  }
  render(){
    const {monsters,searchField} =this.state;
    const filteredMonters =monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      )
    return (
      <div className="App">
        <h1>Monsters List</h1>
        <SearchBox 
        placeholder="search monsters"
        handlchange={this.handlchange}/>
        
        <CardList monsters = {filteredMonters}>
        </CardList>   
      </div>
    );
  }
    
}

export default App;
