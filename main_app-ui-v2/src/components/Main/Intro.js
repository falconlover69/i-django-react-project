import React from 'react'
import LogIn from './LogIn'
import Registration from './Registration'

function Intro() {

    return (
        <main className="mt-4" style={{height: (window.innerWidth <= 990 ? '150vh' : '115vh')}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 text-center">
                        <h2 className="mb-4">Приветствую вас на <code> <b>PolyNet</b> </code></h2>
                        <h3>Эта социальная сеть создана для учеников Московского Политехнического университета</h3> 
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrklw3cttbdc8oVoBdAD91fXgQIS8aAb8F456Zc13iLXMsR6FrTj-pv9sJ8qeZH5JJTak&usqp=CAU" alt="logo" />
                    </div>


                    <div className="col-lg-4">
                        <div className="d-flex flex-column">
                            <div className="col-lg-12 mb-2">
                                <LogIn />
                            </div>
                            <div className="col-lg-12 mt-2">
                                <Registration />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}


export default Intro
