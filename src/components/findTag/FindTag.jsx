import "./FindTag.scss"
import React from 'react'
import { useState } from "react"
import { useSelector } from "react-redux";
import Note from "../note/Note";
import AllNotes from "../allNotes/AllNotes";

export default function FindTag() {
    const notes = useSelector(state => state.toolkit.notes);
    const [findTag, setFindTag]= useState("")
    const [allNotes, setAllNotes]= useState(true)

  return (
    <>
    <div className="tagFindContainer">
        <h2>Find tag</h2>
        <input type="text" onChange={(e)=>{
          if (e.target.value != ""){
            setFindTag(`#${e.target.value}`);
            setAllNotes(false)
          } else {
            setFindTag(``);
            setAllNotes(true)
          }
        }}/>
    </div>
    { notes.map(note => {
          if(note.tag === findTag && note.tag != "")
          return <div className="notesContainer">
              <Note key={note.id} id={note.id} children={note.note}/>
            </div>
        })}
        <AllNotes children={allNotes}/>
    </>
  )
}
