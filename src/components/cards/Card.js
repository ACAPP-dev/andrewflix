import React from 'react'

const Card = props => {
    console.log('Card props: ', props)

    return (
        <div>
            <img src={props.movieData.Poster} />

        </div>
    )
}

export default Card