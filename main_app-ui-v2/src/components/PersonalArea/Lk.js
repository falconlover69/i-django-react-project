import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Lk() {

    const [postsLenght, setPostsLenght] = useState(0)
    const [tracksLenght, setTracksLenght] = useState(0)
    const [videosLenght, setVideosLenght] = useState(0)

    let isAdmin = JSON.parse(localStorage.getItem('user'))?.user.username === 'wvita'
    let isEditor = JSON.parse(localStorage.getItem('user'))?.user.username === 'greg'
    let token = JSON.parse(localStorage.getItem('user'))?.key

    useEffect(  () => {
        if (isAdmin) {
            axios.get('http://localhost:8000/posts-api/posts/')
            .then(res => {
                setPostsLenght(res.data.length)
                // console.log(tableData)
            })
            
            setTimeout(() => {
                axios.get('http://localhost:8000/music-api/tracks/')
                .then(res => {
                    setTracksLenght(res.data.length)
                    // console.log(tableData)
                })
            }, 200)
            
            setTimeout(() => {
                axios.get('http://localhost:8000/videos-api/videos/')
                .then(res => {
                    // console.log(tableData)
                    setVideosLenght(res.data.length)
                    // console.log(tableData)
                })
            }, 500)

            
        }
    }, [])

    

    const [changePasswordForm, setChangePasswordForm] = useState({old_password: '', new_password1: '', new_password2: ''})

    
    // const username = JSON.parse(localStorage.getItem('user'))?.user.username
    // const email = JSON.parse(localStorage.getItem('user'))?.user.email

    const userInfo = JSON.parse(localStorage.getItem('user'))?.user

    const ChangePassword = () => {
        axios.post('http://127.0.0.1:8000/rest-auth/password/change/', {headers: {Authorization: 'Token' + token }}, changePasswordForm)
            .then(res => alert('Пароль был успешно изменён 👍'))
            .catch(err => alert(err))
    }

    return (
        <main className="container" >
            <h2 className="text-center mb-4 mt-4">Личный кабинет</h2>
            {/* info */}
            <div className="card mb-4" style={ window.innerWidth <= 975 ? {height: '65vh', boxShadow: '-1px 4px 20px 2px rgba(34, 60, 80, 0.2)'} : {height: '50vh', boxShadow: '-1px 4px 20px 2px rgba(34, 60, 80, 0.2)'}}>
                <div className="card-body" style={{padding: '50px 70px'}}>

                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12 text-center">
                            <img src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" alt="" style={{width: '200px', position: 'relative', top: '50px', left: '0px'}} />
                            <p style={{marginTop: '50px', marginRight: '10px'}}><b>username:</b> {userInfo.username}</p>
                        </div>
                        <div className="col-lg-8 col-sm-12 col-md-12">
                            <div className="d-flex flex-column">
                                <div className="col-md-1">
                                    <p style={{marginTop: '50px'}}> <b>Имя:</b>   {userInfo.first_name}</p>
                                </div>
                                <div className="col-md-3">
                                <p> <b>Фамилия:</b>   {userInfo.last_name}</p>
                                </div>
                                <div className="col-md-5">
                                    <p> <b>email:</b>   {userInfo.email}</p>
                                </div>
                                <div className="col-md-3">
                                    <p> <b>Роль:</b>   {isAdmin ? 'admin' : 'пользователь' || isEditor ? 'editor' : 'пользователь'}</p>
                                    <p> <b>Роль:</b>   {isAdmin ? 'admin' : ''} {isEditor ? 'editor' : 'пользователь'}</p>
                                </div>
                            </div>
                            
                            
                            
                            
                            {/* <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#changePassword" >Изменить пароль</button> */}
                        </div>
                    </div>
                    
                    
                    
                </div>
            </div>

            {/* dashboard */}
            {isAdmin ?
                <div className="row">

                    <h2 className="mb-4">Dashboard</h2>

                    <div className="col-lg-4 " >
                        
                        <div className="card mb-3" style={{ height: '250px', boxShadow: '-1px 4px 20px 2px rgba(34, 60, 80, 0.2)'}}>
                            <div className="card-body text-center" >
                                <h2 className="text-center mt-4">Таблица Посты</h2>
                                <p className="text-center text-muted">количество записей: {postsLenght}</p>
                                <a href="http://localhost:8000/posts-api/posts/" className="text-muted" >Перейти к таблице</a>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4" >
                        
                        <div className="card mb-3" style={{ height: '250px', boxShadow: '-1px 4px 20px 2px rgba(34, 60, 80, 0.2)'}}>
                            <div className="card-body text-center" >
                                <h2 className="text-center mt-4">Таблица Треки</h2>
                                <p className="text-center text-muted">количество записей: {tracksLenght}</p>
                                <a href="http://localhost:8000/music-api/tracks/" className="text-muted" >Перейти к таблице</a>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4" >
                        
                        <div className="card mb-3" style={{ height: '250px', boxShadow: '-1px 4px 20px 2px rgba(34, 60, 80, 0.2)'}}>
                            <div className="card-body text-center" >
                                <h2 className="text-center mt-4">Таблица Видео</h2>
                                <p className="text-center text-muted">количество записей: {videosLenght}</p>
                                <a href="http://localhost:8000/videos-api/videos/" className="text-muted">Перейти к таблице</a>
                            </div>
                        </div>

                    </div>
                    
                </div>
            : <></> }

            <div style={{height: '65px'}}></div>

            {/* Modal */}
            <div className="modal fade" id="changePassword" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Изменение пароля</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                        <form action="">
                            <label htmlFor="Old" className="form-label"> Старый пароль</label>
                            <input type="password"  className="form-control mb-3" id="old" placeholder="..." name="Old" onChange={(e) => setChangePasswordForm({...changePasswordForm, old_password: e.target.value})} />

                            <label htmlFor="new" className="form-label">Новый пароль</label>
                            <input type="password"  className="form-control mb-4" id="new" placeholder="..." name="new" onChange={(e) => setChangePasswordForm({...changePasswordForm, new_password1: e.target.value})} />

                            <label htmlFor="new2" className="form-label">Повторите новый пароль</label>
                            <input type="password"  className="form-control" id="new2" placeholder="..." name="new2" onChange={(e) => setChangePasswordForm({...changePasswordForm, new_password2: e.target.value})} />

                            <button type="button" className="btn btn-primary" id="addPostSubmit" style={{visibility: 'hidden'}} >Save changes</button>

                        </form>

                        
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                        
                        <label htmlFor="addPostSubmit" className="btn btn-success" data-bs-dismiss="modal" onClick={ChangePassword}>Сохранить</label>
                    </div>
                    </div>
                </div>
            </div>




        </main>
    )
}

export default Lk
