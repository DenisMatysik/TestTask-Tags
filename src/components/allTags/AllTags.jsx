import React from 'react'
import"./AllTags.scss"
import { useDispatch, useSelector } from 'react-redux'
import Button from '../button/Button'
import { deleteTag } from '../store/toolkitSlice'

export default function AllTags() {
  const notes = useSelector(state => state.toolkit.notes);
  const dispatch = useDispatch();

  return (<>
          <h2>Tags</h2>
          <div className='tagsContainer'>
              { notes.filter(value => value.tag.includes("#")).map(tagInf => (
                <div className='tag'> 
                <div id={tagInf.id} key={tagInf.id}>{tagInf.tag}</div>
                <Button onClick={()=>{dispatch(deleteTag(tagInf.id))}} typeButton="button" variant='button--close'>X</Button>
                </div>
              ))}
    </div>
  </>
  )
}
