import React, { useState } from 'react'
import "./Header.scss"
import Button from '../button/Button'
import Modal from '../modal/Modal'
import { useSelector } from 'react-redux'
import Rule from '../rule/Rule'


export default function Header() {
  const [modalOpen, setModalOpen] = useState(false)
  const [rule, setRule] = useState(false)

  const notes = useSelector(state => state.toolkit.notes)

  return (
    <div className='headerNav'>
        <div className='appHeader'>
        <Button onClick={()=>{setModalOpen(true)}} typeButton="button" variant='button--primary'>Add Note</Button>
        <Button onClick={()=>{setRule(!rule)}} typeButton="button" variant='button--edit'>Watch rule</Button>
        </div>
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        <Rule rule={rule}/>
    </div>
  )
}
