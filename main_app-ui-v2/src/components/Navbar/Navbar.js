import React, {useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

import { Consumer } from '../../context'

function Navbar({match, location}) {

    const [page, setPage] = useState(window.location.pathname)
    const history = useHistory()


    let store = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        history.listen((location, action) => {
            setPage(window.location.pathname)
            console.log(location)
        })
    }, [window.location.pathname])

    const LogOut = async () => {
        JSON.parse(localStorage.clear())
        // axios.get('http://127.0.0.1:8000/api-auth/logout/')
        // window.location.replace('/')
        // console.log("HIHI")
    }

    if (page !== '/') {
        return (
            <Consumer>
                {value => {


                    // console.log(value.user.user.username)

                    return (
                        <header>
                            <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark ">
                                <div className="container-fluid justify-content-between">
                                    <span className="navbar-brand">ИП Иванов 181-321</span>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>

                                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                        <div className="navbar-nav">
                                            <Link className="nav-link" to={{pathname: `/posts/`, fromDashboard: false}}>Посты</Link>
                                            <Link className="nav-link" to={{pathname: `/music/`, fromDashboard: false}}>Музыка</Link>
                                            <Link className="nav-link" to={{pathname: `/video/`, fromDashboard: false}}>Видео</Link>
                                        </div>
                                    </div>

                                    <div className="dropstart" >
                                        <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{float: 'right',justifySelf: 'end'}}>
                                            <code>Hello, </code>{value?.user?.user?.username || store?.user ? value?.user?.user?.username || store.user.username : "guest" } <i className="far fa-user"></i>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="http://127.0.0.1:8000/lk">Личный кабинет</a></li>
                                            <li><a className="dropdown-item" href="http://127.0.0.1:8000/api-auth/logout/" onClick={LogOut}>Выйти</a></li>
                                            {store?.user.username == 'wvita' ? <li><a className="dropdown-item" href="http://127.0.0.1:8000/admin">Панель админа</a></li> : <></>} 
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </header>
                    )
                }}
            </Consumer>
        )
    } else {
        return (
            <></>
        )
    }
}

export default Navbar
