
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import TopRobots from '../components/TopRobots';
import TopFollowedRobots from '../components/TopFollowedRobots';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import NavBar from '../components/NavBar';
import 'tachyons';
import './App.css';

import {setSearchField} from '../actions';

//What piece of state  we need to listen to and send it to props searchFied
const mapStateToProps = state => {
    return {
        //we create the store with the searchRobots reducer
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}
// in order to send the action we need a dispatch it
// what pops I need to listen to for the action to get dispatched
const  mapDispatchToProps = (dispatch) => {
    return {
        // when the event onSearchChange occurs we return a function that executes 
        // an action setSearchField with the parameter received
        // from the ocurred event which can be obptained by event.target.value 
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
    
}

class App extends Component {
 
    constructor() {
        super()
        this.state = {
            robots: [],
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }

    render() {
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return !robots.length ? (<h1>Loading...</h1>) : 
            (
                <div className="tc">
                    <NavBar />
                    <h1> RobotsGame</h1> 
                    <ul className="action-bar">
                        <li><TopFollowedRobots /></li>
                        <li><Searchbox searchChange = {onSearchChange} /></li> 
                        <li><TopRobots /></li>
                    </ul>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots = {filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);