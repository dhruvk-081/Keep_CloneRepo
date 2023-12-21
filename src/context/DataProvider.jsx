import { createContext, useState, useEffect } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const loadFromLocalStorage = (key) => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : [];
  };

  const [notes, setNotes] = useState(loadFromLocalStorage("notes"));
  const [archiveNotes, setArchiveNotes] = useState(loadFromLocalStorage("archiveNotes"));
  const [deleteNotes, setDeleteNotes] = useState(loadFromLocalStorage("deleteNotes"));

  // Update local storage whenever the data changes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("archiveNotes", JSON.stringify(archiveNotes));
  }, [archiveNotes]);

  useEffect(() => {
    localStorage.setItem("deleteNotes", JSON.stringify(deleteNotes));
  }, [deleteNotes]);

    const updateNote = (updatedNote) => {
      setNotes((prevNotes) => prevNotes.map((note) => (note.id === updatedNote.id ? updatedNote : note)));
  };

  return (
    <DataContext.Provider
      value={{
        notes,
        setNotes,
        archiveNotes,
        setArchiveNotes,
        deleteNotes,
        setDeleteNotes,
        // searchQuery,
        // setSearchQuery,
        updateNote,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
