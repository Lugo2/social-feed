import React, { useState } from 'react';


function App() {

  const [entries, setEntries] = useState([{name: "David Lagrange", post: "text"}, {name: "JJ Vega", post: "text"}, {name: "Nevin Seibel", post: "text"}])

  function addNewEntry(entry){

    let tempEntries = [entry, ...entries];

    setEntries(tempEntries);
  }

  return (
    <div>
      <AddEntryForm addNewEntryProperty = {addNewEntry}/>
      <DisplayEntries parentEntries = {entries}/>
    </div>
  );
}

export default App;
