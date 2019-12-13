import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';


const ApodCard = (props) => {
  return (
    
      <Card>
        <CardImg src={props.apodURL}/> 
        <CardBody>
          <CardTitle><h2>{props.apodTitle}</h2></CardTitle>
          <CardText>{props.apodText}</CardText>
        </CardBody>
      </Card>
    
  )
}

export default ApodCard;