import React from 'react';
import Card from '../components/cards/Card';
// import getMovieData from '../components/API/getMovieData'

const OMDB_URL = 'http://omdbapi.com/?'
const OMDB_API_KEY = '&apikey=2d58c894&'

export default class CardsContainer extends React.Component {

    state = {
        movieData: ""
    }

    componentDidMount() {
        fetch(OMDB_URL + OMDB_API_KEY + 'i=tt8936646')
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            this.setState({movieData: json})
        })
        // console.log("CardsContainer state: ", this.state.movieData)
    }

    render() {
        return (
            <div className='cards-div'>
                <h1>Cards Container</h1>
                < Card movieData={this.state.movieData} />
            </div>


        )
    }
}