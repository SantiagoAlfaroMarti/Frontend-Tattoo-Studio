import React from 'react';
import "./Home.css";

export const Home = () => {
    return (
        <div className="carousel slide" data-bs-ride="carousel" id="carouselExampleIndicators">
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        alt="Tatuaje Artístico"
                        className="d-block w-10 mx-auto carousel-image"
                        src=".../../../img/recepcionTattooStudio.jpg"
                    />
                    <div className="carousel-caption">
                        <h5 className="animated bounceInRight" style={{ animationDelay: '1s' }}>
                            Art in Leather
                        </h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        alt="Tatuaje Geométrico"
                        className="d-block w-10 mx-auto carousel-image"
                        src=".../../../img/chairTattoo.jpg"
                    />
                    <div className="carousel-caption">
                        <h5 className="animated bounceInRight" style={{ animationDelay: '1s' }}>
                            Geometric Perfection
                        </h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        alt="Tatuaje Realista"
                        className="d-block w-10 mx-auto carousel-image"
                        src=".../../../img/freeHandsTattoo.jpg"
                    />
                    <div className="carousel-caption">
                        <h5 className="animated bounceInRight" style={{ animationDelay: '1s' }}>
                            Impeccable Realism
                        </h5>
                    </div>
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}