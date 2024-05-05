import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Home = () => {

    const navigate = useNavigate()

    const { isLoading, user, isSuccess } = useSelector((state) => state.google)

    useEffect(() => {
        if (!user && !isSuccess) {
            navigate('/login')
        } else {
            navigate('/')
        }
    }, [user, isSuccess])


    if (isLoading) {
        return (
            <div id='home' className='d-flex'>
                <div className="loader"></div>
            </div>
        )
    }



    return (
        <>
            <div id='home'>
                <div className="container d-flex flex-column align-items-center">
                    <h1 className='display-1 text-center pt-5 text-light'>HOME</h1>
                    <p className='display-6 text-center mt-4 text-light'>Welcome to the Google Authenticator</p>
                    <div className="card mb-3 p-3 w-50">
                        <div className="row no-gutters">
                            <div className="col-md-4 ">
                                <img src={user?.image} class="card-img" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{user?.displayName}</h5>
                                    <p>{user?.email}</p>
                                    <p className="card-text"><small class="text-muted">{new Date(user?.createdAt).toLocaleDateString('en-IN')}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home