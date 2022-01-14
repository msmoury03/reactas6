import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrasecount, Increasecount } from '../action/counteraction'


const Ourcouner = () => {

    const state = useSelector(state => state.counterreducer)
    
    

    const dispatch = useDispatch()
    
    return (
        <div>
            <button onClick={()=> dispatch(Decrasecount())}>--</button>
            {state.map((vv)=> <p>{vv.name}</p>)}
            <button onClick={()=> dispatch(Increasecount())}>++</button>


        </div>
    )
}

export default Ourcouner
