import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    notes:[
        { id:Date.now(),
        note:"Do #something",
        tag: "#something"}
            ]
}

const toolkitSlice = createSlice({
    name: "toolkit",
    initialState,
    reducers: {
        addNote :(state, action) =>{
            state.notes.push(action.payload)
        },
        removeNote :(state, action)=>{
            state.notes.forEach((note,index) => {
                if (note.id === action.payload){
                    state.notes.splice(index,1)
                }
            })
        },
        updateNote :(state, action)=>{
            state.notes.forEach((note) => {
                if (note.id === action.payload.editId){
                    note.note = action.payload.note;
                    if(note.note.indexOf("#")>-1){
                        let val = note.note.split(/(#[a-z\d-]+)/ig);
                        for (let i = 0; i < val.length; i++) {
                            if (val[i].charAt(0) === "#") {
                                note.tag = val[i]
                            }
                        }
                    } else {
                        note.tag = "";
                    }
                }
            })
        },
        deleteTag:(state, action)=>{
            state.notes.forEach((note,index) => {
                if (note.id === action.payload){
                    note.note = note.note.split(note.tag).join(" ")
                    note.tag = ""
                }
            })
        }
    }
})

export default toolkitSlice.reducer
export const {addNote, removeNote, updateNote,deleteTag } = toolkitSlice.actions