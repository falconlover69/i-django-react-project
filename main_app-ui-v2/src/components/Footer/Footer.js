import React from 'react'

function Footer() {

    // const footerStyle = () => {
    //     if (window.location.pathname == '/') {
    //         return {position: 'fixed'}
    //     }  else {
    //         return {position: 'static'}
    //     }
    // }
    // footerStyle()


    return (
        <footer className="" style={{position: 'fixed', left: '0px', right: '0px', bottom: '0px'}}>
            <div className="card text-center">

                <div className="container">
                    <div className="d-flex text-center justify-content-evenly">
                        <a href="https://github.com/falconlover69">
                            <span style={{fontSize: "24px", color: "#30363d"}}>
                                <i className="fab fa-github"></i>
                            </span> 
                        </a>

                        <a href="https://vk.com/id485086001">
                            <span style={{fontSize: "24px", color: "#2787F5"}}>
                                <i className="fab fa-vk"></i>
                            </span> 
                        </a>

                        <a href="https://getbootstrap.com/">
                            <span style={{fontSize: "24px", color: "#563d7c"}}>
                                <i className="fab fa-bootstrap"></i>
                            </span> 
                        </a>
                    </div>
                </div>


                <div className="card-footer text-muted" style={{height: "30px",fontSize: '14px',textAlign: 'center'}}>
                    2021 Greg Ivanov, all rights reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer
