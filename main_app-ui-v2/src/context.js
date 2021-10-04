import React,{useState, createContext, Component} from 'react'
import axios from 'axios'

const Context = React.createContext()

export class Provider extends Component {

    state = {
        user: {},
        setUser: (user) => {
            this.setState({ user })
        }
    }


    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
} 

export const Consumer = Context.Consumer