import React, { useState } from 'react'
import axios from 'axios'
import { useHistory, Redirect } from 'react-router-dom';

import { Consumer } from '../../context'

function LogIn() {

    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()

    const history = useHistory()

    return (
        <Consumer>
            {value => {

                const LogInHandler = (username, password) => {

                    const userData = {}

                    axios.post('http://localhost:8000/rest-auth/login/', {username, password})
                        .then(async (res) => {
                            console.log(res)
                            userData.key = res.data.key
                            console.log(userData)

                            axios.get('http://localhost:8000/rest-auth/user/', {headers: {'Authorization': 'Token' + ' ' + res.data.key}})
                                .then(userRes => {
                                    userData.user = userRes.data
                                    value.setUser(userData)
                                    localStorage.setItem('user', JSON.stringify(userData))
                                    // console.log(JSON.parse(localStorage.getItem('user')))
                                    // console.log(value)
                                    setTimeout(() => history.push('/posts/'), 1500)
                                })
                        })
                        .catch(err => alert(err))
                }


                return (
                    <form className="card card-body" onSubmit={(e) => {e.preventDefault(); LogInHandler(userName, password)} }>
                        <h3>Войти</h3>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                            <input onChange={(e) => setUserName(e.target.value)} type="text"   className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password"  className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary" >Войти</button>
                    </form>
                )
            }}
        </Consumer>
    )
}

export default LogIn
