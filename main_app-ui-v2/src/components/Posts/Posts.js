import React, { useEffect, useState } from 'react'
import Post from './Post'
import axios from 'axios'
import { Consumer } from '../../context'
import { useHistory} from 'react-router-dom';


function Posts() {

    const [posts, setPosts] = useState([])
    const [postsForSerch, setPostsForSerch] = useState([])
    const history = useHistory()

    const [serchField, setSerchField] = useState('')

    const [addForm, setAddForm] = useState({title: '', body: ''})

    let userID
    let store = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {

        if (!store) {
            alert('Для использования этой страницы вы должны быть авторизованы!')
            history.push('/')

        }

        axios.get('http://127.0.0.1:8000/posts-api/posts/').then(res => {

            res.data.map(post => {
                return post.created_at = post.created_at.replace(/[a-zа-яё]/gi, ' ')
            })

            setPosts(res.data)
        })

    },[])


    const ratingListHandler = async (id, name, index, like, dislike) => {
        

        const post = (await axios.get(`http://127.0.0.1:8000/posts-api/posts/${id}/`)).data

        // console.log(post.likes)

        if (name === 'like'){
            await axios.patch(`http://127.0.0.1:8000/posts-api/posts/${id}/`, like ? {likes: post.likes + 1} : {likes: post.likes - 1}).then(res => {
                // setLikeToggle(!likeToggle)
                const date = res.data.created_at.replace(/[a-zа-яё]/gi, ' ')
                const newPosts = [...posts]
                newPosts[index] = res.data
                newPosts[index].created_at = date
                console.log(newPosts)
                // console.log(likeToggle)
                setPosts(newPosts)
            }) 

        } else {
            await axios.patch(`http://127.0.0.1:8000/posts-api/posts/${id}/`, dislike ?  {dislikes: post.dislikes + 1} : {dislikes: post.dislikes - 1}).then(res => {
                // setDislikeToggle(!dislikeToggle)
                const date = res.data.created_at.replace(/[a-zа-яё]/gi, ' ')
                const newPosts = [...posts]
                newPosts[index] = res.data
                newPosts[index].created_at = date
                console.log(newPosts)
                setPosts(newPosts)
            })
        }

        // console.log(posts)

    }

    const deletePost = (postId, index) => {
        axios.delete(`http://127.0.0.1:8000/posts-api/posts/${postId}/`)
            .then(res => {
                console.log(res)
                alert("Пост был успешно удалён 👍")
            })
            .catch(err => {
                alert(err)
            })
        console.log(postId)
        const newPosts = [...posts]
        newPosts.splice(index, 1)
        setPosts(newPosts) 
        console.log(newPosts)
    }

    const addPost = (id) => {

        const newPost = {
            title: addForm.title,
            body: addForm.body,
            by: id
        }

        axios.post('http://127.0.0.1:8000/posts-api/posts/', newPost)
            .then(res => {
                console.log(res)
                setPosts([...posts, res.data])
                alert("Пост был успешно добавлен 👍")
            })
            .catch(err => {
                alert(err)
            })

        console.log(newPost)


    }

    const changePost = (postId, formData, index) => {

        console.log(formData)

        axios.patch(`http://127.0.0.1:8000/posts-api/posts/${postId}/`, formData)
            .then(res => {
                console.log(res)

                let newPosts = [...posts]

                let formatedDate = res.data.created_at.replace(/[a-zа-яё]/gi, ' ')

                res.data.created_at = formatedDate

                newPosts[index] = res.data

                console.log(newPosts)

                setPosts(newPosts)

                alert("Пост был успешно изменён 👍")
            }).catch(err => alert(err))
    }

    const searchPost = (postTitle) => {
        setSerchField(postTitle)

        if (postTitle === '') {

        } else {

            axios.get('http://127.0.0.1:8000/posts-api/posts/').then(res => {

                res.data.map(post => {
                    return post.created_at = post.created_at.replace(/[a-zа-яё]/gi, ' ')
                })

                console.log('RES.DATA:::' ,res.data)

                let serchResult = res.data.filter((filterPost) => {
                    return filterPost.title.toLowerCase().includes(postTitle)
                })

                console.log('FINAL RESULT:::',serchResult)
    
                setPostsForSerch(serchResult)
            })

        }
    }



    return (
        <main className="container">
            <h2 className="text-center mb-4 mt-4">Посты новостей</h2>
            {/* <p className="text-muted" style={{position: 'relative', top: '-50px', left: '75%', fontSize: '12px', textDecoration: 'underline'}}>Посты доступны для печати</p> */}

            <div className="row justify-content-center mb-4">
                <div className="col-lg-6 col-md-12 col-sm-12 ">
                    <input type="text" className="input-group form-control form-control-lg"  placeholder="Я ищу..." style={{height: '38px', margin: 'auto'}} onChange={(e) => searchPost(e.target.value)} />
                </div>
            </div>

            <div className="d-flex mb-4" style={{width: '68%', marginLeft: '16%'}}>

                { store?.user.username === 'wvita' || store?.user.username === 'greg' ?
                    <button className="btn btn-primary flex-fill" data-bs-toggle="modal" data-bs-target="#addPostModal">Добавить пост</button>  
                : <></> }

                {console.log(store)}

              
            </div>
            

            <Consumer>
                {
                    value => {

                        const isAdmin =  value?.user.user?.username === 'wvita' 
                        userID = value.user.user?.pk || store?.user.pk
                        console.log(userID)
                        let visual = value.visuallyImpaired


                        if (serchField.length === 0){
                            return ( 
                                posts.map((post, index) => (
                                    <Post key={index} postIndex={index} post={post} ratingListHandler={ratingListHandler} deletePost={deletePost} changePost={changePost} isAdmin={isAdmin} visual={visual} />
                                ))
                            )
                        } else {
                            return (
                                postsForSerch.map((post, index) => (
                                    <Post key={index} postIndex={index} post={post} ratingListHandler={ratingListHandler} deletePost={deletePost} changePost={changePost} isAdmin={isAdmin} visual={visual} />
                                ))
                            )
                        }
                        
                    }
                }
            </Consumer>

            <br />
            <br />
            <br />

            {/* Modal */}
            <div className="modal fade" id="addPostModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Добавление поста</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                        <form action="">
                            <label htmlFor="Name" className="form-label"> Название поста</label>
                            <input type="text"  className="form-control mb-3" id="title" placeholder="Title" onChange={(e) => setAddForm({...addForm, title: e.target.value})} />

                            <label htmlFor="Name" className="form-label">Текст поста</label>
                            <input type="text"  className="form-control" id="body" placeholder="Post body" onChange={(e) => setAddForm({...addForm, body: e.target.value})} />

                            <button type="button" className="btn btn-primary" id="addPostSubmit" style={{visibility: 'hidden'}} onClick={() => addPost(userID)}>Save changes</button>

                        </form>

                        
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                        
                        <label htmlFor="addPostSubmit" className="btn btn-success" data-bs-dismiss="modal">Сохранить</label>
                    </div>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Posts
