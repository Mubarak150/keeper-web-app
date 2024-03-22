import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

  const contacts = [
        {
            id: 1,
            name: "Beyonce",
            source: "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg", 
            phone: "+987 654 321",
            mail: "jack@nowhere.com"
        },
        {
            id: 2,
            name: "Alif Leela",
            source: "https://blackhistorywall.files.wordpress.com/2011/02/picture-device-independent-bitmap-111.jpg", 
            phone: "+989 432 432",
            mail: "jack@nowhere.com"
        },
        {
            id: 3,
            name: "Jack Olive",
            source: "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png", 
            phone: "+972 623 098",
            mail: "jack@nowhere.com"
        }
    
  ]
function Card (props) {
    return (
        <div className="card">
            <div className="top">
                <p>{props.id}</p>
                <p className="name">{props.name}</p>
                <Avatar src={props.src} />
            </div>
            <div className="bottom" >
                
                <Detail detailInfo={props.tel} />
                <Detail detailInfo={props.mail} />
                
                
            </div>
        </div>
    )
  }
  
export default Card; 
export {contacts} ;