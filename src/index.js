import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import useJournal from './hooks/useJournal'
import EntryList from './components/EntryList'
import Entry from './components/Entry'

// import moment from 'moment'

function App() {
  const [entries, storeEntry, removeEntry, editEntry] = useJournal();
  const handleAddEntry = (entry) => storeEntry(entry);
  const handleDeleteEntry = (index) => removeEntry(index);
  const handleEditEntry = (index, entry) => editEntry(index, entry);
  return (
    <div className="container">
      <h1 className="text-center">
        <a 
          href={`https://dev.to/chaituknag/a-simple-journal-app-using-react-localstorage-and-fun-23j8`} 
          target="_blank"
        >My Daily Diary</a>
      </h1>
      <Entry addEntry={handleAddEntry}/>
      <EntryList list={entries} deleteEntry={handleDeleteEntry} editEntry={handleEditEntry}/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));


