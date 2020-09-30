import React from 'react';
import Cardlist from './Cardlist';
//import {robots} from './robots';
import Searchbox from './Searchbox';
//import { robots } from './robots';
import Scroll from './Scroll'


class App extends React.Component  {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(users => this.setState({robots: users})); 
       
    }

    onSearchChange = (event) => {
       this.setState({searchfield: event.target.value})
     
       //console.log(event.target.value);
    }

    render () {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1 className="tc">Loading</h1>
        } else {
    return (
        
        <div className="tc">
          <h1 className="f2">RoboFriends</h1>
          <Searchbox searchChange={this.onSearchChange}/>
          <Scroll>
            <Cardlist robots={filteredRobots}/>
          </Scroll>
        </div>
    ) 
        }
    }
}

export default App; 
