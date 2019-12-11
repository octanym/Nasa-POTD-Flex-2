import React, { useState, useEffect }from "react";
import axios from "axios";
import ApodCard from "./child";

const NasaInfo = () => {
  const [apodImg, setApodImg] = useState(' ')

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then( response => {
        setApodImg( response.data.url )
      })
      .catch( error => {
        console.log( 'ain\'t no image here!', error)
      })
  },[])

  return (
    <div>
      <ApodCard apodURL={apodImg}/>
    </div>

  )

}

export default NasaInfo;