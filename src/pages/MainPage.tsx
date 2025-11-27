import { useState } from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { Note } from "../components/Note/Note";

export const MainPage = () => {
  const [isOpenNewNote, setIsOpenNewNote] = useState(false);

  const closeNote = () => {
    setIsOpenNewNote(false);
  };

  const openNote = () => {
    setIsOpenNewNote(true);
  };

  return (
    <div className="h-full w-full">
      <NavBar openNote={openNote} />
      {isOpenNewNote && (
        <Note closeNote={closeNote} isOpenNewNote={isOpenNewNote} />
      )}
    </div>
  );
};
