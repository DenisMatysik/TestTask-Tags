import { combineReducers, configureStore} from "@reduxjs/toolkit"
// import toolkitSlice from "./toolkitSlice"
import noteSlice from "./noteSlice"


const rootReducer = combineReducers({
    toolkit: noteSlice
})

export const store = configureStore({
    reducer: rootReducer
})


// toolkitslice - донные храняться не в localStorage
// const rootReducer = combineReducers({
//     toolkit: toolkitSlice
// })

// export const store = configureStore({
//     reducer: rootReducer
// })