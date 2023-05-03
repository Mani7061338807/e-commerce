import React from 'react'

const caursol = () => {
    return (
        <>  <div className='hero'>
            
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="https://img.freepik.com/free-photo/headphones-isolated-pink-blue-gradient-background_118047-7641.jpg" className="d-block w-100 "alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                               <p>hello</p>
                            </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://media.istockphoto.com/photos/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-picture-id1193750118?k=20&m=1193750118&s=612x612&w=0&h=w46Bjw0TuNVSKHOWtMyVIRfvzZ2JSRP4w7Zm02oqCFE=" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                            <p>hello</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://mvp.dev/wp-content/uploads/2021/01/Bubble-vs-Mendix.png" className="d-block w-100 " alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                            <p>hello</p>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

        </>
    )
}

export default caursol