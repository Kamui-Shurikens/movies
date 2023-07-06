import React, { Component } from 'react'
import { movies } from './GetMovies'
export default class Banner extends Component {
    render() {
        let movie = movies.results
        console.log(movie)
        return (
            <>
                {
                    (movie == '') ?
                        <div className="spinner-border" role="status" />
                        :

                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" >
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={`https://image.tmdb.org/t/p/original${movie[0].backdrop_path}`} className="d-block w-100" alt="..." />
                                    <div className="card text-bg-info mb-3" >
                                        <div className="card-body">
                                            <h5 className="card-title">{movie[0].original_title}</h5>
                                            <p className="card-text">{movie[0].overview}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={`https://image.tmdb.org/t/p/original${movie[1].backdrop_path}`} className="d-block w-100" alt="..." />
                                    <div className="card text-bg-info mb-3"> 
                                        <div className="card-body">
                                            <h5 className="card-title">{movie[1].original_title}</h5>
                                            <p className="card-text">{movie[1].overview}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={`https://image.tmdb.org/t/p/original${movie[2].backdrop_path}`} className="d-block w-100" alt="..." />
                                    <div className="card text-bg-info mb-3"  >
                                        <div className="card-body">
                                            <h5 className="card-title">{movie[2].original_title}</h5>
                                            <p className="card-text">{movie[2].overview}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                }
            </>
        )
    }
}
