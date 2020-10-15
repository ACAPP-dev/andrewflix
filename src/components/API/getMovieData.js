import React from 'react'

const getMovieData = () => {

    const OMDB_URL = 'http://omdbapi.com/?'
    const OMDB_API_KEY = '&apikey=2d58c894&'
    
    fetch(OMDB_URL + OMDB_API_KEY + 'i=tt8936646')
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
        
        })

    }

export default getMovieData