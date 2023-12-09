import React from "react";

function NoteItem ({title, body, createdAt,}) {
    return(
        <div className="note-item">
            <h3 className="note-item__tittle">{title}</h3>
            <p className="note-item__date">{createdAt}</p>
            <p className="note-item__body">{body}</p>
        </div>
    );
}

export default NoteItem;