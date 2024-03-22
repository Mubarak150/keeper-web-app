import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab'; // Fab = Floating Action Button
import Zoom from '@mui/material/Zoom'; // zooming out animation


function CreateArea(props) {
const [input, setInput] = useState({
  title: "",
  content: ""
});

function handleChange(event) {
  const { name, value } = event.target;
  
      setInput(prevValue => ({
          ...prevValue,
          [name]: value
      }));
  
}


function submitNote(event) {
  event.preventDefault();

  if (input.title.trim().length === 0 || input.content.trim().length === 0 ) {
    setInput({
      ...input
  });
  } else {

      props.onAdd(input);

      setInput({
          title: "",
          content: ""
      });
  }
}




  const [isVisible, setIsVisible] = useState(false);
  function whenClicked() {
    setIsVisible(true);

  }
  return (
    <div>
      <form className="form">
        {isVisible && <input onChange={handleChange} name="title" placeholder="Title" value={input.title} />}

        <div >
          <textarea onClick={whenClicked} onChange={handleChange} name="content" placeholder="Take a note..." value={input.content} rows={isVisible ? "3" : "1"} />
          <Zoom in={isVisible}>
            <Fab onClick={submitNote} color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Zoom>
        </div>
        
      </form>
    </div>
  );
}

export default CreateArea;
