import React, {useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
// import axios from 'axios'

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

                    const switchToggled = () => {
                        value.setVisuallyImpaired(!value.visuallyImpaired)
                    }

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
                                            <Link className="nav-link" to={{pathname: `/posts/`, fromDashboard: false}} style={{fontSize: !value.visuallyImpaired ? '16px' : '20px'}}>Посты</Link>
                                            <Link className="nav-link" to={{pathname: `/music/`, fromDashboard: false}} style={{fontSize: !value.visuallyImpaired ? '16px' : '20px'}}>Музыка</Link>
                                            <Link className="nav-link" to={{pathname: `/video/`, fromDashboard: false}} style={{fontSize: !value.visuallyImpaired ? '16px' : '20px'}}>Видео</Link>
                                        </div>
                                    </div>

                                    <div className={window.innerWidth >= 756 ? "dropstart" : "dropdown"} >
                                        <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true" style={{float: 'right',justifySelf: 'end'}}>
                                            <code style={{fontSize: !value.visuallyImpaired ? '16px' : '22px'}}>Hello, </code> <span style={{fontSize: !value.visuallyImpaired ? '16px' : '22px'}}>{value?.user?.user?.username || store?.user ? value?.user?.user?.username || store.user.username : "guest" }</span> <i className="far fa-user"></i>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="http://127.0.0.1:8000/lk" style={{fontSize: !value.visuallyImpaired ? '16px' : '20px'}}>Личный кабинет</a></li>
                                            <li><a className="dropdown-item" href="http://127.0.0.1:8000/api-auth/logout/" onClick={LogOut} style={{fontSize: !value.visuallyImpaired ? '16px' : '20px'}}>Выйти</a></li>
                                            <li className="dropdown-item">
                                                <div class="form-check form-switch">
                                                    <label class="form-check-label" for="flexSwitchCheckDefault" style={{fontSize: !value.visuallyImpaired ? '16px' : '20px'}}>Увеличенный шрифт</label>
                                                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={switchToggled}/>
                                                </div>
                                            </li>
                                            {store?.user.username === 'wvita' ? <li><a className="dropdown-item" href="http://127.0.0.1:8000/admin" style={{fontSize: !value.visuallyImpaired ? '16px' : '20px'}}>Панель админа</a></li> : <></>} 
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
