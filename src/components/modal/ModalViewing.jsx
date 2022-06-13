import React from 'react'
import Button from '../button/Button'
import "./Modal.scss"

export default function ModalViewing({modalViewing, setModalViewing, yourNote}) {

  return (
    modalViewing && (    
        <div className='modalContainer'>
            <form className='modalForm'>
                <h1>Your Note</h1>
                <h2 className='viewing'>{yourNote}</h2>
                <div className='buttons'>
                    <Button onClick={()=>{setModalViewing(false)}} typeButton="button" variant='button--close'>Close</Button>  
                </div>
            </form>    
        </div>
      )
  )
}
