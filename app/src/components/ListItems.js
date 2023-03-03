import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function ListItems({ notes, setNotes }) {
  function removeItem(noteid) {
    let newArray = notes.filter((potato) => potato.id !== noteid);
    setNotes(newArray);
    console.log(newArray)
  }

  const [checked, setChecked] = useState(false);
  const handleChange = event => {

    if (event.target.checked) {
      console.log('Checked');
      notes.done = true;
      
    } else {
      console.log('not checked');
      notes.done = false;
    }
    setChecked(checked => !checked);
  }

  return (
    <ul>
      {notes.map(note => <li className={`${notes.done && note.id ? "text-decoration-line-through" : ""}`} key={note.text}><input value={note.done} onChange={handleChange} type="checkbox" /> {note.text}<button onClick={() => removeItem(note.id)}>-</button></li>)}
    </ul>
  )
}
export default ListItems;

// const [checked, setChecked] = useState([]);
//   const handleChange = event => {
//     let updatedList = [...checked];

//     if (event.target.checked) {
//       console.log('Checked');
//       updatedList = [...checked, event.target.value];
//     } else {
//       console.log('not checked');
//       updatedList.splice(checked.indexOf(event.target.value), 1);
//     }
//     setChecked(updatedList);
//   }