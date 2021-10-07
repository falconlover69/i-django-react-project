import React, {useState} from 'react'

function Post({post, ratingListHandler, deletePost, postIndex, isAdmin, changePost, visual}) {

    console.log("POSTINDEX:::",postIndex)
    console.log("POSTID:::",post.id)
    const [likeToggle, setLikeToggle] = useState(true)
    const [dislikeToggle, setDislikeToggle] = useState(true)

    const [changeForm, setChangeForm] = useState({title: '', body: ''})

    const ratingHandler = (name, event) => {

        if(name === 'like') {
            setLikeToggle(!likeToggle)
            event.target.style.color =  likeToggle ? '#ff0000' : '#000000'

        } else {
            setDislikeToggle(!dislikeToggle)
            event.target.style.color = dislikeToggle ? '#ff0000' : '#000000'
        }
        

        ratingListHandler(post.id, name, postIndex, likeToggle, dislikeToggle)
    }

    return (
        <>
            <div className="container">
                <div className="card  mb-3" style={{width: '70%', margin: 'auto'}}>
                    <div className="card-body">
                        <p className="lead card-title text-center" style={{fontSize: !visual ? '18px' : '24px'}}>{post.title} </p>
                        <p className="card-text text-center" style={{fontSize: !visual ? '16px' : '22px'}}>{post.body}</p>
                        <p className="card-text text-end text-muted" style={{position: 'relative', bottom: '-45px', right: '-50%', width: '50%'}}>{post.created_at}</p>
                        <button className="btn far fa-thumbs-up" name="like" onClick={(e) => {ratingHandler(e.target.name, e) }}>  </button> <span>{post.likes}</span>
                        <button className="btn far fa-thumbs-down" name="dislike" onClick={(e) => {ratingHandler(e.target.name, e) }}> </button> <span>{post.dislikes}</span>
                        {
                            isAdmin ? <button className="btn btn-dark fas fa-cog" style={{position: 'absolute', top: '20px', left: '88%'}} data-bs-toggle="modal"  data-bs-target={"#postModal" + postIndex}></button> : <></>
                        } 
                    </div>
                </div>
            </div>
            
            {/* Modal */}
            <div className="modal fade" id={"postModal" + postIndex} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Изменение поста</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form action="">
                                <label htmlFor="Name" className="form-label">Title</label>
                                <input type="text"  className="form-control" id="title" name="title" placeholder={post.title} onChange={(e) => setChangeForm( {...changeForm, title: e.target.value} )}/>

                                <label htmlFor="Name" className="form-label">Post body</label>
                                <input type="text"  className="form-control" id="body" name="body" placeholder={post.body} onChange={(e) => setChangeForm( {...changeForm, body: e.target.value} )}/>

                                <button type="button" className="btn btn-primary" id="changePostSubmit" style={{visibility: 'hidden'}} onClick={() => changePost(post.id, changeForm, postIndex)} ></button>

                            </form>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <label className="btn btn-success" data-bs-dismiss="modal" htmlFor="changePostSubmit">Save changes</label>
    
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => deletePost(post.id, postIndex)}>Delete</button>
                            <button type="button" className="btn btn-info" data-bs-dismiss="modal" style={{color: 'white'}} onClick={() => window.print()}>Print</button>
                        </div>
                    </div>
                </div>
            </div>
        </>               
    )
}

export default Post
