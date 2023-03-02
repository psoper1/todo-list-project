import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import ListItems from './components/ListItems';
import AddToList from './components/AddToList'

function App() {
  const [notes, setNotes] = useState([]);
  return (
    <>
      <Header notes={notes}/>
      <AddToList setNotes={setNotes} notes={notes} />
      {notes.length > 0 ? <ListItems notes={notes} setNotes={setNotes} /> : null}
    </>
  )
}

export default App;