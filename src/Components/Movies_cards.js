import React, { Component } from 'react'
import axios from 'axios'
import { movies } from './GetMovies';
export default class Movies_cards extends Component {

    constructor(){
        super();
        this.state = {
            pageArr : [1],  // this will help in creating pagination buttons
            currPage : 1,
            movies: []   // array of arrays, each array consisting a list of 20 movies
        }
    }

    async componentDidMount(){
        const resp = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=d2d5c04da9b8133f121a383dc3cb2d2a&page=${this.state.currPage}&language=en-US?inlcude_adult=true`)
        const data = resp.data
        this.setState({
            movies:[...data.results]
        })
        console.log(data.results)
    }

    async updatePage(){
        const resp = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=d2d5c04da9b8133f121a383dc3cb2d2a&page=${this.state.currPage}&language=en-US?inlcude_adult=true`)
        const data = resp.data
        this.setState({
            movies:[...data.results]
        },()=>{
            if(this.state.currPage > this.state.pageArr.length)
            {
                let tempPageArr = [...this.state.pageArr]
                tempPageArr.push(this.state.currPage);
                this.setState({
                    pageArr : [...tempPageArr]
                })
            }
        })
    }

    nextPage = ()=>
    {
        this.setState({
            currPage : this.state.currPage+1
        },this.updatePage)

    }

    setPage = (pageNum)=>{
        this.setState({
            currPage : pageNum
        },this.updatePage)
    }

    prevPage = ()=>{
        if(this.state.currPage != 1)
        {
            this.setState({
                currPage: this.state.currPage-1
            },this.updatePage)
        }
    }


    render() {

        return (
            <>
                {
                    (this.state.movies.length == 0) ?
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        :
                        <div>
                            <div><strong><h1 style={{ color: "white", }}># Trending </h1></strong></div>
                            <div className="movieList" >

                                {
                                    this.state.movies.map((movieObj) => (
                                        <div className='full-card' key={movieObj.id}>
                                            <div className="card mb-3 movie-card" style={{ maxWidth: "617px", backgroundColor: "black" }}>
                                                <div className="row g-0" style={{ backgroundColor: "black" }}>
                                                    <div className="col-md-4" style={{ backgroundColor: "black" }}>
                                                        <img src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`} className="img-fluid rounded-start" alt="..." />
                                                    </div>

                                                    <div className="col-md-8">
                                                        <div className="card-body">
                                                            <h5 className="card-title">{movieObj.original_title}</h5>
                                                            <p className="card-text">{movieObj.overview}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-grid gap-2">
                                                <button className="btn btn-outline-danger add-to-fav" type="button">Add To Favourites</button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div style={{display:"flex",justifyContent:"center"}}>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item"><a className="page-link" onClick={this.prevPage} style={{backgroundColor:"black",color:"greenyellow"}} >Previous</a></li>
                                    {
                                        this.state.pageArr.map((pageNum) => (
                                            <li className="page-item" key ={pageNum}   ><a className="page-link" onClick={()=> this.setPage(pageNum)} >{pageNum}</a></li>
                                        ))
                                    }
                                    <li className="page-item"><a className="page-link" onClick={this.nextPage}  style={{backgroundColor:"black",color:"greenyellow"}} >Next</a></li>
                                </ul>
                            </nav>
                            </div>
                        </div>

                }
            </>
        )
    }
}
