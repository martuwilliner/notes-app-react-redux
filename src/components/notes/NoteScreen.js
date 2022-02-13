import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className="note__main">
      <NotesAppBar />

      <div className="note__content">
        <input
          type="text"
          placeholder="Put a Title"
          className="note__title-input"
        />

        <textarea
          className="note__text"
          placeholder="Write something"
        ></textarea>

        <div className="note__image">
          <img src="https://cdn.pixabay.com/photo/2018/01/18/07/31/bitcoin-3089728__340.jpg" />
        </div>
      </div>
    </div>
  );
};
