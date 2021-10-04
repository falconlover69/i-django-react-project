import React, { useEffect, useState } from 'react'
import Video from './Video'
import axios from 'axios'

function Videos() {


    const [videos, setVideos] = useState([])
    const isAdmin = JSON.parse(localStorage.getItem('user')).user.username == 'wvita'
    const isAEditor = JSON.parse(localStorage.getItem('user')).user.username == 'greg'
    const [addForm, setAddForm] = useState('')
    const userId = JSON.parse(localStorage.getItem('user')).user.pk


    useEffect(() => {
        axios.get('http://127.0.0.1:8000/videos-api/videos/').then(res => {

            res.data.map(vid => {
                return vid.added_at = vid.added_at.replace(/[a-zа-яё]/gi, ' ')
            })

            setVideos(res.data)
        })


    },[])

    const chandeVideo = (vidId, index) => {
        console.log(vidId)
        console.log(index)
    }

    const deleteVideos = (id, idx) => {
        console.log(id)
        console.log(idx)
    }

    const addVideo = (name) => {
        console.log(name)
        axios.post('http://127.0.0.1:8000/videos-api/videos/', {name, by: userId})
            .then(res => {
                alert('Видко было успешно добавлено 👍')
                setVideos([...videos, res.data])
            })
            .catch(err => alert(err))
    }

    return (
        <main className="container">
            <h2 className="text-center mb-4 mt-4">Видео</h2>

            <div className="d-flex mb-4" style={{width: '68%', marginLeft: '16%'}}>

                { isAdmin || isAEditor ?
                    <button className="btn btn-primary flex-fill" data-bs-toggle="modal" data-bs-target="#addVideoModal">Добавить видео</button>  
                : <></> }

                {/* {console.log(store)} */}

              
            </div>

            {
                videos.map((video, index) => (
                    <Video key={video.id} video={video} videoIndex={index} isAdmin={isAdmin} chandeVideo={chandeVideo} deleteVideos={deleteVideos}/>
                ))
            }

            <br />
            <br />
            <br />


            {/* Modal */}
            <div className="modal fade" id="addVideoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Добавление видео</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                        <form action="">
                            
                            <label htmlFor="Name" className="form-label">Название видео</label>
                            <input type="text"  className="form-control" id="name" placeholder="..." onChange={(e) => setAddForm(e.target.value)} />

                            <button type="button" className="btn btn-primary" id="addPostSubmit" style={{visibility: 'hidden'}} onClick={() => addVideo(addForm)}>Save changes</button>

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

export default Videos
