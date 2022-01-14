import { combineReducers } from "redux";
import counterreducer from "./counterreducer";
import addstudentred from "./studentaddreducer";


const rootreducer = combineReducers({
    addstudentred,counterreducer
})

export default rootreducer