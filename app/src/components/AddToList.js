import { useState } from 'react';

function AddToList({ setNotes, notes }) {
  const [value, setValue] = useState('');
  function insertNote() {
    console.log('Clicked')
    setNotes([...notes, { text: value, id: Date.now() }]);
  }
  return (
    <>
      <input onChange={(e) => setValue(e.target.value)} type="text" />
      <button className="btn btn-primary" onClick={insertNote}>Add to list</button>
    </>
  )
}

export default AddToList;