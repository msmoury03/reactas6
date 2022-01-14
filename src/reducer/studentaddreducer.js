const intit = [{
    "Id": "1",
    "Name": "Yogesh",
    "Age": "21",
    "Course": "MERN",
    "Batch": "March"
},

{
    "Id": "2",
    "Name": "Rohit",
    "Age": "24",
    "Course": "MERN",
    "Batch": "July"
},

{
    "Id": "3",
    "Name": "Virat",
    "Age": "22",
    "Course": "MERN",
    "Batch": "June"
},

{
    "Id": "4",
    "Name": "Kapil",
    "Age": "23",
    "Course": "MERN",
    "Batch": "May"
},]

const addstudentred = (state= intit, action)=>{
    switch (action.type) {
        case "ADD_STUDENT":
            return [...state,action.payload];

            case "UPDATE_STUDENT" :
                const updatest = state.map((val)=> val.Id==action.payload.Id ? action.payload : val)
                const newst = updatest;
                return newst ;

                case "DELETE_STUDENT":
                    const filval = state.filter((myfil)=> myfil.Id !== action.payload)
                    return filval;
                
            
            
    
        default:
            return state;
    }
}

export default addstudentred;