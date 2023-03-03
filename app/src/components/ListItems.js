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
    } else {
      console.log('not checked');
    }
    setChecked(checked => !checked);
  }

  return (
    <ul>
      {notes.map(note => <li className={`${checked ? "text-decoration-line-through" : ""}`} key={note.text}><input value={checked} onChange={handleChange} type="checkbox" /> {note.text}<button onClick={() => removeItem(note.id)}>-</button></li>)}
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