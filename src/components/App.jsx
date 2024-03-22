import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
// import notes from "../notes.js";
import CreateArea from "./CreateArea.jsx";


export default function App() {

  const [notes, setNotes] = useState([]); 

  function addItem(input) {
    setNotes(prevNotes => [...prevNotes, input]);
  }

  function deleteItem(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id; 
      });
    });
  }

  return (
      <div>
          <Header />
          <CreateArea 
            onAdd={addItem}
          />
          {
            notes.map((note, index)=> 
              (
                  <Note
                      id={index}
                      key = {index}
                      title={note.title}
                      contents = {note.content.slice(0, 50) } 
                      onDelete={deleteItem}
                  />
              ))
          }
          <Footer />
      </div>
  )
}


  ////////////////////////////////////////////////////////////////////////////////////////////////
  
  

    // return (
    //     <div className="container">
    //       <div className="heading">
    //         <h1>To-Do List</h1>
    //       </div>
    //       <InputArea
    //         key={items.index}
    //         id={items.index}
    //         value={input} 
    //         uponChange={handleInput}
    //         uponClick={handleClick }
    //       />
    //       <div>
    //         <ul>
              
    //           {
    //             items.map((task, index) => // using index is not favoured by React.js
    //                 <Item key={index} id={index} value={task} onChecked={deleteItem} /> 
    //             )
    //           }

    //         </ul>
    //       </div>
    //     </div>
    //   );
    // }
    
    
        // const [isMouseOver, setMouseOver] = useState(false);
    // function onHover () {
    //     setMouseOver(true);
    // }
    // function deHover () {
    //     setMouseOver(false);
    // }

    // const [input, setInput] = useState("");
    // function handleInput(event){
    //     const inputValue = event.target.value; 
    //     setInput(inputValue);
    // }

    // const [items, setItems] = useState([]);
    // function handleClick(){
    //     setItems((prevItems) => { 
    //       if(input.trim().length === 0){
    //         return [...prevItems]
    //       } else {
    //         return [...prevItems, input]
    //       }
    //     })
    //     setInput("")
    // }
    
    // function deleteItem(id) { // pass the id to function 
    //   setItems((prevItems) => { // re-set the items array by tapping into the previous version
    //     return prevItems.filter((item, index) => { // filter out the previous version
    //       return index !== id;  // and return only those items of array whose index number is not equal to the id of clicked item 
    //     })
    //   })
    // }


//////////////////////////////////////////////////////////////////////////////////////////////////

// function App () {
//     const [contact, setContact] = useState({
//         fName: "",
//         lName: "",
//         email: ""
//     });
//     function handleChange(event) {
//         const { name, value } = event.target;
    
//         setContact(prevValue => ({
//             ...prevValue,
//             [name]: value
//         }));
//     }
    

//    const [isMouseOver, setMouseOver] = useState(false);
//     function onHover () {
//         setMouseOver(true);
//     }
//     function deHover () {
//         setMouseOver(false);
//     }
//     return (
//         <form className="flex"  >
//             <h1 className="text-red-600">Hello {contact.fName} {contact.lName}!</h1>
//             <p>{contact.email}</p>
//             <input onChange={handleChange}  type="text" name="fName" id="" placeholder="what is your name ?" value={contact.fName} />
//             <input onChange={handleChange}  type="text" name="lName" id="" placeholder="what is your surname ?" value={contact.lName} />
//             <input onChange={handleChange}  type="text" name="email" id="" placeholder="email " value={contact.email} />
//             <button style={{backgroundColor: isMouseOver ? "black": "goldenrod"}} onMouseOver={onHover} onMouseOut={deHover}>submit</button>
//         </form>
//     )
// }




