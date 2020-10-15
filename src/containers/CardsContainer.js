import React from 'react';
import Card from '../components/cards/Card';
import getMovieData from '../components/API/getMovieData'

export default class CardsContainer extends React.Component {

    componentDidMount() {
        getMovieData()
    }

    render() {
        return (
            <div className='cards-div'>
                <h1>Cards Container</h1>
                < Card />
            </div>


        )
    }
}