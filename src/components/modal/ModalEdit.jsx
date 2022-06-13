import React, { useState } from 'react'
import Button from '../button/Button'
import "./Modal.scss"
import { useDispatch } from 'react-redux'
import { updateNote } from '../store/toolkitSlice'

export default function ModalEdit({modalEdit, setModalEdit, editInf, editId}) {
    const [note, setNote]= useState(editInf)
    const dispatch = useDispatch()

    function update (){
        setNote(note);
        dispatch(updateNote({note, editId}));
        setModalEdit(false);
    }

  return (
      modalEdit && (    
        <div className='modalContainer'>
            <form className='modalForm'>
                <h1>Change your Note</h1>
                <input value={note} type="text" className='modalInput' onChange={(e)=> setNote(e.target.value)}/>
                <div className='buttons'>
                    <Button onClick={()=>{update()}} typeButton="button" variant='button--accept'>Change</Button>
                    <Button onClick={()=>{setModalEdit(false)}} typeButton="button" variant='button--close'>Close</Button>  
                </div>
            </form>    
        </div>
      )
  )
}
