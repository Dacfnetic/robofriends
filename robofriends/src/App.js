import React, {Component} from 'react';
import {robots} from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
        return response.json();
    }).then(users => {
        this.setState({robots: users});
    });
    
}

    render(){
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        if(robots.length === 0){
            return <h1>Loading</h1>
        }else{
            return(
                <div className='tc'>
                    <h1 className='f1'>Roboamigos perrones</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList robots={filteredRobots}/>
                </div>    
            );
        }
    }
}

export default App;