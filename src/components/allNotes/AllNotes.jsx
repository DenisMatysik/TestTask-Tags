import React from 'react'
import Note from '../note/Note'
import"./AllNotes.scss"
import { useSelector } from 'react-redux'
import AllTags from '../allTags/AllTags'

export default function AllNotes({children}) {
  const notes = useSelector(state => state.toolkit.notes)

  return ( children && 
    <div className='notesContainer'>
      <h1>List of your Notes</h1>
        { notes.length >0 ? (notes.map((one)=> <Note key={one.id} id={one.id} children={one.note}/>)) : <h2>Add some note</h2>
      }
      <AllTags/>
    </div>
  )
}
