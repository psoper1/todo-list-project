import { useState } from 'react';

function AddToList({ setNotes, notes }) {
    const [ value, setValue] = useState('');
    function insertNote() {
      console.log('Clicked')
      setNotes([...notes,{ text: value, id: Date.now()} ]);
    }
    return (
      <>
        <input onChange={(e) => setValue(e.target.value)}type="textarea" />
        <button onClick={insertNote}>Add Note</button>
      </>
    )
  }

export default AddToList;