import React, { useState, useEffect }from "react";
import axios from "axios";
import ApodCard from "./child";

const NasaInfo = () => {
  const [apodImg, setApodImg] = useState(' ');
  const [imgText, setImgText] = useState(' ');
  const [imgTitle, setImgTitle] = useState(' ');

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then( response => {
        console.log(response)
        setApodImg( response.data.url )
        setImgText(response.data.explanation)
        setImgTitle(response.data.title)
      })
      .catch( error => {
        console.log( 'ain\'t no image here!', error)
      })
  },[apodImg, imgText, imgTitle])

  
  return (
    <div className="container">
        <ApodCard apodURL={apodImg} apodTitle={imgTitle} apodText={imgText}/>
    </div>
  )

}

export default NasaInfo;