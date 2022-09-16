import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';

function App() {

  const [entries, setEntries] = useState([{Name: "David Lagrange", Post: "I recently went into the woods to search for the odest tree I could find. To my luck I\nfound a very old hemlock around 200 - 250 years old. Let me know if you would like\nme to show it to you!"}])

  function addNewEntry(entry){

    let tempEntries = [entry, ...entries];

    setEntries(tempEntries);
  }

  return (
    <div>
      <header>
        <h1>SocialFeed</h1>
      </header>
      <body>
        <AddEntryForm addNewEntryProperty = {addNewEntry}/>
        <DisplayEntries parentEntries = {entries}/>
      </body>
    </div>
  );
}

export default App;
