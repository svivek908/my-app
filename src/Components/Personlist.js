import React from "react";
import Axios from "axios";
export default class PersonList extends React.Component{
    state={
        persons:[]
    }

    componentDidMount(){
        Axios.get('http://jsonplaceholder.typicode.com/users')
        .then(res=>{
            console.log(res);
            this.setState({persons:res.data});
        })
    }

    render(){
        return(
            <ul>
                { this.state.persons.map(person=>
                <ul>
                <li key={person.id}>{person.name}</li>
                <li key={person.id}>{person.email}</li>
                </ul>
                ) }
            </ul>
        )
    }
}