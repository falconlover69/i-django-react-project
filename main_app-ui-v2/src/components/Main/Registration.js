import React, { useState } from 'react'
import axios from 'axios'

import { Consumer } from '../../context'

function Registration() {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password1: '',
        password2: ''
    })

    return (

        <Consumer>
            {value => {

                const registerHandler = ({username, email, password1, password2}) => {
                    axios.post('http://localhost:8000/rest-auth/registration/', {username, email, password1, password2})
                        .then(res => {
                            console.log(res)
                            const data = {
                                username: username,
                                key: res.data.key
                            }
                            value.setUser(data)
                            window.location = '/posts'
                        })
                        .catch(err => alert(err))
                }

                return (
                    <form className="card card-body" onSubmit={(e) => {e.preventDefault(); registerHandler(user)}}>
                        <h3>Зарегестрироваться</h3>

                        <div className="mb-3">
                            <label htmlFor="exampleInputUserName1" className="form-label">Username</label>
                            <input type="text" className="form-control" onChange={(e) => setUser({ ...user, username: e.target.value})} id="exampleInputUserName1" name="username" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail2" className="form-label">Email address</label>
                            <input type="email" className="form-control" onChange={(e) => setUser({ ...user, email: e.target.value})} id="exampleInputEmail2" aria-describedby="emailHelp" name="email" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="InputPassword1" className="form-label">Password</label>
                            <input type="password" autoComplete="on" onChange={(e) => setUser({ ...user, password1: e.target.value})} className="form-control" id="InputPassword1" name="password1"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword2" className="form-label">Repeate Password</label>
                            <input type="password" autoComplete="on" className="form-control" onChange={(e) => setUser({ ...user, password2: e.target.value})} id="exampleInputPassword2" name="password2"/>
                            
                        </div>


                        <button type="submit" className="btn btn-primary">Регистрация</button>
                    </form>
                )
            }}
        </Consumer>

    )
}

export default Registration
