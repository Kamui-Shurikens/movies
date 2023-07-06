import React, { Component } from 'react'
import { movies } from './GetMovies'

export default class Favourites extends Component {

    constructor(){
        super();
        this.state={
            genres:[],
            currGenre: 'All Genres'
        }
    }

    render() {
        let movieList = movies.results
        let genreName = { 28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western' };
        let genreList = ['All Genres']

        movieList.map((movieObj) => {
            let gids = movieObj.genre_ids
            gids.map((gid)=>{
                if(! genreList.includes(genreName[gid]) )
                    genreList.push(genreName[gid])
            })
        })

        console.log(genreList)

        return (
            <div>
                <div className='row'>
                    <div className='col-2'>
                        <ul className="list-group genre-list" data-bs-theme="dark" >
                            {
                                genreList.map((genre_name)=>
                                
                                    (genre_name == this.state.currGenre) ?
                                        <li className="list-group-item active" key={genre_name} aria-current="true">{genre_name}</li>
                                    :
                                    <li className="list-group-item" key={genre_name} aria-current="true">{genre_name}</li>
                                
                                )
                            }
                        </ul>
                    </div>
                    <div className='col-10'>
                        <div className="input-group filter-search row" data-bs-theme="dark" >
                            <input type="text" aria-label="First name" className="form-control" style={{ marginRight: "1rem" }} placeholder='Search Movies' />
                            <input type="number" aria-label="Last name" className="form-control" placeholder='Number of movies' />
                        </div>

                        <div className="table-responsive row" data-bs-theme="dark">
                            <table className="table align-middle">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Title</th>
                                        <th>Genre</th>
                                        <th>ReleaseDate</th>
                                        <th>Popularity</th>
                                        <th>Rating</th>
                                        <th>Overview</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        movieList.map((movieObj) =>
                                            <tr className='movie-row' key={movieObj.id} >
                                                <td><img src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`} style={{ width: "10vw" }} ></img></td>
                                                <td>{movieObj.original_title}</td>
                                                <td>{
                                                    movieObj.genre_ids.map((gid) => `${genreName[gid]} `)
                                                }</td>
                                                <td>{movieObj.release_date}</td>
                                                <td>{movieObj.popularity}</td>
                                                <td>{movieObj.vote_average}</td>
                                                <td>{movieObj.overview}</td>
                                                <td> <button type="button" className="btn btn-danger" data-bs-theme="dark">Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <nav aria-label="Page navigation example" className='pagination' style={{display:"flex",justifyContent:"center"}} >
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
