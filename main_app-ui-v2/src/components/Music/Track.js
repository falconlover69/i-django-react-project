import React, {useState} from 'react'


function Track({track, trackIndex, isAdmin, deleteTrack, changeTrack}) {


    const [changeForm, setChangeForm] = useState({name: '', artist: ''})

    console.log('INDEX:::', trackIndex)
    console.log('TRACK:::', track)

    return (
        <>
            <div className="card mb-3" style={{width: '70%', margin: 'auto'}}>
                <div className="card-body" >
                    <p className="lead card-title">{track.name}</p>
                    <p className="card-text">Артист:  {track.artist}</p>
                    <p className="card-text">Добавлено: {track.added_at}</p>
                    <iframe frameBorder="0" style={{border:'none',width:'100%',height:'180px'}} width="100%" height="180" src="https://music.yandex.ru/iframe/#track/83063887/15694083">Слушайте <a href='https://music.yandex.ru/album/15694083/track/83063887'>SHOW</a> — <a href='https://music.yandex.ru/artist/5781113'>MORGENSHTERN</a> на Яндекс.Музыке</iframe>
                    {
                        isAdmin ? <button className="btn btn-dark fas fa-cog" style={{position: 'absolute', top: '15px', left: '91%'}} data-bs-toggle="modal"  data-bs-target={"#trackModal" + trackIndex}></button> : <></>
                    } 
                </div>
            </div>

            {/* Modal */}
            <div className="modal fade" id={"trackModal" + trackIndex} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Изменение трека</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form action="">
                                <label htmlFor="Name" className="form-label">Name</label>
                                <input type="text"  className="form-control" id="title" name="title" placeholder={track.name} onChange={(e) => setChangeForm( {...changeForm, name: e.target.value} )} />

                                <label htmlFor="Name" className="form-label">Artist</label>
                                <input type="text"  className="form-control" id="body" name="body" placeholder={track.artist} onChange={(e) => setChangeForm( {...changeForm, artist: e.target.value} )} />

                                <button type="button" className="btn btn-primary" id="changePostSubmit" style={{visibility: 'hidden'}} onClick={() => {changeTrack(track.id, changeForm, trackIndex)}} ></button>

                            </form>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <label className="btn btn-success" data-bs-dismiss="modal" htmlFor="changePostSubmit">Save changes</label>
    
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() =>  {deleteTrack(track.id ,trackIndex)}} >Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Track
