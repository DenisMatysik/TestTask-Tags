import React from 'react'
import { useDispatch } from 'react-redux'
import Button from '../button/Button'
import "./Note.scss"
import { removeNote } from '../store/toolkitSlice'
import ModalViewing from '../modal/ModalViewing'
import { useState } from 'react'
import ModalEdit from '../modal/ModalEdit'

export default function Note({children, id}) {
  const [modalViewing, setModalViewing] = useState(false)
  const [modalEdit, setModalEdit] = useState(false)

  const dispatch = useDispatch()

  return (
    <div className='noteContainer'>
        <h2 style={{textAlign: "center"}}>{children}</h2>
        <div className='buttons'>
          <Button typeButton="button" variant='button--accept' onClick={()=>{setModalViewing(true)}}>Viewing</Button>
          <Button typeButton="button" variant='button--edit'  onClick={()=>{setModalEdit(true)}} >Edit</Button>
          <Button typeButton="button" variant='button--close' onClick={()=>{dispatch(removeNote(id))}}>Delete</Button>
        </div>
        <ModalViewing setModalViewing={setModalViewing} modalViewing={modalViewing} yourNote={children}/>
        <ModalEdit setModalEdit={setModalEdit} modalEdit={modalEdit} editInf={children} editId={id}/>
    </div>
  )
}
