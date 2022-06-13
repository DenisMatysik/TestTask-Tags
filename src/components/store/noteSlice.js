import { createSlice } from '@reduxjs/toolkit'

const getInitialNotes=()=>{
    const localNoteList = window.localStorage.getItem("notes");
    if (localNoteList){
        return JSON.parse(localNoteList)
    } window.localStorage.setItem("notes", JSON.stringify([{ id:Date.now(),
        note:"Do #something",
        tag: "#something"}]));
}

const initialState = {
    notes: getInitialNotes(),
}

const noteSlice = createSlice({
    name: "toolkit",
    initialState: initialState,
    reducers: {
    addNote: (state,action)=>{
        const notes= window.localStorage.getItem("notes");
        state.notes.push(action.payload);
        if(notes) {
            const notesArr = JSON.parse(notes);
            notesArr.push({...action.payload});
            window.localStorage.setItem("notes", JSON.stringify(notesArr))
        } else{
            window.localStorage.setItem("notes", JSON.stringify([{...action.payload}]))
        }
    },

    removeNote: (state,action)=>{
        const notes= window.localStorage.getItem("notes");
        if (notes) {
            const notesArr = JSON.parse(notes);
            notesArr.forEach((note,index) => {
                if (note.id === action.payload){
                    notesArr.splice(index,1)
                }
            });
            window.localStorage.setItem("notes", JSON.stringify(notesArr));
            state.notes = notesArr;
        }
    },

    updateNote: (state,action)=>{
        const notes= window.localStorage.getItem("notes"); 
        if (notes){
            const notesArr = JSON.parse(notes);  
            notesArr.forEach((note) => {
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
            }); 
            window.localStorage.setItem("notes", JSON.stringify(notesArr));
            state.notes = notesArr; 
        } 
    },
    deleteTag:(state, action)=>{
        const notes= window.localStorage.getItem("notes");
        if (notes) {
            const notesArr = JSON.parse(notes);
            notesArr.forEach((note) => {
                if (note.id === action.payload){
                    note.note = note.note.split(note.tag).join(" ")
                    note.tag = ""
                }
            });
            window.localStorage.setItem("notes", JSON.stringify(notesArr));
            state.notes = notesArr;
        }
    }
}
});

export default noteSlice.reducer
export const {addNote, removeNote, updateNote,deleteTag } = noteSlice.actions