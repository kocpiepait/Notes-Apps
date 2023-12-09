import React from "react";
import NoteItem from "./NoteItem";
import {showFormattedDate} from '../utils/index';
import NoteCardButton from "./NoteCardButton";

function NoteCard ({title, body, createdAt, id, onDeleted }){
    return(
        <div className="note-card" >
        <NoteItem title={title} body={body} createdAt={showFormattedDate(createdAt)} />
        <NoteCardButton id={id} onDeleted={onDeleted} />
        </div>
    );
}

export default NoteCard;