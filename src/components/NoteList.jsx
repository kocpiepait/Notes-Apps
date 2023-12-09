import React from "react";
import NoteCard from "./NoteCard";



function NoteList ({notes,   onDeleted}){
    return(
        <div className="note-display">
            <h2>CATATAN AKTIF</h2>
            <div className="note-list">
                {
                notes.map((note) => (
                    <NoteCard
                     key={note.id}
                     id={note.id}
                     onDeleted={onDeleted} 
                     {...note}/>
                ))
                }
            </div>
        </div>
       
    );
}

export default NoteList;