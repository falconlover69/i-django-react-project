import React,{useState, createContext, Component} from 'react'
import axios from 'axios'

const Context = React.createContext()

export class Provider extends Component {

    state = {
        user: {},
        setUser: (user) => {
            this.setState({ user })
        },
        visuallyImpaired: false,
        setVisuallyImpaired: (visualToggle) => {this.setState({visuallyImpaired: visualToggle})},
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