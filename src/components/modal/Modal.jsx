import React, { useEffect, useState } from 'react'
import Button from '../button/Button'
import "./Modal.scss"
import { useDispatch } from 'react-redux'
import { addNote } from '../store/toolkitSlice'

export default function Modal({modalOpen, setModalOpen}) {
    const [note, setNote]= useState("")
    const [tag, setTag]= useState("")
    const dispatch = useDispatch()

    function add (){
        setModalOpen(false);
        dispatch(addNote({id: Date.now(),note, tag}));
        setNote("");
    }

    useEffect(()=>{
        chechHash(note)
    }, [note])

    function chechHash(str){
        if(str.indexOf("#")>-1){
            let val = str.split(/(#[a-z\d-]+)/ig);
            for (let i = 0; i < val.length; i++) {
                if (val[i].charAt(0) === "#") {
                    setTag(val[i])
                }
            }
        } else {
            setTag("")
        }
    }

  return (
      modalOpen && (    
        <div className='modalContainer'>
            <form className='modalForm'>
                <h1>Add your Note</h1>
                <input type="text" className='modalInput' onChange={(e)=> setNote(e.target.value)}/>
                <div className='buttons'>
                    <Button onClick={()=>{add()}} typeButton="button" variant='button--accept'>Add</Button>
                    <Button onClick={()=>{setModalOpen(false)}} typeButton="button" variant='button--close'>Close</Button>  
                </div>
            </form>    
        </div>
      )
  )
}
