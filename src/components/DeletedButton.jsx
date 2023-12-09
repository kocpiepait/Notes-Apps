import React from "react";

function DeletedButton({id, onDeleted}){
    return(
        <button className="note-item__deleted-button" onClick={() => onDeleted(id)}>Deleted</button>
    );
}

export default DeletedButton;