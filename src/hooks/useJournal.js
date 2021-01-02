import { useState, useEffect } from "react";

export default function useJournal() {
    const [entries, setEntries] = useState([]);
    
    const getEntriesFromStorage = () => JSON.parse(
      window.localStorage.getItem('journalEntries')
    );
    const setEntriesToStorage = items => 
    window.localStorage.setItem('journalEntries', JSON.stringify(items));
    useEffect(() => {
      const entriesFromStorage = getEntriesFromStorage();
      if(entriesFromStorage) {
        setEntries(entriesFromStorage);
      }
    }, []);
    
    const storeEntry = (entry) => {
      const newEntries = [entry, ...entries];
      setEntries(newEntries);
      setEntriesToStorage(newEntries);
    }
    
    const removeEntry = (index) => {
      const newEntries = [...entries.slice(0, index), ...entries.slice(index+1)];
      setEntries(newEntries);
      setEntriesToStorage(newEntries);
    }
    
    return [entries, storeEntry, removeEntry];
  }