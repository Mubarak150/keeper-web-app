import React from "react";
import notes from "../notes";
import DeleteIcon from '@mui/icons-material/Delete';




function Note (props) {
    return (
        <div className="note">
           <h1>{props.title}</h1>
           <p>{props.contents}</p>
           <button onClick={() => {
                props.onDelete(props.id)
            }}>
            <DeleteIcon />
            </button>
        </div>
    )
    
}

export default Note; 