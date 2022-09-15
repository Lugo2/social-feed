import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';


function App() {

  const [entries, setEntries] = useState([{name: "David Lagrange", post: "text"}])

  // function addNewEntry(entry){

  //   let tempEntries = [entry, ...entries];

  //   setEntries(tempEntries);
  // }

  return (
    <div>
      <header>
        <h1>SocialFeed</h1>
      </header>
      <body>
        <DisplayEntries parentEntries = {entries}/>
        {/* <AddEntryForm addNewEntryProperty = {addNewEntry}/> */}
      </body>
    </div>
  );
}

export default App;
