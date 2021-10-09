import React, {useState} from 'react'

function Video({video, videoIndex, isAdmin, chandeVideo, deleteVideos}) {

    const [changeForm, setChangeForm] = useState({name: ''})

    const storeAdmin = JSON.parse(localStorage.getItem('user')).user.username === 'wvita' || false

    return (
        <>
            <div className="card mb-3" style={{width: '70%', margin: 'auto',height: '500px'}}>
                <div className="card-body">
                    <p className="lead card-title">{video.name}</p>
                    {/* <p className="card-text">Добавил пользователь с айди:  {video.by}</p> */}
                    <p className="card-text">Добавлено: {video.added_at}</p>
                    <iframe style={{marginLeft: '17%'}} width="70%" height="70%" src="https://www.youtube.com/embed/sn-S82mF_gw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    {
                        isAdmin || storeAdmin ? <button className="btn btn-dark fas fa-cog" style={{position: 'absolute', top: '15px', left: '91%'}} data-bs-toggle="modal"  data-bs-target={"#videoModal" + videoIndex}></button> : <></>
                    } 
                </div>
            </div>

            {/* Modal */}
            <div className="modal fade" id={"videoModal" + videoIndex } tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Изменение поста</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="">
                                <label htmlFor="Name" className="form-label">Title</label>
                                <input type="text"  className="form-control" id="title" name="title" placeholder={video.name} onChange={(e) => setChangeForm( { name: e.target.value} )}/>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => deleteVideos(video.id, videoIndex)}>Delete</button>
                            <button type="button" className="btn btn-success" data-bs-dismiss="modal" id="changePostSubmit"   onClick={() =>  chandeVideo(video.id, changeForm, videoIndex)} >Сохранить</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Video
