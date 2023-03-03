import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import ListItems from './components/ListItems';
import AddToList from './components/AddToList';
import ViewList from './components/ViewsList'

function App() {
  const [notes, setNotes] = useState([]);
  const [showChecked, setShowChecked] = useState();
  return (
    <>
      <Header notes={notes} />
      <AddToList setNotes={setNotes} notes={notes} />
      {notes.length > 0 ? <ListItems notes={notes} setNotes={setNotes} /> : null}
      <ViewList notes={notes} showChecked={showChecked} setShowChecked={setShowChecked} />
    </>
  )
}

export default App;