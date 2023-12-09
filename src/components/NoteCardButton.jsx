import React from "react";
import DeletedButton from "./DeletedButton";
import ArsipButton from "./ArsipButton";

function NoteCardButton ({id, onDeleted}){
    return(
        <div className="note-card__button">
           <DeletedButton id={id} onDeleted={onDeleted} />
           <ArsipButton />
        </div>
    );
}

export default NoteCardButton;