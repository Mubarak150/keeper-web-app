import React, { useState } from "react";

export default function Item(props) {
    
    return (
        <li onClick={() =>{
            props.onChecked(props.id)
            }}
        >
            {props.value}
        </li>
    )
}