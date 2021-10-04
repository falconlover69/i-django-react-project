import React, { useEffect, useState } from 'react'
import Track from './Track'
import axios from 'axios'
import { useHistory, Redirect } from 'react-router-dom';
import { Consumer } from '../../context'

function Tracks() {

    const history = useHistory()
    const [tracks, setTracks] = useState([])
    let isAdmin = JSON.parse(localStorage.getItem('user'))?.user.username == 'wvita'
    // let csrf = document.cookie.split(';')[2].split('=')[1]
    // console.log(isAdmin)
    // console.log('COOKES:::', document.cookie.split(';')[2].split('=')[1])
    // console.log('COOKES@:::', )

    let store = JSON.parse(localStorage.getItem('user'))

    const [addForm, setAddForm] = useState({name: '', artist: ''})

    const userID = store?.user.pk

    useEffect(() => {

        if (!store) {
            alert('Для использования этой страницы вы должны быть авторизованы!')
            history.push('/')

        }

        axios.get('http://127.0.0.1:8000/music-api/tracks/').then(res => {

            res.data.map(track => {
                return track.added_at = track.added_at.replace(/[a-zа-яё]/gi, ' ')
            })

            setTracks(res.data)
        })
        console.log(tracks)

    },[])

    const deleteTrack = (id ,index) => {

        console.log(id, index)
        // axios.delete(`http://localhost:8000/music-api/tracks/${id}/`, {headers: {'Authorization': 'Token' + ' ' + store.key, 'X-CSRFToken': csrf}})
        //     .then(res => {
        //         alert("Трек был успешно удалён 👍")
        //         console.log(res)
        //     })
        //     .catch(err => {
        //         alert(err)
        //     })

        // const newTracks = [...tracks]
        // newTracks.splice(index, 1)
        // setTracks(newTracks)
        // console.log(newTracks)
    }

    const changeTrack = (trackId, formData, index) => {

        console.log(formData)
        console.log(trackId)
        console.log(index)

        // axios.patch(`http://127.0.0.1:8000/music-api/tracks/${id}/`, formData)
        //     .then(res => {
        //         console.log(id)

        //         let newTracks = [...tracks]

        //         let formatedDate = res.data.added_at.replace(/[a-zа-яё]/gi, ' ')

        //         res.data.added_at = formatedDate

        //         newTracks[index] = res.data

        //         setTracks(newTracks)

        //         alert("Трэк был успешно изменён 👍")
        //     })
        //     .catch(err => alert(err))
    }

    const addTrack = (id) => {
        
        const newTrack = {
            name: addForm.name,
            artist: addForm.artist,
            by: id
        }

        console.log(newTrack)

        axios.post('http://127.0.0.1:8000/music-api/tracks/', newTrack)
            .then(res => {
                console.log(res)
                setTracks([...tracks, res.data])
                alert("Трек был успешно добавлен 👍")
            })
            .catch(err => {
                alert(err)
            })

        // console.log(newTrack)

    }

    return (
        <main className="container">
            <h2 className="text-center mb-4 mt-4">Музыка</h2>

            <div className="d-flex mb-4" style={{width: '68%', marginLeft: '16%'}}>

                { store?.user.username == 'wvita' || store?.user.username == 'greg' ?
                    <button className="btn btn-primary flex-fill" data-bs-toggle="modal" data-bs-target="#addTrackModal">Добавить трек</button>  
                : <></> }

                {console.log(store)}

              
            </div>

            <Consumer>
                {value => {
                    return (
                        tracks.map((track, index) => (
                            <Track key={index} track={track} trackIndex={index} isAdmin={isAdmin} deleteTrack={deleteTrack} changeTrack={changeTrack}/>
                        ))
                    )
                }}
            </Consumer>

            {/* {
                tracks.map((track, index) => (
                    <Track key={index} track={track} trackIndex={index} isAdmin={isAdmin} deleteTrack={deleteTrack} changeTrack={changeTrack}/>
                ))
            } */}

            <br />
            <br />
            <br />


            {/* Modal */}
            <div className="modal fade" id="addTrackModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Добавление трека</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                        <form action="">
                            <label htmlFor="Name" className="form-label"> Название трека</label>
                            <input type="text"  className="form-control mb-3" id="title" placeholder="Name" onChange={(e) => setAddForm({...addForm, name: e.target.value})} />

                            <label htmlFor="Name" className="form-label">Артист</label>
                            <input type="text"  className="form-control" id="body" placeholder="Artist" onChange={(e) => setAddForm({...addForm, artist: e.target.value})} />

                            <button type="button" className="btn btn-primary" id="addPostSubmit" style={{visibility: 'hidden'}} onClick={() => addTrack(userID)}>Save changes</button>

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

export default Tracks
