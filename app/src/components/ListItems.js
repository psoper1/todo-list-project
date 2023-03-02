function ListItems({ notes, setNotes }) {
    function removeItem(noteid) {
        let newArray = notes.filter((potato) => potato.id !== noteid);
        setNotes(newArray);
        console.log(newArray)
    }

    // let notesArray = notes.map(note => <li id="listItem" key={note.text}><input type="checkbox" /> {note.text}<button onClick={removeItem}>-</button></li>)
    return (
      <ul>
        {notes.map(note => <li key={note.text}><input type="checkbox" /> {note.text}<button onClick={() => removeItem(note.id)}>-</button></li>)}
      </ul>
    )
  }
export default ListItems;