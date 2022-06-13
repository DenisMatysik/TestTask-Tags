import React, { useState } from 'react'
import "./Header.scss"
import Button from '../button/Button'
import Modal from '../modal/Modal'
import { useSelector } from 'react-redux'


export default function Header() {
  const [modalOpen, setModalOpen] = useState(false)
  const notes = useSelector(state => state.toolkit.notes)

  return (
    <div className='headerNav'>
        <div className='appHeader'>
        <Button onClick={()=>{setModalOpen(true)}} typeButton="button" variant='button--primary'>Add Note</Button>
        {/* <Button onClick={()=>{console.log(notes)}} typeButton="button" variant='button--edit'>Check</Button> */}
        </div>
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
  )
}
