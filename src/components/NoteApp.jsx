import React from "react";
import NoteList from "./NoteList";
// import NoteInputDisplay from "./NoteInputDisplay";
import {getInitialData, showFormattedDate} from"../utils/index";
import NoteInput from "./NoteInput";




class NoteApp extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            notes : getInitialData(),   
        }

        this.onDeletedHandler = this.onDeletedHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onDeletedHandler(id){
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes});
    }

    onAddNoteHandler ({title, createdAt, body}){
        this.setState((prevState) => {
            
            return{
                notes: [
                ...prevState.notes,
                {
                    id: +new Date(),
                    title,
                    createdAt: +new Date().toLocaleDateString(),
                    body,
                }
                ]
            }

            showFormattedDate(createdAt);
        });
    }
 
    render(){
        return (
            <div className="note-app">
                <NoteInput addNote={this.onAddNoteHandler} />
                <NoteList notes={this.state.notes} onDeleted={this.onDeletedHandler} />
            </div>
        );
    }
    

}

export default NoteApp;
