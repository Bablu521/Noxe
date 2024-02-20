import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';




export default function Details() {
    let params = useParams()
    console.log(params)
    let [itemDetails, setItemDetails] = useState({})
    let getItemDetails = async () => {
        let { data } = await axios.get(`https://api.themoviedb.org/3/${params.mediaType}/${params.id}?api_key=39b714f77a8e2f444cf6c2e6b79d4d56`)
        setItemDetails(data)
        console.log(data)
    }

    useEffect(() => {
        getItemDetails()
    }, [])

    return (
        <div className="row mt-5">
            <div className="col-md-3">
                {params.mediaType == "person" ? <img className="w-100" src={`https://image.tmdb.org/t/p/w500${itemDetails.profile_path}`} alt="" />
                    : <img className="w-100" src={`https://image.tmdb.org/t/p/w500${itemDetails.poster_path}`} alt="" />}
            </div>
            <div className="col-md-7">

                <h2 className="mt-2 mb-4 ">{itemDetails.title}{itemDetails.name}</h2>
                {params.mediaType == ("person") ? <>
                    <h6 className='my-3'>Birthday : {itemDetails.birthday}</h6>
                    <h6 className='my-3'>Place Of Birth : {itemDetails.place_of_birth}</h6>
                    <h6 className='my-3'>Popularity : {itemDetails.popularity}</h6>
                </>
                    : <>
                        <h6 className='my-3'>Vote : {Math.round(itemDetails.vote_average)}</h6>
                        <h6 className='my-3'>Vote Count : {itemDetails.vote_count}</h6>
                        <h6 className='my-3'>Popularity : {itemDetails.popularity}</h6>
                        <h6 className='my-3'>Release Date: {itemDetails.release_date}{itemDetails.first_air_date}</h6>
                    </>}

                <p className='mt-4 span'>{itemDetails.overview}{itemDetails.biography}</p>
            </div>
        </div>
    )
}
