import React from "react";
import {showFormattedDate} from "../utils/index";

class NoteInput extends React.Component {
   
    constructor (props){
        super(props);
        this.state = {
            title: '',
            createdAt: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
     }

     onTitleChangeEventHandler(event) {
        this.setState(() => {
          return {
            title: event.target.value,
          }
        });
      }
    
      onBodyChangeEventHandler(event) {
        this.setState(() => {
          return {
            body: event.target.value,
          }
        });
      }
      
      onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
      }

    render(){
        return(
            <div className="note-input__display">
                <h2>BUAT CATATAN</h2>
                <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <img src="./public/images/undraw_Add_notes_re_ln36.png" alt="vector" />
                <input type="text" placeholder="Judul Catatan ..." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                <textarea className="note-input__body" type="text" placeholder="Tuliskan Catatanmu disini ..." value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
                <button type="submit">Tambah Catatan</button>
            </form>
            </div>
        );
    }
}

export default NoteInput;